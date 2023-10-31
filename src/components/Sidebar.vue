<template>
  <div class="sidebar">
    <div class="ads">
      <div class="ads-item" v-for="item in ads.slice(1, 6)">
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

    <div class="category-part" v-for="item in data" :key="item.id">
      <Title class="page-title" :name="item.category.classifyName + ' ' + titleMap[language]" :item="item.category" size="small" suffix=""></Title>
      <div class="list">
        <div class="video-card-wrapper" v-for="v in item.videos.slice(0, 6)">
          <Card class="video-card" size="small" :item="v"></Card>
        </div>
      </div>
      <div class="ads">
        <div class="ads-item" v-for="(a, idx) in item.adsSide" :key="a.title + '_' + idx">
          <van-image
            @click="goAd(a.link)"
            fit="cover"
            position="center"
            :lazy-load="true"
            :src="a.picUrl"
          >
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as api from '@/api'
  import Card from "@/components/Card.vue";
  import Title from "@/components/Title.vue";
  import {mapState} from 'vuex';
  export default {
    name: "Sidebar",
    components: {Card, Title},
    props: {
      processedData: {
        type: [Array, Boolean],
        default() {
          return false;
        }
      },
    },
    data() {
      return {
        _ads: [],
        data: [],
        titleMap: {
          'ko-KR': '추천영상',
          'en-US': 'Hot',
          'zh-CN': '推荐视频'
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
    methods: {
      goAd(url) {
        window.open(url)
      },
      async initData() {
        if (this.menus && this.menus.length) {
          let count = (this.menus.length + 1) * 5 + 1;
          let times = Math.ceil(count / this.ads.length);
          let ads = [];
          for (let i = 0;i < times;i++) {
            ads = ads.concat(this.ads);
          }
          ads.shift()
          this._ads = ads;
          const func = async (menu, i) => {
            let {rows, code} = await api.getVideos({
              page:0,
              pageSize:8,
              classifyId: menu.classifyId,
              specialId: menu.specialId
            })
            if (code == 200) {
              this.data.push({
                id: menu.id,
                category: menu,
                adsSide: ads.slice((i + 1) * 5, (i + 2) * 5),
                videos: rows,
              })
            }
          }
          for (let i = 0; i < this.menus.length; i++) {
            await func(this.menus[i], i);
          }
        }
      }
    },
    mounted() {
      if (this.processedData) {
        this.data = this.processedData
      } else {
        this.initData();
      }
    },
  }
</script>

<style scoped lang="scss">
  .sidebar{
    width: 305px;
    .ads{
      width: 100%;
      padding-top: 23px;
      margin-bottom: 33px;
      .ads-item{
        width: 100%;
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
      margin-bottom: 13px;
    }
    .list{
      width: 100%;
      @include clear;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .video-card-wrapper{
        width: 50%;
        height: 95px;
        margin-bottom: 8px;
      }
    }
  }
</style>
