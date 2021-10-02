import axios from "axios";

const kendaraan = {
  namespaced: true,
  state: {
    vehicles: [],
  },
  mutations: {
    kendaraan(state, value) {
      state.vehicles = value
    }
  },
  actions: {
    kendaraan({ commit, dispatch }) {
      return new Promise((resolve) => {
        axios
        // .get("http://localhost:5000/")
        .get("https://unofficialapi.herokuapp.com/")
        .then((response) => {
          commit("kendaraan", response.data)
          dispatch("Paper/getAllPaper", response.data.slice(-1), { root: true })
          resolve()
        })
        .catch((error) => {
          console.log(error);
        });
      })
    },
  },
  getters: {
    kendaraan(state){
      let result = []
      state.vehicles.slice(0, -1).forEach((val) => {
        // GJJB
        if(val.location.toLowerCase().indexOf("jabon") > -1) {
          result.push(Object.assign({position: "GJJB"}, val))
        } 
        // GJBC
        else if(val.location.toLowerCase().indexOf("gjbc") > -1) {
          result.push(Object.assign({position: "GJBC"}, val))
        } 
        // GJDP
        else if(val.location.toLowerCase().indexOf("depan") > -1) {
          result.push(Object.assign({position: "GJDP"}, val))
        }
        // GJST
        else if(val.location.toLowerCase().indexOf("central") > -1) {
          result.push(Object.assign({position: "GJST"}, val))
        }
        // GJCC
        else if(val.location.toLowerCase().indexOf("gjcc") > -1) {
          result.push(Object.assign({position: "GJCC"}, val))
        }
        // GJH3
        else if(val.location.toLowerCase().indexOf("hall") > -1) {
          result.push(Object.assign({position: "GJH3"}, val))
        }
      })
      return result
    },
    // kendaraanId: (state) => (id) => {
    //   let result = state.vehicles.filter((val) => val.nodo == id)[0]
    //   console.log(JSON.stringify(result))
    //   if(result.length > 0) return result[0]
    // }
  },
};

export default kendaraan;
