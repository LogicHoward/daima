<template>
  <h3>列表渲染</h3>
  <div v-for="(item, index) in names">{{ item }}-{{ index }}</div>
  <div v-for="(value, key, index) in userInfo">
    {{ value }}-{{ key }}-{{ index }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      names: ["jack", "swift", "silly"],
      userInfo: {
        name: "jack",
        age: 18,
        sex: "男",
      },
    };
  },
};
</script>
