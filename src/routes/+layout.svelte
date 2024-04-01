<script>
  import "../app.css";
  import Navbar from "../components/navbar.svelte";
</script>
<Navbar></Navbar>
<div class="flex justify-center items-center mt-24">
  <div class="w-full max-w-xl">
    <slot />
  </div>
</div>
