<template>
  <div class="main-header main-header-single">
    <div class="top-part">
      <div class="logo" @click="goHome">
        <img :src='logoMap[language]' class="h5-hide" alt="">
        <img src="@/assets/imgs/h5-logo.png" class="pc-hide" alt="">
      </div>
      <div class="language-container">
        <img class="language pc-hide" @click="showPicker = true" :src="languageMap[language]" alt="">
        <div class="language-wrapper h5-hide">
          <img class="language language-pc" :src="languageMap[language]" alt="">
          <div class="language-list">
            <div class="language-item" @click="setLanguage(item.value)" v-for="item in languageList" :key="item.text">
              <img class="language" :src="item.icon" alt=""> {{item.text}}
            </div>
          </div>
        </div>
      </div>
      <div class="search h5-hide">
        <van-field v-model="search"  />
        <div class="search-btn" @click="handleSearch">
          <img src="@/assets/imgs/search-icon.png" alt="">
        </div>
      </div>
      <div class="ad h5-hide">
        <van-image
          v-if="ads.length"
          @click="goAd(ads[0].link)"
          fit="cover"
          position="center"
          :lazy-load="true"
          :src="ads[0].picUrl"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </div>
    </div>
    <div class="navs">
      <div class="nav-item" :style="{width: 100 / menus.length + '%' }" v-for="item in menus" :key="item.id">
        <div class="nav-main" :class="[item.children && item.children.length ? 'nav-main-has': '', item.specialId == specialId ? 'nav-item-active': '']" @click.stop="goCategory(item)" >
          <span v-if="language == 'ko-KR'">
            {{item.classifyName}}
          </span>
          <span v-if="language == 'en-US'">
            {{item.classifyNameUs}}
          </span>
          <span v-if="language == 'zh-CN'">
            {{item.classifyNameCn}}
          </span>
          <van-icon v-if="item.children && item.children.length" name="arrow-down" />
        </div>
        <div class="nav-sub" v-if="item.children && item.children.length && !clicked">
          <div class="nav-sub-item" @click="goCategory(sub)" :class="(sub.specialId == specialId && sub.classifyId == classifyId )? 'nav-sub-item-active': ''"  v-for="sub in item.children" :key="sub.id">
            <span v-if="language == 'ko-KR'">
              {{sub.classifyName}}
            </span>
            <span v-if="language == 'en-US'">
              {{sub.classifyNameUs}}
            </span>
            <span v-if="language == 'zh-CN'">
              {{sub.classifyNameCn}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <van-config-provider theme="dark">
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
        v-model="curLanguage"
        title="Language"
        @cancel="showPicker = false"
        :columns="languageList"
        @confirm="onConfirm"
      />
    </van-popup>
  </van-config-provider>
</template>

<script>
  import {mapActions, mapState} from 'vuex';
  export default {
    name: "MainHeader",
    components: {},
    data() {
      return {
        showPicker: false,
        curLanguage: ['ko-KR'],
        languageList: [
          { text: '中文', value: 'zh-CN', icon: new URL(`../assets/imgs/zh-CN.png`, import.meta.url).href },
          { text: 'English', value: 'en-US', icon: new URL(`../assets/imgs/en-US.png`, import.meta.url).href },
          { text: '한국어', value: 'ko-KR', icon: new URL(`../assets/imgs/ko-KR.png`, import.meta.url).href },
        ],
        logoMap: {
          'ko-KR': new URL(`../assets/imgs/pc-logo_ko-KR.png`, import.meta.url).href,
          'en-US': new URL(`../assets/imgs/pc-logo_en-US.png`, import.meta.url).href,
          'zh-CN': new URL(`../assets/imgs/pc-logo_zh-CN.png`, import.meta.url).href
        },
        languageMap: {
          'ko-KR': new URL(`../assets/imgs/ko-KR.png`, import.meta.url).href,
          'en-US': new URL(`../assets/imgs/en-US.png`, import.meta.url).href,
          'zh-CN': new URL(`../assets/imgs/zh-CN.png`, import.meta.url).href
        },
        clicked: false,
        search: '',
        classifyId: '',
        specialId: '',
      }
    },
    computed: {
      ...mapState({
        menus: state => state.common.menus,
        ads: state => state.common.ads,
        language: state => state.common.language,
      }),
    },
    watch: {
      '$route': {
        handler() {
          this.classifyId = this.$route.query.classifyId
          this.specialId = this.$route.query.specialId
        },
        immediate: true
      }
    },
    methods: {
      ...mapActions({
        setMenus: 'common/setMenus',
        setLanguage: 'common/setLanguage',
      }),
      onConfirm({selectedValues}) {
        if (this.language != selectedValues[0]) {
          this.setLanguage(selectedValues[0])
        }
        this.showPicker = false
      },
      goHome() {
        this.$router.push('index')
      },
      goAd(url) {
        window.open(url)
      },
      handleSearch() {
        this.$router.push({
          name: 'category',
          query: {
            search: this.search
          }
        })
        this.search = '';
      },
      goCategory(item) {
        if (item.children && item.children.length) {
          return;
        }
        this.clicked = true
        this.$router.push({
          name: 'category',
          query: {
            classifyId: item.classifyId,
            specialId: item.specialId,
            classifyName: item.classifyName,
          }
        })
        setTimeout(() => {
          this.clicked = false
        }, 0)
      }
    },
  }
</script>

<style scoped lang="scss">
  .van-config-provider{
    :deep(.van-picker__columns){
      cursor: default!important;
      .van-picker-column__item{
        cursor: pointer;
      }
    }
  }

</style>
<style scoped lang="scss">
  .main-header{
    width: 100%;
    position: relative;
    z-index: 50;
    .top-part{
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding-right: 42px;
      .language-container{
        width: 32px;
        height: 32px;
        position: absolute;
        right: 0px;
        top: 10px;
        .language{
          width: 32px;
          height: 32px;
        }
        .language-wrapper{
          position: relative;
          width: 32px;
          .language-pc{
            width: 32px;
            height: 32px;
          }
          .language-list{
            width: 150px;
            position: absolute;
            z-index: 30;
            top: 100%;
            right: 0;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(-10px);
            transition: 0.45s ease;
            .language-item{
              font-size: 15px;
              background: #343945;
              height: 50px;
              line-height: 50px;
              color: #fff;
              transition: 0.35s ease;
              cursor: pointer;
              img{
                vertical-align: middle;
                margin-left: 15px;
                margin-right: 10px;
                height: 28px;
                width: 28px;
              }
              &:hover{
                background: $main-color;
              }
            }
          }
          &:hover{
            .language-list{
              opacity: 1;
              visibility: visible;
              pointer-events: unset;
              transform: translateY(0px);
            }
          }
        }

      }
      .logo{
        width: 399px;
        float: left;
        padding-top: 28px;
        height: 68px;
        cursor: pointer;
        img{
          display: block;

          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
      }
      .search{
        float: left;
        padding-top: 37px;
        :deep(.van-field){
          float: left;
          width: calc(410vw / 19.2);
          height: 46px;
          background: none;
          @include border;
          background: #484b52;
          box-sizing: border-box;
          &:after{
            display: none;
          }
          input{
            color: #fff;
          }
        }
        .search-btn{
          float: left;
          width: 46px;
          height: 46px;
          @include border;
          box-sizing: border-box;
          margin-left: 2px;
          position: relative;
          cursor: pointer;
          transition: 0.3s ease;
          img{
            @include center();
          }
          &:hover{
            background: $main-color;
          }
        }

      }
      .ad{
        margin-top: 10px;
        margin-bottom: 12px;
        width: 306px;
        height: 102px;
        @include border;
        float: right;
        :deep(.van-image){
          width: 100%;
          height: 100%;
          .van-image__loading{
            background: none;
          }
          .van-image__error{
            background: none;
          }
        }
      }
    }
    .navs{
      width: 100%;
      display: flex;
      justify-content: space-between;
      @include border;
      box-sizing: border-box;
      .nav-item{
        height: 55px;
        border-right: 1px solid #909090;
        position: relative;
        .nav-main{
          width: 100%;
          height: 100%;
          font-size: 20px;
          color: #fff;
          text-align: center;
          line-height: 55px;
          transition: 0.35s ease;
          cursor: pointer;
          span{
            position: relative;
            z-index: 5;
            margin-right: 5px;
          }
        }
        .nav-item-active{
          color: #191d25;
          background: $main-color;
        }
        .nav-main-has{
          cursor: default;
        }
        .nav-sub{
          width: 100%;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(-10px);
          transition: 0.45s ease;
          position: absolute;
          top: 100%;
          left: 0;
          .nav-sub-item{
            width: 100%;
            height: 50px;
            line-height: 50px;
            color: #fff;
            text-align: center;
            font-size: 16px;
            background: rgba(#191d25, 0.7);
            border-bottom: 1px solid #909090;
            cursor: pointer;
            box-sizing: border-box;
            position: relative;
            &:before{
              content: '';
              width: 0px;
              height: 100%;
              position: absolute;
              left: 0px;
              top: 0px;
              z-index: 1;
              background: $main-color;
              transition: 0.3s ease;
            }
            &:last-child{
              border-bottom: none;
            }
            &:hover{
              &:before{
                width: 5px;
              }
            }
          }
          .nav-sub-item-active{
            &:before{
              width: 5px;
            }
          }
        }
        &:last-child{
          border-right: none;
        }
        &:before{
          content: '';
          width: 100%;
          height: 0%;
          position: absolute;
          bottom: 0;
          left: 0;
          transition: 0.3s ease;
          background: $main-color;
          cursor: pointer;
        }
        &:hover{
          .nav-main{
            color: #191d25;
          }
          .nav-sub{
            opacity: 1;
            visibility: visible;
            pointer-events: unset;
            transform: translateY(0px);
          }
          &:before{
            height: 100%;
          }
        }

      }


    }
  }
  .main-header-single{
    .top-part{
      padding-right: 0;
      .language-container{
        display: none;
      }
    }
  }
</style>
<style scoped lang="scss">
  @media screen and (min-width: 750px) and (max-width: 1280px) {
    .main-header{
      .top-part{
        .logo{
          height: 100px;
          margin-left: 35px;
          width: 320px;
          padding-top: 0px;
        }
      }
      .search{
        display: none;
      }
      .ad{
        display: none;
      }
    }
  }
  @media screen and (max-width: 750px) {
    .main-header{
      .top-part{
        .h5-hide{
          display: none!important;
        }
        .pc-hide{
          display: block!important;
        }
        .logo{
          margin-left: 20px;
          width: 177px;
          padding-top: 0px;
        }
        .language{
          width: 24px;
          height: 24px;
          position: absolute;
          right: 10px;
          top: 10px;
        }
      }
      .navs{
        border: none;
        box-sizing: border-box;
        padding: 0 20px;
        .nav-item{
          height: 50px;
          border: none;
          .nav-main{
            background: none;
            font-size: 14px;
            color: #8f8f8f;
          }
          .nav-item-active{
            color: $main-color!important;
            &:before{
              height: 3px;
            }
          }
          .nav-sub{
            .nav-sub-item{
              font-size: 13px;
              height: 40px;
              border-bottom: none;
              &:before{
                display: none;
              }
            }
            .nav-sub-item-active{
              color: $main-color;
            }
          }
          &:before{
            border-radius: 3px;
          }
          &:hover{
            .nav-main{
              color: $main-color;
            }
            &:before{
              height: 3px;
            }
          }
        }
      }
    }
  }
</style>
