<template>
  <form name="send" @submit="sendMsg" class="send">
    <input class="send__field" name="sendValue" placeholder="Write anything" required />
    <input type="submit" value="send" class="send__fields send__submit" />
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
      let msg = document.forms.send.sendValue.value;
      document.forms.send.sendValue.value = ''
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
.send{
  display: block;
  margin: 10px 0 0 0;
&__submit{
  display: inline-block;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  background: rgb(175, 251, 255);
}
}
</style>