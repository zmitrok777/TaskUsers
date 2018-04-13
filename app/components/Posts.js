import React, {Component} from 'react'
import Comments from "./Comments";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postComments: [],
            selectedPost: []
        };
        this.showUserPosts = () => {
            return this.props.value.map((item) => {
               return (
                   <Link to='/post/comments' key={item.id}>
                       <div onClick={()=> {
                           this.showComments(item.id);
                           this.selectPost(item);
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
        this.showComments = (id) => {
            this.setState({postComments: []});
            fetch('https://jsonplaceholder.typicode.com/comments?postId='+id)
                .then(response => response.json())
                .then(json => {
                    this.setState({postComments: json});
                });
        };
        this.selectPost = (post) => {
            this.setState({selectedPost: post});
        };
    }
        render() {

        const PostsComponent = () => {
          return (
              <div>
                  <div>{this.showUserPosts()}</div>
              </div>
          );
        };
        const CommentsComponent = () => {
          return (
               <Comments value={this.state.postComments} post={this.state.selectedPost}/>
          );
        };
                return (
                    <Router>
                        <div>
                            <div className='user'>
                                <p className='userName'><strong>{this.props.user.name}</strong><br/>{this.props.user.company.name}</p>
                                <p className='contacts'>{this.props.user.email} <br/> {this.props.user.phone}</p>
                            </div>
                            <Route path='/posts' component={PostsComponent}/>
                            <Route path='/post/comments' component={CommentsComponent}/>
                        </div>
                    </Router>
                )
            }
    }

export default Posts;