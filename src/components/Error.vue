<template >
  <v-snackbar
    v-model="hasError"
    :bottom="false"
    :color="snackbarColor"
    :left="false"
    :multi-line="true"
    :right="true"
    :timeout="6000"
    :top="true"
    :vertical="false"
  >
    {{$store.state.errorText}}
    <v-btn
      dark
      text
      @click="closeSnackbar"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class ErrorComponent extends Vue {
    private snackbarColor: string = 'error';
    private snackbar: boolean = false;
    private closeSnackbar() {
      this.$store.commit('setErrorState');
    }

    private get hasError(): boolean {
      return this.$store.state.showError ;
    }
  }
</script>
