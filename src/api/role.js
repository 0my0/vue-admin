import request from '@/utils/request'

// export function getRoutes() {
//   return request({
//     url: '/routes',
//     method: 'get'
//   })
// }

export function getRoles(role_id, token) {
  return request({
    url: '/role/auth_list',
    method: 'get',
    params: {role_id, token}
  })
}

export function addRole(data) {
  return request({
    url: '/role',
    method: 'post',
    data
  })
}

export function updateRole(data,role_id, token) {
  return request({
    url: `/role/auth?role_id=${role_id}&token=${token}`,
    method: 'post',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/role/${id}`,
    method: 'delete'
  })
}
