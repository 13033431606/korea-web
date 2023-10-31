<template>
  <div class="title-container">
    <div class="split pc-hide"></div>
    <div class="name" :class="'name-' + size">{{name}}</div>
    <div class="more" @click="goCategory" v-if="more">{{suffix}}<span>>></span></div>
  </div>
</template>

<script>
  export default {
    name: "Title",
    components: {},
    props: {
      item: {
        type: Object,
        default() {
          return {};
        }
      },
      name: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'large'
      },
      suffix: {
        type: String,
        default: '더 보기'
      },
      more: {
        type: Boolean,
        default: true
      },
    },
    data() {
      return {
      }
    },
    watch: {},
    computed: {},
    methods: {
      goCategory() {
        this.$router.push({
          name: 'category',
          query: {
            classifyId: this.item.classifyId,
            specialId: this.item.specialId,
            classifyName: this.item.classifyName
          }
        })
      }
    },
    mounted() {
    },
  }
</script>

<style scoped lang="scss">
  .title-container{
    background: #343945;
    height: 44px;
    border-left: 10px solid #ba0101;
    @include clear();
    .name{
      float: left;
      font-size: 24px;
      font-weight: bold;
      height: 44px;
      line-height: 44px;
      margin-left: 15px;
      color: #fff;
    }
    .name-small{
      font-weight: normal;
    }
    .more{
      cursor: pointer;
      height: 44px;
      line-height: 44px;
      font-size: 24px;
      font-style: italic;
      float: right;
      margin-right: 10px;
      color: #fff;
      span{
        color: #ba0101;
        margin-left: 18px;
        position: relative;
        top: -3px;
      }
    }
  }
</style>
<style scoped lang="scss">
  @media screen and (max-width: 750px) {
    .title-container{
      box-sizing: border-box;
      padding-left: 12px;
      border-left: none;
      background: none;
      height: 36px;
      .split{
        background-color: #b40939;
        width: 8px;
        height: 36px;
        border-radius: 2px;
        float: left;
        display: block!important;
      }
      .name{
        height: 36px;
        line-height: 36px;
        margin-left: 10px;
        font-size: 16px;
        color: #fff;
        font-weight: normal;
      }
      .more{
        height: 36px;
        line-height: 36px;
        font-size: 16px;
        color: #fff;
        span{
          top: -2px;
        }
      }
    }
  }
</style>
