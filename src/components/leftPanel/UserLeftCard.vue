<template>
  <div class="user-left-card" @click="(startConversation(user._id)), clearInput()" :class="user.userChoosedColor">
    <img class="user-left-card__photo" :src="user.selectedAvatar" :alt="user.firstName" />
    <img class="user-left-card__flag" :src="require(`@/assets/flags-svg/${user.country.toLowerCase()}.svg`)"
      :alt="user.country" />

    <div class="user-left-card__name">
      <h3>{{ user.firstName }} {{ user.secondName }}</h3>
    </div>
  </div>
</template>

<script>

import { mapMutations } from "vuex";

export default {
  name: 'UserLeftCard',
  data() {
    return {
    }
  },
  props: {
    user: Object
  },
  computed: {

    //  ...mapGetters(['getFriendsDB'])
  },
  methods: {
    clearInput() {
      document.forms.send.sendValue.value = '';
    },
    ...mapMutations(['startConversation']),
  }
}
</script>

<style lang="scss" scoped>
.choosed-usercard {
  background: rgb(150, 219, 244);
}

.user-left-card {
  cursor: pointer;
  position: relative;
  display: flex;
  border: 1px solid black;

  &__photo {
    padding: 5px 0px 5px 5px;
    line-height: 0;
  }

  &__photo {
    border-radius: 50%;
    z-index: 2;
  }

  &__flag {
    width: 20px;
    position: absolute;
  }

  &__name {
    font-size: 18px;
    padding: 10px 10px 0px 20px;
  }
}
</style>