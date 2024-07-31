<template>
  <h3>组件的生命周期</h3>
  <p>{{ message }}</p>
  <button @click="update">修改数据</button>
</template>
<script>
export default {
  data() {
    return {
      message: "更新之前",
    };
  },
  methods: {
    update() {
      this.message = "更新之后";
    },
  },
  beforeCreate() {
    console.log("组件创建之前");
  },
  created() {
    console.log("组件创建之后");
  },
  beforeMount() {
    console.log("组件渲染之前");
  },
  mounted() {
    console.log("组件渲染之后");
  },
  beforeUpdate() {
    console.log("组件更新之前");
  },
  updated() {
    console.log("组件更新之后");
  },
  beforeUnmount() {
    console.log("组件销毁之前");
  },
  unmounted() {
    console.log("组件销毁之后");
  },
};
</script>
