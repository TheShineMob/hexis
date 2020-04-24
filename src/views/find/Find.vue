<template>
  <div id="findBase" class="container">
    <el-row class="column-inner" style="height: 170px;display: flex; align-items: center">
      <el-col>
        <h2 style="font-size: 24px">查找BODYFENCE安装门店</h2>
        <p>应用部门HEXIS已建立了认可的安装程序网络，以为其客户端提供了高性能和快速响应的服务。</p>
      </el-col>
    </el-row>
    <el-row class="column-inner">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <my-map :all-position-p="allPosition"
                v-on:selectItem="selectItem"
                :active-lng-lat-p="activeLngLat"
                v-on:toPosition="toPosition"
        ></my-map>
        <!--:active-position-p="activeItem"-->
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-if="contactFormHidden" style="display: flex;flex-wrap: wrap;padding-left: 2px;overflow-y:auto;max-height: 900px;overflow-x: hidden;border-right: #efefef 1px solid;border-left: #efefef 1px solid">
        <brief v-if="isRouterAlive" v-for="(item,index) of selectPosition" :key="index"
               :brief-title-p="item.name"
               :brief-address-p="item.province+' '+item.city+' '+item.area+' '+item.address"
               :brief-img-url-p="item.doorimageurl"
               :brief-phone-p="item.phone"
               :brief-type-p="item.shopType"
               v-on:returnIndex="isActive(item,index)"
               :class="{isActive:isActived(item.name)}"
        ></brief>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-if="!contactFormHidden" style="border-right: #efefef 1px solid;border-left: #efefef 1px solid;height: 900px">
        <brief
          style="width: 100%;height: 200px"
          :brief-type-p="showContactFormItem.type"
          :brief-phone-p="showContactFormItem.phone"
          :brief-img-url-p="showContactFormItem.imgUrl"
          :brief-address-p="showContactFormItem.address"
          :brief-title-p="showContactFormItem.title"
          v-on:hiddenForm="hiddenContactForm"
        ></brief>
        <div class="contact-box">
          <el-row class="contact_inner" style="text-align: center">
            <el-col tag="h3" >填好这张表，我们会尽快与您联系</el-col>
          </el-row>
          <p class="contact_inner">姓名<span style="color: red">*</span></p>
          <el-row class="contact_inner" type="flex">
            <el-col><input type="text" style="width: 97%;margin-right: 10px" :value="form.firstName" placeholder="请输入您的姓..." /></el-col>
            <el-col><input type="text" style="width: 97%;margin-left:  10px" :value="form.lastName" placeholder="请输入您的名..."/> </el-col>
          </el-row>
          <p class="contact_inner">邮箱<span style="color: red">*</span></p>
          <el-row class="contact_inner">
            <el-col>
              <input type="text" style="width: 100%" :value="form.email" placeholder="请输入您的邮箱..." />
            </el-col>
          </el-row>
          <el-row class="contact_inner">
            <el-col><p>国家<span style="color: red">*</span></p></el-col>
            <el-col><input type="text" style="width: 100%" :value="form.company" placeholder="请输入您的国家..."/></el-col>
            <el-col><p>电话<span style="color: red">*</span></p></el-col>
            <el-col><input type="text" style="width: 100%" :value="form.phone" placeholder="请输入您的电话..."/></el-col>
          </el-row>
          <p class="contact_inner">详细情况<span style="color: red">*</span></p>
          <el-row class="contact_inner">
            <el-col>
              <textarea name="massage" id="" cols="30" rows="10" style="width: 100%" placeholder="请详细说明您的情况..."></textarea>
            </el-col>
          </el-row>
          <button class="contact_inner contact_send" @click="window.alert('发送成功！')">发送</button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {getFind} from "@/network/find";
  import MyMap from "../../components/content/map/MyMap";
  import {ALLPOSITION} from "../../store/mutations_type";
  import Brief from "./child/Brief";

  export default {
    name: "Find",
    components: {
      MyMap,
      Brief
    },
    inject: ['reload'],
    data(){
      return {
        allPosition: [],
        activeIndex: 0,
        selectPosition: [],
        oldProvince: "",
        isRouterAlive: true,
        activeItemName: '',
        activeLngLat: {},
        contactFormHidden: true,
        showContactFormItem: {
          title: "",
          address: "",
          imgUrl: "",
          phone: "",
          type: ""
        },
        form: {
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        },
      }
    },
    created() {
    },
    mounted() {
      this.getAllPosition();
    },
    methods: {
      getAllPosition(){
        getFind(0,1,10000).then(response => {
          this.allPosition = response.data.list;
          console.log(response)
          this.$store.commit(ALLPOSITION, this.allPosition)
          localStorage.setItem('allPosition',JSON.stringify(this.allPosition));
        }).catch(error => {
          console.log(error);
        })
      },
      isActive(item,index){
        this.activeIndex = index;
        this.activeItemName = item.name;
        this.activeLngLat = {
          lng: item.lng,
          lat: item.lat
        };
        this.showContactFormItem = {
          title: item.name,
          address: item.province + ' ' + item.city + ' ' + item.area + ' ' + item.address,
          imgUrl: item.doorimageurl,
          phone: item.phone,
          type: item.shopType
        };
        this.contactFormHidden = !this.contactFormHidden
      },
      selectItem(Item) {
        this.isRouterAlive = false
        this.$nextTick(() => {
          if(this.activeItemName !== Item.name||this.oldProvince !== Item.province) {
            this.selectPosition = null;
          }
          this.selectPosition = this.allPosition.filter(item => {
            return item.province === Item.province;
          })
          this.oldProvince = Item.province;
          this.activeItemName = Item.name;
          this.isRouterAlive = true
        })
      },
      hiddenContactForm() {
        this.contactFormHidden = !this.contactFormHidden;
      },
      toPosition(inputPosition) {
        let inputItem = this.allPosition.filter((item) => {
          return item.name === inputPosition;
        })[0];
        this.isRouterAlive = false
        this.$nextTick(() => {
          if(this.activeItemName !== inputPosition||this.oldProvince !== inputItem.province) {
            this.selectPosition = null;
          }
          this.selectPosition = this.allPosition.filter(item => {
            return item.province === inputItem.province;
          })
          this.oldProvince = inputItem.province;
          this.activeItemName = inputItem.name;
          this.activeLngLat = {
            lng: inputItem.lng,
            lat: inputItem.lat
          };
          this.isRouterAlive = true
        });
      }
    },
    computed: {
      isActived(){
        return (name) => {
          return this.activeItemName === name;
        }
      }
    }
  }
</script>

<style scoped>

  #findBase {
    height: auto;
    width: 100%;
  }
  .myMap {
    width: 100%;
    height: 900px;
  }

  @media  all and (max-width: 768px)  {
    .myMap {
      width: 100%;
      height: 300px;
    }
  }
  .isActive {
    background-color: rgb(244,244,244);
  }

  .contact-box {
    width: 100%;
    height: 620px;
    background-color: #fff;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    text-align: left;
  }
  .contact-box p {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-weight: 700;
    color: black !important;
    display: inline-block;
    line-height: 1.3;
    clear: both;
  }
  .contact_inner {
    margin: 0 50px;
  }
  .contact_send {
    width: 200px;
    border-radius: 0;
    box-shadow: 0 0;
    background-color: #cb2026;
    font-size: 1em;
    line-height: 1em;
    margin-bottom: 50px;
    padding: 10px 20px;
    outline: none;
    color: white;
    font-weight: 900;
    margin-top: 50px;
    border: none;
    cursor: pointer;
  }
  .contact-box input {
    height: 34.5px;
    border-radius: 5px;
    outline: none;
    /*border-color: #efefef;*/
    border: #efefef 2px solid;
    margin-bottom: 25px;
    transition: all .5s;
  }
  .contact-box textarea {
    border-radius: 5px;
    border: #efefef 2px solid;
    outline: none;
    transition: all .5s;
  }

  .contact-box input:focus, .contact-box textarea:focus {
    box-shadow: 0 0 10px rgba(0,0,0,0.05);
  }

  ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: #EFEFEF;
    font-size: 16px;
    font-weight: 500;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #EFEFEF;
    font-size: 16px;
    font-weight: 500;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #EFEFEF;
    font-size: 16px;
    font-weight: 500;
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #EFEFEF;
    font-size: 16px;
    font-weight: 500;
  }

</style>
