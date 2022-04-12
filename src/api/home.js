import request from '@/utils/request'

export function getBrand (limit) {
  return request('/home/brand', 'get', { limit })
}
