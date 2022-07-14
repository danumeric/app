import router from '@/router'
import { adressBackend } from '../index.js'

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

    getFliteredFriends: (state) => (searchText) => {
      return state.friendsDB.filter(item => { //filter names in list
        if (!searchText) return true;
        if (item.firstName.toLowerCase().includes(searchText.toLowerCase())
          || item.secondName.toLowerCase().includes(searchText.toLowerCase())) return true;
      })
    },

    isFriendListNull(state) { //no one in userlist
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
    async fetchFriends(ctx) {//get all users from server 
      const t = localStorage.getItem('token');
      if (!t) {
        router.push('/auth');
      }
      const res = await fetch(`${adressBackend}/auth/users`, {
        headers: {
          'authorization': t,
          'Content-Type': 'application/json;charset=utf-8'
        }
      })
      let db = await res.json();

      if (db.failedAuth === true) {
        router.push('/auth');
        return;
      }

      const myProfileData = db[0];// recieve user in 0 place
      db = db.slice(1);


      for (let i = 0; i < db.length; i++) {
        db[i].userChoosedColor = '';
      }

      ctx.commit('updateMyProfile', myProfileData)
      ctx.commit('updateFriendsDB', db)
    },
  },
})
