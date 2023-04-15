import NewCommentPage from "./pages/NewCommentPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import FullComment from "./components/FullComment/FullComment";

const routes = [
  { path: "/comments/:id", component: FullComment },
  { path: "/new-comment", component: NewCommentPage },
  { path: "/", component: HomePage, exact: true },
  { component: NotFoundPage },
  //we could also use path="*" for Not-Found
];

export default routes;
