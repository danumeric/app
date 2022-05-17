<template>
  <div class="workspace__element">
    <div class="wrapper">
      <div class="myprofile">
        <p>You login as</p>
        <p>{{ getMyProfile.firstName }} {{ getMyProfile.secondName }}</p>
      </div>
      <div class="navigation" @click="exit">
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

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
}

.navigation {
  background-color: #69accd;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 0;
  margin: 0px 5px 0px 0px;
  flex: 0 1 20%;

  & a {
    color: black;
  }
}

.myprofile {
  flex: 0 1 80%;
}
</style>