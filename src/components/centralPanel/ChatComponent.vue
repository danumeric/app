<template>
  <div class="chat" :class="isMyMessage">
    <div class="chat__date">
      {{ showDate(ObjectMessage.timeStamp) }}
    </div>
    <div class="chat__message">
      {{ ObjectMessage.message }} {{ displDeliveryStatus }}
    </div>
  </div>
</template>
<script>
export default {
  name: "ChatComponent",
  data() {
    return {
      isMyMessage: "",
    };
  },
  props: {
    ObjectMessage: Object,
  },
  methods: {
    showDate(timeStamp) {
      let date = new Date(+timeStamp);
      let h = date.getHours();
      let m = date.getMinutes();
      if (+h < 10) h = "0" + h;
      if (+m < 10) m = "0" + m;
      let dateStr = `${h}:${m}`;
      return dateStr;
    },
  },
  created() {
    //fromOwner means that I send message
    this.isMyMessage = this.ObjectMessage.fromOwner
      ? "chat__incoming"
      : "chat__outcome";
  },
  computed: {
    displDeliveryStatus() {
      if (this.ObjectMessage.deliveryStatus === "onServer") return "✓";
      if (this.ObjectMessage.deliveryStatus === "pending") return "...";
      return "";
    },
  },
};
</script>


<style lang="scss" scoped>
.chat {
  margin: 15px 0px 0px 0px;

  &__incoming {
    background-color: rgb(240, 254, 250);
  }

  &__outcome {
    background-color: rgb(132, 250, 193);
  }
}
</style>