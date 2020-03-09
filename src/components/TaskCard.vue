<template>
  <div class="flex flex-col w-full min-h-40 h-fit rounded-md pb-2 mb-2 bg-white">
    <img class="rounded-md max-h-48 overflow-hidden" src="../assets/logo.png" alt="Logo" />
    <h4 class="pl-3 text-base text-gray-800">Prueba</h4>
  </div>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    task: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>
