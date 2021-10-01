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
        .get("http://localhost:5000/")
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
      let result = {
        GJJB: [],
        GJBC: [],
        GJDP: [],
        GJST: [],
        GJCC: [],
        GJH3: [],
        queue: {
          GJJB: [],
          GJBC: [],
          GJDP: [],
          GJST: [],
          GJCC: [],
          GJH3: [],
        },
        progress: {
          GJJB: [],
          GJBC: [],
          GJDP: [],
          GJST: [],
          GJCC: [],
          GJH3: [],
        },
      }
      state.vehicles.slice(0, -1).forEach((val) => {
        // GJJB
        if(val.location.toLowerCase().indexOf("jabon") > -1) {
          result.GJJB.push(val)
          if(val.flag == 2) result.progress.GJJB.push(val.nodo)
          else result.queue.GJJB.push(val.nodo)
        } 
        // GJBC
        else if(val.location.toLowerCase().indexOf("gjbc") > -1) {
          result.GJBC.push(val)
          if(val.flag == 2) result.progress.GJBC.push(val.nodo)
          else if(val.flag == 1) result.queue.GJBC.push(val.nodo)
        } 
        // GJDP
        else if(val.location.toLowerCase().indexOf("depan") > -1) {
          result.GJDP.push(val)
          if(val.flag == 2) result.progress.GJDP.push(val.nodo)
          else if(val.flag == 1) result.queue.GJDP.push(val.nodo)
        }
        // GJST
        else if(val.location.toLowerCase().indexOf("central") > -1) {
          result.GJST.push(val)
          if(val.flag == 2) result.progress.GJST.push(val.nodo)
          else if(val.flag == 1) result.queue.GJST.push(val.nodo)
        }
        // GJCC
        else if(val.location.toLowerCase().indexOf("gjcc") > -1) {
          result.GJCC.push(val)
          if(val.flag == 2) result.progress.GJCC.push(val.nodo)
          else if(val.flag == 1) result.queue.GJCC.push(val.nodo)
        }
        // GJH3
        else if(val.location.toLowerCase().indexOf("hall") > -1) {
          result.GJH3.push(val)
          if(val.flag == 2) result.progress.GJH3.push(val.nodo)
          else if(val.flag == 1) result.queue.GJH3.push(val.nodo)
        }
      })
      return result
    },
    kendaraanId: (state) => (id) => {
      return state.vehicles.filter((val) => val.nodo == id)
    }
  },
};

export default kendaraan;
