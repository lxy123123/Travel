<template>
  <div>
    <home-header></home-header>
  </div>

</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  // HomeHeader是局部组件，在组件中需要注册一下
  components: {
    HomeHeader
  }
}
</script>

<style>
</style>