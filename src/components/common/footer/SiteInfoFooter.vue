<template>
  <div id="site-info-footer">
    <img src="~@/assets/img/footer/hexis.png" width="250px" alt="">
    <div class="container">
      <div class="link">
        <p>
          <br>
         <a href="https://beta.bodyfence.net/terms-of-use/"> 使用条款 </a>"|<a href="https://beta.bodyfence.net/privacy-policy/">隐私策略 </a>| 请与我们联系 - 宁波索凡进出口有限公司 - 宁波市江北区洪发路18号 - 400-096-1989 - so-fine@hexis.cn
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SiteInfoFooter"
  }
</script>

<style scoped>
  #site-info-footer {
    font-size: 85%;
    width: 100%;
    background-color: rgb(0,0,0);
    color: rgb(128,128,128);
  }

  #site-info-footer img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    height: auto;
    max-width: 100%;
    border: 0;
    vertical-align: middle;
  }
  #site-info-footer p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    color: grey;
    text-align: center;
    margin-bottom: 1.5em;
    margin-top: 0;
    display: block;
  }
  #site-info-footer a {
    background-color: transparent;
    color: inherit;
    text-decoration: none;

  }

</style>
