import Vuex from 'vuex'
import Vue from 'vue'
import { apiSearchPostsCollection, apiSearchPost, apiSearchPage } from './api'

Vue.use(Vuex)

const state = {
  isContentLoaded: false,
  sessions: null,
  about: null,
  contact: null,
  singleSession: null,
  pagePosition: null,
  pageHeight: null
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
  },

  async GET_ABOUT_PAGE ({state, commit}, {id}) {
    commit('SET_CONTENT_LOADED', { data: false })
    try {
      const result = await apiSearchPage(id)

      console.log(result, 'result about')

      commit('SET_ABOUT_DATA', { data: result.data.acf })
      commit('SET_CONTENT_LOADED', { data: true })

      return result
    } catch (error) {
      console.error(error, 'error from about page')
    }
  },

  async GET_CONTACT_PAGE ({state, commit}, {id}) {
    commit('SET_CONTENT_LOADED', { data: false })
    try {
      const result = await apiSearchPage(id)

      console.log(result, 'result about')

      commit('SET_CONTACT_DATA', { data: result.data.acf.contact })
      commit('SET_CONTENT_LOADED', { data: true })

      return result
    } catch (error) {
      console.error(error, 'error from about page')
    }
  }
}

const mutations = {
  SET_SESSIONS (state, { data }) {
    state.sessions = data
  },

  SET_ABOUT_DATA (state, { data }) {
    state.about = data
  },

  SET_CONTACT_DATA (state, { data }) {
    state.contact = data
  },

  SET_CONTENT_LOADED (state, { data }) {
    state.isContentLoaded = data
  },

  SET_SINGLE_SESSION (state, { data }) {
    state.singleSession = data
  },

  SET_PAGE_POSITION (state, { data }) {
    state.pagePosition = data
  }
}

const getters = {
  isContentLoaded: state => state.isContentLoaded,
  about: state => state.about,
  contact: state => state.contact,
  sessions (state) {
    let arr = (state.sessions || []).map(el => {
      const { id } = el
      const { slug, title, about, gallery, placement } = el.acf.session[0]
      return {
        title,
        about,
        gallery,
        slug,
        placement: parseInt(placement),
        id
      }
    })

    return arr.sort((a, b) => a.placement - b.placement)
  },
  singleSession (state) {
    if (!state.singleSession) {
      return {}
    }
    const { fullpagegallerybackgroundcolor, fullpagegallery, title, about } = state.singleSession.acf.session[0]

    return {
      fullpagegallerybackgroundcolor,
      fullpagegallery: fullpagegallery.map(el => {
        const { url } = el
        return {
          url
        }
      }),
      title,
      about
    }
  },
  pagePosition: state => state.pagePosition
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
