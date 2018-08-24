<template>
  <div id="app">
    <top-nav></top-nav>
    <left-nav></left-nav>
    <div class="main">
      <transition mode="out-in" name="fade">
        <router-view/>
      </transition>
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
@import './assets/style/App.css';
@import './assets/style/transition.css';
</style>
