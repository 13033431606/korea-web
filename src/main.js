// import "@/assets/iconfont/iconfont.css";
import {createApp} from 'vue'
import App from './App.vue'
import Store from '@/store'
import Router from '@/router'
import { Field, Pagination, Icon, Loading, Image as VanImage, Lazyload, Swipe, SwipeItem, Search, Locale, Picker, Popup, ConfigProvider  } from 'vant';
import 'vant/lib/index.css';

// 引入英文语言包
import enUS from 'vant/es/locale/lang/en-US';

Locale.use('en-US', enUS);

createApp(App)
  .use(ConfigProvider)
  .use(Popup)
  .use(Picker)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(VanImage)
  .use(Loading)
  .use(Icon)
  .use(Pagination)
  .use(Field)
  .use(Store)
  .use(Router)
  .mount('#app')



