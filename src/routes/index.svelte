<script>
	import Slider from '../components/Slider.svelte';
	import Aboutus from '../components/Aboutus.svelte';
	import Appmobile from '../components/Appmobile.svelte';

	import { onMount } from 'svelte';

	export let segment;

<<<<<<< HEAD
<style>
</style>
=======
	onMount(() => {
		new WOW({
			mobile: true,
			live: false
		}).init();
	});
</script>

>>>>>>> 30cd7df341cf819856902b1b104ae5a8e433266e
<svelte:head>
	<title>Food-zone</title>
</svelte:head>
<!-- <div class="preloader"><div class="loaded">&nbsp;</div></div>  -->
<Slider {segment} />
<Aboutus {segment} />
<Appmobile {segment} />

<style>
</style>
