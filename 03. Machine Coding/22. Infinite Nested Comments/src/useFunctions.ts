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

  return { addComment };
};

export default useFunctions;
