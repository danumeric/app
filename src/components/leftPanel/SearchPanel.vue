<template>
  <div class="search">
    <!-- <p>Search (press esc to cancel)</p> -->

    <form action>
      <div class="search__glass"></div>
      <input
        v-model="searchText"
        @keydown="onKeyEsc"
        type="text"
        placeholder="Search"
        class="search__input"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchPanel",
  emits: ["search-text-emit"],

  data() {
    return {
      searchText: "",
    };
  },
  beforeUpdate() {
    this.emitSearchText;
  },
  computed: {
    emitSearchText() {
      this.$emit("search-text-emit", this.searchText);
      return "";
    },
  },
  methods: {
    onKeyEsc(e) {
      if (e.code == "Escape") {
        this.searchText = "";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  padding: 5px 0;
  flex: 0 0;
  background-color: #f0fafc;
  &__input {
    width: 150px;
    font-size: 14px;
    background-color: #f0fafc;

    &::placeholder {
      color: #5ddff9;
    }
    &:focus {
      outline: 1px dashed #5ddff982;
    }
  }

  &__glass {
    display: inline-block;
    width: 18px;
    height: 18px;
    cursor: pointer;
    background-color: rgb(54, 194, 249);
    background-size: 125px 175px;
    -webkit-mask: url(@/assets/icons/ico_search.svg) no-repeat 50% 50%;
    mask: url(@/assets/icons/ico_search.svg) no-repeat 50% 50%;
    mask-size: cover;
    vertical-align: middle;
  }
}
</style>