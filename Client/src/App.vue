<template>
  <div id="app">
    <quotiesHeader></quotiesHeader>
    <router-view></router-view>
    <quotiesFooter></quotiesFooter>
  </div>
</template>

<script>
import quotiesHeader from './components/plugins/appHeader.vue'
import quotiesFooter from './components/plugins/appFooter.vue'

export default {
  name: 'app',
  components : {
    quotiesHeader,
    quotiesFooter
  }
}
</script>

<style>

</style>
