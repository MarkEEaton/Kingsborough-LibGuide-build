import { createApp } from 'vue/dist/vue.esm-bundler.js';
import FootComponent from './foot-component.vue';
import HamburgerComponent from './hamburger-component.vue';
import NavigComponent from './navig-component.vue';
import OnesearchComponent from './onesearch-component.vue';

const app = createApp({
  components: {
    'foot-component': FootComponent,
    'hamburger-component': HamburgerComponent,
    'navig-component': NavigComponent,
    'onesearch-component': OnesearchComponent,
  },
}).mount('#app');
