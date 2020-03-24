import Layout from '@/layout'
const financialManagerRouter = {
  path:'/financial',
  component: Layout,
  redirect: '/financial',
  name: 'financial',
  meta: {
    title: '财务管理',
    icon: 'tab',
    permission_name: 'financial'
  },
  children: [
    {
      path: 'financial-fund-account',
      name: 'financial-fund-account',
      component: () => import('@/views/financial/financial-fund-account/index'),
      meta: {
        title: '资金账户',
        permission_name: 'financial-fund-account'
      }
    },
    {
      path: 'sales-station-account',
      name: 'sales-station-account',
      component: () => import('@/views/financial/sales-station-account/index'),
      meta: {
        title: '销售站帐号',
        permission_name: 'sales-station-account'
      }
    },
    {
      path: 'foreign-recharge',
      name: 'foreign-recharge',
      component: () => import('@/views/financial/foreign-recharge/index'),
      meta: {
        title: '国外二手充值',
        permission_name: 'foreign-recharge'
      }
    },
    {
      path: 'order-refund',
      name: 'order-refund',
      component: () => import('@/views/financial/order-refund/index'),
      meta: {
        title: '订单回款',
        permission_name: 'order-refund'
      },
      redirect: '/financial/order-refund/domestic-second-refund',
      children: [
        {
          path:'domestic-second-refund',
          name:'domestic-second-refund',
          component: () => import('@/views/financial/order-refund/domestic-second-refund'),
          meta: {
            title: '国内二手回款',
            permission_name: 'domestic-second-refund'
          }
        },
        {
          path:'foreign-second-refund',
          name:'foreign-second-refund',
          component: () => import('@/views/financial/order-refund/foreign-second-refund'),
          meta: {
            title: '国外二手回款',
            permission_name: 'foreign-second-refund'
          }
        },
        {
          path:'point-card-receipt',
          name:'point-card-receipt',
          component:() => import( '@/views/financial/order-refund/point-card-receipt'),
          meta: {
            title: '点卡销售收款',
            permission_name: 'point-card-receipt'
          }
        }
      ]
    },
    {
      path:'order-payment',
      name: 'order-payment',
      component: () => import('@/views/financial/order-payment/index'),
      meta: {
        title: '订单付款',
        permission_name: 'order-payment'
      },
      redirect: '/financial/order-payment/gold-purchase-payment',
      children: [
        {
          path: 'gold-purchase-payment',
          name: 'gold-purchase-payment',
          component: () => import('@/views/financial/order-payment/gold-purchase-payment'),
          meta: {
            title: '金币采购付款',
            permission_name: 'gold-purchase-payment'
          }
        },
        {
          path: 'point-purchase-payment',
          name: 'point-purchase-payment',
          component: () => import('@/views/financial/order-payment/point-purchase-payment'),
          meta: {
            title: '点卡采购付款',
            permission_name: 'point-purchase-payment'
          }
        },
        {
          path: 'foreign-gold-purchase-payment',
          name: 'foreign-gold-purchase-payment',
          component: () => import('@/views/financial/order-payment/foreign-gold-purchase-payment'),
          meta: {
            title: '海外金币采购付款',
            permission_name: 'foreign-gold-purchase-payment'
          }
        }
      ]
    }
  ]
}

export default  financialManagerRouter
