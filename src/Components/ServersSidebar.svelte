<style>
	.background {
    padding-top: 1%;
    height: 100%;
    width: 5%;
    background-color: #23272A;
    display: grid;
    grid-template-rows: 6% 0.5% auto;
    grid-template-columns: auto;
    row-gap: 1%
  }

  .serverBackground {
    display: grid;
    grid-auto-rows: 7%;
    grid-template-columns: auto;
    row-gap: 1%
  }

  .serverIconBackground {
    background-color: #373B40;
    shape-outside: circle();
    clip-path: circle();
    vertical-align: middle;
  }

  .divider {
    height: 100%;
    width: 50%;
    margin: 0 auto;
    background-color: #373B40;
  }

  .servericontext {
    text-align: center;
    color: #FFF;
    font-family: "Open Sans";
    font-size: 1.2vw;
    font-weight: 700;
    line-height: 100%;
    position: relative;
    top: -7%;
  }

  .activeServer {
    background-color: #373B40;
    vertical-align: middle;
    border-radius: 35%;
    width: 65%;
    margin: 0 auto;
  }
</style>

<script>
  import { servers } from "../store.js";

</script>

<div class="background">
  <div class="serverIconBackground">
    <p class="servericontext">DV</p>
  </div>
  <div class="divider"></div>
  <div class="serverBackground">
    {#each $servers as server}
      <div class:serverIconBackground={!server.open} class:activeServer={server.open} on:click="{() => servers.setActive(server.id)}">
        <p class="servericontext">{server.name.split(" ").map(n => n[0]).join('').toUpperCase()}</p>
      </div>
    {/each}
  </div>
</div>

