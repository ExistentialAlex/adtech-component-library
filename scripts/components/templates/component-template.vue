<script setup lang="ts">
interface Props {
  myprop: string;
}

defineProps<Props>();
</script>

<template>
  <h1 class="my-class">{{ myprop }}</h1>
</template>

<style scoped>
.my-class {
  color: #fff;
}
</style>
