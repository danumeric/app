<template>
  <div class="chat">
    <div class="chat__message" :class="msgDirection">
      <div class="chat__text">
        {{ ObjectMessage.message }} {{ displDeliveryStatus }}
      </div>
    </div>
    <div class="chat__date">
      {{ showDate(ObjectMessage.timeStamp) }}
    </div>
  </div>
</template>
<script>
export default {
  name: "ChatComponent",
  data() {
    return {
      msgDirection: "",
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
    this.msgDirection = this.ObjectMessage.fromOwner
      ? "chat__outcome"
      : "chat__incoming";
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
  display: flex;
  text-align: left;
  &__date {
    position: relative;
    top: 10px;
    right: 3%;
    font-size: 10px;
    color: #cee5f2;
  }
  &__message {
    min-height: 32px;
    flex: 1 0;
  }
  &__text {
    position: relative;
    top: 8px;
    left: 8px;
    color: #3e3846;
  }
  &__incoming {
    background-color: #b6eefd;
    margin: 0px 20% 0px 10%;
    border-radius: 2px;
    position: relative;
    box-shadow: 0 0 2px #59d6f9; /* Добавляем тень для блока */

    &:after,
    &:before {
      content: "";
      position: absolute;
      background: #b6eefd;
      left: 0px;
      top: 6px;
      width: 20px;
      height: 20px;
      box-shadow: 0 0 2px #59d6f9; /* Добавляем тень для уголка */
      z-index: -1; /* Прячем за основным блоком */
      transform: rotate(45deg); /* Поворачиваем на 45º */
    }
  }

  &__outcome {
    background-color: #def7fc;
    margin: 0px 5% 0px 15%;
    border-radius: 2px;
    position: relative;
    box-shadow: 0 0 2px #c5f5ff; /* Добавляем тень для блока */

    &:after,
    &:before {
      content: "";
      position: absolute;
      background-color: #def7fc;
      right: 0px;
      top: 6px;
      width: 20px;
      height: 20px;
      box-shadow: 0 0 2px #c5f5ff; /* Добавляем тень для уголка */
      z-index: -1; /* Прячем за основным блоком */
      transform: rotate(45deg); /* Поворачиваем на 45º */
    }
  }
}
</style>