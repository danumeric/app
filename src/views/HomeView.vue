<template>
  <div class="workspace__row _container">
    <LeftPanelComp />
    <CentralPanel />
  </div>
</template>

<script>
import LeftPanelComp from "@/components/leftPanel/LeftPanel";
import CentralPanel from "@/components/centralPanel/CentralPanel";
import router from "@/router";
import { useMeta } from "vue-meta";

export default {
  setup() {
    useMeta({
      title: "",
      htmlAttrs: { lang: "en", amp: true },
    });
  },
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
  beforeCreate() {
    if (!localStorage.getItem("token")) {
      router.push("/auth");
    }
  },
};
</script>
<style lang="scss" scoped>
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
