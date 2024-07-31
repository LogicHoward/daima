<template>
  <h3>Parent</h3>
  <Child2
    title="Parent数据"
    :book="bookInfo"
    :age="age"
    :names="names"
    :userInfo="userInfo"
  />
</template>
<script>
import Child2 from "./Child2.vue";
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
    Child2,
  },
};
</script>
<style></style>
