import { login } from "@/api/sys";
import md5 from "md5";
import { getItem, setItem } from "../../utils/storage";
const state = {
  token: getItem("token") || "",
};
const mutations = {
  SET_TOKEN(state, data) {
    state.token = data;
    setItem("token", data);
  },
};
const actions = {
  login(context, data) {
    const { username, password } = data;
    return new Promise((resolve, reject) => {
      login({
        username,
        password: md5(password),
      })
        .then((data) => {
          this.commit("user/SET_TOKEN", data.token);
          resolve();
        })
        .then((err) => {
          reject(err);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
