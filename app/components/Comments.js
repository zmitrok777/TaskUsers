import React, {Component} from 'react';
import {connect} from "react-redux";

class Comments extends Component {
    constructor(props) {
        super(props);

        this.showComments = () => {
          return this.props.comments.map((item) => {
              return (
                  <div key={item.id} className='comment'>
                      <h1 className='titleComments'>{item.name}</h1>
                      <p>{item.email}</p>
                      <p>{item.body}</p>
                  </div>
              );
          });
        };
    }

    render() {
        const postId = this.props.selectedPost.id;
        return (
            <div>
                <div className='text'>
                    <p>{postId}</p>
                    <p className='postText'>{postId}<br/> <br/>{postId}</p>
                </div>
                <div>
                    {this.showComments()}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    comments: state.commentsReducer.comments,
    selectedPost:   state.commentsReducer.selectedPost
});

export default connect(mapStateToProps)(Comments);