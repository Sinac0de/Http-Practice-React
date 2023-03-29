import http from "./httpServices";

export function addNewComment(data) {
  const token = "SECURE TOKEN";
  const header = {
    headers: {
      Authorization: token,
    },
  };
  return http.post("/comments", data, header);
}

//for put:
//for example we wanna change number 1 to the data
//http.put("/comments/1",data)
