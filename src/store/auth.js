import axios from "axios";

const auth = {
  namespaced: true,
  state: {
    user: null,
    authenticated: false,
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_AUTHENTICATED(state, payload) {
      state.authenticated = payload;
      // console.log(payload);
    },
  },
  actions: {
    async fetchAuthenticatedUser({ commit }) {
      return axios
        .get("api/auth/user")
        .then((res) => {
          commit("SET_USER", res.data);
          commit("SET_AUTHENTICATED", true);
        })
        .catch((e) => {
          commit("SET_USER", null);
          commit("SET_AUTHENTICATED", false);
        });
    },
    async login({ dispatch }, credentials) {
      await axios.get("sanctum/csrf-cookie");
      await axios.post("api/auth/login", credentials);
      return dispatch("fetchAuthenticatedUser");
    },
    async logout({ dispatch }) {
      await axios.post("api/auth/logout");
      return dispatch("fetchAuthenticatedUser");
    },
  },
};

export default auth;
