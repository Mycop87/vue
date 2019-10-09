<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        {{ msg }}
        <br>
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

  @Component
  export default class HelloWorld extends Vue {
    @Prop() private msg!: string;

    private get color() {
      return this.$store.state.color;
    }

    private set color(newValue) {
      this.$store.commit('saveGlobalColor', newValue);
    }
  }
</script>
