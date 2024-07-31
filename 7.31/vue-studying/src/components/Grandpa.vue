<template>
  <h3>Grandpa</h3>
  <!-- <Dad :message="message" /> -->
  <Dad />
</template>
<script>
import Dad from "./Dad.vue";
export default {
  provide() {
    // message: "数据",
    return {
      message: this.message,
    };
  },
  data() {
    return {
      message: "数据",
    };
  },
  components: {
    Dad,
  },
};
</script>
