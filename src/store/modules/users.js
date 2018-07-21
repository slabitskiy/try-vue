import {fetchUsers} from '../../api'
import TYPES from '../types'

export default {
  namespaced: true,
  state: {
    users: [],
    isLoading: false
  },
  getters: {
    getUserNameById: (state) => userId => {
      if (state.length === 0) return ''
      const user = state.users.filter(user => user.id === userId)
      return user[0] && user[0].username ? user[0].username : ''
    }
  },
  mutations: {
    [TYPES.USERS_LOADING_START]: state => {
      state.isLoading = true
    },

    [TYPES.USERS_LOADING_FINISHED]: state => {
      state.isLoading = false
    },
    [TYPES.USERS_LOADING_SUCCESS]: (state, payload) => {
      state.users = payload
    }
  },
  actions: {
    async getUsersList ({commit}) {
      commit(TYPES.USERS_LOADING_START)
      try {
        const request = await fetchUsers()
        const payload = request.data

        commit(TYPES.USERS_LOADING_SUCCESS, payload)

        commit(TYPES.USERS_LOADING_FINISHED)
      } catch (error) {
        console.log(error.message)
        commit(TYPES.USERS_LOADING_FINISHED)
      }
    }
  }
}
