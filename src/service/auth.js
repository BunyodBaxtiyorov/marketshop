import axios from "./api";
const Authservice = {
  async userRegister(user) {
    const { data } = await axios.post("/auth/v1");
    return data;
  },
  async userLogin(user) {
    const { data } = await axios.post("/auth/v1/login");
    return data;
  },
  async getUser(user) {
    const { data } = await axios.post("/auth/v1");
    return data;
  },
};
