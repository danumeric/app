<template>
  <div class="workspace__element">
    <div class="wrapper">
      <div class="navigation">
        <a href="#" @click="exit">Exit</a>
      </div>
      <div class="myprofile">
        <p>Login as</p>
        <p> {{ getMyProfile.firstName }} {{ getMyProfile.secondName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import NavigationLinks from "@/components/navigation/NavigationLinks";
import router from '@/router'

export default {
  name: 'MyInfoMini',
  components: {
    //  NavigationLinks
  },

  computed: {
    ...mapGetters(['getMyProfile']),
   // ...mapMutations(['updateMessagesDb', 'updateDisplayedMessages']),
    
  },
  methods: {
    async exit() {
      this.$store.state.messages = [];
      this.$store.state.displayedMessages = [];
      this.$store.state.targetUserID = '';

      
     await localStorage.setItem('token', '');
     await router.push('/auth');


    }
  }
}
</script>
<style lang="scss" scoped>
.workspace__element {
  flex: 0 0;
  outline: 1px solid #5e5373;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation {
  flex: 0 1 20%;
}

.myprofile {
  flex: 0 1 80%;

}

.nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>