import TYPES from '../types'
import {fetchPostById} from '../../api'

export default {
  namespaced: true,
  state: {
    post: {},
    isLoading: false
  },
  getters: {
    post: state => state.post,
    isLoading: state => state.isLoading
  },
  mutations: {
    [TYPES.POST_LOADING_START]: state => {
      state.isLoading = true
    },

    [TYPES.POST_LOADING_FINISHED]: state => {
      state.isLoading = false
    },

    [TYPES.POST_LOADING_SUCCESS]: (state, payload) => {
      state.post = payload
    }
  },
  actions: {
    async getPost ({commit}, id) {
      commit(TYPES.POST_LOADING_START)
      try {
        const request = await fetchPostById(id)
        const payload = request.data

        commit(TYPES.POST_LOADING_SUCCESS, payload)

        commit(TYPES.POST_LOADING_FINISHED)
      } catch (error) {
        console.log(error.message)
        commit(TYPES.POST_LOADING_FINISHED)
      }
    }
  }
}
