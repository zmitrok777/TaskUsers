import React, {Component} from 'react';
import {connect} from "react-redux";

class Comments extends Component {
    constructor(props) {
        super(props);

        this.showComments = () => {
          return this.props.comments.map((item) => {
              return (
                  <div key={item.id} className='comment'>
                      <h1>{item.name}</h1>
                      <p>{item.email}</p>
                      <p>{item.body}</p>
                  </div>
              );
          });
        };
    }

    render() {
        return (
            <div>
                <div className='text'>
                    <p>{this.props.selectedPost.id}</p>
                    <p className='postText'>{this.props.selectedPost.title}<br/> <br/>{this.props.selectedPost.body}</p>
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