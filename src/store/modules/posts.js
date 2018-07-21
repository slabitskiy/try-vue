import {fetchPosts} from '../../api'
import TYPES from '../types'

export default {
  namespaced: true,
  state: {
    isLoading: false,
    posts: []
  },
  getters: {
    isLoading: state => state.isLoading,
    postsList: state => state.posts
  },
  actions: {
    async fetchPosts ({ commit }) {
      commit(TYPES.POSTS_LOADING_START)
      try {
        const request = await fetchPosts()
        const payload = request.data

        commit(TYPES.POSTS_LOADING_SUCCESS, payload)

        commit(TYPES.POSTS_LOADING_FINISHED)
      } catch (error) {
        console.log(error.message)
        commit(TYPES.POSTS_LOADING_FINISHED)
      }
    }
  },
  mutations: {
    [TYPES.POSTS_LOADING_START]: state => {
      state.isLoading = true
    },

    [TYPES.POSTS_LOADING_FINISHED]: state => {
      state.isLoading = false
    },

    [TYPES.POSTS_LOADING_SUCCESS]: (state, payload) => {
      state.posts = payload
    }
  }
}
