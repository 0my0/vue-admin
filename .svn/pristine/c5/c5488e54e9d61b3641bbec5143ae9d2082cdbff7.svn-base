import Layout from '@/layout'
const mineManagerRouter = {
  path: '/mine',
  name: 'mine',
  component: Layout,
  meta: {
    title: '我的',
    permission_name: 'mine',
    icon: 'tab'
  },
  redirect: 'noRedirect',
  children: [
    {
      path: 'account-requirement',
      name: 'account-requirement',
      component: ()=> import('@/views/mine/account-requirement'),
      meta: {
        title: '帐号需求',
        permission_name: 'account-requirement'
      }
    },
    {
      path: 'email-requirement',
      name: 'email-requirement',
      component: ()=> import('@/views/mine/email-requirement'),
      meta: {
        title: '邮箱需求',
        permission_name: 'email-requirement'
      }
    },
    {
      path: 'mine-point-sales',
      name: 'mine-point-sales',
      component: ()=> import('@/views/mine/mine-point-sales'),
      meta: {
        title: '点卡销售',
        permission_name: 'mine-point-sales'
      }
    },
    {
      path: 'mine-mail',
      name: 'mine-mail',
      component: ()=> import('@/views/mine/mine-mail'),
      meta: {
        title: '邮件',
        permission_name: 'mine-mail'
      }
    },
    {
      path: 'workstation-message',
      name: 'workstation-message',
      component: ()=> import('@/views/mine/workstation-message'),
      meta: {
        title: '工作站消息',
        permission_name: 'workstation-message'
      }
    },
    {
      path: 'grab-single',
      name: 'grab-single',
      component: ()=> import('@/views/mine/grab-single'),
      meta: {
        title: '抢单器',
        permission_name: 'grab-single'
      }
    }
  ]
}

export default mineManagerRouter
