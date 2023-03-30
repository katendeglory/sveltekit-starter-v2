<script>
  import { onMount } from "svelte";
  import Container from "../../../components/utils/Container.svelte";

  export let data;

  onMount(() => {
    // console.log("\nDATA:");
    // console.log(data);
  });
</script>

<Container>
  <div class="py-20 h-screen">
    <div class="py-5" />
    <h1 class="font-bold mb-4 uppercase text-xl">{data.title}</h1>
    <h1>{data.body}</h1>

    <div class="py-5" />
    <span>The slug is : {data.id}</span>

    <div class="py-5" />
    <a class="btn btn-primary" href="/articles">
      <ion-icon name="arrow-undo-circle" class="mr-2 text-2xl" />
      Return to Articles
    </a>
  </div>
</Container>
