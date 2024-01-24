import { useState } from "react";
import "./App.css";
import jsonData from "./Data/data";
import Comment from "./components/comments";
import useComment from "./useComment";

function App() {
  const [comments, setComments] = useState(jsonData);
  const [addCommentHandler, deleteCommentHandler] = useComment();

  const addComments = (commentId, comment) => {
    const updatedTree = addCommentHandler(comments, commentId, comment);
    setComments(updatedTree);
  };

  const deleteComments = (commentId) => {
    const updatedTree = deleteCommentHandler(comments, commentId);
    setComments(updatedTree);
  };
  return (
    <>
      <Comment
        key={comments.id}
        comments={comments}
        addComments={addComments}
        deleteComments={deleteComments}
      />
    </>
  );
}

export default App;
