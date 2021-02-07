import { createApp } from 'vue'
import App from './App'
import {router} from '@router/index'
import API from '@api/index'
import { Icon,Cell,Col,Row,Divider,Image,Lazyload,Button } from 'vant';
import 'amfe-flexible/index.js'

const app=createApp(App)
app.config.globalProperties.$api=API;
app.use(router).use(Icon).use(Cell).use(Col).use(Row).use(Divider).use(Image).use(Lazyload ).use(Button)
app.mount('#app');

