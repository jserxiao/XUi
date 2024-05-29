import XButton from './components/Button/index.vue';
import type { App } from 'vue';
import './style/index.less'
const components = [XButton];
export default {
  install(app: App) {
    components.forEach((x: any) => {
      app.component(x.name, x);
    })
  },
};

export {
  XButton,
};