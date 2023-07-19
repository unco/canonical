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

<style>
    select {
        border: 1px solid var(--fg-2);
        padding: 8px 12px;
        border-radius: 0;
        outline: none;
        background-color: #fff;
        font-family: var(--font);
        font-size: 14px;
        font-weight: 300;

    }
</style>