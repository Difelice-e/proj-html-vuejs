import Vue from 'vue'
import App from './App.vue'

// aggiunto bootstrap  
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// aggiunto font-awesome 
import { library } from '@fortawesome/fontawesome-svg-core'

// icone
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faClock, faPhone, faEnvelope, faTwitter, faFacebookF, faLinkedinIn)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
