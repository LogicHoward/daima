<template>
  <h3>Child</h3>
  <button @click="dataDelivering">传递数据</button>
</template>
<script>
export default {
  methods: {
    dataDelivering() {
      //   console.log("test");
      this.$emit("someEvent", "Child数据");
    },
  },
};
</script>
