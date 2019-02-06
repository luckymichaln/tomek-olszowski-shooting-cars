import Vue from 'vue'
import Vuex from 'vuex'
import { apiSearchPostsCollection, apiSearchPost, apiSearchPage } from './api'

Vue.use(Vuex)

const state = {
  isContentLoaded: false,
  sessions: null,
  about: null,
  contact: null,
  singleSession: null,
  pagePosition: null,
  pageHeight: null,
  backToProjects: false
}

const actions = {
  async GET_HP_SESSIONS ({state, commit}) {
    commit('SET_CONTENT_LOADED', { data: false })
    try {
      const results = await apiSearchPostsCollection()

      commit('SET_SESSIONS', { data: results.data })
      commit('SET_CONTENT_LOADED', { data: true })

      console.log({GET_HP_SESSIONS: results.data})

      return results
    } catch (error) {
      console.error('error from hp sessions', { error })
    }
  },

  async GET_SINGLE_SESSION ({state, commit}, {id}) {
    commit('SET_CONTENT_LOADED', { data: false })
    try {
      const result = await apiSearchPost(id)

      commit('SET_SINGLE_SESSION', { data: result.data })
      commit('SET_CONTENT_LOADED', { data: true })

      console.log({GET_SINGLE_SESSION: result})

      return result
    } catch (error) {
      console.error('error from single session', { error })
    }
  },

  async GET_ABOUT_PAGE ({state, commit}, {id}) {
    commit('SET_CONTENT_LOADED', { data: false })
    try {
      const result = await apiSearchPage(id)

      commit('SET_ABOUT_DATA', { data: result.data.acf })
      commit('SET_CONTENT_LOADED', { data: true })

      return result
    } catch (error) {
      console.error('error from about page', { error })
    }
  },

  async GET_CONTACT_PAGE ({state, commit}, {id}) {
    commit('SET_CONTENT_LOADED', { data: false })
    try {
      const result = await apiSearchPage(id)

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
  },

  SET_PAGE_REDIRECT (state, { data }) {
    state.backToProjects = data
  }
}

const getters = {
  isContentLoaded: state => state.isContentLoaded,
  about: state => state.about,
  contact: state => state.contact,
  backToProjects: state => state.backToProjects,
  sessions (state) {
    let arr = (state.sessions || []).map(el => {
      const { id } = el
      const { slug, title, about, gallery, placement, mobilegallery, fullpagegallery, projectsgallery, test } = el.acf.session[0]
      return {
        title,
        about,
        gallery,
        projectsgallery,
        mobilegallery,
        fullpagegallery,
        slug,
        vimeoid: test ? parseInt(test) : false,
        placement: parseInt(placement),
        id
      }
    })

    return arr.sort((a, b) => b.placement - a.placement)
  },
  sessionsCovers (state) {
    if (!state.sessions) {
      return null
    }
    let arr = []

    return (state.sessions || []).filter(el => el.acf.session[0].projectsgallery).map(el => {
      const { id } = el
      const { projectsgallery, title, about, slug, placement, test } = el.acf.session[0]

      projectsgallery.forEach(el => {
        el = el.cover
        el.forEach(e => {
          e.title = title
          e.about = about
          e.slug = slug
          e.placement = placement
          e.test = test
          e.id = id
          arr.push(e)
        })
      })

      return arr
    })[0].sort((a, b) => b.placement - a.placement)
  },
  singleSession (state) {
    if (!state.singleSession) {
      return {}
    }

    const { fullpagegallerybackgroundcolor, fullpagegallery, title, about, test } = state.singleSession.acf.session[0]

    if (fullpagegallery) {
      return {
        fullpagegallerybackgroundcolor,
        fullpagegallery: fullpagegallery.map(el => {
          const { url } = el
          return {
            url
          }
        }),
        title,
        about: about || [],
        vimeoid: test ? parseInt(test) : false
      }
    } else {
      return {
        fullpagegallerybackgroundcolor,
        title,
        about: about || [],
        vimeoid: test ? parseInt(test) : false
      }
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
