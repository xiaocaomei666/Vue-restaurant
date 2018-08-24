<template>
  <div class="left-nav">
    <ul>
      <li>
        <i class="icon iconfont icon-xiaolian"></i>
        <div>欢迎页</div>
      </li>
      <li>
        <i class="icon iconfont icon-toutiao"></i>
        <div>收银</div>
      </li>
      <li>
        <i class="icon iconfont icon-dianpu"></i>
        <div>店铺</div>
      </li>
      <li>
        <i class="icon iconfont icon-meishi"></i>
        <div>外卖</div>
      </li>
      <li>
        <i class="icon iconfont icon-huiyuanqia"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="icon iconfont icon-dingdanjihe"></i>
        <div>统计</div>
      </li>
      <li>
        <i class="icon iconfont icon-shezhi"></i>
        <div>设置</div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.left-nav {
  color: #fff;
  font-size: 10px;
  height: 92%;
  background-color: rgb(34, 45, 50);
  float: left;
  width: 7%;
}

.iconfont {
  font-size: 24px;
}

.left-nav ul {
  padding: 0px;
  margin: 0px;
}

.left-nav li {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 15px;
  cursor: pointer;
}
</style>
<script>
export default ({
  name: 'leftNav'
})
</script>
