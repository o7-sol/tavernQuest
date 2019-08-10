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

const getStrengthItems = async ({commit}) => {
    try {
        const response = await API.get('/strength-items');
        if(response.status === 200 && response.data.items) {
            const items = response.data.items;
            return items;
        }
    } catch (error) {
        
    }
};

const getAgilityItems = async ({commit}) => {
    try {
        const response = await API.get('/agility-items');
        if(response.status === 200 && response.data.items) {
            const items = response.data.items;
            return items;
        }
    } catch (error) {
        
    }
};

const getIntellectItems = async ({commit}) => {
    try {
        const response = await API.get('/intellect-items');
        if(response.status === 200 && response.data.items) {
            const items = response.data.items;
            return items;
        }
    } catch (error) {
        
    }
};

const getVitalityItems = async ({commit}) => {
    try {
        const response = await API.get('/vitality-items');
        if(response.status === 200 && response.data.items) {
            const items = response.data.items;
            return items;
        }
    } catch (error) {
        
    }
};

const getLatestItems = async({commit}) => {
    try {
        const response = await API.get('/latest-items');
        if(response.status === 200 && response.data.items) {
            const items = response.data.items;
            return items;
        }
    } catch (error) {
        
    }
};

const getItemsDiscounts = async({commit}) => {
    try {
        const response = await API.get('/items-discounts');
        if(response.status === 200 && response.data.discounts) {
            const items = response.data.discounts;
            return items;
        }
    } catch (error) {
        
    }
};

const buyItem = async({commit}, payload) => {
    try {
        if(!payload.itemID || payload.itemID.length === 0 || payload.itemID === null) {
            return 'Something went wrong. Try again later.';
        }
        const response = await API.post('/buy-item/'+payload.itemID, {
            itemID: payload.itemID
        });     
        if(response.status === 200 && response.data.successMsg) {
            const data = {
                successMsg: response.data.successMsg,
                item: response.data.item
            }
            return data;
        }   
    } catch (error) {
        
    }
};

const getUserItems = async({commit}, payload) => {
    try {
        const response = await API.get('/user-items');
        if(response.status === 200 && response.data.items) {
            commit('SET_USER_ITEMS', response.data.items);
        }
    } catch (error) {
        
    }
};

const getUserBankItems = async({commit}, payload) => {
    try {
        const response = await API.get('/user-bank');
        if(response.status === 200 && response.data.items) {
            return response.data.items;
        }
    } catch (error) {
        
    }
};

const placeItemToBank = async ({commit}, payload) => {
    try {
       const response = await API.post('/place-item-to-bank', {
            itemID: payload.itemID,
            index: payload.index
        });
        if (response.status === 200 && response.data.success) {
            const data = {
                successMsg: 'Placed to the bank successfully'
            };
            return data;
        }
    } catch (error) {
        
    }
};

const placeItemToInventoryFromBank = async ({commit}, payload) => {
    try {
        const response = await API.post('/place-item-to-inventory', {
            itemID: payload.itemID,
            index: payload.index
        });
        if (response.status === 200 && response.data.success) {
            const data = {
                successMsg: 'Placed to the inventory successfully'
            };
            return data;
        }
    } catch (error) {
        
    }
};

const placeItemToBankFromInventory = async({commit}, payload) => {
    try {
        const response = await API.post('/place-item-from-inventory-to-bank', {
            itemID: payload.itemID,
            index: payload.index
        });
        if(response.status === 200 && response.data.success) {
            const data = {
                successMessage: response.data.success,
                item: response.data.item
            }
            return data;
        }
    } catch (error) {
        
    }
};

const getStackExchangeItems = async({commit}, payload) => {
    try {
        const response = await API.get('/stack-exchange');
        if(response.status === 200 && response.data.items) {
            commit('SET_STACK_EXCHANGE_ITEMS', response.data.items);
        }
    } catch (error) {
        
    }
};

const getStackExchangeEliteItems = async({commit}, payload) => {
    try {
        const response = await API.get('/stack-exchange-elite');
        if(response.status === 200 && response.data.items) {
            commit('SET_STACK_EXCHANGE_ELITE_ITEMS', response.data.items);
        }
    } catch (error) {
        
    }
};

const placeItemToExchange = async({commit}, payload) => {
    try {
       const itemID = await payload.itemID;
       const price = await payload.price;

       const response = await API.post('/place-item-to-stack-exchange', {
           itemID, price
       });
       console.log(response)
    } catch (error) {
        
    }
};

export default {
    createAccount,
    authenticate,
    getStrengthItems,
    getAgilityItems,
    getIntellectItems,
    getVitalityItems,
    getLatestItems,
    getItemsDiscounts,
    buyItem,
    getUserItems,
    getUserBankItems,
    placeItemToBank,
    placeItemToInventoryFromBank,
    placeItemToBankFromInventory,
    getStackExchangeItems,
    getStackExchangeEliteItems,
    placeItemToExchange
}