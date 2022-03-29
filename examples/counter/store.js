import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0
}

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  increment(state) {
    console.log("using store.js!@ mutation");
    state.count++
  },
  decrement(state) {
    console.log("using store.js!");
    state.count--
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({ commit }) => {
    console.log("using store.js!@ actions");
    commit('increment');
  },
  decrement: ({ commit }) => {
    commit('decrement');
    console.log("using store.js!");
  },
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment');
      console.log("using store.js!");
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        console.log("using store.js!");
        resolve()
      }, 1000)
    })
  }
}

// getters are functions.
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
