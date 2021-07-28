<script>
  import { functions } from "$lib/functions";

  let loaded = false;

    const cloudFunctions = functions();
    console.log("Functions:", cloudFunctions);


  function onClick() {
    loaded = true;
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={onClick}>Load functions</button>

{#if loaded}
  <div>Cloud functions have been loaded!</div>
{/if}