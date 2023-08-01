<script>
    import { tick, onMount } from 'svelte';
    import { MeshStandardMaterial, TextureLoader, BoxBufferGeometry, DoubleSide } from 'three'
    import {
        AmbientLight,
        Canvas,
        SpotLight,
        Mesh,
        PerspectiveCamera,
        useTexture
    } from 'threlte'

    let show_settings = false;
    let animate = false;
    let html_overlay = false;

    const texture1 = useTexture('https://unco.github.io/docs/paper.png', {
        onError: (error) => {
            console.warn(`An error occured loading the texture: ${error.message}`)
        }
    })
    let ms = [
      new MeshStandardMaterial({ map: texture1 }),
      new MeshStandardMaterial({ color: '#000000' }),
      new MeshStandardMaterial({ color: '#E95420' })
      
    ]
    let m = ms[0];
    let floor_m = new MeshStandardMaterial({color: '#ff3300' })


    $: {
      let a = animate;
      anim();
    }

    let camera_fov = 50;
    let ambient_intensity = 100;
    let directional_intensity = 100;

    let floor_toggle = true;
    $: floor_colour = floor_toggle ? '#ff3300' : '#ffffff'

    let spot1 = true;
    let spot2 = true;
    let spot3 = true;
    let spot4 = true;

    let anim_speed1 = 5;
    let x_rot1 = 34;
    let y_rot1 = 16;
    let z_rot1 =  5;
    let x_mov1 = 69;
    let y_mov1 = 49;
    let z_mov1 = 51;
    let scale1 = 34;

    let anim_speed2 = 10;
    let x_rot2 = 60;
    let y_rot2 = 5;
    let z_rot2 = 5;
    let x_mov2 = 80;
    let y_mov2 = 50;
    let z_mov2 = 79;
    let scale2 = 45;

    let favourites = [
      [86,4,44,24,69,72,34, 65,22,20,61,0,68,78, 1],
      [69,19,83,13,47,32,91, 51,64,96,64,73,68,53, 0],
    ];
    let animating;

    async function anim() {
        if(animating) {
          clearInterval(animating);
        }
        if(animate) {
            animating = setInterval( () => {
              z_rot1 += anim_speed1/200;
              x_rot1 += anim_speed1/200;
              z_rot2 += anim_speed2/200;
              x_rot2 += anim_speed2/200;
              if(z_rot1 > 100) {z_rot1 = 0}
              if(z_rot2 > 100) {z_rot2 = 0}
              if(x_rot1 > 100) {x_rot1 = 0}
              if(x_rot2 > 100) {x_rot2 = 0}
            }, 100) 
        
        }
    }


    function randomize() {
        x_rot1 = Math.round(Math.random()*100);
        y_rot1 = Math.round(Math.random()*100);
        z_rot1 = Math.round(Math.random()*100);
        x_mov1 = Math.round(Math.random()*100);
        y_mov1 = Math.round(Math.random()*100);
        z_mov1 = Math.round(Math.random()*100);
        scale1 = Math.round(Math.random()*100);

        x_rot2 = Math.round(Math.random()*100);
        y_rot2 = Math.round(Math.random()*100);
        z_rot2 = Math.round(Math.random()*100);
        x_mov2 = Math.round(Math.random()*100);
        y_mov2 = Math.round(Math.random()*100);
        z_mov2 = Math.round(Math.random()*100);
        scale2 = Math.round(Math.random()*100);
    }
    function favourites_add() {
        favourites.push([
            x_rot1,
            y_rot1,
            z_rot1,
            x_mov1,
            y_mov1,
            z_mov1,
            scale1,
            x_rot2,
            y_rot2,
            z_rot2,
            x_mov2,
            y_mov2,
            z_mov2,
            scale2,
        ]);
        favourites = favourites;

    }
    function favourites_delete() {
        
    }
    function favourites_set(i) {
        [x_rot1,
        y_rot1,
        z_rot1,
        x_mov1,
        y_mov1,
        z_mov1,
        scale1,

        x_rot2,
        y_rot2,
        z_rot2,
        x_mov2,
        y_mov2,
        z_mov2,
        scale2] = favourites[i];
        console.log('m?', favourites[i][14]);
        m = ms[favourites[i][14]]
    }
    function favourites_recover() {

    }


    


</script>
<div class='suru_wrapper'>
    <div>
    <div class='settings-toggle' on:click|preventDefault="{ () => { show_settings = !show_settings}}">Settings {#if show_settings}↥{:else}↧{/if}</div>
    <div class='btn' class:selected={m == ms[0]} on:click|preventDefault={ () => {m = ms[0]}}>Material 1</div>
    <div class='btn' class:selected={m == ms[1]} on:click|preventDefault={ () => {m = ms[1]}}>Material 2</div>
    <div class='btn' class:selected={m == ms[2]} on:click|preventDefault={ () => {m = ms[2]}}>.</div>
    <div class='btn' on:click|preventDefault={randomize}>Randomize</div>
    <div class='btn' on:click|preventDefault={favourites_add}>+</div>
        {#each favourites as fav, i}
            <div class='btn fav'>
                <a href="/" on:click|preventDefault={ () => { favourites_set(i) }}>Fav {i+1}</a><a href="/" on:click|preventDefault={ () => { favourites_delete(i) }}>⨯</a>
            </div>
            
        {/each}
    </div>
    {#if show_settings}
    <div class="settings-wrapper">
    <div class='control-wrapper'>
        <div class='header'>Misc</div>
        <div class='control'><div class='label'>Toggle floor</div><input type="checkbox" bind:checked={floor_toggle}></div>
        <div class='control'><div class='label'>Toggle html</div><input type="checkbox" bind:checked={html_overlay}></div>
        <div class='control'><div class='label'>Animate</div><input type="checkbox" bind:checked={animate}></div>
        <div class='control'><div class='label'>Camera FOV</div><input type="range" bind:value={camera_fov}> {camera_fov}</div>
        <div class='control'><div class='label'>Ambient intensity</div><input type="range" bind:value={ambient_intensity}> {ambient_intensity/100}</div>
        <div class='control'><div class='label'>Spot intensity</div><input type="range" bind:value={directional_intensity}> {directional_intensity/100}</div>
        
        <div class='header'>Cube 1</div>
        <div class='control'><div class='label'>Animation</div><input type="range" bind:value={anim_speed1}> {anim_speed1}</div>
        <div class='control'><div class='label'>X rotation</div><input type="range" bind:value={x_rot1}> {x_rot1}</div>
        <div class='control'><div class='label'>Y rotation</div><input type="range" bind:value={y_rot1}> {y_rot1}</div>
        <div class='control'><div class='label'>Z rotation</div><input type="range" bind:value={z_rot1}> {z_rot1}</div>
        <div class='control'><div class='label'>X move</div><input type="range" bind:value={x_mov1}> {x_mov1}</div>
        <div class='control'><div class='label'>Y move</div><input type="range" bind:value={y_mov1}> {y_mov1}</div>
        <div class='control'><div class='label'>Z move</div><input type="range" bind:value={z_mov1}> {z_mov1}</div>
        <div class='control'><div class='label'>Scale</div><input type="range" bind:value={scale1}> {scale1}</div>
        
    </div>
    <div class='control-wrapper'>
        <div class='header'>Spots</div>
        <div class='control'><div class='label'>Spot 1</div><input type="checkbox" bind:checked={spot1}></div>
        <div class='control'><div class='label'>Spot 2</div><input type="checkbox" bind:checked={spot2}></div>
        <div class='control'><div class='label'>Spot 3</div><input type="checkbox" bind:checked={spot3}></div>
        <div class='control'><div class='label'>Spot 4</div><input type="checkbox" bind:checked={spot4}></div>
        
        <div class='header'>Cube 2</div>
        <div class='control'><div class='label'>Animation</div><input type="range" bind:value={anim_speed2}> {anim_speed2}</div>
        <div class='control'><div class='label'>X rotation</div><input type="range" bind:value={x_rot2}> {x_rot2}</div>
        <div class='control'><div class='label'>Y rotation</div><input type="range" bind:value={y_rot2}> {y_rot2}</div>
        <div class='control'><div class='label'>Z rotation</div><input type="range" bind:value={z_rot2}> {z_rot2}</div>
        <div class='control'><div class='label'>X move</div><input type="range" bind:value={x_mov2}> {x_mov2}</div>
        <div class='control'><div class='label'>Y move</div><input type="range" bind:value={y_mov2}> {y_mov2}</div>
        <div class='control'><div class='label'>Z move</div><input type="range" bind:value={z_mov2}> {z_mov2}</div>
        <div class='control'><div class='label'>Scale</div><input type="range" bind:value={scale2}> {scale2}</div>
    </div>
  </div>
    {/if}

    <div class="canvas-wrapper">
    <Canvas>

    <PerspectiveCamera position={{ x: 0, y: 20, z: 0 }} lookAt={{ x: 0, y: 0, z: 0 }} fov={camera_fov}/>
    
    <!--<PointLight position={{ x: 3, y: 3, z: 10 }} color= '#FFFFFF'/>-->
    {#if spot1}
    <SpotLight shadow position={{ x: -5, y: 20, z:-10 }} intensity={directional_intensity/50}/>
    {/if}
    {#if spot2}
    <SpotLight shadow position={{ x: -10, y: 20, z:-5 }} intensity={directional_intensity/50}/>
    {/if}
    {#if spot3}
    <SpotLight shadow position={{ x: -10, y: 20, z:5 }} intensity={directional_intensity/50}/>
    {/if}
    {#if spot4}
    <SpotLight target={{ x: 13, y: 5, z: 8.5 }} shadow position={{ x: -15, y: 25, z: -10 }} intensity={2}/>
    {/if}
    <AmbientLight intensity={ambient_intensity/100} />

    <!-- Cube 1 -->
    <Mesh 
        scale={scale1/20}
        position={{ 
            x: x_mov1/2.5 - 20, 
            y: y_mov1/10 - 10, 
            z: z_mov1/5 - 10 
        }}
        rotation={{ 
            x: x_rot1*3.6 * (Math.PI / 180), 
            y: y_rot1*3.6 * (Math.PI / 180), 
            z: z_rot1*3.6 * (Math.PI / 180) 
        }}
        castShadow
        receiveShadow
        geometry={new BoxBufferGeometry(5, 3, 5)}
        material={m}
    />
    <!-- Cube 2 -->
    <Mesh 
        scale={scale2/20}
        position={{ 
            x: x_mov2/2.5 - 20, 
            y: y_mov2/10 - 10, 
            z: z_mov2/5 - 10 
        }}
        rotation={{ 
            x: x_rot2*3.6 * (Math.PI / 180), 
            y: y_rot2*3.6 * (Math.PI / 180), 
            z: z_rot2*3.6 * (Math.PI / 180) 
        }}
        castShadow
        receiveShadow
        geometry={new BoxBufferGeometry(5, 3, 5)}
        material={m}
    />

    <!-- Floor -->
    <Mesh
      receiveShadow
      rotation={{ x: -90 * (Math.PI / 180) }}
      geometry={new BoxBufferGeometry(300, 300, 0.01)}
      material={ floor_toggle ? m : floor_m}
    />
  </Canvas>
  {#if html_overlay}
    <div class="html-overlay" class:dark={m == ms[1]}>
      <div class="fake-header"></div>
      <div class="page-header">Careers</div>
      <h1><b>Passionate about open source?</b><br>
      So are we. Be where the cutting edge is established.
      </h1>
      <div class="search">
        <input type="text" placeholder="Search by keyword">
        <div class="btn">Search roles</div>
      </div>
    </div>
  {/if}
  </div>
</div>

<style>
  .suru_wrapper {
    height: 100%;
    width: 100%;
  }
  .settings-toggle {
    display: inline-block;
    margin-right:40px;
    cursor:pointer
  }
  .settings-wrapper {
    overflow: auto;
  }
  .btn {
    padding:4px 8px;
    border-radius:4px;
    display: inline-block;
    border:1px solid #eee;
    margin-right: 4px;
  }
  .btn.selected {
    background:#eee
  }
  .control-wrapper {
    float:left;
    width:50%;
  } 
  .control {
    display:block;
    font-size: 12px;
  }
  .control-wrapper .header {
    text-transform: uppercase;
    font-size: 10px;
    color:#666666;
    letter-spacing: 1px;

    margin-top:10px;
  }
  .label {
    display: inline-block;
    width:200px;
  }

  .fav {
    padding:0;
  }
  .fav a {
    display:inline-block;
    color:#666666;
    text-decoration: none;
    padding:4px 8px;
    border-left:1px solid #eee;
  }
  .fav a:hover {
    background:#eee;
  }
  .fav a:first-child {
    border-left:none;
  }
  .canvas-wrapper {
    position:relative;
    height:100%;
    margin-top:40px;
  }
  canvas {
    height:100%;
  }

  .html-overlay {
    position:absolute;
    height:100%;
    width:100%;
    top:0;
    left:0;
    text-align:center;
  }

  .fake-header {
    width:100%;
    height:70px;
    background-image: url('/fake-header.png');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .page-header{
    width:80%;
    margin:0 auto;
    text-transform: uppercase;
    line-height: 40px;
    border-bottom:1px solid #ccc;
    text-align: left;
    letter-spacing: 2px;
    font-size:14px;
  }
  .dark .page-header {
    color:#999;
    border-bottom:1px solid #666;
  }
  h1 {
    font-size:2.8em;
    width:50%;
    margin:60px auto;
    text-align: left;
  }
  .dark h1 {
    color:#fff;
  }
  .search {
    width:50%;
    margin:0 auto;
    text-align: left;
  }
  .search input {
    height:32px;
    background:#e7e7e7;
    outline:none;
    border:none;
    border-bottom:1px solid #626262;;
    width:50%;
    padding:0 16px;
    vertical-align: top;
  }
  .search .btn {
    background:#0C8420;
    color:#fff;
    height:33px;
    padding:0 16px;
    line-height:34px;
    border-radius: 0;
    border:none;
  }
</style>