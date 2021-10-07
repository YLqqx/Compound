const state = {
  userName: '',
  phone: '12345678910',
  accountAddr: '',
  isLoading: false,
  Popup: {
    open: false,
    type: 0,
    zh_CN: '提示成功',
    en: 'success'
  }
}
const mutations = {
  // 设置用户名
  SET_USER_NAME (state, name) {
    state.userName = name
  },
  // 设置电话号码
  SET_PHONE (state, phone) {
    state.phone = phone
  },
  // 钱包地址
  SET_ACCOUNTADDR (state, accountAddr) {
    state.accountAddr = accountAddr
  },
  // 加载等待
  SET_LOADING (state, isloading) {
    state.isLoading = isloading
  },
  // 弹窗提示
  SET_POPUP (state, popup) {
    state.Popup = popup
  }
}
const actions = {
  // 设置name
  setUserName ({ commit }, name) {
    commit('SET_USER_NAME', name)
  },
  setPhone ({commit}, phone) {
    commit('SET_PHONE', phone)
  },
  setAccountAddr ({commit}, accountAddr) {
    commit('SET_ACCOUNTADDR', accountAddr)
  },
  setLoding ({commit}, isloading) {
    commit('SET_LOADING', isloading)
  },
  setPopup ({commit}, popup) {
    commit('SET_POPUP', popup)
  }
}
export default {
  state,
  mutations,
  actions
}
