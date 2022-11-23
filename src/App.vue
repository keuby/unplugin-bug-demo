<template>
  <div class="w-full h-200px flex justify-center bg-blue-400">
    <div class="h-200px w-200px">
      <img alt="Vue logo" src="./assets/logo.png" />
      <test-comp></test-comp>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TestComp from './components/test-comp.vue';
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

:deep(.class-in-comp) {
  @apply text-blue-400;
}
</style>
