<template>
  <nav class="nav">
    <!-- <router-link to="/reg">reg</router-link>
    <router-link to="/auth">auth</router-link> -->
    <!-- <router-link to="/">Home</router-link> -->
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavigationLinks",

  computed: {
    ...mapGetters(["getTargetUserID"]),
  },
};
</script>