/* Extraido de ferramentas/prompt-studio.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 1 ---------- */

(function(){
  "use strict";

  function $(id){ return document.getElementById(id); }

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, function(c){
      return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c];
    });
  }

  function renderMarkdown(md){
    if(!md) return "";
    var e = escapeHtml(md);
    e = e.replace(/^### (.*$)/gim, "<h3>$1</h3>").replace(/^## (.*$)/gim, "<h2>$1</h2>");
    e = e.replace(/^&gt; (.*$)/gim, "<blockquote>$1</blockquote>");
    e = e.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>");
    e = e.replace(/^\s*[-*•]\s+(.*$)/gim, "<li>$1</li>");
    e = e.replace(/((?:<li>.*<\/li>\s*)+)/g, "<ul>$1</ul>");
    return e.split(/\n\s*\n/).map(function(p){
      p = p.trim();
      if(!p) return "";
      if(/^<(?:h[23]|ul|blockquote)/i.test(p)) return p;
      return "<p>" + p.replace(/\n/g, "<br>") + "</p>";
    }).join("");
  }

  var toast = $("toast"), toastTimer = null;
  function showToast(msg, type){
    if(!toast) return;
    if(toastTimer) clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.className = "toast show" + (type ? " " + type : "");
    toastTimer = setTimeout(function(){ toast.className = "toast"; }, 3200);
  }

  // ===== Provedores (mesmas chaves do refinador; modelos gratuitos com fallback) =====
  var PROVIDERS = [
    { id: "gemini", name: "Google Gemini", icon: "⚡", storage: "refinador_gemini_api_key",
      label: "gemini-3.8-flash", models: ["gemini-3.8-flash", "gemini-3.5-flash", "gemini-2.5-flash"] },
    { id: "groq", name: "Groq Cloud", icon: "🚀", storage: "refinador_groq_api_key",
      label: "openai/gpt-oss-20b", models: ["openai/gpt-oss-20b", "openai/gpt-oss-120b", "qwen/qwen3.6-27b"] },
    { id: "openrouter", name: "OpenRouter", icon: "🌐", storage: "refinador_openrouter_api_key",
      label: "auto · :free", models: [] }
  ];
  var OR_FALLBACK = ["deepseek/deepseek-r1:free", "nvidia/nemotron-3.5-lightning:free", "qwen/qwen3.6-27b:free"];
  var orModelsCache = null;

  // ===== Chaves =====
  function keyEl(p){ return $("key-" + p.id); }
  function dotEl(p){ return $("dot-" + p.id); }
  function getKey(p){ var el = keyEl(p); return el ? el.value.trim() : ""; }
  function refreshDot(p){ var d = dotEl(p); if(d) d.classList.toggle("ok", !!getKey(p)); }
  function loadKeys(){
    PROVIDERS.forEach(function(p){
      var el = keyEl(p);
      if(!el) return;
      var saved = "";
      try { saved = localStorage.getItem(p.storage) || ""; } catch(e){}
      el.value = saved;
      refreshDot(p);
      el.addEventListener("input", function(){
        var v = el.value.trim();
        try { if(v) localStorage.setItem(p.storage, v); else localStorage.removeItem(p.storage); } catch(e){}
        refreshDot(p);
      });
    });
  }
  Array.prototype.forEach.call(document.querySelectorAll(".btn-toggle-mask"), function(btn){
    btn.addEventListener("click", function(){
      var t = $(btn.dataset.mask);
      if(!t) return;
      if(t.type === "password"){ t.type = "text"; btn.textContent = "🔒"; }
      else { t.type = "password"; btn.textContent = "👁️"; }
    });
  });

  // ===== Controles do Studio (modo + papel/formato/dominio) =====
  var modeTabs = document.querySelectorAll(".mode-tab-btn");
  var promptControls = $("promptControls");
  var promptSwitches = $("promptSwitches");
  var contextControls = $("contextControls");
  var panelInputIcon = $("panelInputIcon");
  var panelInputTitle = $("panelInputTitle");
  var panelOutputTitle = $("panelOutputTitle");
  var btnRunLabel = $("btnRunLabel");
  var selRole = $("selRole");
  var customRoleInput = $("customRoleInput");
  var selFormat = $("selFormat");
  var customFormatInput = $("customFormatInput");
  var chkFewShot = $("chkFewShot");
  var chkQuality = $("chkQuality");
  var chkSteps = $("chkSteps");
  var selDomain = $("selDomain");
  var customDomainInput = $("customDomainInput");
  var selContextFormat = $("selContextFormat");
  var selCompression = $("selCompression");
  var taskInput = $("taskInput");
  var charCount = $("charCount");
  var btnRun = $("btnRun");
  var currentMode = "prompt";

  function switchMode(mode){
    currentMode = mode;
    modeTabs.forEach(function(tab){ tab.classList.toggle("active", tab.dataset.mode === mode); });
    if(mode === "prompt"){
      if(panelInputIcon) panelInputIcon.textContent = "🎯";
      if(panelInputTitle) panelInputTitle.textContent = "Configuração do Prompt de Alta Performance";
      if(panelOutputTitle) panelOutputTitle.textContent = "Prompt Otimizado (5 Princípios)";
      if(btnRunLabel) btnRunLabel.textContent = "🎯 Gerar Prompt de Alta Performance";
      if(promptControls) promptControls.style.display = "grid";
      if(promptSwitches) promptSwitches.style.display = "flex";
      if(contextControls) contextControls.style.display = "none";
      if(taskInput) taskInput.placeholder = "Descreva a tarefa ou objetivo que o modelo deve cumprir. Exemplo:\n'Criar um endpoint REST em Spring Boot com cache Redis e tratamento de erro 401/403 para listar redes VPC'...";
    } else if(mode === "context"){
      if(panelInputIcon) panelInputIcon.textContent = "📦";
      if(panelInputTitle) panelInputTitle.textContent = "Configuração da Janela de Contexto para Agentes";
      if(panelOutputTitle) panelOutputTitle.textContent = "Janela de Contexto Estruturada";
      if(btnRunLabel) btnRunLabel.textContent = "📦 Gerar Janela de Contexto para Agente";
      if(promptControls) promptControls.style.display = "none";
      if(promptSwitches) promptSwitches.style.display = "none";
      if(contextControls) contextControls.style.display = "grid";
      if(taskInput) taskInput.placeholder = "Cole aqui suas anotações, conversa com a equipe ou regras técnicas gerais. Exemplo:\n'Falamos com o time e decidimos que o dropdown de redes só pode listar VPCs da conta Oracle autenticada, o token expira em 15min e refresh token no Redis, se der erro retornar 401/403'...";
    } else {
      if(panelInputIcon) panelInputIcon.textContent = "⚡";
      if(panelInputTitle) panelInputTitle.textContent = "Configuração Completa: Contexto + Prompt";
      if(panelOutputTitle) panelOutputTitle.textContent = "Artefato Completo (Contexto & Prompt)";
      if(btnRunLabel) btnRunLabel.textContent = "⚡ Gerar Contexto & Prompt (Combo)";
      if(promptControls) promptControls.style.display = "grid";
      if(promptSwitches) promptSwitches.style.display = "flex";
      if(contextControls) contextControls.style.display = "grid";
      if(taskInput) taskInput.placeholder = "Cole suas regras de negócio ou anotações brutas. O sistema vai extrair a janela de contexto E gerar o prompt com os 5 princípios em uma execução.";
    }
  }
  modeTabs.forEach(function(tab){ tab.addEventListener("click", function(){ switchMode(tab.dataset.mode); }); });

  if(selRole) selRole.addEventListener("change", function(){ customRoleInput.style.display = selRole.value === "custom" ? "block" : "none"; if(selRole.value === "custom") customRoleInput.focus(); });
  if(selFormat) selFormat.addEventListener("change", function(){ customFormatInput.style.display = selFormat.value === "custom" ? "block" : "none"; if(selFormat.value === "custom") customFormatInput.focus(); });
  if(selDomain) selDomain.addEventListener("change", function(){ customDomainInput.style.display = selDomain.value === "custom" ? "block" : "none"; if(selDomain.value === "custom") customDomainInput.focus(); });

  if(taskInput) taskInput.addEventListener("input", function(){ if(charCount) charCount.textContent = taskInput.value.length + " caracteres"; });

  function buildSystemInstruction(){
    var role = (selRole.value === "custom" && customRoleInput.value.trim()) ? customRoleInput.value.trim() : selRole.value;
    var format = (selFormat.value === "custom" && customFormatInput.value.trim()) ? customFormatInput.value.trim() : selFormat.value;
    var domain = (selDomain.value === "custom" && customDomainInput.value.trim()) ? customDomainInput.value.trim() : selDomain.value;
    var contextFormat = selContextFormat.value;
    var compression = selCompression.value;

    if(currentMode === "prompt"){
      var promptInst = "Você é um Engenheiro Principal de IA e Especialista em Engenharia de Prompt de Alto Nível.\n" +
        "Sua missão é construir UM ÚNICO PROMPT DEFINITIVO, EXTREMAMENTE ROBUSTO, SEM AMBIGUIDADES, PRONTO PARA USO EM PRODUÇÃO.\n\n" +
        "PARÂMETROS MANDATÓRIOS SELECIONADOS PELO USUÁRIO:\n" +
        "- PAPEL / PERSONA: " + role + "\n" +
        "- CONTRATO / FORMATO DE SAÍDA: " + format + "\n\n" +
        "ESTRUTURA OBRIGATÓRIA (OS 5 PRINCÍPIOS):\n" +
        "Emita EXATAMENTE o bloco de código Markdown a seguir preenchido para o caso de uso fornecido:\n" +
        "```markdown\n" +
        "# [1. DIREÇÃO]\n" +
        "Você é " + role + ".\n" +
        "Sua missão é [Defina com clareza cristalina e métricas o objetivo central].\n" +
        "Resultado Esperado: [Critério de sucesso].\n\n" +
        "# [2. ESPECIFICAR O FORMATO]\n" +
        "Sua resposta DEVE seguir estritamente o seguinte formato de saída, sem nenhum texto introdutório ou conclusivo:\n" +
        format + "\n";
      if(chkFewShot.checked){
        promptInst += "\n# [3. DÊ EXEMPLOS (FEW-SHOT)]\n## Exemplo de Entrada:\n[Cenário realista de entrada]\n\n## Exemplo de Saída Esperada:\n[Saída perfeitamente formatada e determinística]\n";
      }
      if(chkQuality.checked){
        promptInst += "\n# [4. AVALIE A QUALIDADE (CRITÉRIOS DE ACEITE)]\nAntes de emitir o resultado, autoavalie a resposta contra este checklist:\n- [ ] [Critério 1: Fidelidade aos requisitos e ausência de alucinações]\n- [ ] [Critério 2: Conformidade 100% com o formato exigido]\n- [ ] [Critério 3: Completude técnica sem enrolação]\n";
      }
      if(chkSteps.checked){
        promptInst += "\n# [5. DIVIDA O TRABALHO (PASSO A PASSO / CHAIN-OF-THOUGHT)]\nExecute o processamento nas seguintes etapas lógicas:\n1. Etapa 1 - [Análise/Interpretação]\n2. Etapa 2 - [Execução/Transformação]\n3. Etapa 3 - [Validação e Entrega Final]\n";
      }
      promptInst += "```\n\nREGRAS DE SAÍDA:\n1. ZERO METATEXTO: Comece direto no '# [1. DIREÇÃO]'. Nada de saudações ou comentários no final.\n2. Emita o bloco de código ```markdown exatamente delimitado para permitir cópia limpa.";
      return promptInst;
    } else if(currentMode === "context"){
      return "Você é um Especialista em Otimização de Janela de Contexto e Arquitetura de Memória para Agentes Autônomos de IA.\n" +
        "Sua missão é analisar o rascunho ou anotações técnicas do usuário e transformá-los em UMA JANELA DE CONTEXTO DESAMBIGUADA, FACTUAL E ULTRA-EFICIENTE.\n\n" +
        "PARÂMETROS SELECIONADOS:\n- DOMÍNIO: " + domain + "\n- FORMATO: " + contextFormat + "\n- NÍVEL DE COMPRESSÃO: " + compression + "\n\n" +
        "DIRETRIZES TÉCNICAS:\n1. Elimine toda hesitação, redundância e pronomes vagos ('acho que', 'talvez', 'foi falado').\n2. Preserve 100% dos fatos, entidades, siglas, limites numéricos, regras de negócio e restrições mandatórias.\n3. Emita a estrutura delimitada abaixo exatamente dentro de um bloco de código:\n\n" +
        "```xml\n<contexto_agente dominio=\"" + escapeHtml(domain) + "\">\n  <dominio_e_objetivo>\n    [Escopo exato, propósito central do sistema e metas de negócio]\n  </dominio_e_objetivo>\n  <regras_e_diretrizes>\n    - [Regra mandatória 1]\n    - [Regra mandatória 2]\n  </regras_e_diretrizes>\n  <entidades_e_terminologias>\n    - [Termo/Componente/Sigla]: [Significado e papel na arquitetura]\n  </entidades_e_terminologias>\n  <restricoes_e_invariantes>\n    - [O que o agente NUNCA deve fazer ou assumir]\n  </restricoes_e_invariantes>\n</contexto_agente>\n```\n\n" +
        "SAÍDA: Apenas o bloco de código XML estruturado. ZERO preâmbulo, zero comentários pós-geração.";
    } else {
      return "Você é um Especialista Principal em Arquitetura de IA e Engenharia de Prompt.\n" +
        "Gere DOIS ARTEFATOS COMPLETOS E DESACOPLADOS para o cenário do usuário:\n\n" +
        "### 📦 1. JANELA DE CONTEXTO OTIMIZADA PARA O AGENTE\nEmita o bloco ```xml com as tags <contexto_agente>, <dominio_e_objetivo>, <regras_e_diretrizes>, <entidades_e_terminologias> e <restricoes_e_invariantes> compactadas e factuais.\n\n" +
        "### 🎯 2. PROMPT DE ALTA PERFORMANCE (OS 5 PRINCÍPIOS)\nEmita o bloco ```markdown com [1. DIREÇÃO] (" + role + "), [2. ESPECIFICAR O FORMATO] (" + format + "), [3. DÊ EXEMPLOS], [4. AVALIE A QUALIDADE] e [5. DIVIDA O TRABALHO].\n\n" +
        "SAÍDA: Apenas os dois blocos em Markdown, sem saudações e sem comentários no final.";
    }
  }

  // ===== Descoberta de modelo :free do OpenRouter =====
  function familyRank(id, pref){ for(var i = 0; i < pref.length; i++){ if(id.indexOf(pref[i]) !== -1) return i; } return pref.length; }
  async function openrouterFreeModels(){
    if(orModelsCache) return orModelsCache;
    try{
      var res = await fetch("https://openrouter.ai/api/v1/models", { signal: AbortSignal.timeout(12000) });
      if(!res.ok) throw new Error("models " + res.status);
      var data = await res.json();
      var pref = ["gpt-oss", "llama", "qwen", "deepseek", "mistral", "gemma", "nemotron", "gemini"];
      var BAD = /content-safety|guard|moderation|embed|rerank|tts|stt|whisper|omni|(^|[\/-])vl(:|$)|vision|reasoning/i;
      var BIG = /ultra|-?(?:70b|72b|120b|123b|180b|235b|405b|480b|550b|671b)/i;
      var free = (data.data || []).filter(function(m){
        var pr = m.pricing || {};
        var zero = (pr.prompt === "0" || pr.prompt === 0) && (pr.completion === "0" || pr.completion === 0);
        return /:free$/.test(m.id || "") && zero && !BAD.test(m.id);
      }).map(function(m){ return m.id; });
      free.sort(function(a, b){ return (familyRank(a, pref) + (BIG.test(a) ? 4 : 0)) - (familyRank(b, pref) + (BIG.test(b) ? 4 : 0)); });
      orModelsCache = free.length ? free : OR_FALLBACK.slice();
    }catch(e){ orModelsCache = OR_FALLBACK.slice(); }
    return orModelsCache;
  }

  // ===== Chamadas =====
  async function geminiCall(key, model, sys, userText, gcfg){
    var url = "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent";
    var res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      body: JSON.stringify({ systemInstruction: { parts: [{ text: sys }] }, contents: [{ parts: [{ text: userText }] }], generationConfig: gcfg }),
      signal: AbortSignal.timeout(35000)
    });
    if(!res.ok){
      var ed = await res.json().catch(function(){ return {}; });
      var msg = ed.error ? ed.error.message : ("Erro HTTP " + res.status);
      if(res.status === 400 && /thinking/i.test(msg) && gcfg.thinkingConfig){ return geminiCall(key, model, sys, userText, { temperature: 0.2 }); }
      var ge = new Error(msg); ge.status = res.status; throw ge;
    }
    var data = await res.json();
    var c = data.candidates && data.candidates[0];
    if(!c || !c.content || !c.content.parts) throw new Error("Resposta vazia do modelo.");
    return c.content.parts.map(function(x){ return x.text || ""; }).join("");
  }
  async function openaiCall(p, key, model, sys, userText){
    var endpoint = p.id === "groq" ? "https://api.groq.com/openai/v1/chat/completions" : "https://openrouter.ai/api/v1/chat/completions";
    var headers = { "Content-Type": "application/json", "Authorization": "Bearer " + key };
    if(p.id === "openrouter"){ headers["HTTP-Referer"] = "https://thallyscezar.github.io"; headers["X-Title"] = "Prompt Studio"; }
    var r = await fetch(endpoint, {
      method: "POST", headers: headers,
      body: JSON.stringify({ model: model, temperature: 0.2, messages: [{ role: "system", content: sys }, { role: "user", content: userText }] }),
      signal: AbortSignal.timeout(p.id === "openrouter" ? 20000 : 35000)
    });
    if(!r.ok){
      var eo = await r.json().catch(function(){ return {}; });
      var em = eo.error ? (eo.error.message || JSON.stringify(eo.error)) : ("Erro HTTP " + r.status);
      var ex = new Error(em); ex.status = r.status; throw ex;
    }
    var d2 = await r.json();
    var ch = d2.choices && d2.choices[0];
    if(!ch || !ch.message || !ch.message.content) throw new Error("Resposta vazia do modelo.");
    return { text: ch.message.content, model: d2.model || model };
  }
  function isModelError(msg){ return /not found|does not exist|no longer available|unavailable for free|do not have access|not available to|is not a valid|decommission|invalid model|not supported/i.test(msg || ""); }
  function isOverloaded(err){
    var m = (err && err.message) || ""; var st = err && err.status;
    return st === 429 || st === 503 || st === 502 || st === 500 ||
      /\b(429|503|502|500)\b|too many|rate.?limit|provider returned error|overloaded|temporar|high demand|spikes? in demand|service unavailable|try again later|capacity|no instances|no endpoints/i.test(m);
  }
  function isRetryable(err){
    if(isOverloaded(err)) return true;
    var n = (err && err.name) || ""; var m = (err && err.message) || "";
    return n === "TimeoutError" || n === "AbortError" || /aborted|timed out|timeout|failed to fetch|networkerror|load failed|resposta vazia/i.test(m);
  }
  async function callOne(p, model, sys, userText){
    var key = getKey(p);
    if(p.id === "gemini"){
      var gcfg = { temperature: 0.2 };
      if(/gemini-3/.test(model)) gcfg.thinkingConfig = { thinkingLevel: "low" };
      else if(/gemini-2/.test(model)) gcfg.thinkingConfig = { thinkingBudget: 0 };
      var gtext = await geminiCall(key, model, sys, userText, gcfg);
      return { text: gtext, model: model };
    }
    return openaiCall(p, key, model, sys, userText);
  }
  async function tryModels(p, models, sys, userText, attempts){
    attempts = attempts || 3;
    var lastErr = null;
    var maxModels = Math.min(models.length, 5);
    for(var i = 0; i < maxModels; i++){
      for(var a = 0; a < attempts; a++){
        try{ return await callOne(p, models[i], sys, userText); }
        catch(err){
          lastErr = err;
          if(isModelError(err && err.message)) break;
          if(isRetryable(err)){ if(a < attempts - 1){ await new Promise(function(r){ setTimeout(r, 700 * (a + 1)); }); continue; } break; }
          throw err;
        }
      }
    }
    throw lastErr || new Error("Nenhum modelo disponível.");
  }
  async function callProvider(p, sys, userText){
    if(p.id === "openrouter"){
      var freeList = await openrouterFreeModels();
      try{ return await tryModels(p, freeList.slice(0, 4), sys, userText, 1); }
      catch(err){
        if(isRetryable(err)) throw new Error("Os modelos :free do OpenRouter estão lotados agora (compartilhados). Tente de novo em alguns segundos.");
        throw err;
      }
    }
    try{ return await tryModels(p, p.models, sys, userText, 3); }
    catch(err){
      if(isRetryable(err)) throw new Error(p.name + " está com alta demanda agora. Tente de novo em alguns segundos.");
      throw err;
    }
  }

  // ===== Cards =====
  var lastText = {};
  function card(p){ return $("card-" + p.id); }
  function headHtml(p, model){
    return '<div class="rc-head"><span class="rc-prov"><span class="rc-ic">' + p.icon + '</span>' + p.name +
           '</span><span class="rc-model">' + escapeHtml(model || p.label) + '</span></div>';
  }
  function setCardIdle(p){ var el = card(p); if(!el) return; el.className = "result-card"; el.innerHTML = headHtml(p) + '<div class="rc-state">Aguardando. Preencha a chave e clique em gerar.</div>'; }
  function setCardNoKey(p){ var el = card(p); if(!el) return; el.className = "result-card"; el.innerHTML = headHtml(p) + '<div class="rc-state err">Sem chave. Cole a chave do ' + p.name + ' acima para incluir na comparação.</div>'; }
  function setCardLoading(p){ var el = card(p); if(!el) return; el.className = "result-card"; el.innerHTML = headHtml(p) + '<div class="rc-state"><div class="spinner"></div>Gerando...</div>'; }
  function setCardError(p, msg){ var el = card(p); if(!el) return; el.className = "result-card"; el.innerHTML = headHtml(p) + '<div class="rc-state err">' + escapeHtml(msg) + '</div>'; }
  function setCardResult(p, text, model, secs){
    var el = card(p); if(!el) return;
    el.className = "result-card";
    lastText[p.id] = text;
    var body = '<div class="rc-body">' + renderMarkdown(text) + '</div>';
    var foot = '<div class="rc-foot"><span class="rc-time">⚡ ' + secs + 's · ' + text.length + ' car.</span>' +
               '<button type="button" class="rc-copy" data-copy="' + p.id + '">📋 Copiar</button></div>';
    el.innerHTML = headHtml(p, model) + body + foot;
  }
  document.addEventListener("click", function(e){
    var b = e.target && e.target.closest ? e.target.closest(".rc-copy") : null;
    if(!b) return;
    var id = b.dataset.copy, txt = lastText[id] || "";
    if(!txt) return;
    navigator.clipboard.writeText(txt).then(function(){
      var old = b.textContent; b.textContent = "✓ Copiado"; b.classList.add("copied");
      setTimeout(function(){ b.textContent = old; b.classList.remove("copied"); }, 1600);
      showToast("Resultado copiado!", "ok");
    }).catch(function(){ showToast("Não consegui copiar.", "err"); });
  });

  // ===== Disparo paralelo =====
  var running = false;
  function runAll(){
    if(running) return;
    var text = taskInput ? taskInput.value.trim() : "";
    if(!text){ showToast("Descreva a tarefa ou cole as anotações.", "err"); if(taskInput) taskInput.focus(); return; }
    var anyKey = PROVIDERS.some(function(p){ return getKey(p); });
    if(!anyKey){ showToast("Preencha ao menos 1 chave de API.", "err"); return; }
    running = true;
    if(btnRun) btnRun.disabled = true;
    var sys = buildSystemInstruction();
    var pending = [];
    PROVIDERS.forEach(function(p){
      if(!getKey(p)){ setCardNoKey(p); return; }
      setCardLoading(p);
      var t0 = performance.now();
      var pr = callProvider(p, sys, text).then(function(r){
        setCardResult(p, (r.text || "").trim(), r.model, ((performance.now() - t0) / 1000).toFixed(2));
      }).catch(function(err){
        var m = (err && err.message) ? err.message : "Falha na requisição";
        if(err && (err.name === "TimeoutError" || err.name === "AbortError")) m = p.name + ": tempo esgotado, tente de novo.";
        setCardError(p, m);
      });
      pending.push(pr);
    });
    Promise.allSettled(pending).then(function(){ running = false; if(btnRun) btnRun.disabled = false; });
  }
  if(btnRun) btnRun.addEventListener("click", runAll);
  document.addEventListener("keydown", function(e){ if((e.ctrlKey || e.metaKey) && e.key === "Enter"){ e.preventDefault(); runAll(); } });

  // ===== Init =====
  loadKeys();
  var btnClearKeys = $("btnClearKeys");
  if(btnClearKeys) btnClearKeys.addEventListener("click", function(){
    if(!confirm("Apagar as 3 chaves salvas neste navegador?")) return;
    PROVIDERS.forEach(function(p){
      try { localStorage.removeItem(p.storage); } catch(e){}
      var el = keyEl(p); if(el){ el.value = ""; }
      refreshDot(p);
    });
    showToast("Chaves apagadas deste navegador.", "ok");
  });
  switchMode("prompt");
  PROVIDERS.forEach(setCardIdle);

})();
