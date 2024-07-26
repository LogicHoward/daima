<template>
  <div v-bind:class="msg" :id="hhid">hh</div>
  <button :disabled="buttonStatus">按钮</button>
  <div v-bind="objectOfAtters">hh2</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World",
      hhid: "2",
      buttonStatus: false,
      objectOfAtters: {
        class: "class1",
        id: "id1",
      },
    };
  },
};
</script>
