import Vue from 'vue'
import Vuex from 'vuex'
import {
  getAccessToken,
  getRefreshToken,
} from "@/utils/cookies";
// import {loginMember} from "@/api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: getAccessToken() || '',
    refreshToken: getRefreshToken() || '',
  },
  getters: {
    isLogin(state) {
      return state.accessToken !== '';
    },
    getAccessToken(state) {
      return state.accessToken;
    },
    getRefreshToken(state) {
      return state.refreshToken;
    }
  },
  mutations: {
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
