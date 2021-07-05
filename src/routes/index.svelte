<script>
	import Slider from "../components/Slider.svelte";
	import Aboutus from "../components/Aboutus.svelte";
	import Appmobile from "../components/Appmobile.svelte";
	export let segment;
</script>

<style>
</style>
<svelte:head>
	<title>Food-zone</title>
</svelte:head>
<!-- <div class="preloader"><div class="loaded">&nbsp;</div></div>  -->
<Slider {segment} />
<Aboutus {segment} />
<Appmobile {segment} />


