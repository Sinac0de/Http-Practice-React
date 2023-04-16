import { useEffect, useState } from "react";
import Comment from "./Comment/Comment";
import { toast } from "react-toastify";
import { getAllComments } from "../../services/getAllCommentsService";

import "./commentsList.css";
import { Link } from "react-router-dom";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (error) {
        setError(true);
      }
    };

    getComments();
  }, []);

  const renderComments = () => {
    let renderValue = <p>Loading...</p>;

    if (error) {
      renderValue = <p>Fetching data failed!</p>;
      toast.error("There is an error!");
    }

    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Link to={`/comments/${c.id}`} key={c.id}>
          <Comment name={c.name} email={c.email} />
        </Link>
      ));
    }

    return renderValue;
  };

  return (
    <>
      <section>{renderComments()}</section>
    </>
  );
};

export default Discussion;
