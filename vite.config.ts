import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		legacy({
			targets: ['defaults', 'not IE 11']
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		host: true,
		port: 5555
	}
});
