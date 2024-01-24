import "./styles.css";
import React, { useState } from "react";

function Comment({ comments, addComments, deleteComments }) {
  const [showInput, setShowInput] = useState(false);
  const [commentBody, setCommentBody] = useState("");

  const handleAddClick = () => {
    const newComment = {
      id: Date.now(),
      text: commentBody,
      replies: [],
    };

    addComments(comments.id, newComment);
    setShowInput(false);
  };
  return (
    <>
      <div className={`${comments.text && "container"}`}>
        <div className="text">{comments.text}</div>
        {showInput ? (
          <>
            <input
              type="text"
              autoFocus
              onChange={(e) => setCommentBody(e.target.value)}
            />
            <div className="button-container">
              <button onClick={handleAddClick}>Add</button>
              <button onClick={() => setShowInput(false)}>Cancel</button>
            </div>
          </>
        ) : comments.text ? (
          <>
            <div className="button-container">
              <button onClick={() => setShowInput(true)}>Reply</button>
              <button onClick={() => deleteComments(comments.id)}>
                Delete
              </button>
            </div>
          </>
        ) : null}
      </div>
      <div style={{ paddingLeft: "30px" }}>
        {comments?.replies?.map((reply) => (
          <Comment
            key={reply.id}
            comments={reply}
            addComments={addComments}
            deleteComments={deleteComments}
          />
        ))}
      </div>
    </>
  );
}

export default Comment;
