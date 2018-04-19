export const showComments = (item) => dispatch => {
    const getComments = (item) => {
        return dispatch => {
            fetch('https://jsonplaceholder.typicode.com/comments?postId='+item.id)
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    dispatch({ type: 'SHOW_COMMENTS', payload: json});
                });

        }
    };
    dispatch(getComments(item));
};

export const showSelectedPost = (item) => dispatch => {
    return dispatch({type: 'SHOW_SELECTED_POST', payload:item});
};