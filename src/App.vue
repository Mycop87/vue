<template>

  <v-app>
    <SpinnerComponent></SpinnerComponent>
    <ErrorComponent></ErrorComponent>
    <div id="nav" v-if="!showLogin()">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/users">Users</router-link>
      <button v-on:click="logout">Logout</button>
    </div>
    <router-view/>
  </v-app>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {AuthService} from '@/services/auth.service';
  import SpinnerComponent from '@/components/Spinner.vue';
  import ErrorComponent from '@/components/Error.vue';
  import router from '@/router';

  const authService = new AuthService();

  export default Vue.extend({
    name: 'App',
    components: {SpinnerComponent, ErrorComponent},
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
