import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	resolve: {
		alias: {
			'@': '/src', // Ensure this alias points to the correct directory
		},
	},
	plugins: [vue()],
});
