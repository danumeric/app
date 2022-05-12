<template>
  <div class="search">
    <p>Search (press esc to cncl)</p>

    <form action>
      <input
        v-model="searchText"
        @keydown="onKeyEsc"
        type="text"
        placeholder="search friend"
        class="search__input"
      />
    </form>
  </div>
</template>

<script>

export default {
  name: 'SearchPanel',
  emits: ['search-text-emit'],

  data() {
    return {
      searchText: '',
    }
  },
  beforeUpdate() {
    this.emitSearchText;
  },
  computed: {
    emitSearchText() {
      this.$emit('search-text-emit', this.searchText);
      return '';
    }

  },
  methods: {
    onKeyEsc(e) {
      if (e.code == 'Escape') {
        this.searchText = '';

      }
    }
  }
}
</script>
<style lang="scss" scoped>
.search {
  flex: 0 0;
  outline: 2px solid #5e5373;

  &__input {
    outline: 1px solid black;
  }
}
</style>