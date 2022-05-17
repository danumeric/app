import router from '@/router'
const adressBackend = 'https://safe-fjord-51597.herokuapp.com'
//const adressBackend = 'http://localhost:5000'


export default ({

  state: {
    messages: [],//full DB of all messages of user
    displayedMessages: [],// showed messages
    targetUserID: "" //id of choosed interlocutor 
  },
  getters: {
    getAllMessages(state) {
      return state.messages;
    },
    getDisplayedMessages(state) {
      return state.displayedMessages
    },
    getTargetUserID(state) {
      return state.targetUserID
    },

  },
  mutations: {
    updateMessagesDb(state, db) {//
      state.messages = db;
    },
    updateDisplayedMessages(state, arr) {
      state.displayedMessages = arr;
    },
    updatetargetUserID(state, newID) {
      state.targetUserID = newID;
    },
    clearAll(state) {
      state.messages = [];
      state.displayedMessages = [];
      state.targetUserID = '';
    },
    async startConversation(state, userId) {//choose conversation

      this.commit('updatetargetUserID', userId);
      let db = state.messages;
      let existingConversation = db.find((item) => (item.idInterlocator === userId));
      if (existingConversation) {
        console.log('already exist');
      }

      if (!existingConversation) {
        console.log('not exist');
        const t = localStorage.getItem('token');
        if (!t) {
          router.push('/auth');
        }
        const res = await fetch(`${adressBackend}/auth/addConversation`, {
          method: 'POST',
          headers: {
            'authorization': t,
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({ 'idInterlocator': userId })
        })

        const newdb = await res.json();
        if (res.status > 199 && res.status < 300) {
          console.log('addConversation status OK');
          this.commit('updateMessagesDb', newdb)
          existingConversation = state.messages.find(item => item.idInterlocator === userId)
        } else {
          console.log('err addConcersation');
          console.log(newdb);
          return;
        }
      }

      await this.commit('updateDisplayedMessages', existingConversation.conversations)
      let fieldMessages = document.querySelector('.window__row_top');
      fieldMessages.scrollTop = fieldMessages.scrollHeight;

    },

    async addInputMessageToDB(state, payload) {//handling recieve message  

      payload._id = payload.idMongo;
      let db = state.messages;
      let targetConversation = db.find((item) => (item.idInterlocator === payload.senderID));
      targetConversation.conversations.push(payload);
      if (state.targetUserID === payload.senderID) {
        setTimeout(() => {
          let fieldMessages = document.querySelector('.window__row_top');
          fieldMessages.scrollTop = fieldMessages.scrollHeight;
        }, 2);

      }
    },
    async addMessageToVuex(state, payload) {//immediatly drow sended message

      let currentDisplayed = state.displayedMessages;//add to displayed messages
      currentDisplayed.push(payload);
      await this.commit('updateDisplayedMessages', currentDisplayed)
      if (state.targetUserID === payload.senderID) {//scroll
        let fieldMessages = document.querySelector('.window__row_top');
        fieldMessages.scrollTop = fieldMessages.scrollHeight;
      }


    },

    changeMessageStatus(state, payload) { //payload.idMessage, payload.newStatus
      let targetMessage = state.displayedMessages.find(item => item._id.toString() === payload.idMessage);
      console.log('trg:  ', targetMessage);
      targetMessage.deliveryStatus = payload.newStatus;
    }
  },
  actions: {

    async fetchGetMessages(ctx) {
      await this.commit('updateMessagesDb', [])
      await this.commit('updateDisplayedMessages', [])
      await this.commit('updatetargetUserID', '')

      const t = localStorage.getItem('token');
      if (!t) {
        router.push('/auth');
      }
      const res = await fetch(`${adressBackend}/auth/messages`, {

        headers: {
          'authorization': t,
          'Content-Type': 'application/json;charset=utf-8'
        }
      })
      const db = await res.json();
      for (let i = 0; i < db.length; i++) {
        if (db[i].conversations) {
          let conv = db[i].conversations;
          for (let j = 0; j < conv.length; j++) {
            conv[j].deliveryStatus = 'onServer';
          }
        }
      }
      console.log('db: ', db);

      if (db.failedAuth === true) {
        router.push('/auth');
      }

      ctx.commit('updateMessagesDb', db)
    },
  },
})