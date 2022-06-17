import { createStore } from "vuex"

export default createStore({
  state: {},
  mutations: {
    renewData(state, payload) {
      state[payload?.stateName] = payload?.data
    }
  },
  actions: {
    getGithub() {
      console.log("Get github")
      http.get("https://api.github.com/users/rijalBinHusen/events")
        .then( (response) => commit("renewData", { stateName: "gitRepos", data: response.data } ) )
        .catch(function (error) {
            console.log(error);
        });
    }
  },
  modules: {},
});
