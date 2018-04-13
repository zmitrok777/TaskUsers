import React, {Component} from 'react'
import Comments from "./Comments";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allComments: [],
            postComments: [],
            selectedPost: []
        };
        this.showUserPosts = () => {
            return this.props.value.map((item) => {
               return (
                   <Link to='/comments' key={item.id}>
                       <div onClick={()=>this.showComments(item.id, item)}>
                           <p>{item.id}  {item.body}</p>
                       </div>
                   </Link>
               )
            });
        };
        this.showComments = (id, post) => {
            this.state.postComments = [];
            this.setState({postComments: this.state.postComments});
            this.state.allComments.forEach((item)=>{
                if(item.postId == id) {
                    this.state.postComments.push(item);
                    this.state.selectedPost = post;
                    this.setState({
                        postComments: this.state.postComments,
                        selectedPost: post
                    });
                }
            });
        };
        this.comments = fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => {
                this.setState({allComments: json});
            });
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
                                <h1>{this.props.user.name}</h1>
                                <p>{this.props.user.username}</p>
                                <p>{this.props.user.email}</p>
                                <p>{this.props.user.phone}</p>
                            </div>
                            <Route path='/posts' component={PostsComponent}/>
                            <Route path='/comments' component={CommentsComponent}/>
                        </div>
                    </Router>
                )
            }
    }

export default Posts;