import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {},
  mutations: {
    renewState(state, payload) {
      // payload = { state: "gitRepos", data: response.data }
      if (payload?.state === "gitRepos") {
        state[payload?.state] = payload?.data.sort(function (a, b) {
          return b?.id - a?.id;
        });
      }
    },
    appendState(state, payload) {
      // payload = { state: "gitRepos", data: response.data }
      state[payload?.state]
        ? state[payload.state].push(payload?.data)
        : (state[payload.state] = [payload?.data]);
    },
  },
  actions: {
    getRepositoryLanguages({ state, commit }, payload) {
      if (state?.gitRepos) {
        return state?.gitRepos.forEach((val) => {
          axios
            .get(
              `https://api.github.com/repos/rijalBinHusen/${val?.name}/languages`
            )
            .then((response) => {
              commit("appendState", {
                state: "repoLanguages",
                data: { repo: val.name, languages: response.data },
              });
            })
            .catch((error) => {
              console.log(error);
            });
        });
      }
    },
    getGithub({ commit, state }) {
      if (!state?.gitRepos) {
        return axios
          .get("https://api.github.com/users/rijalBinHusen/repos")
          .then((response) => {
            commit("renewState", { state: "gitRepos", data: response.data });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      return 1;
    },
  },
  getters: {
    gitRepos(state) {
      if (state?.gitRepos?.length) {
        return state?.gitRepos.map((val) => ({
          reposName: val?.name,
          description: val?.description,
        }));
      }
    },
    repoLanguages: (state) => (repo) => {
      // expected result = [ { javascript: "30%", vue: "60%", html: "5%", css: "5%"} ]
      let result = "Please wait...";
      // if (state?.repoLanguages?.length) {
      //   result = {};
      //   // find the repo
      //   let findRepo = {
      //     ...state.repoLanguages.find((val) => val?.name == repo),
      //   };
      //   if (Object.keys(findRepo)) {
      //     // count the percentase
      //     let totalNumber;
      //     Object.keys(findRepo?.languages).forEach(
      //       (val) => (totalNumber += findRepo?.languages[val])
      //     );
      //     // count the percentase of the each languages
      //     Object.keys(findRepo?.languages).forEach((val) => {
      //       result[val] = (findRepo.languages[val] / totalNumber) * 100;
      //     });
      //     return [result];
      //   }
      // }
      return result;
    },
  },
  modules: {},
});
