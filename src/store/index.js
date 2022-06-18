import { createStore } from "vuex"
import axios from "axios"

export default createStore({
  state: {},
  mutations: {
    renewState(state, payload) {
      if(payload?.state === "gitRepos") {
        state[payload?.state] = payload?.data.sort(function(a, b){ return b?.id - a?.id  });
      }
    }
  },
  actions: {
    getGithub({ commit, state }) {
      if(!state?.gitRepos) {
        return axios.get("https://api.github.com/users/rijalBinHusen/repos")
          .then( (response) => commit("renewState", { state: "gitRepos", data: response.data }) )
          .catch(function (error) {
              console.log(error);
          });
      }
      return 1
    }
  },
  getters: {
    gitRepos(state) {
      if(state?.gitRepos?.length) {
        return state?.gitRepos.map((val) => ({ 
          reposName: val?.name,
          description: val?.description
        })
        )
      }
    }
  },
  modules: {},
});
