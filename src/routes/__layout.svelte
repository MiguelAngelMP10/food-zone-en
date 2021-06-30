<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>
<div class="contenedor">
  <Nav {segment} />

<main>
  <slot />
</main>

<Footer {segment} />
</div>
<style>
  .contenedor{
    margin-right: 0.74em;
  }
</style>