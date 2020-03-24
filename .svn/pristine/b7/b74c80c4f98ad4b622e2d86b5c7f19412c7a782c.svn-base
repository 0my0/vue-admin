import request from '@/utils/request'
class SystemManager {
  getRoleIndex(token) {
    return request({
      url: '/role/index',
      method: 'get',
      params: { token }
    })
  }

  createRole(data, token) {
    return request({
      url: `/role/create?token=${token}`,
      method: 'post',
      data
    })
  }

  deleteRole(role_id, token) {
    return request({
      url: '/role/delete',
      method: 'get',
      params: { role_id, token }
    })
  }

  getAdminIndex(role_id, token) {
    return request({
      url: '/admin/index',
      method: 'get',
      params: { role_id, token }
    })
  }

  createPerson(data, token) {
    return request({
      url: `/admin/create?token=${token}`,
      method: 'post',
      data
    })
  }

  modifyPerson(data, token, admin_id) {
    return request({
      url: `/admin/edit?token=${token}&admin_id=${admin_id}`,
      method: 'post',
      data
    })
  }

  deletePerson(admin_id, token) {
    return request({
      url: 'admin/delete',
      method: 'get',
      params: { admin_id, token }
    })
  }

  searchPeople(data, token) {
    return request({
      url: `/admin/index?token=${token}`,
      method: 'post',
      data
    })
  }

  getSiteIndex(token) {
    return request({
      url: '/site/index',
      method: 'get',
      params: { token }
    })
  }

  createSite(data, token) {
    return request({
      url: `/site/create?token=${token}`,
      method: 'post',
      data
    })
  }
  editSite(data,site_id, token) {
    return request({
      url: `/site/edit?site_id=${site_id}&token=${token}`,
      method: 'post',
      data
    })
  }

  deleteSite(site_id,token){
    return request({
      url: '/site/delete',
      method:'get',
      params: {site_id, token}
    })
  }


  getCountryIndex(token) {
    return request({
      url: '/country/index',
      method: 'get',
      params: {token}
    })
  }

  createCountry(data, token) {
    return request({
      url: `/country/create?token=${token}`,
      method: 'post',
      data
    })
  }

  installCountry(token) {
    return request({
      url: '/country/install',
      method: 'get',
      params: {token}
    })
  }

  editCountry(data, country_id,token) {
    return request({
      url: `/country/edit?country_id=${country_id}&token=${token}`,
      method: 'post',
      data
    })
  }
  deleteCountry(country_id,token){
    return request({
      url: '/country/delete',
      method: 'get',
      params: {country_id , token}
    })
  }


  getGameIndex(token) {
    return request({
      url: '/game/index',
      method: 'get',
      params: {token}
    })
  }

  createGame(data, token) {
    return request({
      url: `/game/create?token=${token}`,
      method: 'post',
      data
    })
  }

  editGame(data, game_id, token) {
    return request({
      url: `/game/edit?game_id=${game_id}&token=${token}`,
      method: 'post',
      data
    })
  }
  getGameConfigIndex(site_id,token) {
    return request({
      url: '/sitegame/edit',
      method: 'get',
      params: {site_id, token}
    })
  }

  saveGameConfigIndex(data,site_id,token) {
    return request({
      url: `/sitegame/edit?site_id=${site_id}&token=${token}`,
      method: 'post',
      data
    })
  }

  getMailAccountIndex(token){
    return request({
      url:'/setting/index_mail',
      method: 'get',
      params:{
        token
      }
    })
  }
  createMail(data, token) {
    return request({
      url: `/setting/mail_create?token=${token}`,
      method:'post',
      data
    })
  }

  editMail(data, site_id,token) {
    return request({
      url: `/setting/mail_edit?site_id=${site_id}&token=${token}`,
      method:'post',
      data
    })
  }

  getPaymentMethod(token) {
    return request({
      url:'/Payment/index',
      method:'get',
      params: {token}
    })
  }
  createPaymentMethod(data, token){
    return request({
      url:`/Payment/create?token=${token}`,
      method:'post',
      data
    })
  }

  editPaymentMethod(payment_id,data,token) {
    return request({
      url:`/Payment/edit?payment_id=${payment_id}&token=${token}`,
      method:'post',
      data
    })
  }

}


export default new SystemManager();
