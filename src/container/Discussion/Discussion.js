import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import axios from "axios";
import "./discussion.css";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/comments");
        setComments(data);
      } catch (error) {
        setError(true);
      }
    };

    getComments();
  }, []);

  const handleSelectComment = (id) => {
    setSelectedId(id);
  };

  const postCommentHandler = (comment) => {
    axios
      .post("http://localhost:3001/comments", comment)
      .then(() => axios.get("http://localhost:3001/comments"))
      .then((res) => setComments(res.data))
      .catch((err) => setError(true));
  };

  const renderComments = () => {
    let renderValue = <p>Loading...</p>;

    if (error) {
      renderValue = <p>Fetching data failed!</p>;
    }

    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          onClick={() => handleSelectComment(c.id)}
        />
      ));
    }

    return renderValue;
  };

  return (
    <>
      <section>{renderComments()}</section>
      <section>
        <FullComment commentId={selectedId} />
      </section>
      <section>
        <NewComment onAddPost={postCommentHandler} />
      </section>
    </>
  );
};

export default Discussion;
