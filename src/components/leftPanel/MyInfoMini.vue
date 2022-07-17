<template>
  <div class="workspace__element">
    <div class="myprofile">
      <div class="myprofile__photo">
        <img
          class="myprofile__img"
          :src="this.getMyProfile.selectedAvatar"
          :alt="this.getMyProfile.firstName"
        />
      </div>
      <div class="myprofile__name">
        <h3>{{ getMyProfile.firstName }} {{ getMyProfile.secondName }}</h3>
        <p>Online</p>
      </div>
      <div class="myprofile__button" @click="exit">
        <a href="#">Exit</a>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import router from "@/router";

export default {
  name: "MyInfoMini",
  components: {},

  computed: {
    ...mapGetters(["getMyProfile"]),
  },

  methods: {
    ...mapMutations(["clearAll"]),

    async exit() {
      this.clearAll();
      await localStorage.setItem("token", "");
      setTimeout(() => {
        router.push("/auth");
      }, 2);
    },
  },
};
</script>
<style lang="scss" scoped>
.workspace__element {
  flex: 0 0;
}

hr {
  border-top: 1px solid #69accd;
}

.myprofile {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  background-color: #00b1f4;
  &__button {
    background-color: #01aaeb;
    outline: 1px solid #f9fcfd;
    cursor: pointer;
    border-radius: 2px;
    padding: 1px 2px;
    margin: 0px 5px 0px 0px;
    align-self:flex-start;
    

    & a {
      color: #f9fcfd;
      font-size: 14px;
    }
  }
  &__photo {
    padding: 10px 0px 10px 10px;
  }
  &__name {
    color: #eafcef;
  }
  &__img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    outline: 3px solid #009cd3;
  }

  &__name {
    padding: 0px 0px 0px 15px;
    text-align: left;
    flex: 0 1 80%;
    p {
      font-size: 12px;
    }
  }
}
</style>