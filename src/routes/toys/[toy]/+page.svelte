<script>
    import { page} from '$app/stores';


    import Suru from "./suru.svelte";
    import Love from "./love.svelte";
    import Glyph from "./glyph.svelte";

    let toy = $page.params.toy;

</script>

{#if toy == 'suru'}
    <Suru></Suru>
{:else if toy == 'love'}
    <Love></Love>
{:else if toy == 'glyph'}
    <Glyph></Glyph>
{:else}
    no toy
{/if}