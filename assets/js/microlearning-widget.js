/* ==================== WIDGET DE MICROLEARNING EXPANDIDO ====================
 * - Desafio de múltipla escolha com 4 alternativas (A, B, C, D).
 * - Sorteio dinâmico entre dezenas de tópicos técnicos de engenharia.
 * - Feedback imediato: sucesso (+50 XP e streak) ou erro com rota de revisão direta.
 * - Integração híbrida: Banco local rico + Modo Gerador com IA Gemini (gratuito).
 */

(function() {
  var state = {
    currentQuestion: null,
    answered: false,
    selectedOption: null,
    isAiGenerated: false,
    isLoadingAi: false
  };

  function getStreak() {
    var todayStr = new Date().toISOString().slice(0, 10);
    var lastDate = localStorage.getItem('ml.lastDate');
    var streak = parseInt(localStorage.getItem('ml.streak') || '0', 10);

    if (lastDate && lastDate !== todayStr) {
      var diffDays = Math.round((new Date(todayStr) - new Date(lastDate)) / 864e5);
      if (diffDays > 1) {
        streak = 0;
        localStorage.setItem('ml.streak', '0');
      }
    }
    return { streak: streak, isPracticedToday: lastDate === todayStr };
  }

  function pickRandomLocalQuestion(excludeId) {
    var list = window.MICROLEARNING_QUESTIONS || [];
    if (list.length === 0) return null;
    var candidates = list.filter(function(q) { return q.id !== excludeId; });
    if (candidates.length === 0) candidates = list;
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  function getTrilhaCurta(trilha) {
    if (!trilha) return "Tecnologia";
    var map = {
      "Java Internals": "Java",
      "Spring Boot 3": "Spring",
      "Arquitetura de Software": "Arquitetura",
      "Docker & Kubernetes": "Docker & K8s",
      "Nuvem Multicloud": "Nuvem",
      "Mensageria & Filas": "Mensageria",
      "System Design": "System Design",
      "Inteligência Artificial & LLMs": "IA",
      "Linux & Operações": "Linux",
      "Git Profissional": "Git",
      "Conceitos de Backend": "Conceitos de Backend"
    };
    return map[trilha] || trilha.replace(/&.*/, '').trim();
  }

  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function sanitizeUrl(url) {
    if (!url) return '#';
    var clean = String(url).trim();
    if (/^(https?:\/\/|\/|\.\.?\/|[a-zA-Z0-9_\-\.\/]+)(#[a-zA-Z0-9_\-]*)?$/i.test(clean) && !/^javascript:/i.test(clean)) {
      return escapeHtml(clean);
    }
    return '#';
  }

  function renderWidget(mountEl) {
    if (!state.currentQuestion) {
      state.currentQuestion = pickRandomLocalQuestion();
    }
    var q = state.currentQuestion;
    if (!q) return;

    var streakData = getStreak();
    var aiKey = localStorage.getItem('gemini_api_key') || '';
    var hasKey = Boolean(aiKey.trim());
    var trilhaCurta = q.trilhaCurta || getTrilhaCurta(q.trilha);

    var safeTopico = escapeHtml(q.topicoNome || 'Desafio Técnico');
    var safePergunta = escapeHtml(q.pergunta || '');
    var safeUrl = sanitizeUrl(q.url);
    var safeTrilhaCurta = escapeHtml(trilhaCurta);
    var safeExplicacao = escapeHtml(q.explicacao || '');
    var safeRecomendacao = escapeHtml(q.recomendacao || 'Revise os fundamentos deste assunto para fixar o conceito de produção.');

    var optionsHtml = q.opcoes.map(function(opt, idx) {
      var btnClass = 'ml-opt';
      var disabled = state.answered ? 'disabled' : '';

      if (state.answered) {
        if (opt.correct) {
          btnClass += ' ok';
        } else if (state.selectedOption === idx) {
          btnClass += ' err';
        }
      }

      return '<button class="' + btnClass + '" type="button" data-idx="' + idx + '" ' + disabled + '>'
        + '<span class="ml-opt-letter">' + escapeHtml(opt.letter) + '</span>'
        + '<span class="ml-opt-text">' + escapeHtml(opt.text) + '</span>'
        + '</button>';
    }).join('');

    var codeHtml = q.code
      ? '<pre class="ml-code"><code>' + escapeHtml(q.code) + '</code></pre>'
      : '';

    var helpCardHtml = '';
    if (!state.answered) {
      helpCardHtml = '<div class="ml-help-topic-card">'
        + '  <div class="ml-help-topic-left">'
        + '    <span class="ml-help-icon">💡</span>'
        + '    <div class="ml-help-text">'
        + '      <span class="ml-help-title">Caso não saiba responder · Tópico para revisão</span>'
        + '      <span class="ml-help-desc">Assunto em foco: <b>' + safeTopico + '</b></span>'
        + '    </div>'
        + '  </div>'
        + '  <div class="ml-help-topic-actions">'
        + '    <a class="ml-btn-topic-review" href="' + safeUrl + '" target="_blank" rel="noopener noreferrer">'
        + '      📖 Revisar na Trilha de ' + safeTrilhaCurta + ' (' + safeTopico + ') ↗'
        + '    </a>'
        + '    <button class="ml-btn-giveup" id="mlBtnSurrender" type="button" title="Não sei responder: ver gabarito e explicação técnica">'
        + '      🏳️ Não sei responder'
        + '    </button>'
        + '  </div>'
        + '</div>';
    }

    var feedbackHtml = '';
    if (state.answered) {
      var isSurrender = state.selectedOption === -1;
      var isCorrect = !isSurrender && q.opcoes[state.selectedOption] && q.opcoes[state.selectedOption].correct;

      if (isCorrect) {
        feedbackHtml = '<div class="ml-feedback-box ok">'
          + '<div class="ml-fb-header">🎉 <b>Resposta Correta! (+50 XP adicionados)</b></div>'
          + '<p>' + safeExplicacao + '</p>'
          + '<div class="ml-fb-nav">'
          + '  <a class="ml-btn-deep" href="' + safeUrl + '" target="_blank" rel="noopener noreferrer">Aprofundar na Trilha de ' + safeTrilhaCurta + ' (' + safeTopico + ') →</a>'
          + '</div>'
          + '</div>';
      } else if (isSurrender) {
        feedbackHtml = '<div class="ml-feedback-box err">'
          + '<div class="ml-fb-header">📖 <b>Gabarito Revelado & Tópico para Estudo</b></div>'
          + '<p>' + safeExplicacao + '</p>'
          + '<div class="ml-review-alert">'
          + '  <span class="ml-alert-icon">💡</span>'
          + '  <div class="ml-alert-body">'
          + '    <b>Tópico para estudo e fixação:</b>'
          + '    <p>' + safeRecomendacao + '</p>'
          + '    <a class="ml-btn-review" href="' + safeUrl + '" target="_blank" rel="noopener noreferrer">Acessar Trilha de ' + safeTrilhaCurta + ' (' + safeTopico + ') →</a>'
          + '  </div>'
          + '</div>'
          + '</div>';
      } else {
        feedbackHtml = '<div class="ml-feedback-box err">'
          + '<div class="ml-fb-header">❌ <b>Resposta Incorreta. Não desanime!</b></div>'
          + '<p>' + safeExplicacao + '</p>'
          + '<div class="ml-review-alert">'
          + '  <span class="ml-alert-icon">⚠️</span>'
          + '  <div class="ml-alert-body">'
          + '    <b>Recomendação de Estudo Imediato:</b>'
          + '    <p>' + safeRecomendacao + '</p>'
          + '    <a class="ml-btn-review" href="' + safeUrl + '" target="_blank" rel="noopener noreferrer">Acessar Trilha de ' + safeTrilhaCurta + ' (' + safeTopico + ') →</a>'
          + '  </div>'
          + '</div>'
          + '</div>';
      }
    }

    var html = '<div class="ml-card" style="--accent:' + q.cor + '">'
      + '<div class="ml-top">'
      + '  <div class="ml-badge">'
      + '    <span class="ml-icon">' + q.icon + '</span>'
      + '    <span class="ml-tag">' + (state.isAiGenerated ? '✨ DESAFIO GERADO POR IA (GEMINI)' : 'SIMULADOR DIÁRIO · ' + q.trilha.toUpperCase()) + '</span>'
      + '  </div>'
      + '  <div class="ml-streak-badges">'
      + '    <div class="ml-streak" title="Sua sequência de dias consecutivos estudando">'
      + '      <span>🔥</span> <b>' + streakData.streak + '</b> ' + (streakData.streak === 1 ? 'dia seguido' : 'dias seguidos')
      + '    </div>'
      + '    <button class="ml-btn-cfg-ai" id="mlToggleAiPanel" title="Configurar chave da IA">' + (hasKey ? '⚙️ IA Ativa' : '⚙️ Configurar IA') + '</button>'
      + '  </div>'
      + '</div>'

      // Painel colapsável de configuração da IA
      + '<div class="ml-ai-panel" id="mlAiPanel" hidden>'
      + '  <div class="ml-ai-panel-inner">'
      + '    <h4>✨ Integração Gratuita com Google Gemini</h4>'
      + '    <p>Para gerar perguntas inéditas e ilimitadas com IA diretamente no seu navegador, obtenha sua chave gratuita no <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio ↗</a>. A chave fica salva de forma 100% privada apenas no seu navegador.</p>'
      + '    <div class="ml-ai-form">'
      + '      <input type="password" id="mlAiKeyInput" placeholder="Cole sua Gemini API Key aqui (ex: AIzaSy...)" value="' + escapeHtml(aiKey) + '" autocomplete="off" spellcheck="false">'
      + '      <button type="button" class="ml-btn-save-key" id="mlSaveAiKey">Salvar Chave</button>'
      + (hasKey ? '      <button type="button" class="ml-btn-del-key" id="mlDelAiKey">Remover</button>' : '')
      + '    </div>'
      + '  </div>'
      + '</div>'

      + '<div class="ml-header-topic">'
      + '  <span class="ml-subtopic-tag">Tópico: ' + safeTopico + '</span>'
      + '  <h3 class="ml-title">' + safePergunta + '</h3>'
      + '</div>'
      + codeHtml
      + helpCardHtml
      + '<div class="ml-options">' + optionsHtml + '</div>'
      + feedbackHtml
      + '<div class="ml-footer-controls">'
      + '  <button class="ml-btn-nav" id="mlBtnNext" type="button">🎲 Sortear Outro Desafio</button>'
      + '  <button class="ml-btn-ai ' + (state.isLoadingAi ? 'loading' : '') + '" id="mlBtnAi" type="button" ' + (state.isLoadingAi ? 'disabled' : '') + '>'
      + (state.isLoadingAi ? '⏳ Consultando Gemini...' : '✨ Gerar Inédita com IA')
      + '  </button>'
      + '  <a class="ml-link-trilha" href="' + safeUrl + '" target="_blank" rel="noopener noreferrer">Acessar Trilha de ' + safeTrilhaCurta + ' (' + safeTopico + ') →</a>'
      + '</div>'
      + '</div>';

    mountEl.innerHTML = html;
    attachEvents(mountEl);
  }

  function attachEvents(mountEl) {
    // 1. Alternativas de resposta
    var optBtns = mountEl.querySelectorAll('.ml-opt');
    optBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (state.answered) return;
        var idx = parseInt(btn.getAttribute('data-idx'), 10);
        state.selectedOption = idx;
        state.answered = true;

        var opt = state.currentQuestion.opcoes[idx];
        if (opt && opt.correct) {
          // Registrar prática diária e somar XP
          var todayStr = new Date().toISOString().slice(0, 10);
          var lastDate = localStorage.getItem('ml.lastDate');
          if (lastDate !== todayStr) {
            var currentStreak = parseInt(localStorage.getItem('ml.streak') || '0', 10);
            localStorage.setItem('ml.streak', (currentStreak + 1).toString());
            localStorage.setItem('ml.lastDate', todayStr);
          }
          // Incrementar XP global
          var currentXp = parseInt(localStorage.getItem('quiz_xp') || '0', 10);
          localStorage.setItem('quiz_xp', (currentXp + 50).toString());
        }

        renderWidget(mountEl);
      });
    });

    // 1.1 Botão "Não sei responder" (revelar gabarito e estudo)
    var btnSurrender = mountEl.querySelector('#mlBtnSurrender');
    if (btnSurrender) {
      btnSurrender.addEventListener('click', function() {
        if (state.answered) return;
        state.answered = true;
        state.selectedOption = -1;
        renderWidget(mountEl);
      });
    }

    // 2. Sortear outro desafio local
    var btnNext = mountEl.querySelector('#mlBtnNext');
    if (btnNext) {
      btnNext.addEventListener('click', function() {
        state.currentQuestion = pickRandomLocalQuestion(state.currentQuestion ? state.currentQuestion.id : null);
        state.answered = false;
        state.selectedOption = null;
        state.isAiGenerated = false;
        renderWidget(mountEl);
      });
    }

    // 3. Abrir/fechar painel de chave da IA
    var btnToggleAi = mountEl.querySelector('#mlToggleAiPanel');
    var aiPanel = mountEl.querySelector('#mlAiPanel');
    if (btnToggleAi && aiPanel) {
      btnToggleAi.addEventListener('click', function() {
        aiPanel.hidden = !aiPanel.hidden;
      });
    }

    // 4. Salvar chave da IA
    var btnSaveKey = mountEl.querySelector('#mlSaveAiKey');
    var inputKey = mountEl.querySelector('#mlAiKeyInput');
    if (btnSaveKey && inputKey) {
      btnSaveKey.addEventListener('click', function() {
        var key = inputKey.value.trim().replace(/^["']|["']$/g, '');
        if (key && /^[A-Za-z0-9_\-\.]{15,120}$/.test(key)) {
          localStorage.setItem('gemini_api_key', key);
          alert('✓ Chave da API Gemini salva com segurança no seu navegador!');
          renderWidget(mountEl);
        } else {
          alert('Por favor, informe uma chave válida de API do Gemini (formato alfanumérico padrão sem espaços ou caracteres especiais).');
        }
      });
    }

    // 5. Deletar chave da IA
    var btnDelKey = mountEl.querySelector('#mlDelAiKey');
    if (btnDelKey) {
      btnDelKey.addEventListener('click', function() {
        localStorage.removeItem('gemini_api_key');
        alert('Chave removida.');
        renderWidget(mountEl);
      });
    }

    // 6. Gerar pergunta com IA (Gemini) com proteção contra flood / rate limit
    var lastAiCallTime = 0;
    var btnAi = mountEl.querySelector('#mlBtnAi');
    if (btnAi) {
      btnAi.addEventListener('click', function() {
        var now = Date.now();
        if (now - lastAiCallTime < 2500) {
          return; // Previne múltiplos disparos acidentais que causariam erro 429 (Too Many Requests)
        }
        lastAiCallTime = now;

        var apiKey = localStorage.getItem('gemini_api_key');
        if (!apiKey) {
          // Se não tiver chave configurada, abre o painel
          if (aiPanel) aiPanel.hidden = false;
          if (inputKey) inputKey.focus();
          return;
        }

        state.isLoadingAi = true;
        renderWidget(mountEl);
        generateQuestionWithGemini(apiKey, function(err, newQ) {
          state.isLoadingAi = false;
          if (err || !newQ) {
            alert('Não foi possível gerar com a IA agora: ' + (err || 'Erro inesperado') + '. Carregando desafio do banco nativo!');
            state.currentQuestion = pickRandomLocalQuestion();
            state.isAiGenerated = false;
          } else {
            state.currentQuestion = newQ;
            state.isAiGenerated = true;
          }
          state.answered = false;
          state.selectedOption = null;
          renderWidget(mountEl);
        });
      });
    }
  }

  function generateQuestionWithGemini(apiKey, callback) {
    var availableTopics = [
      {
        trilha: "Inteligência Artificial & LLMs",
        cor: "var(--purple)",
        icon: "🧠",
        url: "trilhas/ia.html",
        subtopicos: [
          { nome: "Fundamentos de IA & Funil Conceitual", anchor: "#t1-ia" },
          { nome: "Machine Learning & Paradigmas", anchor: "#p1" },
          { nome: "Arquitetura Transformer & Self-Attention", anchor: "#p1" },
          { nome: "Tokenização, BPE & Janela de Contexto", anchor: "#p2" },
          { nome: "KV Cache, PagedAttention & Inferência LLM", anchor: "#p2" },
          { nome: "Hiperparâmetros: Temperatura, Top-P e Decodificação", anchor: "#p2" },
          { nome: "Spec-Driven Development (SDD) & Harness", anchor: "#p3" },
          { nome: "Prompt Engineering: As 4 Camadas de Instrução", anchor: "#p3" },
          { nome: "Tool Calling & Chamada de Funções Estruturadas", anchor: "#p4" },
          { nome: "RAG Avançado, Embeddings & pgvector", anchor: "#p4" },
          { nome: "Agentes Autônomos & Padrão ReAct", anchor: "#p5" },
          { nome: "Model Context Protocol (MCP) & Servidores de Ferramentas", anchor: "#p5" },
          { nome: "Test Harness, Evals & Métricas de Acurácia", anchor: "#p6" },
          { nome: "MLOps em Produção: Cache Semântico & Tracing", anchor: "#p6" }
        ]
      },
      {
        trilha: "Java Internals",
        cor: "var(--cyan)",
        icon: "☕",
        url: "trilhas/java.html",
        subtopicos: [
          { nome: "Arquitetura da JVM, Bytecode & ClassLoader", anchor: "#a1" },
          { nome: "Java Memory Model (JMM), Volatile & Happens-Before", anchor: "#b1" },
          { nome: "Garbage Collection (G1, ZGC) & Memória Nativa", anchor: "#c1" },
          { nome: "Concorrência Avançada, ReentrantLock & CAS", anchor: "#d1" },
          { nome: "Virtual Threads (Loom), Carrier Threads & Pinning", anchor: "#e1" },
          { nome: "Coleções de Alta Performance & ConcurrentHashMap", anchor: "#f1" },
          { nome: "Java NIO.2, Direct Memory & Zero-Copy I/O", anchor: "#g1" }
        ]
      },
      {
        trilha: "Spring Boot 3",
        cor: "var(--purple)",
        icon: "🍃",
        url: "trilhas/spring.html",
        subtopicos: [
          { nome: "Inversão de Controle (IoC) & Ciclo de Vida de Beans", anchor: "#a1" },
          { nome: "Spring Data JPA, Hibernate Caches & N+1", anchor: "#b1" },
          { nome: "Transações ACID & @Transactional Proxies", anchor: "#c1" },
          { nome: "Spring Security 6, JWT & Filter Chain", anchor: "#d1" },
          { nome: "Observabilidade, Actuator & Micrometer Tracing", anchor: "#e1" },
          { nome: "Resiliência com Resilience4j & Circuit Breaker", anchor: "#f1" }
        ]
      },
      {
        trilha: "Arquitetura de Software",
        cor: "var(--gold)",
        icon: "📐",
        url: "trilhas/arquitetura.html",
        subtopicos: [
          { nome: "Clean Architecture & Portas e Adaptadores", anchor: "#trilha" },
          { nome: "Domain-Driven Design (DDD): Agregados & Contextos", anchor: "#trilha" },
          { nome: "CQRS (Command Query Responsibility Segregation)", anchor: "#trilha" },
          { nome: "Padrão Saga (Orquestrada vs Coreografada)", anchor: "#trilha" },
          { nome: "Event-Driven Architecture & Outbox Pattern", anchor: "#trilha" }
        ]
      },
      {
        trilha: "Docker & Kubernetes",
        cor: "var(--lime)",
        icon: "🐳",
        url: "trilhas/docker-kubernetes.html",
        subtopicos: [
          { nome: "Namespaces Linux, Cgroups v2 & Anatomia do Container", anchor: "#trilha" },
          { nome: "Arquitetura Kubelet, Control Plane & etcd", anchor: "#trilha" },
          { nome: "Healthchecks: Liveness, Readiness & Startup Probes", anchor: "#trilha" },
          { nome: "Resource Requests, Limits & OOMKiller no Pod", anchor: "#trilha" },
          { nome: "Redes K8s, Services (ClusterIP) & Ingress", anchor: "#trilha" }
        ]
      },
      {
        trilha: "Nuvem Multicloud",
        cor: "var(--orange)",
        icon: "☁️",
        url: "trilhas/nuvem.html",
        subtopicos: [
          { nome: "Modelos de Nuvem: IaaS, PaaS, Serverless & FinOps", anchor: "#trilha" },
          { nome: "IAM, Menor Privilégio & Federação OIDC", anchor: "#trilha" },
          { nome: "VPC Peering, Subnets Privadas & Transit Gateway", anchor: "#trilha" },
          { nome: "Alta Disponibilidade Multi-Região & RTO/RPO", anchor: "#trilha" }
        ]
      },
      {
        trilha: "Mensageria & Filas",
        cor: "var(--pink)",
        icon: "📬",
        url: "trilhas/mensageria.html",
        subtopicos: [
          { nome: "Apache Kafka: Partições, Consumer Groups & Offsets", anchor: "#trilha" },
          { nome: "RabbitMQ: Tipos de Exchange & Dead Letter Queue", anchor: "#trilha" },
          { nome: "Semânticas At-Least-Once, At-Most-Once e Idempotência", anchor: "#trilha" },
          { nome: "Transactional Outbox Pattern & CDC", anchor: "#trilha" }
        ]
      },
      {
        trilha: "System Design",
        cor: "var(--teal)",
        icon: "🏛️",
        url: "trilhas/system-design.html",
        subtopicos: [
          { nome: "Teorema CAP, PACELC & Consistência Eventual", anchor: "#trilha" },
          { nome: "Estratégias de Cache & Mitigação de Cache Stampede", anchor: "#trilha" },
          { nome: "Database Sharding, Particionamento & Consistent Hashing", anchor: "#trilha" },
          { nome: "Algoritmos de Rate Limiting (Token Bucket & Leaky Bucket)", anchor: "#trilha" }
        ]
      },
      {
        trilha: "Linux & Operações",
        cor: "var(--teal)",
        icon: "🐧",
        url: "cadernos/linux.html",
        subtopicos: [
          { nome: "Processos, Sinais (SIGTERM/SIGKILL) & File Descriptors", anchor: "#trilha" },
          { nome: "Memória Virtual, Page Cache & Swapiness", anchor: "#trilha" },
          { nome: "Sockets TCP, TIME_WAIT & Análise com ss/tcpdump", anchor: "#trilha" }
        ]
      },
      {
        trilha: "Git Profissional",
        cor: "var(--orange)",
        icon: "🌿",
        url: "cadernos/git.html",
        subtopicos: [
          { nome: "Objetos Internos do Git (Blobs, Trees, Commits) & DAG", anchor: "#trilha" },
          { nome: "Git Rebase Interativo, Cherry-Pick & Reflog Recovery", anchor: "#trilha" }
        ]
      },
      {
        trilha: "Conceitos de Backend",
        cor: "var(--gold)",
        icon: "⚙️",
        url: "cadernos/conceitos-backend.html",
        subtopicos: [
          { nome: "Protocolos HTTP/2, HTTP/3 (QUIC) & Keep-Alive", anchor: "#trilha" },
          { nome: "Autenticação Moderna: OAuth 2.0, OpenID Connect & JWT", anchor: "#trilha" },
          { nome: "Índices de Banco B-Tree vs Hash & EXPLAIN ANALYZE", anchor: "#trilha" }
        ]
      }
    ];

    var randomTopic = availableTopics[Math.floor(Math.random() * availableTopics.length)];
    var chosenSubtopic = randomTopic.subtopicos[Math.floor(Math.random() * randomTopic.subtopicos.length)];

    var systemPrompt = "Você é um Arquiteto de Software e Engenheiro Sênior responsável por criar desafios de microlearning de alto nível técnico para uma plataforma de estudos de tecnologia.\n"
      + "REGRAS OBRIGATÓRIAS:\n"
      + "1. O tema DEVE ser da trilha: \"" + randomTopic.trilha + "\". (NUNCA gere nada sobre oratória, apresentações ou inglês).\n"
      + "2. O assunto EXATO e OBRIGATÓRIO deste desafio DEVE ser: \"" + chosenSubtopic.nome + "\".\n"
      + "3. Crie uma pergunta sobre um cenário REAL de produção, incidente, gargalo de concorrência ou pegadinha arquitetural de entrevista técnica sênior sobre este assunto.\n"
      + "4. Forneça exatamente 4 alternativas (A, B, C, D), onde EXATAMENTE UMA é a correta.\n"
      + "5. As alternativas erradas devem ser plausíveis, baseadas em equívocos comuns de desenvolvedores juniores/plenos.\n"
      + "6. Devolva a resposta ESTRITAMENTE em formato JSON puro, sem formatação markdown em volta, respeitando este schema exato:\n"
      + "{\n"
      + "  \"topicoNome\": \"" + chosenSubtopic.nome + "\",\n"
      + "  \"pergunta\": \"Enunciado do cenário prático\",\n"
      + "  \"code\": \"Snippet de código curto ou deixe vazio se não houver\",\n"
      + "  \"opcoes\": [\n"
      + "    {\"letter\": \"A\", \"text\": \"Texto da opção A\", \"correct\": false},\n"
      + "    {\"letter\": \"B\", \"text\": \"Texto da opção B\", \"correct\": true},\n"
      + "    {\"letter\": \"C\", \"text\": \"Texto da opção C\", \"correct\": false},\n"
      + "    {\"letter\": \"D\", \"text\": \"Texto da opção D\", \"correct\": false}\n"
      + "  ],\n"
      + "  \"explicacao\": \"Explicação técnica aprofundada demonstrando o porquê da correta e a falha das outras\",\n"
      + "  \"recomendacao\": \"Recomendação de revisão de conceito para quem errou\"\n"
      + "}";

    var cleanKey = (apiKey || '').trim().replace(/^["']|["']$/g, '');
    if (!cleanKey || !/^[A-Za-z0-9_\-\.]{15,120}$/.test(cleanKey)) {
      callback("Chave de API do Gemini em formato inválido ou ausente.", null);
      return;
    }

    function extractTextFromApiResponse(res) {
      if (!res) return null;
      if (typeof res.output_text === "string" && res.output_text.trim()) {
        return res.output_text.trim();
      }
      if (res.steps && Array.isArray(res.steps)) {
        var textFromSteps = "";
        for (var i = 0; i < res.steps.length; i++) {
          var step = res.steps[i];
          if (step.type === "model_output" && step.content) {
            for (var j = 0; j < step.content.length; j++) {
              if (step.content[j].type === "text" && step.content[j].text) {
                textFromSteps += step.content[j].text;
              }
            }
          }
        }
        if (textFromSteps.trim()) return textFromSteps.trim();
      }
      if (res.candidates && res.candidates[0] && res.candidates[0].content && res.candidates[0].content.parts) {
        var parts = res.candidates[0].content.parts;
        var textParts = parts.filter(function(p) { return p.text && !p.thought; });
        var t = (textParts.length > 0 ? textParts.map(function(p) { return p.text; }).join("\n") : parts[0].text) || "";
        if (t.trim()) return t.trim();
      }
      return null;
    }

    function parseQuestionJson(rawText) {
      var clean = rawText.trim();
      if (clean.indexOf('```') !== -1) {
        clean = clean.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '').trim();
      }
      var startIdx = clean.indexOf('{');
      var endIdx = clean.lastIndexOf('}');
      if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
        clean = clean.substring(startIdx, endIdx + 1);
      }
      var parsed = JSON.parse(clean);
      if (!parsed.pergunta || !parsed.opcoes || !Array.isArray(parsed.opcoes)) {
        throw new Error("JSON retornado não contém pergunta ou alternativas válidas.");
      }
      parsed.id = "ai-" + Date.now();
      parsed.trilha = randomTopic.trilha;
      parsed.trilhaCurta = getTrilhaCurta(randomTopic.trilha);
      parsed.cor = randomTopic.cor;
      parsed.icon = randomTopic.icon;
      parsed.url = randomTopic.url + chosenSubtopic.anchor;
      parsed.topicoNome = chosenSubtopic.nome;
      return parsed;
    }

    var strategies = [
      // 1. Interactions API oficial com gemini-3.8-flash (Recomendado oficialmente pelo Google)
      {
        name: "Interactions API (gemini-3.8-flash)",
        url: "https://generativelanguage.googleapis.com/v1beta/interactions",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": cleanKey
        },
        payload: {
          model: "gemini-3.8-flash",
          input: systemPrompt
        }
      },
      // 2. Interactions API fallback com gemini-3.5-flash
      {
        name: "Interactions API (gemini-3.5-flash)",
        url: "https://generativelanguage.googleapis.com/v1beta/interactions",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": cleanKey
        },
        payload: {
          model: "gemini-3.5-flash",
          input: systemPrompt
        }
      },
      // 3. generateContent com gemini-3.8-flash (via Header)
      {
        name: "generateContent Header (gemini-3.8-flash)",
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": cleanKey
        },
        payload: {
          contents: [{ parts: [{ text: systemPrompt }] }]
        }
      },
      // 4. generateContent com gemini-3.5-flash (via Header seguro)
      {
        name: "generateContent Header (gemini-3.5-flash)",
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": cleanKey
        },
        payload: {
          contents: [{ parts: [{ text: systemPrompt }] }]
        }
      }
    ];

    var lastErrorMessage = "Não foi possível conectar aos endpoints do Gemini.";

    function executeStrategy(idx) {
      if (idx >= strategies.length) {
        callback(lastErrorMessage, null);
        return;
      }

      var strat = strategies[idx];
      var xhr = new XMLHttpRequest();
      xhr.open("POST", strat.url, true);
      for (var h in strat.headers) {
        if (strat.headers.hasOwnProperty(h)) {
          xhr.setRequestHeader(h, strat.headers[h]);
        }
      }
      xhr.timeout = 16000;

      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            var res = JSON.parse(xhr.responseText);
            var text = extractTextFromApiResponse(res);
            if (!text) {
              lastErrorMessage = "Resposta vazia retornada pela IA";
              executeStrategy(idx + 1);
              return;
            }
            var questionData = parseQuestionJson(text);
            callback(null, questionData);
          } catch (err) {
            console.warn("[Microlearning AI] Erro ao parsear JSON:", err.message);
            lastErrorMessage = "Erro de formatação JSON: " + err.message;
            executeStrategy(idx + 1);
          }
        } else {
          try {
            var errJson = JSON.parse(xhr.responseText);
            if (errJson && errJson.error && errJson.error.message) {
              lastErrorMessage = errJson.error.message;
            } else {
              lastErrorMessage = "Erro HTTP " + xhr.status + " (" + xhr.statusText + ")";
            }
          } catch (e) {
            lastErrorMessage = "Erro HTTP " + xhr.status + " (" + xhr.statusText + ")";
          }
          console.warn("[Microlearning AI] " + strat.name + " falhou (" + xhr.status + "): " + lastErrorMessage);
          executeStrategy(idx + 1);
        }
      };

      xhr.onerror = function() {
        console.warn("[Microlearning AI] " + strat.name + " erro de rede");
        lastErrorMessage = "Erro de rede ao conectar à API do Google.";
        executeStrategy(idx + 1);
      };

      xhr.ontimeout = function() {
        console.warn("[Microlearning AI] " + strat.name + " timeout");
        lastErrorMessage = "Tempo limite de conexão excedido.";
        executeStrategy(idx + 1);
      };

      xhr.send(JSON.stringify(strat.payload));
    }

    executeStrategy(0);
  }

  function initMicrolearning() {
    var mount = document.getElementById('microlearningMount');
    if (!mount) return;
    renderWidget(mount);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMicrolearning);
  } else {
    initMicrolearning();
  }
})();
