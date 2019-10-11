<template>
  <div>
    <v-btn color="primary" v-on:click="onCreateUserDialogOpen">Create user</v-btn>
    <v-simple-table fixed-header height="300px">
      <template>
        <thead>
        <tr>
          <th class="text-left">Email</th>
          <th class="text-left">Firstname</th>
          <th class="text-left">Lastname</th>
          <th class="text-left">Phone</th>
          <th class="text-left">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.email" v-on:click="()=>{selectUser(user)}">
          <td>{{ user.email }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.phone }}</td>
          <td><button v-on:click="(e)=>{deleteUser(e, user)}">Delete</button></td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-dialog
      v-model="editUserDialog"
      width="500"
    >
      <v-card>
      <UserComponent
        v-bind:user="activeUser"
        header="Edit User" mode="EDIT"
        @onSave="(user)=>{onEditUser(user)}"
        @onCancel="()=>{editUserDialog = false}"
      />
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="createUserDialog"
      width="500"
    >
      <v-card>
        <UserComponent
          v-bind:user="activeUser"
          header="Create New User"
          mode="CREATE"
          @onSave="(user)=>{onCreateUser(user)}"
          @onCancel="()=>{createUserDialog = false}"
        />
      </v-card>
    </v-dialog>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { UserService } from '@/services/user.service.ts';
  import UserComponent from '@/components/UserComponent.vue';
  import { ICredentials } from '@/interfaces/auth.interface.ts';
  import { IUser } from '@/interfaces/user.interface.ts';
  import { EmptyUser } from '@/constants/user.ts';
  import Vuetify from 'vuetify';

  @Component({
    components: { UserComponent },
    vuetify: new Vuetify(),
  })
  export default class Users extends Vue {
    private userService              = new UserService(this.$store);
    private activeUser: IUser | null = null;
    private editUserDialog: boolean = false;
    private createUserDialog: boolean = false;

    private created() {
      this.getUsers();
    }

    private selectUser(user: IUser): void {
      this.activeUser = user;
      this.editUserDialog = true;
    }

    private onCreateUser(newUser: IUser): void {
      this.userService.createUser(newUser).then((resp: any) => {
        const { data } = resp;
        this.$store.commit('addUser', data);
        this.createUserDialog = false;
      });
    }

    private onEditUser(user: IUser): void {
      this.userService.updateUser(user).then(() => {
        this.$store.commit('changeUser', user);
        this.editUserDialog = false;
      }, (error: any) => {
        this.$store.commit('setErrorState', error);
      });
    }

    private onCreateUserDialogOpen(): void {
      this.activeUser = { ...EmptyUser};
      this.createUserDialog = true;
    }

    private getUsers(): void {
      this.userService.fetchUsers().then((resp: any) => {
        const { data } = resp;
        this.$store.commit('setUsers', data as IUser);
      });
    }

    private get users(): IUser[] {
      return this.$store.state.users;
    }

    private deleteUser(event: Event, user: IUser): void {
      event.stopPropagation();
      event.preventDefault();
      this.userService.deleteUser(`${user.id}`).then(() => {
        const users = this.$store.state.users.filter((usr: IUser) => {
          return usr.id !== user.id;
        });
        this.$store.commit('setUsers', users);
      }, (error: any) => {
        this.$store.commit('setErrorState', error);
      });
    }
  }
</script>
