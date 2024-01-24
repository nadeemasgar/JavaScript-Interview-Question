const useComment = () => {
  const addCommentHandler = (tree, commentId, comment) => {
    if (tree.id === commentId) {
      tree.replies.unshift(comment);
      return tree;
    }

    const updatedReplies = tree?.replies?.map((reply) =>
      addCommentHandler(reply, commentId, comment)
    );
    return { ...tree, replies: updatedReplies };
  };

  const deleteCommentHandler = (tree, commentId) => {
    if (tree.id === commentId) {
      return [];
    }

    const updatedReplies = tree.replies.map((reply) =>
      deleteCommentHandler(reply, commentId)
    );
    return { ...tree, replies: updatedReplies };
  };

  return [addCommentHandler, deleteCommentHandler];
};

export default useComment;
