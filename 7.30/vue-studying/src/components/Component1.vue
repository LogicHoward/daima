<template>
  <h3>Component1</h3>
  <Component2 :func="func" />
</template>
<script>
import Component2 from "./Component2.vue";
export default {
  data() {
    return {
      message: "",
    };
  },
  components: {
    Component2,
  },
  methods: {
    func(data) {
      console.log(data);
    },
  },
};
</script>
