<template>
  <div class="flex-shrink-0 w-68 min-h-16 overflow-y-auto mr-2 ml-2 rounded bg-gray-400"></div>
</template>

<script>
export default {
  name: 'TasksList',
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

<style scoped>
div {
  height: fit-content;
}
</style>
