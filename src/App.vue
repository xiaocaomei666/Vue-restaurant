<template>
  <div id="app">
    <top-nav></top-nav>
    <left-nav></left-nav>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
import topNav from '@/components/common/topNav'
export default {
  name: 'App',
  components: {
    leftNav, topNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  float: left;
  width: 93%;
  background-color: #eff2f7;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.mt20{
  margin-top: 20px;
}

.mr20{
  margin-right:20px;
}

.mb20{
  margin-bottom: 20px;
}

.p10{
  padding:10px;
}

/* tab切换 */
.el-tabs__item{
   font-size: 17px;
}
</style>
