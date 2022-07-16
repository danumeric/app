<template>
  <div class="redirect">
    <h1 class="redirect__text">Not registered yet?</h1>
    <router-link to="/reg" class="redirect__link"
      >Click for registration</router-link
    >
  </div>

  <div class="_container">
    <div class="auth__block">
      <form name="auth" class="auth">
        <input class="auth__fields" name="username" placeholder="login" />
        <input
          class="auth__fields"
          name="password"
          type="password"
          placeholder="password"
        />
        <input
          type="submit"
          value="login"
          class="auth__fields auth__fields_submit"
        />
      </form>
      <div class="auth__failed">{{ alertLoginMessage }}</div>

      <div @click="fillLoginUser" class="auth__fill">
        Fill in login and password automatically
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import SocketioService from "@/services/socketio.service.js";

export default {
  name: "AuthView",
  data() {
    return {
      alertLoginMessage: "",
      token: "",
    };
  },

  mounted() {
    SocketioService.disconnect();
    const formLogin = document.forms[0];
    formLogin.addEventListener("submit", async (e) => {
      e.preventDefault();
      //send login data to server
      let res = await this.loginInApp({
        username: formLogin.username.value.toString(),
        password: formLogin.password.value.toString(),
      });
      this.alertLoginMessage = res;
    });
  },
  methods: {
    ...mapActions(["loginInApp"]),
    ...mapMutations(["loginSuccessful"]),
    fillLoginUser() {
      let dataForLogin = [
        { Danil123: "2222" },
        { Carina123: "2222" },
        { Alex123: "2222" },
        { Margarete123: "2222" },
      ];
      let rand = Math.random() * 4;
      const formLogin = document.forms[0];
      const fillLogin = Object.keys(dataForLogin[Math.floor(rand)])[0];
      const fillPassword = Object.values(dataForLogin[Math.floor(rand)])[0];

      formLogin.username.value = fillLogin;
      formLogin.password.value = fillPassword;
      return dataForLogin[Math.floor(rand)];
    },
  },
};
</script>

<style lang="scss" scoped>
._container {
  margin: 10px auto 0px auto;
  max-width: 1170px;
  height: 100vh;
  min-height: 100vh;
}
.redirect {
  font-size: 16px;
  &__text {
    color: #747b8b;
    display: block;
    margin: 5px 0px 0px 0px;
  }
  &__link {
    text-decoration: underline;
    color: rgb(90, 90, 90);
    display: inline-block;
    margin: 5px 0px 0px 0px;
  }
}
.auth {
  font-size: 20px;

  &__fill {
    cursor: pointer;
    margin: 35px 0 0 0;
    padding: 10px 10px;
    background-color: white;
    border-bottom-width: 3px;
    border-radius: 5px;
    outline: 0;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  &__block {
    position: relative;
    display: block;
    width: 100%;
    max-width: 300px;
    margin: auto;
    padding: 30px;
    background-color: rgb(241, 248, 251);
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }

  &__failed {
    color: red;
    margin: 10px 0px 0px 0px;
  }

  &__fields {
    display: inline-block;
    width: 100%;
    padding: 0 20px;
    line-height: 50px;
    height: 65px;
    background-color: white;
    outline: 2px solid #e6e6e6;
    border-bottom-width: 3px;
    border-radius: 5px;
    outline: 0;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
    &_submit {
      cursor: pointer;
    }
    &:focus {
      border-color: #3e7ea2;
    }
  }
}
</style>
