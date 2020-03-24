import Layout from '@/layout'
const salesManagerRouter = {
  path: '/sales',
  component: Layout,
  redirect: '/sales/first-hand/coupon-manager',
  name: 'sales',
  meta: {
    title: '销售管理',
    permission_name: 'sales',
    icon: 'tab'
  },
  children: [
    {
    path: 'first-hand',
    component: ()=> import('@/views/sales/first-hand/index'),
    name: 'firstHand',
    meta: { title: '一手销售', permission_name: 'first-hand' },
    redirect: '/sales/first-hand/coupon-manager',
    children: [
      {
      path: 'coupon-manager',
      component: ()=> import('@/views/sales/first-hand/coupon-manager'),
      name: 'couponManager',
      meta: { title: '优惠券管理' ,permission_name: 'coupon-manager'}
      },
      {
        path: 'site-user-manager',
        component: ()=> import('@/views/sales/first-hand/site-user-manager'),
        name: 'siteUserManager',
        meta: { title: '站点用户管理',permission_name: 'site-user-manager' }
      },
      {
        path: 'gold-product-manager',
        component: ()=> import('@/views/sales/first-hand/gold-product-manager'),
        name: 'goldProductManager',
        meta: { title: '金币产品管理',permission_name: 'gold-product-manager' }
      },
      {
        path: 'boosting-product-manager',
        component: ()=> import('@/views/sales/first-hand/boosting-product-manager'),
        name: 'boostingProductManager',
        meta: { title: '代练产品管理',permission_name: 'boosting-product-manager' }
      },
      {
        path: 'cdk-product-manager',
        component: ()=> import('@/views/sales/first-hand/cdk-product-manager'),
        name: 'cdkProductManager',
        meta: { title: 'CDK产品管理',permission_name: 'cdk-product-manager' }
      },
      {
        path:'equipment-product-manager',
        component: ()=> import('@/views/sales/first-hand/equipment-product-manager'),
        name: 'equipmentProductManager',
        meta: { title: '装备产品管理',permission_name: 'equipment-product-manager' }
      },
      {
        path:'order-verification',
        component: ()=> import('@/views/sales/first-hand/order-verification'),
        name: 'orderVerification',
        meta: { title: '订单验证',permission_name: 'order-verification' }
      },
      {
        path:'gold-order-manager',
        component: ()=> import('@/views/sales/first-hand/gold-order-manager'),
        name: 'goldOrderManager',
        meta: { title: '金币订单管理',permission_name: 'gold-order-manager',
          keepAlive: true ,scollTopPosition: 0,isUseCache:false}
      },
      {
        path:'gold-order-detail',
        component: ()=> import('@/views/sales/first-hand/goldordermanager/gold-order-detail'),
        name:'goldOrderDetail',
        hidden: true,
        meta:{
          title:'金币订单详细',
          permission_name: 'gold-order-detail',
        }
      },
      {
        path:'boosting-order-manager',
        component: ()=> import('@/views/sales/first-hand/boosting-order-manager'),
        name: 'boostingOrderManager',
        meta: { title: '代练订单管理',permission_name: 'boosting-order-manager' }
      },
      {
        path:'cdk-order-manager',
        component: ()=> import('@/views/sales/first-hand/cdk-order-manager'),
        name: 'cdkOrderManager',
        meta: { title: 'CDK订单管理',permission_name: 'cdk-order-manager' }
      },
      {
        path:'equipment-order-manager',
        component: ()=> import('@/views/sales/first-hand/equipment-order-manager'),
        name: 'equipmentOrderManager',
        meta: { title: '装备订单管理',permission_name: 'equipment-order-manager' }
      },
      {
        path:'tel-mail-log',
        component: ()=> import('@/views/sales/first-hand/tel-mail-log'),
        name: 'telMailLog',
        meta: { title: '电话邮件日志',permission_name: 'tel-mail-log' }
      },
    ]
    },
    {
      path: 'second-hand',
      component: () => import('@/views/sales/second-hand/index'),
      name:'secondHand',
      meta: {title: '二手销售',permission_name: 'second-hand'},
      redirect: '/sales/second-hand/domestic-second-hand-manager',
      children: [
        {
          path:'domestic-second-hand-manager',
          component: ()=> import('@/views/sales/second-hand/domestic-second-hand-manager'),
          name: 'domesticSecondHandManager',
          meta: { title: '国内二手商管理',permission_name: 'domestic-second-hand-manager' }
        },
        {
          path:'domestic-second-hand-order-manager',
          component: ()=> import('@/views/sales/second-hand/domestic-second-hand-order-manager'),
          name: 'domesticSecondHandOrderManager',
          meta: { title: '国内二手订单管理',permission_name: 'domestic-second-hand-order-manager' }
        },
        {
          path:'foreign-second-hand-manager',
          component: ()=> import('@/views/sales/second-hand/foreign-second-hand-manager'),
          name: 'foreignSecondHandManagement',
          meta: { title: '国外二手商管理',permission_name: 'foreign-second-hand-manager' }
        },
        {
          path:'foreign-second-hand-offer-config',
          component: ()=> import('@/views/sales/second-hand/foreign-second-hand-offer-config'),
          name: 'foreignSecondHandOfferConfig',
          meta: { title: '国内二手报价配置',permission_name: 'foreign-second-hand-offer-config' }
        },
        {
          path:'foreign-second-hand-offer-manager',
          component: ()=> import('@/views/sales/second-hand/foreign-second-hand-offer-manager'),
          name: 'foreignSecondHandOfferManager',
          meta: { title: '国内二手报价管理',permission_name: 'foreign-second-hand-offer-manager' }
        },
        {
          path:'foreign-second-hand-order-manager',
          component: ()=> import('@/views/sales/second-hand/foreign-second-hand-order-manager'),
          name: 'foreignSecondHandOrderManager',
          meta: { title: '国内二手订单管理',permission_name: 'foreign-second-hand-order-manager' }
        }
      ]
    },
    {
      path: 'point-card-business',
      name: 'PointCardBusiness',
      component: ()=> import('@/views/sales/point-card-business/index'),
      meta: {title: '点卡业务',permission_name: 'point-card-business'},
      redirect: '/sales/point-card-business/client-manager',
      children: [
        {
          path: 'client-manager',
          name: 'clientManager',
          component: () => import('@/views/sales/point-card-business/client-manager'),
          meta: {title: '客户管理', permission_name: 'client-manager'}
        },
        {
          path: 'item-manager',
          name: 'itemManager',
          component: () => import('@/views/sales/point-card-business/item-manager'),
          meta: {title: '物品管理', permission_name: 'item-manager'}
        },
        {
          path: 'order-manager',
          name: 'orderManager',
          component: () => import('@/views/sales/point-card-business/order-manager'),
          meta: {title: '订单管理', permission_name: 'order-manager'}
        },
        {
          path: 'order-inquire',
          name: 'orderInquire',
          component: () => import('@/views/sales/point-card-business/order-inquire'),
          meta: {title: '订单查询', permission_name: 'order-inquire'}
        }
      ]
    }
  ]
}

export  default salesManagerRouter
