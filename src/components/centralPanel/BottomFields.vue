<template>
  <form name="send" @submit="sendMsg" class="send">
    <div class="send__container">
      <input
        class="send__field"
        name="sendValue"
        placeholder="Type a message here"
        required
      />
      <input type="submit" value=" " class="send__fields send__submit" />
    </div>

    <!-- <p><label for="sendValue">{{ labelErrorForm }}</label></p> -->
  </form>
</template>

<script>
import SocketioService from "@/services/socketio.service.js";
import { mapGetters, mapMutations } from "vuex";
import { ObjectID } from "bson";

export default {
  name: "BottomFields",
  data() {
    return {
      labelErrorForm: "",
    };
  },
  methods: {
    ...mapMutations(["addMessageToVuex"]),

    async sendMsg(e) {
      // send message, timestamp, credentials on server
      e.preventDefault();
      let targetUserID = this.getTargetUserID;
      let msg = document.forms.send.sendValue.value;
      if (!msg) {
        this.labelErrorForm = "Field can`t be empty";
        return;
      }
      document.forms.send.sendValue.value = "";
      let timeNow = new Date().getTime().toString();
      const idMongo = new ObjectID();
      let deliveryStatus = "pending";
      const payload = {
        fromOwner: true,
        message: msg,
        timeStamp: timeNow,
        _id: idMongo,
        deliveryStatus: deliveryStatus,
        targetUserID: targetUserID,
      };
      payload.fromOwner = true;

      await this.addMessageToVuex(payload);
      SocketioService.sendMessage(msg, targetUserID, timeNow, idMongo);
      let fieldMessages = document.querySelector(".window__row_top");
      fieldMessages.scrollTop = fieldMessages.scrollHeight;
    },
  },
  computed: {
    ...mapGetters(["getTargetUserID"]),
  },
};
</script>
<style lang="scss" scoped>
.send {
  display: block;
  //margin: 10px 0 0 0;

  &__container {
    margin: 15px 20px 25px 20px;
    display: flex;
    outline: 2px solid #23b4ea;
  }

  &__field {
    flex: 1 0 85%;
  }

  &__submit {
    display: inline-block;
    width: 35px;
    height: 30px;
    cursor: pointer;
    background-color: #81c9ef;
    -webkit-mask: url(@/assets/icons/ico_send.svg) no-repeat 50% 50%;
    mask: url(@/assets/icons/ico_send.svg) no-repeat 50% 50%;
    transform-box: fill-box;
    transform: rotate(-20deg);
    mask-size: 28px;
  }

  &__icon {
    position: relative;
  }
}
</style>