import { io } from 'socket.io-client';
import store from '../store'
//const adressBackend = 'https://safe-fjord-51597.herokuapp.com' //'127.0.0.1:3000' //
//const adressBackend = '127.0.0.1:5000' 


class SocketioService {
  socket;
  constructor() { }

  async setupSocketConnection() {
    try {
      console.log('socket on');
      this.socket = io(`${this.$hostname}`, {
        reconnectionDelay: 1000,
        reconnection: true,
        reconnectionAttemps: 10,
        transports: ['websocket', 'polling', 'flashsocket'],
        agent: false,
        upgrade: false,
        rejectUnauthorized: false,
        autoConnect: false,
        auth: {
          token: localStorage.getItem('token')
        }
      });

      this.socket.on('messageFromServer', (msg) => {//приём сообщений по сокетИО
        msg.fromOwner = false;
        // console.log('msg.senderID', msg.senderID);
        // console.log('store.targetUserID', store.getTargetUserID);

        if (store.targetUserID === msg.senderID) {
          store.commit('addMessageToVuex', msg);
          console.log('мы в чате с ним');
        }

        store.commit('addInputMessageToDB', msg);

        console.log('recieve SocketIO: ', msg);

      })

    } catch (e) { console.log(e); }
    this.socket.connect();
  }
  sendMessage(msg, target, timeStamp, idMongo) {

    this.socket.emit('messageToServer', {
      token: localStorage.getItem('token'),
      target: target,
      message: msg,
      timeStamp: timeStamp,
      idMongo: idMongo
    },
      (response) => {
        console.log(response.idDelivMsg); //TODO Привязка к элементу списка;
        let payload = {
          idMessage: response.idDelivMsg,
          newStatus: 'onServer'
        }
        console.log('changeMessageStatus', payload);
        store.commit('changeMessageStatus', payload);

      }
    );

  }
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

}

export default new SocketioService();


