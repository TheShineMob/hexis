import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*引入外接UI库*/
import ElementUI from 'element-ui';

/*引入外接css库*/
/*Element*/
import 'element-ui/lib/theme-chalk/index.css';
import "element-ui/lib/theme-chalk/display.css"
/*fontAwesome*/
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'


fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

/*安装外接库*/
Vue.use(ElementUI)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/*zl*/
import animated from 'animate.css'
Vue.use(animated);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
