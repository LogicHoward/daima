<template>
  <h3>方法事件处理器</h3>
  <div @click="addCount">add</div>
  <p>{{ count }}</p>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount(e) {
      e.target.innerHTML = "add" + this.count;
      this.count++;
    },
  },
};
</script>
