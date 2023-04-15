import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <>
      <p>404 - Not Found!</p>
      <Link to="/">Go to home page</Link>
    </>
  );
};

export default NotFoundPage;
