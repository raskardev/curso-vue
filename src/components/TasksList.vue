<template>
  <div class="w-68 overflow-y-auto rounded bg-gray-400"></div>
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
