import NewComment from "./pages/NewComment/NewComment";
import FullComment from "./pages/FullComment/FullComment";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
  { path: "/comments/:id", component: FullComment },
  { path: "/new-comment", component: NewComment },
  { path: "/", component: HomePage, exact: true },
  { component: NotFoundPage },
  //we could also use path="*" for Not-Found
];

export default routes;
