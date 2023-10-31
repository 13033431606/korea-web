const index = {
  namespaced: true,
  state: {
    pageLoading: false,
    ads: [],
    menus: [],
    language: localStorage.getItem('language') ? localStorage.getItem('language') : 'ko-KR'
  },
  getters: {},
  mutations: {
    toggleLoading(state, params) {
      state.pageLoading = params;
    },
    setAds(state, params) {
      state.ads = params;
    },
    setMenus(state, params) {
      state.menus = params;
    },
    setLanguage(state, params) {
      state.language = params;
      localStorage.setItem('language', params)
    },
  },
  actions: {
    toggleLoading({ commit }, params) {
      commit("toggleLoading", params);
    },
    setAds({ commit }, params) {
      commit("setAds", params);
    },
    setMenus({ commit }, params) {
      commit("setMenus", params);
    },
    setLanguage({ commit }, params) {
      commit("setLanguage", params);
    },
  }
}

export default index;
