<template>
  <div class="top-nav">
    <h1>
      <img src="../../assets/images/logo.png" alt="小草莓">
      <a class="top-nav-title">订餐系统管理平台</a>
    </h1>
  </div>
</template>
<style scoped>
.top-nav {
  width: 100%;
  height: 60px;
  text-align: left;
  box-sizing: border-box;
  background-color: #1d8ce0;
  color: #fff;
}
.top-nav h1 {
  margin: 0;
  height: 60px;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.top-nav img {
  width: 50px;
  height: 50px;
  margin: 0 10px;
}
.top-nav a {
  font-size: 22px;
}
</style>
<script>
export default {
  name: 'topNav'
}
</script>
