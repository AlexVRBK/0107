import Vuex from "vuex";

import users from "./modules/users";

//Load vue

//create a store
export default new Vuex.Store({
  modules: {
    users
  }
});