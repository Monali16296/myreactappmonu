import React, {Component} from 'react';

class BlogNew extends Component {
  constructor(props) {
    super(props);
    this.posts = props.posts;
  }

  render() {
    const a1 = this.posts.map((post) =>
      <Post key={post.id} title={post.title} content={post.content}/>
    );
    return (
      <div>
        <h1></h1>
        {a1}
      </div>
    );
  }

}

function Post(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default BlogNew;