<template>
  <div class="hello">
    <div class="jianbianImg">
      <jianbianImg></jianbianImg>
    </div>
    <div class="zhuti">
      <zhengwen></zhengwen>
    </div>
  </div>
</template>

<script>
  import jianbianImg from "@/views/home/layout/jianbianImg";
  import zhengwen from "@/views/home/layout/zhengwen";
  export default {
    name: 'HelloWorld',
    components:{
      top,
      jianbianImg,
      zhengwen
    },
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    height: 100%;
  }
  .top{
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1000;
  }
  .jianbianImg{
    width: 100%;
    /* margin-top: 10rem; */

  }
  .zhuti{
    width: 100%;
    /*height: 100rem;*/
  }

</style>
