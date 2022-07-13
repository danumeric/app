import { createStore } from 'vuex'
import friendsDB from './modules/friendsDB'
import myProfile from './modules/myProfile'
import messagesDB from './modules/messagesDB'
const adressBackend = 'https://safe-fjord-51597.herokuapp.com'
//const adressBackend = 'http://localhost:5000'
export { adressBackend } 

export default createStore({
  modules: {
    friendsDB, myProfile, messagesDB
  }
})
