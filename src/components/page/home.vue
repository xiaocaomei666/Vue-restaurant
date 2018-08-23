<template>
  <div class="home">
    <el-row>
      <el-col :span="7">
        <div class="home-left">左边</div>
      </el-col>
      <el-col :span="17">
        <div class="home-right">右边</div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.home,
.el-row,
.el-col {
  height: 100%;
}
.home-left {
  height: 100%;
  background-color: sandybrown;
}
.home-right {
  height: 100%;
  background-color: skyblue;
}
</style>
<script>
export default {
  name: 'home'
}
</script>
