<template >
  <div class="box">
    <img
      src="../../../assets/img/zl/toTop.png"
      alt
      v-if="btnFlag"
      style="position:fixed;right:0;bottom:2rem;z-index:40000;width:4rem;height:4rem;cursor: pointer"
      @click="backTop"
    />
    <div class="imageBox" style="">
<!--      <div v-if="imageIndex === 2" class="imageIndex2" ref="imageIndex2" style="height: 750px; width: 100%;">-->
<!--        <transition>-->
<!--          <div class="jianbianImg" v-show="seen5" >-->
<!--            <div>-->
<!--              <transition>-->
<!--                <img src="../../../assets/img/zl/car.png" alt v-show="seen" style="height: 750px; width: 100%;"  />-->
<!--              </transition>-->
<!--              <transition>-->
<!--                <img src="../../../assets/img/zl/logoBig.png" alt v-show="seen2" style="height: 750px; width: 100%;" />-->
<!--              </transition>-->
<!--              <transition>-->
<!--                <img src="../../../assets/img/zl/car2.png" alt v-show="seen3" style="height: 750px; width: 100%;" />-->
<!--              </transition>-->
<!--              <transition>-->
<!--                <img src="../../../assets/img/zl/car3.png" alt v-show="seen4" style="height: 750px; width: 100%;" />-->
<!--              </transition>-->
<!--            </div>-->
<!--          </div>-->
<!--        </transition>-->
<!--        </div>-->
<!--      <div class="titleBox">-->
      <transition name="fade">
        <img :src="titleImage" class="titleBox"  alt="">
      </transition>
<!--      </div>-->
      <transition name="fade">
        <div v-if="imageIndex === 1" class="imageIndex1" >
          <img src="../../../assets/img/zl/imageIndex1.jpg" style=" " id="imageIndex1"  alt="">
        </div>
      </transition>
      <transition name="fade">
        <div v-if="imageIndex === 2" class="imageIndex3">
          <img src="../../../assets/img/zl/imageIndex3.jpg" style="" id="imageIndex3" alt="">
        </div>
      </transition>
    </div>
    <div class="left-next" @click="previous"><span><i class="fas fa-3x fa-angle-left"></i></span></div>
    <div class="right-next" @click="descend"><span><i class="fas fa-3x fa-angle-right"></i></span></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      loading: true,
      seen: false,
      seen2: false,
      seen3: false,
      seen4: false,
      seen5: false,
      timer1: "",
      timer2: "",
      timer3: "",
      timer4: "",
      timer5: "",
      timer6: "",
      btnFlag:false,
      yincang:false,
      imageIndex: 1,
      imageHeight: 703,
    };
  },
  computed: {
    titleImage: function () {
      if(this.imageIndex === 1){
        return require("../../../assets/img/zl/BODYFENCE_2K18_logo.png");
      }else{
        return require("../../../assets/img/zl/BODYFENCE_2K18_logo_W.png");
      }
    }
  },
  created() {
    this.timer5 = setInterval(this.wenziImg5, 0);
  },
  mounted() {
    this.timer1 = setInterval(this.wenziImg, 0);
    this.timer2 = setInterval(this.wenziImg2, 4000);
    this.timer3 = setInterval(this.wenziImg3, 4000);
    this.timer4 = setInterval(this.wenziImg4, 8000);
    window.addEventListener("scroll", this.scrollToTop);
    // this.wenziImg();
    // this.wenziImg2();
    // this.wenziImg3();
    // this.wenziImg4();
    // this.listenerHeight();
    let that = this;
    this.timer6 = setInterval(function () {
      if(that.imageIndex === 1) {
        that.imageIndex ++;
      }else {
        that.imageIndex --;
      }
    },10000);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    xianshi(){
      this.yincang=!this.yincang
    },
    wenziImg() {
      this.seen = true;
    },
    wenziImg2() {
      this.seen2 = true;
    },
    wenziImg3() {
      // this.seen2 = true;
      this.seen = false;
      this.seen3 = true;
    },
    wenziImg4() {
      this.seen3 = false;
      this.seen4 = true;
    },
    wenziImg5() {
      this.seen5 = true;
    },
    backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
  },
  // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
    const that = this
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    that.scrollTop = scrollTop
    if (that.scrollTop > 60) {
      that.btnFlag = true
    } else {
      that.btnFlag = false
    }
  },
    previous() {
      if(this.imageIndex === 1) {
        this.imageIndex ++;
      }else {
        this.imageIndex --;
      }
    },
    descend() {
      if(this.imageIndex === 1) {
        this.imageIndex ++;
      }else {
        this.imageIndex --;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    position: relative;
    width: 100%;
  }
  .box .left-next, .box .right-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    transition: all .3s;
  }
  .box .left-next {
    left: 3%;
  }
  .box .right-next {
    right: 3%;
  }
  .box .left-next:hover,.box .right-next:hover {
    background-color: rgba(255,255,255,0.7);
    box-shadow: 0 0 10 0 snow;
  }
  .box .left-next:hover span i,.box .right-next:hover span i {
    text-shadow: 0 0 10 black;
  }
  /*.box .previous-image {*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  background-color: rgba(123,11,241,1);*/
  /*}*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter , .fade-leave{
    opacity: 0;
  }
  .fade-leave-to, .fade-enter-to{
     opacity: 1;
   }
  .imageIndex2 {
    position: relative;
  }
  .imageIndex1{
    position: absolute;
  }
  .imageIndex3 {
    position: absolute;
  }
  .box .imageBox {
    position: relative;
    height: 750px; overflow: hidden;
  }
  .box .imageBox #imageIndex1, .box .imageBox #imageIndex3 {
    height: 750px; overflow: hidden;
    width: 100%;
  }
  .box .imageBox .titleBox {
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    overflow: hidden;
    z-index: 99;
  }
  @keyframes zhankai{
  0%{
    will-change: transform;
    display: none;
    opacity: 0;
    transform: translateX(-40rem);
  }
  100%{
    display: block;
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes zhankai2{
  0%{
    will-change: transform;
    display: none;
    opacity: 0;
    transform: translateX(0);
  }
  100%{
    display: block;
    opacity: 1;
    /* left: 40rem; */
    transform: translateX(40rem);
  }
}
.jianbianImg {
  width: 100%;
  height: 100%;
  /*height: auto;*/
  background: black;
}
.jianbianImg div {
  margin: 0 auto;
  text-align: center;
  height: auto;
  position: relative;
}
.jianbianImg div >img:nth-child(1) {
  width: 60%;
  height: auto;
  /* position: absolute;
  left: 19%; */
  /* padding-top: 3rem; */

  /* float: left; */
}
@media all and (max-width: 500px) {
  .box .left-next, .box .right-next {
    display: none;
  }
  .jianbianImg div >img:nth-child(1) {
    width: 300px;
  }
  .box .imageBox {
    height: 400px;
  }
  .box .imageBox #imageIndex1, .box .imageBox #imageIndex3 {
    height: 400px;
  }
}

.jianbianImg div img:nth-child(3) {
  width: 65%;
  height: auto;
  position: absolute;
  left: 17%;
  /* opacity:0.4; */
}
.jianbianImg div img:nth-child(4) {
  width: 65%;
  height: auto;
  position: absolute;
  left: 17%;
  /* opacity:0.4; */
}
.jianbianImg div img:nth-child(2) {
  width: 36%;
  /* margin-top: -60rem; */
  z-index: 74;
  position: absolute;
  top: 0;
  left: 32%;
  top: 8%;
  height: auto;
  /* float: left; */
}

.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 3s;
}
/* 隐藏动画效果 */
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: opacity 6s;
}
.zuojiantou {
  margin-left: 27.2rem;
  width: 6rem !important;
  height: 6rem !important;
  margin-top: -14.05rem;
}
.yyy{
  position: fixed;
  left: 0rem;
  top: 27rem;
}
.yincang{
  width: 40rem;
  height: 40rem;
  /* background: url(../../assets/img/zl/smallBj.png); */
  /* position: fixed;
  top: 27rem; */
  /* left: -40rem; */


}
.jianru{
  animation-name: zhankai;
  /*动画名称*/
  animation-duration: 6s;
  /*动画持续时间*/
  animation-iteration-count: 1;
  /*动画次数*/
  animation-delay: 0s;
  /*延迟时间*/
}
.jianru2{
  animation-name: zhankai2;
  /*动画名称*/
  animation-duration: 6s;
  /*动画持续时间*/
  animation-iteration-count: 1;
  /*动画次数*/
  animation-delay: 0s;
  /*延迟时间*/
}
.yincang2{
  width: 40rem;
  height: 40rem;
  /* background: url(../img/smallBj.png); */
  position: fixed;
  top: 27rem;
  /* left: -40rem; */
  animation-name: zhankai;
  /*动画名称*/
  animation-duration: 6s;
  /*动画持续时间*/
  animation-iteration-count: 1;
  /*动画次数*/
  animation-delay: 0s;
  /*延迟时间*/
}
.smallTop{
      /* top: -5px; */
    text-align: center;
    color: white;
    background-image: linear-gradient(60deg, black, #de0022);
    opacity: .8;
    width: 40rem;
    height: 6rem;
    font-size: 3.5rem;
    margin: auto;
    font-weight: 500;
}
.smallBTN{
      background-color: #626262;
      height: 8rem;
      margin-top: 2rem !important;
      width: 80%;
      margin-left: 10%;
}
.smallBTN>div{
  width:50% ;
  float: left;
}
.smallBTN>div:nth-child(1){
  padding-top: 1rem;
}
.smallBTN>div:nth-child(1)>span{
  color: white;
    text-align: left;
    padding-left: 3rem;
    margin: auto;
    font-size: 2rem;
    font-weight: 400;
}
.smallBTN>div:nth-child(2){
  height: 6rem;
}
.smallBTN>div:nth-child(2) img{
  width: 15%;
  height: 3.5rem;
  margin-top: 2rem;
}

</style>
