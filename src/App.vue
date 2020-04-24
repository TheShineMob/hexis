<template>
  <div id="app">
    <main-nav-bar />
    <router-view v-if="isRouterAlive"/>
    <main-footer />
  </div>
</template>

<script>


  import MainNavBar from "@/components/content/mainnavbar/MainNavBar";
  import MainFooter from "@/components/content/mainfooter/MainFooter";

  export default {
    name: "App",
    components: {
      MainFooter,
      MainNavBar
    },
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false
        this.$nextTick(() => {
          this.isRouterAlive = true
        })
      }
    }
  }
</script>

<style lang="less">
  @import "./assets/css/base.css";
  #app {
    overflow-x: hidden;
  }
</style>
