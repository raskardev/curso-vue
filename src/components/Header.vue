<template>
  <header class="flex p-2 justify-between items-center bg-header text-white">
    <div class="flex w-1/4">
      <Button icon="fas fa-home" />
      <Button icon="fab fa-trello" />
    </div>
    <div class="flex w-2/4 justify-center items-center">
      <img class="w-auto h-8" src="../assets/trello.png" alt="Trello logo" />
    </div>
    <div class="flex w-1/4 justify-end">
      <Button icon="fas fa-plus" />
      <Button icon="fas fa-info" />
      <Button icon="fas fa-bell" />
    </div>
  </header>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Header',
  components: {
    Button,
  },
};
</script>
