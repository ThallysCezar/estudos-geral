/* Widget Pomodoro compartilhado pelas páginas do site de estudos. */
(function(){
  "use strict";
  var SETTINGS_KEY="site.pomodoro.config.v1";
  var SESSION_KEY="site.pomodoro.session.v1";
  var SUGGESTED={focusMinutes:25,shortBreakMinutes:5,longBreakMinutes:15,focusesPerCycle:4};
  var PHASE_NAMES={focus:"Foco",short:"Pausa curta",long:"Pausa longa"};
  var script=document.currentScript;
  var settingsUrl=script?new URL("../../ferramentas/pomodoro.html",script.src).href:"ferramentas/pomodoro.html";
  var originalTitle=document.title;
  var root=document.getElementById("pomodoro");
  if(!root){root=document.createElement("aside");root.id="pomodoro";document.body.appendChild(root)}
  root.className="pomodoro";
  root.setAttribute("aria-label","Técnica Pomodoro");
  root.innerHTML='<button class="pomodoro-summary" id="pomodoroToggle" type="button" aria-expanded="false" aria-controls="pomodoroPanel">'
    +'<span class="pomodoro-indicator" aria-hidden="true"></span><span class="pomodoro-summary-copy"><span class="pomodoro-phase" id="pomodoroSummaryPhase">Técnica Pomodoro</span><span class="pomodoro-summary-time mono" id="pomodoroSummaryTime" hidden>25:00</span></span><span class="pomodoro-chevron" aria-hidden="true">⌃</span></button>'
    +'<section class="pomodoro-panel" id="pomodoroPanel" aria-labelledby="pomodoroTitle" hidden>'
    +'<div class="pomodoro-heading"><div><span class="pomodoro-kick">ferramenta de estudo</span><h2 id="pomodoroTitle">Técnica Pomodoro</h2></div><span class="pomodoro-cycle mono" id="pomodoroCycle" hidden>foco 1 de 4</span></div>'
    +'<div class="pomodoro-intro" id="pomodoroIntro"><p>Alterne períodos de foco com pausas. Configure as etapas para começar; a contagem fica oculta até você iniciar.</p><a class="pomodoro-config-link" id="pomodoroConfigIntro" href="'+settingsUrl+'">Configurar etapas</a></div>'
    +'<div class="pomodoro-ready" id="pomodoroReady" hidden><p id="pomodoroSettingsSummary"></p><div class="pomodoro-controls"><button type="button" class="pomodoro-primary pomodoroStart">Iniciar Pomodoro</button><a class="pomodoro-config-link" href="'+settingsUrl+'">Alterar etapas</a></div></div>'
    +'<div class="pomodoro-active" id="pomodoroActive" hidden><div class="pomodoro-clock mono" id="pomodoroClock" role="timer" aria-label="25 minutos restantes">25:00</div><p class="pomodoro-phase-detail" id="pomodoroPhaseDetail">Hora de estudar</p><div class="pomodoro-progress" role="progressbar" aria-label="Progresso da etapa" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span id="pomodoroProgress"></span></div><div class="pomodoro-controls"><button type="button" class="pomodoro-primary pomodoroStart">Pausar contador</button><button type="button" id="pomodoroReset">Encerrar sessão</button><button type="button" id="pomodoroSkip">Pular etapa</button></div><p class="pomodoro-settings-note" id="pomodoroSettingsNote"></p><a class="pomodoro-config-link" href="'+settingsUrl+'">Configurações</a></div>'
    +'<button type="button" class="pomodoro-close" id="pomodoroClose">Recolher</button><p class="pomodoro-live" id="pomodoroLive" role="status" aria-live="polite"></p></section>';

  var cssUrl=script?new URL("../css/pomodoro.css",script.src).href:"assets/css/pomodoro.css";
  if(!Array.from(document.querySelectorAll('link[rel="stylesheet"]')).some(function(link){return link.href===cssUrl})){var stylesheet=document.createElement("link");stylesheet.rel="stylesheet";stylesheet.href=cssUrl;document.head.appendChild(stylesheet)}
  var els={toggle:document.getElementById("pomodoroToggle"),panel:document.getElementById("pomodoroPanel"),summaryPhase:document.getElementById("pomodoroSummaryPhase"),summaryTime:document.getElementById("pomodoroSummaryTime"),cycle:document.getElementById("pomodoroCycle"),intro:document.getElementById("pomodoroIntro"),ready:document.getElementById("pomodoroReady"),active:document.getElementById("pomodoroActive"),settingsSummary:document.getElementById("pomodoroSettingsSummary"),start:root.querySelectorAll(".pomodoroStart"),reset:document.getElementById("pomodoroReset"),skip:document.getElementById("pomodoroSkip"),close:document.getElementById("pomodoroClose"),clock:document.getElementById("pomodoroClock"),detail:document.getElementById("pomodoroPhaseDetail"),progress:document.getElementById("pomodoroProgress"),progressTrack:root.querySelector(".pomodoro-progress"),settingsNote:document.getElementById("pomodoroSettingsNote"),live:document.getElementById("pomodoroLive")};
  var config=readConfig();
  var session=null;
  var ticker=null,audioContext=null;
  var legacySession=readJson(SESSION_KEY);
  if(!config&&validLegacySession(legacySession)){config=Object.assign({},SUGGESTED);writeConfig(config)}
  if(config){session=readSession()||newSession()}

  function readJson(key){try{return JSON.parse(localStorage.getItem(key))}catch(e){return null}}
  function wholeNumber(value,min,max){var n=Number(value);return Number.isInteger(n)&&n>=min&&n<=max}
  function validConfig(value){return value&&wholeNumber(value.focusMinutes,1,120)&&wholeNumber(value.shortBreakMinutes,1,60)&&wholeNumber(value.longBreakMinutes,1,60)&&wholeNumber(value.focusesPerCycle,2,12)}
  function readConfig(){var saved=readJson(SETTINGS_KEY);return validConfig(saved)?saved:null}
  function writeConfig(value){try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(value));return true}catch(e){return false}}
  function durations(){return {focus:config.focusMinutes*60,short:config.shortBreakMinutes*60,long:config.longBreakMinutes*60}}
  function validLegacySession(value){return value&&["focus","short","long"].includes(value.phase)&&["idle","running","paused"].includes(value.status)}
  function newSession(){return {phase:"focus",cycle:1,status:"idle",remaining:durations().focus}}
  function readSession(){var saved=readJson(SESSION_KEY);if(!saved||!config||!validLegacySession(saved)||!wholeNumber(saved.cycle,1,12))return null;var d=durations();if(saved.status==="running"&&Number.isFinite(saved.endsAt))return Object.assign({},saved,{cycle:Math.min(saved.cycle,config.focusesPerCycle)});var remaining=Number(saved.remaining);return {phase:saved.phase,cycle:Math.min(saved.cycle,config.focusesPerCycle),status:saved.status,remaining:Number.isFinite(remaining)?Math.max(0,Math.min(d[saved.phase],remaining)):d[saved.phase]}}
  function persist(){if(!session)return;try{var saved={phase:session.phase,cycle:session.cycle,status:session.status};if(session.status==="running")saved.endsAt=session.endsAt;else saved.remaining=session.remaining;localStorage.setItem(SESSION_KEY,JSON.stringify(saved))}catch(e){}}
  function secondsFor(phase){return durations()[phase]}
  function remaining(){return session.status==="running"?Math.max(0,(session.endsAt-Date.now())/1000):session.remaining}
  function timeText(seconds){var total=Math.max(0,Math.ceil(seconds));return String(Math.floor(total/60)).padStart(2,"0")+":"+String(total%60).padStart(2,"0")}
  function configSummary(){return config.focusMinutes+" min de foco · "+config.shortBreakMinutes+" min de pausa curta · "+config.longBreakMinutes+" min de pausa longa a cada "+config.focusesPerCycle+" focos"}
  function announce(message){els.live.textContent="";window.setTimeout(function(){els.live.textContent=message},20)}
  function open(){els.panel.hidden=false;root.dataset.open="true";els.toggle.setAttribute("aria-expanded","true")}
  function close(){els.panel.hidden=true;delete root.dataset.open;els.toggle.setAttribute("aria-expanded","false")}
  function render(){var configured=!!config,active=!!session&&session.status!=="idle",running=!!session&&session.status==="running",left=active?remaining():0,d=configured?durations():null,full=active?d[session.phase]:1,percent=active?Math.max(0,Math.min(100,(full-left)/full*100)):0;root.dataset.state=!configured?"unconfigured":running?"running":active?"paused":"ready";root.dataset.phase=active?session.phase:"focus";els.intro.hidden=configured;els.ready.hidden=!configured||active;els.active.hidden=!active;els.summaryTime.hidden=!active;els.cycle.hidden=!active;els.toggle.setAttribute("aria-expanded",String(!els.panel.hidden));
    if(!configured){els.summaryPhase.textContent="Técnica Pomodoro";document.title=originalTitle;return}
    els.settingsSummary.textContent=configSummary();els.settingsNote.textContent="Foco "+config.focusMinutes+" min · pausa "+config.shortBreakMinutes+" min · pausa longa "+config.longBreakMinutes+" min após "+config.focusesPerCycle+" focos";
    if(active){els.summaryPhase.textContent=PHASE_NAMES[session.phase]+(running?"":" · pausado");els.summaryTime.textContent=timeText(left);els.cycle.textContent="foco "+session.cycle+" de "+config.focusesPerCycle;els.clock.textContent=timeText(left);els.clock.setAttribute("aria-label",timeText(left)+" restantes");els.detail.textContent=session.phase==="focus"?"Hora de estudar":session.phase==="short"?"Pausa curta antes do próximo foco":"Pausa longa para recuperar";els.progress.style.width=percent+"%";els.progressTrack.setAttribute("aria-valuenow",String(Math.round(percent)));root.querySelectorAll("#pomodoroStart").forEach(function(button){button.textContent=running?"Pausar contador":"Retomar contador"});document.title=(running?timeText(left)+" · ":"")+"Pomodoro · Estudos"}
    else{els.summaryPhase.textContent="Técnica Pomodoro";document.title=originalTitle}
  }
  function stopTicker(){if(ticker){clearInterval(ticker);ticker=null}}
  function beginTicker(){stopTicker();ticker=window.setInterval(syncTime,250)}
  function sound(kind){var Ctx=window.AudioContext||window.webkitAudioContext;if(!Ctx)return;try{if(!audioContext)audioContext=new Ctx();var play=function(){var notes=kind==="start"?[{f:587,t:0,g:.035,d:.22}]:[{f:659,t:0,g:.027,d:.28},{f:784,t:.17,g:.025,d:.3},{f:988,t:.35,g:.022,d:.36}];notes.forEach(function(note){var oscillator=audioContext.createOscillator(),gain=audioContext.createGain(),at=audioContext.currentTime+note.t;oscillator.type="sine";oscillator.frequency.value=note.f;gain.gain.setValueAtTime(.0001,at);gain.gain.exponentialRampToValueAtTime(note.g,at+.035);gain.gain.exponentialRampToValueAtTime(.0001,at+note.d);oscillator.connect(gain);gain.connect(audioContext.destination);oscillator.start(at);oscillator.stop(at+note.d+.02)})};if(audioContext.state==="suspended")audioContext.resume().then(play).catch(function(){});else play()}catch(e){}}
  function nextPhase(){if(session.phase==="focus"){session.phase=session.cycle>=config.focusesPerCycle?"long":"short";session.remaining=secondsFor(session.phase)}else if(session.phase==="long"){session.phase="focus";session.cycle=1;session.remaining=secondsFor("focus")}else{session.phase="focus";session.cycle=Math.min(config.focusesPerCycle,session.cycle+1);session.remaining=secondsFor("focus")}}
  function completePhases(){if(!session||session.status!=="running")return;var now=Date.now(),boundary=session.endsAt,count=0,ended="";while(now>=boundary&&count<1000){ended=PHASE_NAMES[session.phase];nextPhase();boundary+=session.remaining*1000;count++}if(!count){render();return}session.status="running";session.endsAt=boundary;persist();render();sound("finish");announce(ended+" concluído. "+(session.phase==="focus"?"Começa a pausa longa.":session.phase==="short"?"Começa uma pausa curta.":"Ciclo concluído. Começa um novo foco."))}
  function syncTime(){if(!session||session.status!=="running")return;if(remaining()<=0)completePhases();else render()}
  function startOrPause(){if(!config){open();return}if(session.status==="running"){session.remaining=remaining();session.status="paused";delete session.endsAt;stopTicker();persist();render();announce("Contagem pausada.");return}if(session.status==="idle")session=newSession();session.status="running";session.endsAt=Date.now()+session.remaining*1000;persist();sound("start");beginTicker();render();announce(session.phase==="focus"?"Contagem de foco iniciada.":"Contagem da pausa iniciada.")}
  function advance(){if(!session||!config)return;if(session.status==="running"&&remaining()<=0){completePhases();return}stopTicker();nextPhase();session.status="paused";delete session.endsAt;persist();render();announce(PHASE_NAMES[session.phase]+" selecionado; retome para iniciar a contagem.")}
  function reset(){if(!config)return;stopTicker();session=newSession();persist();render();announce("Sessão encerrada. As etapas configuradas foram mantidas.")}
  function applyConfig(){var updated=readConfig();if(!updated){config=null;session=null;stopTicker();render();return}config=updated;if(session){session.cycle=Math.min(session.cycle,config.focusesPerCycle);if(session.status==="idle")session=newSession();persist()}else session=newSession();if(session.status==="running")beginTicker();render()}
  els.toggle.addEventListener("click",function(){if(els.panel.hidden)open();else close()});
  els.close.addEventListener("click",close);
  els.start.forEach(function(button){button.addEventListener("click",startOrPause)});
  els.reset.addEventListener("click",reset);
  els.skip.addEventListener("click",advance);
  document.addEventListener("visibilitychange",function(){if(!document.hidden)syncTime()});
  window.addEventListener("storage",function(event){if(event.key===SETTINGS_KEY){applyConfig();return}if(event.key===SESSION_KEY&&config){stopTicker();session=readSession()||newSession();if(session.status==="running")beginTicker();render()}});
  window.addEventListener("pomodoro:config-changed",applyConfig);
  if(session&&session.status==="running"){if(remaining()<=0)completePhases();else beginTicker()}
  render();
})();
