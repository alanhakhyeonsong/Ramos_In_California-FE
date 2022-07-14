import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    accessToken: '',
    refreshToken: '',
  },
  getters: {
    isLogin(state) {
      return state.email !== '';
    },
    getRefreshToken(state) {
      return state.refreshToken;
    }
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
    },
    setNickname(state, nickname) {
      state.nickname = nickname;
    },
    clearEmail(state) {
      state.email = '';
    },
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
    setRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken;
    },
    clearRefreshToken(state) {
      state.refreshToken = '';
    },
    clearAccessToken(state) {
      state.accessToken = '';
    }
  },
  actions: {
  },
  modules: {
  }
})
