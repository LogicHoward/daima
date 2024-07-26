<template>
  <h3>事件传参</h3>
  <p @click="getName(item, $event)" v-for="(item, index) in names" :key="index">
    {{ item }}
  </p>
</template>
<script>
export default {
  data() {
    return {
      names: ["jack", "swift", "silly"],
    };
  },
  methods: {
    getName(name, e) {
      console.log(name);
      console.log(e);
    },
  },
};
</script>
