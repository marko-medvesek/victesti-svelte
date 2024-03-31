<script lang="ts">
  import { onMount } from "svelte";
  import type { Test } from "$lib/types.js";

  export let data;

  let tests: Test[] = [];

  onMount(() => {
    tests = data.tests;
  });
</script>

<div class="flex flex-col">
  {#each tests as test}
    <div
      class="w-full flex justify-center items-center bg-slate-200 rounded-xl my-4 overflow-hidden"
    >
      <img src={test.image} alt="" srcset="">
    </div>
  {/each}
</div>
