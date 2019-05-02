import React, {Component} from 'react';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.posts = props.posts;
  }


  render() {
    const sidebar = (
      <ul>
        {this.posts.map((post) =>
            <li key={post.id}>
                  {post.title}
            </li>
          )}
      </ul>
    );

    const content = this.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }

}

export default Blog;
