import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import i18n from './i18n';
import axios from 'axios'

// 导入 JSON 编辑器
// import MonacoEditor from 'vue-monaco-editor'


axios.defaults.baseURL = 'http://localhost:8000/api'

// 如果需要携带 Cookie
// axios.defaults.withCredentials = true

const app = createApp(App);
app.use(router)
   .use(store)
   .use(ElementPlus)
   .use(i18n);
// app.component('MonacoEditor', MonacoEditor)

app.mount('#app');