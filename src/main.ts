import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import router from './router';
import store from './store'; // Make sure your Vuex store is imported

createApp(App)
	.use(router) // Add Vue Router
	.use(store) // Add Vuex store
	.mount('#app');
