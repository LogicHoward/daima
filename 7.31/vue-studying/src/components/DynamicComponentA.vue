<template>
  <h3>ComponentA</h3>
  <p>{{ message }}</p>
  <button @click="update">更新数据</button>
</template>

<script>
export default {
  data() {
    return {
      message: "老数据 ",
    };
  },
  beforeUnmount() {
    console.log("卸载之前");
  },
  unmounted() {
    console.log("卸载之后");
  },
  methods: {
    update() {
      this.message = "新数据 ";
    },
  },
};
</script>
