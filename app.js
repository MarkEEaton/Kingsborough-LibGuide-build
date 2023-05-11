import { createApp } from 'vue/dist/vue.esm-bundler.js';
import HamburgerComponent from './hamburger-component.vue';
import NavComponent from './nav-component.vue';
import OnesearchComponent from './onesearch-component.vue';

const app = createApp({
  components: {
    'hamburger-component': HamburgerComponent,
    'nav-component': NavComponent,
    'onesearch-component': OnesearchComponent,
  },
}).mount('#app');
