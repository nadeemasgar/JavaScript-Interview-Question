import "./comments.css";

const Comments = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      <div className="comment-container">
        <h3>{comments.text}</h3>
        <div>
          <button>Reply</button>
          <button>Delete</button>
        </div>
      </div>
      <div style={{ paddingLeft: 25 }}>
        {comments?.replies?.map((ele) => (
          <Comments key={ele.id} comments={ele} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
