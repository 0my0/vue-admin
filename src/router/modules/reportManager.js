import Layout from '@/layout'
const reportManagerRouter = {
  path: '/report',
  component: Layout,
  redirect: 'noRedirect',
  name: 'report',
  meta: {
    title: '报表管理',
    icon: 'tab',
    permission_name: 'report'
  },
  children: [
    {
      path: 'first-hand-sales',
      component: ()=> import('@/views/report/first-hand-sales'),
      name:'first-hand-sales',
      meta: {
        title: '一手销售',
        permission_name: 'first-hand-sales'
      }
    },
    {
      path: 'first-hand-verification-statistics',
      component: ()=> import('@/views/report/first-hand-verification-statistics'),
      name:'first-hand-verification-statistics',
      meta: {
        title: '一手验证统计',
        permission_name: 'first-hand-verification-statistics'
      }
    },
    {
      path: 'shipping-statistics',
      component: ()=> import('@/views/report/shipping-statistics'),
      name:'shipping-statistics',
      meta: {
        title: '发货统计',
        permission_name: 'shipping-statistics'
      }
    },
    {
      path: 'personnel-statistics',
      component: ()=> import('@/views/report/personnel-statistics'),
      name:'personnel-statistics',
      meta: {
        title: '人员统计',
        permission_name: 'personnel-statistics'
      }
    },
    {
      path: 'receipt-report',
      component: ()=> import('@/views/report/receipt-report'),
      name:'receipt-report',
      meta: {
        title: '收货报表',
        permission_name: 'receipt-report'
      }
    },
    {
      path: 'purchase-order-statistics',
      component: ()=> import('@/views/report/purchase-order-statistics'),
      name:'purchase-order-statistics',
      meta: {
        title: '采购单统计',
        permission_name: 'purchase-order-statistics'
      }
    },
    {
      path: 'domestic-second-hand-statistics',
      component: ()=> import('@/views/report/domestic-second-hand-statistics'),
      name:'domestic-second-hand-statistics',
      meta: {
        title: '国内二手统计',
        permission_name: 'domestic-second-hand-statistics'
      }
    },
    {
      path: '30minute-completion-order',
      component: ()=> import('@/views/report/30minute-completion-order'),
      name:'30minute-completion-order',
      meta: {
        title: '30分钟完成单',
        permission_name: '30minute-completion-order'
      }
    },
    {
      path: 'gold-sales-delivery',
      component: ()=> import('@/views/report/gold-sales-delivery'),
      name:'gold-sales-delivery',
      meta: {
        title: '金币进销发货',
        permission_name: 'gold-sales-delivery'
      }
    },
    {
      path: 'point-card-sale',
      component: ()=> import('@/views/report/point-card-sale'),
      name:'point-card-sale',
      meta: {
        title: '点卡销售',
        permission_name: 'point-card-sale'
      }
    },
    {
      path: 'domestic-second-hand-finance',
      component: ()=> import('@/views/report/domestic-second-hand-finance'),
      name:'domestic-second-hand-finance',
      meta: {
        title: '国内二手财务',
        permission_name: 'domestic-second-hand-finance'
      }
    },
    {
      path: 'foreign-second-hand-finance',
      component: ()=> import('@/views/report/foreign-second-hand-finance'),
      name:'foreign-second-hand-finance',
      meta: {
        title: '国外二手财务',
        permission_name: 'foreign-second-hand-finance'
      }
    },
    {
      path: 'foreign-first-hand-finance',
      component: ()=> import('@/views/report/foreign-first-hand-finance'),
      name:'foreign-first-hand-finance',
      meta: {
        title: '国外一手财务',
        permission_name: 'foreign-first-hand-finance'
      }
    },
    {
      path: 'receipt-payment-report',
      component: ()=> import('@/views/report/receipt-payment-report'),
      name:'receipt-payment-report',
      meta: {
        title: '收货打款报表',
        permission_name: 'receipt-payment-report'
      }
    },
    {
      path: 'domestic-second-hand-payment',
      component: ()=> import('@/views/report/domestic-second-hand-payment'),
      name:'domestic-second-hand-payment',
      meta: {
        title: '国内二手回款',
        permission_name: 'domestic-second-hand-payment'
      }
    },
    {
      path: 'foreign-second-hand-payment',
      component: ()=> import('@/views/report/foreign-second-hand-payment'),
      name:'foreign-second-hand-payment',
      meta: {
        title: '国外二手回款',
        permission_name: 'foreign-second-hand-payment'
      }
    },
    {
      path: 'customer-return-rate',
      component: ()=> import('@/views/report/customer-return-rate'),
      name:'customer-return-rate',
      meta: {
        title: '客户回头率',
        permission_name: 'customer-return-rate'
      }
    },
    {
      path: 'new-old-customer-statistics',
      component: ()=> import('@/views/report/new-old-customer-statistics'),
      name:'new-old-customer-statistics',
      meta: {
        title: '新老客户统计',
        permission_name: 'new-old-customer-statistics'
      }
    },
    {
      path: 'sale-order-completion-statistics',
      component: ()=> import('@/views/report/sale-order-completion-statistics'),
      name:'sale-order-completion-statistics',
      meta: {
        title: '销售订单完成统计',
        permission_name: 'sale-order-completion-statistics'
      }
    },
    {
      path: 'game-account-statistics',
      component: ()=> import('@/views/report/game-account-statistics'),
      name:'game-account-statistics',
      meta: {
        title: '游戏帐号统计',
        permission_name: 'game-account-statistics'
      }
    },
    {
      path: 'inventory-change',
      component: ()=> import('@/views/report/inventory-change'),
      name:'inventory-change',
      meta: {
        title: '库存变化',
        permission_name: 'inventory-change'
      }
    },
    {
      path: 'foreign-purchase-order-statistics',
      component: ()=> import('@/views/report/foreign-purchase-order-statistics'),
      name:'foreign-purchase-order-statistics',
      meta: {
        title: '海外采购单统计',
        permission_name: 'foreign-purchase-order-statistics'
      }
    },
    {
      path: 'transceiver-performance-statistics',
      component: ()=> import('@/views/report/transceiver-performance-statistics'),
      name:'transceiver-performance-statistics',
      meta: {
        title: '收发绩效统计',
        permission_name: 'transceiver-performance-statistics'
      }
    }
  ]
}

export default reportManagerRouter
