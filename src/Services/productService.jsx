import http from "./httpService";

export const product = () => {
  return http.get("/product");
};
