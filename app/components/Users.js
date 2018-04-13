import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Posts from './Posts.js';


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
            userPosts:[],
            selectedUser:{}
        };

        this.showUsers = () => {
            return this.props.value.map((item)=>(
                <Link to='/posts' key={item.id}>
                    <div className='user' onClick={() =>{
                        this.showPosts(item.id, item);
                        this.selectUser(item);
                    }}>
                        <p className='userName'><strong>{item.name}</strong><br/>{item.company.name}</p>
                        <p className='contacts'>{item.email} <br/> {item.phone}</p>
                    </div>
                </Link>

            ));
        };

        this.selectUser = (user) => {
            this.setState({ selectedUser: user});
        };

        this.showPosts = (id) => {
            this.setState({userPosts: []});
            fetch('https://jsonplaceholder.typicode.com/posts?userId='+id)
                .then(response => response.json())
                .then(json => {
                    this.setState({userPosts: json});
                });
        };
    }


    render() {
        const userPosts = () => {
            return (
                <Posts value={this.state.userPosts} user={this.state.selectedUser}/>
            )
        };
        const userComponent = () => {
            return(
                <div className='allUsers'>
                    <OwlCarousel loop autoWidth items={5} className='owl-theme' nav>
                        {this.showUsers()}
                    </OwlCarousel>
                </div>
            )
        };

        return (
            <Router>
                <div className='wrapper'>
                        <Route exact path='/' component={userComponent}/>
                        <Route path='/posts' component={userPosts}/>
                </div>
            </Router>
        )
    }
}

export default Users;