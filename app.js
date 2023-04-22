import { createApp } from 'vue/dist/vue.esm-bundler.js'
import MenusComponent from './menuscomponent.vue'
import NavComponent from './navcomponent.vue'

const app = createApp({
	components: {
		'menus-component': MenusComponent,
		'nav-component': NavComponent
	}
}).mount("#app")
