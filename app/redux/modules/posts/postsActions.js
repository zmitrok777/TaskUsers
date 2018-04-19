export const showPosts = (item) => dispatch => {
    const getPosts = (item) => {
        return dispatch => {
            fetch('https://jsonplaceholder.typicode.com/posts?userId='+item.id)
                .then(response => response.json())
                .then(json => {
                    dispatch({ type: 'SHOW_POSTS', payload: json});
                });

        }
    };
    dispatch(getPosts(item));
};

export const showSelectedUser = (item) => dispatch => {
    return dispatch({type:'SHOW_SELECTED_USER', payload: item});
};
