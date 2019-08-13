const SET_TOKEN = (state, payload) => {
    state.token = payload;
};

const SET_USER_ITEMS = (state, payload) => {
    state.user_items = payload;
};

const SET_STACK_EXCHANGE_ITEMS = (state, payload) => {
    state.stack_exchange_items = payload;
};

const SET_STACK_EXCHANGE_ELITE_ITEMS = (state, payload) => {
    state.stack_exchange_elite_items = payload;
};

const SET_GUILD = (state, payload) => {
    state.guild = payload;
};

export default {
    SET_TOKEN,
    SET_USER_ITEMS,
    SET_STACK_EXCHANGE_ITEMS,
    SET_STACK_EXCHANGE_ELITE_ITEMS,
    SET_GUILD
}