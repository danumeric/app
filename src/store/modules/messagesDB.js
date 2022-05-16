import router from '@/router'
//const adressBackend = 'https://safe-fjord-51597.herokuapp.com' //'http://localhost:5000' 
const adressBackend = 'http://localhost:5000'


export default ({

  state: {
    messages: [],//полная БД  монг для конкр юзера
    displayedMessages: [],// отображаемые в диалоге сообщения
    targetUserID: ""
  },
  getters: {
    getAllMessages(state) {
      return state.messages;
    },
    getDisplayedMessages(state) {
      //console.log('displ', state.displayedMessages);
      return state.displayedMessages
    },
    getTargetUserID(state) {
      return state.targetUserID
    },
    // getMessagesWithUser(state, idInterlocater) {
    //   let conversations = state.messages.find(item => item.idInterlocator === idInterlocater)
    //   console.log(conversations);
    //   return conversations
    // }

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
    async startConversation(state, userId) {//когда выбираешь беседу среи чатов


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
        console.log(res.status);
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


      //console.log('newDisplayedDBMEssagwes', existingConversation.conversations);

      await this.commit('updateDisplayedMessages', existingConversation.conversations)
      let fieldMessages = document.querySelector('.window__row_top');
      fieldMessages.scrollTop = fieldMessages.scrollHeight;

    },

    async addInputMessageToDB(state, payload) {

      payload._id = payload.idMongo;
      // console.log('addInputMessageToDB', payload);
      let db = state.messages;
      let targetConversation = db.find((item) => (item.idInterlocator === payload.senderID));
      targetConversation.conversations.push(payload);
      if (state.targetUserID === payload.senderID) {// если сообщение приходит и мы в окне с этим собеседниеом
        setTimeout(() => {
          let fieldMessages = document.querySelector('.window__row_top');
          fieldMessages.scrollTop = fieldMessages.scrollHeight;
        }, 2);

      }
    },
    async addMessageToVuex(state, payload) {//сразу отобразить на фронтенде
      // 

      console.log('msg addMessageToVuex: ', payload);
      let currentDisplayed = state.displayedMessages;//add to displayed messages
      currentDisplayed.push(payload);

      await this.commit('updateDisplayedMessages', currentDisplayed)

      if (state.targetUserID === payload.senderID) {//прокрутка, если пришло сообщение и мы находимся в этом чате
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