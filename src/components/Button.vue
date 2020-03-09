<template>
  <button class="button hover:bg-button-hovered">
    <i :class="icon" />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
