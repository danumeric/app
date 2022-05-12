import { createStore } from 'vuex'
import friendsDB from './modules/friendsDB'
import myProfile from './modules/myProfile'
import messagesDB from './modules/messagesDB'

export default createStore({
  modules: {
    friendsDB, myProfile, messagesDB
  }
})
