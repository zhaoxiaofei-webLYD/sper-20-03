<template>
  <div class="recomment">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recomment-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style>
.recomment {
  display: flex;
  widows: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 15px;
  border-bottom: 8px solid #eee;
}
.recomment-item {
  flex: 1;
}
.recomment-item img{
  width: 60px;
  height: 60px;
  margin-bottom:10px ;
}
</style>