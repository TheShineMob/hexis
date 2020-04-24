<template>
  <div class="brief" @click="returnIndex" ref="brief">
    <span class="closeButton" v-if="closeButtonShow" @click="hiddenContactForm"><i class=" fas fa-times-circle fa-2x"></i></span>
    <el-row class="brief-box">
      <el-col :span="10" class="brief-col">
        <div class="briefImgUrl" :style="{backgroundImage: 'url('+briefImgUrl+')'}"></div>
      </el-col>
      <el-col :span="1" style="width: 5px;height: 200px;background-color:black;"></el-col>
      <el-col :span="13" class="brief-text">
        <h5 style="margin-bottom: 5px;margin-top: 0px; margin-left: 10px">{{briefTitle}}</h5>
        <p style="margin-left: 25px"><img src="../../../assets/img/find/selected.svg" style="width: 20px;height: 20px;margin-left: -10px; margin-right: 5px;" alt="">{{briefAddress}}</p>
        <p style="margin-left: 25px"><i class="fas fa-phone" style="margin-left: -7px;margin-right: 10px"></i>+{{briefPhone}}</p>
        <p style="margin-left: 25px"><i class="fas fa-qrcode" style="margin-left: -7px; margin-right: 10px;"></i>{{briefType}}</p>
        <button class="centactButton"><i class="fas fa-envelope" style="margin-right: 3px"/>联系我们</button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Brief",
    inject:["reload"],
    props: {
      briefImgUrlP: {
        type: String,
        default: "/image/20180808/1533711885005_0.jpg"
      },
      briefTitleP: {
        type: String,
        default: "沈阳车世界"
      },
      briefAddressP: {
        type: String,
        default: "辽宁省 沈阳市 皇姑区 泰山路25号"
      },
      briefPhoneP: {
        type: String,
        default: "4000961989"
      },
      briefTypeP: {
        type: String,
        default: "贴膜店"
      }
    },
    data() {
      return {
        briefImgUrl: "https://cdn.hexis.cn/" + this.briefImgUrlP,
        briefTitle: this.briefTitleP,
        briefAddress: this.briefAddressP,
        briefPhone: this.briefPhoneP,
        briefType: this.briefTypeP,
        briefHeight: 350,
        closeButtonShow: false,
      }
    },
    methods: {
      returnIndex() {
        this.$emit("returnIndex");
      },
      hiddenContactForm() {
        this.$emit("hiddenForm")
      }
    },
    mounted() {
      if (this.$refs.brief.offsetHeight !== this.briefHeight) {
          this.$refs.brief.style.backgroundColor = 'rgb(244,244,244)';
          this.closeButtonShow = true;
      }else {
        this.closeButtonShow = false;
      }
    },
  }
</script>

<style scoped>
  .brief {
    width: 50%;
    height: 350px;
    /*background-color: rgb(244,244,244);*/
    display: flex;
    justify-content: center;
    /*align-items: center;*/
    flex-direction: column;
    position: relative;
  }
  .brief:hover {
    background-color: rgb(255, 229, 229);
  }
  @media screen and (max-width: 1366px){
    .brief {
      width: 100%;
    }
  }
  .brief-box {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 345px;
  }
  .brief-col {
    display: flex;
    vertical-align: middle;
  }
  .briefImgUrl {
    height: 250px;
    width: 100%;
    margin: 0 15px 0 15px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .brief-text {
    justify-self: left;
    text-align: left;
  }
  .brief-text p {
    font-size: 12px;
    margin-top: 3px;
    margin-bottom: 2px;
    margin-right: 5px;
    padding-right: 5px;
  }
  .centactButton {
    width: 94px;
    height: 43px;
    background-color: black;
    color: white;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    border-radius: 5px;
    outline: none;
    margin-left: 15px;
  }
  .closeButton {
    cursor: pointer;
    position: absolute;
    margin-right: 15px;
    margin-top: 15px;
    background-color: #fff;
    border-radius: 50%;
    left: auto;
    right: 0;
    top: 0;
    bottom: auto;
    z-index: 99;
  }


</style>
