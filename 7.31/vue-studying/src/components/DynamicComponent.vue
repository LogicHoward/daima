<template>
  <keep-alive>
    <component :is="tabComponent"></component>
  </keep-alive>

  <button @click="changeHandle">切换</button>
</template>
<script>
import DynamicComponentA from "./DynamicComponentA.vue";
// import DynamicComponentB from "./DynamicComponentB.vue";
import { defineAsyncComponent } from "vue";
const DynamicComponentB = defineAsyncComponent(() =>
  import("./DynamicComponentB.vue")
);
export default {
  data() {
    return {
      tabComponent: "DynamicComponentA",
    };
  },
  components: {
    DynamicComponentA,
    DynamicComponentB,
  },
  methods: {
    changeHandle() {
      this.tabComponent =
        this.tabComponent == "DynamicComponentA"
          ? "DynamicComponentB"
          : "DynamicComponentA";
    },
  },
};
</script>
