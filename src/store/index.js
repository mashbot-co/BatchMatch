import Vue from 'vue'
import Vuex from 'vuex'
import layout from './modules/layout'
import security from './modules/security'
import navigation from './modules/navigation'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    layout,
    security,
    navigation
  },
  strict: debug
})
