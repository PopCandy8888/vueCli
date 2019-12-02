// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Axios from 'axios'
import axios from 'axios'
import qs from 'qs'
import $ from 'jquery'
import './assets/js/go'
import store from './store'
import ElementUi from 'element-ui' //引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/icon.css'


// 引入echarts
import echarts from 'echarts/lib/echarts';
export default new Vue() //bus

// 引入折线图等组件
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';

// 引入提示框和title组件，图例
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/toolbox';
import  api from './unit/api';
// import Vuex from 'vuex'
// 全局注册formcreate
import formCreate,{maker} from '@form-create/element-ui'
// import { maker } from '@form-create/element-ui'


import vueNcform from '@ncform/ncform'
import ncformStdComps from '@ncform/ncform-theme-elementui'
Vue.use(vueNcform, { extComponents: ncformStdComps })
window.$http = Vue.prototype.$http = axios

// Vue.use(Vuex)
Vue.use(formCreate)//挂载formcreate
Vue.use(maker)//挂载maker
Vue.use(ElementUi)//挂载element
Vue.prototype.qs = qs;
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts;
Vue.prototype.api = api;
// Vue.prototype.axios = Axios
Vue.prototype.bus = new Vue();
Vue.config.productionTip = false

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
