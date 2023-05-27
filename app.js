import { createApp } from 'vue/dist/vue.esm-bundler.js';
import HamburgerComponent from './hamburger-component.vue';
import NavigComponent from './navig-component.vue';
import OnesearchComponent from './onesearch-component.vue';

const app = createApp({
  components: {
    'hamburger-component': HamburgerComponent,
    'navig-component': NavigComponent,
    'onesearch-component': OnesearchComponent,
  },
}).mount('#app');
