import MainPage from './MainPage.js'
import  React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <MainPage/>
    </Provider>,
    document.getElementById('root')
);