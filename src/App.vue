<template>
  <v-app>

      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <button v-if="!showLogin()"  v-on:click="logout">Logout</button>
      </div>
    <router-view/>
  </v-app>
</template>
<style lang="scss">
  .v-application{
    input{
      border: 1px solid #ff00ff;
      color:#000000;
    }
    button{
      border: 1px solid #515151;
      padding: 2px 10px;
    }
  }

</style>
<script lang="ts">
import Vue from 'vue';
import { AuthService } from '@/services/auth.service';
import router from '@/router';

const authService =  new AuthService();

export default Vue.extend({
  name: 'App',

  data: () => ({
    showLogin: () => {
      return !authService.token;
    },
    logout: () => {
      authService.logout();
      router.push('/login');
    },
  }),
});
</script>
