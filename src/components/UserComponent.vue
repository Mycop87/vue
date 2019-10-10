<template>
  <div>
    <v-card-title class="headline grey lighten-2" primary-title>
      {{header}}
    </v-card-title>
    <v-form ref="form" :lazy-validation="lazy" v-model="valid">
      <v-simple-table>
        <template>
          <tbody>
          <tr>
            <td>
              <v-text-field
                v-model="user.email"
                :rules="emailRules"
                :readonly="user.isDefault"
                label="Email"
                required
              ></v-text-field>
            </td>
          </tr>
          <tr v-if="mode === 'CREATE' ">
            <td>
              <v-text-field
                v-model="user.password"
                :type="'password'"
                :readonly="user.isDefault"
                :rules="passRules"
                label="Password"
                required
              ></v-text-field>
            </td>
          </tr>
          <tr>
            <td>
              <v-text-field
                v-model="user.firstName"
                :rules="nameRules"
                :readonly="user.isDefault"
                label="First Name"
                required
              ></v-text-field>
            </td>
          </tr>
          <tr>
            <td>
              <v-text-field
                v-model="user.lastName"
                :rules="nameRules"
                :readonly="user.isDefault"
                label="Last Name"
                required
              ></v-text-field>
            </td>
          </tr>
          <tr>
            <td>
              <v-text-field
                v-model="user.phone"
                :rules="phoneRules"
                :readonly="user.isDefault"
                label="Phone"
                required
              ></v-text-field>
            </td>
          </tr>
          </tbody>

        </template>
      </v-simple-table>

      <v-divider></v-divider>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn text @click="()=>{onCloseDialog()}">
          Cancel
        </v-btn>
        <v-btn :disabled="!valid" color="primary" @click="()=>{onSave()}">
          Save
        </v-btn>

      </v-card-actions>
    </v-form>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { UserService } from '@/services/user.service.ts';
  import { IUser } from '@/interfaces/user.interface.ts';
  import { isObjectsSimilar } from '@/utils/main.ts';
  import Vuetify from 'vuetify';

  @Component({
    vuetify: new Vuetify(),
  })
  export default class UserComponent extends Vue {
    public valid: boolean = true;
    public lazy: boolean  = false;
    @Prop() private user!: IUser;
    @Prop() private header!: string;
    @Prop() private mode!: 'EDIT' | 'CREATE';

    private phoneRules = [(v: any) => !!v];

    private emailRules = [
      (v: any) => !!v || 'E-mail is required', (v: any) => /.+@.+/.test(v) || 'E-mail must be valid',
    ];

    private passRules = [
      (v: any) => !!v || 'Password is required', (v: any) => !v || v.length > 3 || 'Password must be longest',
    ];

    private nameRules = [
      (v: any) => !!v || 'is required',
    ];

    private onCloseDialog(): void {
      (this.$refs.form as Vue & { resetValidation: () => {} }).resetValidation();
      this.$emit('onCancel');
    }

    private onSave(): void {
      (this.$refs.form as Vue & { resetValidation: () => {} }).resetValidation();
      this.$emit('onSave', this.user);
    }
  }
</script>
