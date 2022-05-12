<template>
  <form name="testSend" @submit="sendMsg">
    <input class="reg__fields" name="send" placeholder="Your message" required />
    <input type="submit" value="send!" class="reg__fields reg__submit" />
  </form>
</template>

<script>
import SocketioService from '@/services/socketio.service.js';
import { mapGetters, mapMutations } from "vuex";
import { ObjectID } from 'bson';

export default {
  name: 'BottomFields',
  methods: {
    ...mapMutations(['addMessageToVuex']),

    async sendMsg(e) {
      e.preventDefault();
      let targetUserID = this.getTargetUserID;
      let msg = document.forms.testSend.send.value;
      let timeNow = new Date().getTime().toString();
      const idMongo =  new ObjectID();
      let deliveryStatus = 'pending';
      const payload = {
        fromOwner: true, message: msg, timeStamp: timeNow,
        _id: idMongo, deliveryStatus: deliveryStatus, targetUserID: targetUserID
      };
      console.log('payload:  ', payload);
        payload.fromOwner = true;

      await this.addMessageToVuex(payload);
      SocketioService.sendMessage(msg, targetUserID, timeNow, idMongo);
      let fieldMessages = document.querySelector('.window__row_top');
      fieldMessages.scrollTop = fieldMessages.scrollHeight;
    }
  },
  computed: {
    ...mapGetters(['getTargetUserID'])

  },
}
</script>
<style lang="scss" scoped>
.reg__submit{
  cursor: pointer;
  background: rgb(175, 251, 255);
}
</style>