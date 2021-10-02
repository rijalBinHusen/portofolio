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
            let promiseAll = []
            value[0].forEach((val, index) => {
                if(state.paperList.indexOf(val) < 0 && val) {
                // axios.get(`http://localhost:5000/dodetails/${val}`)
                    promiseAll.push(
                        new Promise ((resolve) => {
                            axios.get(`https://unofficialapi.herokuapp.com/dodetails/${val}`)
                                .then((response) => resolve(response.data)
                                )
                                .catch((error) => {
                                    console.log(error)
                                })
                        })
                    )
                }
            })

            Promise.all(promiseAll).then((val) => {
                val.forEach((result) => {
                    commit("paper", result)
                    commit("paperList", result[0].nodo)
                })
                commit("status", true)
            })
        },
        status( {commit}, value) {
            commit("status", value)
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