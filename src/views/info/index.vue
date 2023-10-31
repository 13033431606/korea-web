<template>
  <div class="info-container">
    <div class="info-wrapper">
      <div class="ads pc-hide" style="padding-top: 0;margin-top: 0px;">
        <div class="ads-item" v-for="item in _ads.slice(0, 4)">
          <van-image
            @click="goAd(item.link)"
            fit="cover"
            position="center"
            :lazy-load="true"
            :src="item.picUrl"
          >
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
        </div>
      </div>
      <div class="video-info">
        <div class="info-h5 pc-hide">
          <div class="viewed">
            <img src="@/assets/imgs/eye.png" alt="">
            <span>{{data.watchTimes}}</span>
          </div>
          <div class="time">
            {{formatTime(data.updatedAt)}}
          </div>
        </div>
        <div class="video-img" id="video-info"></div>
        <div class="info h5-hide">
          <div class="viewed">
            <img src="@/assets/imgs/eye-large.png" alt="">
            <span>{{data.watchTimes}}</span>
          </div>
          <div class="time">
            {{formatTime(data.updatedAt)}}
          </div>
        </div>
        <div class="video-name">
           <span v-if="language == 'ko-KR'">
            {{data.title}}
          </span>
          <span v-if="language == 'en-US'">
            {{data.titleUs}}
          </span>
          <span v-if="language == 'zh-CN'">
            {{data.titleCn}}
          </span>
        </div>
        <div class="video-desc" v-if="data.titleChinese">
          {{data.titleChinese}}
        </div>
      </div>
      <div class="ads h5-hide">
        <div class="ads-item" v-for="item in _ads.slice(0, 24)">
          <van-image
            @click="goAd(item.link)"
            fit="cover"
            position="center"
            :lazy-load="true"
            :src="item.picUrl"
          >
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
        </div>
      </div>
      <Title class="page-title h5-hide" :name="relatedMap[language]" :more="false"></Title>
      <div class="list">
        <Card class="video-card" v-for="item in videos" :item="item" :key="item.id"></Card>
      </div>
      <div class="ads">
        <div class="ads-item" v-for="item in _ads.slice(24, 48)">
          <van-image
            @click="goAd(item.link)"
            fit="cover"
            position="center"
            :lazy-load="true"
            :src="item.picUrl"
          >
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
        </div>
      </div>
      <div class="more" @click="goCategory">{{moreRelatedMap[language]}}</div>
    </div>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
  import * as api from '@/api'
  import moment from 'moment';
  import Sidebar from "@/components/Sidebar.vue";
  import Card from "@/components/Card.vue";
  import Title from "@/components/Title.vue";
  import {mapActions,mapState} from 'vuex';
  import 'video.js/dist/video-js.css';
  import VideoJs from 'video.js';
  export default {
    name: "Info",
    components: {Sidebar,Title,Card},
    data() {
      return {
        id: '',
        data: {},
        _ads: [],
        videos: [],
        player: null,
        relatedMap: {
          'ko-KR': '관련동영상',
          'en-US': 'Related videos',
          'zh-CN': '相关视频'
        },
        moreRelatedMap: {
          'ko-KR': '관련 영상 더 보기',
          'en-US': 'More related videos',
          'zh-CN': '更多相关视频'
        }
      }
    },
    computed: {
      ...mapState({
        ads: state => state.common.ads,
        menus: state => state.common.menus,
        language: state => state.common.language,
      }),
    },
    watch: {
      '$route': {
        handler(nv) {
          if(nv.name == 'info') {
            this.id = this.$route.query.id
            this.initData();
          }
        },
        immediate: true
      },
      ads(nv) {
        this._ads = JSON.parse(JSON.stringify(nv));
      }
    },
    methods: {
      ...mapActions({
        toggleLoading: 'common/toggleLoading',
      }),
      goAd(url) {
        window.open(url)
      },
      formatTime(time) {
        return moment(time).format('YYYY-HH-DD')
      },
      async getVideoInfo() {
        this.toggleLoading(true);
        try {
          let {data, code} = await api.getVideoInfo({id: this.id})
          if (code == 200) {
            this.data = data;
            this.initPlayer()
            this.getMenuInfo()
          }
        } catch (e) {
        } finally {
          this.toggleLoading(false);
        }
      },
      async getMenuInfo() {
        try {
          let {data, code} = await api.getMenuInfo({id: this.data.classifyId})
          if (code == 200) {
            this.classifyInfo = data;
          }
        } catch (e) {
        } finally {
          this.toggleLoading(false);
        }
      },
      async getVideos() {
        try {
          let {rows, code} = await api.getVideos({
            pageNum: 1,
            pageSize: 20,
            classifyId: this.data.classifyId,
            specialId: this.data.specialId
          })
          if (code == 200) {
            this.videos = rows
          }
        } catch (e) {

        } finally {
        }
      },
      goCategory() {
        this.$router.push({
          name: 'category',
          query: {
            classifyId: this.data.classifyId,
            specialId: this.data.specialId,
            classifyName: ''
          }
        })
      },
      initPlayer() {
        document.getElementById('video-info').innerHTML = `<video id="video-js" class="video-js"></video>`
        setTimeout(() => {
          this.player = VideoJs(document.getElementById('video-js'), {
            controls: true,
            muted: true,
            fluid: true,
            reload: "auto",
            poster: this.data.videoCover,
            sources: [
              {
                src: this.data.video,
                type: 'application/x-mpegURL',
              },
            ],
          }, function onPlayerReady() {
          })
        }, 0)
      },
      initData() {
        if (this.player) {
          this.player.dispose()
        }
        this.id = this.$route.query.id
        this.getVideoInfo()
        if (this.menus && this.menus.length) {
          let count = (this.menus.length + 1) * 24 + 1;
          let times = Math.ceil(count / this.ads.length);
          let ads = [];
          for (let i = 0;i < times;i++) {
            ads = ads.concat(this.ads);
          }
          ads.shift()
          this._ads = ads;
        }
        this.getVideos();
      }
    },
    beforeUnmount() {
      if (this.player) {
        this.player.dispose()
      }
    }
  }
</script>

<style scoped lang="scss">
  .info-container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .info-wrapper{
      width: 1230px;
      padding-top: 23px;
      .video-info{
        width: 100%;
        padding-bottom: 50px;
        .video-img{
          width: 100%;
          background: #333;
          .video-js{
            width: 100%;
            /*object-fit: cover;*/
            /*object-position: center;*/
          }
        }
        .info-h5{
          width: 100%;
          font-size: 12px;
          color: #adadad;
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 10px;
          .viewed{
            display: flex;
            align-items: center;
            img{
              margin-right: 5px;
            }
          }
        }
        .info{
          width: 100%;
          height: 76px;
          font-size: 30px;
          color: #adadad;
          box-sizing: border-box;
          padding: 0px 55px 0 38px;
          background: #343945;
          line-height: 76px;
          display: flex;
          justify-content: space-between;
          .viewed{
            display: flex;
            align-items: center;
            img{
              margin-right: 15px;
            }
          }
        }
        .video-name{
          width: 100%;
          box-sizing: border-box;
          font-size: 30px;
          color: #fff;
          padding: 25px;
        }
        .video-desc{
          width: 100%;
          box-sizing: border-box;
          padding: 0 150px 0 25px;
          font-size: 24px;
          color: #8b8b8b;
        }
      }
      .ads{
        width: 100%;
        padding: 23px 0px;
        margin-bottom: 55px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .ads-item{
          width: 25%;
          height: 102px;
          @include border;
          box-sizing: border-box;
          cursor: pointer;
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
      .page-title{
        margin-bottom: 16px;
      }
      .list{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .video-card{
          margin-bottom: 30px;
        }
      }
      .more{
        width: 788px;
        height: 74px;
        line-height: 74px;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
        text-align: center;
        background: #343945;
        margin: 0 auto;
      }
    }
  }
</style>
<style lang="scss" scoped>
  @media screen and (min-width: 1280px) and (max-width: 1600px) {
    .info-container{
      .info-wrapper{
        width: 915px;
        .video-info{
          .video-img{}
          .video-desc{
            padding: 0 25px 0 25px;
          }
        }
        .ads{
          .ads-item{
            width: 33.33%;
          }
        }
      }
    }
  }
  @media screen and (min-width: 750px) and (max-width: 1280px) {
    .info-container{
      .info-wrapper{
        width: 750px;
        .video-info{
          .video-img{}
          .info{
            height: 50px;
            line-height: 50px;
            font-size: 24px;
          }
          .video-name{
            font-size: 24px;
          }
          .video-desc{
            font-size: 21px;
            padding: 0 25px 0 25px;
          }
        }
        .ads{
          .ads-item{
            width: 33.33%;
          }
        }
        .more{
          width: 750px;
        }
      }
    }
    .sidebar{
      display: none;
    }
  }
  @media screen and (max-width: 750px) {
    .h5-hide{
      display: none!important;
    }
    .pc-hide{
      display: flex!important;
    }
    .info-container{
      width: 100%;
      .info-wrapper{
        width: 100%;
        box-sizing: border-box;
        padding-left: 2px;
        padding-right: 2px;
        .ads{
          margin-bottom: 25px;
          margin-top: 25px;
          .ads-item{
            width: calc(50% - 1px);
            height: 17vw;
            margin-bottom: 2px;
            display: none;
            &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4), {
              display: block;
            }
          }
        }
        .list{
          padding-top: 0px;
          .video-card{
            margin-bottom: 2px;
          }
        }
        .more{
          display: none;
        }
        .video-info{
          width: 100%;
          box-sizing: border-box;
          padding-bottom: 15px;
          .info-h5{
            display: flex!important;
          }
          .info{
            display: none!important;
          }
          .video-img{
            @include border;
          }
          .video-name{
            font-size: 12px;
            color: #fff;
            padding: 10px;
            font-weight: bold;
          }
          .video-desc{
            font-size: 12px;
            color: #fff;
            padding: 10px;
            padding-top: 0px;
          }
        }

      }
      .sidebar{
        display: none;
      }
    }
  }
</style>
