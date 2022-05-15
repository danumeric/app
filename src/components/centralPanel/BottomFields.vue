<template>
  <form name="send" @submit="sendMsg" class="send">
    <div class="send__container">
      <input class="send__field" name="sendValue" placeholder="Type a message here" required />
      <input type="submit" value=" " class="send__fields send__submit" />
    </div>

    <!-- <p><label for="sendValue">{{ labelErrorForm }}</label></p> -->
    <!-- <img @click="sendMsg" class="send__icon" :src="require(`@/assets/icons/ico_send.svg`)" alt="send"> -->

  </form>
</template>

<script>
import SocketioService from '@/services/socketio.service.js';
import { mapGetters, mapMutations } from "vuex";
import { ObjectID } from 'bson';

export default {
  name: 'BottomFields',
  data() {
    return {
      labelErrorForm: ""
    }
  },
  methods: {
    ...mapMutations(['addMessageToVuex']),

    async sendMsg(e) {
      e.preventDefault();
      let targetUserID = this.getTargetUserID;
      let msg = document.forms.send.sendValue.value;
      if (!msg) {
        this.labelErrorForm = "Field can`t be empty";
        return;
      }
      document.forms.send.sendValue.value = ''
      let timeNow = new Date().getTime().toString();
      const idMongo = new ObjectID();
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
.send {
  display: block;
  //margin: 10px 0 0 0;

  &__container {
    margin: 15px 5px 5px 5px;;
    display: flex;
    outline: 1px solid rgb(95, 185, 230);
  }

  &__field {
    flex: 1 0 85%
  }

  &__submit {
    display: inline-block;
    width: 35px;
    height: 35px;
    margin: 0px 10px 0px 0px;
    // border-radius: 10px;
    //padding: 15px;
    cursor: pointer;
    // background: url() 0 0/cover no-repeat;
   background-color: rgb(54, 194, 249);
    -webkit-mask:  url(@/assets/icons/ico_send.svg) no-repeat 50% 50%;
    mask: url(@/assets/icons/ico_send.svg) no-repeat 50% 50%;
    // background: rgb(175, 251, 255);
  }

  &__icon {
    position: relative;
  }
}
</style>