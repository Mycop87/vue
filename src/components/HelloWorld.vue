<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        {{ msg }}
        <button v-on:click="getUsers">get users</button>
        <br>
        <ul>
          <li v-bind:style="{ color: [color] }" v-for="user in users" v-on:click="()=>{deleteUser(user)} ">
            {{user.firstName}}   {{user.lastName}} {{user.email}} {{user.phone}}
          </li>
        </ul>
      </v-flex>
      <v-flex xs12>
        <v-color-picker v-model="color"> </v-color-picker>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { UserService } from '@/services/user.service.ts';
  import { IUser } from '@/interfaces/user.interface.ts';

  @Component
  export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
    private userService = new UserService();

    private get color() {
      return this.$store.state.color;
    }

    private set color(newValue) {
      this.$store.commit('saveGlobalColor', newValue);
    }

    private getUsers() {
      this.$store.dispatch('loadUsers');
    }

    private get users(): IUser[] {
      return this.$store.state.users;
    }

    private deleteUser(user: IUser): void {
      this.userService.deleteUser( user._id as string).then(() => {
        const users = this.users.filter((usr) => {
          return usr._id !== user._id;
        });
        this.$store.commit('setUsers', users);
      });
    }
  }
</script>
