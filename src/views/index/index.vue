<template>
  <div class="home-container">
    <div class="home-wrapper">
      <div class="ads">
        <div class="ads-item" v-for="(item, idx) in _ads.slice(0, 12)" :key="item.title + '_' + idx">
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
        <Title class="page-title" :name="item.category.classifyName" :suffix="suffixMap[language]" :item="item.category"></Title>
        <div class="list">
          <Card class="video-card" v-for="v in item.videos" :item="v"></Card>
        </div>
        <div class="ads h5-hide">
          <div class="ads-item" v-for="(a, idx) in item.ads" :key="a.title + '_' + idx">
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
    <Sidebar :processedData="data" class="sidebar"></Sidebar>
  </div>
</template>

<script>
  import * as api from '@/api'
  import Title from "@/components/Title.vue";
  import Card from "@/components/Card.vue";
  import Sidebar from "@/components/Sidebar.vue";
  import {mapActions,mapState} from 'vuex';

  export default {
    name: "Index",
    components: {Title, Card, Sidebar},
    data() {
      return {
        _ads: [],
        data: [],
        suffixMap: {
          'ko-KR': '더 보기',
          'en-US': 'More related videos',
          'zh-CN': '更多'
        }
      }
    },
    watch: {
      menus() {
        this.getVideos()
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
      ...mapActions({
        toggleLoading: 'common/toggleLoading',
      }),
      goAd(url) {
        window.open(url)
      },
      async getVideos() {
        this.toggleLoading(true)
        if (this.menus && this.menus.length) {
          let count = (this.menus.length + 1) * 12 + 1;
          let times = Math.ceil(count / this.ads.length);
          let ads = [];
          for (let i = 0;i < times;i++) {
            ads = ads.concat(this.ads);
          }
          ads.shift()
          this._ads = ads;
          const func = async (menu, i) => {
            let {rows, code} = await api.getVideos({
              pageNum: 1,
              pageSize: 8,
              classifyId: menu.classifyId,
              specialId: menu.specialId
            })
            if (code == 200) {
              this.data.push({
                id: menu.id,
                category: menu,
                ads: ads.slice((i + 1) * 12, (i + 2) * 12),
                adsSide: ads.slice((i + 1) * 5, (i + 2) * 5),
                videos: rows,
              })
            }
          }
          for (let i = 0; i < this.menus.length; i++) {
            await func(this.menus[i], i);
            this.toggleLoading(false)
          }
        }
      }
    },
    mounted() {
      this.getVideos()
    },
  }
</script>

<style scoped lang="scss">
  .home-container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .home-wrapper{
      width: 1230px;
      .ads{
        width: 100%;
        padding: 23px 0px;
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
        flex-direction:row;
        .video-card{
          margin-bottom: 30px;
        }
      }

    }
  }
</style>
<style lang="scss" scoped>
  @media screen and (min-width: 1280px) and (max-width: 1600px) {
    .home-container{
      .home-wrapper{
        width: 915px;
        .ads{
          .ads-item{
            width: 33.33%;
          }
        }
      }
    }
  }
  @media screen and (min-width: 750px) and (max-width: 1280px) {
    .home-container{
      .home-wrapper{
        width: 750px;
      }
      .sidebar{
        display: none;
      }
    }
  }
  @media screen and (max-width: 750px) {
    .home-container{
      width: 100%;
      .home-wrapper{
        width: 100%;
        box-sizing: border-box;
        padding-left: 2px;
        padding-right: 2px;
        .page-title{
          margin-bottom: 10px;
        }
        .ads{
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
          margin-bottom: 25px;
          .video-card{
            width: calc(50% - 1px);
            margin-bottom: 2px;
          }
        }
      }
      .sidebar{
        display: none;
      }
    }
  }
</style>
