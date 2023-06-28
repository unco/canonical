<script>
    export let label = '';
    export let mandatory = false;
</script>
<span>{label}{#if mandatory}<b>*</b>{/if}</span>

<style>
    span { 
        display: block;
        font-weight: 300;
    }

    b {
        font-weight: 300;
        color: rgb(255, 72, 0);
    }
</style>