<template>
  <van-swipe class="video-swiper" @change="videoChange" vertical lazy-render :show-indicators="false" :duration="300">
    <van-swipe-item v-for="item in videos" :key="item.id" :id="'swipe-' + item.id"></van-swipe-item>
  </van-swipe>
</template>

<script>
  import * as api from '@/api'
  import {mapActions} from 'vuex';
  import 'video.js/dist/video-js.css';
  import VideoJs from 'video.js';
  // import {uniqueId} from 'lodash'
  export default {
    name: "Look",
    components: {},
    data() {
      return {
        videos: [],
        players: [],
        pageNum: 1,
        pageSize: 6
      }
    },
    watch: {},
    computed: {},
    methods: {
      ...mapActions({
        toggleLoading: 'common/toggleLoading',
      }),
      videoChange(curIdx) {
        this.players.forEach(item => {
          item.pause()
        })
        if (curIdx == this.players.length - 3) {
          this.pageNum = this.pageNum + 1;
          this.getVideos(false);
        }
      },
      async getVideos(loading) {
        if (loading) {
          this.toggleLoading(true)
        }
        try {
          let {rows, code} = await api.getVideos({
            pageNum: this.pageNum,
            pageSize: this.pageSize,
          })
          if (code == 200 && rows.length) {
            this.videos = this.videos.concat(rows);
            rows.forEach(item => {
              this.initPlayer(item)
            })
          }
        } catch (e) {

        } finally {
          this.toggleLoading(false)
        }
      },
      initPlayer(item) {
        setTimeout(() => {
          document.getElementById('swipe-' + item.id).innerHTML = `<video id="video-js-${item.id}" class="video-js"></video>`
          setTimeout(() => {
            this.players.push(VideoJs(document.getElementById('video-js-' + item.id), {
              controls: true,
              muted: true,
              fluid: true,
              reload: "auto",
              poster: item.videoCover,
              sources: [
                {
                  src: item.video,
                  type: 'application/x-mpegURL',
                },
              ],
            }, function onPlayerReady() {
            }))
          }, 0)
        }, 0)
      },
    },
    mounted() {
      this.getVideos(true);
    },
    beforeUnmount() {
      if (this.players.length) {
        this.players.forEach(item => {
          item.dispose()
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .video-swiper{
    height: calc(100vh - 58px);
  }
  :deep(.van-swipe-item) {
    .video-js{
      width: 100%!important;
      height: 100%!important;
      background: none;
    }
  }

</style>
