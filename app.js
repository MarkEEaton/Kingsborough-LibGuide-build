import { createApp } from 'vue/dist/vue.esm-bundler.js'
import HamburgerComponent from './hamburgercomponent.vue'
import NavComponent from './navcomponent.vue'
import OnesearchComponent from './onesearchcomponent.vue'

const app = createApp({
	components: {
		'hamburger-component': HamburgerComponent,
		'nav-component': NavComponent,
        'onesearch-component': OnesearchComponent
	}
}).mount("#app")
