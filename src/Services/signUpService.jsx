import http from "./httpService";

export const SignUpUser = (data) => {
  return http.post("/user/register", data);
};
