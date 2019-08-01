import API from '../api';
import router from '../router';
import VueCookie from 'vue-cookie';

const createAccount = async ({commit}, payload) => {
    try {
        const response = await API.post('/create-account', {
            username: payload.username,
            password: payload.password,
            type: payload.type
        });
        if(response.status === 200 && response.data.success) {
            const data = {
                successMsg: response.data.success
            }
            return data;
        }
    }
    catch (error) {
        const data = {
            errorMsg: 'User was not created. Something went wrong. Please try again.'
        }
        return data;
    }
};

const authenticate = async({commit}, payload) => {
    try {
        const response = await API.post('/sign-in', {
            username: payload.username,
            password: payload.password
        });
        if(response.status === 200 && response.data.success && response.data.token) {
            const user = response.data.user;

            const userInfo = {
                username: user.username,
                class: user.class,
                heroImg: user.heroImg,
                strength: user.strength,
                vitality: user.vitality,
                agility: user.agility,
                intellect: user.intellect,
                level: user.level,
                gold: user.gold,
                experience: user.experience,
                items: user.items
            }

            VueCookie.set('token', response.data.token);
            VueCookie.set('user', JSON.stringify(userInfo));

            commit('SET_TOKEN', response.data.token);

        } else if (response.data.error) {
            const data = {
                error: response.data.error
            }
            return data;
        }
    }
    catch (error) {
        const data = {
            errorMsg: 'Something went wrong. Please try again.'
        }
        return data;
    }    
};

export default {
    createAccount,
    authenticate
}