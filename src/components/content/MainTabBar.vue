<template>
    <tab-bar>
      <tab-bar-item path="/zhuye">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/首页.png" alt="">
        </template>
        <template v-slot:item-_icon>
          <img src="@/assets/img/tabbar/_首页.png" alt="">
        </template>
        <template v-slot:item-text>
          <div slot="item-text">首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/fenlei">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/分类.png" alt="">
        </template>
        <template v-slot:item-_icon>
          <img src="@/assets/img/tabbar/_分类.png" alt="">
        </template>
        <template v-slot:item-text>
          <div slot="item-text">分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/gouwuche">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/购物车.png" alt="">
        </template>
        <template v-slot:item-_icon>
          <img src="@/assets/img/tabbar/_购物车.png" alt="">
        </template>
        <template v-slot:item-text>
          <div slot="item-text">购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/wode">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/我的.png" alt="">
        </template>
        <template v-slot:item-_icon>
          <img src="@/assets/img/tabbar/_我的.png" alt="">
        </template>
        <template v-slot:item-text>
          <div slot="item-text">我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from '../common/tabbar/TabBar.vue';
  import TabBarItem from '../common/tabbar/TabBarItem.vue';
  export default {
    name:'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>
