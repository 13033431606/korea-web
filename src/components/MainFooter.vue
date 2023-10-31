<template>
  <div class="main-footer">
    <div class="footer-navs" v-if="$route.name != 'look' && $route.name != 'search'">
      <div class="nav-item" @click="goPolicy('policy')">
        <span v-if="language == 'ko-KR'">Privacy Policy</span>
        <span v-if="language == 'en-US'">Privacy Policy</span>
        <span v-if="language == 'zh-CN'">隐私政策</span>
      </div>
      <div class="nav-item" @click="goPolicy('dmca')">DMCA</div>
      <div class="nav-item" @click="goPolicy('consulting')">
        <span v-if="language == 'ko-KR'">광고문의</span>
        <span v-if="language == 'en-US'">Consulting Advertising</span>
        <span v-if="language == 'zh-CN'">咨询广告</span>
      </div>
    </div>
    <div class="tips h5-hide" v-if="language == 'ko-KR'">
      본 사이트는 성인콘텐츠가 합법인 미국, 일본, 호주, 캐나다 등 해외에 거주하는 한글 사용 유저를 위한 사이트 입니다.<br>
      리벤지포르노와 아동포르노를 절대로 업데이트하지 않습니다.<br>
      영상속 모든 사람은 성인입니다.<br>
    </div>
    <div class="tips h5-hide" v-if="language == 'en-US'">
      We are strongly against illegal pornography! We also do not own, produce or host any of the videos that you see at the website.<br>
      We offer you numerous links to third party websites and you are supposed to use them at your own discretion.<br>
      We never update Revenge porn and Child porn. Everybody in video is Adult.<br>
    </div>
    <div class="tips h5-hide" v-if="language == 'zh-CN'">
      我们坚决反对非法色情！我们也不拥有、制作或主持您在网站上看到的任何视频.<br>
      我们为您提供了许多第三方网站的链接，您应该自行使用.<br>
      我们从不更新复仇色情和儿童色情。视频中的每个人都是成年人.<br>
    </div>
  </div>
  <div class="fixed-nav pc-hide">
    <div @click="go(item)" class="nav-item" :class="$route.name == item.path ? 'item-on': ''" v-for="item in list" :key="item.name">
      <div class="icon"><van-icon :name="item.icon" color="#fff" size="22"/></div>
      <div class="name">{{item[language]}}</div>
    </div>
  </div>
  <div class="fixed-nav-space pc-hide"></div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: "MainFooter",
    components: {},
    data() {
      return {
        list: [
          {'zh-CN': '主页', 'en-US': 'Home', 'ko-KR': '집', name: 'Home', icon: 'home-o', path: 'index'},
          {'zh-CN': '搜索', 'en-US': 'Search', 'ko-KR': '검색', name: 'Search', icon: 'search', path: 'search'},
          {'zh-CN': '分类', 'en-US': 'Category', 'ko-KR': '분류', name: 'Category', icon: 'live', path: 'category'},
          {'zh-CN': '随便看', 'en-US': 'Look', 'ko-KR': '봐', name: 'Look', icon: 'play-circle', path: 'look'},
        ]
      }
    },
    watch: {},
    computed: {
      ...mapState({
        language: state => state.common.language,
      }),
    },
    methods: {
      go(item) {
        this.$router.push(item.path)
      },
      goPolicy(type) {
        this.$router.push({
          name: 'policy',
          query: {
            type: type
          }
        })
      }
    },
    mounted() {},
  }
</script>

<style scoped lang="scss">
  .main-footer{
    width: 100%;
    padding-top: 60px;
    .footer-navs{
      width: 840px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .nav-item{
        font-size: 30px;
        color: #ba0202;
        cursor: pointer;
      }
    }
    .tips{
      padding-top: 80px;
      font-size: 24px;
      line-height: 36px;
      color: #fff;
      padding-bottom: 80px;
    }
  }
  .fixed-nav-space{
    width: 100vw;
    height: 58px;
  }
  .fixed-nav{
    width: 100vw;
    height: 58px;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 50;
    border-top: 1px solid #68696c;
    background: #191d25;
    display: flex;
    justify-content: space-between;
    .nav-item{
      width: 90px;
      text-align: center;
      height: 57px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      box-sizing: border-box;
      padding: 10px 0;
      .icon{
        width: 100%;
        text-align: center;
        height: 25px;
        :deep(.van-icon){
          transition: 0.3s ease;
        }
      }
      .name{
        width: 100%;
        font-size: 12px;
        color: #fff;
        transition: 0.3s ease;
      }
    }
    .item-on{
      .icon{
        :deep(.van-icon){
          color: #ba0202!important;
        }
      }
      .name{
        color: #ba0202;
      }
    }
  }
</style>
<style scoped lang="scss">
  @media screen and (min-width: 750px) and (max-width: 1280px) {
    .main-footer{
      .footer-navs{
        width: 650px;
      }
    }
  }
  @media screen and (max-width: 750px) {
    .main-footer{
      width: 100%;
      padding: 0px;
      .footer-navs{
        width: 310px;
        padding-bottom: 30px;
        .nav-item{
          font-size: 14px;
        }
      }
    }
    .fixed-nav{
      display: flex!important;
    }
    .fixed-nav-space{
      display: block!important;
    }
  }
</style>
