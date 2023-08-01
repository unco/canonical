<script>
    import { onMount } from "svelte";

    let shell;
    let ready = false;
    let grid_size;
    let glyph_count = 45;
    export let hover_target = true;
    export let glyph_break = 0.4; //chance that a glyph randomises
    export let blank_fill = false; //if true it animates blanksquares
    export let glyph_grid = [];
    export let single_target;
    export let iterations = 10; // number of changes before landing on target glyph
    export let initial_ms = 300; //length of time initial change takes (slopes down to 50ms with a randomisation)

    let paint_grid = []; // this is a clone of glyph_grid that gets updated with temp values on timeout
    function boot() {
      paint_grid = structuredClone(glyph_grid);
      randomise_arr(0);
      ready = true;
    }
    $: {
        let g = glyph_grid;
      if(ready) {
        ready = false;
        boot();
      }
    }
    function randomise_cell(i,j,iteration) {
     
      let r = Math.floor(Math.random() * (glyph_count - 1))+1+'';

      if(iteration == iterations){
        if(glyph_grid[i][j] == '') {
          r = 'X';
        } else if(single_target) {
          r= single_target;
        } else if(glyph_grid[i][j] !== '?') {
          r = glyph_grid[i][j];
          
        }
        let breaker = Math.random();
        if(breaker < glyph_break) {
          let delta =  initial_ms*(Math.random() * (90 - 3) + 3)//randomised +- a bit
          setTimeout(function() {
            randomise_cell(i,j,iteration+10);
          }, delta);
        }
      }
     

      if(!blank_fill && glyph_grid[i][j] == '') {
        r = 'X';
      }
      paint_grid[i][j] = r;
      paint_grid = paint_grid;
      let delay = iteration/iterations*initial_ms; //gets quicker
      delay =  delay*(Math.random() * (1.2 - 0.8) + 0.8)//randomised +- a bit
      let delta = initial_ms - delay;
      if(iteration < iterations){
        setTimeout(function() {
          randomise_cell(i,j,iteration+1);
        }, delta);
      }
    }
    

    function randomise_arr(iteration) { 
      paint_grid.forEach( (row, i) => {
        row.forEach( (col,j) => {
          randomise_cell(i,j,iteration)
        })
      })
      
    }

    onMount(() => {
      //get dimensions of grid
      let num_rows = glyph_grid.length;
      let num_columns = glyph_grid[0].length;
      let col_w = shell.offsetWidth/num_columns;
      let row_h = shell.offsetHeight/num_rows;
      grid_size = Math.floor(Math.min(col_w, row_h));
      boot();
    });
</script>

<div class="glyphs_container" bind:this={shell}>
  {#if ready}
    {#each paint_grid as row, i}
      <div class='row'>
        {#each row as col, j}
          <div class='glyph' class:hover_target class:empty={col == 'X'} on:mouseleave={ ()=> randomise_cell(i,j,0)} style="width:{grid_size}px;height:{grid_size}px;">
            <div style="background-image:url(https://unco.github.io/docs/glyphs/{col}.svg);"></div>
          </div>
        {/each}
      </div>
    {/each}
  {/if}
</div>


<style>
  .row {
    overflow: auto;
  }
  .glyph {
    box-sizing:border-box;
    float:left;
  }
  .glyph > div {
    width:80%;
    height:80%;
    background-size: contain;
    background-repeat: no-repeat;
    margin:10%;

  }
  .glyph.hover_target:not(.empty):hover {
    background-color:#e95420;
  }
  .glyphs_container {
    width:100%;
    height:100%;
  }
</style>