<template>
  <div class="av-form">
    <div class="av-form__button " @click="this.showGrid()"><img class="av-form__picked-avatar"
        :src="avatarPhoto || require(`@/assets/img/missing_avatar.svg`)" alt="choose avatar"></div>
    <div class="av-form__button" @click="this.showGrid()">Choose avatar</div>
    <div class="av-form__grid-wrapper" v-if="isGridShow && fetchCompleted">
      <div class="av-form__grid-pics" v-for="pic of picturesJson.results" :key="pic.id.value">
        <div class="av-form__pic"> <img class="av-form__img" :src="pic.picture.medium" alt="avatar" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PictureForm',
  data() {
    return {
      isGridShow: false,
      fetchCompleted: false,
      picturesJson: {},
      choosedSex: 'male',
      avatarPhoto: ''

    }
  },
  emits: ['selectedAvatar'],
  methods: {
    showGrid() {
      this.isGridShow = !this.isGridShow;
      this.fetchPicsUrls();
    },
    hideGridClear() { // when change sex
      this.isGridShow = false;
      this.$emit('selectedAvatar', '');
      this.avatarPhoto = '';
    },

    async fetchPicsUrls() {
      this.picturesJson = {};
      const radioButtons = document.querySelectorAll('input[name="sex"]');
      for (const radioButton of radioButtons) {
        if (radioButton.checked) {
          this.choosedSex = radioButton.value;
          break;
        }
      }
      let resp = await fetch(`https://randomuser.me/api/?inc=picture,id&results=9&gender=${this.choosedSex}`);
      if (resp.ok) {
        let respJson = await resp.json();
        this.fetchCompleted = true;
        this.picturesJson = respJson;
      } else {
        alert("Ошибка HTTP: " + resp.status);
      }
    }
  },
  mounted() {
    document.addEventListener('click', (async (e) => {
      if (e.target.classList.contains("av-form__img")) {
        let picked = document.querySelector(".pic-active");
        if (picked) picked.classList.toggle("pic-active");
        //  let t = e.target.closest('.av-form__pic');
        //  t.classList.toggle("pic-active");
        this.$emit('selectedAvatar', e.target.src);
        this.avatarPhoto = e.target.src;
        this.isGridShow = false;
        return;
      }
    }));

  }
}
</script>
<style lang="scss" scoped>
.av-form {
  display: flex;
  align-items: center;

  * {
    box-sizing: content-box;
  }

  &__grid-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  &__grid-pics {
    flex: 1 1 33%;
    padding: 10px 0px 0px 0px;
    line-height: 0;
  }

  &__pic {
    cursor: pointer;
    display: inline-block;
  }

  &__picked-avatar {
    width: 72px;
    height: 72px;
    border-radius: 50%;
  }

  &__button {
    margin: 10px 0px 0px 20px;
    cursor: pointer;
  }
}

.pic-active {
  outline: 5px solid black;
}
</style>