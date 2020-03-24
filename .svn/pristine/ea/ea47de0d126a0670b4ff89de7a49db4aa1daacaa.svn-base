import Layout from '@/layout'
const mailManagerRouter = {
  path: '/mail',
  name: 'mail',
  component: Layout,
  redirect: 'noRedirect',
  meta: {
    title: '邮件管理',
    icon: 'tab',
    permission_name: 'mail'
  },
  children: [
    {
      path: 'send-mail-manager',
      name: 'send-mail-manager',
      component:() => import('@/views/mail/send-mail-manager'),
      meta: {
        title: '发送邮件管理',
        permission_name: 'send-mail-manager'
      }
    },
    {
      path: 'mail-body-manager',
      name: 'mail-body-manager',
      component:() => import('@/views/mail/mail-body-manager'),
      meta: {
        title: '邮件正文管理',
        permission_name: 'mail-body-manager'
      }
    },
    {
      path: 'mail-user-manager',
      name: 'mail-user-manager',
      component:() => import('@/views/mail/mail-user-manager'),
      meta: {
        title: '邮件用户管理',
        permission_name: 'mail-user-manager'
      }
    },
    {
      path: 'sent-mail',
      name: 'sent-mail',
      component:() => import('@/views/mail/sent-mail'),
      meta: {
        title: '已发邮件',
        permission_name: 'sent-mail'
      }
    },
    {
      path: 'bulk-mail-account-import',
      name: 'bulk-mail-account-import',
      component:() => import('@/views/mail/bulk-mail-account-import'),
      meta: {
        title: '群发邮箱帐号导入',
        permission_name: 'bulk-mail-account-import'
      }
    }
  ]
}

export  default  mailManagerRouter
