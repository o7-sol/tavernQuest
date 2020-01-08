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
}

const authenticate = async({commit}, payload) => {
    try {
        const response = await API.post('/sign-in', {
            username: payload.username,
            password: payload.password
        });
        if(response.status === 200 && response.data.success && response.data.token) {
            const user = response.data.user;

            VueCookie.set('token', response.data.token);
            commit('SET_USER', user);
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
}

const reAuthenticate = async({commit}, payload) => {
    try {
        const response = await API.post('/get-user-info', {
            token: payload
        });
        if(response.status === 200 && response.data.user) {
            commit('SET_USER', response.data.user);
        }
    } catch (error) {
        
    }
}

const getStrengthItems = async ({commit}) => {
    try {
        const response = await API.get('/strength-items');
        if(response.status === 200 && response.data.items) {
            const items = response.data.items;
            return items;
        }
    } catch (error) {
        
    }
}

const getAgilityItems = async ({commit}) => {
    try {
        const response = await API.get('/agility-items');
        if(response.status === 200 && response.data.items) {
            const items = response.data.items;
            return items;
        }
    } catch (error) {
        
    }
}

const getIntellectItems = async ({commit}) => {
    try {
        const response = await API.get('/intellect-items');
        if(response.status === 200 && response.data.items) {
            const items = response.data.items;
            return items;
        }
    } catch (error) {
        
    }
}

const getVitalityItems = async ({commit}) => {
    try {
        const response = await API.get('/vitality-items');
        if(response.status === 200 && response.data.items) {
            const items = response.data.items;
            return items;
        }
    } catch (error) {
        
    }
}

const getLatestItems = async({commit}) => {
    try {
        const response = await API.get('/latest-items');
        if(response.status === 200 && response.data.items) {
            const items = response.data.items;
            return items;
        }
    } catch (error) {
        
    }
}

const getItemsDiscounts = async({commit}) => {
    try {
        const response = await API.get('/items-discounts');
        if(response.status === 200 && response.data.discounts) {
            const items = response.data.discounts;
            return items;
        }
    } catch (error) {
        
    }
}

const buyItem = async({commit}, payload) => {
    try {
        if(!payload.itemID || payload.itemID.length === 0 || payload.itemID === null) {
            return 'Something went wrong. Try again later.';
        }
        const response = await API.post('/buy-item/'+payload.itemID, {
            itemID: payload.itemID
        });     
        if(response.status === 200 && response.data.successMsg) {
            commit('SET_GOLD', response.data.gold);
            const data = {
                successMsg: response.data.successMsg,
                item: response.data.item
            }
            return data;
        }   
    } catch (error) {
        
    }
}

const getUserBankItems = async({commit}, payload) => {
    try {
        const response = await API.get('/user-bank');
        if(response.status === 200 && response.data.items) {
            return response.data.items;
        }
    } catch (error) {
        
    }
}

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
}

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
}

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
}

const getStackExchangeItems = async({commit}, payload) => {
    try {
        const response = await API.get('/stack-exchange');
        if(response.status === 200 && response.data.items) {
            commit('SET_STACK_EXCHANGE_ITEMS', response.data.items);
        }
    } catch (error) {
        
    }
}

const getStackExchangeEliteItems = async({commit}, payload) => {
    try {
        const response = await API.get('/stack-exchange-elite');
        if(response.status === 200 && response.data.items) {
            commit('SET_STACK_EXCHANGE_ELITE_ITEMS', response.data.items);
        }
    } catch (error) {
        
    }
}

const placeItemToExchange = async({commit}, payload) => {
    try {
       const itemID = await payload.itemID;
       const price = await payload.price;

       const response = await API.post('/place-item-to-stack-exchange', {
           itemID, price
       });
       if(response.status === 200 && response.data.successMsg && response.data.item) {
            const data = {
                item: response.data.item,
                message: response.data.successMsg,
                indexOfItemInBank: response.data.indexOfItemInBank,
                indexOfItemInItems: response.data.indexOfItemInItems
            }
            return data;
       }
    } catch (error) {
        
    }
}

const getMyStackExchangeItems = async({commit}, payload) => {
    try {
        const response = await API.get('/stack-exchange-items');
        if(response.status === 200 && response.data.items) {
            return response.data.items;
        }
    } catch (error) {
        
    }
}

const getMyStackExchangeItemBack = async({commit}, payload) => {
    try {
        const response = await API.post('/get-item-back-from-stack-exchange', {
            itemID: payload.itemID
        });
        if(response.status === 200 && response.data.successMsg) {
            const data = {
                title: response.data.item.title,
                image: response.data.item.img,
                type: response.data.item.type,
                itemIndex: response.data.itemIndex,
                elite: response.data.item.elite,
                item: response.data.item,
                message: response.data.successMsg
            }

            return data;
        }
    } catch (error) {
        
    }
}

const checkUserLevel = async({commit}, level) => {
    try {
        const response = await API.post('/check-user-level', {
            level
        });
        if(response.status === 200 && response.data.level) {
            return response.data.level;
        }
    } catch (error) {
        
    }
}

const getGuildTitle = async({commit}, title) => {
    try {
        const response = await API.post('/create-guild', {
            title
        });
        if(response.status === 200 && response.data.successMsg) {
            const data = {
                success: response.data.successMsg
            }
            return data;
        } else if (response.status === 200 && response.data.errMsg) {
            const data = {
                errMsg: response.data.errMsg
            }
            return data;
        }
    } catch (error) {
        console.log(error)
    }
}

const getGuildInfo = async({commit}) => {
    try {
        const response = await API.get('/guild-info');
        if(response.status === 200 && response.data.guild) {
            commit('SET_GUILD', response.data.guild);
        }
    } catch (error) {
        
    }
}

const postGuildAnnouncement = async({commit}, announcement) => {
    try {
        const response = await API.post('/guild-announcement', {
            announcement
        });
        if(response.status === 200 && response.data.success) {
            const data = {
                successMsg: 'Announcement was updated successfully'
            }
            return data;
        }
    } catch (error) {
        
    }
}

const fillTheBank = async({commit}, gold) => {
    try {
        const response = await API.post('/fill-guild-bank', {
            gold
        });
        console.log(response)
        if(response.status === 200 && response.data.success) {
            commit('SET_GOLD', response.data.gold);
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

            VueCookie.set('user', JSON.stringify(userInfo));

            const data = {
                successMsg: 'You filled the bank of the guild!',
            }
            return data;
        }
    } catch (error) {
        
    }
}

const borrowTheGold = async({commit}, payload) => {
    try {
        const response = await API.post('/borrow-guild-gold', {
            gold: payload
        });
        if(response.status === 200 && response.data.error) {
            const data = {
                error: response.data.error
            }
            return data;
        } else if(response.status === 200 && response.data.success) {
            commit('SET_GOLD', response.data.gold);
            const data = {
                success: response.data.success
            }
            return data;            
        }
    } catch (error) {
        
    }
}

const sendGuildMessage = async({commit}, payload) => {
    try {
        const response = await API.post('/send-guild-message', {
            message: payload
        });
        if(response.status === 200 && response.data.message) {
            const data = {
                message: response.data.message
            }
            return data;
        }
        if(response.status === 200 && response.data.error) {
            const data = {
                error: response.data.error
            }
            return data;
        }
    } catch (error) {
        
    }
}

const getGuildMessages = async({commit}, payload) => {
    try {
        const response = await API.get('/guild-messages');
        if(response.status === 200 && response.data.guildMessages) {
            commit('SET_GUILD_MESSAGES', response.data.guildMessages);
        }
    } catch (error) {
        
    }
}

const getGuilds = async({commit}, payload) => {
    try {
        const response = await API.get('/guilds');
        if(response.status === 200 && response.data.guilds) {
            commit('SET_GUILDS', response.data.guilds);
        }
    } catch (error) {
        
    }
}

const applyToGuild = async({commit}, payload) => {
    try {
        const response = await API.post('/apply-to-guild', {
            guildID: payload
        });
        if(response.status === 200 && response.data.success) {
            const data = {
                success: response.data.success
            }
            return data;
        } else if(response.status === 200 && response.data.error) {
            const data = {
                error: response.data.error
            }
            return data;
        }
    } catch (error) {
        
    }
}

const buyItemFromStackExchange = async({commit}, payload) => {
    try {
        const response = await API.post('/buy-item-from-stack-exchange', {
            itemID: payload
        });
        if(response.status === 200 && response.data.success) {
            return response.data;
        }
    } catch (error) {
        
    }
}

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
    getUserBankItems,
    placeItemToBank,
    placeItemToInventoryFromBank,
    placeItemToBankFromInventory,
    getStackExchangeItems,
    getStackExchangeEliteItems,
    placeItemToExchange,
    getMyStackExchangeItems,
    getMyStackExchangeItemBack,
    checkUserLevel,
    getGuildTitle,
    getGuildInfo,
    postGuildAnnouncement,
    fillTheBank,
    reAuthenticate,
    borrowTheGold,
    sendGuildMessage,
    getGuildMessages,
    getGuilds,
    applyToGuild,
    buyItemFromStackExchange
}