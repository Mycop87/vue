<template>
  <HelloWorld msg="dfsdgdf bdsfsdfsdf"/>
</template>

<script lang="ts">
  import Vue from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

  export default Vue.extend({
    components: {
      HelloWorld,
    },
  });
</script>
