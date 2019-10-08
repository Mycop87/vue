<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-date-picker v-model="date"></v-date-picker>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class About extends Vue {
    private get date() {
      return this.$store.state.globalDate;
    }

    private set date(newValue) {
      this.$store.commit('saveGlobalDate', newValue);
    }
  }
</script>

