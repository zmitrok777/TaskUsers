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
                    <div className='user' onClick={() =>{this.showPosts(item.id, item)}}>
                        <h3>{item.name}</h3>
                        <p>{item.username}</p>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                    </div>
                </Link>

            ));
        };

        this.showPosts = (id, user) => {
            this.state.userPosts = [];
            this.setState({userPosts: this.state.userPosts});
            this.state.posts.forEach((item)=>{
                if(item.userId == id) {
                    this.state.userPosts.push(item);
                    this.state.selectedUser = user;
                    this.setState({
                        userPosts: this.state.userPosts,
                        selectedUser: user
                    });
                }
            });
        };
        this.posts = fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({posts: json});
            });
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