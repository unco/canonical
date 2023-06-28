<script>
    import Select from "../../common/forms/select.svelte";
    import Stars from "../../common/forms/stars.svelte";

/*
Complete leveling framework for canonicaldesign contained within one file
*/
let teams = [
    {key: "design", value: "Design"},
    {key: "web", value: "Web Engineering"},
];
let team = teams[0];

let all_trades = [
    {team: "design", key: "ux", value: "UX"},
    {team: "design", key: "vd", value: "Visual Design"},
    {team: "design", key: "ur", value: "User Research"},
    {team: "web", key: "all", value: "All"}
];
let trades = all_trades.filter( (el) => { return el.team == team.key } );
let trade = trades[0];
$: {
    trades = all_trades.filter( el => el.team == team.key );
    if(trades.indexOf(trade) < 0) {
        trade = trades[0];
    }
}

let levels =  {
    "l0": { stars: 0, short: "Unrequired", long: "Does not need this yet or has no knowledge."},
    "l1": { stars: 1, short: "Potential", long: "Can read up and work with support. Is not self sufficent in this area yet."},
    "l2": { stars: 2, short: "Competency", long: "Has some expertise. Can work alone and is self sufficient in this area."},
    "l3": { stars: 3, short: "Proficiency", long: "Has expertise. Self sufficient and capable of sharing with others."},
    "l4": { stars: 4, short: "Excellence", long: "Deep accomplished expertise. Has theory of area. Can lead and educate in this area and/or act as subject matter expert."},
    "l5": { stars: 5, short: "Mastery", long: "Deep practical and theoretical expertise. Leads and educates in this area and is subject matter expert. Can recommend/strategise."},
    "l6": { stars: 6, short: "Responsible", long: "Deep expertise. Publicly leads and educates and is SME. Responsible for vision, strategy and evolution of this area."},
};

let categories = [
    {key: "c0", value: "Canonical", children: [
        {key: "c0_1", value: "Has"},
        {key: "c0_2", value: "Impacts"},
        {key: "c0_3", value: "Behaviours"}
    ]},
    {key: "c1", value: "Competency", children: [
        {key: "c1_1", value: "Tools"},
        {key: "c1_2", value: "Process"},
        {key: "c1_3", value: "Outcomes"}
    ]},
    {key: "c2", value: "People", children: [
        {key: "c2_1", value: "Communication"},
        {key: "c2_2", value: "Stakeholder Management"},
        {key: "c2_3", value: "Leadership"},
        {key: "c2_4", value: "Team Management"}
    ]},
    {key: "c3", value: "Strategy", children: [
        {key: "c3_1", value: "Business OKRs"},
        {key: "c3_2", value: "Systems Thinking"},
        {key: "c3_3", value: "Long-term Vision"}
    ]}
];

let career_paths = [
    {
        team: "design",
        trade: "ux",
        stages: [
            {key: "cp_1", value: "Graduate UX designer", can_value: "Graduate", cat_levels:{
                "c0_1":{ value: "Potential"},
                "c0_2":{ value: "Self"},
                "c0_3":{ value: "Foo<br>bar<br>bash"},
                "c1_1":{ level: "l1", display: "stars"},
                "c1_2":{ level: "l1", display: "stars"},
                "c1_3":{ level: "l2", display: "stars"},
                "c2_1":{ level: "l1", display: "stars"},
                "c2_2":{ level: "l0", display: "stars"},
                "c2_3":{ level: "l0", display: "stars"},
                "c2_4":{ level: "l0", display: "stars"},
                "c3_1":{ level: "l0", display: "stars"},
                "c3_2":{ level: "l0", display: "stars"},
                "c3_3":{ level: "l0", display: "stars"},
            }},
            {key: "cp_2", value: "Associate UX designer", can_value: "Associate", cat_levels:{
                "c0_1":{ value: "Potential"},
                "c0_2":{ value: "Self"},
                "c0_3":{ value: "Foo<br>bar<br>baz"},
                "c1_1":{ level: "l2", display: "stars"},
                "c1_2":{ level: "l2", display: "stars"},
                "c1_3":{ level: "l2", display: "stars"},
                "c2_1":{ level: "l1", display: "stars"},
                "c2_2":{ level: "l1", display: "stars"},
                "c2_3":{ level: "l0", display: "stars"},
                "c2_4":{ level: "l0", display: "stars"},
                "c3_1":{ level: "l0", display: "stars"},
                "c3_2":{ level: "l1", display: "stars"},
                "c3_3":{ level: "l0", display: "stars"},
            }},
            {key: "cp_3", value: "UX designer 1", can_value: "Prof I", cat_levels:{
                "c0_1":{ value: "Competence"},
                "c0_2":{ value: "Work"},
                "c0_3":{ value: "Foo<br>bar<br>baz"},
                "c1_1":{ level: "l3", display: "stars"},
                "c1_2":{ level: "l3", display: "stars"},
                "c1_3":{ level: "l3", display: "stars"},
                "c2_1":{ level: "l2", display: "stars"},
                "c2_2":{ level: "l1", display: "stars"},
                "c2_3":{ level: "l0", display: "stars"},
                "c2_4":{ level: "l0", display: "stars"},
                "c3_1":{ level: "l1", display: "stars"},
                "c3_2":{ level: "l1", display: "stars"},
                "c3_3":{ level: "l0", display: "stars"},
            }},
            {key: "cp_4", value: "UX designer 2", can_value: "Prof II", cat_levels:{
                "c0_1":{ value: "Competence"},
                "c0_2":{ value: "Work"},
                "c0_3":{ value: "Foo<br>bar<br>baz"},
                "c1_1":{ level: "l3", display: "stars"},
                "c1_2":{ level: "l3", display: "stars"},
                "c1_3":{ level: "l3", display: "stars"},
                "c2_1":{ level: "l2", display: "stars"},
                "c2_2":{ level: "l2", display: "stars"},
                "c2_3":{ level: "l1", display: "stars"},
                "c2_4":{ level: "l0", display: "stars"},
                "c3_1":{ level: "l1", display: "stars"},
                "c3_2":{ level: "l2", display: "stars"},
                "c3_3":{ level: "l1", display: "stars"},
            }},
            {key: "cp_5", value: "UX expert", can_value: "Prof III", cat_levels:{
                "c0_1":{ value: "Expertise"},
                "c0_2":{ value: "Work"},
                "c0_3":{ value: "Foo<br>bar<br>baz"},
                "c1_1":{ level: "l4", display: "stars"},
                "c1_2":{ level: "l4", display: "stars"},
                "c1_3":{ level: "l4", display: "stars"},
                "c2_1":{ level: "l3", display: "stars"},
                "c2_2":{ level: "l2", display: "stars"},
                "c2_3":{ level: "l1", display: "stars"},
                "c2_4":{ level: "l0", display: "stars"},
                "c3_1":{ level: "l2", display: "stars"},
                "c3_2":{ level: "l2", display: "stars"},
                "c3_3":{ level: "l1", display: "stars"},
            }},
            {key: "cp_6", value: "Senior UX designer", can_value: "Senior", cat_levels:{
                "c0_1":{ value: "Expertise"},
                "c0_2":{ value: "Team"},
                "c0_3":{ value: "Foo<br>bar<br>baz"},
                "c1_1":{ level: "l4", display: "stars"},
                "c1_2":{ level: "l4", display: "stars"},
                "c1_3":{ level: "l4", display: "stars"},
                "c2_1":{ level: "l3", display: "stars"},
                "c2_2":{ level: "l3", display: "stars"},
                "c2_3":{ level: "l2", display: "stars"},
                "c2_4":{ level: "l1", display: "stars"},
                "c3_1":{ level: "l2", display: "stars"},
                "c3_2":{ level: "l3", display: "stars"},
                "c3_3":{ level: "l2", display: "stars"},
            }}
        ]
    }
]

let career_path = false;

$: {
    let t = trade;
    career_path = career_paths.find( el => el.team == team.key && el.trade == trade.key);
}

</script>


<h1> Leveling Framework </h1>

{team.value}<br>
{trade.value}<br><br>

<Select bind:value={team} options={teams} label={"Team"}></Select>
<Select bind:value={trade} options={trades} label={"Trade"}></Select>

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th></th>
                {#each categories as cat, i}
                    <th class="th-{i}" colspan={cat.children.length}>{cat.value}</th>
                {/each}
            </tr>
            <tr>
                <th>Path Stages</th>
                {#each categories as cat, i}
                    {#each cat.children as ch}
                        <th class="th-{i}" >{ch.value}</th>
                    {/each}
                {/each}
            </tr>
        </thead>
        <tbody>
            {#if career_path && career_path.stages}
                {#each career_path.stages as stage}
                    <tr>
                        <td title="{stage.can_value}">{stage.value}</td>
                        {#each categories as cat}
                            {#each cat.children as ch}
                                <td>
                                {#if stage.cat_levels[ch.key].level && stage.cat_levels[ch.key].display == 'stars'}
                                    <Stars {levels} level={stage.cat_levels[ch.key]}></Stars>
                                {:else if stage.cat_levels[ch.key].level && stage.cat_levels[ch.key].display == 'short'}
                                    {levels[stage.cat_levels[ch.key].level].short}
                                {:else}
                                    {@html stage.cat_levels[ch.key].value}
                                {/if}
                                </td>
                            {/each}
                        {/each}
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
</div>


<style>
    .table-wrapper {
        width:100%;
        overflow: auto;
    }
    table {
        min-width:100%;
    }
    th {
        min-width:200px;
    }

    td { text-align: center; }
    .th-0 { background-color: rgba(210,72, 29, 10%); }
    .th-1 { background-color: rgba(210,72, 29, 20%); }
    .th-2 { background-color: rgba(210,72, 29, 30%); }
    .th-3 { background-color: rgba(210,72, 29, 40%); }

    
</style>


