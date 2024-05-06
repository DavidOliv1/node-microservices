import axios from "axios";
import { useEffect, useState } from "react";
import CommentCreate from "./comment-create";
import CommentList from "./comment-list";

export interface Comment {
  id: string;
  content: string;
  status: string;
}

interface Posts {
  [key: string]: { id: string; title: string; comments: Comment[] };
}

function PostList() {
  const [posts, setPosts] = useState<Posts>({});
  console.log(posts);

  useEffect(() => {
    axios.get("http://localhost:4002/posts").then((r) => setPosts(r.data));
  }, []);

  const renderedPosts = Object.values(posts).map((post) => (
    <div key={post.id}>
      <div>
        <h3>{post.title}</h3>
        <CommentList comments={post.comments} />
        <CommentCreate postId={post.id} />
      </div>
    </div>
  ));

  return <div>{renderedPosts}</div>;
}

export default PostList;
