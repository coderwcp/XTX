import request from '@/utils/request'

// 获取品牌推荐分类列表
export function getBrand (limit) {
  return request('/home/brand', 'get', { limit })
}

// 获取轮播图数据列表
export function getBanner () {
  return request('/home/banner', 'get')
}

// 获取新鲜好物数据
export function getNew () {
  return request('/home/new', 'get')
}

// 获取人气推荐数据
export function getHot () {
  return request('/home/hot', 'get')
}

// 获取商品数据
export function getGoods () {
  return request('/home/goods', 'get')
}

// 获取最新专题数据
export function getSpecial () {
  return request('/home/special', 'get')
}
