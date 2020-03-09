<template>
  <main class="px-4 pt-8 pb-4 bg-body">
    <div class="flex h-full overflow-x-auto">
      <TasksList name="Prueba" />
    </div>
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

<style lang="scss" scoped>
main {
  height: calc(100% - 48px);
}
</style>
