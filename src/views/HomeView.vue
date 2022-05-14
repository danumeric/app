<template>
  <div class="workspace__row _container">
    <LeftPanelComp />
    <CentralPanel />
  </div>

</template>

<script>
// @ is an alias to /src
import LeftPanelComp from "@/components/leftPanel/LeftPanel";
import CentralPanel from "@/components/centralPanel/CentralPanel";



export default {
  name: 'HomeView',
  data() {
    return {
      friends: [],
    }
  },
  components: {
    LeftPanelComp, CentralPanel
  },
  methods: {
  },
  computed: {
  },
  mounted(){

  }
}
</script>
<style lang="scss" scoped>
._container {
  max-width: 1170px;
  margin: 0 auto;
  height: 100vh;
  min-height: 100vh;
}

.workspace__row {
  display: flex; // 2 вертикальные колонки
  // flex-wrap: wrap;
}
</style>
