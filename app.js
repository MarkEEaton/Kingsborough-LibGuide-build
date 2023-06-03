import { createApp } from 'vue/dist/vue.esm-bundler.js';
import AlertComponent from './alert-component.vue';
import BlueDivsComponent from './blue-divs-component.vue';
import FootComponent from './foot-component.vue';
import HamburgerComponent from './hamburger-component.vue';
import LgFootComponent from './lg-foot-component.vue';
import LinksComponent from './links-component.vue';
import NavigComponent from './navig-component.vue';
import OnesearchComponent from './onesearch-component.vue';

const app1 = createApp({
  components: {
    'alert-component': AlertComponent,
    'hamburger-component': HamburgerComponent,
    'navig-component': NavigComponent,
    'onesearch-component': OnesearchComponent,
  },
}).mount('#app1');

const app2 = createApp({
  components: {
    'blue-divs-component': BlueDivsComponent,
    'links-component': LinksComponent,
  },
}).mount('#app2');

const app3 = createApp({
  components: {
    'foot-component': FootComponent,
    'lg-foot-component': LgFootComponent,
  },
}).mount('#app3');
