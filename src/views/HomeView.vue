<template>
  <div class="workspace__row _container" v-cloak>
    <LeftPanelComp />
    <CentralPanel />
  </div>
</template>

<script>
import LeftPanelComp from "@/components/leftPanel/LeftPanel";
import CentralPanel from "@/components/centralPanel/CentralPanel";

export default {
  name: "HomeView",
  data() {
    return {
      friends: [],
    };
  },
  components: {
    LeftPanelComp,
    CentralPanel,
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
._container {
  max-width: 1170px;
  margin: 0 auto;
  height: 100vh; // height of window
  min-height: 100vh;
}

.workspace__row {
  display: flex;
}
</style>
