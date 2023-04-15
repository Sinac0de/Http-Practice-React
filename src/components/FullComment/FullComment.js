import { useEffect, useState } from "react";
import { deleteComment } from "../../services/deleteCommentService";
import { getAllComments } from "../../services/getAllCommentsService";
import { getOneComment } from "../../services/getOneCommentService";
import "./fullComment.css";

const FullComment = ({ setComments, setSelectedId, match }) => {
  const [comment, setComment] = useState(null);
  const commentId = match.params.id;

  const deleteHandler = async () => {
    try {
      await deleteComment(commentId);
      const { data } = await getAllComments();
      setComments(data);
      setComment(null);
      setSelectedId(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
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
