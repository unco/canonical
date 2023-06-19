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
    let animate = true;
    $: {
      let a = animate;
      console.log('animate status changed');
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
    let y_mov1 = 40;
    let z_mov1 = 30;
    let scale1 = 34;

    let anim_speed2 = 10;
    let x_rot2 = 60;
    let y_rot2 = 5;
    let z_rot2 = 5;
    let x_mov2 = 80;
    let y_mov2 = 50;
    let z_mov2 = 53;
    let scale2 = 45;

    let favourites = [];
    let animating;

    async function anim() {
        if(animating) {
          clearInterval(animating);
        }
        if(animate) {
            animating = setInterval( () => {
              z_rot1 += anim_speed1/200;
              z_rot2 += anim_speed2/200;
              if(z_rot1 > 100) {z_rot1 = 0}
              if(z_rot2 > 100) {z_rot2 = 0}
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
    }
    function favourites_recover() {

    }

    const texture1 = useTexture('/paper.png', {
        onError: (error) => {
            console.warn(`An error occured loading the texture: ${error.message}`)
        }
    })
    let m1 = new MeshStandardMaterial({ map: texture1 });
    let m2 = new MeshStandardMaterial({ color: '#000000' });

    let m = m1;

    let floor_m = new MeshStandardMaterial({color: '#ff3300' })

    /*
    onMount(async () => {
      anim();
    });
    */


</script>
<div class='suru_wrapper'>
    <div>
    <div class='settings-toggle' on:click|preventDefault="{ () => { show_settings = !show_settings}}">Settings {#if show_settings}↥{:else}↧{/if}</div>
    <div class='btn' class:selected={m == m1} on:click|preventDefault={ () => {m = m1}}>Material 1</div>
    <div class='btn' class:selected={m == m2} on:click|preventDefault={ () => {m = m2}}>Material 2</div>
    <div class='btn' on:click|preventDefault={randomize}>Randomize</div>
    <div class='btn' on:click|preventDefault={favourites_add}>+</div>
        {#each favourites as fav, i}
            <div class='btn fav'>
                <a href="/" on:click|preventDefault={ () => { favourites_set(i) }}>🍪 {i+1}</a><a href="/" on:click|preventDefault={ () => { favourites_delete(i) }}>⨯</a>
            </div>
            
        {/each}
    </div>
    {#if show_settings}
    <div class='control-wrapper'>
        <div class='header'>Lights camera</div>
        <div class='control'><div class='label'>Toggle floor</div><input type="checkbox" bind:checked={floor_toggle}></div>
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
    {/if}

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
            y: y_mov1/10 - 5, 
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
            y: y_mov2/10 - 5, 
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
    <!-- MARKER -->
    <!--<Mesh 
        position={{ x: -13, y: 1, z: -8.5 }}
        geometry={new BoxBufferGeometry(0.5, 0.5, 0.5)}
        material={new MeshStandardMaterial({ color: '#0033ff'})}
    />-->

    <!-- Floor -->
    <Mesh
      receiveShadow
      rotation={{ x: -90 * (Math.PI / 180) }}
      geometry={new BoxBufferGeometry(300, 300, 0.01)}
      material={ floor_toggle ? m : floor_m}
    />
  </Canvas>
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

  canvas {
    height:100%;
  }
</style>