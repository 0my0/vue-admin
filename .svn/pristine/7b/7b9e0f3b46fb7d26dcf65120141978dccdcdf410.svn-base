/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const systemManagerRouter = {
  path: '/system',
  component: Layout,
  redirect: 'noRedirect',
  name: 'systemManagerDemo',
  meta: {
    title: '系统管理',
    icon: 'tab',
    permission_name: 'system'
  },
  children: [
    {
      path: 'log',
      component: () => import('@/views/system-manager/log'),
      name: 'systemLog',
      meta: {
        permission_name: 'log',
        title: '系统日志'
      }
    },
    {
      path: 'department',
      component: () => import('@/views/system-manager/department'),
      name: 'department',
      meta: {
        permission_name: 'department',
        title: '部门及人员'
      }
    },
    {
      path: 'game-server',
      component: () => import('@/views/system-manager/game-server'),
      name: 'gameServer',
      meta: {
        permission_name: 'game-server',
        title: '游戏及服务器'
      }
    },
    {
      path: 'currency-rate',
      component: () => import('@/views/system-manager/currency-exchange-rate'),
      name: 'currencyRate',
      meta: {
        permission_name: 'currency-rate',
        title: '货币汇率'
      }
    },
    {
      path: 'web-config',
      name: 'webConfig',
      component: () => import('@/views/system-manager/web-config'),
      meta: {
        permission_name: 'web-config',
        title: '网站及游戏配置'
      }
    },
    {
      path: 'game-config',
      component: () => import('@/views/system-manager/webconfig/game-config'),
      name: 'game-config',
      hidden: true,
      meta: {
        permission_name: 'game-config',
        title: '游戏配置'
      }
    },
    {
      path: 'sales-site-news',
      component: () => import('@/views/system-manager/sales-site-news'),
      name: 'salesSiteNews',
      meta: {
        permission_name: 'sales-site-news',
        title: '销售站点新闻'
      }
    },
    {
      path: 'sales-site-label',
      component: () => import('@/views/system-manager/sales-site-label'),
      name: 'salesSiteLabel',
      meta: {
        permission_name: 'sales-site-label',
        title: '销售站点标签'
      }
    },
    {
      path: 'purchase-site-news',
      component: () => import('@/views/system-manager/purchase-site-news'),
      name: 'purchaseSiteNews',
      meta: {
        permission_name: 'purchase-site-news',
        title: '采购站点新闻'
      }
    },
    {
      path: 'purchase-site-label',
      component: () => import('@/views/system-manager/purchase-site-label'),
      name: 'purchaseSiteLabel',
      meta: {
        permission_name: 'purchase-site-label',
        title: '采购站点标签'
      }
    },
    {
      path: 'mail-account',
      component: () => import('@/views/system-manager/mail-account'),
      name: 'mailAccount',
      meta: {
        permission_name: 'mail-account',
        title: '邮件帐号及配置'
      }
    },
    {
      path: 'vpn-config',
      component: () => import('@/views/system-manager/vpn-config'),
      name: 'vpnConfig',
      meta: {
        title: 'VPN管理',
        permission_name: 'vpn-config'
      }
    },
    {
      path: 'site-file-config',
      component: () => import('@/views/system-manager/site-file-config'),
      name: 'siteFileConfig',
      meta: {
        permission_name: 'site-file-config',
        title: '站点文件管理'

      }
    },
    {
      path: 'shipping-mode-config',
      component: () => import('@/views/system-manager/shipping-mode-config'),
      name: 'shippingModeConfig',
      meta: {
        permission_name: 'shipping-mode-config',
        title: '运送方式配置'
      }
    },
    {
      path: 'payment-method-config',
      component: () => import('@/views/system-manager/payment-method-config'),
      name: 'paymentMethodConfig',
      meta: {
        permission_name: 'payment-method-config',
        title: '支付方式配置'
      }
    }
  ]
}

export default systemManagerRouter
