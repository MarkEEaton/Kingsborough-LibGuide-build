import { createApp } from 'vue/dist/vue.esm-bundler.js';
import AlertComponent from './components/alert-component.vue';
import BlueDivsComponent from './components/blue-divs-component.vue';
import FootComponent from './components/foot-component.vue';
import HamburgerComponent from './components/hamburger-component.vue';
import LgFootComponent from './components/lg-foot-component.vue';
import LinksComponent from './components/links-component.vue';
import NavigComponent from './components/navig-component.vue';
import OnesearchComponent from './components/onesearch-component.vue';

const app1 = createApp({
  components: {
    'alert-component': AlertComponent,
    'hamburger-component': HamburgerComponent,
    'navig-component': NavigComponent,
    'onesearch-component': OnesearchComponent,
    'blue-divs-component': BlueDivsComponent,
  },
}).mount('#app1');

const app2 = createApp({
  components: {
    'links-component': LinksComponent,
  },
}).mount('#app2');

const app3 = createApp({
  components: {
    'foot-component': FootComponent,
    'lg-foot-component': LgFootComponent,
  },
}).mount('#app3');
