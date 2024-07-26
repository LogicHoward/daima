<template>
  <h3>key属性添加到v-for中</h3>
  <p v-for="(item, index) in names" :key="index">{{ item }}</p>
  <div v-for="item in result" :key="item.id">
    <p>{{ item.title }}</p>
    <img :src="item.avatar" alt="" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      names: ["slim", "james", "lampard"],
      result: [
        {
          id: 2261677,
          title:
            "鄂尔多斯 | 感受一座城市的璀璨夜景 感受一座城市，除了白日里的车水马龙，喧嚣繁华",
          avatar: "https://pic.qyer.com/avatar/002/25/77/30/200?v=1560226451",
        },
        {
          id: 2261566,
          title:
            "成都这家洞穴暗黑风咖啡厅酷毙了‼️早C晚A走起 ☕️ 成都天气这么热🔥 咖啡☕️人必",
          avatar: "https://pic.qyer.com/avatar/011/07/08/69/200?v=1572185180",
        },
        {
          id: 2261662,
          title:
            "【川西新龙•措卡湖】措卡湖，意为“乱石丛中的黑色海水”，神秘小众 原汁原味。 深",
          avatar: "https://pic.qyer.com/avatar/009/88/48/58/200?v=1507386782",
        },
      ],
    };
  },
};
</script>
