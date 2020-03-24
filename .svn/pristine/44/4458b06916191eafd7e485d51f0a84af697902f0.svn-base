import Layout from '@/layout'

const accountManagerRouter = {
  path: '/account',
  component: Layout,
  name: 'account',
  redirect: 'noRedirect',
  meta: {
    title: '帐号管理',
    permission_name: 'account',
    icon: 'tab'
  },
  children: [
    {
      path: 'account-type',
      component: ()=> import('@/views/account/account-type'),
      name:'account-type',
      meta: {
        title: '帐号类型',
        permission_name: 'account-type'
      }
    },
    {
      path: 'account-usage',
      component: ()=> import('@/views/account/account-usage'),
      name:'account-usage',
      meta: {
        title: '帐号类型',
        permission_name: 'account-usage'
      }
    },
    {
      path: 'game-account',
      component: ()=> import('@/views/account/game-account'),
      name: 'game-account',
      meta: {
        title: '游戏帐号',
        permission_name: 'game-account'
      }
    },
    {
      path: 'email-account',
      component: () => import('@/views/account/email-account'),
      name: 'email-account',
      meta: {
        title: '邮箱帐号',
        permission_name: 'email-account'
      }
    },
    {
      path: 'game-demand',
      component: () => import('@/views/account/game-demand'),
      name: 'game-demand',
      meta: {
        title: '游戏需求',
        permission_name: 'game-demand'
      }
    },
    {
      path: 'email-demand',
      component: () => import('@/views/account/email-demand'),
      name: 'email-demand',
      meta: {
        title: '邮箱需求',
        permission_name: 'email-demand'
      }
    },
    {
      path: 'email-pseudonym',
      component: () => import('@/views/account/email-pseudonym'),
      name: 'email-pseudonym',
      meta: {
        title: '邮箱假名',
        permission_name: 'email-pseudonym'
      }
    },
    {
      path: 'account-charging-card',
      component: () => import('@/views/account/account-charging-card'),
      name: 'account-charging-card',
      meta: {
        title: '帐号充卡',
        permission_name: 'account-charging-card'
      }
    },
    {
      path: 'recharge-task',
      component: () => import('@/views/account/recharge-task'),
      name: 'recharge-task',
      meta: {
        title: '待充值任务',
        permission_name: 'recharge-task'
      }
    },
    {
      path: 'account-feedback',
      component: () => import('@/views/account/account-feedback'),
      name: 'account-feedback',
      meta: {
        title: '帐号反馈',
        permission_name: 'account-feedback'
      }
    },
    {
      path: 'wow-account-unlock',
      component: () => import('@/views/account/wow-account-unlock'),
      name: 'wow-account-unlock',
      meta: {
        title: 'WOW帐号解锁',
        permission_name: 'wow-account-unlock'
      }
    }
  ]
}

export default accountManagerRouter
