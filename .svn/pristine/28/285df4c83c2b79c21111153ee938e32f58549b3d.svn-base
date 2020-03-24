import Layout from '@/layout'
const purchaseManagerRouter = {
  path: '/purchase',
  name: 'purchase',
  component: Layout,
  redirect:'/purchase/gold-business/supplier-manager',
  meta: {
    title: '采购管理',
    permission_name: 'purchase',
    icon: 'tab'
  },
  children: [
    {
      path: 'gold-business',
      component: ()=> import('@/views/purchase/gold-business/index'),
      name: 'goldBusiness',
      meta: {
        title: '金币业务',
        permission_name: 'gold-business'
      },
      redirect:'/purchase/gold-business/supplier-manager',
      children: [
        {
          path: 'supplier-manager',
          component: () => import('@/views/purchase/gold-business/supplier-manager'),
          name: 'supplierManager',
          meta: {
            title: '供货商管理',
            permission_name: 'supplier-manager'
          }
        },
        {
          path: 'supplier-price-setting',
          component: () => import('@/views/purchase/gold-business/supplier-price-setting'),
          name: 'spplierPriceSetting',
          meta: {
            title: '供货商价格设置',
            permission_name: 'supplier-price-setting'
          }
        },
        {
          path: 'quantity-price-manager',
          component: () => import('@/views/purchase/gold-business/quantity-price-manager'),
          name: 'quantityPriceManager',
          meta: {
            title: '数量价格管理',
            permission_name: 'quantity-price-manager'
          }
        },
        {
          path: 'purchase-order-manager',
          component: () => import('@/views/purchase/gold-business/purchase-order-manager'),
          name: 'purchaseOrderManager',
          meta: {
            title: '订单管理',
            permission_name: 'purchase-order-manager'
          }
        },
        {
          path: 'comparator-guarantee-order',
          component: () => import('@/views/purchase/gold-business/comparator-guarantee-order'),
          name: 'comparatorGuaranteeOrder',
          meta: {
            title: '比价器担保订单',
            permission_name: 'comparator-guarantee-order'
          }
        },
        {
          path: 'comparator-demand-release',
          component: () => import('@/views/purchase/gold-business/comparator-demand-release'),
          name: 'comparatorDemandRelease',
          meta: {
            title: '比价器需求发布',
            permission_name: 'comparator-demand-release'
          }
        }

      ]
    },
    {
      path: 'boosting-business',
      component: () => import('@/views/purchase/boosting-business/index'),
      name: 'boostingBusiness',
      meta: {
        title: '代练业务',
        permission_name:'boosting-business'
      },
      redirect:'/purchase/boosting-business/studio-manager',
      children: [
        {
          path: 'studio-manager',
          name: 'studioManager',
          component: () => import('@/views/purchase/boosting-business/studio-manager'),
          meta: {
            title: '工作室管理',
            permission_name: 'studio-manager'
          }
        },
        {
          path: 'issue-order-manager',
          name: 'issueOrderManager',
          component: () => import('@/views/purchase/boosting-business/issue-order-manager'),
          meta: {
            title: '下发订单管理',
            permission_name: 'issue-order-manager'
          }
        }
      ]
    },
    {
      path: 'purchase-point-card-business',
      component: ()=> import('@/views/purchase/purchase-point-card-business/index'),
      name: 'purchasePointCardBusiness',
      meta: {
        title: '点卡业务',
        permission_name: 'purchase-point-card-business'
      },
      redirect:'/purchase/purchase-point-card-business/purchase-supplier-manager',
      children: [
        {
          path: 'purchase-supplier-manager',
          component: () => import('@/views/purchase/purchase-point-card-business/purchase-supplier-manager'),
          name: 'purchaseSupplierManager',
          meta: {
            title: '供货商管理',
            permission_name: 'purchase-supplier-manager'
          }
        },
        {
          path: 'purchase-point-order-manager',
          component: () => import('@/views/purchase/purchase-point-card-business/purchase-point-order-manager'),
          name: 'purchasePointOrderManager',
          meta: {
            title: '订单管理',
            permission_name: 'purchase-point-order-manager'
          }
        }
      ]
    },
    {
      path: 'foreign-gold',
      name: 'foreignGold',
      component: () => import('@/views/purchase/foreign-gold/index'),
      meta: {
        title: '海外金币',
        permission_name: 'foreign-gold'
      },
      redirect:'/purchase/foreign-gold/foreign-quantity-price-manager',
      children: [
        {
          path: 'foreign-quantity-price-manager',
          component: () => import('@/views/purchase/foreign-gold/foreign-quantity-price-manager'),
          name: 'foreignQuantityPriceManager',
          meta: {
            title: '数量价格管理',
            permission_name: 'foreign-quantity-price-manager'
          }
        },
        {
          path: 'foreign-purchase-supplier-manager',
          component: () => import('@/views/purchase/foreign-gold/foreign-purchase-supplier-manager'),
          name: 'foreignPurchaseSupplierManager',
          meta: {
            title: '供货商管理',
            permission_name: 'foreign-purchase-supplier-manager'
          }
        },
        {
          path: 'foreign-purchase-point-order-manager',
          component: () => import('@/views/purchase/foreign-gold/foreign-purchase-point-order-manager'),
          name: 'foreignPurchasePointOrderManager',
          meta: {
            title: '订单管理',
            permission_name: 'foreign-purchase-point-order-manager'
          }
        }
      ]
    }
  ]
}

export default purchaseManagerRouter
