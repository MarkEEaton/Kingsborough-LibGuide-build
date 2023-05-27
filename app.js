import { createApp } from 'vue/dist/vue.esm-bundler.js';
import FootComponent from './foot-component.vue';
import HamburgerComponent from './hamburger-component.vue';
import LinksComponent from './links-component.vue';
import NavigComponent from './navig-component.vue';
import OnesearchComponent from './onesearch-component.vue';

const app = createApp({
  components: {
    'foot-component': FootComponent,
    'hamburger-component': HamburgerComponent,
    'links-component': LinksComponent,
    'navig-component': NavigComponent,
    'onesearch-component': OnesearchComponent,
  },
}).mount('#app');
