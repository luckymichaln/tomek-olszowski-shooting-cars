import Vuex from 'vuex'
import Vue from 'vue'
import { apiSearchPostsCollection, apiSearchPost } from './api'

Vue.use(Vuex)

const state = {
  isContentLoaded: false,
  sessions: null,
  singleSession: null
}

const actions = {
  async GET_HP_SESSIONS ({state, commit}) {
    commit('SET_CONTENT_LOADED', { data: false })
    try {
      const results = await apiSearchPostsCollection()

      commit('SET_SESSIONS', { data: results.data })
      commit('SET_CONTENT_LOADED', { data: true })

      return results
    } catch (error) {
      console.error(error, 'error from hp sessions')
    }
  },

  async GET_SINGLE_SESSION ({state, commit}, {id}) {
    commit('SET_CONTENT_LOADED', { data: false })
    try {
      const result = await apiSearchPost(id)

      commit('SET_SINGLE_SESSION', { data: result.data })
      commit('SET_CONTENT_LOADED', { data: true })

      console.log(result)

      return result
    } catch (error) {
      console.error(error, 'error from single session')
    }
  }
}

const mutations = {
  SET_SESSIONS (state, { data }) {
    state.sessions = data
  },

  SET_CONTENT_LOADED (state, { data }) {
    state.isContentLoaded = data
  },

  SET_SINGLE_SESSION (state, { data }) {
    state.singleSession = data
  }
}

const getters = {
  isContentLoaded: state => state.isContentLoaded,
  sessions (state) {
    return (state.sessions || []).map(el => {
      const { id } = el
      const { slug, title, about, gallery } = el.acf.session[0]
      return {
        title,
        about,
        gallery,
        slug,
        id
      }
    })
  },
  singleSession (state) {
    if (!state.singleSession) {
      return {}
    }
    const { fullpagegallerybackgroundcolor, fullpagegallery, title } = state.singleSession.acf.session[0]

    return {
      fullpagegallerybackgroundcolor,
      fullpagegallery: fullpagegallery.map(el => {
        const { url } = el
        return {
          url
        }
      }),
      title
    }
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
