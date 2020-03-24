import Layout from '@/layout'
const seoTool = {
  path:'/seo',
  name: 'seo',
  component: Layout,
  redirect: 'noRedirect',
  meta: {
    title: 'SEO工具',
    icon: 'tab',
    permission_name: 'seo'
  },
  children: [
    {
      path: 'seo-resource-manager',
      name:'seo-resource-manager',
      component: ()=> import('@/views/seo/seo-resource-manager'),
      meta: {
        title: 'SEO资源管理',
        permission_name: 'seo-resource-manager'
      }
    },
    {
      path: 'seo-link-manager',
      name:'seo-link-manager',
      component: ()=> import('@/views/seo/seo-link-manager'),
      meta: {
        title: 'SEO链接管理',
        permission_name: 'seo-link-manager'
      }
    }
  ]
}
export default seoTool
