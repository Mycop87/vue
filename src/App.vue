<template>

  <v-app>
    <SpinnerComponent></SpinnerComponent>
    <ErrorComponent></ErrorComponent>
    <div id="nav" v-if="!showLogin()">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/users">Users</router-link> |

      <button v-on:click="logout">Logout</button>
    </div>
    <router-view/>
  </v-app>

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { AuthService } from '@/services/auth.service';
  import SpinnerComponent from '@/components/Spinner.vue';
  import ErrorComponent from '@/components/Error.vue';
  import router from '@/router';

  @Component({
    components: {SpinnerComponent, ErrorComponent},
  })
  export default class App extends Vue {
    private  authService = new AuthService(this.$store);

    private showLogin() {
      return !this.authService.token;
    }

    private logout() {
      this.authService.logout();
      router.push('/login');
    }
  }
</script>
