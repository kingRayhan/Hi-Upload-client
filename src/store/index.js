import { createStore } from "vuex";
import auth from "./auth";
import files from "./files";

const store = createStore({
  modules: { auth, files },
});

export default store;
