const defaultState = {
    users: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SHOW_USERS':
            return showUsers(state, action.payload);

        default: return state;
    }
};

const showUsers = (state,items) => {
    return {
        ...state,
        users: items
    };
};