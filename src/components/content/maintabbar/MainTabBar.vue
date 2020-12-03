<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
      <!-- 使用了路径别名 -->
        <img slot="item-icon" src="~assets/img/TabBar/1 (4).svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/TabBar/2 (1).svg" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/categroy" activeColor="red">
        <img slot="item-icon" src="~assets/img/TabBar/1 (1).svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/TabBar/2 (2).svg" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
        <img slot="item-icon" src="~assets/img/TabBar/1 (2).svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/TabBar/2 (3).svg" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <img slot="item-icon" src="~assets/img/TabBar/1 (3).svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/TabBar/2 (4).svg" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  components:{
    TabBar,
    TabBarItem
  }
};
</script>
<style>
</style>