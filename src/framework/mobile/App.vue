<template>
  <div id="app">
    <!-- 移动端 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
// 引入全局重置样式
@import '../../styles/index.less';
</style>
