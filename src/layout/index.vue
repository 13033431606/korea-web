<template>
  <div class="layout-container">
    <main-header v-if="$route.name != 'look'"></main-header>
    <div class="main-container">
      <div class="loading-container" v-if="pageLoading || !loaded">
        <van-loading class="loading-wrapper" color="#ff9103" size="60"></van-loading>
      </div>
      <router-view v-if="loaded"></router-view>
    </div>
    <main-footer class="pc-hide"></main-footer>
    <verify-dialog></verify-dialog>
  </div>

</template>

<script>
  import * as api from '@/api'
  import MainHeader from "@/components/MainHeader.vue";
  import MainFooter from "@/components/MainFooter.vue";
  import VerifyDialog from "@/components/VerifyDialog.vue";
  import {mapState, mapActions} from 'vuex';
  import {uniqBy} from 'lodash';
  export default {
    name: "layout",
    computed: {
      ...mapState({
        pageLoading: state => state.common.pageLoading,
      }),
    },
    components: {
      MainHeader,
      MainFooter,
      VerifyDialog
    },
    data() {
      return {
        loaded: false
      }
    },
    methods: {
      ...mapActions({
        setAds: 'common/setAds',
        setMenus: 'common/setMenus',
      }),
      async getMenus() {
        try {
          let {rows, code} = await api.getMenus()
          if (code == 200) {
            let _rows = uniqBy(rows, 'specialId')
            _rows.forEach((main, idx) => {
              let children = [];
              rows.forEach(sub => {
                if (sub.specialId == main.specialId && sub.classifyId != main.classifyId) {
                  children.push(sub);
                }
              })
              _rows[idx].children = children;
            })
            this.setMenus(_rows)
          }
        } catch (e) {
          console.log(e);
        } finally {

        }
      },
      async getAds() {
        try {
          let {rows, code} = await api.getAds({type: 1})
          if (code == 200) {
            this.setAds(rows)
          }
        } catch (e) {
          console.log(e);
        } finally {

        }
      },
      async initData() {
        await this.getAds()
        await this.getMenus();
        this.loaded = true
      }
    },
    mounted() {
      this.initData();
    }
  }
</script>

<style lang="scss" scoped>
  .layout-container {
    max-width: 1567px;
    min-height: 100vh;
    box-sizing: border-box;
    margin: 0 auto;
  }
  .loading-container{
    width: 100%;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: 30;
    background: rgba(20,20,22,0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    :deep(.van-loading) {
      width: 100%;
      height: 100%;
      position: relative;
      .van-loading__spinner{
        @include center();
      }
    }
  }
</style>
<style lang="scss" scoped>
  @media screen and (min-width: 1280px) and (max-width: 1600px) {
    .layout-container{
      width: 1280px;
    }
  }
  @media screen and (min-width: 750px) and (max-width: 1280px) {
    .layout-container{
      width: 750px;
    }
  }
  @media screen and (max-width: 750px) {
    .layout-container{
      width: 100%;
    }
  }
</style>
