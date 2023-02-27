import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    username: null,
    visible: false,
    settings: {
      freshInterval: 60e3,
      compareTime: 60e3,
      redValue: 150,
      startTime: '',
      endTime: '',
      showPopulation: true,
      showFlow: false,
      showFlowSumAll: true,
      showFlowSumYear: true,
      showProfile: true,
      showSource: true,
      showStayTime: true,
      showVisit: true,
      showDarkTheme: true,
    },
    userInfo: '',
    cjglyRoleCode: '',
    RoleDetail: {},
    mapSwitch: {
      timeline: false,
      boundary: true,
      top10: false,
    },
    timevalue: [],
    inver: null,
    fourColorWarn: '',
    userXm: '',
  },
  mutations: {
    saveSettings (state, settings) {
      state.settings = settings
    },
    saveMapSwitch (state, mapSwitch) {
      state.mapSwitch = mapSwitch
    },
    changeShow (state, Visible) {
      state.visible = Visible
    },
    setUser (state, userInfo) {
      state.userInfo = userInfo
    },
    timeVal (state, timevalue) {
      state.timevalue = timevalue
    },
    setRole (state, cjglyRoleCode) {
      state.cjglyRoleCode = cjglyRoleCode
    },
    setRoleDetail (state, RoleDetail) {
      state.RoleDetail = RoleDetail
    },
    userInfo (state, v) {
      state.username = v
    },
    userXm (state, v) {
      state.userXm = v
    },
    changeSetUp (state, V) {
      state.settings.showDarkTheme = V
    },
    setInver (state, val) {
      state.inver = val
    },
    setFourColorWarn (state, fourColorWarn) {
      state.fourColorWarn = fourColorWarn
    },
  },
  actions: {
  },
  modules: {
  },

})