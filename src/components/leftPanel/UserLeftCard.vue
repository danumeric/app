<template>
  <div
    class="user-left-card"
    @click="clearInput(user._id), startConversation(user._id)"
    :class="user.userChoosedColor"
  >
    <img
      class="user-left-card__photo"
      :src="user.selectedAvatar"
      :alt="user.firstName"
    />
    <img
      class="user-left-card__flag"
      :src="require(`@/assets/flags-svg/${user.country.toLowerCase()}.svg`)"
      :alt="user.country"
    />

    <div class="user-left-card__name">
      <h3>{{ user.firstName }} {{ user.secondName }}</h3>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "UserLeftCard",
  data() {
    return {};
  },
  props: {
    user: Object,
  },
  computed: {
    ...mapGetters(["getTargetUserID"]),
  },
  methods: {
    clearInput(targetID) {
      //clear variable of visible messages when change conversation
      if (this.getTargetUserID && targetID != this.getTargetUserID) {
        document.forms.send.sendValue.value = "";
      }
    },
    ...mapMutations(["startConversation"]),
  },
};
</script>

<style lang="scss" scoped>
.choosed-usercard {
  background: #a9e4f4;
}

.user-left-card {
  // box-sizing: border-box;
  cursor: pointer;
  padding: 5px 0px 5px 5px;

  position: relative;
  display: flex;
  border: 1px solid #69accd;

  &__photo {
    line-height: 0;
  }

  &__photo {
    position: relative;
    left: 5px;
    border-radius: 50%;
    z-index: 2;
    width: 60px;
    height: 60px;
  }

  &__flag {
    width: 20px;
    position: absolute;
    outline: 1px dotted #afd5e0;
  }

  &__name {
    font-size: 18px;
    padding: 10px 10px 0px 20px;
  }
}
</style>