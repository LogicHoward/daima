<template>
  <h3>组件事件</h3>
  <Child1 @someEvent="getHandle" />
  <p>{{ message }}</p>
</template>
<script>
import Child1 from "./Child1.vue";
export default {
  data() {
    return {
      message: "",
    };
  },
  components: {
    Child1,
  },
  methods: {
    getHandle(data) {
      console.log("触发了", data);
      this.message = data;
    },
  },
};
</script>
