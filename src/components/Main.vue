<template>
  <main class="flex overflow-x-auto py-8 px-2 bg-body">
    <TasksList name="Prueba" />
  </main>
</template>

<script>
import TasksList from './TasksList.vue';

export default {
  name: 'Main',
  components: {
    TasksList,
  },
};
</script>

<style scoped>
main {
  height: calc(100% - 48px);
}
</style>
