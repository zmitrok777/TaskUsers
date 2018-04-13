import React, {Component} from 'react';

class Comments extends Component {
    constructor(props) {
        super(props);

        this.showComments = () => {
          return this.props.value.map((item) => {
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
                <div>
                    <p>{this.props.post.id}  {this.props.post.title}</p>
                    <p>{this.props.post.body}</p>
                </div>
                <div>
                    {this.showComments()}
                </div>
            </div>
        );
    }
}

export default Comments