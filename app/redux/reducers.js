import {combineReducers} from 'redux';
import postsReducer from './modules/posts/postsReducer';
import usersReducer from './modules/users/usersReducer';
import commentsReducer from './modules/comments/commentsReducer';

const reducers = combineReducers({
    usersReducer,
        postsReducer,
            commentsReducer
});

export default reducers;