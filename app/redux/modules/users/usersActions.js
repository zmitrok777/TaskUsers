export const showUsers = () => dispatch => {
    const getUsers = () => {
        return dispatch => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    dispatch({ type: 'SHOW_USERS', payload: json });
                });

        }
    };
    dispatch(getUsers());
};