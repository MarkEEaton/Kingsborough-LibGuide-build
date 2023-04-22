import { createApp } from 'vue/dist/vue.esm-bundler.js'
import HamburgerComponent from './hamburgercomponent.vue'
import NavComponent from './navcomponent.vue'

const app = createApp({
	components: {
		'hamburger-component': HamburgerComponent,
		'nav-component': NavComponent
	}
}).mount("#app")
