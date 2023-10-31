<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: "index",
    components: {},
    data() {},
    watch: {},
    computed: {},
    methods: {},
    mounted() {},
  }
</script>
<style lang="scss">
  @font-face {
    font-family: DIN;
    src: url('./assets/font/DIN.otf');
  }
  :root{}
  #app {
    font-family: PingFangSC-Medium, PingFang SC, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #191d25;
  }
  .pc-hide{
    display: none!important;
  }
  @media screen and (max-width: 750px) {
    .h5-hide{
      display: none;
    }
    .pc-hide{
      display: block;
    }
  }
</style>
