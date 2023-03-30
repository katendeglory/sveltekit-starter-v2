<script>
  import Container from "../utils/Container.svelte";
  import Select from "svelte-select";
</script>

<Container>
  <div class="relative flex flex-col md:flex-row">
    <div
      class="relative z-10 h-screen w-full lg:w-3/5 flex flex-col justify-center"
    >
      <h1
        class="mb-5 h-font font-bold md:pt-10 text-5xl sm:text-5xl md:text-5xl lg:text-6xl"
      >
        Welcome to Your Online Supermarket!
      </h1>

      <p class="mb-5 text-gray-500">
        We've kept the best deals out there for you! Sign up and be prepared for
        an amazing shopping experience. We can't wait to have you on boaord!
      </p>

      <div class="delete-me">
        <div class="mb-3 w-[14.5rem]">
          <input class="shadow-sm" type="text" placeholder="🔍 Search" />
        </div>
      </div>

      <a href="#explore" class="btn btn-primary">
        See Our Collection
        <ion-icon name="arrow-forward-circle-outline" class="text-2xl ml-2" />
      </a>

      <div class="mt-5 flex">
        <a href="#home">
          <ion-icon name="logo-facebook" class="text-gray-500 text-3xl mr-3" />
        </a>
        <a href="#home">
          <ion-icon name="logo-twitter" class="text-gray-500 text-3xl mr-3" />
        </a>
        <a href="#home">
          <ion-icon name="logo-instagram" class="text-gray-500 text-3xl mr-3" />
        </a>
        <a href="#home">
          <ion-icon name="mail" class="text-gray-500 text-3xl" />
        </a>
      </div>
    </div>
    <div
      class="w-full pb-12 md:pb-0 md:h-screen lg:w-2/5 flex items-center justify-center lg:justify-end relative z-10"
    >
      <img
        src="./images/hero-img.svg"
        alt="hero"
        class="w-full sm:w-3/5 md:w-11/12 lg:w-11/12"
      />
    </div>

    <!-- Faisceau image can be put here -->
  </div>
</Container>
