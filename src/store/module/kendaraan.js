import axios from "axios";

const kendaraan = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    kendaraan({ commit, dispatch }) {
      axios
        .get("http://localhost:5000/")
        .then((response) => {
          // ("parse", response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {},
};

export default kendaraan;
