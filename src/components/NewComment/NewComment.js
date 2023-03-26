import { useState } from "react";
import axios from "axios";
import "./newComment.css";
const NewComment = ({ onAddPost }) => {
  const [comment, setComment] = useState(null);

  const changeHandler = (e) => {
    setComment({
      ...comment,
      id: Date.now,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="newComment">
      <h2>Add a new comment</h2>
      <div className="formControl">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={changeHandler} />
      </div>
      <div className="formControl">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={changeHandler} />
      </div>
      <div className="formControl">
        <label htmlFor="body">body</label>
        <textarea id="body" onChange={changeHandler} name="body"></textarea>
      </div>
      <button onClick={() => onAddPost(comment)}>Add a new comment</button>
    </div>
  );
};

export default NewComment;
