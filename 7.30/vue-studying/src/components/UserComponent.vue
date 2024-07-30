<template>
  <h3>组件生命周期函数应用</h3>
  <p ref="name">哈哈哈</p>
  <ul>
    <li v-for="(item, index) of banner" :key="index">{{ item }}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      banner: [],
    };
  },
  mounted() {
    this.banner = ["b1", "b2", "b3"];
    console.log(this.$refs.name);
  },
  beforeMount() {
    console.log(this.$refs.name);
  },
  //   mounted() {
  //     console.log(this.$refs.name);
  //   },
};
</script>
