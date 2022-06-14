<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Bebas+Neue&family=Charis+SIL:ital@1&family=DM+Sans&family=Joan&family=Josefin+Slab:wght@300;700&family=Kanit:wght@300;500&family=Montserrat:ital,wght@0,300;1,200&family=Open+Sans:wght@400;500&family=Oswald:wght@200;700&family=Poppins:wght@300&family=Signika:wght@300&family=Spline+Sans+Mono:wght@700&family=Teko:wght@300&display=swap" rel="stylesheet">
<script>
	let lightningtheme = true;
	let fade = false;
	function activatelightningtheme() {
		lightningtheme = true;
	}
	function activatefade() {
		fade = true;
	}
	import { Clock } from "./clock.js";
    import { fly } from "svelte/transition";
    let clock = new Clock(22,34,40); //timme, minut, sekund
    let minute = clock.timeMinute
    let hour = clock.timeHour
    let second = clock.timeSecond
	function tick() {
        clock.tick();
        clock = clock;
    }
    tick();
    setInterval(tick, 1000);
</script>

<main style="background-color:{lightningtheme ? 'rgb(32,42,68)' : 'white'};">
	<div class="start" style="display: {fade ? 'none' : 'block'}">
		<div class="mainholder" style="background-color: transparent; border: transparent; color:red;">
		<div class="startportfolio"><h1 style="color: transparent; text-shadow: none;">TOBBELANG PORTFOL</h1>
			<h1 style="color: transparent; text-shadow:none;">O</h1>
		  </div>
		  <div style="display: {fade ? 'none' : 'block'}"><div class="startportfoliostart1"><h1>T</h1></div><div class="startportfoliostart2"><div class="lightningbox"><div class="lightningoutline"><div class="lightning"></div></div><div class="lightningoutline2"><div class="lightning2"></div></div></div></div></div>
		  <button on:click={activatefade}><div class="startbutton" ><div class="startbuttontext">View Portfolio</div></div></button></div>
	</div>


	<div class="startfade" style="display: {fade ? 'block' : 'none'}">
		<div class="mainholder" style="background-color: transparent; border: transparent;">
			<div class="startportfolio"><h1 style="color:transparent; text-shadow:none;">TOBBELANG PORTFOL</h1>
				<h1 style="color:transparent; text-shadow: none;">O</h1>
			  </div>
			  <div class="startportfoliostartfade1"><h1>T</h1></div><div class="startportfoliostartfade2"><div class="lightningbox"><div class="lightningoutline"><div class="lightning"></div></div><div class="lightningoutline2"><div class="lightning2"></div></div></div></div></div>
			  <button on:click={activatefade}><div class="startbuttonfade" ><div class="startbuttontextfade">View Portfolio</div></div></button>
		</div>

<div class="wholeportfolio" style="display: {fade ? 'block' : 'none'}">
<div class="mainholder">
	<div class="startportfolio"><h1 style="color:{lightningtheme ? 'rgb(163, 163, 15)' : 'white'};">TOBBELANG PORTFOL</h1>
		<button on:click|once={activatelightningtheme}>
    <div class="lightningbox">
    <div class="lightningoutline">
		<div class="lightning"></div></div>
		<div class="lightningoutline2">
		<div class="lightning2">
    </div></div></div></button>
    <h1 style="color:{lightningtheme ? 'rgb(163, 163, 15)' : 'white'};">O</h1>
  </div>
</div>
<div class="puzzletop" style="background-color:{lightningtheme ? 'rgb(32,42,68)' : 'white'};"></div>
<div class="lightnings">
	<div class="holderlightning1">
<div class="lightning1dot1"></div>
<div class="lightning1dot2"></div>
<div class="lightning1dot3"></div>
</div>
<div class="holderlightning2">
<div class="lightning2dot1"></div>
<div class="lightning2dot2"></div>
<div class="lightning2dot3"></div>
<div class="lightningbranch1dot1"></div>
<div class="lightningbranch1dot2"></div>
<div class="lightningbranch1dot3"></div>
<div class="lighting2dot4"></div>
</div>
<div class="holderlightning3">
<div class="lightning3dot1"></div>
	<div class="lightning3dot2"></div>
	<div class="lightningbranch2dot1"></div>
	<div class="lightningbranch2dot2"></div>
	<div class="lightningbranch2dot3"></div>
	<div class="lightningbranch2dot4"></div>
	<div class="lightningbranch2dot5"></div>
	<div class="lightningbranch2dot6"></div>
	<div class="lightningbranch2dot7"></div>
	<div class="lightningbranch2dot8"></div>
	<div class="lightning3dot3"></div>
</div>
<div class="holderlightning4">
	<div class="lightning5dot1"></div>
	<div class="lightning5dot2"></div>
	<div class="lightning5dot3"></div>
	<div class="lightning5dot4"></div>
	<div class="lightning5dot5"></div>
	<div class="lightning5dot6"></div>
	<div class="lightning5dot7"></div>
	<div class="lightning5dot8"></div>
	<div class="lightning5dot9"></div>
	<div class="lightning5dot10"></div>
	<div class="lightning5dot11"></div>
	<div class="lightning5dot12"></div>
	<div class="lightning5dot13"></div>
	<div class="lightning5dot14"></div>
	<div class="lightning5dot15"></div>
	<div class="lightning5dot16"></div>
	<div class="lightning5dot17"></div>
	<div class="lightning5dot18"></div>
	<div class="lightning5dot19"></div>
	<div class="lightning5dot20"></div>
	</div>
<div class="holderlightning5">
<div class="lightning4dot1"></div>
<div class="lightning4dot2"></div>
<div class="lightning4dot3"></div>
<div class="lightning4dot4"></div>
<div class="lightning4dot5"></div>
<div class="lightning4dot6"></div>
</div>
<div class="holderlightning6">
	<div class="lightning2dot1" style="animation-delay: 2s;"></div>
	<div class="lightning2dot2" style="animation-delay: 2s;"></div>
	<div class="lightning2dot3" style="animation-delay: 2s;"></div>
	<div class="lightningbranch1dot1" style="animation-delay: 2s;"></div>
	<div class="lightningbranch1dot2" style="animation-delay: 2s;"></div>
	<div class="lightningbranch1dot3" style="animation-delay: 2s;"></div>
	<div class="lighting2dot4" style="animation-delay: 2s;"></div>
	</div>
</div>
<div class="puzzlebottom"></div>
<div class="holderprojectsoutline"></div>
<div class="holderprojects">
<div class="textpriorprojects">Prior Projects</div>
<div class="lightningboxmini">
    <div class="lightningoutlinemini">
		<div class="lightningmini"></div></div>
		<div class="lightningoutlinemini2">
		<div class="lightningmini2">
		</div></div></div>
<div class="holderoutline3"><div class="number">#3</div><div class="holder"><div class="infoproject3">Klon av HBO Max (Streamingtjänst) <a href='https://Tobbelang.github.io/webdevpub/Videospelare/public/'><button><div class="projectvisit3">BESÖK</div></button></a></div><a href='https://Tobbelang.github.io/webdevpub/Videospelare/public/'><button><div id="title"><img id="HBOLOGGA" src="hbo-max-hbo.png" alt="HBOMAX LOGGA"> <img id="HBOMAXLOGGA" src="hbo-max-max.png" alt="HBOMAX LOGGA"><h1 id="titletext">MINI</h1></div></button></a></div></div>
<div class="holderoutline2"><div class="number">#2</div><div class="holder2"><div class="infoproject2">Sökmotor gjord med Demo Dataverse API <a href='https://Tobbelang.github.io/webdevpub/Search_Engine/public/'><button><div class="projectvisit2">BESÖK</div></button></a></div><a href='https://Tobbelang.github.io/webdevpub/Search_Engine/public/'><button>	<div class="all">
	<div class="background-utemal">
		<div class="background-ute">
		</div>
		<div class="background-inne"></div>
			<div class="background-sokmotor">
			</div>
			<div class="sökmotorlogga">
			<span class="loggafont">S</span>
			<div class="search" style="transform:translate(0px, 5px)">
			<div class="search-scope2"></div>
			<div class="top-mark2"></div>
		</div>
			<div class="loggafont">KMOTOR</div>
			</div>
			<div class="osynligstart" style="animation-iteration-count:1;"> 
				<div class="transformera" style="animation-delay:11.4s">
					<div class="rotate" style="animation-delay:11.4s">	
						<div class="search-scope">
			<div class="emoji-eyes"></div>
				<div class="emoji-eyes2"></div>
				<div class="emoji-mouth"></div>
							<div class="top-mark" style="animation-delay:11.4s"></div>	
				</div>
				</div>
				</div>
			</div>
			<div class="osynligstart" style="animation-iteration-count: 2.052631578947368;">
				<div class="transformera" style="animation-delay:23.4s">
					<div class="rotate" style="animation-delay:23.4s">	
						<div class="search-scope">
			<div class="emoji-eyes"></div>
				<div class="emoji-eyes2"></div>
				<div class="emoji-mouth"></div>
							<div class="top-mark" style="animation-delay:23.4s"></div>	
				</div>
				</div>
				</div>
			</div>
			<div class="osynligstart" style="animation-iteration-count: 3.105263157894737;">
				<div class="transformera" style="animation-delay:35.4s">
					<div class="rotate" style="animation-delay:35.4s">	
						<div class="search-scope">
			<div class="emoji-eyes"></div>
				<div class="emoji-eyes2"></div>
				<div class="emoji-mouth"></div>
							<div class="top-mark" style="animation-delay:35.4s"></div>	
				</div>
				</div>
				</div>
			</div>
			<div class="osynligstart" style="animation-iteration-count: 4.157894736842104">
				<div class="transformera" style="animation-delay:47.4s">
					<div class="rotate" style="animation-delay:47.4s">	
						<div class="search-scope">
			<div class="emoji-eyes"></div>
				<div class="emoji-eyes2"></div>
				<div class="emoji-mouth"></div>
							<div class="top-mark" style="animation-delay:47.4s"></div>	
				</div>
				</div>
				</div>
			</div>
			<div class="osynligstart" style="animation-iteration-count: 5.210526315789472;">
				<div class="transformera" style="animation-delay:59.4s">
					<div class="rotate" style="animation-delay:59.4s">
						<div class="search-scope">
			<div class="emoji-eyes"></div>
				<div class="emoji-eyes2"></div>
				<div class="emoji-mouth"></div>
							<div class="top-mark" style="animation-delay:59.4s"></div>	
				</div>
				</div>
				</div>
			</div>
		</div>
		</div>
		</button></a></div></div>
<div class="holderoutline1"><div class="number">#1</div><div class="holder2"><div class="infoproject">Tre olika typer av klockor med alarm<a href='https://Tobbelang.github.io/webdevpub/clock/public/'><button><div class="projectvisit">BESÖK</div></button></a></div><a href='https://Tobbelang.github.io/webdevpub/clock/public/'><button><div class="background">
	<div class="flex">
	<div class="digitalKlockaStyling">
	<div class="digitalKlocka">
{#key hour}
<span style="display: inline-block" in:fly={{ y: -22 }}>{clock.timeHour} :</span>
{/key} 
{#key minute}
<span style="display: inline-block" in:fly={{ y: -22 }}>{clock.timeMinute} :</span>
{/key} 
{#key second}
<span style="display: inline-block" in:fly={{ y: -22 }}>{clock.timeSecond}</span>
{/key}
</div>
</div>
</div>
</div></button></a></div></div>
<a href="/aktivitet" style="color: white;"><button class="btn btn-active btn-primary" style="position: absolute; left:0%; top:0%;">Aktivitet</button></a>
</div>
</main>
<style>
main {
min-height: 100%;
height: 100%;
width: 100%;
overflow: hidden; 
}
button {
	z-index: 999999999999999;
}
.start {
	position: absolute;
	overflow-x: hidden;
	height: 100%;
	width: 100%;
	background-image: radial-gradient(circle at 16% 83%, rgba(148, 148, 148,0.06) 0%, rgba(148, 148, 148,0.06) 50%,rgba(63, 63, 63,0.06) 50%, rgba(63, 63, 63,0.06) 100%),radial-gradient(circle at 68% 87%, rgba(66, 66, 66,0.06) 0%, rgba(66, 66, 66,0.06) 50%,rgba(105, 105, 105,0.06) 50%, rgba(105, 105, 105,0.06) 100%),radial-gradient(circle at 38% 50%, rgba(123, 123, 123,0.06) 0%, rgba(123, 123, 123,0.06) 50%,rgba(172, 172, 172,0.06) 50%, rgba(172, 172, 172,0.06) 100%),linear-gradient(90deg, hsl(18,0%,1%),hsl(18,0%,1%));
	z-index: 100000000000000;

}
.startfade {
	position: absolute;
	overflow-x: hidden;
	height: 100%;
	width: 100%;
	background-image: radial-gradient(circle at 16% 83%, rgba(148, 148, 148,0.06) 0%, rgba(148, 148, 148,0.06) 50%,rgba(63, 63, 63,0.06) 50%, rgba(63, 63, 63,0.06) 100%),radial-gradient(circle at 68% 87%, rgba(66, 66, 66,0.06) 0%, rgba(66, 66, 66,0.06) 50%,rgba(105, 105, 105,0.06) 50%, rgba(105, 105, 105,0.06) 100%),radial-gradient(circle at 38% 50%, rgba(123, 123, 123,0.06) 0%, rgba(123, 123, 123,0.06) 50%,rgba(172, 172, 172,0.06) 50%, rgba(172, 172, 172,0.06) 100%),linear-gradient(90deg, hsl(18,0%,1%),hsl(18,0%,1%));
	z-index: 100000000000000;
	animation: transition 2s linear;
	opacity: 0;
}
.startbutton {
	display: flex;
	text-align: center;
	justify-content: center;
	position: absolute;
	height: 30px;
	width: 125px;
	background-color: transparent;
	border: 1px solid white;
	border-radius: 35px;
	top: 150%;
	left: 50%;
	transform:translate(-50%,-50%);
	color: white;
	z-index: 9999999999999999;
}
.startbuttontext {
	position: absolute;
	font-family: 'Charis SIL', serif;
	top: 50%;
	transform:translate(0%,-50%);
}
.startbutton:hover {
	background-color: white;
	color: black;
}
.startbutton:active {
	background-color: transparent;
	color: white;
}
@keyframes transition {
	0% {
	opacity: 1;
}
100% {
	opacity: 0;
}
}
.startbuttonfade {
	display: flex;
	text-align: center;
	justify-content: center;
	position: absolute;
	height: 40px;
	width: 125px;
	background-color: transparent;
	border: 1px solid white;
	border-radius: 35px;
	top: 150%;
	left: 50%;
	transform:translate(-50%,-50%);
	color: white;
	animation: transitiontext 2s linear;
}
.startbuttontextfade {
	position: absolute;
	font-family: 'Charis SIL', serif;
	top: 50%;
	transform:translate(0%,-50%);
}

@keyframes transitiontext {
0% {
	opacity: 1;
}
100% {
	opacity: 0;
}
}

.mainholder {
background-color: black;
position: relative;
height: 300px;
width: 80%;
margin-left: 10%;
display: flex;
justify-content: center;
align-items: center;
border: 0.01px solid white;
}
.textpriorprojects {
	display: inline-block;
		font-size: 40px;
		color: yellow;
		text-shadow: 1.5px 1.5px white;
		position: relative;
		margin-left: 50%;
		transform:translate(-50%);
}
.infoproject3 {
	text-align: center;
	justify-content: center;
	padding-top: 1%;
	position: absolute;
	height: 100%;
	width: 30%;
	background-color: rgba(255, 255, 255, 0.371);
	border-radius: 10px;
	box-shadow: 1px 1px 5px black;
	left: 100%;
	transform:translate(-100%,0%);
	z-index: 10000000;
	color: white;
	font-family: 'joan', sans-serif;
}
.projectvisit3 {
	text-align: center;
	padding-top: 0.7%;
	position: absolute;
	height: 25px;
	max-width: 100px;
	width: 80%;
	border-radius: 5px;
	top: 80%;
	background-color: rgba(255,0,0,0.75);
	color: white;
	font-family: 'DM Sans', sans-serif;
	font-size: 0.9em;
	left: 50%;
	transform:translate(-50%,0%);
}
.infoproject2 {
	text-align: center;
	justify-content: center;
	padding-top: 1%;
	position: absolute;
	height: 100%;
	width: 30%;
	background-color: rgba(255, 255, 255, 0.371);
	border-radius: 10px;
	box-shadow: 1px 1px 5px black;
	left: 100%;
	transform:translate(-100%,0%);
	z-index: 10000000;
	color: white;
	font-family: 'joan', sans-serif;
}
.projectvisit2 {
	text-align: center;
	padding-top: 0.7%;
	position: absolute;
	height: 25px;
	max-width: 100px;
	width: 80%;
	border-radius: 5px;
	top: 80%;
	background-color: rgba(255,0,0,0.75);
	color: white;
	font-family: 'DM Sans', sans-serif;
	font-size: 0.9em;
	left: 50%;
	transform:translate(-50%,0%);
}
.infoproject {
	text-align: center;
	justify-content: center;
	padding-top: 1%;
	position: absolute;
	height: 100%;
	width: 30%;
	background-color: rgba(255, 255, 255, 0.371);
	border-radius: 10px;
	box-shadow: 1px 1px 5px black;
	left: 100%;
	transform:translate(-100%,0%);
	z-index: 10000000;
	color: white;
	font-family: 'joan', sans-serif;
}
.projectvisit {
	text-align: center;
	padding-top: 0.7%;
	position: absolute;
	height: 25px;
	max-width: 100px;
	width: 80%;
	border-radius: 5px;
	top: 80%;
	background-color: rgba(255,0,0,0.75);
	color: white;
	font-family: 'DM Sans', sans-serif;
	font-size: 0.9em;
	left: 50%;
	transform:translate(-50%,0%);
}
.lightningoutlinemini {
	position: absolute;
  width: 0; 
  height: 0; 
  border-left: 4.5px solid transparent;
  border-right: 4.5px solid transparent;
  border-bottom:  24.45x solid white;
	z-index: 1;
  animation: lightning-shadowmini 3s ease infinite;
  transform:rotate(10deg);
  top: -6px;
  left: 3px;
    }
    @keyframes lightning-shadowmini {
        0% { 
        border-bottom:  24.45px solid white;
    }
    50% { 
        border-bottom:  24.45px solid yellow;
    }
    100% {
        border-bottom:  24.45px solid white; 
    }
}
.lightningmini {
	position: absolute;
  width: 0; 
  height: 0; 
  border-left: 4.5px solid transparent;
  border-right: 4.5px solid transparent;
  border-bottom: 24.45px solid rgb(163, 163, 15);
  z-index: 2;
  left: -6px;
}
.lightningmini2 {
	position: absolute;
  width: 0; 
  height: 0; 
  border-left: 4.5px solid transparent;
  border-right: 4.5px solid transparent;
  border-bottom: 24.45px solid  rgb(163, 163, 15);
  z-index: 2;
  left: -3px;
}
.lightningoutlinemini2 {
	position: absolute;
  width: 0; 
  height: 0; 
  border-left: 4.5px solid transparent;
  border-right: 4.5px solid transparent;
  border-bottom: 24.45px solid white;
	z-index: 1;
  animation: lightning-shadowmini 3s ease infinite;
  transform:rotate(190deg);
  top: 5px;
  right: 1.8px;
}
.lightningboxmini {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 15px;
  width: 17.6px;
  left: 50%;
  transform:translate(-50%, -550%);
  z-index: 100000;
}

.holderprojects {
	background-color: black;
	position: relative;
	border: 0.01px solid white;
	width: 80%;
	margin-left: 10%;
	height: 1600px;
}
.lightnings * {
	box-shadow: 0px 0px 3px rgb(243, 251, 164);
}
.lightnings {
	width: 80%;
	margin-left: 10%;
	height: 200px;
	background-color: transparent;
	position: relative;
}
.holderlightning1 {
position: absolute;
height: 100%;
width: 100%;
left: 1%;
box-shadow: none;
}
.holderlightning2 {
position: absolute;
height: 100%;
width: 100%;
left: 8%;
box-shadow: none;
}
.holderlightning3 {
position: absolute;
height: 100%;
width: 100%;
left: 17%;
box-shadow: none;
}
.holderlightning4 {
position: absolute;
height: 100%;
width: 100%;
left: 0%;
box-shadow: none;
}
.holderlightning5 {
position: absolute;
height: 100%;
width: 100%;
left: 48%;
box-shadow: none;
}
.holderlightning6 {
position: absolute;
height: 100%;
width: 100%;
left: 85%;
box-shadow: none;
}
.lightningbranch1dot1 {
	position: absolute;
	height: 0%;
	width: 0.1%;
	top: 40px;
	left: 180px;
	transform:rotate(320deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffectbranch1 7s linear infinite;
}
@keyframes lightningeffectbranch1 {
	0% {
		height: 0%;
	}
	15% {
		height: 0%;
	}
	30% {
		height: 20%;
	}
	100% {
		height: 20%;
	} 
}
.lightningbranch1dot2 {
	position: absolute;
	height: 0%;
	width: 0.1%;
	top: 47px;
	left: 186px;
	transform:rotate(260deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffectbranch2 7s linear infinite;
}
@keyframes lightningeffectbranch2 {
	0% {
		height: 0%;
	}
	0% {
		height: 0%;
	}
	20% {
		height: 0%;
	}
	33.3% {
		height: 10%;
	}
	100% {
		height: 10%;
	} 
}
.lightningbranch1dot3 {
	position: absolute;
	height: 0%;
	width: 0.1%;
	top: 54px;
	left: 192px;
	transform:rotate(2deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffectbranch3 7s linear infinite;
	
}
@keyframes lightningeffectbranch3 {
	0% {
		height: 0%;
	}
	0% {
		height: 0%;
	}
	22% {
		height: 0%;
	}
	33.3% {
		height: 10%;
	}
	100% {
		height: 10%;
	} 
}
.lightningbranch2dot1 {
	position: absolute;
	height: 20%;
	width: 0.1%;
	left: 286px;
	top: 60px;
	transform:rotate(30deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffectbranch4 12s linear infinite;
}
@keyframes lightningeffectbranch4 {
	0% {
		height: 0%;
	}
	0% {
		height: 0%;
	}
	35% {
		height: 0%;
	}
	46.3% {
		height: 20%;
	}
	100% {
		height: 20%;
	} 
}
.lightningbranch2dot2 {
	position: absolute;
	height: 10%;
	width: 0.1%;
	left: 285px;
	top: 62px;
	transform:rotate(60deg);
	transform-origin: top;
	background-color: yellow;
	animation: lightningeffectbranch5 12s linear infinite;
}
@keyframes lightningeffectbranch5 {
	0% {
		height: 0%;
	}
	0% {
		height: 0%;
	}
	36% {
		height: 0%;
	}
	46.3% {
		height: 10%;
	}
	100% {
		height: 10%;
	} 
}
.lightningbranch2dot3 {
	position: absolute;
	height: 10%;
	width: 0.14%;
	left: 280px;
	top: 70px;
	transform-origin: top;
	background-color: yellow;
	animation: lightningeffectbranch6 12s linear infinite;
}
@keyframes lightningeffectbranch6 {
	0% {
		height: 0%;
	}
	0% {
		height: 0%;
	}
	38% {
		height: 0%;
	}
	48% {
		height: 10%;
	}
	100% {
		height: 10%;
	} 
}
.lightningbranch2dot4 {
	position: absolute;
	height: 10%;
	width: 0.1%;
	left: 274px;
	top: 81px;
	transform-origin: top;
	transform:rotate(60deg);
	background-color: yellow;
	animation: lightningeffectbranch7 12s linear infinite;
}
@keyframes lightningeffectbranch7 {
	0% {
		height: 0%;
	}
	0% {
		height: 0%;
	}
	42% {
		height: 0%;
	}
	50% {
		height: 10%;
	}
	100% {
		height: 10%;
	} 
}
.lightningbranch2dot5 {
	position: absolute;
	height: 15%;
	width: 0.1%;
	left: 266.46px;
	top: 94px;
	transform-origin: top;
	transform:rotate(7deg);
	background-color: yellow;
	animation: lightningeffectbranch8 12s linear infinite;
}
@keyframes lightningeffectbranch8 {
	0% {
		height: 0%;
	}
	0% {
		height: 0%;
	}
	46% {
		height: 0%;
	}
	55% {
		height: 15%;
	}
	100% {
		height: 15%;
	} 
}
.lightningbranch2dot6 {
	position: absolute;
	height: 5%;
	width: 0.14%;
	left: 312px;
	top: 171px;
	transform-origin: top;
	background-color: yellow;
	transform:rotate(280deg);
	animation: lightningeffectbranch9 12s linear infinite;
}
@keyframes lightningeffectbranch9 {
	0% {
		height: 0%;
	}
	0% {
		height: 0%;
	}
	85% {
		height: 0%;
	}
	90% {
		height: 5%;
	}
	100% {
		height: 5%;
	} 
}
.lightningbranch2dot7 {
	position: absolute;
	height: 15%;
	width: 0.1%;
	left: 303px;
	top: 163px;
	transform-origin: top;
	transform:rotate(310deg);
	background-color: yellow;
	animation: lightningeffectbranch10 12s linear infinite;
}
@keyframes lightningeffectbranch10 {
	0% {
		height: 0%;
	}
	0% {
		height: 0%;
	}
	79% {
		height: 0%;
	}
	93% {
		height: 15%;
	}
	100% {
		height: 15%;
	} 
}
.lightningbranch2dot8 {
	position: absolute;
	height: 15%;
	width: 0.13%;
	left: 313px;
	top: 172px;
	transform-origin: top;
	background-color: yellow;
	animation: lightningeffectbranch11 12s linear infinite;
}
@keyframes lightningeffectbranch11 {
	0% {
		height: 0%;
	}
	0% {
		height: 0%;
	}
	85% {
		height: 0%;
	}
	90% {
		height: 5%;
	}
	100% {
		height: 5%;
	} 
}
.lightning1dot1 {
	position: absolute;
	height: 43.66%;
	width: 0.1%;
	left: 10px;
	transform:rotate(320deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffect1 10s linear infinite;
}
.lightning1dot2 {
	position: absolute;
	height: 36%;
	width: 0.1%;
	top: 33.3%;
	left: 66px;
	transform:rotate(10deg);
	background-color: yellow;
	animation: lightningeffect2 10s linear infinite;
	transform-origin: top;
}
@keyframes lightningeffect1 {
	0% {
		height: 0%;
		left: 10px;
	}
	33.3% {
		height: 43.66%;
	}
	100% {
		height: 43.66%;
	} 
}
@keyframes lightningeffect2 {
	0% {
		height: 0%;
		left: 66px;
	}
	33% {
		height: 0%;
		left: 66px;
	}
	66.6% {
		height: 36%;
	}
}
.lightning1dot3 {
	position: absolute;
	height: 42%;
	width: 0.1%;
	top: 68.6%;
	left: 53px;
	background-color: yellow;
	transform-origin: top;
	transform:rotate(320deg);;
	animation: lightningeffect3 10s linear infinite;

}
@keyframes lightningeffect3 {
	0% {
		height: 0%;
		left: 53px;
	}
	66.6% {
		height: 0%;
	}
}

.lightning2dot1 {
	position: absolute;
	height: 0%;
	width: 0.1%;
	left: 186.5px;
	transform:rotate(10deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffect4 7s linear infinite;

}
@keyframes lightningeffect4 {
	0% {
		height: 0%;
		left: 186.5px;
	}
	25% {
		height: 36%;

	}
	100% {
		height: 36%;
	}
}
.lightning2dot2 {
	position: absolute;
	height: 0%;
	width: 0.1%;
	left: 174.46px;
	top: 70px;
	transform:rotate(30deg);
	transform-origin: top;
	background-color: yellow;
	animation: lightningeffect5 7s linear infinite;
}
@keyframes lightningeffect5 {
	0% {
		height: 0%;
	}
	25% {
		height: 0%;
		left: 174.46px;
	}
	32.5% {
		height: 10%;
	}
	100% {
		height: 10%;
	}
}
.lightning2dot3 {
	position: absolute;
	height: 0%;
	width: 0.1%;
	left: 165px;
	top: 87px;
	transform:rotate(340deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffect6 7s linear infinite;

}
@keyframes lightningeffect6 {
	0% {
		height: 0%;
	}
	25% {
		height: 0%;
		left: 165px;
	}
	32.5% {
		height: 0%;
	}
	70% {
		height: 35.5%;

	}
	100% {
		height: 36%;
	}
}
.lighting2dot4 {
	position: absolute;
	height: 0%;
	width: 0.1%;
	left: 189.5px;
	top: 153px;
	transform:rotate(25deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffect7 7s linear infinite;

}
@keyframes lightningeffect7 {
	0% {
		height: 0%;
	}
	25% {
		height: 0%;
	}
	32.5% {
		height: 0%;
	}
	70% {
		height: 0%;
	}
	
	100% {
		height: 26%;
	}
}
.lightning3dot1 {
	position: absolute;
	height: 21%;
	width: 0.1%;
	left: 300px;
	transform:rotate(35deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect8 12s linear infinite;

}
@keyframes lightningeffect8 {
	0% {
		height: 0%;
	}
	25% {
		height: 21%;
	}
	100% {
		height: 21%;
	}
}
.lightning3dot2 {
	position: absolute;
	height: 55%;
	width: 0.1%;
	left: 276px;
	top: 33px;
	transform:rotate(340deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffect9 12s linear infinite;

}
@keyframes lightningeffect9 {
	0% {
		height: 0%;
	}
	25% {
		height: 0%;
	}
	65% {
		height: 55%;
	}
	100% {
		height: 55%;
	}
}
.lightning3dot3 {
	position: absolute;
	height: 35%;
	width: 0.1%;
	left: 313.9px;
	top: 135px;
	transform:rotate(20deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffect10 12s linear infinite;

}
@keyframes lightningeffect10 {
	0% {
		height: 0%;
	}
	25% {
		height: 0%;
	}
	65% {
		height: 0%;
	}
	100% {
		height: 35%;
	}
}
.lightning4dot1 {
	position: absolute;
	height: 43.66%;
	width: 0.1%;
	left: 360px;
	transform:rotate(320deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffect11 6s linear infinite;

}
@keyframes lightningeffect11 {
	0% {
		height: 0%;
	}
	40% {
		height: 43.66%;
	}
}
.lightning4dot2 {
	position: absolute;
	height: 13.66%;
	top: 33.36%;
	width: 0.1%;
	left: 416px;
	transform:rotate(40deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffect12 6s linear infinite;

}
@keyframes lightningeffect12 {
	0% {
		height: 0%;
	}
	40% {
		height: 0%;
	}
	50% {
		height: 13.66%;
	}
}
.lightning4dot3 {
	position: absolute;
	height: 13.66%;
	top: 43.8%;
	width: 0.1%;
	left: 398px;
	transform:rotate(320deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffect13 6s linear infinite;

}
@keyframes lightningeffect13 {
	0% {
		height: 0%;
	}
	50% {
		height: 0%;
	}
	60% {
		height: 13.66%;
	}
}
.lightning4dot4 {
	position: absolute;
	height: 13.66%;
	top: 54%;
	width: 0.1%;
	left: 415px;
	transform:rotate(40deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffect14 6s linear infinite;

}
@keyframes lightningeffect14 {
	0% {
		height: 0%;
	}
	60% {
		height: 0%;
	}
	70% {
		height: 13.66%;
	}
}
.lightning4dot5 {
	position: absolute;
	height: 5.66%;
	top: 64.2%;
	width: 0.1%;
	left: 398px;
	transform:rotate(320deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffect15 6s linear infinite;

}
@keyframes lightningeffect15 {
	0% {
		height: 0%;
	}
	70% {
		height: 0%;
	}
	75% {
		height: 5.66%;
	}
}
.lightning4dot6 {
	position: absolute;
	height: 42%;
	top: 68%;
	width: 0.1%;
	left: 405px;
	transform:rotate(40deg);
	background-color: yellow;
	transform-origin: top;
	animation: lightningeffect16 6s linear infinite;

}
@keyframes lightningeffect16 {
	0% {
		height: 0%;
	}
	75% {
		height: 0%;
	}
	100% {
		height: 42%;
	}
}
.lightning5dot1 {
	position: absolute;
	height: 21%;
	width: 0.1%;
	left: 790px;
	transform:rotate(13deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect17 8s linear infinite;

}
@keyframes lightningeffect17 {
	0% {
		height: 0%;
	}
	20% {
		height: 21%;
	}
	100% {
		height: 21%;
	}
}
.lightning5dot2 {
	position: absolute;
	height: 80%;
	width: 0.1%;
	left: 781px;
	top: 40px;
	transform:rotate(40deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect18 8s linear infinite;

}
@keyframes lightningeffect18 {
	0% {
		height: 0%;
	}
	20% {
		height: 0%;
	}
	100% {
		height: 80%;
	}
}
.lightning5dot3 {
	position: absolute;
	height: 20%;
	width: 0.1%;
	left: 722px;
	top: 110px;
	transform:rotate(60deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect19 8s linear infinite;

}
@keyframes lightningeffect19 {
	0% {
		height: 0%;
	}
	66% {
		height: 0%;
	}
	81% {
		height: 20%;
	}
}
.lightning5dot4 {
	position: absolute;
	height: 35%;
	width: 0.1%;
	left: 755px;
	top: 71px;
	transform: rotate(350deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect20 8s linear infinite;
}
@keyframes lightningeffect20 {
	0% {
		height: 0%;
	}
	42% {
		height: 0%;
	}
	70% {
		height: 35%;
	}
}
.lightning5dot5 {
	position: absolute;
	height: 15%;
	width: 0.1%;
	left: 760px;
	top: 101px;
	transform: rotate(30deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect21 8s linear infinite;
}
@keyframes lightningeffect21 {
	0% {
		height: 0%;
	}
	55% {
		height: 0%;
	}
	70% {
		height: 15%;
	}
}
.lightning5dot6 {
	position: absolute;
	height: 15%;
	width: 0.1%;
	left: 760px;
	top: 101px;
	transform: rotate(300deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect22 8s linear infinite;
}
@keyframes lightningeffect22 {
	0% {
		height: 0%;
	}
	55% {
		height: 0%;
	}
	70% {
		height: 15%;
	}
}
.lightning5dot7 {
	position: absolute;
	height: 8%;
	width: 0.1%;
	left: 745.5px;
	top: 126px;
	transform: rotate(1deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect23 8s linear infinite;
}
@keyframes lightningeffect23 {
	0% {
		height: 0%;
	}
	69% {
		height: 0%;
	}
	80% {
		height: 8%;
	}
}
.lightning5dot8 {
	position: absolute;
	height: 8%;
	width: 0.1%;
	left: 745.5px;
	top: 126px;
	transform: rotate(50deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect24 8s linear infinite;
}
@keyframes lightningeffect24 {
	0% {
		height: 0%;
	}
	69% {
		height: 0%;
	}
	80% {
		height: 8%;
	}
}
.lightning5dot9 {
	position: absolute;
	height: 20%;
	width: 0.1%;
	left: 767px;
	top: 139px;
	transform: rotate(50deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect25 8s linear infinite;
}
	@keyframes lightningeffect25 {
	0% {
		height: 0%;
	}
	69% {
		height: 0%;
	}
	80% {
		height: 20%;
	}
	100% {
		height: 20%;
	}
}
.lightning5dot10 {
	position: absolute;
	height: 43.5%;
	width: 0.1%;
	left: 767px;
	top: 139px;
	transform: rotate(315deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect26 8s linear infinite;
}
	@keyframes lightningeffect26 {
	0% {
		height: 0%;
	}
	69% {
		height: 0%;
	}
	100% {
		height: 43.5%;
	}
}
.lightning5dot11 {
	position: absolute;
	height: 20%;
	width: 0.1%;
	left: 788px;
	top: 160px;
	transform: rotate(300deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect27 8s linear infinite;
}
	@keyframes lightningeffect27 {
	0% {
		height: 0%;
	}
	80% {
		height: 0%;
	}
	100% {
		height: 20%;
	}
}
.lightning5dot12 {
	position: absolute;
	height: 13%;
	width: 0.1%;
	left: 797px;
	top: 165px;
	transform: rotate(270deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect28 8s linear infinite;
}
	@keyframes lightningeffect28 {
	0% {
		height: 0%;
	}
	88% {
		height: 0%;
	}
	100% {
		height: 13%;
	}
}
.lightning5dot13 {
	position: absolute;
	height: 10%;
	width: 0.1%;
	left: 807px;
	top: 180px;
	transform:rotate(10deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect29 8s linear infinite;
}
	@keyframes lightningeffect29 {
	0% {
		height: 0%;
	}
	91% {
		height: 0%;
	}
	100% {
		height: 10%;
	}
}
.lightning5dot14 {
	position: absolute;
	height: 10%;
	width: 0.1%;
	left: 722px;
	top: 110px;
	transform:rotate(120deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect30 8s linear infinite;
}
	@keyframes lightningeffect30 {
	0% {
		height: 0%;
	}
	65% {
		height: 0%;
	}
	75% {
		height: 10%;
	}
}
.lightning5dot15 {
	position: absolute;
	height: 10%;
	width: 0.1%;
	left: 687.5px;
	top: 129.5px;
	transform:rotate(120deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect31 8s linear infinite;
}
	@keyframes lightningeffect31 {
	0% {
		height: 0%;
	}
	80% {
		height: 0%;
	}
	90% {
		height: 10%;
	}
	100% {
		height: 10%;
	}
}
.lightning5dot16 {
	position: absolute;
	height: 10%;
	width: 0.1%;
	left: 687.5px;
	top: 129.5px;
	transform:rotate(30deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect32 8s linear infinite;
}
	@keyframes lightningeffect32 {
	0% {
		height: 0%;
	}
	80% {
		height: 0%;
	}
	90% {
		height: 10%;
	}
	100% {
		height: 10%;
	}
}
.lightning6dot1 {
	position: absolute;
	height: 10%;
	width: 0.1%;
	left: 700.5px;
	top: 129.5px;
	transform:rotate(30deg);
	background-color: yellow;	
	transform-origin: top;
	animation: lightningeffect32 8s linear infinite;
}
.puzzletop {
	background-color: rgb(32,42,68);;
	position: absolute;
	width: 10%;
	height: 40px;
	z-index: 9999;
	left: 50%;
	transform:translate(-50%, -39px);
	border-radius: 20px 20px 0px 0px;
	border-top: 0.01px solid white;
	border-left: 0.01px solid white;
	border-right: 0.01px solid white;
}
.puzzlebottom {
	background-color: black;
	align-self: center;
	position: absolute;
	width: 10%;
	height: 40px;
	z-index: 9999;
	left: 50%;
	transform:translate(-50%, -39px);
	border-radius: 20px 20px 0px 0px;
	border-top: 0.01px solid white;
	border-left: 0.01px solid white;
	border-right: 0.01px solid white;
}
.startportfolio {
	position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
	height: 50%;
	width: 100%;
	color: transparent;
}


/* top: 16%; */
.startportfoliostart2 {
	position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
	height: 50%;
	width: 100%;
	top: 100%;
	left: 0px;
	opacity: 0.4;

}
.startportfoliostart1 {
	position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
	height: 50%;
	width: 100%;
	top: 100%;
	left: 0px;
	z-index: 1000000;

}
.startportfoliostartfade2 {
	position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
	width: 100%;
	top: 100%;
	left: 0px;
	animation: transformlogo2 2s ease infinite;
}
.startportfoliostartfade1 {
	position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
	z-index: 1000000;
	opacity: 1;
	height: 50%;
	width: 100%;
	animation: transformlogo1 2s ease infinite;
}
@keyframes transformlogo2 {
0% {
	top: 100%;
	left: 0px;
	opacity: 0.4;
}
100% {
	top: 25%;
	left: 327px;
	opacity: 1;
}
}
@keyframes transformlogo1 {
0% {
	top: 100%;
	left: 0px;
}

100% {
	top: 25%;
	left: -384px;
}
}
.startportfolio::before {
position: absolute;
content: 'Welcome to';
font-family: 'Barlow Condensed', sans-serif;
font-size: 1.3em;
justify-content: center;
align-items: center;
left: 50%;
top: 0%;
transform: translate(-50%, -60%);
-ms-transform: translate(-50%, -60%);
}
h1 {
  position: relative;
padding: 0px;
margin: 0px;
font-family: 'Teko', sans-serif;
font-size: 8em;
text-shadow: 2px 2px white;
color: rgb(192, 200, 201);
}
.lightningoutline {
	position: absolute;
  width: 0; 
  height: 0; 
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 81.5px solid white;
	z-index: 1;
  animation: lightning-shadow 3s ease infinite;
  transform:rotate(10deg);
  top: -20px;
  left: 10px;
    }
    @keyframes lightning-shadow {
        0% { 
        border-bottom: 81.5px solid white;
    }
    50% { 
        border-bottom: 81.5px solid yellow;
    }
    100% {
        border-bottom: 81.5px solid white; 
    }
}
.lightning {
	position: absolute;
  width: 0; 
  height: 0; 
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 80px solid rgb(163, 163, 15);
  z-index: 2;
  left: -20px;
}
.lightning2 {
	position: absolute;
  width: 0; 
  height: 0; 
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 80px solid rgb(163, 163, 15);
  z-index: 2;
  left: -10px;
}
.lightningoutline2 {
	position: absolute;
  width: 0; 
  height: 0; 
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 81.5px solid white;
	z-index: 1;
  animation: lightning-shadow 3s ease infinite;
  transform:rotate(190deg);
  top: 20px;
  right: 6px;
}
.lightningbox {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100px;
  width: 58px;
  border: 1px solid transparent;
}
.number {
	position: absolute;
	font-family: 'Spline Sans Mono', monospace;
	font-size: 65px;
	color: white;
	text-shadow: 3px 2px black;
	z-index: 100000000;
	transform:translate(-15px,-30px);
}
.holder {
	position: absolute;
	width: 90%;
	height: 80%;
	background-color: rgba(233, 233, 90, 0.529);
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	animation: pulse 4s linear infinite;
	z-index: 1000;
}
@keyframes pulse {
	0% {
		background-color: rgba(233, 233, 90, 0.529);
	}
	50% {
		background-color: rgba(255, 255, 0, 0.603);
	}
	100% {
		background-color: rgba(233, 233, 90, 0.529);
	}
}
.holderoutline3 {
	position: relative;
	width: 95%;
	height: 210px;
	background-color: rgba(233, 233, 90, 0.297);
	margin-left: 50%;
	border-radius: 10px;
	transform:translate(-50%, 20%);
	
}
.holderoutline3:hover {
	background-color: rgba(251, 251, 36, 0.386);
	width: 61.5%;
	height: 215.75px;
	animation: pulseoutline3 4s ease infinite;
}
.holder2 {
	position: absolute;
	width: 90%;
	height: 80%;
	background-color: rgba(233, 233, 90, 0.529);
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	animation: pulse 4s linear infinite;
	z-index: 1000;
}
.holderoutline2 {
	position: relative;
	width: 95%;
	height: 252px;
	background-color: rgba(233, 233, 90, 0.297);
	margin-left: 50%;
	border-radius: 10px;
	margin-top: 5%;
	transform:translate(-50%, 20%);	
}
.holderoutline2:hover {
	background-color: rgba(251, 251, 36, 0.386);
	width: 61.5%;
	height: 258.9px;
	animation: pulseoutline2 4s ease infinite;
}
.holderoutline1 {
	position: relative;
	width: 95%;
	height: 252px;
	background-color: rgba(233, 233, 90, 0.297);
	margin-left: 50%;
	border-radius: 10px;
	margin-top: 5%;
	transform:translate(-50%, 20%);	
}
.holderoutline1:hover {
	background-color: rgba(251, 251, 36, 0.386);
	width: 96%;
	height: 254px;
	animation: pulseoutline1 4s ease infinite;
}
@keyframes pulseoutline3 {
	0% {
	background-color: rgba(233, 233, 90, 0.297);
	width: 95%;
	height: 210px;
	}
	50% {
		background-color: rgba(251, 251, 36, 0.386);
		width: 96%;
		height: 213px;
	}
	100% {
		background-color: rgba(233, 233, 90, 0.297);
		width: 95%;
		height: 210px;
	}
}
@keyframes pulseoutline2 {
	0% {
	background-color: rgba(233, 233, 90, 0.297);
	width: 95%;
	height: 252px;
	}
	50% {
		background-color: rgba(251, 251, 36, 0.386);
		width: 96%;
		height: 253.5px;
	}
	100% {
		background-color: rgba(233, 233, 90, 0.297);
		width: 95%;
		height: 252px;
	}
}
@keyframes pulseoutline1 {
	0% {
	background-color: rgba(233, 233, 90, 0.297);
	width: 95%;
	height: 252px;
	}
	50% {
		background-color: rgba(251, 251, 36, 0.386);
		width: 96%;
		height: 253.5px;
	}
	100% {
		background-color: rgba(233, 233, 90, 0.297);
		width: 95%;
		height: 252px;
	}
}

#title {
display: flex;
position: absolute;
align-items: center;
width: 340px;
height: 125px;
background-color: rgba(210, 232, 235, 0.3);
border-bottom: 3px solid silver;
border-right: 3px solid silver;
border-radius: 30px;
font-size: 2.4em;
left: 5%;
}
#titletext {
font-size: 1.3em;
font-family: 'Kanit', sans-serif;
font-weight: bold; 
color: rgb(0, 153, 255);
margin-top: 5%;
left: 11%;
position: relative;
text-shadow:2px 2px rgb(110, 191, 244);
z-index: 2;
}
#title:hover {
background-image: linear-gradient(145deg, rgba(247,60,245,1) 0%, rgba(9,9,121,1) 33%, rgba(6,70,143,1) 51%, rgba(191,4,163,1) 68%, rgba(184,4,151,1) 100%);;
}
#HBOLOGGA {
height: 165px;
width: 150px;
position: relative;
margin-left: 2%;
margin-top: 6%;
}
#HBOLOGGA:hover {
box-shadow: 0px 0px 0px 0px;
position: relative;
}
#HBOMAXLOGGA {
height: 165px;
width: 170px;
position: absolute;
margin-left: 46%;
filter:blur(4px);
margin-top: 10px;
z-index: 1;
}
#HBOMAXLOGGA:hover {
box-shadow: 0px 0px 0px 0px;
}		
.all * {
	margin: auto;
	display: flex;
	}
		.sökmotorlogga {
        animation: text-shadow 6s ease infinite;
				position: absolute;
    }
    @keyframes text-shadow {
        0% { 
        text-shadow: 2px 2px 4px blue;
    }
    33.3% { 
        text-shadow: 2px 2px 4px red;
    }
    66.6% {
        text-shadow: 2px 2px 4px purple; 
    }
    100% {
        text-shadow: 2px 2px 4px blue; 
    }
}
    .loggafont {
        font-family: 'Oswald', sans-serif;
        color: black;
    }
		.background-utemal {
		width: 600px;
		height: 300px;
		border: 1px solid transparent;
		left: 5%;
		position: absolute;
		align-items: center;
		
	}
	.top-mark2 {
		width: 5.075px;
		height: 81px;
		background-color: black;
		transform: translate(87px, 50px)rotate(135deg);
        position: absolute;
	}
	.top-mark2::after {
		content: '';
		height:10px;
		width: 10px;
		background-color: black;
		position: absolute;
		border-radius: 50%;
		right: -3px;
		top: 90%;
		animation: droppe 12s linear infinite;
	}
	@keyframes droppe {
		0% {
			background-color: black;
		}
		10% {
			background-color: rgba(255,255,255,0.0);
		}
		20% {
			background-color: black;
		}
		30% {
			background-color: rgba(255,255,255,0.0);
		}
		40% {
			background-color: black;
		}
		50% {
			background-color: rgba(255,255,255,0.0);
		}
		60% {
			background-color: black;
		}
		70% {
			background-color: rgba(255,255,255,0.0);
			top: -1%;
			right: -3px;
		}
		80% {
			background-color: black;
		}
		90% {
			background-color: black;
		}
		95% {
			top: -40%;
		right: -24px;
		}
		100% {
			top: -40%;
		right: -24px;
		}
	}
	.search-scope2 {
		width: 68px;
		height: 68px;
		background-color: transparent;
		border: 3px solid black;
		border-radius: 50%;
	}
	.background-inne {
		width: 80%;
		height: 60%;
		border: 1px solid black;
		border-radius: 50%;
		position: absolute;
		
	}
	.background-sokmotor {
		width: 100%;
		height: 100%;
		border: 60px solid rgba(255,255,255,0.2);
		border-radius: 50%;
		position: absolute;

	}
	.background-ute {
		width: 100%;
		height: 100%;
		border: 1px solid black;
		border-radius: 50%;
		position: absolute;
		align-items: center;
		
	}
		.search-scope {
		width: 25px;
		height: 25px;
		background-color: transparent;
		border: 1.5px solid black;
		border-radius: 50%;
	} 
		.top-mark {
		width: 6%;
		height: 85%;
		background-color: black;
		transform: translate(30px, 20px)rotate(135deg);
     position: absolute;
	 animation: längd 60s linear infinite;
	}
	@keyframes längd {
		0% {
			width: 6%;
		height: 0%;
		transform: translate(21px, 20px)rotate(135deg);
		}
		1% {
			width: 6%;
		height: 85%;
		transform: translate(30px, 20px)rotate(135deg);
		}
		99% {
			width: 6%;
		height: 85%;
		transform: translate(30px, 20px)rotate(135deg);
		}
		100% {
			width: 6%;
		height: 0%;
		transform: translate(21px, 20px)rotate(135deg);
		
		}
	}
	.emoji-eyes {
		height: 6px;
		width: 1px;
		background-color: black;
		position: absolute;	
		transform:translate(8px, 5px);
	}
	.emoji-eyes2 {
		height: 6px;
		width: 1px;
		background-color: black;
		position: absolute;	
		transform:translate(16px, 5px);
	}
	.emoji-mouth {
    width: 10px;
    height: 5px;
    background-color: transparent;
    border-bottom-left-radius: 110px;
    border-bottom-right-radius: 110px;
    border: 1.5px solid black;
    border-top: 0px;
		position: absolute;
		transform:translate(5.5px, 14px)
}
	.osynligstart {
		animation-name: osynlig;
  animation-duration: 11.4s;
	}
	@keyframes osynlig {
		0% {
			visibility: hidden;
		}
		100% {
			visibility: hidden;
		}
	}
	.rotate {
		animation: rotera360 60s linear infinite;
		position: absolute;
	}
	
	.transformera {
	animation: transformera 60s linear infinite;
	position: absolute;
	left: 55%;
	top: 96%;
	transform:rotate(150deg);
	}
 	@keyframes transformera {
		0% {
			left: 51.1%;
			top: 93.7%;
		}
		1% {
			left: 55%;
			top: 96%;
		}
		2% {
			left: 58%;
			top: 97%;
		}
	12.5% {
			left: 85%;
			top: 85%;
		}
		25% {
			left: 100.6%;
			top: 50%;
		}
	37.5% {
			left: 95%;
			top: 30%;
	}
		50% {
			left: 50%;
			top: 11%;
	}
		62.5% {
			left: 17.5%;
			top: 27.5%;
		}
		67.5% {
			left: 12.5%;
			top: 30%;
		}
		75% {
			left: 6%;
			top: 45%;
		}
		87.5% {
			left: 20%;
			top: 84%;
		}
		99% {
				left: 41.5%;
				top: 86%;
		}
		100% {
			left: 45.7%;
			top: 82.7%;
		}
} 
	@keyframes rotera360 {
		0% {
			transform:rotate(0deg);
		}
		5% {
			transform:rotate(0deg);
		}
		12.5% {
			transform:rotate(35deg);
		}
		25% {
			transform:rotate(-90deg);
		}
	50% {
	transform:rotate(-240deg);
	}
		55% {
			transform:rotate(-174deg);
		}
		67.5% {
			transform:rotate(-253deg);
		}
		75% {
			transform:rotate(-90deg);
		}
		90% {
			transform:rotate(-190deg);
		}
		99% {
			transform:rotate(-218deg);
		}
		100% {
			transform:rotate(-218deg);
			
		}
	}
	@media screen and (max-width: 20000px) {
		.background-utemal {
			width: 337.5px;
			height: 168.75px;
		}
		.sökmotorlogga{
			transform: translate(61.875px);
		}
		.search-scope {
			width: 14.0625px;
			height: 14.0625px;
			border: 0.84375px solid black;
		}
		.top-mark {
			transform: translate(12.875px, 11.25px);
			background-color: black;
		}
	@keyframes längd {
		0% {
			width: 6%;
		height: 0%;
		transform: translate(12.125px, 9.25px)rotate(135deg);
		}
		1% {
			width: 6%;
		height: 85%;
		transform: translate(14.875px, 9.25px)rotate(135deg);
		}
		99% {
			width: 6%;
		height: 85%;
		transform: translate(14.875px, 9.25px)rotate(135deg);
		}
		100% {
			width: 6%;
		height: 0%;
		transform: translate(10.125px, 9.25px)rotate(135deg);
		
		}
	}
		.top-mark2::after {
		content: '';
		height:5.625px;
		width: 5.625px;
		right: -1.6875px;
	}
	@keyframes droppe {
		0% {
			background-color: black;
		}
		10% {
			background-color: rgba(255,255,255,0.0);
		}
		20% {
			background-color: black;
		}
		30% {
			background-color: rgba(255,255,255,0.0);
		}
		40% {
			background-color: black;
		}
		50% {
			background-color: rgba(255,255,255,0.0);
		}
		60% {
			background-color: black;
		}
		70% {
			background-color: rgba(255,255,255,0.0);
			top: -1%;
			right: -1.6875px;
		}
		80% {
			background-color: black;
		}
		90% {
			background-color: black;
		}
		95% {
			top: -40%;
		right: -11.5px;
		}
		100% {
			top: -40%;
		right: -11.5px;
		}
	}
		.search-scope2 {
			height: 38.25px;
			width: 38.25px;
			border: 1.6875px solid black;
		}
		.top-mark2 {
			width: 2.8546875px;
			height: 45.5625px;
			transform: translate(45.9375px, 25.125px)rotate(135deg);
		}
		.emoji-eyes {
		height: 3.375px;
		width: 0.5625px;
		transform:translate(3.9px, 2.8125px);
	}
	.emoji-eyes2 {
		height: 3.375px;
		width: 0.5625px;
		transform:translate(7.2px, 2.8125px);
	}
	.emoji-mouth {
    width: 5.625px;
    height: 2.8125px;
    border: 0.84375px solid black;
	transform:translate(3.09375px, 7.875px)
}
		.background-sokmotor {
			border: 33.75px solid rgba(255,255,255,0.2)
		}
		.background-utemal:hover {
			background: linear-gradient(-180deg, #3770dbc2, #d400ff);
			border-radius: 50%;
		}
		.background-inne {
			transform:translate(33.75px);
		}
		.loggafont {
			font-size: 3.09375em;
		}
	}
@media screen and (max-width: 550px) {
	.holderoutline1 {
		height: 475px;
		width: 295px;
	}
	@keyframes pulseoutline1 {
	0% {
	background-color: rgba(233, 233, 90, 0.297);
	width: 295px;
	height: 475px;
	}
	50% {
		background-color: rgba(251, 251, 36, 0.386);
		width: 297.5px;
		height: 479.5px;
	}
	100% {
		background-color: rgba(233, 233, 90, 0.297);
		width: 295px;
		height: 475px;
	}
}
	.infoproject {
		top: 100%;
		transform:translate(-100%, -100%);
		height: 30%;
		width: 100%;
		border-radius: 10px;
	}
	.projectvisit {
		top: 90%;
		transform:translate(-50%,-100%);
	}

	@keyframes pulseoutline3 {
	0% {
	background-color: rgba(233, 233, 90, 0.297);
	width: 420px;
	height: 385px;
	}
	50% {
		background-color: rgba(251, 251, 36, 0.386);
		width: 424.2px;
		height: 388.85px;
	}
	100% {
		background-color: rgba(233, 233, 90, 0.297);
		width: 420px;
		height: 385px;
	}
}
}
	@media screen and (max-width: 345px) {
		.background-utemal {
			width: 253.125px;
			height: 126.5625px;
		}
		.sökmotorlogga{
			transform: translate(46.40625px);
		}
		.search-scope {
			width: 10.546875px;
			height: 10.546875px;
			border: 0.6328125px solid black;
		}
		.top-mark {
			transform: translate(12.65625px, 8.4375px);
		}
	@keyframes längd {
		0% {
			width: 6%;
		height: 0%;
		transform: translate(7.59375px, 8.4375px)rotate(135deg);
		}
		1% {
			width: 6%;
		height: 85%;
		transform: translate(12.65625px, 8.4375px)rotate(135deg);
		}
		99% {
			width: 6%;
		height: 85%;
		transform: translate(12.65625px, 8.4375px)rotate(135deg);
		}
		100% {
			width: 6%;
		height: 0%;
		transform: translate(7.59375px, 8.4375px)rotate(135deg);
		
		}
	}
		.top-mark2::after {
		content: '';
		height:4.21875px;
		width: 4.21875px;
		right: -1.265625px;
	}
	@keyframes droppe {
		0% {
			background-color: black;
		}
		10% {
			background-color: rgba(255,255,255,0.0);
		}
		20% {
			background-color: black;
		}
		30% {
			background-color: rgba(255,255,255,0.0);
		}
		40% {
			background-color: black;
		}
		50% {
			background-color: rgba(255,255,255,0.0);
		}
		60% {
			background-color: black;
		}
		70% {
			background-color: rgba(255,255,255,0.0);
			top: -1%;
			right: -1.265625px;
		}
		80% {
			background-color: black;
		}
		90% {
			background-color: black;
		}
		95% {
			top: -40%;
		right: -8.625px;
		}
		100% {
			top: -40%;
		right: -8.625px;
		}
	}
		.search-scope2 {
			height: 28.6875px;
			width: 28.6875px;
			border: 1.265625px solid black;
		}
		.top-mark2 {
			width: 2.141015625px;
			height: 32.171875px;
			transform: translate(36.703125px, 21.09375px)rotate(135deg);
		}
		.emoji-eyes {
		height: 2.53125px;
		width: 0.421875px;
		transform:translate(3.375px, 2.109375px);
	}
	.emoji-eyes2 {
		height: 2.53125px;
		width: 0.421875px;
		transform:translate(6.75px, 2.109375px);
	}
	.emoji-mouth {
    width: 4.21875px;
    height: 2.109375px;
    border: 0.6328125px solid black;
	transform:translate(2.3203125px, 5.90625px)
}
		.background-sokmotor {
			border: 25.3125px solid rgba(255,255,255,0.2)
		}
		.background-inne {
			transform:translate(25.3125px);
		}
		.loggafont {
			font-size: 2.3203125em;
		}
	}
	.flex   {
            height: 100%;
            width: 100%;
            position: relative;
            display: flex;
            box-sizing: border-box;
            justify-content: space-around;
            align-items: center;
        }

     
        .background {
            height: 100%;
            width: 100%;
            position: relative;
            box-sizing: border-box;
            justify-content: space-around;
            align-items: center;
		}
        .digitalKlocka {
            font-size: 3em;
            font-family: 'Bebas Neue', cursive;
						color: white;
            text-shadow: 0 5px 5px black;
        }

        .digitalKlockaStyling {
			position: absolute;
			top: 50%;
			left: 20%;
			transform:translate(10%,0%);
			width: 220px;
            padding: 3em 1.5em;
            background-color: rgba(211,211,211,0.5);
            border-radius: 20% 80% 80% 20% / 20% 30% 70% 70%;
            animation: digitalKlockaAnimation 20s infinite 1s;
            border: 1px solid white;
        }
		.digitalKlockaStyling:hover {
			background-image: linear-gradient(45deg, #16ecb6, #696bd3);
		}
        @keyframes digitalKlockaAnimation {
            0% {
                border-radius: 20% 80% 80% 20% / 20% 30% 70% 70%;
                border: 1px solid white;
            }
            12.5% {
                border-radius: 35% 65% 65% 35% / 35% 45% 55% 55%;
                border: 1px solid white;
            }
            25% {
                border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
                border: 1px solid white;
            }
            37.5% {
                border-radius: 65% 35% 35% 65% / 65% 80% 35% 35%;
                border: 1px solid white;
            }
            50% {
                border-radius: 80% 20% 20% 80% / 70% 70% 40% 60%;
                border: 1px solid white;
            }
            62.5% {
                border-radius: 65% 35% 35% 65% / 55% 55% 45% 35%;
                border: 1px solid white;
            }
            75% {
                border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
                border: 1px solid white;
            }
            87.5% {
                border-radius: 35% 65% 65% 35% / 35% 45% 55% 55%;
                border: 1px solid white;
            }
        }
		@media screen and (max-width: 2263px) {
			.holderlightning4 {
				left: 13%;
			}
		}
		@media screen and (max-width: 2082px) {
			.holderlightning5 {
				left: 55%;
			}
		}
		@media screen and (max-width: 1836px) {
			.holderlightning4 {
				left: 4%;
			}
		}
    @media screen and (max-width: 1752px) {
    h1 {
  font-size: 8
  em;
  }
    }
	@media screen and (max-width: 1547px) {
	.holderlightning4 {
		left: -5%;
	}
	.holderlightning5 {
		left: 45%;
	}
	.holderlightning6 {
		left: 80%;
	}
	.puzzlebottom::after {
		display: flex;
		justify-content: center;
		text-align: center;
		font-size: 2em;
		padding: 0px;
		margin: 0px;
	}
}
@media screen and (max-width: 1405px) {
	.holderlightning2 {
		left: 3%;
	}
	.holderlightning3 {
		left: 10%;
	}
	.holderlightning4 {
		left: -12%;
	}
	.holderlightning5 {
		left: 38%;
	}
	.holderlightning6 {
		left: 80%;
	}
}
@media screen and (max-width: 1297px) {
	.holderlightning4 {
		left: -18%;
	}
}
@media screen and (max-width: 1175px) {
	.holderlightning2 {
		left: 3%;
	}
	.holderlightning3 {
		left: 10%;
	}
	.holderlightning4 {
		left: -18%;
	}
	.holderlightning5 {
		left: 45%;
	}
	.holderlightning6 {
		display: none;
	}
}
@media screen and (max-width: 1175px) {
	.holderlightning1 {
		display: none;
	}
	.holderlightning2 {
		left: -10%;
	}
	.holderlightning3 {
		left: 0%;
	}
	.holderlightning4 {
		left: -18%;
	}
	.holderlightning5 {
		left: 45%;
	}
	.holderlightning6 {
		display: none;
	}
}
@media screen and (max-width: 1075px) {
	.holderlightning4 {
		left: -28%;
	}
}
@media screen and (max-width: 1400px) {
	h1 {
    font-size: 6em;
  }
  @keyframes transformlogo2 {
0% {
	top: 100%;
	left: 0px;
	opacity: 0.4;
}
100% {
	top: 25%;
	left: 247px;
	opacity: 1;
}
}
@keyframes transformlogo1 {
0% {
	top: 100%;
	left: 0px;
}

100% {
	top: 25%;
	left: -287px;
}
}
  .lightningoutline {
  border-left: 11.25px solid transparent;
  border-right: 11.25px solid transparent;
  border-bottom: 61.125px solid white;
  animation: lightning-shadow 3s ease infinite;
  top: -15px;
  left: 7.5px;
    }
    @keyframes lightning-shadow {
        0% { 
        border-bottom: 61.125px solid white;
    }
    50% { 
        border-bottom: 61.125px solid yellow;
    }
    100% {
        border-bottom: 61.125px solid white; 
    }
}
.lightning { 
  border-left: 11.25px solid transparent;
  border-right: 11.25px solid transparent;
  border-bottom: 61.125px solid rgb(163, 163, 15);
  left: -15px;
}
.lightning2 {
  border-left: 11.25px solid transparent;
  border-right: 11.25px solid transparent;
  border-bottom: 61.125px solid rgb(163, 163, 15);
  left: -7.5px;
}
.lightningoutline2 {
  border-left: 11.25px solid transparent;
  border-right: 11.25px solid transparent;
  border-bottom: 61.125px solid white;
  top: 15px;
  right: 4.5px;
  
}
.lightningbox {
  height: 75px;
  width: 43.5px;
}
}
@media screen and (max-width: 945px) {
	h1 {
    font-size: 5em;
  }
  .startportfoliostart2 {
	top: 180%;

}
.startportfoliostart1 {
	top: 180%;
}
.startportfoliostartfade2 {
	top: 180%;
}
.startportfoliostartfade1 {
	top: 180%;
}
  .startbutton {
	top: 235%;
}
.startbuttonfade {
	top: 235%;
}
  @keyframes transformlogo2 {
	0% {
		top: 180%;
		left: 0px;
		opacity: 0.5;
	}
	40% {
	top: 100%;
	left: 0px;
	opacity: 0.6;
}
100% {
	top: 25%;
	left: 204px;
	opacity: 1;
}
}
@keyframes transformlogo1 {
0% {
	top: 180%;
	left: 0px;
}
40% {
	top: 100%;
	left: 0px;
}

100% {
	top: 25%;
	left: -240px;
}
}
  .textpriorprojects {
		font-size: 32px;
}
.lightningboxmini {
	transform:translate(-50%, -500%);
}
  .startportfolio::before {
	font-size: 1.15em;
	top: -5%;
  }
  .mainholder {
	  height: 200px
  }
  .lightningoutline {
  border-left: 9.375px solid transparent;
  border-right: 9.375px solid transparent;
  border-bottom: 50.9375px solid white;
  animation: lightning-shadow 3s ease infinite;
  top: -12.5px;
  left: 6.25px;
    }
    @keyframes lightning-shadow {
        0% { 
        border-bottom: 50.9375px solid white;
    }
    50% { 
        border-bottom: 50.9375px solid yellow;
    }
    100% {
        border-bottom: 50.9375px solid white; 
    }
}
.lightning { 
  border-left: 9.375px solid transparent;
  border-right: 9.375px solid transparent;
  border-bottom: 50.9375px solid rgb(163, 163, 15);
  left: -12.5px;
}
.lightning2 {
  border-left: 9.375px solid transparent;
  border-right: 9.375px solid transparent;
  border-bottom: 50.9375px solid rgb(163, 163, 15);
  left: -6.25px;
}
.lightningoutline2 {
  border-left: 9.375px solid transparent;
  border-right: 9.375px solid transparent;
  border-bottom: 50.9375px solid white;
  top: 12.5px;
  right: 3.75px;
  
}
.lightningbox {
  height: 62.5px;
  width: 36.25px;
}
}
@media screen and (max-width: 650px) {
	h1 {
    font-size: 4em;
  }
  .startportfoliostart2 {
	top: 160%;

}
.startportfoliostart1 {
	top: 160%;
}
.startportfoliostartfade2 {
	top: 160%;
}
.startportfoliostartfade1 {
	top: 160%;
}
  .startbutton {
	top: 210%;
}
.startbuttonfade {
	top: 210%;
}
  @keyframes transformlogo2 {
0% {
	top: 160%;
	left: 0px;
	opacity: 0.4;
}
40% {
	top: 100%;
	left: 0px;
}
100% {
	top: 25%;
	left: 165px;
	opacity: 1;
}
}
@keyframes transformlogo1 {
0% {
	top: 160%;
	left: 0px;
}
40% {
	top: 100%;
	left: 0px;
}

100% {
	top: 25%;
	left: -192px;
}
}
  .textpriorprojects {
		font-size: 20px;
}
  .startportfolio::before {
	font-size: 1em;
	top: 0%;
  }
  .lightningoutline {
  border-left: 7.5px solid transparent;
  border-right: 7.5px solid transparent;
  border-bottom: 40.75px solid white;
  animation: lightning-shadow 3s ease infinite;
  top: -10px;
  left: 5px;
    }
    @keyframes lightning-shadow {
        0% { 
        border-bottom: 40.75px solid white;
    }
    50% { 
        border-bottom: 40.75px solid yellow;
    }
    100% {
        border-bottom: 40.75px solid white; 
    }
}
.lightning { 
  border-left: 7.5px solid transparent;
  border-right: 7.5px solid transparent;
  border-bottom: 40px solid rgb(163, 163, 15);
  left: -10px;
}
.lightning2 {
  border-left: 7.5px solid transparent;
  border-right: 7.5px solid transparent;
  border-bottom: 40px solid rgb(163, 163, 15);
  left: -5px;
}
.lightningoutline2 {
  border-left: 7.5px solid transparent;
  border-right: 7.5px solid transparent;
  border-bottom: 40.75px solid white;
  top: 10px;
  right: 3px;
}
.lightningbox {
  height: 50px;
  width: 29px;
}
}

@media screen and (max-width: 996px) {
	.holderlightning4 {
		left: -35%;
	}
}
@media screen and (max-width: 938px) {
	.holderlightning2 {
		left: -20%;
	}
	.holderlightning3 {
		left: -10%;
	}
	.holderlightning4 {
		left: -45%;
	}
	.holderlightning5 {
		left: 40%;
	}
}


@media screen and (max-width: 872px) {
	.holderlightning2 {
		left: -20%;
	}
	.holderlightning3 {
		left: -10%;
	}
}
@media screen and (max-width: 850px) {
	.holderlightning4 {
		left: -60%;
	}
		.textpriorprojects {
		font-size: 28px;
}
.lightningboxmini {
transform:translate(-50%, -455%);
}
.holderoutline3 {
	height: 400px;
	width: 420px;
}
.infoproject3 {
	left: 50%;
	width: 100%;
	height: 30%;
	top: 100%;
	transform:translate(-50%,-100%);
}
@keyframes pulseoutline3 {
	0% {
	background-color: rgba(233, 233, 90, 0.297);
	width: 420px;
	height: 400px;
	}
	50% {
		background-color: rgba(251, 251, 36, 0.386);
		width: 424.2px;
		height: 404px;
	}
	100% {
		background-color: rgba(233, 233, 90, 0.297);
		width: 420px;
		height: 400px;
	}
}
.holderoutline2 {
	margin-top: 10%;
}
.holderoutline1 {
	margin-top: 10%;
}
.projectvisit3 {
	left: 50%;
	top: 90%;
	transform: translate(-50%, -90%);
}
	}
@media screen and (max-width: 783px) {
	.holderlightning5 {
		left: 30%;
	}
}
@media screen and (max-width: 790px) {
	.holderoutline2 {
		width: 410px;
		height: 450px;
	}
@keyframes pulseoutline2 {
	0% {
	background-color: rgba(233, 233, 90, 0.297);
	width: 400px;
	height: 450px;
	}
	50% {
		background-color: rgba(251, 251, 36, 0.386);
		width: 404px;
		height: 455.5px;
	}
	100% {
		background-color: rgba(233, 233, 90, 0.297);
		width: 400px;
		height: 450px;
	}
}
	.holderoutline1 {
		margin-top: 15%;
	}
	.holderoutline2 {
		margin-top: 15%;
	}
	.infoproject2 {
		height: 30%;
		width: 100%;
		top: 100%;
		transform:translate(-100%, -100%);
	}
	.projectvisit2 {
		transform:translate(-50%, -50%);
	}
}
@media screen and (max-width: 763px) {
	.holderlightning4 {
		left: -65%;
	}
}
@media screen and (max-width: 698px) {
	.holderlightning5 {
		display: none;
	}
	.holderlightning2 {
		display:none;
	}
	.holderlightning3 {
		left: -30%;
	}
}
@media screen and (max-width: 688px) {
	.holderlightning4 {
		left: -80%;
	}
}
@media screen and (max-width: 613px) {
	.holderlightning3 {
		left: -50%;
	}
	.holderlightning4 {
		left: -90%;
	}
}
@media screen and (max-width: 570px) {
	h1 {
    font-size: 3.4em;
  }
  .startportfoliostart2 {
	top: 176%;

}
.startportfoliostart1 {
	top: 176%;
}
.startportfoliostartfade2 {
	top: 176%;
}
.startportfoliostartfade1 {
	top: 176%;
}
  .startbutton {
	top: 230%;
}
.startbuttonfade {
	top: 230%;
}
  @keyframes transformlogo2 {
0% {
	top: 176%;
	left: 0px;
	opacity: 0.4;
}
40% {
	top: 100%;
	left: 0px;
}
100% {
	top: 25%;
	left: 140px;
	opacity: 1;
}
}
@keyframes transformlogo1 {
100% {
	top: 176%;
	left: 0px;
}
	40% {
	top: 100%;
	left: 0px;
}

100% {
	top: 25%;
	left: -163px;
}
}
  .textpriorprojects {
		font-size: 22px;
}
  .startportfolio::before {
	font-size: 0.9em;
	top: 0%;
  }
  .lightningboxmini {
  transform:translate(-50%, -425%);
}
  .lightningoutline {
  border-left: 6.375px solid transparent;
  border-right: 6.375px solid transparent;
  border-bottom: 34.6375px solid white;
  animation: lightning-shadow 3s ease infinite;
  top: -8.5px;
  left: 4.25px;
    }
    @keyframes lightning-shadow {
        0% { 
        border-bottom: 34.6375px solid white;
    }
    50% { 
        border-bottom: 34.6375px solid yellow;
    }
    100% {
        border-bottom: 34.6375px solid white; 
    }
}
.lightning { 
  border-left: 6.375px solid transparent;
  border-right: 6.375px solid transparent;
  border-bottom: 34px solid rgb(163, 163, 15);
  left: -8.5px;
}
.lightning2 {
  border-left: 6.375px solid transparent;
  border-right: 6.375px solid transparent;
  border-bottom: 34px solid rgb(163, 163, 15);
  left: -4.25px;
}
.lightningoutline2 {
	border-left: 6.375px solid transparent;
  border-right: 6.375px solid transparent;
  border-bottom: 34px solid white;
  top: 8.5px;
  right: 2.55px;
}
.lightningbox {
  height: 42.5px;
  width: 24.65px;
}
.mainholder {
	height: 150px;
}
.puzzletop {
	height: 30px;
	transform:translate(-50%, -29px);
}
}

/* 0.82352941 */
@media screen and (max-width: 433px) {
	h1 {
    font-size: 2.8em;
	text-shadow: 1.5px 1.5px white;
  }
  .startportfoliostart2 {
	top: 230%;
}
.startportfoliostart1 {
	top: 230%;
}
.startportfoliostartfade2 {
	top: 230%;
}
.startportfoliostartfade1 {
	top: 230%;
}
  .startbutton {
	top: 290%;
}
.startbuttonfade {
	top: 290%;
}
  @keyframes transformlogo2 {
0% {
	top: 230%;
	left: 0px;
	opacity: 0.4;
}
40% {
	top: 100%;
	left: 0px;
}
100% {
	top: 25%;
	left: 115px;
	opacity: 1;
}
}
@keyframes transformlogo1 {
0% {
	top: 230%;
	left: 0px;
}
	40% {
	top: 100%;
	left: 0px;
}

100% {
	top: 25%;
	left: -135px;
}
}
  .startportfolio::before {
	font-size: 0.8em;
	top: 0%;
  }
  .lightningoutline {
  border-left: 5.25px solid transparent;
  border-right: 5.25px solid transparent;
  border-bottom: 28.525px solid white;
  animation: lightning-shadow 3s ease infinite;
  top: -7px;
  left: 2.5px;
    }
    @keyframes lightning-shadow {
        0% { 
        border-bottom: 28.525px solid white;
    }
    50% { 
        border-bottom: 28.525px solid yellow;
    }
    100% {
        border-bottom: 28.525px solid white; 
    }
}
.lightning { 
  border-left: 5.25px solid transparent;
  border-right: 5.25px solid transparent;
  border-bottom: 28.525px solid rgb(163, 163, 15);
  left: -7px;
}
.lightning2 {
  border-left: 5.25px solid transparent;
  border-right: 5.25px solid transparent;
  border-bottom: 28.525px solid rgb(163, 163, 15);
  left: -3.5px;
}
.lightningoutline2 {
	border-left: 5.25px solid transparent;
  border-right: 5.25px solid transparent;
  border-bottom: 28.525px solid white;
  top: 7px;
  right: 2px;
}
.lightningbox {
  height: 35px;
  width: 20.3px;
}
.mainholder {
	height: 123px;
}
.puzzletop {
	height: 25px;
	transform:translate(-50%, -24px);
}
}
@media screen and (max-width: 357px) {
	h1 {
    font-size: 2.24em;
	text-shadow: 1px 1px white;
  }
  @keyframes transformlogo2 {
0% {
	top: 230%;
	left: 0px;
	opacity: 0.4;
}
40% {
	top: 100%;
	left: 0px;
}
100% {
	top: 25%;
	left: 91px;
	opacity: 1;
}
}
@keyframes transformlogo1 {
0% {
	top: 230%;
	left: 0px;
}
40% {
	top: 100%;
	left: 0px;
}
100% {
	top: 25%;
	left: -107px;
}
}
  .textpriorprojects {
		font-size: 20px;
}
  .startportfolio::before {
	font-size: 0.70em;
	top: 0%;
  }
  .lightningoutline {
  border-left: 4.2px solid transparent;
  border-right: 4.2px solid transparent;
  border-bottom: 22.82px solid white;
  animation: lightning-shadow 3s ease infinite;
  top: -5.6px;
  left: 2px;
    }
    @keyframes lightning-shadow {
        0% { 
        border-bottom: 22.82px solid white;
    }
    50% { 
        border-bottom: 22.82px solid yellow;
    }
    100% {
        border-bottom: 22.82px solid white; 
    }
}
.lightning { 
	border-left: 4.2px solid transparent;
  border-right: 4.2px solid transparent;
  border-bottom: 22.82px solid rgb(163, 163, 15);
  left: -5.6px;
}
.lightning2 {
	border-left: 4.2px solid transparent;
  border-right: 4.2px solid transparent;
  border-bottom: 22.82px solid rgb(163, 163, 15);
  left: -2.8px;
}
.lightningoutline2 {
	border-left: 4.2px solid transparent;
  border-right: 4.2px solid transparent;
  border-bottom: 22.82px solid white;
  top: 5.6px;
  right: 1.6px;
}
.lightningbox {
  height: 28px;
  width: 16.24px;
}
.mainholder {
	height: 110px;
}
.puzzletop {
	height: 20px;
	transform:translate(-50%, -19px);
}
}
@media screen and (max-width: 548px) {
	.holderlightning4 {
		left: -110%;
	}
}
@media screen and (max-width: 479px) {
	.holderlightning3 {
		left: -60%;
	}
	.holderlightning4 {
		left: -130%;
	}
}
@media screen and (max-width: 455px) {
	.holderlightning3 {
		left: -80%;
	}
	.holderlightning4 {
		left: -150%;
	}
}
@media screen and (max-width: 430px) {
	.holderlightning3 {
		left: -80%;
	}
	.holderlightning4 {
		left: -170%;
	}
}
@media screen and (max-width: 383px) {
	.holderlightning3 {
		left: -90%;
	}
	.holderlightning4 {
		left: -190%;
	}
}
@media screen and (max-width: 359px) {
	.holderlightning3 {
		display: none;
	}
	.holderlightning4 {
		left: -219%;
	}
}
@media screen and (max-width: 330px) {
	.holderlightning4 {
		left: -240%;
	}
}
@media screen and (max-width: 304px) {
	.holderlightning4 {
		left: -266%;
	}
}
@media screen and (max-width: 294px) {
	h1 {
		font-size: 2.2em;
	}
	.lightningboxmini {
		width: 15px;
		transform:translate(-50%, -390%)
	}
	.textpriorprojects {
		font-size: 18px;
	}
}
@media screen and (max-width: 284px) {
	.holderlightning4 {
		left: -290%;
	}
}
@media screen and (max-width: 274px) {
	.holderlightning4 {
		left: -300%;
	}
}
@media screen and (max-width: 261px) {
	.holderlightning4 {
		display: none;
	}
}
</style>