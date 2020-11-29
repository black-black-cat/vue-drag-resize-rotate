import Vue from 'vue';

import './assets/css/reset.css';
import App from './app';
import drr from './components/drr';

Vue.component('drr', drr);

Vue.config.productionTip = false;
new Vue({ render: h => h(App) }).$mount('#root');
