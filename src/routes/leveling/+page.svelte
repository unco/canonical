<script>
    import { browser } from '$app/environment'
    import { teams, all_trades, trade_cat_levels, levels, categories, career_paths } from './career_paths.js';
    import { onMount } from "svelte";
    import Select from "../../common/forms/select.svelte";
    import Stars from "../../common/forms/stars.svelte";

/*
Complete levelling framework for canonicaldesign contained within one file
*/
let flow_modal = false;
let level_modal = false;
let svg_mode = "generic";
let selected_stage = false;
let selected_levelup = false;
let stage_tab = "expectations";
let visible_categories = ['c1', 'c2', 'c3'];
let team = $teams[0];
let trades = $all_trades.filter( (el) => { return el.team == team.key } );
let trade = trades[0];
let career_path = false;

$: {
    trades = $all_trades.filter( (el) => { return el.team == team.key } );
    if(trades.indexOf(trade) < 0) {
        selected_stage = false;
        trade = trades[0];
    }
    if(browser) {
        let hash = window.location.hash;
        if(hash) {
            let h = hash.substring(1);
            if(h) {
                let hash_arr = h.split('/');
                if(hash_arr[1] && hash_arr[1] !== trade.key) {
                    let new_hash = '#' + team.key + '/' + trade.key;
                    window.location.hash = new_hash;
                }
            }
        }
    }
    
}



$: {
    //trigger when trade changes eg UX => User Research
    let t = trade;
    if(t) {
        svg_mode = trade.key;
        career_path = $career_paths.find( el => el.team == team.key && el.trade == trade.key);
    }
}

function select_stage(stage) {
    selected_levelup = false;
    if(selected_stage == stage) {
        selected_stage = false;
    } else {
        selected_stage = stage;
        selected_stage.selected_levelup = selected_stage.level_up[0];
        if(selected_stage.selected_levelup) {
            selected_levelup = career_path.stages.find( (el) => el.key == selected_stage.selected_levelup)
        }
        stage_tab = "expectations";
    }
}

function click_stage(stage){
    if(selected_stage == stage) {
        selected_stage = false;
    } else {selected_levelup
        let new_hash = '#' + team.key + '/' + trade.key + '/' + stage.key;
        if(browser) {
            window.location.hash = new_hash;
        }
    }
}

function check_hash() {
    // hash should be in the form #team_key/trade_key/stage_key[optional]
    if(window) {
        let hash = window.location.hash;
        if(hash) {
            let h = hash.substring(1);
            if(h) {
                let hash_arr = h.split('/');
                let team_index = $teams.findIndex( (el) => el.key == hash_arr[0]);
                let trade_index = trades.findIndex( (el) => el.key == hash_arr[1]);
                if(trade_index >= 0) {
                    trade = trades[trade_index];
                }

                if(hash_arr[2]) {
                    let cp = $career_paths.find( (el) => el.team == team.key && el.trade == trade.key);
                    let stage = cp.stages.find( (el) => el.key == hash_arr[2]);
                    if(stage){
                        select_stage(stage);
                    }

                    if(typeof hash_arr[3] !== 'undefined'){
                        stage_tab = ["expectations", "levelling", "job", "interview"][parseInt(hash_arr[3])];
                    }
                } else {
                    selected_stage = false;
                }
            }
        }
    }
}


onMount( () => {
    if(browser) {
        check_hash();
    }
});

</script>

<svelte:window on:hashchange={check_hash} />

<h1>Design Levelling Framework </h1>

<div class="settings">
    <!--
    <div><Select bind:value={team} options={$teams} label={"Team"}></Select></div>
    -->
    <div><Select bind:value={trade} options={trades} label={"Trade"}></Select></div>
    <div>
        <span class="label">Visible Columns</span>
        {#each $categories as cat}
            <label><input type="checkbox" value={cat.key} bind:group={visible_categories}> {cat.value} </label>
        {/each}
    </div>
    <div><span class="label">&nbsp;</span><a href="/" class="btn" on:click|preventDefault={ () => {flow_modal = true} }>View Flow</a></div>
    <div><span class="label">&nbsp;</span><a href="/" class="btn" on:click|preventDefault={ () => {level_modal = true} }>View Levels</a></div>
</div>

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th></th>
                {#each $categories as cat, i}
                    {#if visible_categories.indexOf(cat.key) >= 0}
                        <th class="th-{i}" colspan={cat.children.length}><b>{cat.value}</b></th>
                    {/if}
                {/each}
            </tr>
            <tr>
                <th><b>Path Stages</b></th>
                {#each $categories as cat, i}
                    {#if visible_categories.indexOf(cat.key) >= 0}
                        {#each cat.children as ch}
                            <th class="th-{i}" >{ch.value}</th>
                        {/each}
                    {/if}
                {/each}
            </tr>
        </thead>
        <tbody>
            {#if career_path && career_path.stages}
                {#each career_path.stages as stage}
                    {#if !selected_stage || selected_stage == stage}
                        <tr>
                            <td class='stage' title="{stage.can_value}"on:click={ () => {flow_modal = false} } on:click={ () => click_stage(stage) }>{stage.value}</td>
                            {#each $categories as cat}
                                {#if visible_categories.indexOf(cat.key) >= 0}
                                    {#each cat.children as ch}
                                        <td>
                                        {#if stage.cat_levels[ch.key] && stage.cat_levels[ch.key].level && stage.cat_levels[ch.key].display == 'stars'}
                                            <Stars levels={$levels} level={stage.cat_levels[ch.key]}></Stars>
                                        {:else if stage.cat_levels[ch.key] && stage.cat_levels[ch.key].level && stage.cat_levels[ch.key].display == 'short'}
                                            {$levels[stage.cat_levels[ch.key].level].short}
                                        {:else}
                                            {@html stage.cat_levels[ch.key].value}
                                        {/if}
                                        </td>
                                    {/each}
                                {/if}
                            {/each}
                        </tr>
                    {/if}
                {/each}    
            {/if}
        </tbody>
    </table>
</div>

{#if selected_stage}
    <div class="selected-stage">
        <h2>{selected_stage.value}</h2>
        <ul class="tabs">
            <li class:selected={stage_tab=='expectations'} on:click="{ () => stage_tab = 'expectations'}">Role expectations</li>
            {#if selected_stage.key !== "cp_12"}
                <li class:selected={stage_tab=='levelling'} on:click="{ () => stage_tab = 'levelling'}">Levelling Up</li>
                <li class:selected={stage_tab=='job'} on:click="{ () => stage_tab = 'job'}">Job Description</li>
                <li class:selected={stage_tab=='interview'} on:click="{ () => stage_tab = 'interview'}">Interviewing</li>
            {/if}
        </ul>
        {#if stage_tab == 'expectations'}
            {#if selected_stage.intro}
                <h3>Introduction</h3>
                <p>{selected_stage.intro}</p>
            {/if}
            {#each $categories as cat}
                {#if visible_categories.indexOf(cat.key) >= 0}
                    <hr>
                    <h3>{cat.value}</h3>
                    {#each cat.children as ch}
                        <h4>{ch.value}</h4>
                        {#if selected_stage.cat_levels[ch.key].level && selected_stage.cat_levels[ch.key].display == 'stars'}
                            <div style="width:180px"><Stars levels={$levels} level={selected_stage.cat_levels[ch.key]}></Stars></div>

                            {#if $trade_cat_levels[trade.key] && $trade_cat_levels[trade.key][ch.key] && $trade_cat_levels[trade.key][ch.key][selected_stage.cat_levels[ch.key].level]}
                                <p>{$trade_cat_levels[trade.key][ch.key][selected_stage.cat_levels[ch.key].level]}</p>
                            {/if}
                        {:else if selected_stage.cat_levels[ch.key].level && selected_stage.cat_levels[ch.key].display == 'short'}
                            {$levels[selected_stage.cat_levels[ch.key].level].short}
                        {:else}
                            {@html selected_stage.cat_levels[ch.key].value}
                        {/if} 
                    {/each}
                {/if}
            {/each}
            
        {/if}
        {#if stage_tab == 'levelling'}
            <h3>Levelling up</h3>


            {#if selected_stage.level_up.length}
                {#if selected_stage.level_up.length == 2}
                    <p>This position has a career choice for levelling up</p>
                    {#each selected_stage.level_up as k}
                        {@const l = career_path.stages.find( (el) => el.key == k)}
                        <label><input type="radio" bind:group={selected_levelup} value={l} /> {l.value}</label><br>     
                    {/each}
                {/if}

                <h3>{selected_stage.value} <span style="color:#007eff;font-size: 3em;">→</span> <span style="text-decoration:underline" on:click={ () => click_stage(selected_levelup)}>{selected_levelup.value}</span></h3>

                {#each $categories as cat}
                    {#if visible_categories.indexOf(cat.key) >= 0}
                        {#each cat.children as ch}

                            {#if selected_stage.cat_levels[ch.key].level && 
                                selected_stage.cat_levels[ch.key].display == 'stars' &&
                                selected_stage.cat_levels[ch.key].level !== selected_levelup.cat_levels[ch.key].level
                            }

                                <h4>{ch.value}</h4>
                                <div class="comparison">
                                    <span><Stars levels={$levels} level={selected_stage.cat_levels[ch.key]}></Stars></span>
                                    <span>→</span>
                                    <span><Stars levels={$levels} level={selected_levelup.cat_levels[ch.key]}></Stars></span>
                                </div>
                                
                                <div class="comparison">
                                    <span>
                                    {#if $trade_cat_levels[trade.key] && $trade_cat_levels[trade.key][ch.key] && $trade_cat_levels[trade.key][ch.key][selected_stage.cat_levels[ch.key].level]}
                                        {$trade_cat_levels[trade.key][ch.key][selected_stage.cat_levels[ch.key].level]}
                                    {/if}
                                    </span>
                                    <span></span>
                                    <span>
                                    {#if $trade_cat_levels[trade.key] && $trade_cat_levels[trade.key][ch.key] && $trade_cat_levels[trade.key][ch.key][selected_levelup.cat_levels[ch.key].level]}
                                        {$trade_cat_levels[trade.key][ch.key][selected_levelup.cat_levels[ch.key].level]}
                                    {/if}
                                    </span>
                                </div>
                            {/if}


                        {/each}
                    {/if}
                {/each}

            {:else}
               <p>This position does not have any position to advance to but may be elligible for horizontal career change.</p>
            {/if}
        {/if}
        {#if stage_tab == 'job'}
            <h3>Job Description</h3>
            <h3>Coming soon...</h3>
        {/if}
        {#if stage_tab == 'interview'}
            <h3>Interviewing</h3>
            <h3>Coming soon...</h3>
            <p>eg what does "can work in a complex stakeholder environment" mean for a {selected_stage.value} at Canonical?</p>
        {/if}
    </div>
{/if}
<hr>


{#if flow_modal}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="mask" on:click={ () => {flow_modal = false} }>
        <div class="modal" on:click|stopPropagation={ () => true }>
            <h1 on:click={ () => {flow_modal = false} }>Levelling Flow <span>&times;</span></h1>


            <!--
            <label><input type="radio" bind:group={svg_mode} value="generic" />Generic</label>
            <label><input type="radio" bind:group={svg_mode} value="ur" />User Research</label>
            <label><input type="radio" bind:group={svg_mode} value="ux" />User Experience</label>
            <label><input type="radio" bind:group={svg_mode} value="pd" />Visual Design</label>
            -->
            <svg width="640" height="640" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
               
                
                <marker id="triangle" viewBox="0 0 20 20" refX="6" refY="10" markerUnits="strokeWidth" markerWidth="16" markerHeight="12" orient="auto">
                    <path d="M 0 0 L 10 10 L 0 20" stroke="#000" stroke-width="2"/>
                </marker>
                
                <rect width="900" height="900" class="bg"/>
                <rect x="330" y="89"/>
                <rect x="330" y="169"/>
                <rect x="330" y="249"/>
                <rect x="330" y="329"/>
                <rect x="59" y="409" class="expert"/>
                <rect x="330" y="409"/>
                <rect x="330" y="489"/>
                <rect x="330" y="569"/>
                <rect x="603" y="489"/>
                <rect x="603" y="569"/>
                <rect x="465" y="649"/>
                <rect x="465" y="729"/>

                <g transform="translate(0,3)">
                    {#if svg_mode == "ur"}
                        <text x="450" y="115">Graduate User Researcher</text>
                        <text x="450" y="195">Associate User Researcher</text>
                        <text x="450" y="275">User Researcher 1</text>
                        <text x="450" y="355">User Researcher 2</text>
                        <text x="179" y="515">User Research Expert</text>
                        <text x="450" y="435">Senior User Researcher</text>
                        <text x="450" y="515">Lead User Researcher</text>
                        <text x="450" y="595">Principal User Researcher</text>
                        <text x="723" y="515">User Research Manager</text>
                        <text x="723" y="586">Senior User</text>
                        <text x="723" y="604">Research Manager</text>
                        <text x="585" y="675">Director, User Research</text>
                    {:else if svg_mode == "ux"}
                        <text x="450" y="115">Graduate UX Designer</text>
                        <text x="450" y="195">Associate UX Designer</text>
                        <text x="450" y="275">UX Designer 1</text>
                        <text x="450" y="355">UX Designer 2</text>
                        <text x="179" y="515">UX Design Expert</text>
                        <text x="450" y="435">Senior UX Designer</text>
                        <text x="450" y="515">Lead UX Designer</text>
                        <text x="450" y="595">Principal UX Designer</text>
                        <text x="723" y="515">UX Design Manager</text>
                        <text x="723" y="595">Senior UX Design Manager</text>
                        <text x="585" y="666">Director, Desktop /</text>
                        <text x="585" y="684">Enterprise / Infrastructure</text>
                    {:else if svg_mode == "pd"}
                        <text x="450" y="115">Graduate Visual Designer</text>
                        <text x="450" y="195">Associate Visual Designer</text>
                        <text x="450" y="275">Visual Designer 1</text>
                        <text x="450" y="355">Visual Designer 2</text>
                        <text x="179" y="515">Visual Design Expert</text>
                        <text x="450" y="435">Senior Visual Designer</text>
                        <text x="450" y="515">Lead Visual Designer</text>
                        <text x="450" y="595">Principal Visual Designer</text>
                        <text x="723" y="515">Visual Design Manager</text>
                        <text x="723" y="586">Senior Visual</text>
                        <text x="723" y="604">Design Manager</text>
                        <text x="585" y="675">Director, Visual Design</text>
                    {:else}
                        <text x="450" y="115">Graduate</text>
                        <text x="450" y="195">Associate</text>
                        <text x="450" y="275">Level 1</text>
                        <text x="450" y="355">Level 2</text>
                        <text x="179" y="515">Expert</text>
                        <text x="450" y="435">Senior</text>
                        <text x="450" y="515">Lead</text>
                        <text x="450" y="595">Principal</text>
                        <text x="723" y="515">Manager</text>
                        <text x="723" y="595">Senior Manager</text>
                        <text x="585" y="675">Director, <tspan>[</tspan>Domain<tspan>]</tspan></text>
                    {/if}
                    <text x="585" y="755">Global Head of Design</text>
                </g>
                

                <line x1="450" y1="136" x2="450" y2="166" marker-end="url(#triangle)"/>
                <line x1="450" y1="216" x2="450" y2="246" marker-end="url(#triangle)"/>
                <line x1="450" y1="296" x2="450" y2="326" marker-end="url(#triangle)"/>
                <line x1="450" y1="376" x2="450" y2="406" marker-end="url(#triangle)"/>
                <line x1="450" y1="456" x2="450" y2="486" marker-end="url(#triangle)"/>
                <line x1="450" y1="536" x2="450" y2="566" marker-end="url(#triangle)"/>
                <line x1="723" y1="536" x2="723" y2="566" marker-end="url(#triangle)"/>
                <line x1="723" y1="616" x2="693" y2="646" marker-end="url(#triangle)"/>
                <line x1="450" y1="616" x2="480" y2="646" marker-end="url(#triangle)"/>
                <line x1="330" y1="376" x2="300" y2="406" marker-end="url(#triangle)"/>
                <line x1="569" y1="456" x2="599" y2="486" marker-end="url(#triangle)"/>
                <line x1="585" y1="696" x2="585" y2="726" marker-end="url(#triangle)"/>
            </svg> 
        </div>
    </div>
{/if}
{#if level_modal}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="mask" on:click={ () => {level_modal = false} }>
        <div class="modal" on:click|stopPropagation={ () => true }>
            <h1 on:click={ () => {level_modal = false} }>Levels <span>&times;</span></h1>

            {#each Object.entries($levels) as [key, value], index (key)}
            <div style="width:180px"><Stars levels={$levels} level={{level:key}} align_left={true}></Stars></div>
            <b>{value.short}</b>
            <p>{value.long}</p>
            <hr>
            {/each}

        </div>
    </div>
{/if}

<style>
    .btn {
        border: 1px solid var(--fg-2);
        padding: 8px 12px;
        border-radius: 0;
        outline: none;
        background-color: #fff;
        font-family: var(--font);
        font-size: 14px;
        font-weight: 300;
        text-decoration: none;
        color:#000;
        cursor:pointer;
        white-space: nowrap;
    }
    .btn:hover {
        background-color: #fff;
    }
    svg text {
        font-weight: bold;
        fill: black;
        font-size:19px;
        /*dominant-baseline: middle;*/
        text-anchor: middle;
        letter-spacing: -1px;
    }
    svg tspan {
        font-weight: 300;
    }

    svg line {
        stroke: #333;
        stroke-width: 1;
    }
    svg rect {
        fill: #FFFFFF;
        stroke: #CCCCCC;
        width: 239px;
        height: 47px;
    }
    svg rect.bg {
        fill: #F7F7F7;
        width: 900px;
        height: 900px;
    }
    svg rect.expert {
        height:207px;
    }
    .mask {
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: rgba(0,0,0,0.6);
        z-index: 1999;
        text-align: center;
        padding-top: 10vh;
    }
    .modal {
        width: 90%;
        max-width:640px;
        max-height: 80vh;
        overflow: auto;
        background-color: #fff;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        padding: 16px 32px 32px 32px;
        text-align: left;
        box-shadow: 0 4px 16px rgba(0,0,0,0.6);
    }
    .modal label {
        display: inline-block;
        margin-right: 20px;
        margin-bottom: 8px;
    }
    .modal h1 {
        position:relative;
        
    }
    .modal h1 span {
        position: absolute;
        top:-40px;
        right:0;
        cursor:pointer;
    }
    hr {
        border:none;
        background:none;
        border-top:1px solid #eee;
        height:0;
    }
    .settings {
        display: flex;
        flex-direction: row;
        margin-bottom:40px;
    }
    .settings > * {
        margin:20px 40px 20px 0;
    }

    .label {
        display:block;
        font-weight: 300;
    }

    .settings label {
        padding-top:6px;
        padding-right:6px;
        display: inline-block;
    }
    .table-wrapper {
        width:100%;
        overflow: auto;
        max-height:90vh;
        margin-bottom:60px;
        padding-bottom:40px;
        scrollbar-width: thin;
        scrollbar-color: #fff #999;
    }
    .table-wrapper::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
    }

    .table-wrapper::-webkit-scrollbar-track {
        background: #fff;        /* color of the tracking area */
    }

    .table-wrapper::-webkit-scrollbar-thumb {
        background-color: #999;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 3px solid #fff;  /* creates padding around scroll thumb */
    }
    
    thead{
        position:sticky;
        top:0;
        background:#fff;
        z-index: 100;
    }
    th {
        min-width:200px;
        font-weight:300;
    }
    .th-0 { background-color: rgba(0,0,0, 3%); }
    .th-1 { background-color: rgba(0,0,0, 6%); }
    .th-2 { background-color: rgba(0,0,0, 9%); }
    .th-3 { background-color: rgba(0,0,0, 12%); }
    td { 
        text-align: center;
        border-top:1px solid #eee;
        padding: 8px 0;
    }


    th:first-child, td:first-child {
        position: sticky;
        left:0;
        background:#fff;
        z-index: 99;
        text-align: left;
    }
    th:first-child:after, td:first-child:after {
        content: '';
        background: linear-gradient(0.25turn, rgba(0,0,0,10%), rgba(0,0,0,0%));
        position:absolute;
        top:0;
        right:-10px;
        width:10px;
        height:100%;
    }
    td:first-child {
        color:#007eff;
        text-decoration: underline;
        white-space: nowrap;
        padding-right:8px;
    }

    td.stage {
        cursor: pointer;
    }

    .selected-stage {
        margin: 0 64px 120px 64px;
        
    }
    .selected-stage p {
        max-width: 640px;
    }
    .tabs {
        list-style: none;
        display: block;
        padding:0;
        border-bottom:1px solid #eee;
    }
    .tabs li {
        display: inline-block;
        padding: 12px 16px;
        border-bottom: 3px solid transparent;
        cursor:pointer;
    }
    .tabs li.selected {
        background-color: rgba(0,0,0,8%);
        border-bottom-color: #000;
    }

    h2 {
        font-weight:100;
        font-size:32px;
    }
    h3 {
        font-weight:100;
        font-size:28px;
    }
    .comparison {
        display:flex;
        flex-direction: row;
        text-align: center;
    }
    .comparison > *:nth-child(1),
    .comparison > *:nth-child(3){
        flex: 1;
        text-align: left;
        vertical-align:top;
    }
    .comparison > *:nth-child(2){
        font-size: 2em;
        line-height:0em;
        margin-bottom:1em;
        vertical-align:top;
        width:80px;
        color:#007eff;
    }
</style>