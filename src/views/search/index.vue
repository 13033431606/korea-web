<template>
  <div class="search-container">
    <van-search v-model="search"
                show-action
                :placeholder="placeholderMap[language]"
                @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">{{searchMap[language]}}</div>
      </template>
    </van-search>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: "index",
    components: {},
    data() {
      return {
        search: '',
        placeholderMap: {
          'ko-KR': '검색어를 입력해주세요',
          'en-US': 'Please enter search terms',
          'zh-CN': '请输入搜索词'
        },
        searchMap: {
          'ko-KR': '검색',
          'en-US': 'Search',
          'zh-CN': '搜索'
        }
      }
    },
    watch: {},
    computed: {
      ...mapState({
        language: state => state.common.language,
      }),
    },
    methods: {
      onSearch() {
        this.$router.push({
          name: 'category',
          query: {
            search: this.search
          }
        })
      }
    },
    mounted() {
    },
  }
</script>

<style scoped lang="scss">
  :deep(.van-search) {
    background: none;
    .van-search__action{
      color: #fff;
    }
  }
</style>
