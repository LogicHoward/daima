<template>
  <h3>Component2</h3>
  <p>{{ func("传递的数据") }}</p>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    func: Function,
  },
};
</script>
