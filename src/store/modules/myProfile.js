export default ({
  state: {
    isLogined: false,
    myProfile: {}
  },
  getters: {
    getStatusLogin(state) {
      return state.isLogined
    },
  },
  mutations: {
    loginSuccessful(state, value) {
      state.isLogined = value;
    }
  },

})
