import http from "./httpServices";

export function addNewComment(comment) {
  return http.post("/comments", comment);
}
