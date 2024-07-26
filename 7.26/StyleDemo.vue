<template>
  <p :style="{ color: activeColor }">Style绑定1</p>
  <p :style="styeleObject">Style绑定2</p>
</template>
<script>
export default {
  data() {
    return {
      activeColor: "green",
      styeleObject: {
        color: "red",
        fontSize: "60px",
      },
    };
  },
};
</script>
