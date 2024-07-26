<template>
  <div v-if="flag">if</div>
  <div v-else="flag">else</div>

  <div v-if="input === 'A'">A</div>
  <div v-else-if="input === 'B'">B</div>
  <div v-else-if="input === 'C'">C</div>
  <div v-else>not A|B|C</div>

  <div v-show="flag">show</div>
</template>
<script>
export default {
  data() {
    return {
      flag: true,
      input: "C",
    };
  },
};
</script>
