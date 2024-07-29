<template>
  <h3>Parent</h3>
  <Child
    title="Parent数据"
    :book="bookInfo"
    :age="age"
    :names="names"
    :userInfo="userInfo"
  />
</template>
<script>
import Child from "./Child.vue";
export default {
  data() {
    return {
      bookInfo: "三体",
      age: 12,
      names: ["one", "two", "three"],
      userInfo: {
        name: "jack",
        age: 20,
      },
    };
  },
  components: {
    Child,
  },
};
</script>
<style></style>
