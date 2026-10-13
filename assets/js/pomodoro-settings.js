/* Formulário das etapas do Pomodoro. */
(function(){
  "use strict";
  var KEY="site.pomodoro.config.v1";
  var SUGGESTED={focusMinutes:25,shortBreakMinutes:5,longBreakMinutes:15,focusesPerCycle:4};
  var form=document.getElementById("pomodoroSettingsForm");
  if(!form)return;
  var fields={focusMinutes:form.elements.focusMinutes,shortBreakMinutes:form.elements.shortBreakMinutes,longBreakMinutes:form.elements.longBreakMinutes,focusesPerCycle:form.elements.focusesPerCycle};
  var status=document.getElementById("pomodoroSettingsStatus");
  var saved=false;
  function read(){try{return JSON.parse(localStorage.getItem(KEY))}catch(e){return null}}
  function fill(value){Object.keys(fields).forEach(function(key){fields[key].value=value[key]})}
  function valid(){var spec={focusMinutes:[1,120],shortBreakMinutes:[1,60],longBreakMinutes:[1,60],focusesPerCycle:[2,12]};var ok=true;Object.keys(fields).forEach(function(key){var n=Number(fields[key].value),limits=spec[key],pass=Number.isInteger(n)&&n>=limits[0]&&n<=limits[1];fields[key].setAttribute("aria-invalid",String(!pass));if(!pass)ok=false});return ok}
  function describe(value){return value.focusMinutes+" min de foco, "+value.shortBreakMinutes+" min de pausa curta, "+value.longBreakMinutes+" min de pausa longa após "+value.focusesPerCycle+" focos."}
  form.addEventListener("submit",function(event){event.preventDefault();status.textContent="";if(!valid()){status.textContent="Confira os valores e os limites indicados em cada etapa.";status.setAttribute("role","alert");return}var value={};Object.keys(fields).forEach(function(key){value[key]=Number(fields[key].value)});try{localStorage.setItem(KEY,JSON.stringify(value));saved=true;status.textContent="Etapas salvas: "+describe(value);status.setAttribute("role","status");window.dispatchEvent(new CustomEvent("pomodoro:config-changed",{detail:value}))}catch(e){status.textContent="Não foi possível salvar no navegador. Verifique as permissões de armazenamento.";status.setAttribute("role","alert")}});
  document.getElementById("pomodoroSettingsSuggested").addEventListener("click",function(){fill(SUGGESTED);valid();saved=false;status.textContent="Sugestões preenchidas. Salve para aplicá-las ao timer.";status.setAttribute("role","status")});
  window.addEventListener("storage",function(event){if(event.key===KEY){var value=read();if(value){fill(value);saved=true;status.textContent="Etapas atualizadas em outra aba: "+describe(value)}}});
  var existing=read();if(existing){fill(existing);saved=true;status.textContent="Etapas atuais: "+describe(existing)}else fill(SUGGESTED);
  valid();
})();
