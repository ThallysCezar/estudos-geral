/* ==================== BANCO DE DADOS DE MICROLEARNING EXPANDIDO ====================
 * Acervo técnico de alta profundidade com 4 alternativas por questão.
 * Exclui Oratória e Inglês (foco 100% no core de Engenharia e Arquitetura de Software).
 */

window.MICROLEARNING_TOPICS = [
  "Java Internals",
  "Spring Boot 3",
  "Arquitetura de Software",
  "Docker & Kubernetes",
  "Nuvem Multicloud",
  "Mensageria & Filas",
  "System Design",
  "Inteligência Artificial & LLMs",
  "Linux & Operações",
  "Git Profissional",
  "Conceitos de Backend"
];

window.MICROLEARNING_QUESTIONS = [
  {
    id: "ml-java-01",
    trilha: "Java Internals",
    cor: "var(--cyan)",
    icon: "☕",
    topicoNome: "Volatile e o Java Memory Model (JMM)",
    url: "java.html#b1",
    pergunta: "Dois threads executam `contador++` simultaneamente 10.000 vezes em uma variável declarada como `public volatile int contador = 0`. Qual será o comportamento do valor final?",
    code: "public volatile int contador = 0;\n// 2 threads executando 10.000x:\ncontador++;",
    opcoes: [
      { letter: "A", text: "O valor final será exatamente 20.000, pois 'volatile' garante operações atômicas em nível de hardware.", correct: false },
      { letter: "B", text: "Dificilmente chegará a 20.000, pois 'volatile' garante apenas visibilidade entre caches, mas 'contador++' é uma operação composta (leitura, soma, escrita) não atômica.", correct: true },
      { letter: "C", text: "A JVM lançará uma ConcurrentModificationException em tempo de execução.", correct: false },
      { letter: "D", text: "O valor final será 0, pois variáveis volatile não persistem dados entre threads diferentes.", correct: false }
    ],
    explicacao: "A palavra-chave 'volatile' no Java garante apenas visibilidade em cache de CPU (estabelece relação happens-before), mas NÃO garante atomicidade. O incremento 'contador++' gera 3 instruções de bytecode (getfield, iconst_1, iadd, putfield). Para atomicidade, utilize AtomicInteger ou locks.",
    recomendacao: "Revise a seção sobre Java Memory Model, barreiras de memória e AtomicInteger no Java."
  },
  {
    id: "ml-java-02",
    trilha: "Java Internals",
    cor: "var(--cyan)",
    icon: "☕",
    topicoNome: "Virtual Threads e o Problema de Pinning no Java 21",
    url: "java.html#e1",
    pergunta: "Uma aplicação migrada para Virtual Threads (Project Loom) no Java 21 sofre degradação severa de throughput quando threads virtuais realizam I/O bloqueante dentro de blocos `synchronized`. Por que isso ocorre?",
    code: "synchronized (lock) {\n    // Chamada de rede I/O bloqueante (ex: HTTP ou JDBC legado)\n    var resp = httpClient.send(req, handler);\n}",
    opcoes: [
      { letter: "A", text: "Virtual Threads não suportam chamadas de rede HTTP nativas.", correct: false },
      { letter: "B", text: "Ocorre o fenômeno de 'Pinning': a Virtual Thread fica travada (pinned) à Carrier Thread do SO porque blocos synchronized prendem a stack nativa no Java 21, neutralizando o multiplexador do Loom.", correct: true },
      { letter: "C", text: "O garbage collector G1 pausa todas as threads virtuais para checar deadlocks.", correct: false },
      { letter: "D", text: "A anotação @Transactional do Spring Boot rejeita threads que não sejam da plataforma nativa.", correct: false }
    ],
    explicacao: "No Java 21, blocos 'synchronized' causam 'Pinning': a thread virtual não pode ser desmontada (unmounted) de sua Carrier Thread nativa durante uma espera de I/O. A solução é substituir 'synchronized' por 'ReentrantLock' em seções com I/O bloqueante.",
    recomendacao: "Revise a arquitetura de Virtual Threads, Carrier Threads e migração de synchronized para ReentrantLock."
  },
  {
    id: "ml-spring-01",
    trilha: "Spring Boot 3",
    cor: "var(--purple)",
    icon: "🍃",
    topicoNome: "Self-Invocation e Proxies Dinâmicos no Spring",
    url: "trilhas/spring.html#b1",
    pergunta: "Em um `@Service`, um método público não-transacional `criarPedido()` chama internamente `this.salvarComTransacao()`, anotado com `@Transactional`. O que acontece com a transação no banco?",
    code: "@Service\npublic class PedidoService {\n    public void criarPedido() {\n        this.salvarComTransacao(); // anotado com @Transactional\n    }\n    @Transactional\n    public void salvarComTransacao() { ... }\n}",
    opcoes: [
      { letter: "A", text: "A transação abre normalmente porque o Spring intercepta chamadas à nível de bytecode na compilação.", correct: false },
      { letter: "B", text: "A transação NÃO abre no banco de dados, pois a chamada via 'this' pula o Proxy CGLIB/JDK do Spring, invocando diretamente a instância real sem interceptação.", correct: true },
      { letter: "C", text: "O Spring lança BeanCreationException por dependência circular interna.", correct: false },
      { letter: "D", text: "O método falha em tempo de compilação, pois @Transactional só pode ser usado em classes abstratas.", correct: false }
    ],
    explicacao: "O Spring AOP funciona por meio de Proxies dinâmicos ao redor dos Beans. Quando uma chamada é feita internamente usando a referência 'this', a execução ocorre diretamente na instância de destino, ignorando o proxy interceptor de transação.",
    recomendacao: "Revise o ciclo de vida do Bean, proxies CGLIB e a regra de ouro das auto-chamadas no Spring."
  },
  {
    id: "ml-spring-02",
    trilha: "Spring Boot 3",
    cor: "var(--purple)",
    icon: "🍃",
    topicoNome: "Ciclo de Vida: Injeção de Dependências em Construtores",
    url: "trilhas/spring.html#a2",
    pergunta: "Por que a equipe de arquitetura do Spring recomenda enfaticamente injeção de dependência por construtor em vez de anotações `@Autowired` diretas em campos privados (Field Injection)?",
    code: "// Recomendado:\n@Service\npublic class UserService {\n    private final UserRepository repo;\n    public UserService(UserRepository repo) { this.repo = repo; }\n}",
    opcoes: [
      { letter: "A", text: "Porque injeção por construtor permite campos 'final' imutáveis, facilita testes unitários puros sem carregar o contexto Spring (SpringRunner) e impede NullPointerExceptions por dependências ausentes.", correct: true },
      { letter: "B", text: "Porque @Autowired consome 10x mais memória heap da JVM em comparação a construtores.", correct: false },
      { letter: "C", text: "Porque Field Injection foi depreciado e desabilitado por padrão no Java 17.", correct: false },
      { letter: "D", text: "Porque construtores executam consultas SQL assíncronas antes da inicialização do Tomcat.", correct: false }
    ],
    explicacao: "Injeção por construtor garante imutabilidade (campos 'final'), falha na compilação/inicialização caso falte uma dependência obrigatória e permite instanciar a classe em testes unitários com 'new UserService(mockRepo)' sem precisar de reflexão do framework.",
    recomendacao: "Revise o ciclo de vida dos beans, o container IoC e boas práticas de injeção no Spring Boot."
  },
  {
    id: "ml-arq-01",
    trilha: "Arquitetura de Software",
    cor: "var(--gold)",
    icon: "📐",
    topicoNome: "Dual-Write e Inconsistência em Microsserviços",
    url: "trilhas/arquitetura.html#c3",
    pergunta: "Um microsserviço de compras executa `pedidoRepository.save(pedido)` e, na linha imediatamente seguinte, `rabbitTemplate.convertAndSend(evento)`. Qual o risco arquitetural grave dessa abordagem sem transação distribuída?",
    code: "pedidoRepository.save(pedido); // Grava no PostgreSQL\nrabbitTemplate.convertAndSend(\"pedidos.ex\", evento); // Envia para o RabbitMQ",
    opcoes: [
      { letter: "A", text: "Nenhum risco, pois bancos relacionais e brokers AMQP se sincronizam automaticamente via TCP.", correct: false },
      { letter: "B", text: "Problema do Dual-Write: se a rede ou o broker falharem logo após o save, o pedido existirá no banco mas o evento nunca será publicado, corrompendo a consistência do sistema.", correct: true },
      { letter: "C", text: "O RabbitMQ bloqueará o banco de dados com lock pessimista até a mensagem ser confirmada.", correct: false },
      { letter: "D", text: "A mensagem será duplicada exatamente 10 vezes em todas as filas existentes.", correct: false }
    ],
    explicacao: "Dual-Write sem coordenação atômica é a falha nº 1 em microsserviços. Não há transação atômica entre sistemas heterogêneos (banco SQL e broker). A solução canônica é o Transactional Outbox Pattern: gravar evento e entidade na mesma transação SQL local e despachar assincronamente com CDC (Debezium) ou polling.",
    recomendacao: "Revise o padrão Transactional Outbox, Change Data Capture (CDC) e consistência eventual."
  },
  {
    id: "ml-arq-02",
    trilha: "Arquitetura de Software",
    cor: "var(--gold)",
    icon: "📐",
    topicoNome: "Padrão Saga: Orquestração vs Coreografia",
    url: "trilhas/arquitetura.html#d2",
    pergunta: "Em transações distribuídas de longa duração que envolvem múltiplos microsserviços (ex: Pedido -> Pagamento -> Estoque -> Envio), quando a Saga Orquestrada supera a Saga Coreografada?",
    opcoes: [
      { letter: "A", text: "Quando há poucos serviços (2 ou 3) e deseja-se evitar qualquer ponto de acoplamento.", correct: false },
      { letter: "B", text: "Quando o fluxo de negócio possui muitos passos complexos, regras de compensação ramificadas e exige visibilidade centralizada do estado da transação.", correct: true },
      { letter: "C", text: "Quando o banco de dados não suporta índices primários do tipo B-Tree.", correct: false },
      { letter: "D", text: "Quando o tráfego exige comunicação exclusivamente síncrona via HTTP/1.0.", correct: false }
    ],
    explicacao: "A Saga Orquestrada utiliza um serviço central (Orchestrator) que comanda cada passo e aciona compensações em caso de falha. É superior em fluxos complexos porque evita o 'emaranhado de eventos' (event spaghetti) comum na coreografia, onde é difícil rastrear o estado global do processo.",
    recomendacao: "Revise o Padrão Saga, transações compensatórias e os trade-offs entre orquestração e coreografia."
  },
  {
    id: "ml-dock-01",
    trilha: "Docker & Kubernetes",
    cor: "var(--lime)",
    icon: "🐳",
    topicoNome: "O Problema do PID 1 e Sinais no Dockerfile",
    url: "trilhas/docker-kubernetes.html#a2",
    pergunta: "No Dockerfile de um microsserviço, foi utilizada a instrução `CMD java -jar app.jar`. Ao rodar `docker stop`, o container congela por exatamente 10 segundos antes de ser finalizado forçadamente. Por que isso acontece?",
    code: "# Dockerfile com formato shell:\nCMD java -jar app.jar",
    opcoes: [
      { letter: "A", text: "O Java 21 não suporta ser executado dentro de containers Linux.", correct: false },
      { letter: "B", text: "A sintaxe 'Shell Form' executa '/bin/sh -c' como PID 1. O shell não repassa o sinal SIGTERM para o processo filho Java; o Docker atinge o timeout de 10s e emite SIGKILL forçado.", correct: true },
      { letter: "C", text: "O container estava compilando o código fonte durante a execução do comando stop.", correct: false },
      { letter: "D", text: "O kernel do Linux proíbe a parada de pods que estejam com conexões TCP abertas.", correct: false }
    ],
    explicacao: "Instruções CMD/ENTRYPOINT no formato 'Shell Form' iniciam um subshell como PID 1, que engole sinais POSIX como SIGTERM. Use sempre o formato executável JSON (Exec Form): CMD [\"java\", \"-jar\", \"app.jar\"] para que o Java seja o PID 1 e capture o graceful shutdown.",
    recomendacao: "Revise a anatomia do PID 1 em containers, sinais POSIX e a diferença entre Shell Form e Exec Form."
  },
  {
    id: "ml-dock-02",
    trilha: "Docker & Kubernetes",
    cor: "var(--lime)",
    icon: "🐳",
    topicoNome: "Probes no Kubernetes: Liveness vs Readiness",
    url: "trilhas/docker-kubernetes.html#b3",
    pergunta: "Uma aplicação de checkout passa por um pico de tráfego e seu banco de dados fica temporariamente lento por 30 segundos. A Liveness Probe da aplicação foi configurada para checar a conexão com o banco de dados. O que o Kubernetes fará?",
    opcoes: [
      { letter: "A", text: "Apenas retirará o Pod do tráfego do Service até o banco se recuperar.", correct: false },
      { letter: "B", text: "Reiniciará (kill e recriação) o Pod repetidamente, piorando a sobrecarga do banco de dados na inicialização e gerando indisponibilidade total em cascata.", correct: true },
      { letter: "C", text: "Fará scale-up automático de vCPU da máquina física do cluster.", correct: false },
      { letter: "D", text: "Redirecionará as requisições para a porta SSH dos nós de controle.", correct: false }
    ],
    explicacao: "Anti-pattern gravíssimo: Liveness Probe NUNCA deve checar dependências externas (banco, fila, APIs downstream). A Liveness checa apenas se o processo local está vivo. Se o banco falhar e a liveness falhar, o K8s mata os pods saudáveis, causando efeito avalanche (cascading failure). Use a Readiness Probe para desviar tráfego.",
    recomendacao: "Revise o propósito de Liveness, Readiness e Startup Probes no Kubernetes e como evitar reinicializações destrutivas."
  },
  {
    id: "ml-cloud-01",
    trilha: "Nuvem Multicloud",
    cor: "var(--orange)",
    icon: "☁️",
    topicoNome: "Auto-Scaling e o Esgotamento de Conexões no Banco",
    url: "trilhas/nuvem.html#b2",
    pergunta: "Sua aplicação no Kubernetes possui HPA configurado para escalar de 4 para 40 Pods durante a Black Friday. Cada Pod tem um pool HikariCP com 25 conexões. O banco PostgreSQL suporta `max_connections = 300`. O que acontecerá no pico?",
    opcoes: [
      { letter: "A", text: "O Kubernetes aumentará automaticamente o limite de conexões do PostgreSQL.", correct: false },
      { letter: "B", text: "O banco colapsará: 40 pods * 25 conexões = 1.000 conexões tentando abrir. O Postgres estourará o limite de 300, rejeitando conexões e gerando Connection Starvation em massa.", correct: true },
      { letter: "C", text: "O HikariCP passará a gravar os dados no disco local do container sem abrir conexão.", correct: false },
      { letter: "D", text: "As requisições serão convertidas automaticamente em streams gRPC.", correct: false }
    ],
    explicacao: "Dimensionar pools de conexões sem considerar o teto de scale-out do HPA é uma armadilha clássica. A solução é adotar um Connection Pooler externo em modo de transação (como PgBouncer ou AWS RDS Proxy) ou calcular: (conexões por pod * réplicas máximas) < max_connections.",
    recomendacao: "Revise dimensionamento de connection pools em nuvem, PgBouncer e limites físicos de bancos relacionais."
  },
  {
    id: "ml-cloud-02",
    trilha: "Nuvem Multicloud",
    cor: "var(--orange)",
    icon: "☁️",
    topicoNome: "Subnets Públicas vs Privadas e NAT Gateway",
    url: "trilhas/nuvem.html#a2",
    pergunta: "Em uma VPC na AWS, você precisa que os nós do Kubernetes e bancos de dados acessem a internet para baixar atualizações de pacotes, mas eles NUNCA devem ter IPs públicos nem aceitar conexões diretas vindas da internet. Como estruturar a rede?",
    opcoes: [
      { letter: "A", text: "Colocar os recursos em uma Subnet Pública e criar regras de firewall no Windows Defender.", correct: false },
      { letter: "B", text: "Alocar os recursos em uma Subnet Privada sem IP público, roteando o tráfego de saída (0.0.0.0/0) através de um NAT Gateway hospedado em uma Subnet Pública com Internet Gateway.", correct: true },
      { letter: "C", text: "Conectar todos os Pods diretamente à porta USB do roteador da empresa.", correct: false },
      { letter: "D", text: "Desabilitar o protocolo IP e utilizar apenas conexões Bluetooth criptografadas.", correct: false }
    ],
    explicacao: "O padrão arquitetural de segurança em nuvem isola a camada de computação e dados em Subnets Privadas (apenas IPs privados RFC 1918). O acesso de saída (egress-only) para a internet é intermediado por um NAT Gateway em Subnet Pública, impedindo tráfego de entrada não autorizado.",
    recomendacao: "Revise VPC, CIDR blocks, Subnets Públicas vs Privadas, Route Tables e NAT Gateways."
  },
  {
    id: "ml-msg-01",
    trilha: "Mensageria & Filas",
    cor: "var(--pink)",
    icon: "📬",
    topicoNome: "Poison Pill e o Loop Mortal de Requeue",
    url: "trilhas/mensageria.html#b2",
    pergunta: "Uma mensagem com JSON corrompido é publicada em uma fila RabbitMQ. O consumidor Spring AMQP lança uma exceção de serialização e, por padrão, executa `basicNack(requeue = true)`. Qual o impacto imediato no cluster?",
    opcoes: [
      { letter: "A", text: "O broker corrige o JSON automaticamente e processa a mensagem.", correct: false },
      { letter: "B", text: "A mensagem volta imediatamente para o topo da fila, gerando consumo de 100% de CPU, logs massivos e travamento do consumo das demais mensagens saudáveis.", correct: true },
      { letter: "C", text: "O RabbitMQ desliga o servidor para evitar danos elétricos.", correct: false },
      { letter: "D", text: "A mensagem é convertida em um e-mail para o administrador do sistema.", correct: false }
    ],
    explicacao: "Uma Poison Pill reenfileirada com requeue=true entra em loop infinito de rejeição e consumo instantâneo. A correção exige configurar limite de tentativas com retry/backoff e direcionamento definitivo para uma Dead Letter Queue (DLQ).",
    recomendacao: "Revise Dead Letter Exchange (DLX), políticas de retry com backoff exponencial e tratamento de Poison Pills."
  },
  {
    id: "ml-msg-02",
    trilha: "Mensageria & Filas",
    cor: "var(--pink)",
    icon: "📬",
    topicoNome: "RabbitMQ vs Kafka: Modelo de Consumo",
    url: "trilhas/mensageria.html#a1",
    pergunta: "Qual a diferença arquitetural fundamental entre o modelo de consumo de mensagens do RabbitMQ (Smart Broker, Dumb Consumer) e do Apache Kafka (Dumb Broker, Smart Consumer)?",
    opcoes: [
      { letter: "A", text: "O RabbitMQ remove mensagens da fila após o ACK do consumidor; o Kafka é um log append-only imutável particionado onde as mensagens persistem e os consumidores gerenciam seus próprios offsets.", correct: true },
      { letter: "B", text: "O RabbitMQ só suporta mensagens de texto simples de até 100 caracteres; o Kafka armazena vídeos em 4K.", correct: false },
      { letter: "C", text: "O Kafka apaga os dados a cada 60 segundos por restrição de licença comercial.", correct: false },
      { letter: "D", text: "O RabbitMQ roda exclusivamente na memória de navegadores web.", correct: false }
    ],
    explicacao: "No RabbitMQ, o broker é 'inteligente': entrega mensagens e as descarta após confirmação (ACK). No Kafka, o broker é um log distribuído sequencial em disco; os consumidores são responsáveis por rastrear sua posição de leitura (offset), permitindo replay de eventos passados a qualquer momento.",
    recomendacao: "Revise as diferenças fundamentais entre Brokers AMQP e Plataformas de Event Streaming (Kafka)."
  },
  {
    id: "ml-sd-01",
    trilha: "System Design",
    cor: "var(--teal)",
    icon: "🏛️",
    topicoNome: "Teorema CAP e Teorema PACELC",
    url: "trilhas/system-design.html#a2",
    pergunta: "Segundo o Teorema PACELC, em um sistema distribuído, o que deve ser ponderado quando NÃO HÁ partição de rede (Else)?",
    opcoes: [
      { letter: "A", text: "Deve-se escolher entre CPU ou Memória RAM.", correct: false },
      { letter: "B", text: "O trade-off ocorre entre Latência (L) e Consistência (C): para ter dados sincronizados entre réplicas mesmo em tempo de paz, você paga o custo de maior latência de escrita.", correct: true },
      { letter: "C", text: "O sistema deve obrigatoriamente reiniciar todos os servidores para balancear o tráfego.", correct: false },
      { letter: "D", text: "O Teorema PACELC proíbe o uso de bancos de dados NoSQL.", correct: false }
    ],
    explicacao: "O PACELC estende o CAP: Se há Partição (P), escolha entre Disponibilidade (A) ou Consistência (C); Else (E - em operação normal sem partição), escolha entre Latência (L) ou Consistência (C).",
    recomendacao: "Revise o Teorema CAP, PACELC e estratégias de replicação síncrona vs assíncrona."
  },
  {
    id: "ml-sd-02",
    trilha: "System Design",
    cor: "var(--teal)",
    icon: "🏛️",
    topicoNome: "Cache Invalidation e os Padrões de Cache",
    url: "trilhas/system-design.html#b1",
    pergunta: "Em um e-commerce com altíssima leitura de produtos, a equipe adota o padrão 'Cache-Aside' (Lazy Loading). Qual é o fluxo correto desse padrão em uma operação de leitura?",
    opcoes: [
      { letter: "A", text: "A aplicação busca no cache; se encontrar (hit), retorna; se não encontrar (miss), busca no banco de dados, grava o resultado no cache e retorna ao usuário.", correct: true },
      { letter: "B", text: "O banco de dados grava diretamente no Redis a cada INSERT ou UPDATE de forma síncrona.", correct: false },
      { letter: "C", text: "O cache busca todas as tabelas do banco a cada 500ms através de polling constante.", correct: false },
      { letter: "D", text: "A aplicação nunca lê do cache, apenas grava nele para fins de backup histórico.", correct: false }
    ],
    explicacao: "No padrão Cache-Aside, a aplicação orquestra a leitura: verifica o cache primeiro; havendo miss, consulta a base primária e popula o cache de forma preguiçosa (lazy) com TTL determinado.",
    recomendacao: "Revise estratégias de cache (Cache-Aside, Write-Through, Write-Behind) e problemas de Cache Stampede."
  },
  {
    id: "ml-ia-01",
    trilha: "Inteligência Artificial & LLMs",
    cor: "var(--purple)",
    icon: "🧠",
    topicoNome: "RAG Híbrido: Vetorial (Denso) + BM25 (Esparso)",
    url: "trilhas/ia.html#b2",
    pergunta: "Em um sistema RAG (Retrieval-Augmented Generation), por que combinar busca vetorial densa (Embeddings) com busca esparsa tradicional por palavras-chave (BM25 / Full-Text) supera o uso de embeddings puros?",
    opcoes: [
      { letter: "A", text: "Embeddings capturam similaridade semântica e intenção, mas costumam falhar ao buscar identificadores exatos (códigos de produto, CPFs, nomes de funções e termos técnicos raros), onde o BM25 é cirúrgico.", correct: true },
      { letter: "B", text: "O BM25 utiliza redes neurais convolucionais mais rápidas do que o modelo de embeddings.", correct: false },
      { letter: "C", text: "Embeddings só funcionam com textos de até 5 palavras.", correct: false },
      { letter: "D", text: "A busca vetorial foi banida pelos padrões de conformidade da W3C.", correct: false }
    ],
    explicacao: "Busca híbrida une o melhor dos dois mundos: modelos densos de embedding entendem paráfrases e conceitos sinônimos, enquanto BM25 garante correspondência exata de termos alfanuméricos específicos e códigos raros. O Reciprocal Rank Fusion (RRF) funde os rankings.",
    recomendacao: "Revise arquiteturas avançadas de RAG, embeddings densos, BM25 e Reciprocal Rank Fusion."
  },
  {
    id: "ml-ia-02",
    trilha: "Inteligência Artificial & LLMs",
    cor: "var(--purple)",
    icon: "🧠",
    topicoNome: "KV Cache e a Fase de Geração de Tokens",
    url: "trilhas/ia.html#a3",
    pergunta: "No serving de Grandes Modelos de Linguagem (LLMs com arquitetura Transformer), qual é a função essencial do 'KV Cache' (Key-Value Cache)?",
    opcoes: [
      { letter: "A", text: "Armazenar o histórico de conversas dos usuários em um cluster Redis distribuído.", correct: false },
      { letter: "B", text: "Evitar o recálculo redundante dos vetores Key e Value dos tokens anteriores a cada novo token gerado de forma autoregressiva, transformando o custo computacional de O(N²) para O(N) por token.", correct: true },
      { letter: "C", text: "Comprimir o peso dos modelos de 16 bits para 4 bits em tempo de compilação.", correct: false },
      { letter: "D", text: "Traduzir o prompt do usuário para linguagem de máquina binária.", correct: false }
    ],
    explicacao: "Em geração autoregressiva de LLMs, cada novo token precisa prestar atenção em todos os tokens precedentes. Sem o KV Cache, os tensores K e V de todo o prompt teriam que ser reprocessados nas camadas de atenção a cada passo de decodificação.",
    recomendacao: "Revise o mecanismo de Attention nos Transformers, geração autoregressiva e consumo de VRAM com KV Cache."
  },
  {
    id: "ml-lin-01",
    trilha: "Linux & Operações",
    cor: "var(--teal)",
    icon: "🐧",
    topicoNome: "Arquivos Abertos e Espaço em Disco no Linux",
    url: "cadernos/linux.html#f1",
    pergunta: "A partição `/var` de um servidor Linux atingiu 100% de uso. O operador executou `rm /var/log/app.log` (um arquivo de 40GB). Porém, o comando `df -h` continua marcando 100% ocupado e o disco não liberou espaço. Por quê?",
    opcoes: [
      { letter: "A", text: "O comando rm moveu o arquivo para uma lixeira oculta protegida por senha de root.", correct: false },
      { letter: "B", text: "O processo da aplicação continua ativo mantendo um File Descriptor aberto para aquele arquivo. No Linux, os blocos de disco só são liberados quando o contador de links e os descritores forem zero.", correct: true },
      { letter: "C", text: "O Linux exige que o computador seja formatado após remoções com mais de 10GB.", correct: false },
      { letter: "D", text: "O comando rm só funciona para arquivos que não contenham quebras de linha.", correct: false }
    ],
    explicacao: "No Linux, 'rm' apenas executa a syscall unlink(), removendo a entrada do diretório. Se um processo ainda tem o descritor aberto (visível via 'lsof +L1'), o kernel preserva os dados físicos no disco. Para liberar sem reiniciar o processo: execute 'truncate -s 0 /proc/<PID>/fd/<FD>' ou '> arquivo.log' antes de deletar.",
    recomendacao: "Revise inodes, unlinks, file descriptors e o uso de lsof para diagnosticar disco cheio."
  },
  {
    id: "ml-git-01",
    trilha: "Git Profissional",
    cor: "var(--orange)",
    icon: "🌿",
    topicoNome: "Por Que Usar '--force-with-lease' em Vez de '--force'",
    url: "cadernos/git.html#e2",
    pergunta: "Após rebasear sua branch de feature localmente, você precisa atualizar o repositório remoto. Por que as boas práticas de engenharia exigem `git push --force-with-lease` em vez de `git push --force`?",
    opcoes: [
      { letter: "A", text: "Porque '--force-with-lease' criptografa os commits com assinatura PGP de 4096 bits.", correct: false },
      { letter: "B", text: "Porque '--force-with-lease' valida se a referência remota é igual ao seu último fetch local. Se outro desenvolvedor enviou commits novos na branch enquanto você rebaseava, o push é bloqueado, evitando sobrescrita acidental.", correct: true },
      { letter: "C", text: "Porque '--force' foi descontinuado e não existe mais a partir do Git 2.0.", correct: false },
      { letter: "D", text: "Porque o GitHub cobra taxas adicionais por comandos push com flag --force simples.", correct: false }
    ],
    explicacao: "'--force' sobrescreve cegamente a branch remota, destruindo commits de colegas. O '--force-with-lease' funciona como um lock otimista (Compare-And-Swap): só sobrescreve se ninguém tiver enviado alterações adicionais desde o seu último fetch.",
    recomendacao: "Revise a mecânica de referências remotas do Git, rebase defensivo e proteção de branches."
  },
  {
    id: "ml-cb-01",
    trilha: "Conceitos de Backend",
    cor: "var(--gold)",
    icon: "⚙️",
    topicoNome: "Connection Starvation: I/O Externo em Métodos @Transactional",
    url: "cadernos/conceitos-backend.html#j2",
    pergunta: "Uma API em Spring Boot começa a lançar `ConnectionTimeoutException: Connection is not available` no HikariCP sob carga moderada de 40 req/s. Ao auditar o código, encontra-se uma chamada HTTP a um gateway de cartões dentro de um método `@Transactional`. Qual a relação causal?",
    code: "@Transactional\npublic void processar() {\n    pedidoRepo.save(pedido);\n    gatewayClient.cobrarCartao(pedido); // Chamada REST que demora 2 a 4 segundos\n    pedido.setStatus(PAGO);\n}",
    opcoes: [
      { letter: "A", text: "Nenhuma relação, pois o Spring fecha a conexão JDBC antes de qualquer chamada HTTP.", correct: false },
      { letter: "B", text: "A anotação @Transactional retém uma conexão física do pool JDBC aberta durante toda a execução do método. Esperar 3 segundos de I/O de rede externa por requisição esgota todas as conexões do pool rapidamente.", correct: true },
      { letter: "C", text: "O HikariCP possui um bug que proíbe chamadas HTTP que retornem status 200.", correct: false },
      { letter: "D", text: "O banco de dados relacional entra em deadlock por falta de memória swap.", correct: false }
    ],
    explicacao: "Manter conexões de banco de dados alugadas enquanto se aguarda latência de I/O de rede externa é uma das causas principais de incidentes em produção (Connection Starvation). Chamadas externas devem ser executadas SEMPRE fora do bloco transacional.",
    recomendacao: "Revise dimensionamento de pools JDBC, HikariCP e fronteiras transacionais no backend."
  }
];
