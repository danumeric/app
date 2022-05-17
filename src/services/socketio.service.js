import { io } from 'socket.io-client';
import store from '../store'
const adressBackend = 'https://safe-fjord-51597.herokuapp.com'
//const adressBackend = '127.0.0.1:5000' 


class SocketioService {
  socket;
  constructor() { }

  async setupSocketConnection() {
    try {
      console.log('socket on');
      this.socket = io(`${adressBackend}`, {
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

      this.socket.on('messageFromServer', (msg) => {//recieve message by socketIO
        msg.fromOwner = false;

        if (store.targetUserID === msg.senderID) {// if chat already open, write immediatly
          store.commit('addMessageToVuex', msg);
        }

        store.commit('addInputMessageToDB', msg);// add to database with all message anyway

        //console.log('recieve SocketIO: ', msg);

      })

    } catch (e) {
      console.log(e);
    }

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
      (response) => {// when delievered or error
        console.log(response.idDelivMsg);
        let payload = {
          idMessage: response.idDelivMsg,
          newStatus: 'onServer'
        }
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


