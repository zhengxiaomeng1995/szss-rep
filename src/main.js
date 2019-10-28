import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router/index'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';



Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(ViewUI);





new Vue({
    render: h => h(App),
    router
}).$mount('#app')