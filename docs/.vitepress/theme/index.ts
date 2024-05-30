
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import xatom from '@/index';
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@/style.css'
import '@vitepress-demo-preview/component/dist/style.css'



/** @type {import('vitepress').Theme} */
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.use(xatom);
    app.component('demo-preview', AntDesignContainer)
  }
}