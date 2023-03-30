<script>
  import { slide } from "svelte/transition";

  let menuVisible = false;

  let toggleMenu = () => {
    menuVisible = !menuVisible;
  };

  let hideMenu = () => {
    menuVisible = false;
  };
</script>

{#if menuVisible}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click|self={hideMenu}
    class="z-[850] bg-gray-500/5 fixed top-0 left-0 bottom-0 right-0 w-screen h-screen"
  />
{/if}

<div
  class="block lg:hidden px-4 pt-2 pb-1 rounded-md shadow-sm bg-brand-white relative z-[999]"
>
  <button class="focus:outline-none" on:click={toggleMenu}>
    <ion-icon name="menu-outline" class="text-3xl" />
  </button>

  {#if menuVisible}
    <div
      transition:slide={{ duration: 250 }}
      class={`translate-y-[10px] absolute mt-12 top-0 right-0 w-56 flex flex-col px-3 pt-4 pb-2 rounded-md shadow-md bg-brand-white border-t-4 border-brand-weak-green`}
    >
      <a href="/register" class="mb-5 btn btn-primary !w-[100%]">
        Sign Up Now
        <ion-icon name="arrow-forward-circle" class="text-2xl ml-2" />
      </a>
      <a class="mb-5" on:click={hideMenu} href="/#explore">Explore</a>
      <a class="mb-5" on:click={hideMenu} href="/articles">Articles</a>
      <a class="mb-5" on:click={hideMenu} href="/about">About Us</a>
    </div>
  {/if}
</div>
