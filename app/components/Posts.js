import React, {Component} from 'react'
import Comments from "./Comments";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showComments, showSelectedPost} from '../redux/modules/comments/commentsActions';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.showUserPosts = () => {
            return this.props.posts.map((item) => {
               return (
                   <Link to='/post/comments' key={item.id}>
                       <div onClick={()=> {
                           this.handleShowComments(item);
                       }}>
                           <div className='text'>
                                <p>{item.id}</p>
                                <p className='postText'>{item.title}</p>
                           </div>
                       </div>
                   </Link>
               )
            });
        };
        this.handleShowComments = (item) => {
            this.props.showSelectedPost(item);
            this.props.showComments(item);
        };
    }
        render() {
        const PostsComponent = () => {
          return (
                  <div className='userPosts'>{this.showUserPosts()}</div>
          );
        };
        const CommentsComponent = () => {
          return (
               <Comments/>
          );
        };
                return (
                    <Router>
                        <div>
                            <div className='user'>
                                <p className='userName'><strong>{this.props.selectedUser.name}</strong><br/>{this.props.selectedUser.company.name}</p>
                                <p className='contacts'>{this.props.selectedUser.email} <br/> {this.props.selectedUser.phone}</p>
                            </div>
                            <Route path='/posts' component={PostsComponent}/>
                            <Route path='/post/comments' component={CommentsComponent}/>
                        </div>
                    </Router>
                )
            }
    }

const mapStateToProps = (state) => ({
    posts: state.postsReducer.posts,
        selectedUser: state.postsReducer.selectedUser
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
    showComments,
        showSelectedPost
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
