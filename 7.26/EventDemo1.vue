<template>
  <h3>内联事件处理器</h3>
  <div @click="count++">add</div>
  <p>{{ count }}</p>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>
