import { useEffect, useState } from "react";
import axios from "axios";

import "./fullComment.css";
const FullComment = ({ commentId, setComments, setSelectedId }) => {
  const [comment, setComment] = useState(null);

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:3001/comments/${commentId}`);
      const { data } = await axios.get("http://localhost:3001/comments/");
      setComments(data);
      setComment(null);
      setSelectedId(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
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
