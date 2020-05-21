<template>
  <div id="copy-footer">
    <div class="container">
      <a href="https://mdbootstrap.com/bootstrap-tutorial/"></a>
      <a href="https://www.bodyfence.net">Bodyfence PPF</a>
      ©  2020
      - 版权所有 -  宁波索凡进出口有限公司—东南亚总代理.
    </div>
  </div>
</template>

<script>
  export default {
    name: "CopyFooter"
  }
</script>

<style scoped>
  #copy-footer {
    /*属性*/
    width: 100%;
    background-color: rgba(48, 48, 48, 1);
    border: solid rgba(0,0,0,1);
    border-width: 2px 0 0 0;
    color: rgba(255,255,255,1);
    padding: 1rem 0;
    text-align: center;
    line-height: 1.5rem;
  }
  #copy-footer a {
    text-decoration: none;
    color: rgba(255,255,255,1);
    background-color: transparent;
  }
</style>
