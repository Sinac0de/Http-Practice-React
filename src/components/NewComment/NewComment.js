import "./newComment.css";
const NewComment = () => {
  return (
    <div className="newComment">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="body">Comment</label>
        <input type="textarea" id="body" />
      </div>
    </div>
  );
};

export default NewComment;
