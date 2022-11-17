import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 預設使用者資料
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token: ''
  },
  getters: {
  },
  // commit
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      // 登出時一併將 state 內的 token 移除
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  // dispatch
  // 取得 API
  actions: {
    async fetchCurrentUser({commit}) {
      try {
        const {data} = await usersAPI.getCurrentUser()
        const {id, name, email, image, isAdmin} = data

        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })

        return true
      } catch(error) {
        console.log('error', error)
        console.error('can not fetch user information')
        // 驗證失敗時，觸發登出行為
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {
  }
})
