<template>
  <div id="main-nav-bar">
    <nav-bar :max-width="1340" ref="navBar">
      <nav-bar-brand></nav-bar-brand>
      <nav-bar-toggler v-on:togglerClick="togglerClick"></nav-bar-toggler>
        <nav-bar-menu v-if="isHidden" class="menu-animation">
          <nav-bar-menu-item ToWhere="首页" ToPath="/home" :FlexBasis="80" />
          <el-dropdown placement="top" :show-timeout="100">
            <nav-bar-menu-item ToWhere="产品" :IsDropdown="true" :FlexBasis="140" ToPath="/features" />
            <div class="edit-div">
              <el-dropdown-menu slot="dropdown">
                <div class="edit-div">
                  <el-dropdown-item class="hvr-underline-from-left"><router-link to="/features" tag="a">特性</router-link> </el-dropdown-item>
                  <el-dropdown-item class="hvr-underline-from-left"><router-link to="/bodyFence" tag="a">车身防护膜</router-link> </el-dropdown-item>
                  <el-dropdown-item class="hvr-underline-from-left"><router-link to="/bodyFenceMatt" tag="a">哑光车身防护膜</router-link> </el-dropdown-item>
                </div>
              </el-dropdown-menu>
            </div>
          </el-dropdown>
          <nav-bar-menu-item ToWhere="软件" :FlexBasis="70" ToPath="/software" />
          <nav-bar-menu-item ToWhere="查询" ToPath="/find" :FlexBasis="70" />
          <nav-bar-menu-item ToWhere="联系我们" ToPath="/contact" :FlexBasis="110"/>
        </nav-bar-menu>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import NavBarBrand from "@/components/common/navbar/NavBarBrand";
  import NavBarToggler from "@/components/common/navbar/NavBarToggler";
  import NavBarMenu from "@/components/common/navbar/NavBarMenu";
  import NavBarMenuItem from "@/components/common/navbar/NavBarMenuItem";

  export default {
    name: "MainNavBar",
    components: {
      NavBar,
      NavBarBrand,
      NavBarToggler,
      NavBarMenu,
      NavBarMenuItem
    },
    methods: {
      togglerClick() {
        this.isHidden = !this.isHidden;
      }
    },
    data() {
      return {
        isHidden: true
      }
    },
    updated(){
      if(this.$refs.navBar.offsetHeight >= 1200 ) {
        this.isHidden = true
      }
    }
  }
</script>

<style scoped lang="less">
  .edit-div {
    /deep/ .el-dropdown-menu__item {
      width: 200px;
    }
    /deep/ .el-dropdown-menu__item:focus,
    .el-dropdown-menu__item:not(.is-disabled):hover {
       background-color: #ffffff;
       color: #ffffff;
    }
  }
  .el-dropdown-menu {
    margin: 0;
    border-radius: 0;
  }

  .hvr-underline-from-left  a {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .hvr-underline-from-left a:hover:before, .hvr-underline-from-left a:focus:before, .hvr-underline-from-left a:active:before {
    right: 0;
  }

  .hvr-underline-from-left a:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    bottom: 0;
    background: #DE0022;
    height: 4px;
    -webkit-transition-property: right;
    transition-property: right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
 /*.fade-enter-active, .fase-leave-active {*/
 /*  transform-origin: top;*/
 /*  transition: all .5s;*/
 /*}*/
 /* .fade-enter, .fade-leave-to {*/
 /*   transform-origin: top;*/
 /*   transform: scale(1,0);*/
 /* }*/


</style>
