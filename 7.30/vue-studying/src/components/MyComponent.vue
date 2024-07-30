<template>
  <div class="container">{{ message }}</div>
</template>
<script>
export default {
  data() {
    return {
      message: "组件基础组成",
    };
  },
};
</script>
<style scoped>
.container {
  font-size: 30px;
  color: red;
}
</style>
