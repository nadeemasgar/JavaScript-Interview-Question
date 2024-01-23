import { useState } from "react";
import "./comments.css";

const Comments = ({ comments, handleAddComments }) => {
  const [showInput, setShowInput] = useState(false);
  const [commentBody, setCommentBody] = useState("");

  // To add the new comment
  const handleAdd = () => {
    const newComments = {
      id: Date.now(),
      text: commentBody,
      replies: [],
    };
    handleAddComments(comments.id, newComments);
    setShowInput(false);
  };
  return (
    <div>
      <div className="comment-container">
        <h3>{comments.text}</h3>
        {showInput && (
          <input
            type="text"
            autoFocus
            onChange={(e) => setCommentBody(e.target.value)}
          />
        )}
        {showInput ? (
          <div>
            <button onClick={handleAdd}>Add</button>
            <button onClick={() => setShowInput(false)}>Cancel</button>
          </div>
        ) : (
          <div>
            <button onClick={() => setShowInput(true)}>Reply</button>
            <button>Delete</button>
          </div>
        )}
      </div>
      <div style={{ paddingLeft: 25 }}>
        {comments?.replies?.map((ele) => (
          <Comments
            key={ele.id}
            comments={ele}
            handleAddComments={handleAddComments}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
