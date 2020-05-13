<template>
  <div class="myMap" >
    <div id="select-container">
      <label for="mapInput" class="mapTitle">你的地址</label>
      <div id="mapInput" class="edit-div">
        <el-autocomplete
          class="inline-input"
          style="min-width: 200px"
          v-model="yourPosition"
          :fetch-suggestions="querySearch"
          placeholder="请输入地址"
          @select="handleSelect"
        ></el-autocomplete>
      </div>
      <button @click="toPosition" style="margin-right: 10px; height: 45px; padding: 0px; background-color: transparent; border: rgb(83, 83, 83) 1px solid; margin-left: 10px; outline: none; margin-bottom: 10px; border-radius: 5px;" id="geoLoc">
        <img id="geoLocImg" style="max-height:50px; height:35px; width:auto;" src="../../../assets/img/find/hexis.svg">
      </button>
    </div>
    <div id="map-container">
    </div>
  </div>
</template>

<script>
  /*eslint-disable no-undef*/
  import AMap from 'AMap'
  import {getFind} from "../../../network/find";
  import {ALLPOSITION} from "../../../store/mutations_type";
  let mapObj;
  let selectIcon;
  export default {
    name: "Map",
    inject: ['reload'],
    props: {
      allPositionP: {
        type: Array,
        default() {
          return []
        }
      },
      activeLngLatP: {
        type: Object,
        default() {
          return {};
        }
      },
    },
    data() {
      return {
        yourPosition:"",
        restaurants: [],
        resultLike: [],
        allPosition: JSON.parse(localStorage.getItem("allPosition")),
        activeLngLat: this.activeLngLatP,
      }
    },
    created() {

    },
    mounted() {
      this.init();
      this.restaurants = this.loadAll();
    },
    destroyed() {
    },
    methods: {
      init() {
        mapObj = new AMap.Map("map-container", {
          center: [116.460000, 39.9200],
          zoom: 8,
          mapStyle: 'amap://styles/whitesmoke', //设置地图的显示样式
          doubleClickZoom: false,
          scrollWheel: false,
        });
        /*添加marker*/
        this.createMarkers();
        mapObj.plugin(["AMap.ToolBar"], () => {
          /*配置简易缩放按钮*/
          let toolBar = new AMap.ToolBar({
            liteStyle: true,
          });
          /*添加组件*/
          mapObj.addControl(toolBar)
        });
      },
      createMarkers() {
        /*生成标记点*/
        // 创建一个 icon
        selectIcon = new AMap.Icon({
          size: new AMap.Size(36, 36),
          image: require("../../../assets/img/find/selected.svg"),
          imageSize: new AMap.Size(36, 36),
          imageOffset: new AMap.Pixel(0, 0),
          anchor: "center"
        });
        for(let i of this.allPosition) {
          let marker = new AMap.Marker({
            icon: selectIcon,
            position: new AMap.LngLat(i.lng, i.lat),
            offset: new AMap.Pixel(0, 0),
            animation:"AMAP_ANIMATION_DROP",
            title: i.name,
            clickable: true,
          });
          marker.on("click",this.clickOnMarker)
          marker.on("touchstart",this.touchOnMarker)
          mapObj.add(marker)
        }
      },
      touchOnMarker(e){
        mapObj.panTo(e.lnglat,100);
        let selectItem = this.allPosition.filter(item => {
          return item.name === e.target.dom.title;
        })[0];
        this.$emit("selectItem",selectItem);
      },
      clickOnMarker(e) {
        mapObj.panTo(e.lnglat,100);
        let selectItem = this.allPosition.filter(item => {
          return item.name === e.target.dom.title;
        })[0];
        this.$emit("selectItem",selectItem);
      },
      querySearch(queryString, cb) {
        // let restaurants = this.restaurants;
        // let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        let results = this.resultLike;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        let result = [];
        getFind(0,1,10000).then(response => {
          for (let i = 0; i < response.data.list.length; i++) {
            let item = response.data.list[i];
            result.push(new Object({'value':item.name,'address': item.province+item.city+item.area+item.address}))
          }
        }).catch(error => {
          console.log(error);
        })
        return result;
      },
      handleSelect(item) {
        console.log(item);
      },
      toPosition() {
        this.$emit("toPosition",this.yourPosition);
      }
    },
    watch: {
      activeLngLatP: {
        handler(newValue){
          this.activeLngLat = newValue
        },
        deep: true,
        immediate: true
      },
      activeLngLat: {
        handler(newVale) {
          mapObj.setZoom(10,true,500)
          mapObj.panTo([newVale.lng,newVale.lat], 1);
          mapObj.setZoom(15,false,500)
        }
      },
      yourPosition: {
        handler: function() {
          this.resultLike = [];
          let len = this.restaurants.length;
          let arr = [];
          for (let i=0; i<len; i++) {
            if(this.restaurants[i].address.indexOf(this.yourPosition) >= 0  || this.restaurants[i].value.indexOf(this.yourPosition) >= 0){
              arr.push(this.restaurants[i].value);
            }
          }
          for (let i=0; i< arr.length; i++) {
            let obj = {value: ""};
            obj.value = arr[i];
            this.resultLike.push(obj);
          }
        }
      }
    }
  }
</script>

<style scoped>
  .myMap {
    height: 900px;
    width: 100%;
    margin-bottom: 50px;
  }
  #map-container {
    width: 100%;
    height: 800px;
  }

  #select-container {
    width: 100%;
    height: 100px;
    background-color: rgb(201, 200, 200);
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 25px;
    color: white;
  }

  @media screen and (max-width: 768px) {
    .myMap {
      height: 300px;
    }
    #map-container {
      width: 100%;
      height: 200px;
    }
  }
  #mapInput {
    width: 206px;
    height: 45px;
    /*padding: 1px 10px;*/
    border: white 1px solid;
    border-radius: 5px;
    margin-left: 15px;
    margin-bottom: 9px;
  }
  .mapTitle {
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 15px;
    text-wrap: none;
  }
  @media screen and (max-width: 440px) {
    .mapTitle{
      display: none;
    }
  }
  #geoLocImg {
    cursor: pointer;
  }
  #geoLoc{
    transition: all .5s;
  }
  #geoLoc:hover,#geoLoc:visited{
    box-shadow: white 0 0 5px;
  }

</style>
