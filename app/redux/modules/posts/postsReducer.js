
const defaultState = {
    posts:[],
    selectedUser: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SHOW_POSTS':
            return showPosts(state, action.payload);
        case 'SHOW_SELECTED_USER':
            return showUser(state, action.payload);

        default:
            return state;
    }
};

const showPosts = (state, item) => {
    return {
        ...state,
        posts: item
    }
};
const showUser = (state, item) => {
    return {
        ...state,
        selectedUser:item
    }
};