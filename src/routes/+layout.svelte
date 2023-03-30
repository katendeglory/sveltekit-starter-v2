<script>
  /* STYLES IMPORTS */
  import "../styles/app.css";
  import "../styles/tailwind-output.css";
  /* JS IMPORTS */
  import NavBar from "../components/layout/NavBar.svelte";
  import Footer from "../components/layout/Footer.svelte";
  import { onMount } from "svelte";
  import loadData from "../functions/loadData";

  let loading = true;

  onMount(async () => {
    // await loadData().catch((err) => console.log(err));
    // loading = false;
  });
</script>

<!-- style="background-image: url(./images/pattern.svg);" -->
<div
  class={`bg-brand-white text-gray-600 tracking-wide w-full scroll-smooth layout`}
  id="home"
>
  <NavBar />
  <slot />
  <Footer />
</div>

<style>
  .layout {
    width: 100%;
  }
</style>
