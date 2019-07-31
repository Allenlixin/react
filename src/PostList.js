import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.timer = null;
    this.handleVote = this.handleVote.bind(this);
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: "大家一起来讨论React吧",
            author: "张四",
            data: "2019-07-11"
          },
          {
            id: 2,
            title: "大家一起来讨论React吧",
            author: "张三",
            data: "2019-07-11"
          },
          {
            id: 3,
            title: "大家一起来讨论React吧",
            author: "张五",
            data: "2019-07-11"
          }
        ]
      });
    }, 1000);
  }
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  handleVote(id) {
    const posts = this.state.posts.map(item => {
      const newItem =
        item.id === id
          ? {
              ...item,
              vote: ++item.vote
            }
          : item;
      return newItem;
    });
    this.setState({
      posts
    });
  }
  render() {
    return (
      <div>
        帖子列表:
        <ul>
          {this.state.posts.map(item => (
            <PostItem>
              post={item}
              onVote={this.handleVote}
            </PostItem>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
