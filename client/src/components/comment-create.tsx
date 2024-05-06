import { useState } from "react";
import axios from "axios";

function CommentCreate({ postId }: { postId: string }) {
  const [comment, setComment] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content: comment,
    });
    setComment("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>New Comment</label>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CommentCreate;
