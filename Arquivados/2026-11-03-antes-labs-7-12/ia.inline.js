/* Extraido de trilhas/ia.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 3 ---------- */

/* ==================== DADOS DA TRILHA CENTRAL INTERATIVA (50 NÓS) ==================== */
var DATA = [
  {
    g: "01",
    n: "01 · Fundamentos",
    s: "vocabulário necessário, sem exigir ciência de dados",
    c: "var(--teal)",
    cs: "var(--teal-s)",
    items: [
      {
        id: "t1-ia",
        t: "Inteligência Artificial",
        x: "uma área com várias abordagens",
        oq: "Área que estuda sistemas para classificar, prever, planejar, perceber ou gerar conteúdo. Inclui regras, busca, otimização e modelos aprendidos.",
        ps: "Resolver tarefas em que uma solução baseada em regras fixas pode ser insuficiente ou cara de manter.",
        sub: "Não substituiu regras: sistemas determinísticos continuam adequados quando a política é conhecida e precisa ser previsível.",
        pq: "A aplicação recebe uma entrada, chama a abordagem escolhida e decide como validar e usar o resultado.",
        ex: "Um backend pode usar regras para bloquear uma operação proibida e um modelo para classificar uma descrição ambígua.",
        alem: "IA é o campo amplo; ML é uma das abordagens. Nem todo software com regras é chamado de IA, e os limites do termo variam por contexto."
      },
      {
        id: "t1-ml",
        t: "Machine Learning",
        x: "ajustar um modelo usando dados",
        oq: "Subárea de IA em que um algoritmo ajusta parâmetros a partir de dados para produzir previsões ou decisões, em vez de codificar cada associação como regra explícita.",
        ps: "Usar padrões observados para classificar, estimar ou agrupar casos novos; o resultado depende de dados, objetivo e avaliação.",
        sub: "Não substitui automaticamente if/else: regras explícitas são melhores quando a decisão é conhecida e precisa ser auditável.",
        pq: "Há diferentes paradigmas, como aprendizado supervisionado, não supervisionado e por reforço. Cada um define dados, sinal de aprendizado e objetivo diferentes.",
        ex: "Treine um classificador com chamados já rotulados e teste-o em exemplos que não participaram do treinamento.",
        alem: "Compare com uma baseline simples e avalie erros por classe, custo de falsos positivos/negativos e mudança dos dados ao longo do tempo."
      },
      {
        id: "t1-dl",
        t: "Deep Learning",
        x: "redes neurais com várias camadas",
        oq: "Família de métodos de ML baseada em redes neurais com múltiplas camadas, que aprendem representações a partir dos dados durante o treinamento.",
        ps: "Trabalhar com dados complexos como imagem, áudio e texto, quando há dados, recursos e qualidade de avaliação adequados.",
        sub: "Reduziu a necessidade de projetar manualmente alguns atributos em certas tarefas; não eliminou preparação, conhecimento do domínio ou avaliação.",
        pq: "Cada camada transforma a representação recebida. O que as camadas aprendem depende dos dados, objetivo, arquitetura e treinamento; não há uma hierarquia universal de conceitos.",
        ex: "Um classificador de imagens é treinado com exemplos rotulados, depois avaliado em imagens separadas para medir erros.",
        alem: "Deep Learning pode exigir muita computação, mas tamanho de dados e uso de GPU dependem do problema, modelo e estratégia de treinamento."
      },
      {
        id: "t1-llm",
        t: "LLMs",
        x: "modelos que geram sequências de texto",
        oq: "Modelos de linguagem treinados para estimar continuações de sequências de tokens; muitos usam Transformers e são ajustados para seguir instruções.",
        ps: "Interpretar pedidos e produzir rascunhos, explicações ou saídas estruturadas. O modelo não conhece automaticamente seus sistemas nem garante fatos.",
        sub: "Não substitui regex, busca ou classificadores em toda tarefa: cada abordagem tem custo, previsibilidade e capacidade diferentes.",
        pq: "Na geração autoregressiva, o modelo calcula uma distribuição para o próximo token, escolhe um conforme a estratégia de decodificação e continua a partir do contexto atualizado.",
        ex: "Peça ao LLM uma hipótese para um stack trace; confirme-a reproduzindo o problema e verificando código, métricas e documentação.",
        alem: "ChatGPT é um produto que pode usar modelos; LLM designa uma família de modelos. Produto, modelo, provider e interface não são sinônimos."
      },
      {
        id: "t1-generativos",
        t: "Generativos vs Discriminativos",
        x: "probabilidade conjunta vs condicional",
        oq: "Modelos discriminativos aprendem a fronteira de decisão entre classes P(Y|X); modelos generativos modelam a distribuição conjunta P(X, Y) ou P(X) para criar novos exemplos.",
        ps: "Decidir se o problema exige classificação determinística leve ou síntese e geração de texto/código.",
        sub: "Substituiu classificadores pontuais em tarefas abertas de redação, sumarização e criação de dados sintéticos.",
        pq: "Modelos generativos têm maior flexibilidade e custo de inferência exponencialmente superior a classificadores leves.",
        ex: "Use XGBoost ou regressão logística para risco de crédito; use LLM generativo para redigir o parecer explicativo.",
        alem: "Modelos generativos podem ser calibrados via DPO (Direct Preference Optimization) para alinhar a distribuição aos objetivos de negócio."
      },
      {
        id: "t1-agentes",
        t: "Agentes de IA",
        x: "autonomia que age no mundo",
        oq: "Sistemas onde um LLM opera como núcleo de raciocínio dentro de um loop de controle com memória, ferramentas e capacidade de perceber o retorno do ambiente.",
        ps: "Resolver tarefas não determinísticas que exigem múltiplos passos, testes e correções de rota autônomas.",
        sub: "Substituiu chamadas isoladas mono-passo que falhavam na primeira exceção de runtime.",
        pq: "O agente recebe uma meta, decompõe em subtarefas, invoca APIs externas e reflete sobre o resultado até atingir a condição de parada.",
        ex: "Agente que lê um PR no GitHub, roda os testes locais, depura a stack trace e comita a correção.",
        alem: "Agentes exigem limites rígidos de execução (sandboxing, timeouts e aprovação humana para ações destrutivas)."
      },
      {
        id: "t1-transformer",
        t: "Arquitetura Transformer",
        x: "autoatenção e paralelismo",
        oq: "Arquitetura neural baseada exclusivamente em mecanismos de atenção (Self-Attention), eliminando a recorrência sequencial das RNNs/LSTMs.",
        ps: "Permitir treinamento massivamente paralelo em GPUs modernas sobre corpora de trilhões de tokens.",
        sub: "Substituiu RNNs e LSTMs que sofriam com esquecimento catastrófico e gradientes que explodiam em sequências longas.",
        pq: "A autoatenção calcula o relacionamento direto entre todos os pares de palavras da frase simultaneamente com complexidade O(N²).",
        ex: "O Transformer associa o pronome 'ele' ao substantivo 'servidor' mesmo quando separados por 40 palavras.",
        alem: "Variantes como FlashAttention reduzem acessos lentos à memória HBM da GPU reorganizando o cálculo de atenção em blocos SRAM."
      },
      {
        id: "t1-finetuning",
        t: "Prompt vs RAG vs Fine-tuning",
        x: "a tríade de adaptação",
        oq: "A matriz fundamental de decisão técnica para personalizar o comportamento e o conhecimento de sistemas de IA.",
        ps: "Evitar o custo proibitivo de treinar ou afinar pesos quando poucas linhas de contexto resolvem o problema.",
        sub: "Substituiu a crença errônea de que todo projeto de IA corporativo exige retreinamento de modelo.",
        pq: "Prompt ensina formato; RAG injeta dados privados e voláteis; Fine-tuning internaliza estilo, vocabulário especializado e formato estrito.",
        ex: "RAG para consultar manuais da empresa; Fine-tuning para ensinar o modelo a gerar dialeto SQL proprietário.",
        alem: "Fine-tuning não substitui RAG para dados factuais dinâmicos, pois modelos continuam sujeitos a alucinações de memória paramétrica."
      },
      {
        id: "t1-ecossistema",
        t: "Os 4 Pilares da IA",
        x: "dados, modelos, infra e orquestração",
        oq: "A visão sistêmica de AI Engineering: Camada de Dados, Camada de Modelos Fundamentais, Infraestrutura de Hardware e Frameworks de Aplicação.",
        ps: "Mapear dependências e desenhar arquiteturas corporativas resilientes sem vendor lock-in.",
        sub: "Substituiu a visão simplista de que construir software com IA resume-se a chamar uma API REST de chat.",
        pq: "Cada pilar impõe gargalos próprios: dados ditam fidelidade; modelo dita raciocínio; infra dita latência; aplicação dita segurança.",
        ex: "Arquitetura corporativa com vLLM local em Kubernetes, PostgreSQL pgvector e clientes Spring AI.",
        alem: "A maturidade do ecossistema migrou para protocolos abertos universais como o Model Context Protocol (MCP)."
      },
      {
        id: "t1-transformer-math",
        t: "Aprofundamento: atenção e posição",
        x: "Q/K/V e codificação posicional",
        oq: "Detalhe interno de Transformers: projeções Query, Key e Value participam do cálculo de atenção; mecanismos posicionais representam a ordem dos tokens.",
        ps: "Ajudar quem precisa entender arquitetura ou otimizar modelos hospedados. É opcional para integrar um modelo por API.",
        sub: "RoPE é uma das técnicas posicionais, não substitui universalmente outros métodos nem garante contexto longo.",
        pq: "A atenção compara consultas e chaves, normaliza pesos e combina valores. RoPE aplica rotações dependentes da posição; extensão de contexto requer avaliação própria.",
        ex: "Estude Q/K/V depois de conseguir explicar tokens, contexto e geração autoregressiva; não precisa implementar atenção para construir um app Spring AI.",
        alem: "O objetivo aqui é reconhecer mecanismos e limites, não decorar a equação. Contexto anunciado não garante que toda informação será usada corretamente."
      }
    ]
  },
  {
    g: "02",
    n: "Nível 2: Dominar LLMs",
    s: "a mecânica operacional do token e inferência",
    c: "var(--brand)",
    cs: "var(--brand-s)",
    items: [
      {
        id: "t2-mecanica",
        t: "Tokens e embeddings",
        x: "unidades de texto e vetores",
        oq: "Tokens são unidades definidas pelo tokenizador, podendo representar palavras, partes de palavras, pontuação ou outros símbolos. Embeddings são vetores numéricos produzidos por um modelo para representar entradas em um espaço aprendido.",
        ps: "Tokens ajudam a estimar limites e custo de chamadas; embeddings permitem comparar ou recuperar conteúdos por similaridade, conforme o modelo e a tarefa.",
        sub: "Embeddings complementam busca lexical; não a substituem em todos os casos, especialmente para identificadores e termos exatos.",
        pq: "O tokenizador transforma a entrada em IDs; uma camada ou modelo de embedding mapeia unidades para vetores. Dimensão e significado dependem do modelo usado.",
        ex: "Gere embeddings de descrições e avalie se consultas rotuladas recuperam os documentos relevantes entre os primeiros resultados.",
        alem: "Não existe regra universal de caracteres por token ou dimensão do vetor. Verifique o tokenizador e a documentação do modelo escolhido."
      },
      {
        id: "t2-tokens",
        t: "Janela de contexto e limites",
        x: "o que a chamada consegue receber",
        oq: "Janela de contexto é o limite de tokens que o modelo processa em uma chamada, incluindo instruções, histórico, documentos e espaço para saída.",
        ps: "Planejar o que enviar, prever limites e reduzir custo e latência com Context Caching e reaproveitamento de KV Cache.",
        sub: "Janelas maiores ampliaram o que cabe em uma chamada; não substituem busca, seleção de contexto ou testes de recuperação.",
        pq: "O provider tokeniza a entrada e reutiliza matrizes Key-Value de prefixos estáveis na memória de GPU para cortar até 90% do custo de leitura.",
        ex: "Mantenha documentos estáticos no início do prompt para ativar Context Caching e coloque perguntas variáveis ao final.",
        alem: "Uma janela de 1M de tokens não garante atenção uniforme nem substitui filtros de segurança contra injeção de prompt."
      },
      {
        id: "t2-temperatura",
        t: "Temperatura, Top-k & Top-p",
        x: "como o modelo escolhe a próxima palavra",
        oq: "Três controles que mexem na lista de probabilidades antes do sorteio de cada token: temperatura concentra ou espalha; top-k guarda os K mais prováveis; top-p guarda os mais prováveis até somar P.",
        ps: "Saída estável para JSON, SQL e código (temperatura 0 a 0.2) ou variada para texto criativo (0.7 a 0.9 com top-p 0.9 a 0.95).",
        sub: "Substituiu a busca gulosa e o beam search, que repetem em texto aberto, e o sorteio puro, que pega tokens absurdos da cauda.",
        pq: "Temperatura divide os logits antes do softmax; top-k corta num número fixo; top-p corta pela soma acumulada. Erro comum: confiar em top-k num provedor que não aceita o parâmetro.",
        ex: "ChatOptions.builder().temperature(0.0).build() para extrair JSON; .temperature(0.8).topP(0.92) para descrição de produto.",
        alem: "Mude um parâmetro por vez e compare com casos de teste; temperatura 0 não garante a mesma resposta em toda execução."
      },
      {
        id: "t2-alucinacao",
        t: "Alucinação e ancoragem",
        x: "mitigações e salvaguardas",
        oq: "Alucinação é a geração de informações plausíveis porém factualmente incorretas devido à natureza probabilística autoregressiva dos LLMs.",
        ps: "Desenhar salvaguardas com RAG, citação estrita de fontes, verificação determinística e instruções de recusa ('se não souber, diga que não sabe').",
        sub: "Substituiu a confiança cega nas respostas textuais desprovidas de evidências auditáveis.",
        pq: "O modelo otimiza coerência estocástica e não verdade ontológica; ancoragem em documentos reais limita o espaço de geração.",
        ex: "Instrua no prompt: 'Baseie-se exclusivamente nos trechos fornecidos em <docs>. Se o dado não constar expressamente, responda não encontrado.'",
        alem: "Métricas como Faithfulness no framework Ragas medem a taxa percentual de afirmações sustentadas pelo contexto."
      },
      {
        id: "t2-metricas",
        t: "Métricas TTFT / TPS e roteamento",
        x: "latência, throughput e escolha de modelo",
        oq: "TTFT (Time To First Token) mede a latência inicial; TPS mede a velocidade contínua. Model Router direciona a requisição.",
        ps: "Avaliar se streaming ou roteamento entre modelos melhora experiência e custo sem degradar resultados importantes.",
        sub: "Não substitui escolher e avaliar um modelo apropriado; roteamento adiciona uma decisão e pode falhar ou atrasar.",
        pq: "TTFT mede até o primeiro token; TPS mede taxa de geração. Um roteador aplica regras ou classificação para escolher uma rota; cada etapa acrescenta custo e latência.",
        ex: "Meça latência p50/p95, custo e qualidade por classe antes e depois de rotear uma amostra de requisições.",
        alem: "Streaming melhora percepção em alguns fluxos, mas não reduz necessariamente o tempo total nem resolve respostas lentas."
      },
      {
        id: "t2-aceleracao",
        t: "Aprofundamento: speculative decoding e MoE",
        x: "técnicas internas; ganho precisa ser medido",
        oq: "No speculative decoding, um modelo auxiliar propõe tokens que o modelo-alvo verifica; em MoE, um roteador seleciona especialistas para processar a entrada.",
        ps: "Entender opções de otimização ao hospedar modelos. Não é necessário dominar isso para integrar um LLM via API.",
        sub: "Não substituem a geração autoregressiva; alteram como partes do cálculo são executadas.",
        pq: "Taxa de aceitação, memória, hardware, comunicação e implementação determinam o resultado. Erro comum: presumir aceleração fixa a partir do nome da técnica.",
        ex: "Compare baseline e alternativa sob a mesma carga, observando qualidade, latência, throughput e memória.",
        alem: "Algoritmos compatíveis de speculative decoding podem preservar a distribuição de saída do modelo-alvo; isso não implica ganho de desempenho em todo workload."
      },
      {
        id: "t2-reasoning",
        t: "Reasoning Models & Test-Time Compute",
        x: "thinking tokens e reflexão em inferência",
        oq: "Modelos treinados via RL com verificação determinística que alocam computação em tempo de inferência, gerando thinking tokens antes da resposta final.",
        ps: "Resolver raciocínios complexos em matemática, finanças, código e lógica dedutiva com taxa quase nula de alucinação.",
        sub: "Substituiu prompts artificiais de 'pense passo a passo' por raciocínio e auto-correção nativos do modelo.",
        pq: "O modelo decompõe submetas e realiza backtracking interno; thinking tokens são faturados na tarifa de saída, exigindo tetos de orçamento.",
        ex: "Configurar reasoning_effort='medium' ou max_thinking_tokens=4000 e transmitir reasoning_content via streaming SSE.",
        alem: "Test-time scaling laws comprovam que alocar mais computação em inferência supera o ganho de apenas aumentar o tamanho do modelo."
      }
    ]
  },
  {
    g: "03",
    n: "Nível 3: IA no Dev",
    s: "engenharia de prompt e spec-driven development",
    c: "var(--teal)",
    cs: "var(--teal-s)",
    items: [
      {
        id: "t3-prompt",
        t: "Estruturar e testar prompts",
        x: "objetivo, contexto, limites e verificação",
        oq: "Formular instruções, contexto e formato de saída para uma tarefa. As quatro perguntas são uma heurística útil, não um padrão universal nem garantia de correção.",
        ps: "Reduzir ambiguidade e facilitar revisão. Prompts melhores ainda exigem validação, testes e revisão humana conforme o risco.",
        sub: "Organiza pedidos ad hoc em tarefas que podem ser comparadas e verificadas.",
        pq: "O modelo recebe texto contextualizado e gera uma resposta provável; instruções claras não impõem verdade nem autorização.",
        ex: "Peça uma alteração mínima, forneça trecho e erro, proíba suposições não verificadas e solicite testes que você possa executar.",
        alem: "Delimitadores indicam fronteiras semânticas, mas não bloqueiam prompt injection. Nunca coloque autorização ou segredo sob controle exclusivo do prompt."
      },
      {
        id: "t3-sdd",
        t: "Desenvolvimento orientado por especificação (SDD)",
        x: "intenção e aceite explícitos",
        oq: "Fluxo que registra requisitos, regras e critérios de aceite para orientar e revisar a implementação, com ou sem IA.",
        ps: "Tornar lacunas visíveis e reduzir retrabalho em mudanças com várias regras ou arquivos; o detalhe cresce com o risco.",
        sub: "Substitui decisões implícitas por critérios que a equipe pode discutir e verificar.",
        pq: "A spec orienta a mudança, mas pode estar incompleta ou desatualizada. Confirme regras com o domínio e compare com testes e comportamento real.",
        ex: "Registre regras de transferência, casos de falha e critérios de aceite; peça à IA perguntas sobre lacunas antes de propor código.",
        alem: "Mantenha sincronizados os contratos realmente usados pela equipe; não produza documentos cerimoniais para mudanças triviais."
      },
      {
        id: "t3-pilares",
        t: "IA em refatoração e testes",
        x: "proposta pequena, validação real",
        oq: "Uso de modelo para explicar código, propor uma mudança localizada ou sugerir testes que serão revisados e executados pela equipe.",
        ps: "Acelerar exploração de código desconhecido e ampliar hipóteses de teste sem assumir que a semântica foi preservada.",
        sub: "Apoia a investigação e a produção de rascunhos; não substitui análise semântica nem a suíte existente.",
        pq: "O modelo gera texto baseado no contexto recebido e pode não ver dependências, efeitos laterais ou restrições ausentes.",
        ex: "Peça para explicar um método e listar casos de borda; escreva os testes, aplique uma mudança pequena e compare o diff.",
        alem: "Testes de regressão detectam apenas comportamentos que representam. Complemente com revisão, compilação e testes de integração pertinentes."
      }
    ]
  },
  {
    g: "04",
    n: "Nível 4: Criar Aplicações",
    s: "structured output, tool calling e pgvector",
    c: "var(--cyan)",
    cs: "var(--cyan-s)",
    items: [
      {
        id: "t4-structured",
        t: "Structured output: contratos tipados",
        x: "campos previsíveis, validação continua necessária",
        oq: "Técnica para solicitar uma resposta em estrutura conhecida, como JSON Schema, e mapear os campos para um tipo Java/Python.",
        ps: "Facilitar a integração quando o próximo passo do sistema espera campos definidos e contratos garantidos.",
        sub: "Reduz a dependência de instruções textuais como único controle do formato; não substitui validação de domínio.",
        pq: "O suporte e o mecanismo dependem do modelo/provider. A aplicação converte, valida, trata recusa e lida com campos inválidos.",
        ex: "Mapeie a resposta para um record ou modelo Pydantic, valide campos e rejeite valores fora das regras de negócio.",
        alem: "JSON sintaticamente válido pode ser falso, incoerente ou não autorizado. Valide semântica, origem e permissão antes de persistir."
      },
      {
        id: "t4-toolcalling",
        t: "Tool calling seguro",
        x: "o modelo pede; o backend executa",
        oq: "Capacidade do LLM de solicitar a execução de métodos do backend com argumentos tipados em JSON.",
        ps: "Permitir que uma aplicação consulte ou execute operações definidas pelo backend quando uma resposta textual sozinha não basta.",
        sub: "Evita colocar grandes volumes de dados no prompt quando a aplicação pode buscar só o necessário; o backend mantém a fronteira de acesso.",
        pq: "O modelo devolve uma solicitação estruturada. A aplicação escolhe a ferramenta disponível, valida usuário e argumentos, executa a função e envia o resultado de volta.",
        ex: "Um método @Tool chama um serviço de domínio que consulta apenas pedidos pertencentes ao usuário autenticado.",
        alem: "A chamada não é uma autorização. A aplicação deve tratar parâmetros como entrada externa e aplicar validação, permissão, timeout e limites."
      },
      {
        id: "t4-chunks",
        t: "Tokens, Sentenças & Chunks",
        x: "como dividir o texto para o RAG",
        oq: "Token é a unidade processada; sentença é a unidade de sentido; chunk é o bloco indexado e devolvido pela busca.",
        ps: "Fazer o RAG achar o trecho certo e entregá-lo inteiro, sem estourar limites nem gastar tokens à toa.",
        sub: "Substituiu mandar o documento inteiro no prompt e a busca só por palavra-chave.",
        pq: "Divide em seções e sentenças, agrupa até um limite de tokens com sobreposição (overlap) e gera um embedding por chunk.",
        ex: "Chunking inteligente com 10% a 20% de overlap garante que definições e cláusulas não sejam cortadas no meio.",
        alem: "Meça com 20 a 30 perguntas reais se o trecho certo aparece entre os primeiros resultados antes de mudar o tamanho do chunk."
      },
      {
        id: "t4-rag",
        t: "RAG Híbrido com pgvector e RRF",
        x: "recuperar fontes antes de gerar",
        oq: "Arquitetura que combina busca vetorial densa (pgvector HNSW) e busca esparsa (BM25 full-text) fundidas pelo algoritmo Reciprocal Rank Fusion (RRF).",
        ps: "Superar a cegueira vetorial para códigos exatos, identificadores alfanuméricos e siglas raras com máxima precisão de recuperação.",
        sub: "Substituiu RAGs simplórios de busca puramente vetorial que falhavam em palavras-chave técnicas exatas.",
        pq: "O RRF calcula scores baseados na posição ordinal dos dois rankings; um Cross-Encoder Reranker seleciona os top-5 finais.",
        ex: "RRF(k=60) priorizando documentos presentes simultaneamente no índice vetorial e na busca full-text do PostgreSQL.",
        alem: "Cross-encoders processam query e chunk com atenção conjunta total, triplicando o MRR da etapa de recuperação."
      },
      {
        id: "t4-streaming",
        t: "Streaming SSE e memória de conversa",
        x: "entrega progressiva e persistência",
        oq: "SSE é um formato de eventos do servidor para cliente. Memória conversacional é a estratégia de selecionar e armazenar o histórico relevante entre turnos.",
        ps: "Enviar partes da resposta antes de ela terminar e manter contexto entre requisições quando o produto precisa de conversa contínua.",
        sub: "Streaming evita esperar o corpo inteiro antes de exibir; reduz a percepção de latência pelo usuário.",
        pq: "O backend transmite eventos conforme recebe dados do modelo. Separadamente, carrega e salva o histórico escolhido, controlando tamanho e concorrência.",
        ex: "Em Spring AI ou FastAPI, exponha um fluxo Server-Sent Events e gerencie o histórico de mensagens com TTL no Redis.",
        alem: "Histórico não deve crescer sem limite. Resumo pode perder fatos; defina o que preservar e teste a recuperação de contexto."
      },
      {
        id: "t4-graphrag",
        t: "GraphRAG & Knowledge Graphs",
        x: "síntese global e raciocínio multi-hop",
        oq: "Arquitetura de recuperação que combina grafos de conhecimento e detecção de comunidades (algoritmo Leiden) com LLMs para responder perguntas holísticas sobre grandes coleções.",
        ps: "Responder a consultas globais sobre milhares de documentos que a busca vetorial por cosseno não consegue enxergar por ser pontual.",
        sub: "Substituiu a busca por similaridade míope quando a pergunta exige sintetizar padrões em todo o corpus.",
        pq: "Extrai nós e arestas com LLMs rápidos, clusteriza comunidades hierárquicas, gera resumos locais e consolida via Map-Reduce.",
        ex: "Identificar padrões epidemiológicos em 50.000 prontuários médicos mapeando relações entre doenças e medicamentos.",
        alem: "Abordagens modernas como DRIFT Search unem busca local por entidades com busca global por comunidades hierárquicas."
      }
    ]
  },
  {
    g: "05",
    n: "Nível 5: Agentes",
    s: "loops ReAct, subagentes e protocolo MCP",
    c: "var(--orange)",
    cs: "var(--orange-s)",
    items: [
      {
        id: "t5-react",
        t: "Loop Agêntico ReAct",
        x: "pensamento, ação e observação",
        oq: "Ciclo contínuo onde o LLM formula um pensamento, aciona uma ferramenta e observa o retorno até cumprir a missão.",
        ps: "Resolver problemas complexos que exigem iteração e depuração autônoma de erros.",
        sub: "Substituiu chamadas isoladas mono-passo que falhavam diante do primeiro erro de execução.",
        pq: "Loop while gerenciando pensamento, escolha de ferramentas, execução segura e reflexão contínua de status.",
        ex: "Agente executando mvn test, lendo a linha do erro no stack trace e alterando o código até compilar.",
        alem: "Configure sempre um teto máximo de iterações (Max Steps) para evitar loops infinitos consumindo créditos."
      },
      {
        id: "t5-subagentes",
        t: "Subagentes & Contexto Isolado",
        x: "o padrão orchestrator-workers",
        oq: "Padrão em que um orquestrador divide uma tarefa e delega partes a agentes ou processos auxiliares com janelas limpas.",
        ps: "Evitar a degradação e saturação de contexto em tarefas longas que envolvem ler dezenas de arquivos de código.",
        sub: "Substituiu o modelo falho de Agente Monolítico Único que acumulava centenas de milhares de tokens de ruído.",
        pq: "O orquestrador despacha subagentes especializados que sintetizam resumos pontuais e encerram sua execução.",
        ex: "Subagente lê 40 classes, gera um resumo de 5 linhas e encerra, deixando o contexto do pai limpo.",
        alem: "Microserviços agênticos: mantenha cada subagente focado em um único escopo de especialidade."
      },
      {
        id: "t5-matriz",
        t: "Skill vs Agente vs Subagente",
        x: "a matriz de decisão",
        oq: "A matriz técnica para decidir o nível correto de autonomia, custo e complexidade para cada tarefa de software.",
        ps: "Evitar overengineering: usar a abordagem mais simples e econômica que resolva o problema com eficácia.",
        sub: "Substituiu a prática errônea de criar agentes complexos para tarefas simples de passo único.",
        pq: "Skills são procedimentos estáticos de prompt; Agentes têm loops ReAct; Subagentes têm contexto isolado.",
        ex: "Skill para formatar mensagens de commit; Agente para caçar bugs; Subagente para varrer bases legadas.",
        alem: "Se a tarefa pode ser resolvida com uma Skill bem escrita, nunca desperdice recursos criando um agente com loop."
      },
      {
        id: "t5-mcp",
        t: "Model Context Protocol (MCP) Avançado",
        x: "tools, resources, prompts e gateways",
        oq: "Especificação aberta para integração agêntica através das 3 primitivas fundamentais: Tools (funções dinâmicas), Resources (URIs contextuais) e Prompts (templates de servidor).",
        ps: "Conectar clientes a ferramentas e dados de forma desacoplada, utilizando transportes STDIO e SSE com isolamento corporativo.",
        sub: "Substituiu adaptadores proprietários específicos para cada ferramenta por um contrato aberto padronizado.",
        pq: "MCP Gateways centralizam autenticação OIDC/Keycloak, rate limiting, mascaramento de PII e auditoria de chamadas.",
        ex: "Servidor FastMCP oferecendo ferramentas tipadas com Pydantic rodando em sandbox local via transporte STDIO.",
        alem: "O protocolo define a comunicação; segurança, autorização e validação continuam sendo responsabilidade do backend hospedeiro."
      },
      {
        id: "t5-topologias",
        t: "Topologias Multi-Agente & Checkpointing",
        x: "supervisor, debate e LangGraph",
        oq: "Padrões de orquestração multi-agente (Supervisor, Pipeline, Debate) integrados a grafos de estados com persistência de checkpoints.",
        ps: "Coordenar squads de agentes especializados com tolerância a falhas, human-in-the-loop e checkpoints duráveis em Postgres.",
        sub: "Substituiu scripts procedurais em loops que perdiam todo o estado em qualquer falha de rede ou timeout de API.",
        pq: "StateGraph imutável salvando snapshots a cada transição; permite pausar para aprovação humana e retroceder no tempo.",
        ex: "LangGraph com PostgresSaver gravando estado de cada subagente antes de invocar comandos destrutivos de terminal.",
        alem: "Adicionar mais agentes aumenta custos exponencialmente; priorize um agente com boas ferramentas antes de montar um squad."
      },
      {
        id: "t5-frameworks",
        t: "Frameworks: Agno, LangGraph & Spring AI",
        x: "abstrações e controles diferentes",
        oq: "Bibliotecas que implementam o loop agêntico, memória, conhecimento e coordenação de agentes: LangChain, LangGraph, Agno e Spring AI.",
        ps: "Não reescrever o loop de ferramentas, histórico e estado em todo projeto.",
        sub: "Substituiu o loop escrito à mão contra a API do modelo em cada projeto.",
        pq: "Quando há tool calling, a biblioteca coordena chamada e retorno; fluxo, estado e execução variam.",
        ex: "Spring AI com métodos @Tool na stack Java; LangGraph para fluxo em grafo; Agno para agentes e times em Python servidos pelo AgentOS.",
        alem: "Quem entende o loop troca de framework em dias; quem só conhece a abstração fica preso a ela."
      }
    ]
  },
  {
    g: "06",
    n: "Nível 6: MLOps / Harness",
    s: "test harness, evals, cache semântico e tracing",
    c: "var(--rose)",
    cs: "var(--rose-s)",
    items: [
      {
        id: "t6-harness",
        t: "Harness de avaliação",
        x: "rodar casos repetíveis e observar regressões",
        oq: "Código e infraestrutura que executam uma aplicação de IA em casos controlados e registram resultados para avaliação contínua.",
        ps: "Comparar versões de prompt, modelo ou ferramenta com critérios explícitos e encontrar regressões nos casos cobertos.",
        sub: "Complementa revisões manuais e testes unitários; evita surpresas ao atualizar versões de modelos.",
        pq: "Carrega casos, executa a aplicação, captura respostas e traces e calcula critérios determinísticos ou avaliados.",
        ex: "No CI, confira JSON Schema, chamada de ferramenta e passos máximos; rode avaliações semânticas em ambiente controlado.",
        alem: "Atualize o conjunto com erros reais anonimizados e registre versões do modelo, prompt, ferramentas e dados de avaliação."
      },
      {
        id: "t6-evals",
        t: "Benchmarks e LLM-as-a-Judge",
        x: "rubricas CoT e mitigação de vieses",
        oq: "Avaliação sistemática com juízes de IA utilizando rubricas estritas de Chain-of-Thought (CoT) para mitigar vieses de posição, verbosidade e ego.",
        ps: "Garantir que a nota do juiz reflita critérios factuais objetivos e não a simpatia ou extensão do texto gerado.",
        sub: "Substituiu o 'vibe check' manual e juízes que emitiam notas numéricas arbitrárias sem justificativa prévia.",
        pq: "O juiz é forçado a raciocinar sobre evidências passo a passo antes de emitir o veredito final em JSON tipado.",
        ex: "Rubrica CoT avaliando fidelidade factual (groundedness) e rejeitando respostas com dados ausentes no contexto.",
        alem: "Avaliações em par com inversão da ordem das respostas [A, B] e [B, A] anulam o viés posicional de modelos avaliadores."
      },
      {
        id: "t6-caching",
        t: "Caching Semântico & FinOps",
        x: "redis vetorial e economia",
        oq: "Armazenamento de perguntas e respostas anteriores em cache indexado por similaridade de embeddings de cosseno.",
        ps: "Reduzir chamadas repetidas quando perguntas equivalentes podem compartilhar uma resposta sem violar atualidade ou privacidade.",
        sub: "Substituiu o desperdício financeiro de reenviar perguntas equivalentes à API repetidas vezes.",
        pq: "Embeddings buscam entradas próximas; um limiar calibrado (ex: similaridade >= 0.95) estima se a resposta pode ser reutilizada.",
        ex: "Teste paráfrases positivas e perguntas quase iguais com intenção diferente; meça falsos hits antes de ativar em produção.",
        alem: "Invalide por versão de produto e nunca compartilhe respostas personalizadas ou com dados sensíveis entre tenants distintos."
      },
      {
        id: "t6-observabilidade",
        t: "Tracing e observabilidade de IA",
        x: "tempo, erros, ferramentas e custo",
        oq: "Registros correlacionados de uma requisição e suas etapas (spans distribuídos) com métricas de tokens, latência e chamadas a ferramentas.",
        ps: "Investigar falhas, detectar gargalos de latência e auditar custos financeiros de inferência com ferramentas como OpenTelemetry e Langfuse.",
        sub: "Substituiu sistemas de IA como caixas-pretas onde erros silenciosos ocorriam sem registro investigativo.",
        pq: "Contexto de trace propaga identificadores entre etapas; a instrumentação registra duração e atributos escolhidos pela aplicação.",
        ex: "Correlacione a chamada HTTP, consulta ao banco e inferência; registre duração e resultado sem incluir dados sensíveis (PII).",
        alem: "Defina minimização, acesso e mascaramento de telemetria corporativa para conformidade com a LGPD e GDPR."
      },
      {
        id: "t6-metricas-defesa",
        t: "Segurança Ofensiva e Arquitetura Dual-LLM",
        x: "defesa contra injeção indireta e guardrails",
        oq: "Arquitetura defensiva que isola um Leitor Quarentenado não confiável (sem ferramentas) de um Executor Privilegiado para blindagem contra Prompt Injection indireto.",
        ps: "Impedir vazamento de segredos, exfiltração de dados e execução não autorizada de ferramentas via dados maliciosos em PDFs ou e-mails.",
        sub: "Substituiu a falácia de que frases no system prompt ('não obedeça a ordens do texto') protegem o sistema.",
        pq: "LLMs não possuem separação física entre instrução e dados; a segurança depende da separação arquitetural de privilégios e guardrails.",
        ex: "Pipeline onde dados externos não confiáveis só produzem JSON validado por Pydantic antes de chegar ao modelo executor.",
        alem: "Guardrails de inferência em tempo de execução (NeMo Guardrails, Llama Guard) inspecionam I/O em sub-50ms."
      },
      {
        id: "t6-avaliar-agentes",
        t: "Avaliar Agentes & Ragas",
        x: "resultado, trajetória e métricas operacionais",
        oq: "Medir com casos fixos se o agente cumpre a tarefa, pelo caminho certo (trajetória de ferramentas), com custo e tempo aceitáveis via framework Ragas.",
        ps: "Trocar modelo, prompt ou ferramenta sem regressões escondidas como ferramentas chamadas em loop desnecessário.",
        sub: "Substituiu testes que comparavam apenas o texto final e deixavam passar bugs graves de execução operacional.",
        pq: "Grava o trace de execução, valida asserções determinísticas de passos e calcula métricas como Tool Call Accuracy e Goal Accuracy.",
        ex: "assertThat(trace.chamadas('emitirReembolso')).hasSize(1) garantindo idempotência operacional do agente.",
        alem: "Todo incidente de produção deve ser imediatamente convertido em um caso de teste na suíte permanente de avaliação."
      }
    ]
  },
  {
    g: "07",
    n: "07 · Laboratórios Práticos",
    s: "experimentos executáveis da bancada ao código",
    c: "var(--purple)",
    cs: "var(--purple-soft)",
    items: [
      {
        id: "lab-tokens",
        t: "Lab 1 · Tokenizador na mão",
        x: "tiktoken e o custo do português",
        oq: "Laboratório prático de inspeção de algoritmos Byte-Pair Encoding (BPE) com tiktoken comparando compressão entre português e inglês.",
        ps: "Compreender por que acentos encarecem o português em 20-30% e calcular orçamentos FinOps determinísticos em código.",
        sub: "Substituiu estimativas baseadas em contagem ingênua de caracteres por contagem exata de tokens.",
        pq: "A biblioteca tiktoken em Python executa a divisão de tokens em memória sem requisições de rede.",
        ex: "Script com asserções demonstrando que caracteres acentuados geram múltiplos sub-tokens em vocabulários BPE padrão.",
        alem: "Encoders mais modernos como o200k_base aumentaram a densidade de tokens para idiomas latinos."
      },
      {
        id: "lab-sampling",
        t: "Lab 2 · Sampling e JSON Determinístico",
        x: "temperatura zero e Pydantic",
        oq: "Laboratório de controle de temperatura e validação estrita de Structured Output utilizando schemas Pydantic.",
        ps: "Eliminar erros de sintaxe e garantir que respostas de IA sejam convertidas com segurança em tipos de dados do backend.",
        sub: "Substituiu expressões regulares instáveis por coerção nativa de esquemas tipados.",
        pq: "Temperatura 0.0 concentra probabilidades no token de maior confiança; Pydantic rejeita anomalias com ValidationError.",
        ex: "Scaffold com modelos ReciboFiscal e ItemNota validando campos obrigatórios com asserções explícitas de teste.",
        alem: "Mesmo em temperature=0.0, variações de ponto flutuante em GPUs exigem validação defensiva contínua."
      },
      {
        id: "lab-rag-hib",
        t: "Lab 3 · RAG Híbrido com pgvector e RRF",
        x: "fusão de busca densa e esparsa",
        oq: "Laboratório de implementação do algoritmo Reciprocal Rank Fusion (RRF k=60) unificando rankings vetoriais e BM25.",
        ps: "Garantir que termos de código, identificadores alfanuméricos e siglas raras nunca fiquem de fora do contexto do RAG.",
        sub: "Substituiu somas ingênuas de scores de escalas incompatíveis por fusão baseada em postos ordinais relativos.",
        pq: "Documentos que aparecem bem posicionados em ambas as listas ganham impulso aritmético inevitável no topo.",
        ex: "Função rrf() em 30 linhas com asserção provando que documento híbrido supera candidatos mono-vertente.",
        alem: "Cross-encoders aplicados sobre os top-25 candidatos do RRF refinam a lista final antes do envio ao LLM."
      },
      {
        id: "lab-busca",
        t: "Lab 4 · Busca Vetorial em NumPy",
        x: "álgebra linear e cosseno sem framework",
        oq: "Laboratório de cálculo de similaridade de cosseno em matrizes NumPy usando produto escalar com normas L2.",
        ps: "Entender a matemática fundamental de bancos vetoriais e construir buscas em milissegundos sem dependências pesadas.",
        sub: "Substituiu frameworks orquestradores inflados em projetos pequenos com menos de mil documentos.",
        pq: "Vetores normalizados transformam a distância angular em uma única multiplicação matricial de alta performance.",
        ex: "Função cosine_similarity_matrix() com matriz NumPy ranqueando documentos mais afins à consulta.",
        alem: "Normalizar vetores previamente na ingestão elimina o cálculo de raízes quadradas no caminho crítico de consulta."
      },
      {
        id: "lab-mcp-srv",
        t: "Lab 5 · Servidor MCP Corporativo",
        x: "FastMCP, tools e resources tipados",
        oq: "Laboratório de construção de um servidor Model Context Protocol corporativo funcional utilizando a biblioteca FastMCP.",
        ps: "Expor ferramentas de cálculo tributário e recursos contextuais para clientes agênticos com segurança e contratos claros.",
        sub: "Substituiu scripts ad-hoc vulneráveis a command injection por um protocolo padronizado e tipado.",
        pq: "FastMCP gera schemas JSON automaticamente a partir de modelos Pydantic e roda isolado sob transporte STDIO.",
        ex: "Servidor registrando tool calcular_imposto e resource schema://tabelas-tributarias com testes unitários.",
        alem: "Em transporte STDIO, logs de depuração devem ser direcionados ao stderr para não corromper mensagens JSON-RPC."
      },
      {
        id: "lab-evals",
        t: "Lab 6 · Eval Harness com Rubricas CoT",
        x: "LLM-as-a-Judge em Pytest",
        oq: "Laboratório de criação de uma suíte automatizada de testes de avaliação semântica em Pytest para sistemas RAG.",
        ps: "Bloquear deploys no CI/CD quando o modelo alucinar ou introduzir respostas factualmente inconsistentes com os documentos.",
        sub: "Substituiu testes manuais esporádicos por pipelines determinísticos com critérios mensuráveis de aceite.",
        pq: "O juiz avalia as respostas através de uma rubrica CoT Pydantic estruturada medindo a métrica de Faithfulness.",
        ex: "Teste Pytest reprovando resposta com alucinação médica e aprovando resposta 100% sustentada pelo contexto.",
        alem: "Avaliações de trajetória de agentes monitoram chamadas redundantes de ferramentas e limites de passos."
      }
    ]
  },
  {
    g: "08",
    n: "08 · Projetos em Escada",
    s: "do zero ao deploy, em escada até o carro-chefe",
    c: "var(--teal)",
    cs: "var(--teal-s)",
    items: [
      {
        id: "t7-mercado",
        t: "IA no Mercado Corporativo",
        x: "como o mercado realmente usa hoje",
        oq: "A anatomia de sistemas reais com IA em produção: RAG corporativo híbrido, fronteira de segurança no tool calling, servidor MCP, multiagentes com harness, governança human-in-the-loop e observabilidade com OpenTelemetry.",
        ps: "Superar a 'paralisia de tutoriais' e construir arquiteturas alinhadas com as práticas que empresas maduras contratam.",
        sub: "Substituiu o modelo ingênuo de 'chamar API da OpenAI com texto puro' por microsserviços auditáveis e determinísticos.",
        pq: "IA é componente probabilístico rodando sob políticas determinísticas; produção exige isolamento de tenant, controle de loops e barreiras de confirmação.",
        ex: "RAG híbrido (pgvector + BM25) com re-ranker; Spring AI com @Tool validado no backend; servidor MCP com gateway corporativo.",
        alem: "Antes de colocar um LLM em qualquer lugar, prove que um if, uma regex ou uma query SQL não resolvem com 0ms e R$ 0."
      },
      {
        id: "t7-ciclo",
        t: "Do Zero ao Deploy",
        x: "o ciclo de um projeto",
        oq: "Roteiro que todo projeto da trilha segue: problema, critérios de sucesso, especificação, arquitetura, versão local, avaliação, observabilidade, deploy e operação.",
        ps: "Transformar uma demonstração em sistema: saber se funciona, quanto custa e o que muda a cada versão.",
        sub: "Substituiu o projeto de fim de semana que impressiona na demonstração e para ali.",
        pq: "Cada fase termina com uma entrega no repositório (README, casos de teste, SPEC.md, evals/, link no ar).",
        ex: "docker compose up local; casos de teste em evals/; pipeline que testa, avalia e publica.",
        alem: "Publique uma versão simples cedo: os problemas de produção só aparecem em produção."
      },
      {
        id: "t7-escada",
        t: "Os 4 Projetos em Escada",
        x: "chat, RAG, agente, carro-chefe",
        oq: "Três projetos que treinam as peças (ferramentas, RAG, agente com MCP) e um carro-chefe que junta tudo em produção.",
        ps: "Terminar a trilha com projetos prontos, e não só com conceitos lidos.",
        sub: "Substituiu os exercícios soltos por tópico, que não somam num portfólio consistente.",
        pq: "Cada módulo valida uma capacidade isolada antes da integração completa do carro-chefe.",
        ex: "Projeto 1: FastAPI com tool calling e streaming; Projeto 2: RAG com pgvector; Projeto 3: servidor MCP e agente.",
        alem: "Faça um dos serviços também em Spring AI para mostrar IA no ecossistema corporativo Java."
      },
      {
        id: "t7-ancora",
        t: "Carro-Chefe",
        x: "um problema seu, no ar",
        oq: "Um sistema que resolve um problema seu de verdade, com dados reais, avaliações, observabilidade e deploy.",
        ps: "Ter um projeto que você usa, mostra em entrevista e mantém você estudando.",
        sub: "Substituiu o projeto de tutorial, igual ao de milhares de outros portfólios.",
        pq: "Passa por todas as fases do ciclo; começa local e sobe para a nuvem no fim.",
        ex: "Assistente dos seus estudos com RAG e citação da fonte; revisor de pull request no CI com evals demonstráveis.",
        alem: "README com diagrama e decisões, pasta evals/ com métricas antes e depois, link no ar e vídeo de 2 minutos."
      }
    ]
  },
  {
    g: "09",
    n: "09 · Como Aprender de Verdade",
    s: "o ciclo que fixa, fontes que valem e laboratórios reais",
    c: "var(--purple)",
    cs: "var(--purple-soft)",
    items: [
      {
        id: "t8-ciclo",
        t: "O ciclo de aprendizado",
        x: "sandboxes e evals",
        oq: "O método de fixação em seis passos: documentação e papers → síntese conceitual → experimentação em sandbox → evals automatizadas → nota no vault → revisão ativa.",
        ps: "Garantir que os modelos mentais de LLMs, agentes e RAG saiam da teoria e virem código auditável em produção.",
        sub: "Substituiu o consumo passivo de vídeos de demonstração que criam falsa sensação de domínio.",
        pq: "Para cada conceito: configure um script mínimo de teste, meça com evals e registre a técnica de mitigação.",
        ex: "# ciclo:\n# 1. ler paper / doc da API\n# 2. testar prompt no script com SDK\n# 3. criar eval determinística\n# 4. registrar o padrão no vault",
        alem: "Engenharia de IA exige experimentação empírica: sem rodar código contra a API e medir latência e acurácia, o conhecimento não se consolida."
      },
      {
        id: "t8-canais",
        t: "Canais e cursos em português",
        x: "fontes com rigor técnico",
        oq: "Curadoria de criadores de conteúdo e referências em português e internacional dedicados à engenharia de software aplicada à inteligência artificial.",
        ps: "Construir o modelo mental no idioma nativo com profissionais que abordam o ciclo real de produção corporativa.",
        sub: "Substituiu conteúdos de hype focados em tutoriais rasos de geração de texto sem rigor de engenharia.",
        pq: "Priorize fontes que discutem arquitetura de dados vetoriais, protocolo MCP, avaliação sistemática de modelos e guardrails de segurança.",
        ex: "Canais técnicos focados em arquitetura de IA, agentes e sistemas distribuídos; documentações oficiais: ai.google.dev, platform.openai.com, docs.anthropic.com.",
        alem: "Siga criadores que mostram falhas reais de produção, custos de inferência e testes automatizados em vez de apenas ferramentas prontas."
      },
      {
        id: "t8-pratica",
        t: "Como pesquisar e o que praticar",
        x: "diagnóstico e portfólio",
        oq: "Formulação de buscas precisas usando terminologia de arquitetura de IA e construção de 3 projetos autorais completos para portfólio.",
        ps: "Desenvolver autonomia para depurar pipelines de RAG e agentes, comprovando senioridade com repositórios reais.",
        sub: "Substituiu projetos de chat genérico copiados de tutoriais sem tratamento de tokens ou segurança.",
        pq: "Consulte documentações oficiais de SDKs (Spring AI, LangChain, Google GenAI SDK) e repositórios de benchmarks de avaliação.",
        ex: "Projetos de portfólio: 1. RAG híbrido com pgvector e reranker; 2. Agente MCP corporativo com sandboxing; 3. Pipeline CI/CD com test harness.",
        alem: "O portfólio definitivo de engenharia de IA demonstra pipelines com testes de regressão, métricas de fidelidade e limites claros de custo."
      }
    ]
  }
];

/* ==================== INICIALIZAÇÃO DA TRILHA CENTRAL ==================== */
var trackEl = document.getElementById("track");
var navEl = document.getElementById("nav");
var flat = [];
/* nós novos trazem id próprio; os antigos mantêm o id posicional para não perder o progresso salvo */
var novosComId = 0;

DATA.forEach(function(g, gi){
  var grp = document.createElement("div");
  grp.className = "grp " + (gi % 2 === 0 ? "l" : "r");
  grp.style.setProperty("--gc", g.c);
  grp.style.setProperty("--gs", g.cs);

  var m = document.createElement("div");
  m.className = "milestone";
  m.innerHTML = '<span class="n">' + g.g + '</span><h2>' + g.n + '</h2><small>' + g.s + '</small>';
  grp.appendChild(m);

  var clus = document.createElement("div");
  clus.className = "cluster";

  g.items.forEach(function(it){
    it._g = g.g; it._gc = g.c; it._id = it.id || ("t_" + (flat.length - novosComId)); if (it.id) novosComId++;
    var idx = flat.length;
    flat.push(it);

    var node = document.createElement("div");
    node.className = "node";
    node.dataset.i = idx;
    node.innerHTML = '<b>' + it.t + '</b><span>' + it.x + '</span>';
    node.addEventListener("click", function(){ openDrawer(idx); });
    clus.appendChild(node);
  });

  grp.appendChild(clus);
  trackEl.appendChild(grp);
});

var endDiv = document.createElement("div");
endDiv.className = "trail-end";
endDiv.innerHTML = '<span>Trilha concluída · IA aplicada ao desenvolvimento</span>';
trackEl.appendChild(endDiv);

/* Constrói Navegação Lateral */
document.querySelectorAll("section.part").forEach(function(sec){
  var h2 = sec.querySelector(".ph h2");
  if(!h2) return;
  var sa = document.createElement("a");
  sa.className = "sec";
  sa.href = "#" + sec.id;
  sa.innerHTML = '<b>' + (sec.querySelector(".ph .num") ? sec.querySelector(".ph .num").textContent : "§") + '</b> ' + h2.textContent;
  navEl.appendChild(sa);

  sec.querySelectorAll("article.topic").forEach(function(top){
    var th3 = top.querySelector("h3");
    if(!th3) return;
    var ta = document.createElement("a");
    ta.className = "top";
    ta.href = "#" + top.id;
    ta.dataset.k = top.id;
    ta.textContent = th3.textContent;
    navEl.appendChild(ta);
  });
});

/* ==================== ESTADO E PERSISTÊNCIA ==================== */
var KEYT = "ai_eng_v4_trail";
var KEYM = "ai_eng_v4_marks";
var doneT = JSON.parse(localStorage.getItem(KEYT) || localStorage.getItem("ai_eng_v3_trail") || "{}");
var doneM = JSON.parse(localStorage.getItem(KEYM) || localStorage.getItem("ai_eng_v3_marks") || "{}");

function updateProgress(){
  var tCount = 0, mCount = 0;
  document.querySelectorAll(".node").forEach(function(n){
    var idx = +n.dataset.i;
    var isD = !!doneT[flat[idx]._id];
    n.classList.toggle("done", isD);
    if(isD) tCount++;
  });
  document.querySelectorAll("button.done").forEach(function(b){
    var k = b.dataset.k;
    var isD = !!doneM[k];
    b.classList.toggle("is", isD);
    b.textContent = isD ? "✓ dominado" : "marcar dominado";
    var navA = navEl.querySelector('a.top[data-k="'+k+'"]');
    if(navA) navA.classList.toggle("ok", isD);
    if(isD) mCount++;
  });

  var total = flat.length + document.querySelectorAll("button.done").length;
  var done = tCount + mCount;
  var pct = total ? Math.round(done / total * 100) : 0;

  document.getElementById("rdone").textContent = done + " de " + total;
  document.getElementById("rsub").textContent = tCount + " nós · " + mCount + " tópicos";
  document.getElementById("rpct").textContent = pct + "%";
  document.getElementById("ring").style.setProperty("--deg", (pct * 3.6) + "deg");
}

document.querySelectorAll("button.done").forEach(function(b){
  b.addEventListener("click", function(){
    var k = b.dataset.k;
    doneM[k] = !doneM[k];
    localStorage.setItem(KEYM, JSON.stringify(doneM));
    updateProgress();
  });
});

document.getElementById("reset").addEventListener("click", function(){
  if(!confirm("Zerar todo o progresso de estudo deste guia V4?")) return;
  doneT = {}; doneM = {};
  localStorage.setItem(KEYT, "{}"); localStorage.setItem(KEYM, "{}");
  updateProgress();
});

/* ==================== BUSCA GLOBAL EM TEMPO REAL ==================== */
var searchIn = document.getElementById("q");
searchIn.addEventListener("input", function(){
  var v = searchIn.value.trim().toLowerCase(), hits = 0;
  document.querySelectorAll(".node").forEach(function(node){
    var it = flat[+node.dataset.i];
    var txt = (it.t + " " + it.x + " " + it.oq + " " + it.ps + " " + it.sub + " " + it.pq + " " + it.ex).toLowerCase();
    var ok = v && txt.indexOf(v) > -1;
    node.classList.toggle("hit", !!ok);
    node.classList.toggle("dim", !!v && !ok);
    if(ok) hits++;
  });
  document.querySelectorAll(".grp").forEach(function(g){
    if(!v){ g.classList.remove("hide"); return; }
    g.classList.toggle("hide", !g.querySelector(".node.hit"));
  });
  document.querySelectorAll("article.topic").forEach(function(top){
    var ok = !v || top.textContent.toLowerCase().indexOf(v) > -1;
    top.classList.toggle("hide", !ok);
    var na = navEl.querySelector('a.top[data-k="'+top.id+'"]');
    if(na) na.classList.toggle("hide", !ok);
    if(ok && v) hits++;
  });
  document.querySelectorAll("section.part").forEach(function(sec){
    var has = sec.querySelector("article.topic:not(.hide)");
    sec.style.display = has ? "" : "none";
    var sa = navEl.querySelector('a.sec[href="#'+sec.id+'"]');
    if(sa) sa.classList.toggle("hide", !has);
  });
  document.getElementById("nores").classList.toggle("on", !!v && hits === 0);
});

/* ==================== SCROLL E BARRA SUPERIOR ==================== */
function onScroll(){
  var h = document.body.scrollHeight - window.innerHeight;
  document.getElementById("tp").style.width = (h > 0 ? (window.scrollY / h * 100) : 0) + "%";
  document.getElementById("up").classList.toggle("on", window.scrollY > 600);
}
window.addEventListener("scroll", onScroll, {passive: true});
document.getElementById("up").addEventListener("click", function(){ window.scrollTo({top:0, behavior:"smooth"}); });
document.getElementById("top").addEventListener("click", function(){ window.scrollTo({top:0, behavior:"smooth"}); });

/* ==================== GAVETA LATERAL (DRAWER) ==================== */
var curDrawer = -1;
var panel = document.getElementById("panel");
var scrim = document.getElementById("scrim");
var pMark = document.getElementById("pMark");
var isTestMode = false;

function openDrawer(idx){
  curDrawer = idx;
  var it = flat[idx];
  document.getElementById("pTag").textContent = "NÍVEL " + it._g;
  document.getElementById("pTitle").textContent = it.t;
  document.getElementById("pSub").textContent = it.x;
  document.getElementById("pOq").textContent = it.oq;
  document.getElementById("pPs").textContent = it.ps;
  document.getElementById("pSubst").textContent = it.sub;
  document.getElementById("pPq").textContent = it.pq;
  document.getElementById("pEx").textContent = it.ex;
  document.getElementById("pAl").textContent = it.alem;
  panel.style.setProperty("--pc", it._gc);

  var isD = !!doneT[it._id];
  pMark.classList.toggle("is", isD);
  pMark.textContent = isD ? "✓ dominado" : "marcar dominado";

  if(isTestMode){
    panel.classList.add("test");
    panel.classList.remove("revealed");
    document.getElementById("pGate").hidden = false;
    document.getElementById("gateTitle").textContent = it.t;
  } else {
    panel.classList.remove("test", "revealed");
    document.getElementById("pGate").hidden = true;
  }

  panel.classList.add("on");
  scrim.classList.add("on");
}

function closeDrawer(){
  panel.classList.remove("on");
  scrim.classList.remove("on");
}

document.getElementById("pClose").addEventListener("click", closeDrawer);
scrim.addEventListener("click", closeDrawer);

document.getElementById("pPrev").addEventListener("click", function(){
  if(curDrawer > 0) openDrawer(curDrawer - 1);
});
document.getElementById("pNext").addEventListener("click", function(){
  if(curDrawer < flat.length - 1) openDrawer(curDrawer + 1);
});

pMark.addEventListener("click", function(){
  if(curDrawer < 0) return;
  var it = flat[curDrawer];
  doneT[it._id] = !doneT[it._id];
  localStorage.setItem(KEYT, JSON.stringify(doneT));
  pMark.classList.toggle("is", !!doneT[it._id]);
  pMark.textContent = doneT[it._id] ? "✓ dominado" : "marcar dominado";
  updateProgress();
});

document.getElementById("btnReveal").addEventListener("click", function(){
  panel.classList.add("revealed");
  document.getElementById("pGate").hidden = true;
});

/* Modo Estudo vs Teste */
var modeBtn = document.getElementById("mode");
modeBtn.addEventListener("click", function(){
  isTestMode = !isTestMode;
  modeBtn.classList.toggle("on", isTestMode);
  modeBtn.textContent = isTestMode ? "🎯 auto-teste" : "📖 estudo";
  if(curDrawer >= 0) openDrawer(curDrawer);
});

/* Teclas de Atalho */
window.addEventListener("keydown", function(e){
  if(e.key === "Escape") closeDrawer();
  if(panel.classList.contains("on")){
    if(e.key === "ArrowLeft" && curDrawer > 0) openDrawer(curDrawer - 1);
    if(e.key === "ArrowRight" && curDrawer < flat.length - 1) openDrawer(curDrawer + 1);
  }
});

/* ==================== SIMULADOR DE TOOL CALLING (LAB) ==================== */
var hud = document.getElementById("agentHud");
var anNodes = [
  document.getElementById("an1"),
  document.getElementById("an2"),
  document.getElementById("an3"),
  document.getElementById("an4"),
  document.getElementById("an5")
];

function logHud(msg, cls){
  var l = document.createElement("div");
  l.className = "ah-l " + (cls || "");
  l.textContent = msg;
  hud.appendChild(l);
  hud.scrollTop = hud.scrollHeight;
}

function resetLabNodes(){
  anNodes.forEach(function(n){ n.className = "agent-node"; });
}

document.getElementById("btnResetLab").addEventListener("click", function(){
  resetLabNodes();
  hud.innerHTML = '<div class="ah-l ah-info">// Terminal reiniciado. Escolha um cenário acima.</div>';
});

document.getElementById("btnRunOk").addEventListener("click", function(){
  resetLabNodes();
  hud.innerHTML = '';
  logHud("[01 · INPUT USUÁRIO]: 'Qual é o saldo da minha conta corrente 402?'", "ah-info");
  anNodes[0].className = "agent-node active";

  setTimeout(function(){
    anNodes[0].className = "agent-node ok";
    anNodes[1].className = "agent-node active";
    logHud("[02 · RACIOCÍNIO LLM]: 'Necessito invocar a tool consultarSaldo(contaId=402)'", "ah-info");
  }, 600);

  setTimeout(function(){
    anNodes[1].className = "agent-node ok";
    anNodes[2].className = "agent-node active";
    logHud("[03 · TOOL CALL EMITIDO]: {\"tool\": \"consultarSaldo\", \"args\": {\"contaId\": 402}}", "ah-ok");
  }, 1300);

  setTimeout(function(){
    anNodes[2].className = "agent-node ok";
    anNodes[3].className = "agent-node active";
    logHud("[04 · BACKEND SPRING AI]: Executando SELECT saldo FROM contas WHERE id = 402;", "ah-info");
    logHud("[04 · BACKEND RETORNO]: Saldo recuperado: R$ 4.850,20. Retornando ao LLM...", "ah-ok");
  }, 2100);

  setTimeout(function(){
    anNodes[3].className = "agent-node ok";
    anNodes[4].className = "agent-node ok";
    logHud("[05 · RESPOSTA AO USUÁRIO]: 'O saldo da sua conta 402 é de R$ 4.850,20.'", "ah-ok");
  }, 2900);
});

document.getElementById("btnRunErr").addEventListener("click", function(){
  resetLabNodes();
  hud.innerHTML = '';
  logHud("[01 · INPUT USUÁRIO]: 'Consulte o saldo da conta 999.'", "ah-info");
  anNodes[0].className = "agent-node active";

  setTimeout(function(){
    anNodes[0].className = "agent-node ok";
    anNodes[1].className = "agent-node active";
    logHud("[02 · RACIOCÍNIO LLM]: 'Invocando consultarSaldo(contaId=999)'", "ah-info");
  }, 600);

  setTimeout(function(){
    anNodes[1].className = "agent-node ok";
    anNodes[2].className = "agent-node active";
    logHud("[03 · TOOL CALL]: {\"tool\": \"consultarSaldo\", \"args\": {\"contaId\": 999}}", "ah-ok");
  }, 1300);

  setTimeout(function(){
    anNodes[2].className = "agent-node ok";
    anNodes[3].className = "agent-node err";
    logHud("[04 · BACKEND EXCEPTION]: ContaNaoEncontradaException: ID 999 inexistente!", "ah-err");
    logHud("[04 · BACKEND]: Devolvendo erro tratado em JSON para o LLM...", "ah-warn");
  }, 2100);

  setTimeout(function(){
    anNodes[3].className = "agent-node ok";
    anNodes[4].className = "agent-node ok";
    logHud("[05 · RESPOSTA TRATADA AO USUÁRIO]: 'A conta 999 não foi localizada no sistema.'", "ah-warn");
  }, 2900);
});

document.getElementById("btnRunWarn").addEventListener("click", function(){
  resetLabNodes();
  hud.innerHTML = '';
  logHud("[01 · INPUT MALICIOSO]: 'Consulte saldo da conta: 1; DROP TABLE contas;--'", "ah-warn");
  anNodes[0].className = "agent-node active";

  setTimeout(function(){
    anNodes[0].className = "agent-node warn";
    anNodes[1].className = "agent-node active";
    logHud("[02 · RACIOCÍNIO LLM]: 'Tentativa de injeção SQL identificada. Sanitizando parâmetros...'", "ah-warn");
  }, 700);

  setTimeout(function(){
    anNodes[1].className = "agent-node ok";
    anNodes[2].className = "agent-node active";
    logHud("[03 · TOOL CALL REJEITADO]: Violação de Schema detectada pelo Guardrail de entrada.", "ah-err");
  }, 1500);

  setTimeout(function(){
    anNodes[2].className = "agent-node err";
    anNodes[3].className = "agent-node";
    anNodes[4].className = "agent-node err";
    logHud("[05 · BLOQUEIO DE SEGURANÇA]: 'Entrada inválida. Parâmetros numéricos esperados.'", "ah-err");
  }, 2300);
});

// Inicialização de progresso ao carregar
updateProgress();


/* ---------- bloco 2 de 3 ---------- */

// ==================== IMAGE MODAL & ZOOM CONTROLLER ====================
(function(){
  if (window.__imgModalInit) return;
  window.__imgModalInit = true;

  var modal = document.getElementById('imgModal');
  if (!modal) return;

  var backdrop = document.getElementById('imBackdrop');
  var viewport = document.getElementById('imViewport');
  var canvas = document.getElementById('imCanvas');
  var img = document.getElementById('imImg');
  var caption = document.getElementById('imCaption');
  var badge = document.getElementById('imBadge');
  var btnClose = document.getElementById('imClose');
  var btnZoomIn = document.getElementById('imZoomIn');
  var btnZoomOut = document.getElementById('imZoomOut');
  var btnReset = document.getElementById('imZoomReset');

  var scale = 1;
  var panX = 0;
  var panY = 0;
  var isDragging = false;
  var dragStartX = 0;
  var dragStartY = 0;
  var initialPanX = 0;
  var initialPanY = 0;
  var hasMoved = false;

  function updateTransform() {
    canvas.style.transform = 'translate(' + panX + 'px, ' + panY + 'px) scale(' + scale + ')';
    if (btnReset) btnReset.textContent = Math.round(scale * 100) + '%';
  }

  function resetZoom() {
    scale = 1;
    panX = 0;
    panY = 0;
    updateTransform();
  }

  function openModal(src, titleText, badgeText) {
    if (!src) return;
    img.src = src;
    if (caption) caption.textContent = titleText || 'Visualização Ampliada';
    if (badge && badgeText) badge.textContent = badgeText;
    resetZoom();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(function(){
      if (!modal.classList.contains('open')) {
        img.src = '';
      }
    }, 250);
  }

  // Intercept click on any .topic-img, .visual-diagram, or zoomable image
  document.addEventListener('click', function(e) {
    var trigger = e.target.closest('.topic-img a, .topic-img img, figure.visual-diagram img, [data-zoomable]');
    if (!trigger) return;

    e.preventDefault();
    e.stopPropagation();

    var targetImg = trigger.tagName.toLowerCase() === 'img' ? trigger : trigger.querySelector('img');
    var fig = trigger.closest('figure');
    var cap = fig ? (fig.querySelector('figcaption em') || fig.querySelector('figcaption')) : null;
    var bd = fig ? fig.querySelector('figcaption span') : null;

    var src = '';
    if (targetImg) {
      src = targetImg.getAttribute('src') || targetImg.src;
    } else if (trigger.tagName.toLowerCase() === 'a') {
      src = trigger.getAttribute('href');
    }

    if (src) {
      var capText = cap ? cap.textContent.trim() : (targetImg ? targetImg.alt : '');
      var bdText = bd ? bd.textContent.trim() : 'MAPA MENTAL';
      openModal(src, capText, bdText);
    }
  }, true);

  if (btnClose) {
    btnClose.addEventListener('click', function(e){
      e.stopPropagation();
      closeModal();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', function(e){
      closeModal();
    });
  }

  // Close on Escape or shortcut keys
  document.addEventListener('keydown', function(e){
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === '+' || e.key === '=') {
      scale = Math.min(6, scale * 1.25);
      updateTransform();
    } else if (e.key === '-') {
      scale = Math.max(0.3, scale / 1.25);
      updateTransform();
    } else if (e.key === '0') {
      resetZoom();
    }
  });

  if (btnZoomIn) {
    btnZoomIn.addEventListener('click', function(e){
      e.stopPropagation();
      scale = Math.min(6, scale * 1.25);
      updateTransform();
    });
  }

  if (btnZoomOut) {
    btnZoomOut.addEventListener('click', function(e){
      e.stopPropagation();
      scale = Math.max(0.3, scale / 1.25);
      updateTransform();
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', function(e){
      e.stopPropagation();
      resetZoom();
    });
  }

  // Double click toggles zoom (100% -> 200% -> 100%)
  if (canvas) {
    canvas.addEventListener('dblclick', function(e){
      e.stopPropagation();
      if (scale <= 1.15) {
        scale = 2;
      } else {
        scale = 1;
        panX = 0;
        panY = 0;
      }
      updateTransform();
    });
  }

  // Mouse wheel zoom
  if (viewport) {
    viewport.addEventListener('wheel', function(e){
      if (!modal.classList.contains('open')) return;
      e.preventDefault();
      var zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
      var newScale = scale * zoomFactor;
      if (newScale >= 0.3 && newScale <= 6) {
        scale = newScale;
        updateTransform();
      }
    }, { passive: false });

    // Drag / Pan & Click Outside
    viewport.addEventListener('mousedown', function(e){
      if (e.button !== 0) return;
      if (e.target.closest('.im-btn') || e.target.closest('.im-header') || e.target.closest('.im-footer')) return;

      isDragging = true;
      hasMoved = false;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      initialPanX = panX;
      initialPanY = panY;
      viewport.classList.add('is-dragging');
    });

    window.addEventListener('mousemove', function(e){
      if (!isDragging) return;
      var dx = e.clientX - dragStartX;
      var dy = e.clientY - dragStartY;
      if (Math.hypot(dx, dy) > 5) {
        hasMoved = true;
      }
      panX = initialPanX + dx;
      panY = initialPanY + dy;
      updateTransform();
    });

    window.addEventListener('mouseup', function(e){
      if (isDragging) {
        isDragging = false;
        viewport.classList.remove('is-dragging');
        // If user clicked outside the image without dragging
        if (!hasMoved && (e.target === viewport || e.target === backdrop || e.target === modal)) {
          closeModal();
        }
      }
    });

    // Touch support (mobile pinch / drag)
    var touchStartDist = 0;
    var initialTouchScale = 1;
    viewport.addEventListener('touchstart', function(e){
      if (e.touches.length === 1) {
        isDragging = true;
        hasMoved = false;
        dragStartX = e.touches[0].clientX;
        dragStartY = e.touches[0].clientY;
        initialPanX = panX;
        initialPanY = panY;
      } else if (e.touches.length === 2) {
        isDragging = false;
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        initialTouchScale = scale;
      }
    }, { passive: true });

    viewport.addEventListener('touchmove', function(e){
      if (e.touches.length === 1 && isDragging) {
        var dx = e.touches[0].clientX - dragStartX;
        var dy = e.touches[0].clientY - dragStartY;
        if (Math.hypot(dx, dy) > 5) hasMoved = true;
        panX = initialPanX + dx;
        panY = initialPanY + dy;
        updateTransform();
      } else if (e.touches.length === 2 && touchStartDist > 0) {
        var currentDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        var factor = currentDist / touchStartDist;
        var newScale = initialTouchScale * factor;
        if (newScale >= 0.4 && newScale <= 6) {
          scale = newScale;
          updateTransform();
        }
      }
    }, { passive: true });

    viewport.addEventListener('touchend', function(e){
      if (isDragging) {
        isDragging = false;
        if (!hasMoved && (e.target === viewport || e.target === backdrop)) {
          closeModal();
        }
      }
      if (e.touches.length < 2) {
        touchStartDist = 0;
      }
    });
  }
})();


/* ---------- bloco 3 de 3 ---------- */

/* Abre os "Para ir além" na impressão e devolve o estado depois. */
(function(){
  var abertos=null;
  function antes(){var ds=document.querySelectorAll("details.alem");abertos=[];for(var i=0;i<ds.length;i++){abertos.push(ds[i].open);ds[i].open=true;}}
  function depois(){if(!abertos)return;var ds=document.querySelectorAll("details.alem");for(var i=0;i<ds.length;i++)ds[i].open=abertos[i];abertos=null;}
  window.addEventListener("beforeprint",antes);
  window.addEventListener("afterprint",depois);
})();
