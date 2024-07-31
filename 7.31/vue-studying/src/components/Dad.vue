<template>
  <h3>Dad</h3>
  <!-- <Son :message="message" /> -->
  <Son />
</template>
<script>
import Son from "./Son.vue";
export default {
  data() {
    return {};
  },
  components: {
    Son,
  },
  props: {
    message: String,
  },
};
</script>
