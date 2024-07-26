<template>
  <h3>时间修饰符</h3>
  <a @click.prevent="clickHandle" href="https://baidu.com">哈哈哈</a>
  <div @click="clickDiv">
    <p @click.stop="clickP">测试冒泡</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickHandle(e) {
      // e.preventDefault();

      console.log("点击了");
    },
    clickDiv() {
      console.log("div");
    },
    clickP(e) {
      // e.stopPropagation();

      console.log("p");
    },
  },
};
</script>
