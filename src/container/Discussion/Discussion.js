import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import axios from "axios";
import "./discussion.css";

const Discussion = () => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComments(data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };

    getComments();
  }, []);

  return (
    <>
      <section>
        {comments ? (
          comments.map((c) => (
            <Comment key={c.id} name={c.name} email={c.email} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <section>
        <FullComment />
      </section>
      <section>
        <NewComment />
      </section>
    </>
  );
};

export default Discussion;
