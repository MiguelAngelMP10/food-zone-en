/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
import env from 'dotenv';
env.config();

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		paths: {
			assets: '/food-zone-svelte-kit',
			base: '/food-zone-svelte-kit'
		},

		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
