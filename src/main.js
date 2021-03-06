import Vue from 'vue';

import './css/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
