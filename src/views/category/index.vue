<template>
  <div class="category-container">
    <div v-if="classifyName" class="title-container-custom h5-hide">
      <div class="name">{{classifyName}}</div>
      <div class="more"></div>
    </div>
    <div class="ads h5-only">
      <div class="ads-item" v-for="(item, idx) in _ads.slice(0, 4)" :key="item.title + '_' + idx">
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
    <Title class="page-title pc-hide" name="한국" :more="false"></Title>
    <div class="list">
      <Card class="video-card" size="large" v-for="item in data.slice(0, 8)" :item="item"></Card>
    </div>
    <div class="ads h5-hide">
      <div class="ads-item" v-for="(item, idx) in _ads.slice(0, 15)" :key="item.title + '_' + idx">
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
    <div class="list" v-if="data.slice(8, 16).length">
      <Card class="video-card" size="large" v-for="item in data.slice(8, 16)" :item="item"></Card>
    </div>
    <div class="ads h5-hide" v-if="data.slice(8, 16).length">
      <div class="ads-item" v-for="(item, idx) in _ads.slice(15, 30)" :key="item.title + '_' + idx">
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

    <div class="list" v-if="data.slice(16, 20).length">
      <Card class="video-card" size="large" v-for="item in data.slice(16, 20)" :item="item"></Card>
    </div>

    <div class="ads" v-if="data.slice(16, 20).length">
      <div class="ads-item" v-for="(item, idx) in _ads.slice(30, 45)" :key="item.title + '_' + idx">
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
    <div class="pagination">
      <van-pagination v-model="pageNum" :total-items="total" :items-per-page="pageSize" :show-page-size="5">
        <template #prev-text>
          <van-icon name="arrow-left" />
        </template>
        <template #next-text>
          <van-icon name="arrow" />
        </template>
      </van-pagination>
    </div>
    <div class="ads h5-only">
      <div class="ads-item" v-for="(item, idx) in _ads.slice(0, 4)" :key="item.title + '_' + idx">
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
<!--    <div class="ads pc-hide">-->
<!--      <div class="ads-item" v-for="item in 4"></div>-->
<!--    </div>-->
  </div>
</template>

<script>
  import * as api from '@/api'
  import Card from "@/components/Card.vue";
  import Title from "@/components/Title.vue";
  import {mapActions,mapState} from 'vuex';

  export default {
    name: "Category",
    components: {Card, Title},
    data() {
      return {
        pageNum: 1,
        pageSize: 20,
        total: 0,
        classifyName: '',
        classifyId: '',
        specialId: '',
        search: '',
        data: [],
        _ads: [],
      }
    },
    watch: {
      '$route': {
        handler(nv, ov) {
          if (nv.name == 'category') {
            this.data = [];
            this.page = 1;
            this.total = 0;
            this.classifyName = this.$route.query.classifyName
            this.classifyId = this.$route.query.classifyId
            this.specialId = this.$route.query.specialId
            this.search = this.$route.query.search
            this.getVideos();
          }
        },
        immediate: true
      },
      pageNum() {
        window.scrollTo(0, 0);
        this.getVideos();
      }
    },
    computed: {
      ...mapState({
        ads: state => state.common.ads,
      }),
    },
    methods: {
      ...mapActions({
        toggleLoading: 'common/toggleLoading',
      }),
      async getVideos() {
        this.toggleLoading(true)
        try {
          if (this.search) {
            let {rows, code, total} = await api.searchVideos({
              title: this.search,
              pageNum: this.pageNum,
              pageSize: this.pageSize,
            })
            if (code == 200) {
              this.data = rows
              this.total = total
            }
          } else {
            let {rows, code, total} = await api.getVideos({
              pageNum: this.pageNum,
              pageSize: this.pageSize,
              classifyId: this.classifyId,
              specialId: this.specialId
            })
            if (code == 200) {
              this.data = rows
              this.total = total
            }
          }

        } catch (e) {

        } finally {
          this.toggleLoading(false)
        }
      },
      goAd(url) {
        window.open(url)
      },
    },
    mounted() {
      if (this.ads.length) {
        let count = 45 + 1;
        let times = Math.ceil(count / this.ads.length);
        let ads = [];
        for (let i = 0;i < times;i++) {
          ads = ads.concat(this.ads);
        }
        ads.shift()
        this._ads = ads;
      }
    }
  }
</script>

<style scoped lang="scss">
  .category-container{
    width: 100%;
    padding-top: 35px;
    .title-container-custom{
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
    .list{
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-top: 32px;
      .video-card{
        margin-bottom: 30px;
      }
    }
    .ads{
      width: 100%;
      padding: 23px 0px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .ads-item{
        width: 305px;
        height: 102px;
        @include border;
        box-sizing: border-box;
        margin-bottom: 10px;
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
    .h5-only{
      display: none;
    }
    .pagination{
      width: 950px;
      padding-top: 110px;
      margin: 0 auto;
      :deep(.van-pagination){
        .van-pagination__items{
          display: block;
          text-align: center;
          .van-pagination__item{
            display: inline-block;
            min-width: 80px;
            height: 80px;
            line-height: 80px;
            text-align: center;
            margin-left: 30px;
            font-size: 30px;
            color: #fff;
            background: #343945;
            text-decoration: none;
            transition: 0.3s ease;
            button{
              width: 100%;
              height: 100%;
              cursor: pointer;
            }
          }
          .van-pagination__item--prev, .van-pagination__item--next{
            width: 126px;
            height: 80px;
            line-height: 80px;
          }
          .van-hairline--surround:after{
           display: none;
          }
          .van-pagination__item--prev{
            margin-left: 0;
          }
          .van-pagination__item--active{
            background: $main-color;
          }
        }
      }
    }
  }
</style>
<style lang="scss" scoped>
  @media screen and (min-width: 1280px) and (max-width: 1600px) {
    .category-container{
      .ads{
        .ads-item{
          width: 33.33%;
          height: 140px;
        }
      }
      .list {
        .video-card{
          width: 300px;
          .video-img{
            height: 170px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 750px) and (max-width: 1280px) {
    .category-container{
      .ads{
        .ads-item{
          width: 33.33%;
          height: 140px;
        }
      }
      .list {
        .video-card{
          width: 360px;
          .video-img{
            height: 200px;
          }
        }
      }
      .pagination{
        width: 700px;
        :deep(.van-pagination) {
          .van-pagination__items {
            .van-pagination__item{
              min-width: 60px;
              height: 60px;
              line-height: 60px;
              margin-left: 20px;
            }

          }
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    .category-container{
      width: 100%;
      box-sizing: border-box;
      padding-left: 2px;
      padding-right: 2px;
      .page-title{
        margin-bottom: 10px;
        display: block!important;
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
      .h5-only{
        display: flex!important;
      }
      .list{
        padding-top: 0px;
        .video-card{
          margin-bottom: 2px;
        }
      }
      .pagination{
        width: calc(100% - 20px);
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        padding: 0px;
        @include border;

        :deep(.van-pagination) {
          .van-pagination__items {
            display: flex;
            justify-content: space-between;
            .van-pagination__item{
              min-width: 36px;
              height: 42px;
              line-height: 42px;
              font-size: 14px;
              color: #636363;
              background: none;
              margin-left: 8px;
            }
            .van-pagination__item--prev, .van-pagination__item--next{
              width: 36px;
              height: 42px;
              line-height: 42px;
            }
            .van-pagination__item--active{
              color: $main-color;
            }
          }
        }
      }
    }
  }
</style>
