<template>
  <div id="tabbar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style scoped>
  #tabbar {
    display: flex;
    background-color: #fafafa;
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    box-shadow: 0 -1px 1px rgba(200,200,200,.2);
  }
</style>