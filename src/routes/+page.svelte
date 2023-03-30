<script>
  import Container from "./../components/utils/Container.svelte";
  import { onMount } from "svelte";
  import Hero from "../components/index/Hero.svelte";
  // import axios from "axios";

  onMount(async () => {
    localStorage.setItem("message", "Love, Faith, Hope 💘");

    // let v = `v${new Date().toISOString().slice(0, 10)}`;
    // let URL = `https://61izappu.api.sanity.io/${v}/data/query/production?query=*[]`;
    // let res = await axios.get(URL).catch((e) => console.log(e));
    // console.log(res.data);

    console.log(localStorage.getItem("message"));
  });
</script>

<svelte:head>
  <title>Welcome to Your Local Supermarket</title>
</svelte:head>

<Hero />

{localStorage.getItem("message")}
