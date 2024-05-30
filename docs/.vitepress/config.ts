import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import viteConfig from '../../vite.config'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xatom ui",
  description: "一个普通前端的组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/pages/Button' }
    ],

    sidebar: {
      "/pages": [{
        text: '组件',
        items: [
          { text: 'Button', link: '/pages/Button' },
        ]
      }]
    },
    
    outline: {
      label: '本页内容导航',
      level: [2, 3]
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jserxiao' }
    ]
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config: (md: any) =>  {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  },
  vite: {resolve: viteConfig.resolve}
})
