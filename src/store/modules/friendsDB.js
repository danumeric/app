import router from '@/router'
//const adressBackend = 'https://safe-fjord-51597.herokuapp.com' //'http://localhost:5000' //
//const adressBackend = 'http://localhost:5000'

export default ({
  state: {
    friendsDB: [],
    myProfile: {},
  },
  getters: {

    getMyProfile(state) {
      return state.myProfile;
    },
    getFriendsDB(state) {
      return state.friendsDB;
    },
    // getAdressBackend(state) {
    //   return state.adressBackend;
    // },
    getFliteredFriends: (state) => (searchText) => {
      // if (state.friendsDB.length === 0) return [];
      return state.friendsDB.filter(item => { //поиск отфильтрованных друганов по searchText
        if (!searchText) return true;
        if (item.firstName.toLowerCase().includes(searchText.toLowerCase())
          || item.secondName.toLowerCase().includes(searchText.toLowerCase())) return true;
      })
    },

    isFriendListNull(state) { //если список друзей пуст 1
      return state.friendsDB.length === 0 ? true : false;
    }
  },
  mutations: {
    updateFriendsDB(state, db) {
      state.friendsDB = db;
    },
    updateMyProfile(state, profile) {
      state.myProfile = profile;
    }

  },
  actions: {
    async fetchFriends(ctx) {
      const t = localStorage.getItem('token');
      if (!t) {
        router.push('/auth');
      }
      const res = await fetch(`${this.$hostname}/auth/users`, {
         headers: {
          'authorization': t,
          'Content-Type': 'application/json;charset=utf-8'
        }
      })
      let db = await res.json();
      const me = db[0];
      db = db.slice(1);
      if (db.failedAuth === true) {
        router.push('/auth');
      }
      for (let i = 0; i < db.length; i++) {
        db[i].userChoosedColor = '';
      }

      ctx.commit('updateMyProfile', me)
      ctx.commit('updateFriendsDB', db)
    },
  },
})
