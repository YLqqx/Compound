const getters = {
  userName: state => state.app.userName,
  phone: state => state.app.phone,
  accountAddr: state => state.app.accountAddr,
  isLoading: state => state.app.isLoading,
  Popup: state => state.app.Popup,
  surplus: state => state.app.surplus
}
export default getters
