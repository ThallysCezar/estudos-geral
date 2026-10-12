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
    url: "trilhas/java.html#i2",
    pergunta: "Dois threads executam `contador++` simultaneamente 10.000 vezes em uma variável declarada como `public volatile int contador = 0`. Qual será o comportamento do valor final?",
    code: "public volatile int contador = 0;\n// 2 threads executando 10.000x:\ncontador++;",
    opcoes: [
      { letter: "A", text: "O valor final será exatamente 20.000: ao marcar a variável como volatile, a JVM insere barreiras de memória que tornam a leitura e a escrita uma operação indivisível.", correct: false },
      { letter: "B", text: "Dificilmente chegará a 20.000, pois 'volatile' garante apenas visibilidade entre caches, mas 'contador++' é uma operação composta (leitura, soma, escrita) não atômica.", correct: true },
      { letter: "C", text: "O resultado fica entre 10.000 e 20.000 porque volatile serializa o acesso de escrita, mas permite que leituras concorrentes enxerguem valores de versões anteriores.", correct: false },
      { letter: "D", text: "O valor final será 0: como volatile força a leitura direto da memória principal, cada thread sobrescreve o trabalho da outra a cada iteração do laço.", correct: false }
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
    url: "trilhas/java.html#i6",
    pergunta: "Uma aplicação migrada para Virtual Threads (Project Loom) no Java 21 sofre degradação severa de throughput quando threads virtuais realizam I/O bloqueante dentro de blocos `synchronized`. Por que isso ocorre?",
    code: "synchronized (lock) {\n    // Chamada de rede I/O bloqueante (ex: HTTP ou JDBC legado)\n    var resp = httpClient.send(req, handler);\n}",
    opcoes: [
      { letter: "A", text: "Ocorre o fenômeno de 'Pinning': a Virtual Thread fica travada (pinned) à Carrier Thread do SO porque blocos synchronized prendem a stack nativa no Java 21, neutralizando o multiplexador do Loom.", correct: true },
      { letter: "B", text: "O escalonador detecta o bloqueio e migra a Virtual Thread para outra Carrier Thread do pool, de modo que o paralelismo se mantém às custas de troca de contexto extra.", correct: false },
      { letter: "C", text: "O bloco synchronized é convertido automaticamente em ReentrantLock pelo compilador a partir do Java 21, eliminando qualquer impacto sobre a Carrier Thread.", correct: false },
      { letter: "D", text: "A Virtual Thread é descartada e recriada a cada bloqueio em synchronized, o que gera custo de alocação alto mas mantém a Carrier Thread sempre livre para outras tarefas.", correct: false }
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
      { letter: "A", text: "A transação abre, mas com propagação REQUIRES_NEW implícita, criando uma segunda conexão com o banco e podendo esgotar o pool sob carga concorrente.", correct: false },
      { letter: "B", text: "A chamada falha em tempo de execução com uma exceção de proxy, porque o Spring proíbe invocação interna de métodos anotados com @Transactional.", correct: false },
      { letter: "C", text: "A transação abre normalmente: o Spring reescreve o bytecode da classe em tempo de carga, de modo que mesmo chamadas internas via this passam pelo interceptador transacional.", correct: false },
      { letter: "D", text: "A transação NÃO abre no banco de dados, pois a chamada via 'this' pula o Proxy CGLIB/JDK do Spring, invocando diretamente a instância real sem interceptação.", correct: true }
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
      { letter: "A", text: "Porque a injeção por construtor permite que o Spring pule a criação de proxies, reduzindo o consumo de memória do contexto em aplicações com muitos beans.", correct: false },
      { letter: "B", text: "Porque injeção por construtor permite campos 'final' imutáveis, facilita testes unitários puros sem carregar o contexto Spring (SpringRunner) e impede NullPointerExceptions por dependências ausentes.", correct: true },
      { letter: "C", text: "Porque a injeção por campo cria dependência circular em tempo de execução, enquanto o construtor resolve o grafo de beans de forma preguiçosa e evita o ciclo.", correct: false },
      { letter: "D", text: "Porque campos anotados com @Autowired só são preenchidos após o primeiro acesso, o que torna o bean inutilizável dentro de blocos @PostConstruct.", correct: false }
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
      { letter: "A", text: "Nenhum risco relevante: a anotação @Transactional estende a transação do banco ao broker, de modo que uma falha na publicação desfaz o save automaticamente.", correct: false },
      { letter: "B", text: "Problema do Dual-Write: se a rede ou o broker falharem logo após o save, o pedido existirá no banco mas o evento nunca será publicado, corrompendo a consistência do sistema.", correct: true },
      { letter: "C", text: "O risco é de duplicidade: se o broker demorar a confirmar, o Spring reenvia a mensagem, e o consumidor processa o mesmo pedido mais de uma vez.", correct: false },
      { letter: "D", text: "O risco é de ordenação: a mensagem pode chegar ao consumidor antes de o commit no banco terminar, fazendo o consumidor ler um pedido que ainda não existe.", correct: false }
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
      { letter: "A", text: "Quando o fluxo de negócio possui muitos passos complexos, regras de compensação ramificadas e exige visibilidade centralizada do estado da transação.", correct: true },
      { letter: "B", text: "Quando o fluxo precisa de consistência forte entre os passos, porque só o orquestrador consegue manter uma transação distribuída aberta até o final.", correct: false },
      { letter: "C", text: "Quando o volume de transações é baixo, já que a orquestração centralizada não escala além de algumas centenas de execuções simultâneas por instância.", correct: false },
      { letter: "D", text: "Quando os serviços pertencem a times diferentes e deseja-se o menor acoplamento possível, já que cada um reage a eventos sem conhecer o fluxo completo.", correct: false }
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
      { letter: "A", text: "O período de carência do Kubernetes é curto demais para a JVM: aumentar terminationGracePeriodSeconds resolve, porque o encerramento limpo leva mais tempo.", correct: false },
      { letter: "B", text: "O comando em Shell Form roda em um subshell com PID diferente de 1, e o Kubernetes só envia sinais para o processo de PID 1, que neste caso é o próprio kubelet.", correct: false },
      { letter: "C", text: "A aplicação Java ignora SIGTERM por padrão: a JVM só encerra com SIGKILL, e por isso é preciso registrar um shutdown hook explícito no código da aplicação.", correct: false },
      { letter: "D", text: "A sintaxe 'Shell Form' executa '/bin/sh -c' como PID 1. O shell não repassa o sinal SIGTERM para o processo filho Java; o Docker atinge o timeout de 10s e emite SIGKILL forçado.", correct: true }
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
      { letter: "A", text: "Manterá o Pod em execução e apenas registrará o evento, já que o kubelet diferencia falha de dependência externa de falha do próprio processo.", correct: false },
      { letter: "B", text: "Apenas removerá o Pod dos endpoints do Service até o banco responder, porque falha de dependência externa é tratada como indisponibilidade temporária.", correct: false },
      { letter: "C", text: "Reiniciará (kill e recriação) o Pod repetidamente, piorando a sobrecarga do banco de dados na inicialização e gerando indisponibilidade total em cascata.", correct: true },
      { letter: "D", text: "Marcará o Pod como NotReady e acionará o HPA para criar réplicas adicionais, na tentativa de distribuir a carga que o banco não está conseguindo atender.", correct: false }
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
      { letter: "A", text: "O HikariCP enfileira as requisições que excedem o limite do pool, de modo que o banco recebe no máximo as 25 conexões por pod e a latência apenas aumenta.", correct: false },
      { letter: "B", text: "O banco colapsará: 40 pods * 25 conexões = 1.000 conexões tentando abrir. O Postgres estourará o limite de 300, rejeitando conexões e gerando Connection Starvation em massa.", correct: true },
      { letter: "C", text: "O Kubernetes reduz automaticamente o número de réplicas ao detectar erros de conexão, estabilizando o sistema num patamar que o banco consegue atender.", correct: false },
      { letter: "D", text: "O PostgreSQL aceita as 1.000 conexões sem erro, mas o tempo de resposta cresce de forma linear porque cada conexão ocupa apenas memória compartilhada.", correct: false }
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
      { letter: "A", text: "Alocar os recursos em uma Subnet Privada sem IP público, roteando o tráfego de saída (0.0.0.0/0) através de um NAT Gateway hospedado em uma Subnet Pública com Internet Gateway.", correct: true },
      { letter: "B", text: "Usar Subnet Privada com um Internet Gateway associado diretamente à tabela de rotas, que permite saída sem expor os recursos a conexões de entrada.", correct: false },
      { letter: "C", text: "Manter os recursos em Subnet Privada sem rota externa e baixar as atualizações por um bastion host, copiando os pacotes manualmente para cada nó.", correct: false },
      { letter: "D", text: "Colocar os recursos em Subnet Pública com IP público, restringindo o tráfego de entrada por Security Group, já que a saída para a internet exige rota direta.", correct: false }
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
      { letter: "A", text: "A mensagem é reenfileirada ao final da fila, de modo que as demais são processadas primeiro e o problema só reaparece quando a fila esvazia.", correct: false },
      { letter: "B", text: "O RabbitMQ move a mensagem automaticamente para uma Dead Letter Queue após três tentativas, que é o padrão do broker para exceções no consumidor.", correct: false },
      { letter: "C", text: "A mensagem é descartada após a primeira falha, porque o Spring AMQP considera erro de desserialização como irrecuperável e não faz nova tentativa.", correct: false },
      { letter: "D", text: "A mensagem volta imediatamente para o topo da fila, gerando consumo de 100% de CPU, logs massivos e travamento do consumo das demais mensagens saudáveis.", correct: true }
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
      { letter: "A", text: "O RabbitMQ distribui cada mensagem para todos os consumidores inscritos; o Kafka entrega cada mensagem a um único consumidor por grupo, sem retenção.", correct: false },
      { letter: "B", text: "O RabbitMQ remove mensagens da fila após o ACK do consumidor; o Kafka é um log append-only imutável particionado onde as mensagens persistem e os consumidores gerenciam seus próprios offsets.", correct: true },
      { letter: "C", text: "O RabbitMQ mantém as mensagens em log particionado e permite releitura por offset; o Kafka remove a mensagem assim que o consumidor confirma o recebimento.", correct: false },
      { letter: "D", text: "Ambos removem a mensagem após o ACK, mas o Kafka replica o dado entre brokers antes de confirmar, o que garante durabilidade maior com a mesma semântica.", correct: false }
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
      { letter: "A", text: "O trade-off ocorre entre Disponibilidade e Consistência, exatamente como na partição: o PACELC apenas estende o CAP para o caso de rede saudável.", correct: false },
      { letter: "B", text: "O trade-off ocorre entre Latência (L) e Consistência (C): para ter dados sincronizados entre réplicas mesmo em tempo de paz, você paga o custo de maior latência de escrita.", correct: true },
      { letter: "C", text: "Deve-se ponderar entre custo de infraestrutura e consistência, porque manter réplicas sincronizadas exige mais nós e aumenta a fatura do cluster.", correct: false },
      { letter: "D", text: "O trade-off é entre durabilidade e latência: gravar em disco antes de responder protege contra perda, mas atrasa a confirmação ao cliente.", correct: false }
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
      { letter: "A", text: "A aplicação grava no cache e no banco na mesma operação, de forma síncrona, garantindo que leitura e escrita nunca divirjam entre as duas camadas.", correct: false },
      { letter: "B", text: "A aplicação grava apenas no cache e um processo assíncrono persiste no banco depois, reduzindo a latência de escrita ao custo de risco de perda.", correct: false },
      { letter: "C", text: "O cache é populado antecipadamente por um job que varre as tabelas mais acessadas, de modo que a aplicação nunca enfrenta um miss em horário de pico.", correct: false },
      { letter: "D", text: "A aplicação busca no cache; se encontrar (hit), retorna; se não encontrar (miss), busca no banco de dados, grava o resultado no cache e retorna ao usuário.", correct: true }
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
    url: "trilhas/ia.html#t4-rag",
    pergunta: "Em um sistema RAG (Retrieval-Augmented Generation), por que combinar busca vetorial densa (Embeddings) com busca esparsa tradicional por palavras-chave (BM25 / Full-Text) supera o uso de embeddings puros?",
    opcoes: [
      { letter: "A", text: "Porque os embeddings perdem precisão em textos longos, e o BM25 compensa recuperando documentos inteiros em vez de fragmentos isolados do índice.", correct: false },
      { letter: "B", text: "Porque o BM25 garante recuperação ordenada por data de publicação, o que os embeddings não conseguem fazer por desconhecerem metadados temporais.", correct: false },
      { letter: "C", text: "Embeddings capturam similaridade semântica e intenção, mas costumam falhar ao buscar identificadores exatos (códigos de produto, CPFs, nomes de funções e termos técnicos raros), onde o BM25 é cirúrgico.", correct: true },
      { letter: "D", text: "Porque a busca vetorial é computacionalmente cara e o BM25 funciona como um filtro inicial barato, reduzindo o conjunto antes de aplicar os embeddings.", correct: false }
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
    url: "trilhas/ia.html#t1-transformer-math",
    pergunta: "No serving de Grandes Modelos de Linguagem (LLMs com arquitetura Transformer), qual é a função essencial do 'KV Cache' (Key-Value Cache)?",
    opcoes: [
      { letter: "A", text: "Manter os pesos das camadas de atenção em memória rápida entre requisições, evitando recarregar o modelo do disco a cada nova chamada da API.", correct: false },
      { letter: "B", text: "Reduzir o consumo de memória da GPU descartando os vetores de atenção dos tokens mais antigos, mantendo apenas a janela recente ativa em memória.", correct: false },
      { letter: "C", text: "Evitar o recálculo redundante dos vetores Key e Value dos tokens anteriores a cada novo token gerado de forma autoregressiva, transformando o custo computacional de O(N²) para O(N) por token.", correct: true },
      { letter: "D", text: "Armazenar os prompts mais frequentes para devolver a mesma resposta sem acionar o modelo, economizando custo de inferência em perguntas repetidas.", correct: false }
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
      { letter: "A", text: "O comando rm apenas remove a entrada do diretório, mas o espaço só é liberado após o próximo ciclo de sincronização do journal do sistema de arquivos.", correct: false },
      { letter: "B", text: "O processo da aplicação continua ativo mantendo um File Descriptor aberto para aquele arquivo. No Linux, os blocos de disco só são liberados quando o contador de links e os descritores forem zero.", correct: true },
      { letter: "C", text: "O arquivo foi removido corretamente, mas a ferramenta df usa um cache de metadados que só é atualizado quando a partição é remontada.", correct: false },
      { letter: "D", text: "O espaço foi liberado no inode, porém o sistema de arquivos reserva por padrão 5% do volume para o usuário root, o que mantém o indicador em 100%.", correct: false }
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
      { letter: "A", text: "Porque '--force-with-lease' valida se a referência remota é igual ao seu último fetch local. Se outro desenvolvedor enviou commits novos na branch enquanto você rebaseava, o push é bloqueado, evitando sobrescrita acidental.", correct: true },
      { letter: "B", text: "Porque o --force descarta o reflog do repositório remoto, tornando impossível recuperar o histórico anterior, enquanto o --force-with-lease o preserva.", correct: false },
      { letter: "C", text: "Porque o --force-with-lease cria um merge implícito entre a sua versão e a remota, evitando que o histórico de quem já puxou a branch seja invalidado.", correct: false },
      { letter: "D", text: "Porque o --force-with-lease reescreve apenas os commits que você criou, preservando automaticamente qualquer commit que outra pessoa tenha enviado à branch.", correct: false }
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
      { letter: "A", text: "Porque o otimizador descarta índices cuja seletividade estimada é inferior a dez por cento das linhas, preferindo ler a tabela inteira de forma sequencial.", correct: false },
      { letter: "B", text: "Porque funções aplicadas sobre a coluna indexada impedem o uso do índice, já que o valor calculado não corresponde ao que está armazenado na estrutura.", correct: false },
      { letter: "C", text: "Porque o índice composto só é usado quando todas as colunas aparecem na cláusula WHERE, e consultas que filtram por uma delas caem em varredura completa.", correct: false },
      { letter: "D", text: "A anotação @Transactional retém uma conexão física do pool JDBC aberta durante toda a execução do método. Esperar 3 segundos de I/O de rede externa por requisição esgota todas as conexões do pool rapidamente.", correct: true }
    ],
    explicacao: "Manter conexões de banco de dados alugadas enquanto se aguarda latência de I/O de rede externa é uma das causas principais de incidentes em produção (Connection Starvation). Chamadas externas devem ser executadas SEMPRE fora do bloco transacional.",
    recomendacao: "Revise dimensionamento de pools JDBC, HikariCP e fronteiras transacionais no backend."
  }
];
