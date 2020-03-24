import Layout from '@/layout'
const dispatcherManagerRouter = {
  path: '/dispatcher',
  name:'dispatcher',
  component: Layout,
  meta: {
    title: '收发管理',
    icon: 'tab',
    permission_name: 'dispatcher'
  },
  redirect: 'noRedirect',
  children: [
    {
      path:'gold-dispatcher',
      name: 'gold-dispatcher',
      component: () => import('@/views/dispatcher/gold-dispatcher'),
      meta: {
        title: '金币收发',
        permission_name: 'gold-dispatcher'
      }
    },
    {
      path:'in-out-manager',
      name: 'in-out-manager',
      component: () => import('@/views/dispatcher/in-out-manager'),
      meta: {
        title: '出入库管理',
        permission_name: 'in-out-manager'
      }
    },
    {
      path:'domestic-second-hand-delivery',
      name: 'domestic-second-hand-delivery',
      component: () => import('@/views/dispatcher/domestic-second-hand-delivery'),
      meta: {
        title: '国内二手发货审核',
        permission_name: 'domestic-second-hand-delivery'
      }
    },
    {
      path:'send-receive-requests',
      name: 'send-receive-requests',
      component: () => import('@/views/dispatcher/send-receive-requests'),
      meta: {
        title: '收发请求',
        permission_name: 'send-receive-requests'
      }
    },
    {
      path:'receipt-review',
      name: 'receipt-review',
      component: () => import('@/views/dispatcher/receipt-review'),
      meta: {
        title: '收货审核',
        permission_name: 'receipt-review'
      }
    },
    {
      path:'device-transceiver',
      name: 'device-transceiver',
      component: () => import('@/views/dispatcher/device-transceiver'),
      meta: {
        title: '装备收发',
        permission_name: 'device-transceiver'
      }
    },
    {
      path:'first-hand-query',
      name: 'first-hand-query',
      component: () => import('@/views/dispatcher/first-hand-query'),
      meta: {
        title: '一手单查询',
        permission_name: 'first-hand-query'
      }
    },
    {
      path:'foreign-second-hand-query',
      name: 'foreign-second-hand-query',
      component: () => import('@/views/dispatcher/foreign-second-hand-query'),
      meta: {
        title: '国外二手单查询',
        permission_name: 'foreign-second-hand-query'
      }
    }
  ]
}
export default dispatcherManagerRouter
