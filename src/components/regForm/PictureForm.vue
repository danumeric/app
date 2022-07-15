<template>
  <div class="av-form">
    <div class="av-form__button" @click="this.showGrid()">
      <img
        class="av-form__picked-avatar"
        :src="avatarPhoto || require(`@/assets/img/missing_avatar.svg`)"
        alt="choose avatar"
      />
    </div>
    <div class="av-form__button" @click="this.showGrid()">Choose avatar</div>
    <div class="av-form__grid-wrapper" v-if="isGridShow && fetchCompleted">
      <div
        class="av-form__grid-pics"
        v-for="pic of idsProfilePhotos"
        :key="pic"
      >
        <div class="av-form__pic">
          <!-- <img class="av-form__img" :src="pic.picture.medium" alt="avatar" /> -->
          <img
            class="av-form__img"
            :src="`https://randomuser.me/api/portraits/med/${choosedSex}/${pic}.jpg`"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const _ = require("lodash");

export default {
  name: "PictureForm",
  data() {
    return {
      isGridShow: false,
      fetchCompleted: false,
      picturesJson: {},
      choosedSex: "men",
      avatarPhoto: "",
      idsProfilePhotos: [],
    };
  },
  emits: ["selectedAvatar"],
  methods: {
    showGrid() {
      this.isGridShow = !this.isGridShow;
      this.fetchPicsUrls();
    },
    hideGridClear() {
      // when change gender
      this.isGridShow = false;
      this.$emit("selectedAvatar", "");
      this.avatarPhoto = "";
    },

    async fetchPicsUrls() {
      //form 9 random portraits id:
      this.idsProfilePhotos = _.shuffle(_.range(0, 99)).slice(0, 9);
      this.fetchCompleted = true;
      // this.picturesJson = {};
      const radioButtons = document.querySelectorAll('input[name="sex"]');
      for (const radioButton of radioButtons) {
        if (radioButton.checked) {
          this.choosedSex = radioButton.value;
          break;
        }
      }
    },
  },
  mounted() {
    document.addEventListener("click", async (e) => {
      if (e.target.classList.contains("av-form__img")) {
        let picked = document.querySelector(".pic-active");
        if (picked) picked.classList.toggle("pic-active");
        this.$emit("selectedAvatar", e.target.src);
        this.avatarPhoto = e.target.src;
        this.isGridShow = false;
        return;
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.av-form {
  display: flex;
  align-items: center;

  * {
    box-sizing: content-box;
  }

  &__grid-wrapper {
    position: absolute;
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    background-color: rgba(196, 196, 196, 0.468);
    padding: 5px;
  }

  &__grid-pics {
    padding: 5px;
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