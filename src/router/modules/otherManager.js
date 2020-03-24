import Layout from '@/layout'
const otherManagerRouter = {
  path: '/other',
  name: 'other',
  component: Layout,
  redirect: 'noRedirect',
  meta: {
    title: '其他管理',
    permission_name:'other',
    icon: 'tab'
  },
  children: [
    {
      path: 'foreign-collection',
      name: 'foreign-collection',
      component: () => import('@/views/other/foreign-collection'),
      meta: {
        title: '海外采集',
        permission_name: 'foreign-collection'
      }
    },
    {
      path: 'message-board',
      name: 'message-board',
      component: () => import('@/views/other/message-board'),
      meta: {
        title: '留言板',
        permission_name: 'message-board'
      }
    },
    {
      path: 'blacklist',
      name: 'blacklist',
      component: () => import('@/views/other/blacklist'),
      meta: {
        title: '黑名单',
        permission_name: 'blacklist'
      }
    },
    {
      path: 'game-server-mapping',
      name: 'game-server-mapping',
      component: () => import('@/views/other/game-server-mapping'),
      meta: {
        title: '游戏服务器映射',
        permission_name: 'game-server-mapping'
      }
    },
    {
      path: 'Ebay-store-manager',
      name: 'Ebay-store-manager',
      component: () => import('@/views/other/Ebay-store-manager'),
      meta: {
        title: 'Ebay店铺管理',
        permission_name: 'Ebay-store-manager'
      }
    },
    {
      path: 'game-server-customization',
      name: 'game-server-customization',
      component: () => import('@/views/other/game-server-customization'),
      meta: {
        title: '游戏服务器自定',
        permission_name: 'game-server-customization'
      }
    }
  ]
}
export  default  otherManagerRouter
