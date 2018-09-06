/* store.js */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default function createStore() {
  let store = new Vuex.Store({
    state: {
      homeInfo: '',
      otherInfo: ''
    },
    actions: {
      getHomeInfo({commit}) {
        return axios.get('http://localhost:8080/api/getHomeInfo').then((res) => {
          commit('setHomeInfo', res.data)
        })
      },
      getOtherInfo({commit}) {
        return axios.get('http://localhost:8080/api/getOtherInfo').then((res) => {
          commit('setOtherInfo', res.data)
        })
      }
    },
    mutations: {
      setHomeInfo(state, res) {
        state.homeInfo = res
      },
      setOtherInfo(state, res){
        state.otherInfo = res
      }
    }
  })

  return store
}
