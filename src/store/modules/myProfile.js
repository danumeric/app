import { adressBackend } from '../index.js'
import router from '@/router'


export default ({
  state: {
    isLogined: false,
    myProfile: {}
  },
  getters: {
    getStatusLogin(state) {
      return state.isLogined
    },
    getMyProfile(state) {
      return state.myProfile
    },
  },
  mutations: {
    loginSuccessful(state, value) {
      state.isLogined = value;
    },
    updateMyProfile(state, profile) {
      state.myProfile = profile;
    }
  },

  actions: {
    async loginInApp(context, dataLogin) {
      try {
        let response = await fetch(`${adressBackend}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(dataLogin),
        });

        let result = await response.json();
        if (result.err) {
          return result.err;
        }

        this.token = result.token;
        if (this.token) {
          context.commit('loginSuccessful', true);
          localStorage.setItem("token", this.token);
          router.push("/");
          return result.message;
        }
      } catch (e) { console.log(e); }

    }
  }

})
