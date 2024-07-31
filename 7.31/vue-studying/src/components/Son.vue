<template>
  <h3>Son</h3>
  <p>{{ message }}</p>
</template>
<script>
export default {
  inject: ["message"],
  data() {
    return {};
  },
  props: {
    // message: String,
  },
};
</script>
