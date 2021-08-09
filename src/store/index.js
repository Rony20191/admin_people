import Vue from 'vue'
import Vuex from 'vuex'
import { PeopleService } from '../services'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: [],
    loading: false
  },
  getters: {
    people: (state) => state.people
  },
  mutations: {
    setPeople (state, payload) {
      state.people = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    async getPeople ({ commit }, payload) {
      const { data } = await PeopleService.get('/people', payload)
      commit('setPeople', data.results || [])
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  modules: {
  }
})
