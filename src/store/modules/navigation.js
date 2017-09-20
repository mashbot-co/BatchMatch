import * as types from '../mutation-types'

// initial state
const state = {
  navigatorVisible: false,
  title: 'Job Requests',
  titleDefault: 'Job Requests',
  theme: 'blue'
}

// getters
const getters = {
  navigatorVisible: state => state.navigatorVisible,
  title: state => state.title,
  theme: state => state.theme
}

// actions
const actions = {
  toggleNavigator ({ commit }) {
    commit(types.TOGGLE_NAVIGATOR)
  },
  closeNavigator ({ commit }) {
    commit(types.CLOSE_NAVIGATOR)
  },
  setTitle ({ commit, state }, value) {
    commit(types.SET_TITLE, value)
  },
  resetTitle ({ commit, state }) {
    commit(types.RESET_TITLE)
  },
  setJobRequests ({ commit, state }) {
    commit(types.SET_JOB_REQUESTS)
  },
  setTemplates ({ commit, state }) {
    commit(types.SET_TEMPLATES)
  },
  setDownloads ({ commit, state }) {
    commit(types.SET_DOWNLOADS)
  },
  setGeneric ({ commit, state }, title) {
    commit(types.SET_GENERIC, title)
  }
}

// mutations
const mutations = {
  [types.TOGGLE_NAVIGATOR] (state) {
    // toggle the navigator
    state.navigatorVisible = !state.navigatorVisible
  },
  [types.CLOSE_NAVIGATOR] (state) {
    // toggle the navigator
    state.navigatorVisible = false
  },
  [types.SET_TITLE] (state, value) {
    console.log(value)
    state.title = value
  },
  [types.RESET_TITLE] (state) {
    state.title = state.titleDefault
  },
  [types.SET_JOB_REQUESTS] (state) {
    state.title = 'Job Requests'
    state.theme = 'blue'
  },
  [types.SET_TEMPLATES] (state) {
    state.title = 'Templates'
    state.theme = 'error'
  },
  [types.SET_DOWNLOADS] (state) {
    state.title = 'Downloads'
    state.theme = 'warning'
  },
  [types.SET_GENERIC] (state, title) {
    state.title = title
    state.theme = 'grey'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
