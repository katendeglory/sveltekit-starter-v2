<script>
  /* STYLES IMPORTS */
  import "../styles/app.css";
  import "../styles/tailwind-output.css";
  /* JS IMPORTS */
  import NavBar from "../components/layout/NavBar.svelte";
  import Footer from "../components/layout/Footer.svelte";
  import { onMount } from "svelte";
  import loadData from "../functions/loadData";
  import { afterNavigate, beforeNavigate } from "$app/navigation";

  let loading = true;

  onMount(async () => {
    // await loadData().catch((err) => console.log(err));
    // loading = false;
  });

  let root;

  onMount(() => {
    root = document.getElementsByTagName("html")[0];
    root?.classList.add("scroll-smooth");
  });

  beforeNavigate(() => {
    root?.classList.remove("scroll-smooth");
  });

  afterNavigate(() => {
    root?.classList.add("scroll-smooth");
  });
</script>

<!-- style="background-image: url(./images/pattern.svg);" -->
<div
  class={`bg-brand-white text-gray-600 tracking-wide w-full layout`}
  id="home"
>
  <NavBar />
  <slot />
  <Footer />
</div>

<div class="scroll-smooth" />

<style>
  .layout {
    width: 100%;
  }
</style>
