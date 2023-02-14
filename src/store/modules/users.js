import axios from "axios";

const state = {
  users: []
};

const getters = {
  allUsers: (state) => state.users
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await axios.get(
      "http://localhost:3000/users"
    );

    commit("setUsers", response.data);
  },
  async addUser({ commit }, { name, post }) {
    const response = await axios.post(
      "http://localhost:3000/users",
      { name, post }
    );

    commit("newUser", response.data);
  },
};

const mutations = {
  setUsers: (state, users) => (state.users = users),
  newUser: (state, user) => state.users.unshift(user),
};

export default {
  state,
  getters,
  actions,
  mutations
};