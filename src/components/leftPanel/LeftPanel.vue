<template>
  <div class="workspace__users">
    <div class="cont-left">
      <MyInfoMini />
      <SearchPanel @search-text-emit="(msg) => searchText = msg" />
      <NoFriendsErrSearch v-if="!isFriendsDisplayed && !isFriendListNull" />
      <NoFriendsInDB v-if="isFriendListNull" />

      <div class="contacts">
        <div class="leftcards" v-for="user in listFriends" :key="user.id">
          <UserLeftCard :user="user" @click="chooseCardColor(user._id)"/>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserLeftCard from "./UserLeftCard";
import NoFriendsErrSearch from "./NoFriendsErrSearch";
import { mapGetters, mapActions,mapMutations } from "vuex";
import MyInfoMini from "./MyInfoMini";
import SearchPanel from "./SearchPanel";
import NoFriendsInDB from "./NoFriendsInDB";
export default {
  name: 'LeftPanel',
  data() {
    return {
      searchText: '',
      
     }
  },
  components: {
    UserLeftCard, MyInfoMini, SearchPanel, NoFriendsErrSearch, NoFriendsInDB
  },
  computed: {
    ...mapGetters(['getFriendsDB', 'getFliteredFriends', 'isFriendListNull']),

  listFriends(){
return this.getFliteredFriends(this.searchText)
  },  
    isFriendsDisplayed() {
      if (this.getFliteredFriends(this.searchText).length === 0) return false;
      return true;
    }
  },
  methods: {
    ...mapActions(['fetchFriends']),
    ...mapMutations(['clearAll']),

     chooseCardColor(id){
       for (let i = 0; i < this.listFriends.length; i++){
         this.listFriends[i].userChoosedColor = '';
       }
      this.listFriends.find(item=> item._id === id).userChoosedColor = 'choosed-usercard';
      console.log(this.listFriends);
     }
  },
  async mounted() {
    this.clearAll();
    this.fetchFriends()
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  background: rgb(217, 245, 250);
  background: radial-gradient(
    circle,
    rgb(210, 236, 241) 0%,
    rgba(235, 244, 255, 1) 100%
  );
}
.cont-left {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.workspace__users {
  position: relative;
  flex: 0 1 30%;
  //border: 2px solid #5e5373;
}
.contacts {
  overflow-y: scroll;

  flex: 1 1 50%;

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
</style>