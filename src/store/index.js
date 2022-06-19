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
    async getRepositoryLanguages({ state, commit }, payload) {
      // payload === nameRepository
      let result = await axios.get(
        `https://api.github.com/repos/rijalBinHusen/${payload}/languages`
      );
      commit("appendState", {
        state: "repoLanguages",
        data: { repo: payload, languages: result?.data },
      });
      return "Finished";
    },
    async getGithub({ commit, state, dispatch }) {
      if (!state?.gitRepos) {
        let repos = await axios.get(
          "https://api.github.com/users/rijalBinHusen/repos"
        );
        commit("renewState", { state: "gitRepos", data: repos.data });

        // iterate the repos to get each language of respository
        // for (let i = 0; i < repos?.data.length; i++) {
        //   await dispatch("getRepositoryLanguages", repos?.data[i]?.name);
        // }
      }
      return 1;
    },
  },
  getters: {
    gitRepos(state) {
      if (state?.gitRepos?.length) {
        return state?.gitRepos;
        // .map((val) => ({
        //   reposName: val?.name,
        //   description: val?.description,
        //   language: val?.language,
        //   created: val?.created_at,
        // }));
      }
    },
    fontAwesomeBrand: () => (nameBrand) => {
      if (nameBrand.toLowerCase() === "javascript") {
        return ["fab", "js"];
      } else if (nameBrand.toLowerCase() === "vue") {
        return ["fab", "vuejs"];
      } else if (nameBrand.toLowerCase() === "html") {
        return ["fab", "html5"];
      } else if (nameBrand.toLowerCase() === "css") {
        return ["fab", "css3"];
      }
      return "code";
    },
    fontAwesomeBrandColor: () => (nameBrand) => {
      if (nameBrand.toLowerCase() === "javascript") {
        return "text-yellow-600";
      } else if (nameBrand.toLowerCase() === "vue") {
        return "text-green-500";
      }
      return "text-blue-600";
    },
    repoLanguages: (state) => (repo) => {
      // expected result = [ { javascript: "30%", vue: "60%", html: "5%", css: "5%"} ]
      // let result = "Please wait...";
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
