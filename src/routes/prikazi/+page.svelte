<script lang="ts">
  import { onMount } from "svelte";
  import type { Test } from "$lib/types.js";

  export let data;

  let loading = true;

  let tests: Test[] = [];
  let testsGrouped: any[][] = [];

  onMount(() => {
    tests = data.tests;

    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];

      if (!testsGrouped[test.test_id]) testsGrouped[test.test_id] = [];

      testsGrouped[test.test_id].push(test);
    }

    testsGrouped = testsGrouped.filter((group) => group);

    loading = false;
  });
</script>

{#if !loading}
  <div class="flex flex-col">

    {#each testsGrouped as testGroup}
      <div
        class="w-full flex justify-center h-[80vh] items-center bg-slate-200 rounded-xl my-4 overflow-x-scroll overflow-y-hidden"
      >
        {#each testGroup as test}
        <img class="rounded-lg" src={test.image} alt="" srcset="" />
        {/each}
      </div>
    {/each}
  </div>
{/if}
