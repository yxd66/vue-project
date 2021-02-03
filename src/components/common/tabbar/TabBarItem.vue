<template>
  <div class="item" @click="itemClick">
    <div v-if="!active">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-_icon"></slot>
    </div>
    <div :style="style">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#fb7299'
      }
    },
    computed: {
      active () {
        // console.log(this.$route.path)
        // console.log(this.path)
        return this.$route.path.indexOf(this.path) != -1
      },
      style () {
        return this.active ? {color:this.activeColor} : {}
      }
    },
    methods: {
      itemClick () {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .item {
    flex: 1;
    height: 49px;
    text-align:center;
    font-size: 14px;
    color: #bfbfbf;
  }
</style>