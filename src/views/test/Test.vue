<template>
  <div class="box">
    <button class="send" @click="send">发送</button>
  </div>
</template>

<script>
  export default {
    name: "Test",
    methods: {
      send() {
        location="mailto:791557345@qq.com?cc=791557345@qq.com&subject=主题&body=内容";
      }
    }
  }
</script>

<style scoped>

</style>
