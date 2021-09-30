import axios from "axios";

const kendaraan = {
  namespaced: true,
  state: {
    vehicles: [],
  },
  mutations: {
    kendaraan(state, value) {
      state.vehicles = value
      console.log(value)
    }
  },
  actions: {
    kendaraan({ commit, dispatch }) {
      return new Promise((resolve) => {
        axios
        .get("http://localhost:5000/")
        .then((response) => {
          commit("kendaraan", response.data)
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
        GJJBN: [],
        GJBC: [],
        GJDP: [],
        GJST: [],
        GJCC: [],
        GJH3: [],
        queue: {
          GJJBN: 0,
          GJBC: 0,
          GJDP: 0,
          GJST: 0,
          GJCC: 0,
          GJH3: 0,
        },
        progress: {
          GJJBN: 0,
          GJBC: 0,
          GJDP: 0,
          GJST: 0,
          GJCC: 0,
          GJH3: 0,
        },
      }
      state.vehicles.slice(0, -1).forEach((val) => {
        // GJJBN
        if(val.location.toLowerCase().indexOf("jabon") > -1) {
          result.GJJBN.push(val)
          if(val.flag == 2) result.progress.GJJBN = result.progress.GJJBN + 1
          else result.queue.GJJBN = result.queue.GJJBN + 1
        } 
        // GJBC
        else if(val.location.toLowerCase().indexOf("gjbc") > -1) {
          result.GJBC.push(val)
          if(val.flag == 2) result.progress.GJBC = result.progress.GJBC+ 1
          else if(val.flag == 1) result.queue.GJBC = result.queue.GJBC+ 1
        } 
        // GJDP
        else if(val.location.toLowerCase().indexOf("depan") > -1) {
          result.GJDP.push(val)
          if(val.flag == 2) result.progress.GJDP = result.progress.GJDP+ 1
          else if(val.flag == 1) result.queue.GJDP = result.queue.GJDP+ 1
        }
        // GJST
        else if(val.location.toLowerCase().indexOf("central") > -1) {
          result.GJST.push(val)
          if(val.flag == 2) result.progress.GJST = result.progress.GJST+ 1
          else if(val.flag == 1) result.queue.GJST = result.queue.GJST+ 1
        }
        // GJCC
        else if(val.location.toLowerCase().indexOf("gjcc") > -1) {
          result.GJCC.push(val)
          if(val.flag == 2) result.progress.GJCC = result.progress.GJCC+ 1
          else if(val.flag == 1) result.queue.GJCC = result.queue.GJCC+ 1
        }
        // GJH3
        else if(val.location.toLowerCase().indexOf("hall") > -1) {
          result.GJH3.push(val)
          if(val.flag == 2) result.progress.GJH3 = result.progress.GJH3+ 1
          else if(val.flag == 1) result.queue.GJH3 = result.queue.GJH3+ 1
        }
      })
      return result
    },
  },
};

export default kendaraan;
