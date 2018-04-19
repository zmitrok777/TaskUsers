import React, {Component} from 'react';
import './index.css';
import Users from './components/Users';
import {connect} from "react-redux";

class MainPage extends Component {


    render() {
        return (
                <Users/>
        )
    }
}
const mapStateToProps = (state) => ({
    users: state.usersReducer.users,
});
export default connect(mapStateToProps)(MainPage);
