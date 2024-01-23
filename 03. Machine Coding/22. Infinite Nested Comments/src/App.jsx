import { useState } from "react";
import "./App.css";
import Comments from "../src/components/comments/comment";
import { commentData } from "./Data/commentData.js";

function App() {
  const [comments, setComments] = useState(commentData);

  // for adding the comments -> commentId and comment is needed for insertion
  const handleAddComments = (commentId, comment) => {
    console.log(commentId, comment, "hello");
  };
  return (
    <div className="App">
      <Comments
        key={comments.id}
        comments={comments}
        handleAddComments={handleAddComments}
      />
    </div>
  );
}

export default App;

/*

1. To render the comments on page
// Nested component rendering
2. Call the comment components recursively
3. Add paddingLeft to represnt the comments as nested
// Reply functionality
4. Add input field when click on reply
5. Add the reply in the comment array
6. Also add CANCEL & ADD button

*/
