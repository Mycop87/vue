<template >
  <div class="curtain" v-on:click="block" v-if="hasSpinner">
    <v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>
  </div>
</template>
<style lang="scss">
  .curtain{
    position: fixed;
    z-index: 9998;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(255,255,255, 0.8);
    .v-progress-circular{
      position: fixed;
      z-index: 9999;
      top:calc(50% - 35px);
      left:calc(50% - 35px);
    }
  }
</style>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class SpinnerComponent extends Vue {
    private get hasSpinner(): boolean {
      return this.$store.state.spinner > 0;
    }

    private block(event: Event): void {
      event.stopPropagation();
      event.preventDefault();
    }
  }
</script>
