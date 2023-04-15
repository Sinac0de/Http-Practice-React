import NewCommentPage from "./pages/NewCommentPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
  { path: "/new-comment", component: NewCommentPage },
  { path: "/", component: HomePage, exact: true },
  { component: NotFoundPage },
  //we could also use path="*" for Not-Found
];

export default routes;
