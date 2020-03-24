import Layout from '@/layout'
const inventoryManagerRouter = {
  path: '/inventory',
  name: 'inventory',
  component: Layout,
  meta: {
    title: '库存管理',
    permission_name: 'inventory',
    icon: 'tab'
  },
  redirect: '/inventory/gold-inventory/gold-inventory-list',
  children: [
    {
      path: 'gold-inventory',
      name: 'goldInventory',
      component: () => import('@/views/inventory/gold-inventory/index'),
      meta: {
        title: '金币库存',
        permission_name: 'gold-inventory'
      },
      redirect: '/inventory/gold-inventory/gold-inventory-list',
      children: [
        {
          path: 'gold-inventory-list',
          name: 'goldInventoryList',
          component: ()=> import('@/views/inventory/gold-inventory/gold-inventory-list'),
          meta: {
            title: '库存清单',
            permission_name: 'gold-inventory-list'
          }
        },
        {
          path: 'gold-account-list-limit',
          name: 'goldAccountListLimit',
          component: ()=> import('@/views/inventory/gold-inventory/gold-account-list-limit'),
          meta: {
            title: '帐号清单-日发量限制',
            permission_name: 'gold-account-list-limit'
          }
        },
        {
          path: 'gold-account-list',
          name: 'goldAccountList',
          component: ()=> import('@/views/inventory/gold-inventory/gold-account-list'),
          meta: {
            title: '帐号清单',
            permission_name: 'gold-account-list'
          }
        },
        {
          path: 'gold-workstation-manager',
          name: 'goldWorkstationManager',
          component: ()=> import('@/views/inventory/gold-inventory/gold-workstation-manager'),
          meta: {
            title: '工作站管理',
            permission_name: 'gold-workstation-manager'
          }
        },
        {
          path: 'gold-brush-online-config',
          name: 'gold-brush-online-config',
          component: ()=> import('@/views/inventory/gold-inventory/gold-brush-online-config'),
          meta: {
            title: '刷在线配置',
            permission_name: 'gold-brush-online-config'
          }
        },
        {
          path: 'gold-account-manager',
          name: 'gold-account-manager',
          component: ()=> import('@/views/inventory/gold-inventory/gold-account-manager'),
          meta: {
            title: '帐号管理',
            permission_name: 'gold-account-manager'
          }
        },
        {
          path: 'gold-role-manager',
          name: 'gold-role-manager',
          component: ()=> import('@/views/inventory/gold-inventory/gold-role-manager'),
          meta: {
            title: '角色管理',
            permission_name: 'gold-role-manager'
          }
        },
        {
          path: 'gold-guild-manager',
          name: 'gold-guild-manager',
          component: ()=> import('@/views/inventory/gold-inventory/gold-guild-manager'),
          meta: {
            title: '公会管理',
            permission_name: 'gold-guild-manager'
          }
        },
        {
          path: 'gold-inventory-inventory',
          name: 'gold-inventory-inventory',
          component: ()=> import('@/views/inventory/gold-inventory/gold-inventory-inventory'),
          meta: {
            title: '库存盘点',
            permission_name: 'gold-inventory-inventory'
          }
        },
        {
          path: 'gold-rebate-manager',
          name: 'gold-rebate-manager',
          component: ()=> import('@/views/inventory/gold-inventory/gold-rebate-manager'),
          meta: {
            title: '转货管理',
            permission_name: 'gold-rebate-manager'
          }
        },
        {
          path: 'gold-index-statistics',
          name: 'gold-index-statistics',
          component: ()=> import('@/views/inventory/gold-inventory/gold-index-statistics'),
          meta: {
            title: '指标统计',
            permission_name: 'gold-index-statistics'
          }
        },
        {
          path: 'gold-announce-manager',
          name: 'gold-announce-manager',
          component: ()=> import('@/views/inventory/gold-inventory/gold-announce-manager'),
          meta: {
            title: '公布管理',
            permission_name: 'gold-announce-manager'
          }
        },
        {
          path: 'gold-account-statistics',
          name: 'gold-account-statistics',
          component: ()=> import('@/views/inventory/gold-inventory/gold-account-statistics'),
          meta: {
            title: '帐号统计',
            permission_name: 'gold-account-statistics'
          }
        }
      ]
    },
    {
      path: 'point-card-inventory',
      name: 'point-card-inventory',
      component: () => import('@/views/inventory/point-card-inventory/index'),
      meta: {
        title: '点卡库存',
        permission_name: 'point-card-inventory'
      },
      redirect:'/inventory/point-card-inventory/point-card-inventory-list',
      children: [
        {
          path: 'point-card-inventory-list',
          name: 'point-card-inventory-list',
          component: () => import('@/views/inventory/point-card-inventory/point-card-inventory-list'),
          meta: {
            title: '库存清单',
            permission_name: 'point-card-inventory-list'
          }
        },
        {
          path: 'inventory-purchase-storage',
          name: 'inventory-purchase-storage',
          component: () => import('@/views/inventory/point-card-inventory/inventory-purchase-storage'),
          meta: {
            title: '采购入库',
            permission_name: 'inventory-purchase-storage'
          }
        },
        {
          path: 'point-inventory-inventory',
          name: 'point-inventory-inventory',
          component: ()=> import('@/views/inventory/point-card-inventory/point-inventory-inventory'),
          meta: {
            title: '库存盘点',
            permission_name: 'point-inventory-inventory'
          }
        }
      ]
    }
  ]
}
export default  inventoryManagerRouter
