import fs from 'node:fs';

console.log('Iniciando atualização completa de trilhas/ia.html...');

let html = fs.readFileSync('trilhas/ia.html', 'utf8');

// Bloco completo das Partes 07 e 08 com chassi pedagógico 100%, IDs harmonizados e cross-links
const novaPartes07e08 = `<!-- ==================== PARTE 07 ==================== -->
    <section class="part" id="p7">
      <div class="ph"><span class="num">07</span><div><h2>Projetos da trilha: do zero ao deploy</h2><p>Cada conceito da trilha constrói uma peça. As peças formam três projetos em escada e um carro-chefe, que resolve um problema seu e vai da ideia até o deploy.</p></div></div>

      <!-- t7-ciclo -->
      <article class="topic" id="t7-ciclo">
        <div class="th"><h3>Do zero ao deploy: o ciclo de um projeto</h3><div class="badges"><span class="badge b-ess">método</span><span class="badge b-prof">produção</span></div></div>
        <div class="direto"><b>O que é:</b> o roteiro que todo projeto da trilha segue, do problema até o sistema no ar. Ele existe porque o que diferencia quem sabe fazer não é o código do modelo, e sim o resto: decidir o que construir, definir quando está bom, medir, publicar e operar. Cada fase termina com uma entrega concreta, que fica no repositório.</div>

        <div class="caso">
          <b>O caso</b>
          <p>Um desenvolvedor fez um chatbot com RAG em um fim de semana. A demonstração impressionou, mas ninguém sabia dizer se a versão nova era melhor que a anterior, quanto custava por pergunta nem o que acontecia quando o documento não tinha a resposta. O projeto parou ali. Com o ciclo abaixo, essas perguntas têm resposta antes da primeira linha de código: é isso que transforma uma demonstração em sistema.</p>
        </div>

        <ol class="ciclo-pj">
          <li><div><b>Problema.</b> Uma frase: quem sofre, com o quê, e como resolve hoje. Entrega: o README começa por ela.</div></li>
          <li><div><b>Critérios de sucesso.</b> Como saber que funciona: taxa de acerto, tempo de resposta, custo por pergunta. Entrega: um conjunto de 20 a 50 casos de teste reais.</div></li>
          <li><div><b>Especificação.</b> O que entra, o que sai, o que fica de fora (ver <a href="#t3-sdd">Spec-driven development</a>). Entrega: um <code>SPEC.md</code>.</div></li>
          <li><div><b>Arquitetura e decisões.</b> O desenho e o porquê de cada escolha (modelo, banco vetorial, framework). Entrega: um diagrama e registros curtos de decisão.</div></li>
          <li><div><b>Versão mínima local.</b> O caminho principal funcionando em Docker Compose. Entrega: <code>docker compose up</code> e funciona.</div></li>
          <li><div><b>Avaliação.</b> Rodar os casos de teste e medir. Entrega: a pasta <code>evals/</code> com o resultado de cada versão.</div></li>
          <li><div><b>Observabilidade.</b> Trace de cada chamada, custo e latência. Entrega: um painel ou relatório.</div></li>
          <li><div><b>Deploy.</b> Pipeline que testa, roda as avaliações e publica. Entrega: um link funcionando, mesmo com limite de uso.</div></li>
          <li><div><b>Operar e melhorar.</b> Cada bug vira caso de teste; cada mudança mostra o antes e o depois. Entrega: a tabela de métricas por versão.</div></li>
        </ol>

        <div class="analogia">
          <i class="ic">≈</i>
          <p><b>Analogia:</b> é a diferença entre cozinhar para você e abrir um restaurante. A receita pode ser a mesma; o restaurante precisa de cardápio, padrão de qualidade, custo por prato e alguém que avise quando um prato volta.</p>
        </div>

        <div class="gotcha">
          <b>Armadilhas</b>
          <ul>
            <li><b>Começar pelo framework:</b> escolher a ferramenta antes de definir o problema e os critérios de sucesso.</li>
            <li><b>Pular a avaliação:</b> sem casos de teste automatizados em <code>evals/</code>, qualquer alteração em prompt é pura adivinhação.</li>
            <li><b>Deixar o deploy para o fim:</b> publique uma versão simples cedo; os problemas de concorrência e ambiente só aparecem em produção.</li>
          </ul>
        </div>

        <div class="ver">
          <b>Onde ver na prática e fontes oficiais</b>
          <p>• Bancada de laboratório: <a href="../lab/projetos.html#projetos">Projetos práticos e missões de IA</a>.<br>
          • Arquitetura operacional: princípios de entrega contínua e <i>The Twelve-Factor App</i> aplicados a microsserviços de IA generativa.<br>
          • Especificação: <a href="#t3-sdd">Tópico 3.2 — Spec-Driven Development</a> para templates de <code>SPEC.md</code>.</p>
        </div>

        <div class="topico-fechamento">
          <div class="topico-revisao">
            <div class="tr-badge">REVISÃO RÁPIDA</div>
            <ul class="tr-pontos">
              <li>O que diferencia engenharia de demonstração é ter critérios de sucesso mensuráveis antes da primeira linha de código.</li>
              <li>A pasta <code>evals/</code> no repositório é a certidão de nascimento da confiabilidade do sistema.</li>
              <li>Deploy em container isolado deve ocorrer cedo no ciclo para validar limites de latência, timeouts e custos reais de inferência.</li>
            </ul>
            <div class="tr-alerta"><b>Alerta:</b> Iniciar escolhendo o framework (LangChain, LangGraph, Spring AI) antes de redigir o <code>SPEC.md</code> e os casos de teste é o erro número um de projetos abandonados.</div>
            <div class="tr-dica"><b>Dica de ouro:</b> Cada bug reportado por usuário deve ser imediatamente convertido em um caso de teste na pasta <code>evals/</code> antes da correção do prompt ou da ferramenta.</div>
          </div>

          <div class="topico-exercicio" data-exercise-id="ex-ia-t7-ciclo">
            <div class="te-header">
              <div class="te-badge"><span>DESAFIO PRÁTICO DE FIXAÇÃO #t7-ciclo</span></div>
              <div class="te-reward"><span class="te-xp-badge">+50 XP</span><span class="te-status">Aguardando resposta</span></div>
            </div>
            <div class="te-body">
              <p class="te-pergunta"><strong>Qual é a sequência metodológica recomendada para transformar uma demonstração de IA em um sistema corporativo auditável e pronto para produção?</strong></p>
              <p class="te-instrucao">Qual é a melhor decisão e conduta técnica?</p>
              <div class="te-options">
                <button class="te-opt" type="button" data-correct="false" data-rationale="Incorreto. Escolher o framework mais recente da moda antes de mapear o problema e as métricas leva a retrabalho e arquiteturas inadequadas.">
                  <span class="te-letter">A</span> Selecionar o framework orquestrador mais recente, criar o protótipo com interface gráfica e adiar testes e métricas para a fase de pós-lançamento.
                </button>
                <button class="te-opt" type="button" data-correct="true" data-rationale="Exato. Definir critérios de sucesso, fixar casos de teste na pasta evals/ e automatizar deploy cedo garante previsibilidade e qualidade contínua.">
                  <span class="te-letter">B</span> Definir o problema e métricas mensuráveis, documentar a especificação, criar casos de teste em evals/ e validar o deploy em container cedo.
                </button>
                <button class="te-opt" type="button" data-correct="false" data-rationale="Incorreto. O fine-tuning é uma das etapas mais caras e complexas; deve ser evitado se prompt engineering estruturado e RAG resolverem o problema.">
                  <span class="te-letter">C</span> Iniciar diretamente pelo treinamento de um modelo customizado via fine-tuning local, dispensando especificações de requisitos ou métricas prévias.
                </button>
              </div>
            </div>
          </div>

          <div class="topico-flashcard">
            <div class="tf-tag ok">FLASHCARD</div>
            <div class="tf-pergunta">Por que a pasta evals/ é considerada o componente central do ciclo de desenvolvimento de sistemas com IA?</div>
            <div class="tf-resposta">Porque modelos de linguagem são probabilísticos; a pasta evals/ armazena o conjunto fixo de casos de teste reais que permite medir objetivamente se uma alteração em prompt, modelo ou contexto melhorou ou piorou a taxa de acerto do sistema.<span class="tf-hint">← Toque para voltar à pergunta</span></div>
          </div>
        </div>

        <button class="done" type="button" data-k="t7-ciclo">marcar dominado</button>
      </article>

      <!-- t7-escada -->
      <article class="topic" id="t7-escada">
        <div class="th"><h3>Os quatro projetos em escada</h3><div class="badges"><span class="badge b-ess">método</span><span class="badge b-prof">portfólio</span></div></div>
        <div class="direto"><b>O que é:</b> quatro projetos que crescem um sobre o outro. Os três primeiros treinam as peças (ferramentas, RAG, agentes); o quarto, o carro-chefe, junta tudo num sistema seu, em produção. Os blocos "Projeto do conceito" de cada tópico da trilha são as tarefas desses projetos: ao terminar a trilha, você terminou os projetos.</div>

        <div class="caso">
          <b>O caso</b>
          <p>Um engenheiro tentou construir diretamente um agente multi-agente autônomo com memória vetorial e dezenas de ferramentas. O projeto empacou por semanas porque ele não conseguia isolar se as falhas vinham da extração JSON de argumentos, da perda de contexto na recuperação vetorial ou do loop de decisão do agente. Ao dar um passo atrás e construir três projetos menores em escada (Chat com Tool Calling → RAG com pgvector → Servidor MCP com Agente), validou cada mecanismo isoladamente e concluiu o carro-chefe em apenas três semanas.</p>
        </div>

        <table class="didatica">
          <thead><tr><th>Projeto</th><th>O que você constrói</th><th>Conceitos da trilha</th><th>Bancada de Projetos</th><th>Tempo</th></tr></thead>
          <tbody>
            <tr><td><b>1 · Chat com ferramentas</b></td><td>API em FastAPI que conversa, chama ferramentas, devolve dados estruturados e responde em streaming</td><td><a href="#t4-structured">saída estruturada</a>, <a href="#t4-toolcalling">tool calling</a>, <a href="#t4-streaming">streaming e memória</a></td><td><a href="../lab/projetos.html#projetos" style="color:var(--teal);font-weight:600">Missão I02: Saída Estruturada ↗</a></td><td>1 semana</td></tr>
            <tr><td><b>2 · RAG sobre documentos reais</b></td><td>Busca nos seus documentos com citação da fonte e "não encontrei" quando não sabe</td><td><a href="#t4-chunks">chunks</a>, <a href="#t4-rag">RAG e busca híbrida</a></td><td><a href="../lab/projetos.html#projetos" style="color:var(--teal);font-weight:600">Missão I01: RAG Local ↗</a></td><td>2 semanas</td></tr>
            <tr><td><b>3 · Agente com MCP</b></td><td>Um servidor MCP seu e um agente que usa as ferramentas dele, com limites e guardrails</td><td><a href="#t5-react">loop agêntico</a>, <a href="#t5-mcp">MCP</a>, <a href="#t5-frameworks">frameworks</a></td><td><a href="../lab/projetos.html#projetos" style="color:var(--teal);font-weight:600">Missão I04: Agente Spring/MCP ↗</a></td><td>2 semanas</td></tr>
            <tr><td><b>4 · Carro-chefe</b></td><td>Um sistema que resolve um problema seu, do zero ao deploy, com avaliações e observabilidade</td><td><a href="#t6-evals">evals</a>, <a href="#t6-avaliar-agentes">avaliar agentes</a>, <a href="#t6-observabilidade">observabilidade</a>, <a href="#t6-caching">cache e custo</a></td><td><a href="../lab/projetos.html#projetos" style="color:var(--teal);font-weight:600">Missão I03: Evals &amp; Guardrails ↗</a></td><td>4 a 6 semanas</td></tr>
          </tbody>
        </table>

        <div class="duo">
          <div>
            <h4>Em que linguagem</h4>
            <p>Python, que aparece em 95% das vagas, com FastAPI e Pydantic. Cada bloco traz a linha "Em Java" com o equivalente no Spring AI: fazer um dos serviços também em Java mostra que você leva IA para o ecossistema Java, onde a vaga for corporativa.</p>
          </div>
          <div class="o">
            <h4>Cronograma (cerca de 1 hora por dia)</h4>
            <p>Semanas 1 e 2: projetos 1 e 2. Semanas 3 e 4: projeto 3. Semanas 5 a 8: carro-chefe, com avaliações e deploy. Semanas 9 e 10: README, vídeo curto e publicação.</p>
          </div>
        </div>

        <div class="analogia">
          <i class="ic">≈</i>
          <p><b>Analogia:</b> É como construir um edifício de quatro andares: a fundação é o chat com tool calling e validação estrita de esquemas; as paredes e vigas são o pipeline de RAG com busca semântica; a fiação elétrica e encanamento são o protocolo MCP padronizado; e a cobertura habitada é o carro-chefe com monitoramento e métricas de produção.</p>
        </div>

        <div class="gotcha">
          <b>Armadilhas</b>
          <ul>
            <li><b>Pular direto para agentes autônomos:</b> tentar orquestrar agentes sem dominar a depuração de chamadas de função (tool calling) e tratamento de erros de API.</li>
            <li><b>Depender exclusivamente de frameworks mágicos:</b> usar abstrações prontas sem inspecionar os payloads HTTP brutos que entram e saem dos modelos.</li>
          </ul>
        </div>

        <div class="ver">
          <b>Onde ver na prática e fontes oficiais</b>
          <p>• Bancada: <a href="../lab/projetos.html#projetos">Laboratório de Projetos — 19 missões práticas locais</a>.<br>
          • Caderno complementar: <a href="../cadernos/python-para-java.html">Python para quem vem de Java</a> (FastAPI, Pydantic, pytest e venv).<br>
          • Padrão aberto: documentação da especificação do protocolo <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer">Model Context Protocol (MCP)</a>.</p>
        </div>

        <div class="topico-fechamento">
          <div class="topico-revisao">
            <div class="tr-badge">REVISÃO RÁPIDA</div>
            <ul class="tr-pontos">
              <li>A escada de 4 projetos valida modularmente cada capacidade: ferramentas (P1), recuperação (P2), autonomia e protocolos (P3) e operação fim a fim (P4).</li>
              <li>Python com FastAPI é o padrão de 95% das vagas de AI Engineer, enquanto Spring AI é o diferencial corporativo em times Java.</li>
              <li>Completar os projetos em escada cria um portfólio consistente com quatro repositórios públicos interligados no GitHub.</li>
            </ul>
            <div class="tr-alerta"><b>Alerta:</b> Evite usar ferramentas semânticas e agentes em projetos que poderiam ser resolvidos com simples consultas SQL ou chamadas REST determinísticas.</div>
            <div class="tr-dica"><b>Dica de ouro:</b> Grave vídeos de 90 segundos para cada projeto em escada demonstrando o fluxo executando localmente e adicione o link no topo do README.</div>
          </div>

          <div class="topico-exercicio" data-exercise-id="ex-ia-t7-escada">
            <div class="te-header">
              <div class="te-badge"><span>DESAFIO PRÁTICO DE FIXAÇÃO #t7-escada</span></div>
              <div class="te-reward"><span class="te-xp-badge">+50 XP</span><span class="te-status">Aguardando resposta</span></div>
            </div>
            <div class="te-body">
              <p class="te-pergunta"><strong>Por que a metodologia pedagógica recomenda construir os projetos em escada sequencial (Chat → RAG → MCP → Carro-Chefe) em vez de iniciar diretamente pelo projeto principal?</strong></p>
              <p class="te-instrucao">Qual é a melhor decisão e conduta técnica?</p>
              <div class="te-options">
                <button class="te-opt" type="button" data-correct="false" data-rationale="Incorreto. O aprendizado em escada permite justamente reutilizar o código e os testes de cada módulo no projeto final.">
                  <span class="te-letter">A</span> Porque os frameworks de IA exigem descartar completamente o código dos módulos anteriores a cada nova versão de arquitetura implementada.
                </button>
                <button class="te-opt" type="button" data-correct="false" data-rationale="Incorreto. RAG e tool calling podem ser executados com modelos gratuitos ou de baixo custo, sem dependência financeira de escala.">
                  <span class="te-letter">B</span> Porque projetos menores consomem menos créditos de nuvem e evitam gastos com provedores de IA antes da aprovação do orçamento empresarial.
                </button>
                <button class="te-opt" type="button" data-correct="true" data-rationale="Exato. Isolar cada bloco permite depurar erros de contrato, recuperação e execução de ferramentas separadamente, garantindo robustez na integração.">
                  <span class="te-letter">C</span> Porque isolar cada mecanismo permite dominar contratos de dados, busca vetorial e protocolos separadamente, facilitando a depuração na integração do carro-chefe.
                </button>
              </div>
            </div>
          </div>

          <div class="topico-flashcard">
            <div class="tf-tag ok">FLASHCARD</div>
            <div class="tf-pergunta">Qual é a principal responsabilidade do Projeto 1 (Chat com Ferramentas) na escada de aprendizado?</div>
            <div class="tf-resposta">Dominar o contrato determinístico de entrada e saída (Structured Output com Pydantic), o mecanismo de Tool Calling seguro e o envio de respostas em tempo real via Server-Sent Events (SSE).<span class="tf-hint">← Toque para voltar à pergunta</span></div>
          </div>
        </div>

        <button class="done" type="button" data-k="t7-escada">marcar dominado</button>
      </article>

      <!-- t7-ancora -->
      <article class="topic" id="t7-ancora">
        <div class="th"><h3>O carro-chefe: um problema seu, vitrine no GitHub e no LinkedIn, do zero ao deploy</h3><div class="badges"><span class="badge b-ess">método</span><span class="badge b-prof">carreira</span></div></div>
        <div class="direto"><b>O que é:</b> o projeto principal do portfólio, o que fica em destaque no GitHub e no LinkedIn. Não é um curso nem um tutorial: é um sistema que resolve um problema que você tem de verdade, passa por todas as fases do ciclo e fica no ar. Ele é o que você mostra numa entrevista e o que mantém você estudando, porque você mesmo usa.</div>

        <div class="caso">
          <b>O caso</b>
          <p>Em um processo seletivo concorrido para AI Engineer, dois candidatos de nível pleno chegaram à etapa técnica. O candidato A apresentou três repositórios clonados de tutoriais do YouTube (chats genéricos de PDF usando LangChain sem testes). O candidato B apresentou um assistente técnico que ele mesmo usava para indexar notas e documentações de estudo, com uma pasta <code>evals/</code> contendo 45 casos reais, métricas comparativas de latência/custo entre Gemini e Claude, e um link funcional na nuvem com autenticação e rate limiting. O candidato B foi aprovado por unanimidade.</p>
        </div>

        <div class="duo">
          <div>
            <h4>Como escolher</h4>
            <ul>
              <li>Resolve um problema seu, não de tutorial.</li>
              <li>Usa dados reais a que você tem acesso.</li>
              <li>Você mesmo é o primeiro usuário.</li>
              <li>Dá para medir se funciona (casos de teste reais).</li>
              <li>Cabe em 4 a 6 semanas na versão inicial.</li>
              <li>Um recrutador entende o problema em 10 segundos.</li>
            </ul>
          </div>
          <div class="o">
            <h4>Ideias que passam no filtro</h4>
            <ul>
              <li><b>Assistente dos seus estudos:</b> RAG sobre as suas próprias notas e documentos de estudo, que responde citando a fonte e gera perguntas de revisão.</li>
              <li><b>Revisor de pull request:</b> roda no CI, comenta no PR e mede a própria qualidade com um conjunto de casos.</li>
              <li><b>Assistente de suporte técnico:</b> RAG sobre documentação de APIs e integrações, com um agente que abre chamados.</li>
            </ul>
          </div>
        </div>

        <h4>Uma arquitetura de referência</h4>
        <pre class="arq">Usuário → API (FastAPI em container)
            ├─ Orquestrador do agente (LangGraph)
            │    ├─ Ferramentas / servidor MCP
            │    └─ Guardrails na entrada e na saída
            ├─ RAG: embeddings → pgvector → reranker
            ├─ LLM (API do provedor)
            └─ Cache (Redis) + fila para tarefas longas
Observabilidade: traces, custo e latência por chamada
Avaliação: conjunto de casos + LLM-as-judge rodando no CI
Deploy: Docker → registry → container na nuvem, pipeline e Terraform</pre>
        <p class="fine">Comece tudo local, com Docker Compose; a nuvem entra só na fase de deploy.</p>

        <div class="analogia">
          <i class="ic">≈</i>
          <p><b>Analogia:</b> Um projeto carro-chefe com telemetria e testes automatizados é como um carro de corrida levado para a pista com sensores em tempo real medindo temperatura dos pneus, consumo de combustível e tempo de volta. Uma demonstração de tutorial sem evals é apenas uma miniatura de plástico em exposição na estante.</p>
        </div>

        <div class="gotcha">
          <b>O que faz o projeto parecer profissional</b>
          <ul>
            <li><b>README</b> com o problema, o diagrama, as decisões e uma tabela de custo e latência.</li>
            <li><b>Pasta <code>evals/</code></b> com as métricas antes e depois de cada melhoria: mostra método, não só demonstração.</li>
            <li><b>Deploy real</b> com link funcionando, mesmo que com limite de uso.</li>
            <li><b>Vídeo curto</b> (2 minutos) mostrando o fluxo de ponta a ponta.</li>
          </ul>
        </div>

        <div class="ver">
          <b>Onde ver na prática e fontes oficiais</b>
          <p>• Bancada: <a href="../lab/projetos.html#projetos">Capstones e projetos de referência do Laboratório</a>.<br>
          • Observabilidade: padrões de tracing e telemetria aberta com OpenTelemetry e Langfuse.<br>
          • Infraestrutura: cadernos de <a href="docker-kubernetes.html">Docker</a> e <a href="nuvem.html">Nuvem Multicloud</a> para automação de deploy seguro.</p>
        </div>

        <div class="topico-fechamento">
          <div class="topico-revisao">
            <div class="tr-badge">REVISÃO RÁPIDA</div>
            <ul class="tr-pontos">
              <li>O projeto carro-chefe deve resolver um problema real do seu dia a dia para garantir validação contínua e relevância prática.</li>
              <li>A arquitetura de referência combina FastAPI, LangGraph, pgvector, guardrails e observabilidade distribuída.</li>
              <li>Apresentar métricas auditáveis de custo por chamada e taxa de acerto em evals comprova maturidade sênior em entrevistas.</li>
            </ul>
            <div class="tr-alerta"><b>Alerta:</b> Nunca suba chaves de API ou segredos no repositório; use variáveis de ambiente com validação estrita no Pydantic Settings.</div>
            <div class="tr-dica"><b>Dica de ouro:</b> Adicione ao README uma seção 'Limitações e Trabalhos Futuros' explicando conscientemente os trade-offs e os limites do seu sistema.</div>
          </div>

          <div class="topico-exercicio" data-exercise-id="ex-ia-t7-ancora">
            <div class="te-header">
              <div class="te-badge"><span>DESAFIO PRÁTICO DE FIXAÇÃO #t7-ancora</span></div>
              <div class="te-reward"><span class="te-xp-badge">+50 XP</span><span class="te-status">Aguardando resposta</span></div>
            </div>
            <div class="te-body">
              <p class="te-pergunta"><strong>Em uma entrevista técnica para AI Engineer, qual dos seguintes elementos no seu repositório do projeto carro-chefe melhor comprova capacidade de engenharia de software e produção?</strong></p>
              <p class="te-instrucao">Qual é a melhor decisão e conduta técnica?</p>
              <div class="te-options">
                <button class="te-opt" type="button" data-correct="false" data-rationale="Incorreto. A quantidade bruta de commits ou linhas não reflete qualidade arquitetural, métricas ou aderência a boas práticas.">
                  <span class="te-letter">A</span> Um histórico com mais de mil commits diários consecutivos e código extenso sem testes automatizados ou diagramas de arquitetura.
                </button>
                <button class="te-opt" type="button" data-correct="true" data-rationale="Exato. Mostrar o problema real, métricas quantitativas de acerto/latência em evals/ e o link no ar comprova engenharia completa de ponta a ponta.">
                  <span class="te-letter">B</span> Um README com diagrama claro, pasta evals/ com métricas de acurácia antes/depois, dados de custo/latência e link de demonstração no ar.
                </button>
                <button class="te-opt" type="button" data-correct="false" data-rationale="Incorreto. Prometer acerto perfeito de 100% em IA generativa sem margem de erro indica falta de vivência com problemas de produção e alucinações.">
                  <span class="te-letter">C</span> Um documento de apresentação afirmando que o modelo nunca alucina e possui 100% de precisão garantida em qualquer contexto.
                </button>
              </div>
            </div>
          </div>

          <div class="topico-flashcard">
            <div class="tf-tag ok">FLASHCARD</div>
            <div class="tf-pergunta">Qual é o principal risco financeiro ao publicar uma demonstração pública na nuvem de um projeto de IA e como mitigá-lo?</div>
            <div class="tf-resposta">O esgotamento descontrolado de créditos por scraping ou abuso de chamadas; mitiga-se com rate limiting rigoroso por IP, autenticação com cotas, cache semântico de respostas frequentes e limites máximos diários de orçamento configurados no provedor da API.<span class="tf-hint">← Toque para voltar à pergunta</span></div>
          </div>
        </div>

        <button class="done" type="button" data-k="t7-ancora">marcar dominado</button>
      </article>

    </section>

    <!-- ==================== PARTE 08 ==================== -->
    <section class="part" id="p8">
      <div class="ph"><span class="num">08</span><div><h2>Como aprender de verdade: vídeos, pesquisa e prática</h2><p>O ciclo que fixa a engenharia de IA, referências técnicas consolidadas e laboratórios práticos com modelos e ferramentas.</p></div></div>

      <!-- t8-ciclo -->
      <article class="topic" id="t8-ciclo">
        <div class="th"><h3>O ciclo de aprendizado</h3><div class="badges"><span class="badge b-ess">essencial</span><span class="badge b-ver">método</span></div></div>
        <div class="direto"><b>O que é:</b> O método sistemático de fixação em seis etapas para engenharia de IA: 1. Leitura de documentações e especificações oficiais de APIs; 2. Vídeo conceitual de alto nível; 3. Prova de conceito na IDE executando chamadas reais via SDK; 4. Criação de evals automatizadas determinísticas; 5. Síntese do aprendizado em nota técnica atômica; 6. Revisão espaçada no modo teste.</div>

        <div class="caso">
          <b>O caso</b>
          <p>Um time de desenvolvimento tentou adotar IA assistindo a mais de vinte horas de tutoriais e vídeos na internet. Na primeira sprint de desenvolvimento do produto, a equipe travou porque ninguém sabia diagnosticar por que a taxa de recuperação do banco vetorial estava baixa ou como lidar com o estouro de contexto em chamadas encadeadas. Apenas quando estabeleceram um ciclo de experimentação com sandboxes locais de código e suítes de testes automatizados com evals é que o conhecimento foi verdadeiramente consolidado.</p>
        </div>

        <div class="mental-model">
          <div class="mm-header">
            <span class="mm-tag">Modelo Mental</span>
            <h4 class="mm-title">A Metáfora do Laboratório de Química</h4>
          </div>
          <p>
            • <b>A Teoria vs a Bancada:</b> Estudar química apenas lendo reações não ensina a manusear reagentes. Em IA generativa, ler sobre embeddings e temperatura não substitui ver a alucinação acontecer na IDE quando a janela de contexto estoura ou quando o threshold de similaridade de cosseno está descalibrado.<br>
            • <b>A Medição Determinística:</b> Sem testes automatizados com suítes de avaliação (evals), qualquer alteração em prompt é pura suposição.
          </p>
        </div>

        <div class="duo">
          <div>
            <h4>Para que serve no dia a dia dev</h4>
            <p>Garante que o conhecimento saia do consumo passivo e se converta em capacidade imediata de prototipar, depurar e avaliar sistemas com IA.</p>
          </div>
          <div class="o">
            <h4>Como funciona a prática deliberada</h4>
            <p>Para cada funcionalidade estudada (Structured Output, Tool Calling, RAG), monte um script enxuto na sua linguagem de preferência (Python ou Java com Spring AI), force casos de erro e meça a taxa de acerto.</p>
          </div>
        </div>

        <div class="vs">
          <div class="antes">
            <div class="lab">ANTES (CONSUMO PASSIVO)</div>
            <div class="conteudo">Assistir a vídeos de demonstrações prontas no YouTube sem digitar comandos ou criar testes próprios de avaliação.</div>
          </div>
          <div class="depois">
            <div class="lab">DEPOIS (EXPERIMENTAÇÃO COM EVALS)</div>
            <div class="conteudo">Executar código contra a API, medir latência e tokens consumidos, e validar o comportamento com casos de teste automatizados.</div>
          </div>
        </div>

        <div class="analogia">
          <i class="ic">≈</i>
          <p><b>Analogia:</b> Aprender IA apenas assistindo a palestras e vídeos é como tentar aprender a nadar estudando física dos fluidos do lado de fora da piscina. Sem pular na água, tomar o erro de rate limit e medir o custo por token, o desenvolvedor não cria reflexo de engenharia.</p>
        </div>

        <div class="gotcha">
          <b>Armadilhas</b>
          <ul>
            <li><b>Ilusão de fluência:</b> achar que domina o assunto porque a explicação do vídeo pareceu simples e lógica.</li>
            <li><b>Pular para a próxima ferramenta:</b> trocar de framework antes de entender por que o script atual falhou na execução de uma ferramenta.</li>
          </ul>
        </div>

        <div class="ver">
          <b>Onde ver na prática e fontes oficiais</b>
          <p>• Portais de desenvolvedores: <a href="https://ai.google.dev" target="_blank" rel="noopener noreferrer">Google AI for Developers</a>, <a href="https://platform.openai.com/docs" target="_blank" rel="noopener noreferrer">OpenAI Platform Docs</a> e <a href="https://docs.anthropic.com" target="_blank" rel="noopener noreferrer">Anthropic Docs</a>.<br>
          • Frameworks: <a href="https://docs.spring.io/spring-ai/reference/" target="_blank" rel="noopener noreferrer">Spring AI Reference Documentation</a> e documentação oficial do FastAPI.</p>
        </div>

        <div class="topico-fechamento">
          <div class="topico-revisao">
            <div class="tr-badge">REVISÃO RÁPIDA</div>
            <ul class="tr-pontos">
              <li>O aprendizado efetivo de IA generativa requer bancada prática imediata após a leitura dos conceitos.</li>
              <li>A execução de chamadas reais contra SDKs revela custos de tokens e latências invisíveis em demonstrações.</li>
              <li>A síntese em notas atômicas no vault previne o esquecimento e consolida a base conceitual de longo prazo.</li>
            </ul>
            <div class="tr-alerta"><b>Alerta:</b> Nunca avalie prompts com apenas um ou dois exemplos manuais; use suítes automatizadas de evals com no mínimo vinte casos representativos.</div>
            <div class="tr-dica"><b>Dica de ouro:</b> Crie scripts em sandbox isolados (um arquivo <code>.py</code> ou classe Java com método main) antes de incorporar novas chamadas de IA à arquitetura principal.</div>
          </div>

          <div class="topico-exercicio" data-exercise-id="ex-ia-t8-ciclo">
            <div class="te-header">
              <div class="te-badge"><span>DESAFIO PRÁTICO DE FIXAÇÃO #t8-ciclo</span></div>
              <div class="te-reward"><span class="te-xp-badge">+50 XP</span><span class="te-status">Aguardando resposta</span></div>
            </div>
            <div class="te-body">
              <p class="te-pergunta"><strong>Por que a execução de provas de conceito locais com métricas (etapa 3 e 4 do ciclo) é indispensável para desenvolvedores de software que estudam IA?</strong></p>
              <p class="te-instrucao">Qual é a melhor decisão e conduta técnica?</p>
              <div class="te-options">
                <button class="te-opt" type="button" data-correct="false" data-rationale="Incorreto. Documentações de API são padronizadas e precisas; a experimentação serve para validar comportamentos estocásticos sob restrição.">
                  <span class="te-letter">A</span> Porque as documentações oficiais das provedoras contêm intencionalmente erros para desencorajar o uso corporativo das ferramentas.
                </button>
                <button class="te-opt" type="button" data-correct="true" data-rationale="Exato. Modelos de IA são probabilísticos; apenas executando chamadas reais e medindo é possível observar alucinações, latências e estouro de limites.">
                  <span class="te-letter">B</span> Porque modelos são probabilísticos; somente executando chamadas reais é possível diagnosticar alucinações, estouro de contexto e latências operacionais.
                </button>
                <button class="te-opt" type="button" data-correct="false" data-rationale="Incorreto. O ciclo de estudos visa exatamente preparar para a arquitetura de produção com segurança, e não substituir a entrega corporativa.">
                  <span class="te-letter">C</span> Porque protótipos locais em sandbox substituem a necessidade de testes de carga e homologação em ambientes corporativos de produção.
                </button>
              </div>
            </div>
          </div>

          <div class="topico-flashcard">
            <div class="tf-tag ok">FLASHCARD</div>
            <div class="tf-pergunta">Qual é a diferença fundamental entre consumo passivo de conteúdo de IA e prática deliberada com evals?</div>
            <div class="tf-resposta">O consumo passivo observa cenários controlados onde tudo funciona; a prática deliberada com evals submete o modelo a casos de borda e entradas adversariais, medindo numericamente a taxa de erro e calibração de guardrails.<span class="tf-hint">← Toque para voltar à pergunta</span></div>
          </div>
        </div>

        <button class="done" type="button" data-k="t8-ciclo">marcar dominado</button>
      </article>

      <!-- t8-canais -->
      <article class="topic" id="t8-canais">
        <div class="th"><h3>Canais e cursos em português</h3><div class="badges"><span class="badge b-ess">essencial</span><span class="badge b-ver">fontes</span></div></div>
        <div class="direto"><b>O que é:</b> Curadoria seletiva de canais, criadores e fontes técnicas em língua portuguesa e internacional comprometidos com a engenharia de software aplicada à inteligência artificial, MLOps e arquitetura de sistemas.</div>

        <div class="caso">
          <b>O caso</b>
          <p>Um desenvolvedor passou quatro meses acompanhando influenciadores que ensinavam a montar automações com bibliotecas experimentais de IA. Três das ferramentas ensinadas foram abandonadas pelos criadores em menos de seis meses. Ao mudar sua estratégia e focar em criadores voltados a microsserviços, governança e documentações oficiais de padrões abertos (como o protocolo MCP), construiu competências duradouras que aplicou diretamente na arquitetura da sua empresa.</p>
        </div>

        <div class="mental-model">
          <div class="mm-header">
            <span class="mm-tag">Modelo Mental</span>
            <h4 class="mm-title">O Filtro Contra o Hype Tecnológico</h4>
          </div>
          <p>
            • <b>Separar Engenharia de Demonstração:</b> Grande parte do conteúdo da internet foca em tutoriais superficiais de chat. O engenheiro de software precisa de fontes que ensinem governança de dados, isolamento de contexto com agentes, tracing distribuído e conformidade de segurança corporativa.
          </p>
        </div>

        <div class="duo">
          <div>
            <h4>Fontes recomendadas</h4>
            <p>• <b>Comunidades de Engenharia de Software:</b> Canais e podcasts focados em arquitetura de backend e microsserviços integrando IA (Full Cycle, Hipsters Ponto Tech).<br>
            • <b>Documentações Oficiais:</b> Portais de documentação das provedoras de modelos (ai.google.dev, platform.openai.com, docs.anthropic.com).<br>
            • <b>Repositórios de Referência:</b> Especificações oficiais do protocolo Model Context Protocol (modelcontextprotocol.io) e frameworks corporativos (Spring AI).</p>
          </div>
          <div class="o">
            <h4>Por que a curadoria importa</h4>
            <p>Evita semanas gastas com bibliotecas temporárias que perdem suporte em poucos meses e direciona o foco para padrões abertos e duradouros da indústria.</p>
          </div>
        </div>

        <div class="vs">
          <div class="antes">
            <div class="lab">ANTES (TUTORIAIS DE HYPE)</div>
            <div class="conteudo">Seguir criadores que prometem automações milagrosas sem abordar custos de API, latência ou riscos de segurança.</div>
          </div>
          <div class="depois">
            <div class="lab">DEPOIS (ARQUITETURA ROBUSTA)</div>
            <div class="conteudo">Aprender com fontes que priorizam contratos de dados, auditoria de tokens, sandboxing e resiliência operacional.</div>
          </div>
        </div>

        <div class="analogia">
          <i class="ic">≈</i>
          <p><b>Analogia:</b> Escolher fontes de estudo em IA é como escolher materiais para construir uma casa: você pode usar blocos artesanais feitos sem teste que quebram sob pressão, ou blocos normatizados por engenharia civil. Documentações oficiais de provedores e especificações abertas (como o protocolo MCP) são o concreto armado do seu conhecimento.</p>
        </div>

        <div class="gotcha">
          <b>Armadilhas</b>
          <ul>
            <li><b>Pagar por cursos que cobrem o que é gratuito:</b> muitas instituições cobram caro por materiais que apenas traduzem a documentação aberta das provedoras de modelos.</li>
            <li><b>Ignorar a língua inglesa:</b> embora fontes em português sejam fundamentais para o modelo mental inicial, as atualizações das APIs saem primeiro na documentação primária em inglês.</li>
          </ul>
        </div>

        <div class="ver">
          <b>Onde ver na prática e fontes oficiais</b>
          <p>• Cursos e credenciais: tabela comparativa no bloco 'Para ir além' abaixo.<br>
          • Padrão aberto de ferramentas: <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer">Model Context Protocol Documentation</a>.<br>
          • Comunidade: repositórios e discussões oficiais de engenheiros no GitHub da Anthropic, OpenAI e Google.</p>
        </div>

        <details class="alem">
          <summary><span class="alem-tag">Para ir além</span> Certificados e cursos gratuitos para quem programa <span class="alem-opt">opcional</span></summary>
          <div class="alem-body">
            <p>Os cursos abaixo cobrem, sem custo, o que <a href="#vagas">as vagas pedem</a>: agentes, RAG, evals, MCP e cloud. Uma regra antes da lista: <b>certificado e badge mostram estudo; o projeto no GitHub mostra que você sabe fazer</b>. Um agente com RAG, evals e tracing, publicado em container na nuvem, pesa tanto quanto a lista de cursos.</p>
            <table class="didatica">
              <thead><tr><th>Credencial</th><th>Tipo</th><th>O que prova</th></tr></thead>
              <tbody>
                <tr><td><b><a href="https://skillbuilder.aws" target="_blank" rel="noopener noreferrer">AWS Agentic AI Demonstrated</a></b></td><td>Prova prática no ambiente real da AWS, com badge</td><td>Agentes no Bedrock: consertar um agente, knowledge bases e guardrails</td></tr>
                <tr><td><b><a href="https://aws.amazon.com/blogs/training-and-certification/prove-your-agentic-ai-skills-two-new-microcredentials-now-available/" target="_blank" rel="noopener noreferrer">AWS Databases for Agentic AI</a></b></td><td>Prova prática, com badge</td><td>Memória e busca de agentes: Aurora PostgreSQL, DynamoDB, pgvector e MCP</td></tr>
                <tr><td><b>AWS Serverless e AWS MLOps Demonstrated</b></td><td>Provas práticas, com badge</td><td>Backend com Lambda e Step Functions; levar um modelo para produção</td></tr>
                <tr><td><b><a href="https://mylearn.oracle.com/ou/learning-path/become-an-oracle-agentic-ai-foundations-associate-2026/163239" target="_blank" rel="noopener noreferrer">Oracle Agentic AI Foundations</a></b></td><td>Curso e prova oficial gratuitos</td><td>Agentes com LangChain e MCP</td></tr>
                <tr><td><b><a href="https://learn.microsoft.com/en-us/credentials/applied-skills/integrate-model-context-protocol-tools-with-agents-in-microsoft-foundry/" target="_blank" rel="noopener noreferrer">Microsoft Applied Skills</a></b></td><td>Laboratório no navegador, credencial verificável</td><td>Criar um agente no Foundry e ligá-lo a ferramentas MCP</td></tr>
                <tr><td><b><a href="https://academy.claude.com" target="_blank" rel="noopener noreferrer">Claude Academy</a></b></td><td>Cursos gratuitos da Anthropic</td><td>API do Claude, tool calling, MCP e agentes de código</td></tr>
                <tr><td><b><a href="https://huggingface.co/learn/agents-course" target="_blank" rel="noopener noreferrer">Hugging Face Agents</a> e <a href="https://huggingface.co/learn/mcp-course" target="_blank" rel="noopener noreferrer">MCP</a></b></td><td>Cursos com certificado ao cumprir as tarefas</td><td>Agentes e MCP em código Python</td></tr>
                <tr><td><b><a href="https://www.deeplearning.ai/short-courses/" target="_blank" rel="noopener noreferrer">DeepLearning.AI Short Courses</a></b></td><td>Cursos curtos, sem certificado oficial</td><td>RAG, evals, agentes e LangGraph</td></tr>
                <tr><td><b><a href="https://www.cloudskillsboost.google" target="_blank" rel="noopener noreferrer">Google Cloud Skills Boost</a></b></td><td>Trilha com badges de conclusão</td><td>IA generativa e Vertex AI</td></tr>
              </tbody>
            </table>
            <p><b>Uma ordem que funciona:</b> começar pelo que é mais próximo de código e de agentes — Claude Academy (API e MCP) e Hugging Face Agents —, depois os cursos de RAG e evals da DeepLearning.AI, e então as provas práticas da AWS (Agentic AI, Databases for Agentic AI, MLOps), a da Oracle e as Applied Skills da Microsoft. Quando quiser uma certificação com prova supervisionada, as pagas que mais conversam com este conteúdo são a AWS Cloud Practitioner (base) e a AWS Generative AI Developer (Bedrock, RAG e agentes).</p>
            <span class="alem-src">Gratuidade, formato e conteúdo conferidos nas páginas oficiais em out/2026. Cursos, nomes de prova e preços mudam com frequência: confirme no site antes de começar.</span>
          </div>
        </details>

        <div class="topico-fechamento">
          <div class="topico-revisao">
            <div class="tr-badge">REVISÃO RÁPIDA</div>
            <ul class="tr-pontos">
              <li>Priorize fontes e canais focados em arquitetura de microsserviços e resiliência de engenharia de software.</li>
              <li>Padrões consolidados da indústria (como MCP e SDKs oficiais) protegem o tempo de estudo contra bibliotecas efêmeras.</li>
              <li>Certificações comprovam horas de estudo teórico, enquanto repositórios funcionais com evals comprovam competência prática.</li>
            </ul>
            <div class="tr-alerta"><b>Alerta:</b> Evite canais que comercializam receitas de prompts prontas ou que omitem os custos e latências operacionais dos modelos.</div>
            <div class="tr-dica"><b>Dica de ouro:</b> Aproveite os laboratórios práticos e gratuitos da Claude Academy e Hugging Face para obter validação prática de alto nível sem custo.</div>
          </div>

          <div class="topico-exercicio" data-exercise-id="ex-ia-t8-canais">
            <div class="te-header">
              <div class="te-badge"><span>DESAFIO PRÁTICO DE FIXAÇÃO #t8-canais</span></div>
              <div class="te-reward"><span class="te-xp-badge">+50 XP</span><span class="te-status">Aguardando resposta</span></div>
            </div>
            <div class="te-body">
              <p class="te-pergunta"><strong>Qual é a estratégia de seleção de conteúdo mais eficiente para um desenvolvedor de software que deseja se capacitar em engenharia de IA de forma duradoura?</strong></p>
              <p class="te-instrucao">Qual é a melhor decisão e conduta técnica?</p>
              <div class="te-options">
                <button class="te-opt" type="button" data-correct="true" data-rationale="Exato. Priorizar documentações oficiais, padrões abertos de protocolos (como MCP) e comunidades sérias garante conhecimento durável e resistente a mudanças de mercado.">
                  <span class="te-letter">A</span> Focar em documentações oficiais primárias dos provedores, padrões abertos (como MCP) e fontes voltadas a arquitetura de sistemas e segurança.
                </button>
                <button class="te-opt" type="button" data-correct="false" data-rationale="Incorreto. Acompanhar tendências rápidas de redes sociais sem critério de engenharia resulta em acúmulo de ferramentas descartáveis e pouca profundidade.">
                  <span class="te-letter">B</span> Consumir diariamente resumos de redes sociais sobre novos plugins e automações no-code, priorizando velocidade de adoção sobre fundamentos.
                </button>
                <button class="te-opt" type="button" data-correct="false" data-rationale="Incorreto. O ecossistema de IA generativa evoluiu drasticamente; limitar-se a livros antigos impede o domínio de modelos de atenção e agentes modernos.">
                  <span class="te-letter">C</span> Estudar exclusivamente livros clássicos de redes neurais dos anos 1990, desconsiderando as inovações trazidas pela arquitetura Transformer e LLMs.
                </button>
              </div>
            </div>
          </div>

          <div class="topico-flashcard">
            <div class="tf-tag ok">FLASHCARD</div>
            <div class="tf-pergunta">Como o padrão aberto do Model Context Protocol (MCP) protege o desenvolvedor contra obsolescência técnica?</div>
            <div class="tf-resposta">Ao desacoplar a definição de ferramentas e recursos do cliente ou modelo específico, o MCP permite que os mesmos servidores de dados funcionem com qualquer LLM ou orquestrador compatível, evitando dependência de código proprietário.<span class="tf-hint">← Toque para voltar à pergunta</span></div>
          </div>
        </div>

        <button class="done" type="button" data-k="t8-canais">marcar dominado</button>
      </article>

      <!-- t8-pratica -->
      <article class="topic" id="t8-pratica">
        <div class="th"><h3>Como pesquisar e o que praticar</h3><div class="badges"><span class="badge b-ess">essencial</span><span class="badge b-ver">projetos</span></div></div>
        <div class="direto"><b>O que é:</b> Roteiro para investigar dúvidas técnicas em fontes confiáveis e praticar conceitos em projetos verificáveis. A bancada reúne quatro missões de IA com dependências graduais; cada uma deixa evidências que ajudam a revisar e explicar decisões.</div>

        <div class="caso">
          <b>O caso</b>
          <p>Durante uma rotina de manutenção, uma chamada de IA passou a retornar respostas truncadas e quebrar o parser de JSON em produção. Um engenheiro menos experiente tentou 'conversar' com o próprio chat para que ele arrumasse o prompt aleatoriamente. O engenheiro sênior seguiu o roteiro metódico de 4 passos: inspecionou os tokens consumidos, reproduziu a requisição exata via curl local, verificou que o provedor havia atualizado o formato padrão de resposta na versão da API e aplicou um esquema Pydantic estrito com validação de fallback. O problema foi resolvido de forma determinística em vinte minutos.</p>
        </div>

        <div class="mental-model">
          <div class="mm-header">
            <span class="mm-tag">Modelo Mental</span>
            <h4 class="mm-title">O Portfólio com Evidências de Produção</h4>
          </div>
          <p>
            • <b>Além do CRUD de IA:</b> Não apresente apenas um chatbot comum. Um projeto de destaque demonstra esteira de CI/CD com avaliação automática de alucinações, banco vetorial com índices HNSW/IVFFlat calibrados e agentes com ferramentas sandboxed.
          </p>
        </div>

        <div class="duo">
          <div>
            <h4>Como pesquisar com precisão</h4>
            <p>1. <b>Reproduza:</b> reduza a dúvida a uma entrada, saída e erro observáveis.<br>
            2. <b>Contextualize:</b> anote linguagem, framework, versão, provider e ambiente; retire segredos e dados pessoais.<br>
            3. <b>Verifique a fonte:</b> consulte primeiro a documentação oficial da versão e um exemplo mínimo executável; use issues e discussões para investigar divergências depois.<br>
            4. <b>Teste uma hipótese:</b> mude uma variável, registre o resultado e mantenha o caso reproduzível. Uma resposta da IA é uma hipótese, não uma fonte de verdade.</p>
          </div>
          <div class="o">
            <h4>Quatro missões práticas, em sequência</h4>
            <p>1. <b>I01 — RAG local:</b> recupere fontes, cite trechos e admita quando não há evidência.<br>
            2. <b>I02 — Saída estruturada:</b> valide contrato, fallback e qualidade por classe.<br>
            3. <b>I03 — Evals e guardrails:</b> meça regressões e teste ameaças com casos repetíveis.<br>
            4. <b>I04 — Agente com ferramentas:</b> consulte pedidos com autorização por tenant, limites e aprovação para ações.</p>
          </div>
        </div>

        <div class="vs">
          <div class="antes">
            <div class="lab">ANTES (PROJETOS DE TUTORIAL)</div>
            <div class="conteudo">Um exemplo de chat isolado que não testa timeout, resposta inválida, vazamento entre tenants nem a diferença entre uma sugestão do modelo e uma operação realmente autorizada.</div>
          </div>
          <div class="depois">
            <div class="lab">DEPOIS (SISTEMAS CORPORATIVOS)</div>
            <div class="conteudo">Um repositório que documenta limites, mede qualidade em conjunto fixo de casos, testa falhas, protege dados e mostra como cada decisão do modelo foi validada pelo backend.</div>
          </div>
        </div>

        <div class="analogia">
          <i class="ic">≈</i>
          <p><b>Analogia:</b> Diagnosticar falhas em sistemas de IA sem isolar as variáveis de entrada é como um médico receitar antibióticos a um paciente sem solicitar hemograma ou exame de cultura. O isolamento determinístico do caso de teste é o exame laboratorial da engenharia de software.</p>
        </div>

        <div class="gotcha">
          <b>Armadilhas</b>
          <ul>
            <li><b>Acreditar cegamente no conselho de uma IA sobre bugs de IA:</b> quando as bibliotecas sofrem breaking changes em versões recentes, o modelo frequentemente alucina métodos e flags obsoletos.</li>
            <li><b>Deixar de registrar a solução:</b> encontrar uma solução após horas de teste empírico e não documentá-la em uma nota técnica no vault leva à repetição do erro no futuro.</li>
          </ul>
        </div>

        <div class="ver">
          <b>Onde ver na prática e fontes oficiais</b>
          <p>• Laboratório: <a href="../lab/projetos.html#projetos">Missões I01 a I04 no Laboratório de Projetos</a>.<br>
          • Avaliação: repositórios e benchmarks das ferramentas <a href="https://github.com/explodinggradients/ragas" target="_blank" rel="noopener noreferrer">Ragas</a> e <a href="https://github.com/confident-ai/deepeval" target="_blank" rel="noopener noreferrer">DeepEval</a>.<br>
          • Caderno de apoio: <a href="../cadernos/conceitos-backend.html">Conceitos de Backend — Observabilidade, Logs e Resiliência</a>.</p>
        </div>

        <div class="topico-fechamento">
          <div class="topico-revisao">
            <div class="tr-badge">REVISÃO RÁPIDA</div>
            <ul class="tr-pontos">
              <li>A investigação técnica rigorosa exige isolar entrada, saída e mensagem de erro antes de alterar prompts.</li>
              <li>As quatro missões do Laboratório (I01 a I04) exercitam RAG, schemas estruturados, evals e agentes com ferramentas.</li>
              <li>A resposta de um modelo de linguagem sobre código deve ser tratada como hipótese a ser verificada contra testes reais.</li>
            </ul>
            <div class="tr-alerta"><b>Alerta:</b> Nunca compartilhe logs contendo dados confidenciais de clientes ou credenciais ao buscar ajuda em fóruns ou ferramentas de IA.</div>
            <div class="tr-dica"><b>Dica de ouro:</b> Crie scripts de teste mínimos reproduzíveis (MRE) que possam ser executados com um único comando no terminal para diagnosticar falhas de SDK.</div>
          </div>

          <div class="topico-exercicio" data-exercise-id="ex-ia-t8-pratica">
            <div class="te-header">
              <div class="te-badge"><span>DESAFIO PRÁTICO DE FIXAÇÃO #t8-pratica</span></div>
              <div class="te-reward"><span class="te-xp-badge">+50 XP</span><span class="te-status">Aguardando resposta</span></div>
            </div>
            <div class="te-body">
              <p class="te-pergunta"><strong>Ao se deparar com uma falha de validação intermitente no retorno de uma chamada de função (tool calling) via SDK, qual conduta técnica é recomendada?</strong></p>
              <p class="te-instrucao">Qual é a melhor decisão e conduta técnica?</p>
              <div class="te-options">
                <button class="te-opt" type="button" data-correct="false" data-rationale="Incorreto. Aumentar a temperatura torna o modelo ainda mais aleatório e estocástico, agravando problemas de aderência a esquemas JSON.">
                  <span class="te-letter">A</span> Elevar a temperatura para o valor máximo permitido e instruir o modelo em linguagem natural a tentar novamente até acertar.
                </button>
                <button class="te-opt" type="button" data-correct="false" data-rationale="Incorreto. Retirar a tipagem rígida apenas oculta o erro momentaneamente, transferindo falhas críticas para a camada de processamento de dados.">
                  <span class="te-letter">B</span> Remover as tipagens e restrições do esquema JSON, permitindo que a API receba qualquer estrutura genérica sem validação.
                </button>
                <button class="te-opt" type="button" data-correct="true" data-rationale="Exato. Isolar o payload, examinar o JSON retornado pelo modelo contra a documentação oficial da versão e calibrar o esquema com exemplos claros de poucas amostras (few-shot) resolve a raiz do problema.">
                  <span class="te-letter">C</span> Isolar o payload de entrada, inspecionar o JSON bruto recebido do modelo contra o schema Pydantic/Java e incluir exemplos (few-shot) no prompt.
                </button>
              </div>
            </div>
          </div>

          <div class="topico-flashcard">
            <div class="tf-tag ok">FLASHCARD</div>
            <div class="tf-pergunta">Quais são as quatro etapas do método de pesquisa técnica precisa para engenharia de software e IA?</div>
            <div class="tf-resposta">1. Reproduzir a falha isolando entrada e saída; 2. Contextualizar ambiente e versões oficiais; 3. Verificar a documentação primária da versão exata; 4. Formular e testar uma hipótese controlada com um teste automatizado.<span class="tf-hint">← Toque para voltar à pergunta</span></div>
          </div>
        </div>

        <button class="done" type="button" data-k="t8-pratica">marcar dominado</button>
      </article>

    </section>`;

const p7Start = html.indexOf('<section class="part" id="projetos">');
const pEnd = html.indexOf('<!-- FOOTER -->');

if (p7Start === -1 || pEnd === -1) {
  console.error('ERRO: Não encontrou os marcadores de início ou fim das partes 7 e 8!');
  process.exit(1);
}

html = html.slice(0, p7Start) + novaPartes07e08 + '\n\n    ' + html.slice(pEnd);

// Atualizar array DATA em trilhas/ia.html
// Localizar bloco do Nível 7 e Nível 8 no DATA
const dataNivel7Regex = /\{\s*g:\s*"07",\s*n:\s*"Nível 7: Projetos"[\s\S]*?\}\s*\]\s*\}\s*;/;
const novoDataNivel7e8 = `{
    g: "07", n: "Nível 7: Projetos", s: "do zero ao deploy, em escada até o carro-chefe", c: "var(--teal)", cs: "var(--teal-s)",
    items: [
      {
        id: "t7-ciclo",
        t: "Do Zero ao Deploy", x: "o ciclo de um projeto",
        oq: "Roteiro que todo projeto da trilha segue: problema, critérios de sucesso, especificação, arquitetura, versão local, avaliação, observabilidade, deploy e operação.",
        ps: "Transformar uma demonstração em sistema: saber se funciona, quanto custa e o que muda a cada versão.",
        sub: "Substituiu o projeto de fim de semana que impressiona na demonstração e para ali.",
        pq: "Cada fase termina com uma entrega no repositório (README, casos de teste, SPEC.md, evals/, link no ar). Erro comum: começar pelo framework e deixar a avaliação para depois.",
        ex: "docker compose up local; casos de teste em evals/; pipeline que testa, avalia e publica.",
        alem: "Publique uma versão simples cedo: os problemas de produção só aparecem em produção."
      },
      {
        id: "t7-escada",
        t: "Os 4 Projetos em Escada", x: "chat, RAG, agente, carro-chefe",
        oq: "Três projetos que treinam as peças (ferramentas, RAG, agente com MCP) e um carro-chefe que junta tudo em produção.",
        ps: "Terminar a trilha com projetos prontos, e não só com conceitos lidos.",
        sub: "Substituiu os exercícios soltos por tópico, que não somam num portfólio.",
        pq: "Cada tópico tem um bloco Projeto do conceito, que é uma tarefa de um dos projetos. Erro comum: pular para o carro-chefe sem ter feito as peças.",
        ex: "Projeto 1: FastAPI com tool calling e streaming; Projeto 2: RAG com pgvector; Projeto 3: servidor MCP e agente.",
        alem: "Faça um dos serviços também em Spring AI para mostrar IA no ecossistema Java."
      },
      {
        id: "t7-ancora",
        t: "Carro-Chefe", x: "um problema seu, no ar",
        oq: "Um sistema que resolve um problema seu de verdade, com dados reais, avaliações, observabilidade e deploy.",
        ps: "Ter um projeto que você usa, mostra em entrevista e mantém você estudando.",
        sub: "Substituiu o projeto de tutorial, igual ao de milhares de outros portfólios.",
        pq: "Passa por todas as fases do ciclo; começa local e sobe para a nuvem no fim. Erro comum: escolher um problema que você não tem e abandonar no meio.",
        ex: "Assistente dos seus estudos com RAG e citação da fonte; revisor de pull request no CI; assistente de suporte que abre chamados.",
        alem: "README com diagrama e decisões, evals/ com antes e depois, link no ar e vídeo de 2 minutos."
      }
    ]
  },
  {
    g: "08", n: "Nível 8: Como aprender de verdade", s: "o ciclo que fixa, fontes que valem e laboratórios reais", c: "var(--purple)", cs: "var(--purple-soft)",
    items: [
      {
        id: "t8-ciclo",
        t: "O ciclo de aprendizado", x: "sandboxes e evals",
        oq: "O método de fixação em seis passos: leitura da documentação e papers fundamentais → vídeo de síntese conceitual → experimentação em sandbox com Python/Spring AI → redação de evals automatizadas → nota técnica no vault → revisão ativa.",
        ps: "Garantir que os modelos mentais de LLMs, agentes e RAG saiam da teoria e virem código auditável em produção.",
        sub: "Substituiu o consumo passivo de vídeos de demonstração que criam falsa sensação de domínio.",
        pq: "Para cada conceito: configure um script mínimo de teste, force alucinações ou injeções de propósito, meça o comportamento com evals e registre a técnica de mitigação.",
        ex: "# ciclo:\\n# 1. ler paper / doc da API\\n# 2. testar prompt no script com SDK\\n# 3. criar eval determinística\\n# 4. registrar o padrão no vault",
        alem: "Engenharia de IA exige experimentação empírica: sem rodar código contra a API e medir latência e acurácia, o conhecimento não se consolida."
      },
      {
        id: "t8-canais",
        t: "Canais e cursos em português", x: "fontes com rigor técnico",
        oq: "Curadoria de criadores de conteúdo e referências em português e internacional dedicados à engenharia de software aplicada à inteligência artificial, MLOps e arquitetura de sistemas.",
        ps: "Construir o modelo mental no idioma nativo com profissionais que abordam o ciclo real de produção corporativa.",
        sub: "Substituiu conteúdos de hype focados em tutoriais rasos de geração de texto sem rigor de engenharia.",
        pq: "Priorize fontes que discutem arquitetura de dados vetoriais, protocolo MCP, avaliação sistemática de modelos e guardrails de segurança.",
        ex: "# referências:\\n# canais técnicos focados em arquitetura de IA, agentes e sistemas distribuídos\\n# documentações oficiais: ai.google.dev, platform.openai.com, docs.anthropic.com",
        alem: "Siga criadores que mostram falhas reais de produção, custos de inferência e testes automatizados em vez de apenas ferramentas prontas."
      },
      {
        id: "t8-pratica",
        t: "Como pesquisar e o que praticar", x: "diagnóstico e portfólio",
        oq: "Formulação de buscas precisas usando terminologia de arquitetura de IA e construção de 3 projetos autorais completos para portfólio.",
        ps: "Desenvolver autonomia para depurar pipelines de RAG e agentes, comprovando senioridade com repositórios reais.",
        sub: "Substituiu projetos de chat genérico copiados de tutoriais sem tratamento de tokens ou segurança.",
        pq: "Consulte documentações oficiais de SDKs (Spring AI, LangChain, LlamaIndex, Google GenAI SDK) e repositórios de benchmarks de avaliação como Ragas e DeepEval.",
        ex: "# projetos de portfólio:\\n# 1. RAG híbrido com pgvector e reranker\\n# 2. Agente MCP corporativo com sandboxing\\n# 3. Pipeline CI/CD com test harness e evals de qualidade",
        alem: "O portfólio definitivo de engenharia de IA demonstra pipelines com testes de regressão, métricas de fidelidade e limites claros de custo."
      }
    ]
  }
];`;

html = html.replace(dataNivel7Regex, novoDataNivel7e8);

fs.writeFileSync('trilhas/ia.html', html, 'utf8');
console.log('trilhas/ia.html atualizado com sucesso!');
