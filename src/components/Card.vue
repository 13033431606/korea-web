<template>
  <div class="card-container" :class="'card-container-' + size">
    <div class="video-img">
      <van-image
        @click="goInfo()"
        fit="cover"
        position="center"
        :lazy-load="true"
        :src="item.videoCover"
      >
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </div>
    <div class="info h5-hide">
      <div class="viewed">
        <img src="@/assets/imgs/eye.png" alt="">
        <span>{{item.watchTimes}}</span>
      </div>
      <div class="time">
        {{formatTime(item.updatedAt)}}
      </div>
    </div>
    <div class="video-name" v-if="size != 'small'">
      <span v-if="language == 'ko-KR'">
        {{item.title}}
      </span>
      <span v-if="language == 'en-US'">
        {{item.titleUs}}
      </span>
      <span v-if="language == 'zh-CN'">
        {{item.titleCn}}
      </span>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex';
  import moment from 'moment';
  export default {
    name: "VideoCard",
    props: {
      size: {
        type: String,
        default: 'medium'
      },
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {},
    data() {
      return {}
    },
    watch: {},
    computed: {
      ...mapState({
        language: state => state.common.language,
      }),
    },
    methods: {
      formatTime(time) {
        return moment(time).format('YYYY-HH-DD')
      },
      goInfo() {
        this.$router.push({
          name: 'info',
          query: {
            id: this.item.id
          }
        })
      }
    },
    mounted() {
    },
  }
</script>

<style scoped lang="scss">
  .card-container{
    width: 300px;
    .video-img{
      width: 100%;
      height: 170px;
      background: #343945;
      cursor: pointer;
      overflow: hidden;
      :deep(.van-image){
        width: 100%;
        height: 100%;
        .van-image__img{
          transition: 0.45s ease;
        }
        .van-image__loading{
          background: none;
        }
        .van-image__error{
          background: none;
        }
        &:hover{
          .van-image__img{
            transform: scale(0.96) translateZ(0);
          }
        }
      }
    }
    .info{
      width: 100%;
      height: 20px;
      font-size: 11px;
      color: #adadad;
      box-sizing: border-box;
      padding: 0px 8px 0 6px;
      background: #343945;
      line-height: 20px;
      display: flex;
      justify-content: space-between;
      .viewed{
        display: flex;
        align-items: center;
        img{
          margin-right: 2px;
        }
      }

    }
    .video-name{
      width: 100%;
      font-size: 16px;
      color: #fff;
      padding-top: 10px;
      padding-bottom: 10px;
      @include ellipsis;
      white-space: nowrap;
    }
  }
  .card-container-large{
    width: 378px;
    .video-img{
      height: 215px;
    }
    .info{
      height: 24px;
      line-height: 24px;
    }
  }
  .card-container-small{
    transform: scale(0.5);
    transform-origin: left top;
  }

</style>
<style lang="scss" scoped>
  @media screen and (min-width: 1280px) and (max-width: 1600px) {
    .card-container-medium{
      width: 440px;
      .video-img{
        height: 250px;
      }
    }
  }
  @media screen and (min-width: 750px) and (max-width: 1280px) {
    .card-container-medium{
      width: 360px;
      .video-img{
        height: 200px;
      }
    }
  }
  @media screen and (max-width: 750px) {
    .card-container-medium, .card-container-large{
      @include border;
      box-sizing: border-box;
      width: calc(50% - 1px);
      .video-img{
        height: 31vw;
      }
      .video-name{
        box-sizing: border-box;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        padding: 0px 10px;
        @include ellipsis;
      }
    }
  }
</style>
