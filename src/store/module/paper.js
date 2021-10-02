import axios from "axios"

const paper = {
    namespaced: true,
    state: {
        paper: [],
        status: false,
        paperList: [],
    },
    mutations: {
        paper(state, value) {
            state.paper = state.paper.concat(value)
        },
        status(state, value) {
            state.status = value
        },
        paperList(state, value) {
            state.paperList.push(value)
        }
    },
    actions: {
        getAllPaper( {commit, state}, value) {
            commit("status", false)
            value[0].forEach((val, index) => {
                if(state.paperList.indexOf(val) < 0 && val) {
                // axios.get(`http://localhost:5000/dodetails/${val}`)
                axios.get(`https://unofficialapi.herokuapp.com/dodetails/${val}`)
                    .then((response) => {
                        commit("paperList", val)
                        commit("paper", response.data)
                        if(index + 1 == value[0].length) commit("status", true)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                }
                else if (
                    index + 1 == value[0].length && state.paperList.indexOf(val) > 0
                ) {
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
            return typeof id == 'object' 
            ? state.paper.filter((val) => val.nodo == id.id && val.location == id.gdg)
            : state.paper.filter((val) => val.nodo == id)
        }
    }
}

export default paper;