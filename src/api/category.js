// 定义首页需要的接口函数
import request from '@/utils/request'

/**
 * 获取首页头部分类数据
 */
export function getAllCategory () {
  return request('/home/category/head', 'get')
}
