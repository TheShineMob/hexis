<template>
  <div>
    <div id="protectionFile"  >
      <el-row class="column-inner " >
        <el-col style="padding-top: 35px;height: 100%">
          <div style="margin-bottom: 35px">
            <h2 style="width: 100%;margin-bottom: 0;padding-bottom: 14.4px; text-align: center">
              <span class="videoTitleBlack">{{videoTitleBlack}}</span>
              <span class="videoTitleRed">{{videoTitleRed}}</span>
            </h2>
          </div>
        </el-col>
      </el-row>
      <el-row class="el-row-margin-bottom">
        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="24" class="column-inner">
          <div class="wrapper">
            <p v-html="filmsTitle"></p>
            <p style="text-align: justify;" v-html="filmsContentTop"></p>
            <ul>
              <li v-html="filmsUl"></li>
            </ul>
            <p style="text-align: justify;" v-html="filmsFooter"></p>
          </div>
        </el-col>
        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="24" class="column-inner">
          <div class="wrapper">
            <iframe  :src="iframe" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
          </div>
        </el-col>
      </el-row>
      <el-row class="el-row-margin-bottom">
        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="24" class="column-inner el-row-margin-bottom">
          <div class="edit-div">
            <el-tabs v-model="activeName" type="border-card" >
<!--              <el-tab-pane name="first">-->
<!--                <span slot="label"><i class="fas fa-ruler "></i> 卷尺寸</span>-->
<!--                <div class="wrapper">-->
<!--                  <p v-html="rollSize" style="text-align: justify;"></p>-->
<!--                  <p v-html="sizeMore" style="text-align: justify;"></p>-->
<!--                </div>-->
<!--              </el-tab-pane>-->
              <el-tab-pane name="second">
                <span slot="label"><i class="fas fa-info "></i> 特征</span>
                <div class="wrapper mattLogF">
                  <i class="mattLogo" v-show="mattLogoS">MATT</i>
<!--                  <p v-html="theFeatures" style="text-align: justify;"></p>-->
                  <h4 class="film_features" style="margin-bottom: 0">FILM FEATURES:</h4>
                  <h5 style="position: relative;left: 53%;text-decoration: underline;font-weight: 700;font-size: 16px;">Indicative value</h5>
                  <ul class="features_list" style="margin:0;">
                    <li class="item1">Thickness(um):</li>
                    <li class="item2" style="list-style: none"><br /></li>
                    <li class="item3">Tensile strength (N/25 mm):</li>
                    <li class="item4">Elongation at break(%):</li>
                    <li class="item5">Shrinkage 168 hours at 70 ℃(158℉)(mm):</li>
                  </ul>
                  <ul class="indicative_value" style="margin:0;">
                    <li>{{indicativeValue}}</li>
                    <li style="text-decoration: underline;font-weight: 700;font-size: 16px">Average values</li>
                    <li>> 100</li>
                    <li>> 350</li>
                    <li>< 0.2</li>
                  </ul>
                  <ul class="standard" style="margin:0;padding: 0">
                    <li style="list-style: none;"><br /></li>
                    <li style="list-style:none;text-decoration: underline;font-weight: 700">Standard</li>
                    <li>HEXNFX41021</li>
                    <li>HEXNFX41021</li>
                    <li>HEXRET001</li>
                  </ul>
                </div>
              </el-tab-pane>
<!--              <el-tab-pane name="third">-->
<!--                <span slot="label"><i class="far fa-hand-pointer "></i> 应用领域</span>-->
<!--                <div class="wrapper">-->
<!--                  <p v-html="applications" style="text-align: justify;"></p>-->
<!--                </div>-->
<!--              </el-tab-pane>-->
<!--              <el-tab-pane name="fourth">-->
<!--                <span slot="label"><i class="far fa-sun "></i> 保证</span>-->
<!--                <div class="wrapper">-->
<!--                  <p style="text-align: justify;" v-html="warranty1"></p>-->
<!--                  <p style="text-align: left;" v-html="warranty2"></p>-->
<!--                </div>-->
<!--              </el-tab-pane>-->
            </el-tabs>
          </div>
        </el-col>
<!--        <el-col :xl="6" :lg="6" :md="6" :sm="6" :xs="24" class="column-inner button-box">-->
<!--          <div class="button-wrapper">-->
<!--            <a href="https://www.hexis-graphics.com/en/produit/bodyfence/" style="color:white" target="_blank">-->
<!--              <i class="fas fa-file-alt"></i>-->
<!--              <span>数据表</span>-->
<!--            </a>-->
<!--          </div>-->
<!--        </el-col>-->
<!--        <el-col :xl="6" :lg="6" :md="6" :sm="6" :xs="24" class="column-inner button-box">-->
<!--          <div class="button-wrapper">-->
<!--            <a href="https://www.hexis-graphics.com/en/distribution/" style="color:white" target="_blank">-->
<!--              <i class="fas fa-truck-loading"></i>-->
<!--              <span>采购</span>-->
<!--            </a>-->
<!--          </div>-->
<!--        </el-col>-->
      </el-row>
    </div>
<!--    <div style="background-color:#fff; height: 1000px;width: 100%"></div>-->
  </div>
</template>

<script>
  export default {
    name: "ProtectionFilm",
    props: {
      videoTitleBlackP:{
        type: String,
        default: "BODYFENCE"
      },
      indicativeValueP:{
        type: String,
        default: "155"
      },
      videoTitleRedP:{
        type: String,
        default: " PPF"
      },
      filmsTitleP: {
        type: String,
        default:`
                <strong>汽车保护膜</strong>
        `
      },
      filmsContentTopP: {
        type: String,
        default: `
              全新<strong>BODYFENCE</strong>漆面保护膜，极致呵护您的爱车！
        `
      },
      filmsUlP: {
        type: String,
        default: `
                <li style="color: #de0022;"><span style="color: #000;">极致抗刮擦</span></li>
                <li style="color: #de0022;"><span style="color: #000;">防止石子磨损</span></li>
                <li style="color: #de0022;"><span style="color: #000;">防止紫外线损伤车漆</span></li>
        `
      },
      filmsFooterP: {
        type: String,
        default: `

        `
      },
      // rollSizeP: {
      //   type: String,
      //   default: `
      //               <strong><label style="color: #de0022;">宽度 (毫米) :</label></strong>&nbsp;615, 760, 1230, 1520<br>
      //               <strong><label style="color: #de0022;">长度 (厘米) :</label></strong>&nbsp;5, 10, 20
      //    `
      // },
      // sizeMoreP: {
      //   type: String,
      //   default: `<em>这些宽度和长度并非在所有的国家/地区都可用。请查阅更多细节。</em>`
      // },
      // featuresP: {
      //   type: String,
      //   default:`
      //           <h4 style="text-decoration: underline;">FILM FEATURES:</h4>
      //           <p style="text-decoration: underline;text-align: center">Indicative value</p>
      //           <ul>
      //
      //           </ul>
      //   `
      // },
      // applicationsP: {
      //   type: String,
      //   default: `
      //           只要目标表面清洁，光滑，无孔并且没有任何油，油脂，蜡，硅酮或其他污染物的痕迹，您的<strong>BODYFENCE</strong>膜就可以应用于任何车身。为避免意外结果，请始终假定每个基材都脏了，需要清理。
      //   `
      // },
      warranty1P: {
        type: String,
        default: `
<!--                所述<strong style="color: #de0022;">Hexis</strong> «<strong>BODYFENCE</strong>»保修适用于的产品（不含配件），其中使用的，转化的，并且根据在所述的要求实现的Bodyfence范围<strong style="color: #de0022;">Hexis</strong>技术数据表和应用指南。-->
                  按照官方指导，享受十年质保（自上电子质保日算起）
        `
      },
      warranty2p: {
        type: String,
        default: `
<!--               该保修从<strong>BODYFENCE</strong>保护膜的购买日期开始（安装发票作为证明）。此保修仅涵盖以下缺陷：产品泛黄和破裂。-->
                  质保请参阅相关资料
        `
      },
      iframeP: {
        type: String,
        default: ""
      },
      mattLogoSP: {
        type: String,
        default: "false"
      }
    },
    data() {
      return {
        activeName: "second",
        videoTitleBlack: this.videoTitleBlackP,
        videoTitleRed: this.videoTitleRedP,
        filmsTitle: this.filmsTitleP,
        filmsContentTop: this.filmsContentTopP,
        filmsUl: this.filmsUlP,
        filmsFooter: this.filmsFooterP,
        rollSize: this.rollSizeP,
        sizeMore: this.sizeMoreP,
        theFeatures: this.featuresP,
        applications: this.applicationsP,
        warranty1: this.warranty1P,
        warranty2: this.warranty2p,
        iframe: this.iframeP,
        indicativeValue: this.indicativeValueP,
        mattLogoS: this.mattLogoSP
      }
    }
  }
</script>


<style scoped>
  #protectionFile {
    width: 100%;
  }
  .column-inner {
    /*width: 100%;*/
    /*height: 100%;*/
    padding-left: 15px;
    padding-right: 15px;
  }
  .videoTitleBlack {
    margin-top: 50px;
    color: Black;
    font-weight: 600;
    font-size: 36px;
    text-align: left;
  }
  .videoTitleRed {
    margin-top: -20px;
    color: #de0022;
    font-weight: 400;
    font-size: 36px;
    text-align: left;
  }
  .wrapper p {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 16px;
  }
  .wrapper ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  .el-row-margin-bottom {
    margin-bottom: 35px;
  }
  .wrapper iframe {
    width: 100%;
    display: block;
    margin: 0;
    top: 0;
    left: 0;
  }
  .button-box {
    height: 72px;
  }
  .button-wrapper {
    background-color: #DE0022;
    color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  @media all and (max-width: 575px) {
    .wrapper iframe {
      width: 100%;
      height: 47.25vw;
    }
  }
  @media all and (min-width: 576px) {
    .wrapper iframe {
      height: 270px;
    }
  }

  @media all and (max-width: 758px) {
    .button-wrapper {
      width: 100%;
    }
  }
  @media all and (min-width: 768px ) {
    .wrapper iframe {
      height: 177px;
    }
  }
  @media all and (min-width: 991px ) {
    .wrapper iframe {
      height: 245px;
    }
  }
  @media all and (min-width: 1200px ) {
    .wrapper iframe {
      height: 312px;
    }
  }

  @media all and (min-width: 1366px) {
    .wrapper iframe {
      height: 352px;
    }
  }
  .film_features {
    font-weight: 900;
    font-size: 24px;
    text-decoration: underline;
  }
  .features_list {
    float: left;
    width: 53%;
    font-weight: 700;
    line-height: 30px;
  }
  .indicative_value li {
    list-style: none;
    line-height: 30px;
    /*text-align: center;*/
  }
  ul.indicative_value {
    float: left;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .standard{
    float: left;
    line-height: 30px;
    text-align: left;

  }
  .standard li {
    list-style: none;
    margin-left: 20px;
  }
  .mattLogF {
    position: relative;
    padding-bottom: 20px;
  }
  .mattLogo {
    position: absolute;
    right: -10px;
    top: -50px;
    color: white;
    font-size: 70px;
    font-style: normal;
    text-shadow:0 0 15px rgba(0,0,0,0.3);
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

</style>
