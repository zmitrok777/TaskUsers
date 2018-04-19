import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Posts from './Posts.js';
import {connect} from 'react-redux';
import {showPosts} from '../redux/modules/posts/postsActions';
import {bindActionCreators} from 'redux';
import {showUsers} from '../redux/modules/users/usersActions';
import {showSelectedUser} from '../redux/modules/posts/postsActions';


class Users extends Component {
    constructor(props) {
        super(props);
        this.showUsers = () => {
            if(this.props.users.length === 0) {
                this.props.showUsers();
            }
            return this.props.users.map((item)=>(
                <Link to='/posts' key={item.id}>
                    <div className='user' onClick={() =>{
                        this.handleShowPosts(item);
                    }}>
                         <p className='userName'><strong>{item.name}</strong><br/>{item.company.name}</p>
                         <p className='contacts'>{item.email} <br/> {item.phone}</p>
                    </div>
                </Link>

            ));
        };

        this.handleShowPosts = (item) => {
            this.props.showSelectedUser(item);
            this.props.showPosts(item);
        }
    }


    render() {
        const userPosts = () => {
            return (
                <Posts/>
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
const mapStateToProps = (state) => ({
    users: state.usersReducer.users,
    posts: state.postsReducer.posts,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
    showPosts,
        showUsers,
            showSelectedUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);
