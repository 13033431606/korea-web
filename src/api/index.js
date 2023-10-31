import request from '@/utils/request'

// 分类列表
export function getMenus() {
  return request({
    url: 'videos/menu/list',
    method: 'get'
  })
}

// 广告
export function getAds(params) {
  return request({
    url: 'videos/ads/list',
    method: 'get',
    params
  })
}

// 视频列表
export function getVideos(params) {
  return request({
    url: 'videos/getOssVideo',
    method: 'get',
    params
  })
}

// 视频详情
export function getVideoInfo(params) {
  return request({
    url: 'videos/' + params.id,
    method: 'get',
  })
}


// 分类详情
export function getMenuInfo(params) {
  return request({
    url: 'videos/menu/' + params.id,
    method: 'get',
  })
}

// 搜索视频
export function searchVideos(params) {
  return request({
    url: 'videos/searchOssVideo',
    method: 'get',
    params
  })
}
