<template>
  <!-- <SlotsBase>
    <div>
      <h3>插入内容</h3>
    </div>
  </SlotsBase>
  <SlotsBase2>
    <template #head>
      <h3>{{ message }}</h3>
    </template>
    <template #tail>
      <p>{{ message }}</p>
    </template>
  </SlotsBase2> -->
  <!-- <SlotsAttr v-slot="slotProps">
    <h3>{{ currentTest }}-{{ slotProps.msg }}</h3>
    
  </SlotsAttr> -->
  <SlotsAttr>
    <template #header="slotProps">
      <h3>{{ currentTest }}-{{ slotProps.msg }}</h3>
    </template>
    <template #main="slotProps">
      <p>{{ slotProps.job }}</p>
    </template>
  </SlotsAttr>
</template>
<script>
import SlotsBase from "./SlotsBase.vue";
import SlotsBase2 from "./SlotsBase2.vue";
import SlotsAttr from "./SlotsAttr.vue";

export default {
  data() {
    return {
      message: "插槽内容续集",
      currentTest: "测试内容",
    };
  },
  components: {
    SlotsBase,
    SlotsBase2,
    SlotsAttr,
  },
};
</script>
