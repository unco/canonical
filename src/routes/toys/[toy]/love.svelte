
<script>
    import Glyphs from './glyphs.svelte';
    let single_target = false;
    let hover_target = false;
    let blank_fill = true;
    let glyph_break = 0;
    let glyph_grid = [
      ['29','18','28','8']
    ];
  
  
  </script>
 
  <h1>Made by Canonical with<span><Glyphs {glyph_grid} {single_target} {blank_fill} {glyph_break} {hover_target}></Glyphs></span></h1>
  
  

<style>

    h1 {text-align: center;
    margin-top:100px}

    h1 span {
        display: inline-block;
        width:256px;
        height: 64px;
        vertical-align: middle;
        margin-left:32px;
    }
</style>