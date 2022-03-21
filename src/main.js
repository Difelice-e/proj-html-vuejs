import Vue from 'vue'
import App from './App.vue'

// aggiunto bootstrap  
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// aggiunto font-awesome 
import { library } from '@fortawesome/fontawesome-svg-core'

// icona d'esempio
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUserSecret)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
