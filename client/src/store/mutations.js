const SET_TOKEN = (state, payload) => {
    state.token = payload;
}

const SET_USER_ITEMS = (state, payload) => {
    state.user_items = payload;
}

export default {
    SET_TOKEN,
    SET_USER_ITEMS
}