<template>
  <v-app>

      <div id="nav" v-if="!showLogin()">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/users">Users</router-link>
        <button v-on:click="logout">Logout</button>
      </div>
    <router-view/>
  </v-app>
</template>

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
