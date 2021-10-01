import axios from "axios"

const paper = {
    namespaced: true,
    state: {
        paper: [],
        status: false,
    },
    mutations: {
        paper(state, value) {
            state.paper = state.paper.concat(value)
        },
        status(state, value) {
            state.status = value
        }
    },
    actions: {
        getAllPaper( {commit}, value) {
            commit("status", false)
            value[0].forEach((val, index) => {
                if(val) {
                axios.get(`http://localhost:5000/dodetails/${val}`)
                    .then((response) => {
                        commit("paper", response.data)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                }
                if(index + 1 == value[0].length) {
                    commit("status", true)
                }
            })
        }
    },
    getters: {
        allPaper: (state) => (gdg) => {
            // filter array that location == gdg
            let filt = state.paper.filter((val) => val.location == gdg)
            // create array that contain no do
            let nodo = filt.map((val) => val.nodo)
            // return unique nodo
            return nodo.filter((val, ind) => nodo.indexOf(val) == ind)
        },
        status(state) {
            return state.status;
        },
        paperId: (state) => (id) => {
            return state.paper.filter((val) => val.nodo == id)
        }
    }
}

export default paper;