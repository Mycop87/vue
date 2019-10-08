<template>
  <div class="create-user">
    <input placeholder="email" v-model="email" >
    <input placeholder="password" type="password" v-model="password" >
    <button v-on:click="create">Create</button>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { UserService } from '@/services/user.service.ts';
  import { ICredentials } from '@/interfaces/auth.interface.ts';

  @Component
  export default class CreateUser extends Vue {
    private email: string = '';
    private password: string = '';
    private userService = new UserService();

    private create() {
      this.userService.createUser({ email: this.email, password: this.password } as ICredentials).then((res) => {
        this.$router.push('/login');
      });
    }
  }
</script>

