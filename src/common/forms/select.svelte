<script>
    import Label from "./label.svelte";

    export let options = [];
    export let value = '';
    export let label = label;
    export let mandatory = false;

</script>

<Label {label} {mandatory}></Label>
<select bind:value={value}>
    {#each options as option}
        <option value="{option}">{(typeof option.text == 'undefined'? option.value : option.text)}</option>
    {/each}
</select>

