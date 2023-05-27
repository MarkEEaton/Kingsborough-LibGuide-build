import { createApp } from 'vue/dist/vue.esm-bundler.js';
import AlertComponent from './alert-component.vue';
import FootComponent from './foot-component.vue';
import HamburgerComponent from './hamburger-component.vue';
import LinksComponent from './links-component.vue';
import NavigComponent from './navig-component.vue';
import OnesearchComponent from './onesearch-component.vue';

const app = createApp({
  components: {
    'alert-component': AlertComponent,
    'foot-component': FootComponent,
    'hamburger-component': HamburgerComponent,
    'links-component': LinksComponent,
    'navig-component': NavigComponent,
    'onesearch-component': OnesearchComponent,
  },
}).mount('#app');
