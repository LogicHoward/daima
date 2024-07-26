<template>
  <h3>{{ itbaizhan.name }}</h3>
  <p>{{ itbzContent }}</p>
</template>
<script>
export default {
  data() {
    return {
      itbaizhan: {
        name: "itbz",
        content: ["前端", "java", "python"],
      },
    };
  },
  computed: {
    itbzContent() {
      itbaizhan.content.length > 0 ? "yes" : "no";
    },
  },
};
</script>
