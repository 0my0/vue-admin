import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'login/loging',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/admin_info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function refresh(token) {
  return request({
    url: '/clean/cache',
    method: 'get',
    params: {token}
  })
}

export default refresh
