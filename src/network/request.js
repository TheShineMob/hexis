import axios from "axios";

export function request(config) {

  const instance = axios.create({
    baseURL: "https://server.hexis.cn/app/shop/shop/",
    timeout: 5000
  });

  instance.interceptors.request.use(config => {
    return config;
  }, error => {
    return error;
  });

  instance.interceptors.response.use(result => {
    return result.data
  }, error => {
    return error;
  });

  return instance(config);
}
