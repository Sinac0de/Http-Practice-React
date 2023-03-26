import { useEffect, useState } from "react";
import axios from "axios";

import "./fullComment.css";
const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);

  const deleteHandler = async (commentId) => {
    try {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/comments/${commentId}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (commentId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((res) => {
          setComment(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [commentId]);

  let commentDetails = <p>Please select a comment!</p>;

  if (commentId) {
    commentDetails = <p>Loading the comment...</p>;
  }

  if (comment) {
    commentDetails = (
      <div className="fullComment">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button className="delete" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    );
  }

  return commentDetails;
};

export default FullComment;
