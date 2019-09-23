<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe658;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe63c;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right arrow-icon">
      城市
      <span class="iconfont">&#xe600;</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
// 但是在样式里面应用样式需要使用@符号的话，必须前面加上~
@import '~styles/varibles.styl'
.header
  line-height 0.86rem
  display flex
  background $bgColor
  color #fff
  .header-left
    width 0.64rem
    float left
    .back-icon
      text-align center
      font-size 0.8rem
  .header-input
    flex 1
    background #ffffff
    height 0.62rem
    line-height 0.62rem
    border-radius 0.1rem
    margin-top 0.12rem
    margin-left 0.2rem
    padding-left 0.2rem
    color #ccc
  .header-right
    width 1.24rem
    float right
    text-align center
    .arrow-icon
      margin-left -0.04rem
      font-size 0.24rem
</style>