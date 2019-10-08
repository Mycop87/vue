<template>
  <div class="login">
    <input placeholder="username" v-model="userName">
    <input placeholder="password" type="password" v-model="password">
    <button v-on:click="login">Login</button>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { AuthService } from '@/services/auth.service.ts';

  @Component
  export default class Login extends Vue {
    private userName: string = '';
    private password: string = '';
    private authService = new AuthService();

    private login() {
      this.authService.login(this.userName, this.password).then((res) => {
        const { token } = res.data ;
        this.authService.setToken(token);
        this.$router.push('/');
      });
    }
  }
</script>

