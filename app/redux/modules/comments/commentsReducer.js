const defaultState = {
    comments:[],
    selectedPost: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SHOW_COMMENTS':
            return showComments(state, action.payload);
        case 'SHOW_SELECTED_POST':
            return showSelectedPost(state, action.payload);
        default:
            return state;
    }
};

const showComments = (state, item) => {

    return {
        ...state,
        comments: item
    }
};

const showSelectedPost = (state, item) => {
    return {
        ...state,
        selectedPost:item
    }
};