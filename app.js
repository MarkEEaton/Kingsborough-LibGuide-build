import { createApp } from 'vue/dist/vue.esm-bundler.js'
import MenusComponent from './menuscomponent.vue'

const app = createApp({
	components: {
		'menus-component': MenusComponent
	}
}).mount("#app")
