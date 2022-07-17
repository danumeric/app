<template>
  <div class="workspace__element">
    <div class="window" v-if="getTargetUserID">
      <div class="window__row window__row_top">
        <p></p>
        <div class="fieldmessages">
          <div
            class="message"
            v-for="ObjectMessage in getDisplayedMessages"
            :key="ObjectMessage._id"
          >
            <ChatComponent :ObjectMessage="ObjectMessage" />
          </div>
        </div>
      </div>
      <div class="window__row window__row_bot">
        <BottomFields />
      </div>
    </div>
    <NoChoosedConverstion v-if="!getTargetUserID" />
  </div>
</template>
<script>
import SocketioService from "@/services/socketio.service.js";
import BottomFields from "./BottomFields";
import ChatComponent from "./ChatComponent";
import NoChoosedConverstion from "./NoChoosedConverstion";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "CentralPanel",
  data() {
    return {
      isConnected: false,
      socketMessage: "",
    };
  },
  components: {
    BottomFields,
    ChatComponent,
    NoChoosedConverstion,
  },

  computed: {
    ...mapGetters([
      "getAllMessages",
      "getTargetUserID",
      "getDisplayedMessages",
    ]),
  },
  created() {
    SocketioService.setupSocketConnection();
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
  methods: {
    ...mapActions(["fetchGetMessages"]),
  },
  async mounted() {
    this.fetchGetMessages();
  },
};
</script>

<style lang="scss" scoped>
.workspace__element {
  flex: 0 1 70%;
  outline: 1px solid #138488;
}

.window {
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__row_top {
    overflow-y: scroll;
    flex: 1 1 auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #69accd;
      border-radius: 10px;
    }
  }

  &__row_bot {
  }
}

.fieldmessages {
  //height: calc(100vh - 20px); //TODO
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
</style>