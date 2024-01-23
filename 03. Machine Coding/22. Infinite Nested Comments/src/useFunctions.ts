export const useFunctions = () => {
  const addComment = (tree, commentId, newComment) => {
    if (tree.id === commentId) {
      tree.replies.unshift(newComment);
      return tree;
    }

    const updatedReplies = tree.replies.map((ele) =>
      addComment(ele, commentId, newComment)
    );
    return { ...tree, replies: updatedReplies }; // Important- old tree remain same, only the replies changes
  };

  const deleteComment = (tree, commentId) => {
    if (tree.id === commentId) {
      return tree.replies.filter((ele) => ele.id !== commentId);
    }

    const updatedReplies = tree.replies.map((ele) =>
      deleteComment(ele, commentId)
    );
    return { ...tree, replies: updatedReplies };
  };

  return { addComment, deleteComment };
};

export default useFunctions;
