<template>
  <div class="flex-shrink-0 w-68 h-fit mr-2 ml-2 p-2 rounded bg-gray-400">
    <h3 class="pl-3 mb-2 text-base text-black font-medium">{{name}}</h3>
    <div id="tasks" class="overflow-y-auto scrolling-touch">
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  </div>
</template>

<script>
import TaskCard from './TaskCard.vue';

export default {
  name: 'TasksList',
  components: {
    TaskCard,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    tasks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
#tasks {
  max-height: 36rem;
}
@media (max-width: 768px) {
  #tasks {
    max-height: 55rem;
  }
}
@media (max-width: 360px) {
  #tasks {
    max-height: 31rem;
  }
}
</style>
