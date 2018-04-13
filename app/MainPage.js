import React, {Component} from 'react';
import User from './components/Users.js';
import './index.css';

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users:[],
            comments:[]
        };
        this.users = fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.setState({users: json});
            });
    }

    render() {

        return (
                <User value={this.state.users}/>
        )
    }
}
export default MainPage;
