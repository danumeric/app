<template>
  <div class="_container">
    <h1>This is an auth page</h1>
    <router-link to="/reg">registration</router-link>

    <div class="auth__block">
      <form name="auth" class="auth">
        <input class="auth__fields" name="username" placeholder="login" />
        <input class="auth__fields" name="password" placeholder="password" />
        <input type="submit" value="login" class="auth__fields" />
      </form>
      <div class="auth__failed">{{ alertMessage }} </div>

    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: 'AuthView',
  data() {
    return {
      alertMessage: '',
      token: '',
    }
  },

  mounted() {
    let f = document.forms[0];
    f.addEventListener('submit', (async (e) => {
      e.preventDefault();
      let newUserObj = {
        username: f.username.value.toString(),
        password: f.password.value.toString(),
      };
      let response = await fetch('http://127.0.0.1:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(newUserObj)
      });
      let result = await response.json();
      this.alertMessage = result.message;
      this.token = result.token;
      if (this.token) {
        this.loginSuccessful(true);
        localStorage.setItem('token', this.token);
        setTimeout(() => {
          this.$router.push('/')
        }, 2000);
      }


    }))
  },
  methods: {
    ...mapMutations(['loginSuccessful']),
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

.auth {
  font-size: 20px;

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

    &:focus {
      border-color: #cccccc;
    }
  }
}
</style>
