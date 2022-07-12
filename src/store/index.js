import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    nickname: '',
    accessToken: '',
    refreshToken: '',
  },
  getters: {
    isLogin(state) {
      return state.nickname !== '';
    },
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
    },
    setNickname(state, nickname) {
      state.nickname = nickname;
    },
    clearNickname(state) {
      state.nickname = '';
    },
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
    setRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken;
    },
  },
  actions: {
  },
  modules: {
  }
})
