<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans&family=PT+Sans+Narrow&family=Palanquin+Dark&family=Raleway:wght@500&family=Roboto+Mono&display=swap" rel="stylesheet">
<script>
    import { Clock } from './clock.js'
    let namnaktivitet = '';
    let clock = new Clock(0,0,0,0);
    let pauseaplay = false;
    let dayeq;
    let houreq;
    let startprocess;
    let minuteeq;
    let second;
    let close = false;
    let procentdays;
    let procentdayseq;
    let procenthours;
    let procenthourseq;
    let procentminutes;
    let procentminuteseq;
    let procentseconds;
    let procentsecondseq;
    let starttime;
    let totaltime;
    let finished = false;
    let wholeprocess;
    let process;
    let projekt1 = 0;
    let projekt2 = 0;
    let projekt3 = 0;
    let projekt4 = 0;
    let projekt5 = 0;
    let projekt6 = 0;
    let projekt7 = 0;
    let projekt8 = 0;
    let projekt9 = 0;
    let ifylltopacity = false;
    let projekt10 = 0;
    let anpassaprojekt = false;
    let done = false;
    let ifyllt = false;
    function anpassningprojekt() {
        return anpassaprojekt = true;
    }
    function pause() {
      return pauseaplay = true
    }
    function ifylltok() {
        ifylltopacity = false;
    }
    function play() {
      return pauseaplay = false;
    }
    function reset() {
        return (
        anpassaprojekt = false,
        namnaktivitet = '',
        procentdays = '',
        procenthours = '',
        procentminutes = '',
        procentseconds = '',
        clock.setTime(0,0,0,0),
        projekt1 = 0,
        clock = clock,
        pauseaplay = true,
        process = 0,
        close = true
        );
    }
    function aktivitet() {
        procentdays=procentdays;
		procenthours=procenthours;
		procentminutes=procentminutes;
		procentseconds=procentseconds;
		procentdayseq = (procentdays * 86400);
		procenthourseq = (procenthours * 3600);
		procentminuteseq = (procentminutes * 60);
		procentsecondseq = procentseconds;
		dayeq = dayeq;
		houreq = houreq;
		minuteeq = minuteeq;
		dayeq = (clock.timeDay * 86400);
    houreq = (clock.timeHour * 3600);
	  minuteeq = (clock.timeMinute * 60);
		starttime = (dayeq + houreq + minuteeq + clock.second);
		totaltime = (procentdayseq + procenthourseq + procentminuteseq + procentsecondseq);
		wholeprocess = (starttime * 100 / totaltime);
        process = wholeprocess.toFixed(1);
		if (startprocess > 0 && pauseaplay == false) {
			clock.tick();
            clock = clock;
        }
		if (starttime >= totaltime && done == true) {
			return finished = true;

		}
	}
    // Hann bara designa för ett projekt men var påväg att göra så man kunde ha 10st i rullning samtidigt så lämnar kvar den delen av koden så du kan se hur jag tänkte
    function nyttprojekt() {
    ifyllt =  false;
    ifylltopacity = true;
    if (namnaktivitet != undefined && procentdays >= 0 && procenthours >= 0 && procentminutes >= 0 && procentseconds >= 0) {
        ifyllt =  true;
    ifylltopacity = false;
    }
    if (ifyllt == true) {
    done = true;
    startprocess = 1;
    anpassaprojekt = false;
    finished = false;
    pauseaplay = false;
    close = false;

    if (projekt1 == 0) {
    return projekt1 += 1;
    }
    else if (projekt2 == 0) {
    return projekt2 += 1;
    }
    else if (projekt3 == 0) {
    return projekt3 += 1;
    }
    else if (projekt4 == 0) {
    return projekt4 += 1;
    }
    else if (projekt5 == 0) {
    return projekt5 += 1;
    }
    else if (projekt6 == 0) {
    return projekt6 += 1;
    }
    else if (projekt7 == 0) {
    return projekt7 += 1;
    }
    else if (projekt8 == 0) {
    return projekt8 += 1;
    }
    else if (projekt9 == 0) {
    return projekt9 += 1;
    }
    else {
    return projekt10 += 1;
    }
    }
    }
    setInterval (aktivitet, 1000);
</script>
<body>
    <div class="avklaradeshow"><button class="btn btn-outline">Avklarat projekt</button></div>
    <span style="opacity: {anpassaprojekt ? '0.2' : '1'};">
    <div class="flex"><h2>Skapa ett</h2><h1>PROJEKT</h1><h2>nedanför</h2></div>
    <div class="projekt">
    <div class="skapaprojekt">
        <div class="textboxaktiv">Aktivt Projekt</div>
        <button class="nyttprojekt" on:click={anpassningprojekt}
        type="button" style="opacity: {projekt1 ? '0' : '1'}; z-index: {projekt1 ? '-9999' : '1'}" >+</button>
        
        <div class="aktivtprojekt" style="display: {projekt1 ? 'block' : 'none'}; opacity: {finished ? '0' : '1'};">{namnaktivitet}
        <div class="progressbaroutline"></div>
        <div class="progressbar" style="display: {finished ? 'none' : 'block'};">
        <div class="progressbarprogress" style:width={(process)+'%'}>
        </div>
        </div>
        <div class="progressbartransparent">
        <div class="progressbarprogresstransparent" style:width={(process)+'%'}>
        <h4 style="left: 100%; transform:translate(-40%); top: -175%;color: rgb(0,211,0); text-shadow: 0.5px 0.5px black;">{(process)+'%'}</h4>
        <div class="progresspointer"></div>
        </div>
        </div>
        <button class="avbryt2" on:click={reset} >Avbryt</button>
        <button class="play-pause" on:click={pause} style="display: {pauseaplay ? 'none' : 'block'}">Pausa</button>
        <button class="play-pause" on:click={play} style="display: {pauseaplay ? 'block' : 'none'};">Starta</button>
        <div class="timeholder"><span class="numberachieved">{clock.timeDay}</span><span class="letter">d </span><span class="numberachieved">{clock.timeHour}</span><span class="letter">h </span><span class="numberachieved">{clock.timeMinute}</span><span class="letter">m </span><span class="numberachieved">{clock.timeSecond}</span><span class="letter">s</span> / <span class="numbertotal">{procentdays}</span><span class="letter">d </span><span class="numbertotal">{procenthours}</span><span class="letter">h </span><span class="numbertotal">{procentminutes}</span><span class="letter">m </span><span class="numbertotal">{procentseconds}</span><span class="letter">s</span></div><span style="position: absolute; left: 66%; top: 60%; font-size: 40px; color: rgb(0,211,0);"></span>
        </div>
        <div class="aktivtprojekt" style="display: {projekt2 ? 'block' : 'none'}">{namnaktivitet}</div>
        <div class="aktivtprojekt" style="display: {projekt3 ? 'block' : 'none'}">{namnaktivitet}</div>
        <div class="aktivtprojekt" style="display: {projekt4 ? 'block' : 'none'}">{namnaktivitet}</div>
        <div class="aktivtprojekt" style="display: {projekt5 ? 'block' : 'none'}">{namnaktivitet}</div>
        <div class="aktivtprojekt" style="display: {projekt6 ? 'block' : 'none'}">{namnaktivitet}</div>
        <div class="aktivtprojekt" style="display: {projekt7 ? 'block' : 'none'}">{namnaktivitet}</div>
        <div class="aktivtprojekt" style="display: {projekt8 ? 'block' : 'none'}">{namnaktivitet}</div>
        <div class="aktivtprojekt" style="display: {projekt9 ? 'block' : 'none'}">{namnaktivitet}</div>
        <div class="aktivtprojekt" style="display: {projekt10 ? 'block' : 'none'}">{namnaktivitet}</div>
        </div>
    <div class="avklaradeprojekt">
        <div class="textboxavklarad">Avklarade Projekt</div>
        <div class="fyllutrymme"></div>
       
             <div class="avklaratprojekt" style="display: {finished ? 'block' : 'none'}; opacity: {close ? '0' : '1'};">{namnaktivitet}
            <div class="progressbaroutline2"></div>
            <div class="progressbar">
            <div class="progressbarprogress" style="width:100%;"></div>
            </div>
            <div class="progressbartransparent">
            <div class="progressbarprogresstransparent" style="width:100%;"><h4 style="left: 100%; transform:translate(-40%); top: -175%;color: rgb(0,211,0); text-shadow: 0.5px 0.5px black;">100%</h4>
            <div class="progresspointer"></div>
            </div>
            </div>
            <button class="close" on:click={reset}>⨂</button>
            <div class="timeholder"><span class="numberachieved">{procentdays}</span><span class="letter">d </span><span class="numberachieved">{procenthours}</span><span class="letter">h </span><span class="numberachieved">{procentminutes}</span><span class="letter">m </span><span class="numberachieved">{procentseconds}</span><span class="letter">s</span> / <span class="numbertotal">{procentdays}</span><span class="letter">d </span><span class="numbertotal">{procenthours}</span><span class="letter">h </span><span class="numbertotal">{procentminutes}</span><span class="letter">m </span><span class="numbertotal">{procentseconds}</span><span class="letter">s</span></div><span style="position: absolute; left: 66%; top: 60%; font-size: 40px; color: rgb(0,211,0);">✓</span>
            </div>
    </div>
</span>

<div class="bakgrund" style="display: {anpassaprojekt ? 'block' : 'none'}"><div class="anpassning">
<form>
    <div class="fylli" style="display: {ifyllt ? 'none' : 'block'}; opacity:{ifylltopacity ? '1' : '0'}; z-index:{ifylltopacity ? '9999' : '-9999'};">
    <div class="ok" type="button" on:click="{ifylltok}">ok<div class="okholder"></div></div>
    </div>
    
    <label for="aktivtetnamn" style="position: absolute; left: 10%; top:2%; font-size: 15px; color: black; font-family: 'Palanquin Dark', sans-serif;">* Namn på aktivtet</label><br>
    
    <input type="text" bind:value={namnaktivitet} class="aktivitetnamn"><br>
    <label for="tid"  style="position: absolute; left: 10%; top:40%; font-size: 15px; color: black; font-family: 'Palanquin Dark', sans-serif;">* Hur länge vill du utföra aktiviteten?</label>
    <div class="holdertid">

<input type="number" class="tid" min="0" max="365" name="dagar" style="transform:translate(0%, -50%);" bind:value={procentdays}/>
<div class="typavtid">
<h4>Dagar</h4>
</div>
<input type="number" class="tid" min="0" max="24" style="left: 33.3%; transform:translate(-33.3%, -50%);" bind:value={procenthours}/>
<div class="typavtid">
<h4>Timmar</h4>
</div>
<input type="number" class="tid" min="0" max="60" style="left:66.6%; transform:translate(-66%, -50%);" bind:value={procentminutes}/>
<div class="typavtid">
<h4>Minuter</h4>
</div>
<input type="number" class="tid" min="0" max="60" style="left: 100%; transform:translate(-100%, -50%);" bind:value={procentseconds}/>
<div class="typavtid">
<h4>Sekunder</h4>
</div>
</div>
  </form>
  <button class="avbryt" on:click={reset}>Avbryt</button>
  <button class="skapa" on:click="{nyttprojekt}">Skapa</button>
</div></div>
</body>
<style>
     .showactive {
         position: absolute;
        width: 100%;
        height: 100%;
    }
    .showdone {
        top: 0%;
        left: 50%;
        width: 100%;
        height: 100%;

    }
    .avklaradeshow {
        position: absolute;
        display: none;
        left: 50%;
        transform:translate(-50%);
    }
    button {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: transparent;
    }
    .fylli {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform:translate(-50%,-50%);
        background-color: rgba(255,0,0,0.8);
        border-radius: 30px;
        border: 1px solid white;
        z-index: 999;
    }
    .okholder {
        position: absolute;
        width: 120%;
        height: 200%;
        top: -100%;
        background-color: rgba(255,255,255,0.5);
        z-index: -999999;
    }
    .ok {
        display: flex;
        position: absolute;
        left: 50%;
        top: -21%;
        transform:translate(-50%);
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor:pointer;
        border: 1px solid black;
        width: 10%;
        height: 20%;
        background-color: green;
    }
    .ok::before {
        content: 'Fyll i allting';
        position: absolute;
        font-size: 20px;
        width: 100%;
        height: 100%;
        font-family: 'Bebas Neue', cursive;
        top: -105%;
    }
    .aktivitetnamn {
        position: absolute;
        text-align: center;
        width: 80%;
        height: 20%;
        background-color: rgba(166,166,166,0.3);
        border-radius: 15px;
        left: 10%;
        top: 10%;
        font-family: 'Open Sans', sans-serif;
        font-size: 150%;
    }
    .fyllutrymme {
        display: flex;
        position: relative;
        width: 40%;
        height: 5%;
        margin-left: 50%;
        transform:translate(-50%);
        box-sizing: border-box;
    }
    .holdertid {
        display: flex;
        position: absolute;
        justify-content:space-between;
        align-items: center;
        width: 80%;
        height: 20%;
        left: 10%;
        top: 45%;
    }
    .tid {
        position: absolute;
        width: 20%;
        height: 50%;
        background-color: rgba(166,166,166,0.3);
        border-radius: 15px;
        left: 0%;
        top: 60%;
        display: flex;
        text-align: center;
        font-family: 'Open Sans', sans-serif
    }
    .typavtid {
        position: relative;
        width: 20%;
        height: 50%;
        left: 0%;
        top: 60%;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-family: 'Open Sans', sans-serif
    }
    h4 {
        position: absolute;
        text-align: center;
        align-items: center;
        font-family: 'Bebas Neue', cursive;
        color: rgba(211,211,211.03);
    }
    input[type=number] {
        border: 0.125em solid hsl(30, 76%, 10%); 
        outline: none;
        padding-left: 3%;
    }
    input[type=number]::-webkit-inner-spin-button {
    opacity: 1;
    
    padding: -20px;
    }
    input[type=number]:valid {
    border-color: hsl(30, 76%, 10%); 
}
    .avbryt {
        position: absolute;
        width: 40%;
        height: 10%;
        background-color: red;
        border-radius: 15px;
        left: 5%;
        top: 85%;
    }
    .avbryt2 {
        display: flex;
        position: absolute;
        width: 80px;
        height: 40px;
        background-color: red;
        border-radius: 15px;
        font-size: 13px;
        left: 0%;
        top: 100%;
        transform:translate(0%,-100%);
        justify-content: center;
        align-items: center;
    }
    .close {
        display: flex;
        position: absolute;
        background-color: red;
        height: 23px;
        width: 23px;
padding-bottom: 1%;
        border-radius: 50%;
        font-size: 30px;
        left: 95%;
        top: 5%;
        justify-content: center;
        align-items: center;
    }
    .play-pause {
        display: flex;
        position: absolute;
        width: 80px;
        height: 40px;
        background-color: rgb(0, 211, 193);
        border-radius: 15px;
        font-size: 13px;
        left: 100%;
        top: 100%;
        transform:translate(-100%,-100%);
        justify-content: center;
        align-items: center;
    }
    .skapa {
        position: absolute;
        width: 40%;
        height: 10%;
        background-color: green;
        left: 55%;
        border-radius: 15px;
        top: 85%;
    }

    .flex {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        height:20%;
        width: 100%;

    }
    .bakgrund {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0%;
        left: 0%;
        background-color: rgba(169,169,169,0.4);
    }
    .anpassning {
        position: absolute;
        width: 30%;
        height: 30%;
        top: 50%;
        left: 50%;
        transform:translate(-50%,-50%);
        background-image: linear-gradient(22.5deg, rgba(67, 67, 67, 0.02) 0%, rgba(67, 67, 67, 0.02) 29%,rgba(47, 47, 47, 0.02) 29%, rgba(47, 47, 47, 0.02) 37%,rgba(23, 23, 23, 0.02) 37%, rgba(23, 23, 23, 0.02) 55%,rgba(182, 182, 182, 0.02) 55%, rgba(182, 182, 182, 0.02) 69%,rgba(27, 27, 27, 0.02) 69%, rgba(27, 27, 27, 0.02) 71%,rgba(250, 250, 250, 0.02) 71%, rgba(250, 250, 250, 0.02) 100%),linear-gradient(67.5deg, rgba(117, 117, 117, 0.02) 0%, rgba(117, 117, 117, 0.02) 14%,rgba(199, 199, 199, 0.02) 14%, rgba(199, 199, 199, 0.02) 40%,rgba(33, 33, 33, 0.02) 40%, rgba(33, 33, 33, 0.02) 48%,rgba(135, 135, 135, 0.02) 48%, rgba(135, 135, 135, 0.02) 60%,rgba(148, 148, 148, 0.02) 60%, rgba(148, 148, 148, 0.02) 95%,rgba(53, 53, 53, 0.02) 95%, rgba(53, 53, 53, 0.02) 100%),linear-gradient(135deg, rgba(190, 190, 190, 0.02) 0%, rgba(190, 190, 190, 0.02) 6%,rgba(251, 251, 251, 0.02) 6%, rgba(251, 251, 251, 0.02) 18%,rgba(2, 2, 2, 0.02) 18%, rgba(2, 2, 2, 0.02) 27%,rgba(253, 253, 253, 0.02) 27%, rgba(253, 253, 253, 0.02) 49%,rgba(128, 128, 128, 0.02) 49%, rgba(128, 128, 128, 0.02) 76%,rgba(150, 150, 150, 0.02) 76%, rgba(150, 150, 150, 0.02) 100%),linear-gradient(90deg, #ffffff,#ffffff);
        border-radius: 30px;
        border: 1px solid white;
    }
    .projekt {
        display: flex;
        width: 100%;
        height: 100%;
    }
    .nyttprojekt {
        display: flex;
        position: relative;
        width: 40%;
        height: 5%;
        border: 1px solid white;
        border-radius: 15px;
        margin-left: 50%;
        transform:translate(-50%);
        font-size: 1.2em;
        color: white;
        align-items: center;
        justify-content: center;
    }
    .aktivtprojekt {
        position: relative;
        width: 80%;
        height: 200px;
        color: white;
        text-align: center;
        padding-top: 10px;
        font-family: 'Roboto Mono', monospace;
        font-size: 20px;
        border: 1px solid white;
        border-radius: 15px;
        margin-left: 50%;
        margin-top: 5%;
        transform:translate(-50%);
        background-color: rgba(166,166,166,0.45);
    }
    .avklaratprojekt {
        position: absolute;
        width: 40%;
        height: 15%;
        color: white;
        text-align: center;
        padding-top: 10px;
        font-family: 'Roboto Mono', monospace;
        font-size: 20px;
        border: 1px solid white;
        border-radius: 15px;
        margin-top: 2.6%;
        margin-left: 25%;
        transform:translate(-50%);
        background-color: rgba(166,166,166,0.45);
        animation: aktiv-avklarat 5s ease;
    }
    @keyframes aktiv-avklarat{
        0% {
            margin-left: -50%;
        transform:translate(12.4%);
        }

    }
    .progressbar {
        position: absolute;
        width: 80%;
        height: 20px;
        border: 0.1px solid white;
        margin-top: 4.4%;
        margin-left: 10%;
        border-radius:15px;
        z-index: 9;

    }
    .progressbartransparent {
        position: relative;
        width: 80%;
        height: 20px;
        margin-top: 4.4%;
        margin-left: 10%;
        z-index: 12;
    }
    .progressbarprogresstransparent {
        position: relative;
        display: flex;
        height: 100%;
        border-radius:15px;
        z-index: 9;
    }
    .progressbaroutline {
        position: absolute;
        width: 80.9%;
        height: 27px;
        border: 3px solid rgb(82, 80, 80);
        margin-top: 3.92%;
        margin-left: 9.6%;
        border-radius:25px;
        z-index: 10;
        animation: changecolor 5s linear infinite
    }
    .progressbaroutline2 {
        position: absolute;
        width: 80.9%;
        height: 26px;
        border: 3px solid rgb(82, 80, 80);
        margin-top: 3.92%;
        margin-left: 9.6%;
        border-radius:25px;
        z-index: 10;
        animation: changecolor 5s linear infinite
    }
    @keyframes changecolor {
        0% {
            border: 3px solid rgb(82, 80, 80);
        }
        50% {
            border: 3px solid gray;
        }
        100% {
            border: 3px solid rrgb(82, 80, 80);
        }
    }
    .progresspointer {
        position: absolute;
  width: 0; 
  height: 0; 
  border-left: 6.5px solid transparent;
  border-right: 6.5px solid transparent;
  border-top: 7px solid rgb(0,211,0);
  top: -50%;
  left: 100%;
  transform:translate(-50%);

    }
    .progressbarprogress {
        position: absolute;
        display: flex;
        background-color: green;
        height: 100%;
        border-radius:15px;
        z-index: 9;
    }
    .textboxaktiv {
        position: relative;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        border-radius: 30px;
        width: 20%;
       padding: 1%;
        font-size: 1em;
        color: white;
        font-family: 'Roboto Mono', monospace;
        margin-left: 50%;
        margin-top: 0%;
        transform:translate(-50%, -100%);
    }
    .textboxavklarad {
        position: relative;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        border-radius: 30px;
        width: 20%;
       padding: 1%;
        font-size: 0.93em;
        color: white;
        font-family: 'Roboto Mono', monospace;
        margin-left: 50%;
        margin-top: 0%;
        transform:translate(-50%, -100%);
    }
    .skapaprojekt {
        width: 50%;
        height: 100%;
        margin-top: 2%;
        border-right: 1px solid white;
    } 
    .avklaradeprojekt {
        width: 50%;
        height: 100%;
        margin-top: 2%;
        border-left: 1px solid white;
    } 
    h1 {
        font-size: 90px;
        color: rgba(255,255,255, 0.7);
        text-shadow: 2px 2px rgba(0,0,0,0.4);
        font-family: 'Bebas Neue', cursive;
        margin-left: 1%;
        margin-right: 1%;
    }
    h2 {
        color: white;
        font-family: 'Bebas Neue', cursive;
     
    }
body {
    position: absolute;
	overflow-x: hidden;
	height: 100%;
	width: 100%;
    background-image: repeating-linear-gradient(45deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(90deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(0deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(135deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),linear-gradient(90deg, rgb(41, 27, 158),rgb(249, 77, 212));
}
.timeholder {
    display: flex;
    position: absolute;
    width: 250px;
    height: 30%;
    background-color: rgba(71, 63, 63, 0.8);
    border-radius: 7.5px;
    left: 50%;
    transform:translate(-50%);
    top: 65%;
    justify-content: center;
     align-items: center;
    font-family: 'Bebas Neue', cursive;
    font-size: 22px;
}
.timeholder .numbertotal {
    color: rgb(129, 124, 124);
}
.timeholder .numberachieved {
color: rgb(78, 221, 78);
}
.timeholder .letter {
    color: white;
}
@media screen and (max-width: 1640px) {
    .aktivtprojekt {
        width: 100%;
    }
    .anpassning {
        width: 600px;
        height: 400px;
    }
}
@media screen and (max-width: 829px) {
    .avklaradeshow {
        display: block
    }
    .showactive {
        display: block;
    }
    .showdone {
    display: block;
    }
    .skapaprojekt {
        position: absolute;
        width: 100%;
    } 
    .avklaradeprojekt {
        position: absolute;
        width: 100%;
    } 
}

</style>