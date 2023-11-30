import axios from "axios";
import { getItem } from "../helpers/persistance-storage";
axios.defaults.baseURL = "http://143.198.64.152:1777/v2/api-docs";
axios.interceptors.request.use((config) => {
  const token = getItem("token");
  const authorization = token ? `Token ${token}` : "";
  config.headers.Authorization = authorization;
  return config;
});
export default axios;
