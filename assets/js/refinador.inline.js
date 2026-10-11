/* Extraido de ferramentas/refinador.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 1 ---------- */

(function(){
  "use strict";

  // ===== Prompts por formato =====
  var PRESET_PROMPTS = {
    fiel: `Você é um revisor de texto técnico. Corrija e dê fluidez ao rascunho, mantendo o texto o MAIS FIEL POSSÍVEL ao que a pessoa escreveu.

FAÇA:
- Corrigir gramática, concordância, ortografia e pontuação.
- Deixar as frases claras e naturais, com leitura profissional.
- Quebrar em parágrafos quando ajudar a leitura.

NÃO FAÇA (crítico):
- NÃO invente seções, títulos, cabeçalhos, bullets ou listas que não existam no rascunho. Sem tópicos na entrada = sem tópicos na saída.
- NÃO adicione emoji.
- NÃO troque palavras simples por sinônimos rebuscados. Mantenha o vocabulário da pessoa; corrija só o que está errado ou ambíguo.
- NÃO adicione informação, opinião ou elogio; NÃO remova fatos, nomes, siglas ou números.
- NÃO transforme em relatório corporativo. Deve continuar soando como quem escreveu, só que correto e fluido.

PRESERVE EXATAMENTE:
- Linhas de imagem markdown, ex: ![image](/uploads/.../image.png).
- Listas que já existirem no rascunho (ex: '- Imagem 1: ...').
- Termos e siglas técnicas (VDC, Oracle, account provider, etc.).

SAÍDA: apenas o texto final corrigido. Zero metatexto, zero 'Aqui está:', zero comentário no fim.`,

    formal: `Você é um revisor que deixa o rascunho mais formal, claro e coeso, SEM exagerar.
Entregue UMA ÚNICA versão final, pronta para enviar.

REGRAS:
1. UMA ÚNICA VERSÃO, sem 'Opção 1/Opção 2'.
2. ZERO METATEXTO: comece direto na primeira palavra do texto. Nada de 'Aqui está:' nem comentários no fim.
3. FORMALIDADE COM MODERAÇÃO: corrija gramática, concordância e pontuação e eleve o tom para profissional. NÃO troque palavras simples por termos rebuscados só para soar sofisticado; mantenha o texto natural.
4. NÃO invente seções, cabeçalhos, bullets nem emoji que não existam no rascunho.
5. PRESERVE 100% dos fatos, nomes, números, siglas, decisões e a intenção. Preserve linhas de imagem markdown e listas já existentes.`,

    email: `Você é um redator executivo especialista em comunicação corporativa.
Sua missão é transformar as ideias do usuário em UM ÚNICO E-MAIL FORMAL pronto para envio.

REGRAS CRÍTICAS DE SAÍDA:
1. UMA ÚNICA VERSÃO: Entregue apenas uma versão definitiva.
2. ZERO METATEXTO: Não escreva introduções de IA nem justificativas no final. O primeiro caractere DEVE ser 'Assunto:'.
3. ESTRUTURA DO E-MAIL:
Assunto: [Assunto claro e contextualizado entre colchetes]

[Corpo do e-mail formal, elegante e objetivo em 1 ou 2 parágrafos]

Próximos Passos:
• [Ação 1]
• [Ação 2 se houver]

Atenciosamente,
[Seu Nome / Equipe]`,

    task: `Você é um desenvolvedor sênior documentando o que fez em um comentário de Task/Issue (Jira, GitHub, Linear).
Reescreva o rascunho de forma clara, correta e objetiva, mantendo a intenção e o jeito de quem escreveu.

REGRAS:
1. UMA ÚNICA VERSÃO pronta para colar. ZERO METATEXTO e zero comentário no fim.
2. Corrija gramática, concordância e pontuação; deixe fluido e profissional, sem inflar o vocabulário.
3. NÃO force cabeçalhos, seções fixas nem emoji. Só use tópicos ou subtítulos se o próprio rascunho tiver vários assuntos que fiquem mais claros separados; caso contrário, mantenha em parágrafos.
4. PRESERVE fatos, nomes, números, siglas, listas já existentes e linhas de imagem markdown.`,

    ingles: `You are a Principal Software Engineer and executive communications expert.
Rewrite the user's raw notes or Portuguese ideas into ONE SINGLE, FLUENT, POLISHED, CORPORATE TECH ENGLISH text.

CRITICAL RULES:
1. ONE SINGLE VERSION: Do not output multiple options or bulleted alternatives.
2. ZERO META-TALK: Do not say 'Here is the translation:' or 'Option 1'. Start directly with the first word of the English text.
3. ZERO POST-ANALYSIS: Do not add explanations of grammatical changes or notes at the end.`,

    warroom: `Você é o Incident Commander em um comitê de crise técnica (War Room).
Transforme o rascunho em UM ÚNICO Comunicado Oficial de Incidente calmo, técnico e objetivo.

REGRAS CRÍTICAS DE SAÍDA:
1. UMA ÚNICA VERSÃO definitiva.
2. ZERO METATEXTO: Comece diretamente no '🚨 Status Atual:'.
3. ESTRUTURA:
🚨 **Status Atual**: [Investigando / Mitigado / Resolvido]
👥 **Impacto no Sistema**: [Serviços e usuários afetados]
⏱️ **Contenção Imediata**: [Ações executadas para estancar]
🔍 **Causa Raiz & Próximos Passos**: [Diagnóstico e plano definitivo].`,

    direto: `Você é um editor implacável de comunicação corporativa enxuta (Zero Ruído).
Reescreva o rascunho em UMA ÚNICA mensagem formal, firme, polida e extremamente direta ao ponto.

REGRAS CRÍTICAS DE SAÍDA:
1. UMA ÚNICA VERSÃO: Curta, formal, assertiva e impecável.
2. ZERO METATEXTO: Comece na primeira palavra do texto.
3. ZERO RODEIOS: Elimine hesitações ('acho que', 'talvez'), desculpas e palavras vazias.`
  };

  // ===== Provedores: lista de modelos gratuitos (tenta em ordem; se um sair, cai no proximo) =====
  var PROVIDERS = [
    { id: "gemini", name: "Google Gemini", icon: "⚡", storage: "refinador_gemini_api_key",
      label: "gemini-3.8-flash", models: ["gemini-3.8-flash", "gemini-3.5-flash", "gemini-2.5-flash"] },
    { id: "groq", name: "Groq Cloud", icon: "🚀", storage: "refinador_groq_api_key",
      label: "openai/gpt-oss-20b", models: ["openai/gpt-oss-20b", "openai/gpt-oss-120b", "qwen/qwen3.6-27b"] },
    { id: "openrouter", name: "OpenRouter", icon: "🌐", storage: "refinador_openrouter_api_key",
      label: "auto · :free", models: [] } // resolvido dinamicamente
  ];

  // Fallback caso a descoberta do OpenRouter falhe
  var OR_FALLBACK = ["deepseek/deepseek-r1:free", "nvidia/nemotron-3.5-lightning:free", "qwen/qwen3.6-27b:free", "meta-llama/llama-3.3-70b-instruct:free"];
  var orModelsCache = null;

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

  // ===== Toast =====
  var toast = $("toast"), toastTimer = null;
  function showToast(msg, type){
    if(!toast) return;
    if(toastTimer) clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.className = "toast show" + (type ? " " + type : "");
    toastTimer = setTimeout(function(){ toast.className = "toast"; }, 3200);
  }

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

  // ===== Presets =====
  var currentPreset = "fiel";
  var draft = $("draftText");
  var customInst = $("customInst");
  var btnRefineLabel = $("btnRefineLabel");

  Array.prototype.forEach.call(document.querySelectorAll(".preset-btn"), function(btn){
    btn.addEventListener("click", function(){
      Array.prototype.forEach.call(document.querySelectorAll(".preset-btn"), function(b){ b.classList.remove("active"); });
      btn.classList.add("active");
      currentPreset = btn.dataset.preset;
      if(btnRefineLabel && btn.dataset.btnLabel) btnRefineLabel.innerHTML = btn.dataset.btnLabel;
    });
  });

  var charCount = $("charCount"), wordCount = $("wordCount");
  if(draft){
    draft.addEventListener("input", function(){
      var t = draft.value;
      if(charCount) charCount.textContent = t.length + " caracteres";
      if(wordCount) wordCount.textContent = (t.trim() ? t.trim().split(/\s+/).length : 0) + " palavras";
    });
  }

  function buildSystemInstruction(){
    var base = PRESET_PROMPTS[currentPreset] || PRESET_PROMPTS.fiel;
    var extra = customInst ? customInst.value.trim() : "";
    return extra ? base + "\n\nDiretriz adicional do usuário: " + extra : base;
  }

  // ===== Descoberta de modelo :free do OpenRouter =====
  function familyRank(id, pref){
    for(var i = 0; i < pref.length; i++){ if(id.indexOf(pref[i]) !== -1) return i; }
    return pref.length;
  }
  async function openrouterFreeModels(){
    if(orModelsCache) return orModelsCache;
    try{
      var res = await fetch("https://openrouter.ai/api/v1/models", { signal: AbortSignal.timeout(12000) });
      if(!res.ok) throw new Error("models " + res.status);
      var data = await res.json();
      var pref = ["gpt-oss", "llama", "qwen", "deepseek", "mistral", "gemma", "nemotron", "gemini"];
      // Evita modelos especializados (moderacao, visao, audio, embeddings) para tarefa de texto
      var BAD = /content-safety|guard|moderation|embed|rerank|tts|stt|whisper|omni|(^|[\/-])vl(:|$)|vision|reasoning/i;
      var free = (data.data || []).filter(function(m){
        var pr = m.pricing || {};
        var zero = (pr.prompt === "0" || pr.prompt === 0) && (pr.completion === "0" || pr.completion === 0);
        return /:free$/.test(m.id || "") && zero && !BAD.test(m.id);
      }).map(function(m){ return m.id; });
      var BIG = /ultra|-?(?:70b|72b|120b|123b|180b|235b|405b|480b|550b|671b)/i;
      free.sort(function(a, b){
        return (familyRank(a, pref) + (BIG.test(a) ? 4 : 0)) - (familyRank(b, pref) + (BIG.test(b) ? 4 : 0));
      });
      orModelsCache = free.length ? free : OR_FALLBACK.slice();
    }catch(e){
      orModelsCache = OR_FALLBACK.slice();
    }
    return orModelsCache;
  }

  // ===== Chamada a UM modelo especifico =====
  async function geminiCall(key, model, sys, userText, gcfg){
    var url = "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent";
    var res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: sys }] },
        contents: [{ parts: [{ text: userText }] }],
        generationConfig: gcfg
      }),
      signal: AbortSignal.timeout(35000)
    });
    if(!res.ok){
      var ed = await res.json().catch(function(){ return {}; });
      var msg = ed.error ? ed.error.message : ("Erro HTTP " + res.status);
      // Se o modelo rejeitar thinkingConfig, reenvia so com temperatura
      if(res.status === 400 && /thinking/i.test(msg) && gcfg.thinkingConfig){
        return geminiCall(key, model, sys, userText, { temperature: 0.2 });
      }
      var ge = new Error(msg); ge.status = res.status; throw ge;
    }
    var data = await res.json();
    var c = data.candidates && data.candidates[0];
    if(!c || !c.content || !c.content.parts) throw new Error("Resposta vazia do modelo.");
    return c.content.parts.map(function(x){ return x.text || ""; }).join("");
  }

  async function openaiCall(p, key, model, sys, userText){
    var endpoint = p.id === "groq"
      ? "https://api.groq.com/openai/v1/chat/completions"
      : "https://openrouter.ai/api/v1/chat/completions";
    var headers = { "Content-Type": "application/json", "Authorization": "Bearer " + key };
    if(p.id === "openrouter"){
      headers["HTTP-Referer"] = "https://thallyscezar.github.io";
      headers["X-Title"] = "Refinador de Texto";
    }
    var body = { temperature: 0.2, messages: [ { role: "system", content: sys }, { role: "user", content: userText } ] };
    if(Array.isArray(model)) body.models = model; else body.model = model; // OpenRouter aceita 'models' e roteia p/ um :free disponivel
    var r = await fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
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
    return { text: ch.message.content, model: d2.model || (Array.isArray(model) ? model[0] : model) };
  }

  function isModelError(msg){
    return /not found|does not exist|no longer available|unavailable for free|do not have access|not available to|is not a valid|decommission|invalid model|not supported/i.test(msg || "");
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
    return openaiCall(p, key, model, sys, userText); // ja devolve { text, model }
  }

  // Sobrecarga/limite (comum nos :free do OpenRouter, que sao compartilhados entre todos)
  function isOverloaded(err){
    var m = (err && err.message) || "";
    var st = err && err.status;
    return st === 429 || st === 503 || st === 502 || st === 500 ||
      /\b(429|503|502|500)\b|too many|rate.?limit|provider returned error|overloaded|temporar|high demand|spikes? in demand|service unavailable|try again later|capacity|no instances|no endpoints/i.test(m);
  }

  // Erro transitorio (sobrecarga 429/503, timeout, abort, rede) -> vale tentar de novo
  function isRetryable(err){
    if(isOverloaded(err)) return true;
    var n = (err && err.name) || "";
    var m = (err && err.message) || "";
    return n === "TimeoutError" || n === "AbortError" || /aborted|timed out|timeout|failed to fetch|networkerror|load failed|resposta vazia/i.test(m);
  }

  // Tenta cada modelo; em erro transitorio re-tenta o MESMO modelo ate 'attempts' vezes antes do proximo. Devolve { text, model }
  async function tryModels(p, models, sys, userText, attempts){
    attempts = attempts || 3;
    var lastErr = null;
    var maxModels = Math.min(models.length, 5);
    for(var i = 0; i < maxModels; i++){
      for(var a = 0; a < attempts; a++){
        try{
          return await callOne(p, models[i], sys, userText);
        }catch(err){
          lastErr = err;
          if(isModelError(err && err.message)) break;          // modelo invalido: vai pro proximo modelo
          if(isRetryable(err)){
            if(a < attempts - 1){ await new Promise(function(r){ setTimeout(r, 700 * (a + 1)); }); continue; } // pico momentaneo: re-tenta o mesmo
            break;                                              // esgotou tentativas deste modelo: proximo
          }
          throw err;                                           // erro permanente (chave/rede): para aqui
        }
      }
    }
    throw lastErr || new Error("Nenhum modelo disponível.");
  }

  async function callProvider(p, sys, userText){
    if(p.id === "openrouter"){
      // pool :free e compartilhado e vive lotado: tenta poucos modelos rapidos, 1 vez cada, e desiste limpo
      var freeList = await openrouterFreeModels();
      try{
        return await tryModels(p, freeList.slice(0, 4), sys, userText, 1);
      }catch(err){
        if(isRetryable(err)) throw new Error("Os modelos :free do OpenRouter estão lotados agora (compartilhados com todo mundo). Tente de novo em alguns segundos.");
        throw err;
      }
    }
    try{
      return await tryModels(p, p.models, sys, userText, 3);
    }catch(err){
      if(isRetryable(err)) throw new Error(p.name + " está com alta demanda agora. Tente de novo em alguns segundos.");
      throw err;
    }
  }

  // ===== Cards =====
  var lastText = {};
  var lastOrig = "";

  // Diff por palavras (LCS) para destacar o que o modelo mudou
  function dwords(s){ return (s || "").trim().split(/\s+/).filter(Boolean); }
  function lcsWords(A, B){
    var n = A.length, m = B.length;
    if(n * m > 500000) return null; // texto muito grande: pula o diff
    var dp = [];
    for(var i = 0; i <= n; i++){ dp[i] = new Array(m + 1).fill(0); }
    for(var i = n - 1; i >= 0; i--){ for(var j = m - 1; j >= 0; j--){
      dp[i][j] = A[i] === B[j] ? dp[i+1][j+1] + 1 : Math.max(dp[i+1][j], dp[i][j+1]);
    } }
    var i2 = 0, j2 = 0, ops = [];
    while(i2 < n && j2 < m){
      if(A[i2] === B[j2]){ ops.push(["s", B[j2]]); i2++; j2++; }
      else if(dp[i2+1][j2] >= dp[i2][j2+1]){ ops.push(["d", A[i2]]); i2++; }
      else { ops.push(["a", B[j2]]); j2++; }
    }
    while(i2 < n){ ops.push(["d", A[i2]]); i2++; }
    while(j2 < m){ ops.push(["a", B[j2]]); j2++; }
    return ops;
  }
  function buildDiff(orig, out){
    var ops = lcsWords(dwords(orig), dwords(out));
    if(!ops) return { html: null, changes: -1 };
    var html = ops.map(function(o){
      var v = escapeHtml(o[1]);
      if(o[0] === "s") return v;
      if(o[0] === "a") return "<ins>" + v + "</ins>";
      return "<del>" + v + "</del>";
    }).join(" ");
    var changes = 0, prev = "s";
    ops.forEach(function(o){ var cur = o[0] === "s" ? "s" : "c"; if(cur === "c" && prev === "s") changes++; prev = cur; });
    return { html: '<div class="rc-diffwrap">' + html + "</div>", changes: changes };
  }

  function card(p){ return $("card-" + p.id); }
  function headHtml(p, model){
    return '<div class="rc-head"><span class="rc-prov"><span class="rc-ic">' + p.icon + '</span>' + p.name +
           '</span><span class="rc-model">' + escapeHtml(model || p.label) + '</span></div>';
  }
  function setCardIdle(p){
    var el = card(p); if(!el) return;
    el.className = "result-card";
    el.innerHTML = headHtml(p) + '<div class="rc-state">Aguardando. Preencha a chave e clique em gerar.</div>';
  }
  function setCardNoKey(p){
    var el = card(p); if(!el) return;
    el.className = "result-card";
    el.innerHTML = headHtml(p) + '<div class="rc-state err">Sem chave. Cole a chave do ' + p.name + ' acima para incluir na comparação.</div>';
  }
  function setCardLoading(p){
    var el = card(p); if(!el) return;
    el.className = "result-card";
    el.innerHTML = headHtml(p) + '<div class="rc-state"><div class="spinner"></div>Gerando...</div>';
  }
  function setCardError(p, msg){
    var el = card(p); if(!el) return;
    el.className = "result-card";
    el.innerHTML = headHtml(p) + '<div class="rc-state err">' + escapeHtml(msg) + '</div>';
  }
  function setCardResult(p, text, model, secs){
    var el = card(p); if(!el) return;
    el.className = "result-card";
    lastText[p.id] = text;
    var d = buildDiff(lastOrig, text);
    var badge = d.changes < 0 ? (" · " + text.length + " car.")
      : (d.changes === 0 ? " · sem alterações" : " · " + d.changes + (d.changes > 1 ? " trechos mudados" : " trecho mudado"));
    var normal = '<div class="rc-body rc-view" data-view="normal-' + p.id + '">' + renderMarkdown(text) + '</div>';
    var diff = d.html ? '<div class="rc-view" data-view="diff-' + p.id + '" hidden>' + d.html + '</div>' : "";
    var diffBtn = d.html ? '<button type="button" class="rc-copy rc-diffbtn" data-diff="' + p.id + '">🔍 Mudanças</button>' : "";
    var foot = '<div class="rc-foot"><span class="rc-time">⚡ ' + secs + 's' + badge + '</span>' +
               '<span class="rc-actions">' + diffBtn +
               '<button type="button" class="rc-copy" data-copy="' + p.id + '">📋 Copiar</button></span></div>';
    el.innerHTML = headHtml(p, model) + normal + diff + foot;
  }

  document.addEventListener("click", function(e){
    var t = e.target;
    var dbtn = t && t.closest ? t.closest(".rc-diffbtn") : null;
    if(dbtn){
      var pid = dbtn.dataset.diff, host = $("card-" + pid);
      var nv = host.querySelector('[data-view="normal-' + pid + '"]');
      var dv = host.querySelector('[data-view="diff-' + pid + '"]');
      if(nv && dv){
        var toDiff = dv.hidden;
        dv.hidden = !toDiff; nv.hidden = toDiff;
        dbtn.textContent = toDiff ? "📄 Ver normal" : "🔍 Mudanças";
      }
      return;
    }
    var b = t && t.closest ? t.closest(".rc-copy") : null;
    if(!b || b.classList.contains("rc-diffbtn")) return;
    var id = b.dataset.copy;
    var txt = lastText[id] || "";
    if(!txt) return;
    navigator.clipboard.writeText(txt).then(function(){
      var old = b.textContent;
      b.textContent = "✓ Copiado";
      b.classList.add("copied");
      setTimeout(function(){ b.textContent = old; b.classList.remove("copied"); }, 1600);
      showToast("Resposta copiada!", "ok");
    }).catch(function(){ showToast("Não consegui copiar.", "err"); });
  });

  // ===== Disparo paralelo =====
  var btnRefine = $("btnRefine");
  var running = false;

  function runAll(){
    if(running) return;
    var text = draft ? draft.value.trim() : "";
    if(!text){ showToast("Digite ou cole um rascunho.", "err"); if(draft) draft.focus(); return; }
    var anyKey = PROVIDERS.some(function(p){ return getKey(p); });
    if(!anyKey){ showToast("Preencha ao menos 1 chave de API.", "err"); return; }

    lastOrig = text;
    running = true;
    if(btnRefine) btnRefine.disabled = true;
    var sys = buildSystemInstruction();
    var pending = [];

    PROVIDERS.forEach(function(p){
      if(!getKey(p)){ setCardNoKey(p); return; }
      setCardLoading(p);
      var t0 = performance.now();
      var pr = callProvider(p, sys, text).then(function(r){
        var clean = (r.text || "").replace(/^\s*```(?:markdown|text)?\s*/i, "").replace(/\s*```\s*$/i, "").trim();
        setCardResult(p, clean, r.model, ((performance.now() - t0) / 1000).toFixed(2));
      }).catch(function(err){
        var m = (err && err.message) ? err.message : "Falha na requisição";
        if(err && err.name === "TimeoutError") m = "Tempo limite de 35s esgotado.";
        setCardError(p, m);
      });
      pending.push(pr);
    });

    Promise.allSettled(pending).then(function(){
      running = false;
      if(btnRefine) btnRefine.disabled = false;
    });
  }

  if(btnRefine) btnRefine.addEventListener("click", runAll);
  document.addEventListener("keydown", function(e){
    if((e.ctrlKey || e.metaKey) && e.key === "Enter"){ e.preventDefault(); runAll(); }
  });

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
  PROVIDERS.forEach(setCardIdle);

})();

