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
    isAuthenticated: false
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
      state.isAuthenticated = true
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
      } catch(error) {
        console.log('error', error)
        console.error('can not fetch user information')
      }
    }
  },
  modules: {
  }
})
