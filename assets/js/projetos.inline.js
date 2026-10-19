/* Extraido de lab/projetos.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 1 ---------- */

  (function(){
    "use strict";
    var areas = {
      java:{label:"Java puro",accent:"#50fa7b",glow:"#50fa7b"},
      spring:{label:"Java + Spring",accent:"#8be9fd",glow:"#8be9fd"},
      aws:{label:"Spring + AWS",accent:"#ffb86c",glow:"#ffb86c"},
      cloud:{label:"Spring + Cloud agnóstica",accent:"#bd93f9",glow:"#bd93f9"},
      ai:{label:"Spring + IA",accent:"#f1fa8c",glow:"#f1fa8c"},
      rabbit:{label:"Spring + RabbitMQ",accent:"#ff79c6",glow:"#ff79c6"}
    };

    /* Os documentos do acervo. Cada projeto aponta para os que explicam
       o que ele exercita — a bancada nunca fica solta da teoria. */
    var D = {
      java :["Trilha Java","../trilhas/java.html","Java"],
      spring:["Trilha Spring","../trilhas/spring.html","Spring"],
      arq  :["Trilha Arquitetura","../trilhas/arquitetura.html","Arquitetura"],
      k8s  :["Trilha Docker e Kubernetes","../trilhas/docker-kubernetes.html","Docker/K8s"],
      nuvem:["Trilha Nuvem","../trilhas/nuvem.html","Nuvem"],
      msg  :["Trilha Mensageria","../trilhas/mensageria.html","Mensageria"],
      back :["Caderno Conceitos de Backend","../cadernos/conceitos-backend.html","Backend"],
      bib  :["Caderno Biblioteca","../cadernos/biblioteca.html","Biblioteca"],
      ia   :["Trilha Inteligência Artificial","../trilhas/ia.html","IA"],
      sys  :["Trilha System Design","../trilhas/system-design.html","System Design"],
      linux:["Caderno Linux e Terminal","../cadernos/linux.html","Linux"],
      git  :["Caderno Git","../cadernos/git.html","Git"]
    };
    var TEORIA = {
      J01:[["java","Records, imutabilidade e o que BigDecimal resolve que double não resolve"],["arq","Por que o domínio não pode conhecer nem o arquivo nem a CLI"]],
      J02:[["java","NIO, executores, virtual threads e o custo de cada modelo de concorrência"],["back","Idempotência e deduplicação: reprocessar não pode duplicar"]],
      J03:[["java","JDBC, try-with-resources e o pool por trás da conexão"],["back","Transações, níveis de isolamento, índices e plano de execução"]],
      S01:[["spring","Do socket ao controller: filtros, resolvers, DTO e validação de fronteira"],["back","Paginação keyset, índices e o custo real do offset"]],
      S02:[["spring","Proxy AOP, @Transactional, propagation e o limite do self-invocation"],["back","Lock otimista e pessimista, deadlock e a aritmética do pool"]],
      S03:[["spring","Actuator, Micrometer e o que cada sinal do Spring realmente mede"],["bib","Como investigar qualquer problema: hipótese, bisecção e evidência"]],
      A01:[["nuvem","Armazenamento de objetos e credencial temporária, sem depender de um provedor"],["back","HTTP e upload: por que a API não deve ser proxy de bytes"]],
      A02:[["nuvem","Eventos gerenciados: o que o provedor garante e o que ele não garante"],["msg","Entrega ao menos uma vez, DLQ e consumidor idempotente"]],
      A03:[["nuvem","Identidade da workload, imagem imutável, custo e teardown"],["k8s","Imagem, rollout e rollback: os mesmos conceitos fora do cluster"]],
      C01:[["arq","Ports & adapters: onde a fronteira fica e quanto ela custa"],["nuvem","A matriz de tradução entre os cinco provedores"]],
      C02:[["nuvem","Configuração, segredo e identidade sem acoplar ao SDK"],["arq","Composition root e a regra de dependência"]],
      C03:[["k8s","Probes, requests/limits, rolling update e graceful shutdown"],["nuvem","12-factor: o que muda quando o runtime é gerenciado"]],
      I01:[["ia","APIs generativas, ChatClient e fallback para modelos locais"],["spring","Configuração tipada e testes de integração com Testcontainers"],["back","Latência e cache num pipeline de várias etapas"]],
      I02:[["ia","Prompt engineering, spec driven development e JSON Schema para record"],["spring","Records, Bean Validation e contrato de saída imutável"],["back","Contrato e fallback quando a dependência é probabilística"]],
      I03:[["ia","Eval, LLM-as-a-judge, métricas de qualidade e mitigação de alucinação"],["bib","Como decidir sob incerteza — e por que uma métrica só esconde risco"],["back","Medição, percentis e detecção de regressão"]],
      I04:[["ia","Agentes, tool calling, limites e aprovação humana"],["spring","Spring AI: ChatClient, ferramentas e integração com o backend"],["back","Autorização, tenant e trilha de auditoria no backend"]],
      R01:[["msg","Exchange, binding, routing key e a mensagem que some sem rota"],["arq","Coreografia: quem publica não conhece quem consome"]],
      R02:[["msg","Ack, prefetch, retry, DLX e o ciclo de dead letter"],["k8s","Por que o pool de conexões limita o HPA"]],
      R03:[["msg","Outbox, confirms, inbox e por que exactly-once não existe sem escopo"],["arq","OrderFlow: o mesmo sistema atravessando os seis documentos"],["k8s","Operar o capstone em cluster local"],["back","Reconciliação: a consulta que prova consistência"],["ia","Agente ou classificador opcional sem quebrar a transação central"]]
    };

    /* Aquecimentos: menores que um projeto de propósito. Cada um isola uma
       única coisa que quebra, mostra ela quebrando, e fecha com critério. */
    var pracs = [
      {id:"P01",area:"java",min:25,t:"Onde 0.1 + 0.2 deixa de doer",
       f:"Some mil valores de 0,01 duas vezes: uma com double, outra com BigDecimal em escala 2 e arredondamento definido. Imprima os dois totais lado a lado e a diferença entre eles.",
       q:"O total em double não fecha em 10,00 — e o erro não aparece na primeira soma, aparece depois de acumular. Você precisa saber dizer a partir de quantas somas ele fica visível.",
       k:"Você explica, sem consultar, por que new BigDecimal(0.1) e new BigDecimal(\"0.1\") são valores diferentes.",prep:["J01"]},
      {id:"P02",area:"java",min:20,t:"equals e compareTo discordando",
       f:"Coloque new BigDecimal(\"1.0\") e new BigDecimal(\"1.00\") num HashSet e num TreeSet. Conte o tamanho dos dois.",
       q:"O HashSet guarda dois elementos, o TreeSet guarda um. Um conjunto que muda de comportamento conforme a implementação é um bug esperando o dia certo.",
       k:"Você sabe qual dos dois usar para dinheiro e justifica pelo contrato de equals, não pelo resultado observado.",prep:["J01","J03"]},
      {id:"P03",area:"java",min:35,t:"O arquivo que não sobrevive ao kill",
       f:"Grave mil linhas num arquivo, mate o processo no meio da escrita e leia de volta. Depois refaça gravando num temporário e movendo com Files.move e ATOMIC_MOVE.",
       q:"Na primeira versão o arquivo fica truncado no meio de uma linha: a escrita incompleta destruiu o último estado válido que existia.",
       k:"Matar o processo em qualquer ponto deixa o arquivo ou totalmente antigo ou totalmente novo, nunca no meio.",prep:["J01","J02"]},
      {id:"P04",area:"spring",min:30,t:"O SQL que o ORM escondeu",
       f:"Ligue o log de SQL e carregue uma lista de dez registros que tenham um relacionamento. Antes de rodar, escreva quantas consultas você espera. Depois conte.",
       q:"Saíram onze, não uma. O N+1 não aparece em teste com dois registros: aparece em produção com dez mil.",
       k:"Você prevê o número de consultas antes de executar e acerta.",prep:["S01"]},
      {id:"P05",area:"spring",min:25,t:"@Transactional que não abre transação",
       f:"Crie um método anotado com @Transactional e chame-o de dentro de outro método da mesma classe. Force uma exceção depois da escrita e verifique se houve rollback.",
       q:"Não houve. A chamada interna não passa pelo proxy, então a anotação nunca é lida — e o código continua parecendo correto.",
       k:"Você mostra, no log de transação, a diferença entre a chamada interna e a chamada via bean.",prep:["S02"]},
      {id:"P06",area:"spring",min:30,t:"Actuator antes do incidente",
       f:"Exponha health e metrics, adicione um endpoint que dorme dois segundos e dispare trinta chamadas concorrentes. Leia http.server.requests.",
       q:"O p50 continua bonito enquanto o p95 explode. A média é a métrica que mais esconde — e é a que quase todo painel mostra primeiro.",
       k:"Você aponta, pelo painel, qual percentil degradou e quantas threads ficaram presas, sem abrir o log.",prep:["S03"]},
      {id:"P07",area:"cloud",min:35,t:"Porta antes de SDK",
       f:"Escreva a interface ObjectStorage com put, get, head e delete, e duas implementações: disco local e MinIO. O caso de uso não pode importar nada de SDK.",
       q:"Na primeira tentativa algum tipo do SDK vaza para a assinatura — quase sempre no retorno ou na exceção, que é onde ninguém olha.",
       k:"O módulo de domínio compila com o SDK removido do classpath.",prep:["C01"]},
      {id:"P08",area:"cloud",min:25,t:"Segredo que não mora no jar",
       f:"Rode a mesma imagem três vezes: com variável de ambiente, com arquivo montado e com o valor ausente. Confira o que aparece em /actuator/env nos três casos.",
       q:"Na terceira, a aplicação sobe normalmente e só falha na primeira requisição — o erro chega longe da causa, que é o pior lugar para ele chegar.",
       k:"Configuração ausente derruba o startup com mensagem que nomeia a propriedade, e nenhum segredo aparece no actuator.",prep:["C02","A03"]},
      {id:"P09",area:"cloud",min:30,t:"Os três fatores que você quebra sem perceber",
       f:"Pegue um serviço seu e verifique três coisas: log vai para stdout, config vem do ambiente, processo não guarda estado em disco local. Corrija o que falhar.",
       q:"Quase sempre é o terceiro: uma sessão, um cache ou um upload temporário gravado no disco do container.",
       k:"Duas réplicas da mesma imagem atendem a mesma requisição com o mesmo resultado.",prep:["C03"]},
      {id:"P10",area:"aws",min:30,t:"A URL assinada expirando na sua frente",
       f:"Gere uma presigned PUT com sessenta segundos no LocalStack. Use dentro do prazo, espere expirar e use de novo. Leia o corpo dos dois erros.",
       q:"Depois de expirar, o erro não é 404 nem 401 — e saber qual é economiza uma hora de depuração no dia em que isso acontecer de verdade.",
       k:"Você explica quais permissões a URL herda e de quem ela as herda.",prep:["A01"]},
      {id:"P11",area:"aws",min:20,t:"O alarme de custo antes do primeiro recurso",
       f:"Antes de criar qualquer coisa numa conta real, crie o orçamento e o alerta. Depois confirme que o e-mail chega de fato.",
       q:"O laboratório que ninguém derrubou vira a conta que ninguém esperava. O alerta é a única coisa que avisa a tempo.",
       k:"Existe um valor-limite escrito e um e-mail testado — não apenas configurado.",prep:["A02","A03"]},
      {id:"P12",area:"aws",min:30,t:"Teardown como script, não como memória",
       f:"Crie três recursos por comando e destrua por comando. Depois vasculhe a conta procurando sobras: volumes, logs, snapshots, políticas.",
       q:"Quase sempre sobra algo que o destroy não cobriu, porque foi criado à mão durante um teste e nunca entrou no script.",
       k:"A auditoria final não encontra nenhum recurso do laboratório.",prep:["A03"]},
      {id:"P13",area:"rabbit",min:30,t:"Exchange, binding e a mensagem que sumiu",
       f:"Publique numa exchange sem nenhum binding correspondente e procure a mensagem na fila. Depois ative mandatory e capture o publisher return.",
       q:"Sem mandatory, a mensagem desaparece em silêncio: nenhum erro, nenhuma fila, nenhum log. O broker fez exatamente o que foi mandado.",
       k:"Você prova, por evidência do broker, que a mensagem não foi roteada — em vez de supor.",prep:["R01"]},
      {id:"P14",area:"rabbit",min:35,t:"prefetch=1 contra prefetch=1000",
       f:"Rode o mesmo consumidor lento com prefetch 1, 10 e 1000. Meça throughput, memória e quantas mensagens ficam unacked em cada caso.",
       q:"Com prefetch alto um consumidor açambarca o lote e os outros ficam ociosos — e a memória sobe sem o broker reclamar de nada.",
       k:"Você escolhe um valor e tem um gráfico que justifica a escolha.",prep:["R02"]},
      {id:"P15",area:"rabbit",min:30,t:"Consumir duas vezes de propósito",
       f:"Processe uma mensagem, aplique o efeito e mate o consumidor antes do ack. Deixe redeliver. Depois grave uma chave de idempotência na mesma transação do efeito.",
       q:"Na primeira versão o efeito acontece duas vezes e nada acusa. O ack não fala sobre o seu negócio: fala sobre o broker.",
       k:"Matar o consumidor em qualquer ponto produz exatamente um efeito.",prep:["R02","R03"]},
      {id:"P16",area:"ai",min:25,t:"Temperatura 0 não é determinismo",
       f:"Rode o mesmo prompt dez vezes com temperature 0 no modelo local e compare as respostas caractere a caractere.",
       q:"Elas não são todas idênticas. Tratar a chamada como função pura é a suposição que quebra o teste na semana seguinte.",
       k:"Seu teste afirma propriedades da resposta (formato, campos, limites) e nunca o texto exato.",prep:["I01","I02"]},
      {id:"P17",area:"ai",min:30,t:"A saída estruturada que o parser recusa",
       f:"Peça JSON com um schema, chame vinte vezes e valide cada resposta. Conte quantas falham e agrupe por tipo de falha.",
       q:"Algumas vêm com texto antes do JSON, outras com um campo a mais, outras com o enum errado. Cada tipo pede um tratamento diferente — um catch genérico apaga essa informação.",
       k:"Existe um caminho explícito para resposta inválida que não é uma exceção genérica.",prep:["I02"]},
      {id:"P18",area:"ai",min:25,t:"Dez casos de teste antes do primeiro prompt",
       f:"Antes de escrever o prompt, escreva dez perguntas: cinco respondíveis pelo material e cinco que ele não sustenta. Defina a resposta esperada de cada uma.",
       q:"Sem esse conjunto, toda mudança de prompt vira opinião: melhora dois exemplos e piora vinte sem ninguém perceber.",
       k:"Alterar o prompt gera um relatório comparável, não uma impressão.",prep:["I01","I03"]}
    ];

    var projects = [];
    function P(o){projects.push(o);}
    P({
      id:"J01",area:"java",difficulty:"Fundação",sessions:5,title:"Cofre CLI sem centavos mágicos",
      summary:"Registre entradas, despesas e reservas sem double, sem framework e sem esconder regra em if solto.",
      problem:"Uma pessoa guarda o que sobra, mas não sabe quanto pode separar sem misturar reserva, contas e gasto livre. O sistema precisa calcular valores monetários de forma exata e deixar cada regra explícita.",
      why:"Dinheiro expõe rápido os vícios de modelagem: arredondamento implícito, estado mutável, datas ambíguas e regra espalhada. Este projeto fortalece Java antes de qualquer abstração do Spring.",
      learns:["BigDecimal, escala, arredondamento e comparação por valor","records e value objects para Money, Category e TransactionId","imutabilidade, invariantes e exceções de domínio","coleções, Comparator, streams com uso criterioso","Clock injetável para testes determinísticos","separação entre CLI, aplicação, domínio e persistência"],
      architecture:["Terminal","Command Parser","Use Cases","Domain","JSON/CSV"],
      prerequisites:["Java 21 instalado","Maven Wrapper ou Maven local","JUnit e Git básicos"],
      stack:["Java 21","Maven","JUnit 5","java.time","java.math","NIO"],
      steps:["Escreva cinco exemplos de entrada e a saída esperada antes do código.","Modele Money com currency, scale definida e operações que rejeitam moedas diferentes.","Modele Transaction e BudgetMonth sem setters; invalide valor zero, data futura não permitida e categoria vazia.","Crie casos de uso RegisterIncome, RegisterExpense, ReserveMoney e MonthlySummary.","Implemente comandos add, reserve, list e summary; mensagens de erro devem orientar correção.","Persista arquivo de dados por escrita atômica: temporário, fsync quando aplicável e move.","Adicione Clock e IdGenerator como dependências explícitas para controlar testes.","Empacote com Maven Wrapper e escreva um roteiro de demonstração de três minutos."],
      acceptance:["Nenhum cálculo monetário usa double ou float","Reexecutar summary produz exatamente os mesmos totais","Arquivo parcialmente escrito não substitui o último estado válido","Comando inválido retorna ajuda e código de saída diferente de zero","Testes cobrem arredondamento, moeda incompatível e virada de mês"],
      tests:["Property test simples: soma de lançamentos independe da ordem","Teste de unidade de cada invariante de Money","Teste de integração da CLI com diretório temporário","Golden file para relatório mensal"],
      failures:["Mate o processo durante a escrita do arquivo","Use 0.1 + 0.2 como entrada e compare com uma versão ingênua em double","Troque o locale da JVM","Corrompa uma linha do arquivo persistido"],
      questions:["Por que BigDecimal(String) difere de BigDecimal(double)?","equals e compareTo de BigDecimal dizem exatamente a mesma coisa?","Qual regra pertence ao domínio e qual pertence ao parser da CLI?","Como Clock reduz flakiness?"],
      ladder:["CLI, domínio imutável, arquivo local e testes principais","migração de schema do arquivo, import/export e relatórios por período","criptografia do arquivo, auditoria append-only e benchmark do relatório"],
      evidence:["README com exemplos copiáveis e definição de arredondamento","ADR-001: por que BigDecimal e escala escolhida","diagrama de dependências entre CLI, application e domain","captura de teste da falha de escrita atômica"],
      cost:"R$ 0. Tudo roda na JVM local.",command:"mkdir cofre-cli && cd cofre-cli && git init && mvn -N wrapper:wrapper"
    });
    P({
      id:"J02",area:"java",difficulty:"Intermediário",sessions:7,title:"Importador de extratos resistente",
      summary:"Leia arquivos grandes com NIO, normalize formatos e paralelize sem perder ordem, memória ou diagnóstico.",
      problem:"Extratos CSV de bancos diferentes chegam com cabeçalhos, encoding, separadores e datas distintos. Um arquivo de milhões de linhas não pode ser carregado inteiro nem duplicar transações.",
      why:"I/O real mistura parsing, throughput, backpressure, erros parciais e observabilidade. É um laboratório melhor de concorrência do que criar threads sem restrição.",
      learns:["Files, Path, buffered I/O, Charset e atomic move","pipeline producer/consumer com executor limitado","virtual threads versus pool fixo para tarefas bloqueantes","deduplicação por fingerprint e idempotência de importação","medição de throughput, heap e latência por etapa","resultado parcial, quarantine e relatório de erros"],
      architecture:["Files","Reader","Normalizer","Deduplicator","Writer","Report"],
      prerequisites:["Projeto J01 concluído","Noções de threads, futures e filas limitadas","saber gerar um CSV de teste"],
      stack:["Java 21","NIO.2","Executors","Virtual Threads","JFR","JUnit 5"],
      steps:["Defina um contrato BankStatementParser e dois formatos de extrato incompatíveis.","Crie gerador determinístico de 1 milhão de linhas, incluindo duplicatas e linhas ruins.","Implemente versão sequencial streaming e registre tempo, pico de heap e linhas por segundo.","Separe leitura, parsing e escrita com capacidade limitada; nunca use fila infinita.","Implemente uma variante com virtual threads e explique onde ela ajuda ou não ajuda.","Crie fingerprint estável com campos normalizados e uma estratégia de collision handling.","Envie linhas inválidas para quarantine com número, motivo e conteúdo sanitizado.","Capture um JFR de cada variante e documente o gargalo observado."],
      acceptance:["Processa 1 milhão de linhas com heap máximo definido por você","Resultado é determinístico apesar do paralelismo","Rodar o mesmo arquivo duas vezes não duplica lançamentos","Uma linha inválida não cancela todo o lote","Relatório mostra lidas, válidas, duplicadas, inválidas e duração"],
      tests:["Teste com chunk cortado no meio de caractere multibyte","Teste de concorrência repetido 100 vezes com checksum final","Teste de propriedade da normalização de datas e valores","Benchmark comparativo sequencial, pool e virtual threads"],
      failures:["Reduza a fila para 1 e depois aumente para 100 mil","Faça o writer dormir 20 ms por lote","Interrompa a thread coordenadora","Entregue arquivo com encoding inesperado"],
      questions:["Qual etapa limita o throughput e qual evidência comprova?","Paralelismo preserva ordem por necessidade ou por acidente?","Quando virtual thread não aumenta CPU disponível?","Como impedir OOM quando o destino fica lento?"],
      ladder:["parser streaming e relatório básico","pipeline limitado, quarantine e deduplicação","JFR, retomada por checkpoint, checksum e tuning documentado"],
      evidence:["README com tabela de benchmarks e ambiente","ADR: modelo de concorrência e tamanho das filas","JFR gravado ou screenshots das views principais","arquivo gerado, checksum final e comando reproduzível"],
      cost:"R$ 0. Sem banco ou serviço externo.",command:"mkdir extrato-importer && cd extrato-importer && git init && mvn -N wrapper:wrapper"
    });
    P({
      id:"J03",area:"java",difficulty:"Avançado",sessions:9,title:"Ledger JDBC sem ORM",
      summary:"Construa um livro-razão com SQL explícito, pool, transações, constraints e concorrência observável.",
      problem:"Transferências não podem criar dinheiro, desaparecer ou aplicar duas vezes. O estado precisa ser auditável mesmo quando duas operações concorrem ou uma conexão cai.",
      why:"JPA pode esconder o que o banco realmente faz. JDBC força você a dominar conexão, bind, result set, isolamento, lock, constraint, rollback e desenho de schema.",
      learns:["JDBC, PreparedStatement, ResultSet e batch","DataSource e pool de conexões","transações ACID e níveis de isolamento","constraints como última linha de defesa","optimistic e pessimistic locking","ledger append-only, saldo derivado e reconciliação"],
      architecture:["CLI/API Test","Service","JDBC Repositories","PostgreSQL","Audit Query"],
      prerequisites:["J01 e noções de SQL","Docker ou PostgreSQL local","transações e índices básicos"],
      stack:["Java 21","JDBC","PostgreSQL","HikariCP","Flyway","Testcontainers","JUnit 5"],
      steps:["Modele accounts, ledger_entries, transfers e idempotency_keys em SQL; registre invariantes.","Crie migrations versionadas e constraints para valor positivo, moeda e unicidade.","Implemente repositórios JDBC manualmente com mapeamento explícito e close seguro.","Implemente transferência em uma transação com lançamentos débito/crédito balanceados.","Compare SELECT FOR UPDATE com version column em testes concorrentes.","Configure pool pequeno de propósito e meça espera e saturação.","Crie consulta de reconciliação que detecta ledger desequilibrado.","Suba PostgreSQL real em Testcontainers para a suíte de integração.","Gere thread dump quando o pool satura e explique as threads bloqueadas."],
      acceptance:["Cada transferência válida cria dois lançamentos cuja soma é zero","Idempotency key repetida retorna o primeiro resultado","Concorrência não permite saldo negativo se essa for a regra","Rollback remove todos os efeitos da transferência incompleta","Migrations criam um banco vazio sem passos manuais"],
      tests:["Dois saques simultâneos contra o mesmo saldo","Queda simulada entre débito e crédito","Constraint violation e tradução para erro de domínio","Saturação do pool com mais tarefas do que conexões","Teste de reconciliação com corrupção criada apenas no fixture"],
      failures:["Pool de duas conexões e vinte operações lentas","Deadlock por ordem inversa de locks","Timeout de statement no meio da transação","Repetição da mesma requisição após resposta perdida"],
      questions:["Por que transação da aplicação e conexão JDBC precisam ter o mesmo escopo?","Qual anomalia cada isolamento ainda permite?","Lock otimista ou pessimista: qual contenção você mediu?","Por que saldo é projeção e ledger é fonte de auditoria?"],
      ladder:["schema, migrations e transferência atômica","idempotência, concorrência, pool e reconciliação","métricas de pool, timeouts, runbook e testes de recuperação"],
      evidence:["ERD e invariantes próximas às tabelas","ADR comparando duas estratégias de lock","plano de execução de consulta crítica","thread dump anotado e relatório de teste concorrente"],
      cost:"R$ 0 com PostgreSQL/Testcontainers local.",command:"mkdir ledger-jdbc && cd ledger-jdbc && git init && docker run --rm -d --name ledger-db -e POSTGRES_PASSWORD=local -p 5432:5432 postgres"
    });
    P({
      id:"S01",area:"spring",difficulty:"Intermediário",sessions:7,title:"API de orçamento com SQL visível",
      summary:"Exponha o domínio anterior por HTTP com Spring MVC, validação, JdbcTemplate e erros previsíveis.",
      problem:"Um cliente precisa registrar lançamentos e consultar orçamento sem conhecer arquivos ou SQL. A API deve oferecer contrato estável, paginação correta e erro útil.",
      why:"O objetivo não é criar CRUD; é acompanhar o request de socket a controller, application service, transação e banco, sabendo onde cada preocupação vive.",
      learns:["DispatcherServlet, filtros, argument resolvers e Jackson","DTOs distintos do domínio e validação em fronteiras","JdbcTemplate, RowMapper e SQL explícito","Problem Details e exception handling","paginação keyset e limites de consulta","testes de slice, integração e contrato"],
      architecture:["HTTP Client","Filter Chain","Controller","Use Case","JdbcTemplate","PostgreSQL"],
      prerequisites:["J03 ou domínio equivalente","HTTP, JSON e SQL básico","Spring Initializr/CLI"],
      stack:["Java 21","Spring Boot estável","Spring MVC","Validation","JdbcTemplate","PostgreSQL","Testcontainers"],
      steps:["Gere projeto com web, validation, jdbc e actuator; mantenha domínio sem anotações Spring.","Desenhe contratos POST /transactions e GET /transactions?after=&limit=.","Mapeie DTO → command → domain; rejeite campos desconhecidos se essa for sua decisão.","Implemente JdbcTemplate com SQL nomeado e paginação keyset por created_at + id.","Padronize erros com type, title, status, detail, instance e correlationId.","Adicione filtro que propaga correlationId sem registrar dados sensíveis.","Teste controller isolado e fluxo real com PostgreSQL em container.","Publique OpenAPI gerada ou contrato escrito e exemplos curl."],
      acceptance:["Controller não acessa repositório diretamente","Listagem nunca retorna mais que o limite máximo","Próxima página não duplica nem pula item em inserções concorrentes previstas","Erros 400, 404, 409 e 500 têm formato consistente","Teste de integração parte de banco vazio e aplica migrations"],
      tests:["MockMvc para validação e status","integração repository com Testcontainers","teste de keyset com chaves empatadas","contrato de erro serializado","SQL injection por filtros manipulados"],
      failures:["Envie JSON gigante e campo inesperado","Mate o banco durante a requisição","Use timeout curto na query","Repita POST após timeout do cliente"],
      questions:["Onde exatamente Bean Validation executa?","Por que entidade do banco não deve vazar como resposta?","Offset ou keyset: qual comportamento sob mutação?","Quais erros são culpa do cliente e quais são incidentes?"],
      ladder:["dois endpoints, SQL e validação","paginação keyset, Problem Details e Testcontainers","rate limit, contrato versionado, SLO e observabilidade"],
      evidence:["README com curls e decisões do contrato","diagrama do request até o banco","ADR sobre keyset pagination","relatório da suíte real com container"],
      cost:"R$ 0 em execução local.",command:"spring init --java-version=21 --build=maven --dependencies=web,validation,jdbc,actuator budget-api"
    });
    P({
      id:"S02",area:"spring",difficulty:"Avançado",sessions:9,title:"Transferência sob corrida",
      summary:"Faça transações, proxies, locks e idempotência sobreviverem a chamadas concorrentes e respostas perdidas.",
      problem:"Duas transferências chegam ao mesmo tempo e uma terceira é repetida porque o cliente não recebeu resposta. O saldo não pode furar a regra nem aplicar o mesmo efeito duas vezes.",
      why:"Usar @Transactional sem entender proxy, propagation, rollback e pool cria confiança falsa. Aqui a semântica é provada por testes concorrentes.",
      learns:["proxy AOP, self-invocation e limites de @Transactional","propagation, isolation, rollback rules e timeout","optimistic/pessimistic lock com SQL","idempotency key, estado em andamento e resposta reaproveitada","ordenação de locks e prevenção de deadlock","teste concorrente com barreiras controladas"],
      architecture:["Clients × N","Idempotency Filter","Transfer Service Proxy","JDBC Tx","PostgreSQL Locks"],
      prerequisites:["S01 e J03","conceitos ACID e pool","saber ler logs SQL"],
      stack:["Java 21","Spring Boot","Spring Transactions","JdbcTemplate","PostgreSQL","Testcontainers"],
      steps:["Escreva a invariante financeira e o diagrama de estados da idempotency key.","Crie teste que alinha duas threads com CyclicBarrier antes de corrigir a corrida.","Implemente a versão ingênua read-check-write e capture a falha.","Aplique SELECT FOR UPDATE ou versão otimista e documente a contenção.","Coloque @Transactional no boundary de aplicação e prove o problema de self-invocation.","Persista idempotency key, hash da requisição, status e resposta na mesma transação.","Defina timeout e tradução de deadlock para retry limitado com jitter.","Teste 50 chamadas concorrentes e exponha métricas de conflito/latência.","Escreva runbook: sintomas de pool saturado, lock wait e deadlock."],
      acceptance:["Saldo e ledger permanecem consistentes em 100 execuções concorrentes","Mesma chave + mesmo payload reaproveita resultado","Mesma chave + payload diferente retorna conflito","Timeout ou deadlock não deixa idempotência travada para sempre","Métrica diferencia sucesso, duplicata, conflito e retry"],
      tests:["CyclicBarrier para corrida determinística","self-invocation demonstrada em teste","deadlock provocado com ordem inversa","cliente perde resposta e repete","timeout de lock e recuperação"],
      failures:["Remova @Transactional e compare","Chame método transacional pela própria instância","Sature pool enquanto locks estão retidos","Mate conexão depois do commit e antes da resposta"],
      questions:["Por que proxy não intercepta self-invocation?","O commit ocorreu se o cliente não recebeu 200?","Retry é seguro em qual boundary?","Qual lock maximiza correção sem destruir throughput?"],
      ladder:["corrida reproduzida e transação correta","idempotência persistida, retries e métricas","teste de carga, runbook, SLO e estratégia de degradação"],
      evidence:["timeline da corrida antes/depois","ADR de lock e isolamento","consulta para diagnosticar locks ativos","gráfico ou tabela p50/p95 sob concorrência"],
      cost:"R$ 0 em PostgreSQL/Testcontainers local.",command:"spring init --java-version=21 --build=maven --dependencies=web,jdbc,actuator transfer-lab"
    });
    P({
      id:"S03",area:"spring",difficulty:"Avançado",sessions:8,title:"Sala de incidente Spring",
      summary:"Instrumente uma API, provoque latência e vazamento de pool, e investigue por sintomas em vez de palpites.",
      problem:"A API ficou lenta, alguns requests retornam 503 e CPU parece normal. Você precisa localizar a camada culpada com métricas, logs, traces e dumps.",
      why:"Confiabilidade não é adicionar dashboard. É formular hipótese, correlacionar sinais, reproduzir, isolar mudança e confirmar recuperação.",
      learns:["Actuator, Micrometer e observações","logs estruturados e correlation/trace IDs","RED, USE, percentis e cardinalidade","thread dump, heap/JFR e pool metrics","timeouts, bulkheads e graceful shutdown","runbook e postmortem sem culpados"],
      architecture:["Load Generator","Spring API","Metrics/Logs/Traces","Slow Dependency","Operator"],
      prerequisites:["S01","Docker Compose","noções de HTTP e threads"],
      stack:["Java 21","Spring Boot","Actuator","Micrometer","OpenTelemetry","Prometheus/Grafana local","Toxiproxy"],
      steps:["Defina SLI de disponibilidade e latência para dois endpoints.","Instrumente métricas RED e logs JSON sem cardinalidade por userId.","Propague correlationId e trace context entre chamadas.","Suba Prometheus e Grafana localmente; crie painel mínimo orientado à pergunta.","Use Toxiproxy para adicionar latência, timeout e reset na dependência.","Crie endpoint que satura pool e capture thread dump durante o sintoma.","Ajuste timeouts e limites; valide graceful shutdown com tráfego em andamento.","Execute game day de 20 minutos e registre timeline, hipótese e evidência."],
      acceptance:["Painel responde taxa, erro e duração sem abrir logs","Um request pode ser seguido por logs e trace","Alerta usa sintoma do usuário, não CPU isolada","Runbook leva outra pessoa à causa em até 15 minutos","Correção reduz o p95 no mesmo cenário reproduzível"],
      tests:["teste do endpoint Actuator customizado","integração de propagação de correlationId","carga curta antes/depois","shutdown com requisições ativas","teste de cardinalidade limitada"],
      failures:["latência de 2 s no banco","reset de conexão em 10% das chamadas","pool esgotado por query que dorme","disco de logs indisponível","SIGTERM durante request"],
      questions:["Qual sinal prova fila, lock ou dependência lenta?","Por que média esconde cauda?","Quais labels explodem cardinalidade?","Liveness deve falhar quando o banco cai?"],
      ladder:["Actuator, logs e painel RED","traces, faults e runbook","SLO, alertas, game day e postmortem"],
      evidence:["dashboard exportado e cenário de carga","thread dump anotado","runbook executável","postmortem com timeline, causa e ações"],
      cost:"R$ 0 com stack observável local.",command:"spring init --java-version=21 --build=maven --dependencies=web,actuator incident-room"
    });
    P({
      id:"A01",area:"aws",difficulty:"Intermediário",sessions:7,title:"Upload direto com S3 presigned",
      summary:"Autorize upload temporário sem trafegar o arquivo pelo backend; teste primeiro no LocalStack.",
      problem:"Arquivos grandes não devem atravessar a memória da API. O backend precisa autorizar somente chave, tamanho, tipo e janela definidos, depois confirmar integridade.",
      why:"Presigned URL ensina IAM, assinatura, escopo temporal e fronteira entre control plane e data plane sem transformar a API em proxy caro.",
      learns:["S3 object key, metadata, checksum e lifecycle","presigned PUT/GET e expiração","IAM least privilege e credenciais por ambiente","validação antes/depois do upload","LocalStack como substituto local, diferenças do serviço real","ameaças: overwrite, content-type falso e URL vazada"],
      architecture:["Client","Spring Authorizer","Presigned URL","S3/LocalStack","Metadata DB"],
      prerequisites:["S01","Docker","HTTP PUT e noção de IAM"],
      stack:["Java 21","Spring Boot","AWS SDK for Java 2.x","LocalStack","PostgreSQL","Testcontainers"],
      steps:["Modele UploadIntent com owner, key gerada no servidor, tamanho máximo e expiração.","Crie port ObjectStorage e adapter LocalStack/AWS usando SDK v2.","Gere presigned PUT com prazo curto e checksum quando suportado no fluxo.","Faça cliente de teste enviar bytes diretamente ao endpoint S3 local.","Registre intent pendente e confirme por HEAD antes de marcar disponível.","Negue key fornecida livremente pelo cliente e sanitize nome original.","Teste política IAM mínima em conta real apenas como extensão opcional.","Adicione lifecycle/rotina local para intents expirados e objetos órfãos."],
      acceptance:["Backend não recebe bytes do arquivo","URL expira e não autoriza outro object key","Objeto acima do limite não vira documento disponível","Checksum ou HEAD confirma integridade/metadados","Adapter local e AWS passam pelo mesmo contrato"],
      tests:["presigned URL expirada","tentativa de substituir key existente","content-type declarado diferente do detectado","falha após upload antes da confirmação","teste de contrato do adapter com LocalStack"],
      failures:["pare a emulação no meio do upload","use relógio deslocado","repita PUT na mesma URL","delete metadata mantendo objeto"],
      questions:["Quem assina e quais permissões a URL herda?","Por que URL é credencial temporária?","Como evitar overwrite de chave?","O que o emulador não prova sobre AWS real?"],
      ladder:["presign local e upload direto","intents, checksum, expiração e limpeza","IAM mínimo, auditoria, malware pipeline e lifecycle"],
      evidence:["sequence diagram do upload","policy IAM explicada linha a linha","threat model curto","script create/test/teardown local"],
      cost:"Local: R$ 0. AWS real é opcional; confira elegibilidade e preço, crie Budget/alerta antes e apague bucket, objetos e políticas ao terminar.",command:"spring init --java-version=21 --build=maven --dependencies=web,jdbc,actuator s3-upload-lab"
    });
    P({
      id:"A02",area:"aws",difficulty:"Avançado",sessions:9,title:"Extrato orientado a eventos AWS",
      summary:"Transforme Object Created em processamento idempotente usando S3, EventBridge e fila, local antes da nuvem.",
      problem:"Quando um extrato chega, ele precisa ser importado sem acoplamento síncrono, tolerando duplicação, atraso, reordenação e mensagem venenosa.",
      why:"Eventos de Cloud não são chamadas mágicas exatamente uma vez. O projeto obriga a desenhar contrato, deduplicação, retry, DLQ e observabilidade.",
      learns:["S3 Event Notifications e EventBridge rules","SQS buffer, visibility timeout e DLQ","event envelope, schema version e correlation","idempotência por event id + object version/checksum","backoff e tratamento de poison message","infraestrutura como código e teardown"],
      architecture:["S3/LocalStack","EventBridge","SQS","Spring Consumer","Ledger DB","DLQ"],
      prerequisites:["A01 e J02","mensageria básica","Docker Compose"],
      stack:["Java 21","Spring Boot","AWS SDK v2","LocalStack","S3","EventBridge","SQS","PostgreSQL"],
      steps:["Defina evento StatementUploaded v1 independente do payload nativo da AWS.","Suba S3, EventBridge e SQS no LocalStack e automatize o bootstrap.","Configure regra Object Created → fila de processamento.","Implemente consumer Spring que busca objeto e chama o importador J02.","Persista inbox com event id e status antes de produzir efeitos.","Ajuste visibility timeout acima do processamento e renove se necessário.","Faça retry limitado e mova falha permanente para DLQ com contexto sanitizado.","Crie replay explícito da DLQ que não ignora idempotência.","Opcionalmente execute uma única passagem em AWS, observando logs e desmontando tudo."],
      acceptance:["Upload gera processamento sem chamada direta à API","Evento duplicado não duplica ledger","Falha transitória volta; permanente chega à DLQ","Replay da DLQ é auditável e seguro","Todo recurso possui comando de teardown"],
      tests:["evento duplicado e fora de ordem","objeto removido antes do consumo","consumer morre antes e depois do commit","visibility timeout menor que processamento","contrato v1 recebido por consumer futuro"],
      failures:["derrube consumer por 2 minutos","injete JSON inválido","gere 100 eventos do mesmo objeto","negue permissão de GetObject"],
      questions:["Qual componente segura o pico?","Quando visibility timeout causa concorrência duplicada?","Evento AWS é contrato de domínio ou detalhe de adapter?","Como provar replay seguro?"],
      ladder:["evento local e consumer funcional","inbox, retry, DLQ e métricas","IaC, schema evolution, replay governado e teste AWS opcional"],
      evidence:["mapa do fluxo feliz e cinco falhas","evento v1 com exemplos","dashboard de backlog/age/DLQ","script teardown e captura de custo zero/local"],
      cost:"LocalStack local: R$ 0. AWS opcional e potencialmente tarifada; use Budget/alerta, região única, execução curta e teardown verificado.",command:"spring init --java-version=21 --build=maven --dependencies=web,jdbc,actuator aws-statement-events"
    });
    P({
      id:"A03",area:"aws",difficulty:"Avançado",sessions:10,title:"Operação efêmera na AWS",
      summary:"Empacote, entregue, observe e remova um serviço Spring sem tratar deploy como clique irreproduzível.",
      problem:"Uma API funciona localmente, mas precisa receber configuração segura, health check, logs, rollback e limites na Cloud. O laboratório deve desaparecer sem deixar cobrança.",
      why:"Cloud madura é operação repetível: identidade, rede, imagem, rollout, observação, custo e recuperação. O código é apenas um dos artefatos.",
      learns:["container image, registry e immutable tag/digest","compute gerenciado e task/service model","IAM role da workload versus credencial humana","configuração/segredo fora da imagem","health checks, logs, métricas e deployment rollback","IaC, tagging, Budget e teardown auditável"],
      architecture:["CI Local","Container Registry","Managed Compute","Spring App","Logs/Metrics","Operator"],
      prerequisites:["A01/A02","Docker","rede, IAM e logs básicos"],
      stack:["Java 21","Spring Boot","Docker","AWS CLI","Terraform/OpenTofu","ECR + compute escolhido","CloudWatch"],
      steps:["Crie imagem multi-stage, non-root, com limite de memória e tag imutável.","Prove a mesma imagem em Docker local com config externa.","Modele infraestrutura mínima em OpenTofu/Terraform e aplique tags owner, expiresAt e project.","Separe role de execução e role da aplicação com permissões mínimas.","Configure endpoint de readiness e health check coerente com dependências.","Envie logs estruturados e uma métrica de negócio; evite segredo em log.","Faça rollout de versão defeituosa, detecte e volte à anterior.","Registre custo/uso antes e depois; destrua pelo IaC e confira console/CLI.","Escreva runbook de deploy, rollback, incidente e teardown."],
      acceptance:["Imagem roda sem root e sem segredo embutido","Infra nasce e morre por comando versionado","Falha de readiness impede tráfego","Rollback restaura versão saudável","Auditoria final não encontra recurso do laboratório"],
      tests:["scan básico da imagem e SBOM","SIGTERM/graceful shutdown","variável obrigatória ausente","health check apontado para endpoint errado","deploy com imagem inexistente"],
      failures:["publique versão que retorna 500","retire permissão da workload","sature memória com limite baixo","interrompa rollout pela metade"],
      questions:["Qual identidade o código usa e como a obtém?","O que readiness deve testar?","Como distinguir rollback de correção forward?","Quais recursos podem sobreviver ao destroy?"],
      ladder:["imagem segura e execução local","IaC, deploy curto e observabilidade","rollback testado, runbook, tags TTL e auditoria"],
      evidence:["Dockerfile anotado e SBOM","diagrama identidade/rede/runtime","plano e destroy do IaC","evidência do rollback e lista vazia de recursos"],
      cost:"Conta real opcional. Free Tier e créditos podem mudar. Antes: Budget/alerta e limite pessoal. Depois: destroy, conferir recursos/volumes/logs e Billing. Não mantenha serviço ocioso.",command:"spring init --java-version=21 --build=maven --dependencies=web,actuator cloud-run-lab && cd cloud-run-lab && git init"
    });
    P({
      id:"C01",area:"cloud",difficulty:"Intermediário",sessions:8,title:"Storage trocável por porta",
      summary:"Mantenha o caso de uso estável enquanto filesystem, MinIO/S3, Blob e GCS viram adapters substituíveis.",
      problem:"O negócio armazena documentos, não “S3”. Uma mudança de provedor não deveria invadir controller, domínio e testes.",
      why:"Cloud agnóstica não significa menor denominador comum. Significa isolar a decisão, explicitar capacidades e testar o contrato que o negócio realmente exige.",
      learns:["ports & adapters e dependency inversion","capability matrix de object stores","streaming, metadata, ETag/checksum e conditional write","configuração por profile sem if(provider) espalhado","contract tests reutilizados por adapter","custo da portabilidade e escape hatch consciente"],
      architecture:["Use Case","ObjectStorage Port","File Adapter","MinIO Adapter","Cloud Adapters"],
      prerequisites:["S01 e A01","interfaces Java","Docker/MinIO"],
      stack:["Java 21","Spring Boot","MinIO","AWS SDK/Azure/GCP SDK opcionais","Testcontainers"],
      steps:["Liste capacidades necessárias: put stream, head, get, delete e URL temporária.","Desenhe ObjectStorage sem tipos de SDK no contrato.","Implemente adapter filesystem atômico e adapter MinIO local.","Crie contract test que roda igual contra ambos.","Mapeie diferenças de ETag, overwrite, metadata e URL temporária em uma matriz.","Selecione adapter por configuração tipada e valide startup.","Crie escape hatch isolado para capacidade exclusiva, sem contaminar domínio.","Faça stub/documentação dos adapters AWS, Azure e GCP; implementação real é opcional."],
      acceptance:["Use case compila sem SDK de Cloud","Troca de adapter não altera controller","Contract tests provam semântica mínima","Capacidade não suportada falha explicitamente","Matriz registra o que não é portável"],
      tests:["mesmo object key duas vezes","stream interrompido","metadata ausente","conditional write concorrente","adapter indisponível no startup"],
      failures:["pare MinIO no meio do stream","corrompa arquivo local","configure provider inválido","retorne ETag sem mesma semântica"],
      questions:["Interface representa negócio ou interseção de fornecedores?","Quando abstração perde uma capacidade valiosa?","Qual comportamento deve ser idêntico?","Como testar adapter sem mockar o SDK?"],
      ladder:["filesystem + port","MinIO + contract tests + capabilities","adapters reais opcionais, observabilidade e escape hatch"],
      evidence:["capability matrix","ADR da fronteira da porta","resultado dos contract tests por adapter","diagrama de dependências sem SDK vazando"],
      cost:"R$ 0 com filesystem/MinIO. Provedores reais são extensões opcionais e exigem consulta de preço e teardown.",command:"spring init --java-version=21 --build=maven --dependencies=web,validation,actuator portable-storage"
    });
    P({
      id:"C02",area:"cloud",difficulty:"Avançado",sessions:9,title:"Runtime portátil: eventos e segredos",
      summary:"Troque mensageria e secret store por composição de adapters, preservando semântica e expondo diferenças.",
      problem:"O mesmo serviço precisa rodar local, em Cloud pública ou privada. Credenciais, eventos e retry mudam, mas o caso de uso de domínio não deveria conhecer SDK.",
      why:"Portabilidade séria exige separar contrato sem esconder semânticas: ordering, duplicate delivery, lock duration e rotação de segredo variam.",
      learns:["EventPublisher/SecretResolver ports","12-factor config e workload identity","adapter RabbitMQ e adapter in-memory/local","schema de evento independente do broker","retry ownership e semantic mismatch","composition root e startup validation"],
      architecture:["Domain Event","Publisher Port","Rabbit Adapter","Cloud Adapter","Secret Port","Runtime Identity"],
      prerequisites:["C01","mensageria básica","configuração Spring"],
      stack:["Java 21","Spring Boot","RabbitMQ","Testcontainers","Kubernetes Secrets local","SDKs apenas nos adapters"],
      steps:["Defina evento de domínio sem header ou classe do broker.","Crie EventPublisher e uma matriz: at-least-once, ordering, delay, DLQ e tamanho.","Implemente adapter in-memory para teste e RabbitMQ para ambiente local.","Crie SecretResolver com env/file e cache de curta duração explícito.","Faça composition root escolher adapters por propriedades validadas.","Impeça segredo de aparecer em actuator, exception ou log.","Simule rotação de segredo sem recompilar e defina política de reload.","Documente como AWS/Azure/GCP/OCI/VMware encaixariam sem prometer equivalência."],
      acceptance:["Domínio não importa SDK/broker","Evento serializado possui version e eventId","Adapter declara semântica que oferece","Segredo muda sem rebuild","Startup falha cedo quando composição é impossível"],
      tests:["contract tests do publisher","evento duplicado e reordenado","segredo ausente/rotacionado","configuração de adapters incompatíveis","serialização compatível v1"],
      failures:["pause broker","troque arquivo de segredo enquanto requests ocorrem","faça adapter lançar após publish incerto","configure dois publishers por engano"],
      questions:["Quem possui retry: adapter ou caso de uso?","Como não esconder entrega diferente atrás da mesma interface?","Portabilidade vale o custo neste contexto?","Workload identity elimina qual segredo?"],
      ladder:["ports e adapters locais","matriz semântica, rotação e validação","adapter de uma Cloud, identity real e teste de failover"],
      evidence:["matriz provider/capability/semantics","ADR do composition root","teste de rotação gravado","dependency rule automatizada"],
      cost:"R$ 0 com RabbitMQ e secrets locais. Adapters reais são opcionais.",command:"spring init --java-version=21 --build=maven --dependencies=web,amqp,actuator portable-runtime"
    });
    P({
      id:"C03",area:"cloud",difficulty:"Avançado",sessions:10,title:"12-factor até Kubernetes local",
      summary:"Leve a mesma imagem ao kind, com config, probes, recursos, rollout e falhas operacionais reproduzíveis.",
      problem:"Uma aplicação containerizada não é automaticamente operável. Precisa iniciar, ficar pronta, terminar, receber configuração e sobreviver a atualização sem perder requisições.",
      why:"Kubernetes é uma API de estado desejado. Este projeto conecta comportamento do Spring a probes, resources, rollout e eventos do cluster.",
      learns:["imagem imutável, config externa e logs em stdout","Pod, Deployment, Service e reconciliation","startup/readiness/liveness com propósitos distintos","requests, limits, OOMKilled e throttling","rolling update, terminationGracePeriod e preStop","kubectl describe/logs/events/top como fluxo de diagnóstico"],
      architecture:["Git/Image","Kubernetes API","Deployment","Service","Spring Pods","Operator"],
      prerequisites:["Docker básico","S03","kubectl e kind/minikube"],
      stack:["Java 21","Spring Boot","Docker","kind","Kubernetes","Kustomize opcional"],
      steps:["Construa imagem non-root e reproduzível; exponha Actuator em porta/paths decididos.","Crie kind cluster e manifests Deployment + ClusterIP Service.","Passe config não sensível por ConfigMap e sensível por Secret local.","Configure startup, readiness e liveness com semânticas diferentes.","Defina requests/limits a partir de medição local, não chute silencioso.","Faça rolling update com uma versão lenta e observe eventos/endpoints.","Implemente graceful shutdown e teste SIGTERM sob carga.","Provoque CrashLoopBackOff, ImagePullBackOff, OOMKilled e probe failure.","Escreva árvore de troubleshooting começando por sintomas."],
      acceptance:["Um comando cria cluster e outro remove","Readiness tira pod do tráfego sem reiniciá-lo","SIGTERM permite concluir request dentro do grace period","Rollout mantém disponibilidade no cenário definido","Runbook identifica quatro falhas por evidências do cluster"],
      tests:["smoke test pós-deploy","carga durante rolling update","config ausente","limite de memória intencionalmente baixo","readiness de dependência degradada"],
      failures:["imagem inexistente","porta errada na probe","CPU limit agressivo","delete pod durante tráfego","ConfigMap incompatível"],
      questions:["Por que liveness não deve testar tudo?","Quem reinicia um Pod e quem cria outro?","Request e limit afetam scheduling/runtime como?","Qual sinal vem da aplicação e qual do cluster?"],
      ladder:["imagem + Deployment + Service","probes, config, resources e rollout","game day, policy, autoscaling e observabilidade"],
      evidence:["manifests e scripts create/delete","diagrama do reconciliation loop","tabela falha → sintoma → comando → causa","captura do rollout sem erro ao cliente"],
      cost:"R$ 0 em kind/minikube local. Cluster gerenciado não é necessário.",command:"kind create cluster --name lab-projetos && kubectl cluster-info --context kind-lab-projetos"
    });
    P({
      id:"I01",area:"ai",difficulty:"Avançado",sessions:10,title:"RAG local com fonte citável",
      summary:"Responda perguntas sobre seus próprios documentos com Ollama, embeddings e pgvector — sem enviar dados para API paga.",
      problem:"Um assistente responde sobre manuais internos, mas precisa recuperar trechos relevantes, apontar fontes e admitir quando o material não sustenta a resposta.",
      why:"RAG não é “colar PDF no prompt”. É ingestão, chunking, embedding, retrieval, contexto, resposta e avaliação como pipeline observável.",
      learns:["Spring AI ChatClient, EmbeddingModel e VectorStore","ETL de documentos, chunk size/overlap e metadata","pgvector e similaridade","QuestionAnswerAdvisor/RAG modular","citações, abstention e filtro por metadata","latência, contexto, tracing e avaliação de relevância"],
      architecture:["Docs","ETL/Chunks","Ollama Embeddings","pgvector","Retriever","Chat Model","Answer+Citations"],
      prerequisites:["Spring básico","Docker com memória disponível","conceitos de HTTP e SQL"],
      stack:["Java 21","Spring Boot","Spring AI","Ollama","PostgreSQL + pgvector","Testcontainers"],
      steps:["Escolha dez documentos próprios não sensíveis e crie cinco perguntas respondíveis/não respondíveis.","Suba Ollama e pgvector localmente; registre modelo e requisitos de máquina.","Implemente ingestão idempotente com document id, checksum e metadata.","Compare dois tamanhos de chunk em um conjunto fixo de perguntas.","Configure VectorStore e retrieval top-k com filtro por coleção.","Monte ChatClient com advisor de RAG e prompt de abstention/citação.","Retorne answer, source ids e trechos usados; nunca invente URL.","Instrumente duração de embedding, retrieval e geração.","Crie dataset de avaliação e execute antes de alterar prompt/chunking."],
      acceptance:["Reingestão não duplica chunks","Resposta cita somente source ids recuperados","Pergunta sem evidência retorna não sei","Dataset mede retrieval hit e groundedness definidos por você","Tudo funciona sem chave paga"],
      tests:["documento atualizado muda checksum/chunks","prompt injection dentro do documento","consulta vazia e enorme","pgvector indisponível","modelo Ollama indisponível"],
      failures:["remova o documento correto do índice","reduza top-k para 1","injete instrução maliciosa no corpus","limite contexto do modelo"],
      questions:["Falha veio do retrieval ou da geração?","Chunk ideal é propriedade fixa?","Citação prova veracidade?","Qual metadata evita vazamento entre coleções?"],
      ladder:["ingestão + busca + resposta local","citações, abstention, filtros e dataset","evals no CI, observabilidade, ACL e threat model"],
      evidence:["dataset versionado com expected sources","diagrama do pipeline RAG","comparativo chunk/top-k","README com comandos Ollama e teardown"],
      cost:"R$ 0 local; custo é CPU/RAM/energia da máquina. API externa não é necessária.",command:"spring init --java-version=21 --build=maven --dependencies=web,jdbc,actuator rag-local"
    });
    P({
      id:"I02",area:"ai",difficulty:"Avançado",sessions:8,title:"Classificador com saída estruturada",
      summary:"Converta texto de lançamento em categoria e confiança, validando schema em vez de confiar em JSON aparente.",
      problem:"Descrições bancárias precisam virar categorias tipadas. O modelo pode responder texto inválido, categoria inexistente ou confiança incoerente.",
      why:"Integração de IA precisa de contrato, validação, fallback e auditoria. Structured output reduz parsing improvisado, mas continua sujeito a limites do provedor/modelo.",
      learns:["record de resposta e JSON Schema","structured output e validação","prompt versionado e few-shot examples","temperature/determinismo e confidence calibration","fallback humano/regra e audit trail","PII minimization e redaction"],
      architecture:["Transaction Text","Redactor","ChatClient","Schema Validator","Policy","Category Result"],
      prerequisites:["I01 ou Spring AI básico","records e Bean Validation","noção de classificação"],
      stack:["Java 21","Spring Boot","Spring AI","Ollama","JSON Schema","JUnit"],
      steps:["Defina enum de categorias, confidence e reason curta em record imutável.","Crie dataset de 100 exemplos anonimizados com rótulo humano.","Implemente redaction antes do prompt e logue somente hash/metadata.","Use ChatClient entity mapping; valide categoria, confidence e campos extras.","Implemente retry limitado para schema inválido e fallback UNKNOWN.","Versione prompt/model config junto ao resultado para auditoria.","Compare baseline por palavras-chave com modelo local.","Calcule accuracy por classe, confusion matrix e taxa de UNKNOWN."],
      acceptance:["Resposta inválida nunca entra como objeto confiável","UNKNOWN é caminho explícito, não exception genérica","PII original não aparece em logs/prompts persistidos","Métrica por classe evita esconder categoria ruim","Troca de prompt produz relatório comparável"],
      tests:["modelo retorna texto em vez de JSON","categoria fora do enum","confidence NaN/fora do intervalo","prompt injection na descrição","timeout e retry esgotado"],
      failures:["use modelo menor","remova exemplos de uma classe","mande descrição vazia/ambígua","force resposta truncada"],
      questions:["Structured output é garantia em qual camada?","Confidence do modelo é probabilidade calibrada?","Quando regra simples vence LLM?","Qual dado pode sair do boundary?"],
      ladder:["record, prompt e 20 exemplos","schema validation, fallback e 100 exemplos","calibração, human review, drift e auditoria"],
      evidence:["dataset anonimizado e confusion matrix","ADR IA versus regras","prompt/version manifest","exemplos de falha e política de fallback"],
      cost:"R$ 0 com Ollama local. Nenhum dado precisa sair da máquina.",command:"spring init --java-version=21 --build=maven --dependencies=web,validation,actuator classifier-ai"
    });
    P({
      id:"I03",area:"ai",difficulty:"Avançado",sessions:10,title:"Bancada de evals e guardrails",
      summary:"Ataque seu RAG/classificador, meça regressões e bloqueie respostas perigosas antes de chamar isso de feature.",
      problem:"Uma alteração de prompt melhora dois exemplos e piora vinte. Documentos podem conter prompt injection, resposta pode vazar dado e uma métrica única pode mascarar risco.",
      why:"IA em produção é sistema probabilístico sob políticas determinísticas. Evals repetíveis e guardrails em camadas substituem confiança por evidência.",
      learns:["golden dataset e test matrix","relevance, groundedness, refusal e format validity","prompt injection e data exfiltration threat model","advisors/interceptors e políticas antes/depois do modelo","rate/size limits, timeout e circuit breaker","human review, feedback e regressão"],
      architecture:["Attack Dataset","Input Guard","RAG/Model","Output Guard","Evaluator","Report"],
      prerequisites:["I01 e I02","testes parametrizados","segurança básica"],
      stack:["Java 21","Spring Boot","Spring AI Evaluator/Advisors","Ollama","JUnit","Micrometer"],
      steps:["Crie catálogo de riscos: hallucination, injection, PII, toxicidade, indisponibilidade e custo.","Monte dataset com casos normais, limite, adversariais e não respondíveis.","Defina métricas e limiares por risco; não reduza tudo a uma nota.","Implemente input guard para tamanho, formato, tenant e padrões proibidos.","Implemente output guard para schema, citação, PII e policy.","Separe evaluator heurístico de evaluator por modelo e registre limitações.","Gere relatório diff entre duas versões de prompt/modelo.","Adicione timeout, concorrência limitada e fallback sem IA.","Crie aprovação manual para ação de alto impacto.","Execute red-team session e converta achados em testes."],
      acceptance:["Toda alteração de prompt executa dataset","Relatório mostra caso, expectativa, resposta e métrica","Injection conhecida não altera política do sistema","Falha de modelo usa fallback definido","Ação de alto impacto nunca ocorre só por texto do modelo"],
      tests:["instrução maliciosa no documento e na pergunta","PII na resposta","resposta sem citação","modelo lento/fora do ar","mudança de idioma e texto muito longo"],
      failures:["desligue guard de saída","mude prompt sem atualizar versão","execute 30 chamadas simultâneas","alimente fonte conflitante"],
      questions:["Qual risco é detectável automaticamente?","LLM-as-judge avalia a si próprio com qual viés?","Guardrail pode virar bypass?","Quem aprova ação irreversível?"],
      ladder:["dataset e relatório local","guards, fallbacks e adversarial suite","gate de CI, feedback loop, ownership e incident playbook"],
      evidence:["threat model e risk register","relatório antes/depois","ADR sobre métricas/limiares","runbook de incidente de IA"],
      cost:"R$ 0 com modelos locais; monitore apenas recurso da máquina.",command:"mkdir ai-eval-bench && cd ai-eval-bench && git init && mvn -N wrapper:wrapper"
    });
    P({
      id:"I04",area:"ai",difficulty:"Avançado",sessions:9,title:"Agente de suporte com ferramentas seguras",
      summary:"Construa um agente Spring que consulta pedidos por ferramentas explícitas, respeita o tenant e interrompe ações fora da política.",
      problem:"Um assistente precisa responder sobre pedidos usando dados atuais. O modelo pode propor ferramenta inexistente, argumento inválido, pedido de outro cliente ou ação que altera o estado; nenhuma dessas decisões pode ser confiada ao prompt.",
      why:"Tool calling conecta linguagem a sistemas reais, mas cria uma fronteira de segurança e confiabilidade. O modelo escolhe uma ferramenta dentre as descritas; o backend continua responsável por autenticação, autorização, validação, execução, limites e registro do resultado.",
      learns:["Spring AI ChatClient e ciclo de tool calling","contratos de ferramenta pequenos e tipados","autorização por usuário e tenant no serviço","separação entre consulta e ação com efeito","limite de iterações, timeout e orçamento","idempotência, confirmação humana e auditoria","testes determinísticos sem depender da resposta exata do modelo"],
      architecture:["Usuário autenticado","API Spring","ChatClient","Policy + Tool Registry","OrderQuery Service","Resposta com evidência"],
      prerequisites:["I02 ou saída estruturada básica","Spring Security e injeção de dependência","HTTP, DTOs e testes com JUnit","Docker e noção de Testcontainers"],
      stack:["Java 21","Spring Boot","Spring AI","Ollama local","PostgreSQL","Spring Security","JUnit + Testcontainers"],
      steps:["Modele pedidos fictícios para dois usuários/tenants e defina quais campos cada um pode consultar.","Implemente primeiro um endpoint comum de consulta autenticada sem LLM; prove isolamento entre tenants com testes.","Confirme na documentação da versão usada se o provider e o modelo local suportam tool calling. Se não suportarem, use um modelo falso para validar a orquestração; não trate texto livre como chamada executável.","Defina ferramentas pequenas, como consultarPedido(numero), sem aceitar SQL, URL ou nome de método arbitrário.","Registre ferramentas no ChatClient e faça o backend validar argumentos e contexto antes de chamar o serviço de domínio.","Retorne ao modelo apenas os dados mínimos necessários; não exponha tokens, dados de outro tenant ou campos internos.","Limite chamadas, iterações e tempo total; trate ferramenta indisponível e argumentos inválidos com resultado explícito.","Mantenha a primeira versão somente de leitura. Para uma ação simulada, exija confirmação humana e use chave de idempotência.","Registre trace id, ferramenta, duração, resultado permitido/negado e versão do modelo sem guardar prompt sensível por padrão.","Escreva testes de política com modelo falso e testes de integração com o modelo local; compare também resposta sem evidência e tentativa de injection."],
      acceptance:["Usuário A nunca lê pedido do tenant B, mesmo se o modelo solicitar","nenhuma ferramenta permite SQL livre ou operação não registrada","argumentos são validados no backend antes da execução","limite interrompe loop e registra motivo","resposta distingue dado consultado de inferência e informa ausência de evidência","ação que altera estado não executa sem confirmação explícita","testes centrais rodam sem modelo e sem chave paga"],
      tests:["modelo solicita pedido de outro tenant","argumento ausente, malformado ou excessivamente longo","modelo repete a mesma ferramenta até o limite","ferramenta retorna vazio, timeout ou erro","texto do pedido contém instrução de prompt injection","usuário não autenticado tenta chamar a API","confirmação de ação é repetida com a mesma chave idempotente"],
      failures:["remova a verificação de tenant e veja o teste falhar","desligue o limite de iterações em teste com relógio/contador controlado","simule timeout do modelo e da ferramenta separadamente","retorne dado pessoal extra e confira se o minimizador o descarta"],
      questions:["Quem realmente executa a chamada pedida pelo modelo?","Por que schema válido não significa permissão válida?","Qual dado deve voltar ao modelo e qual deve permanecer no serviço?","Como provar que uma ação não foi executada duas vezes?","O que o usuário vê quando a consulta não encontra evidência?"],
      ladder:["consulta autenticada + ferramenta read-only","limites, auditoria, isolamento e testes adversariais","aprovação de ações, observabilidade e evals de trajetória"],
      evidence:["diagrama do fluxo de tool calling e da fronteira de autorização","testes automatizados de isolamento entre tenants","registro de uma chamada permitida, negada e interrompida","threat model curto e ADR sobre ações read-only","README com execução local e teardown"],
      cost:"R$ 0 com Ollama, PostgreSQL e Docker locais; o custo é CPU/RAM/energia. Não use dados reais.",command:"spring init --java-version=21 --build=maven --dependencies=web,security,jdbc,actuator agent-support"
    });
    P({
      id:"R01",area:"rabbit",difficulty:"Intermediário",sessions:7,title:"Ateliê de topologias RabbitMQ",
      summary:"Modele direct, topic, fanout, bindings e mensagens não roteáveis antes de escrever consumer de negócio.",
      problem:"Eventos precisam chegar a consumidores diferentes sem o produtor conhecer filas. Uma routing key errada não pode simplesmente desaparecer sem diagnóstico.",
      why:"RabbitMQ roteia por exchange e binding; fila é destino de consumo. Entender a topologia evita usar o broker como uma caixa preta.",
      learns:["connection, channel, virtual host e topology","direct, topic, fanout e default exchange","queue/exchange durability, exclusive e auto-delete","routing key, binding e wildcard","mandatory, returns e alternate exchange","declaração idempotente com Spring AMQP"],
      architecture:["Spring Publisher","Exchange","Bindings","Queues A/B","Unroutable Sink"],
      prerequisites:["Docker","Spring básico","JSON e eventos"],
      stack:["Java 21","Spring Boot","Spring AMQP","RabbitMQ","Testcontainers"],
      steps:["Suba RabbitMQ Management local e desenhe a topologia antes de declarar.","Implemente três eventos e uma exchange direct; preveja a rota no papel.","Troque para topic e teste * versus # com tabela de casos.","Crie fanout separado para auditoria e explique cópias.","Ative mandatory e capture publisher return para mensagem sem rota.","Adicione alternate exchange e compare responsabilidades.","Declare tudo por beans Spring AMQP e prove reinício idempotente.","Crie contract test em RabbitMQ real com Testcontainers."],
      acceptance:["Produtor publica em exchange, não conhece fila de consumer","Tabela de routing keys prevê todos os destinos","Mensagem sem rota é observável","Restart não quebra por declaração divergente","Teste usa broker real efêmero"],
      tests:["routing key exata e wildcard","nenhum binding","declaração com argumento incompatível","exchange inexistente","mensagem maior que limite definido"],
      failures:["remova binding em runtime","declare exchange com tipo diferente","delete fila e reinicie aplicação","publique com mandatory desligado"],
      questions:["Exchange guarda mensagem?","Durable resolve perda sozinho?","Return e confirm respondem a perguntas diferentes?","Quem é dono da fila e binding?"],
      ladder:["direct/topic e consumers","returns, alternate exchange e contract tests","ownership, versionamento, métricas e políticas"],
      evidence:["diagrama de cada topologia","tabela routing key → queues","captura de return/unroutable","README com docker compose e smoke test"],
      cost:"R$ 0 com RabbitMQ local.",command:"spring init --java-version=21 --build=maven --dependencies=amqp,actuator rabbit-topology-lab"
    });
    P({
      id:"R02",area:"rabbit",difficulty:"Avançado",sessions:9,title:"Consumer sob pressão",
      summary:"Controle ack, prefetch, concorrência, retry e DLQ enquanto mensagens lentas, duplicadas e venenosas chegam.",
      problem:"Um consumidor rápido sobrecarrega memória; um consumidor lento prende backlog; uma mensagem inválida cria loop infinito. Reinício pode redeliver mensagem já vista.",
      why:"Consumer ack e publisher confirm são mecanismos ortogonais. Confiabilidade exige tratar cada fronteira e aceitar redelivery com idempotência.",
      learns:["manual ack/nack/reject e redelivery","prefetch como janela de mensagens em voo","consumer concurrency versus ordering","retry com backoff e poison message","DLX/DLQ, TTL e risco de ciclo","quorum queue e limites de garantia"],
      architecture:["Publisher","Exchange","Work Queue","Consumers × N","Retry/DLX","DLQ"],
      prerequisites:["R01","threads e transações básicas","métricas"],
      stack:["Java 21","Spring Boot","Spring AMQP","RabbitMQ","Micrometer","Testcontainers"],
      steps:["Crie worker com tempo variável e idempotency key persistida.","Configure manual ack somente depois do efeito confirmado.","Meça throughput/heap com prefetch 1, 10, 100 e concorrência controlada.","Mate consumer antes/depois do efeito para observar redelivery.","Separe falha transitória de permanente; aplique retry com atraso limitado.","Configure DLX/DLQ por policy quando possível e inclua reason/context.","Crie ferramenta de inspeção e replay, nunca auto-replay infinito.","Compare classic e quorum queue no que o laboratório consegue provar.","Alerte por age do backlog e crescimento da DLQ."],
      acceptance:["Consumer reiniciado não perde efeito nem duplica efeito de negócio","Prefetch escolhido tem evidência","Poison message termina na DLQ","Replay conserva idempotência","Dashboard mostra throughput, unacked, backlog age e failures"],
      tests:["crash antes e depois do commit","mensagem duplicada","processing maior que timeout relevante","payload inválido","DLQ indisponível/ciclo de dead letter"],
      failures:["prefetch ilimitado","ack automático antes do efeito","requeue infinito","dez consumers para uma ordem estrita","pare nó/broker local"],
      questions:["Ack confirma processamento para quem?","Confirm garante consumo?","Como prefetch afeta RAM e fairness?","DLQ padrão garante zero perda em todo cenário?"],
      ladder:["manual ack e worker","prefetch medido, retry e DLQ","quorum, replay governado, alertas e game day"],
      evidence:["gráfico prefetch versus throughput/memória","timeline de redelivery","policy DLX e fluxo de replay","ADR de queue type e ordering"],
      cost:"R$ 0 local. RabbitMQ oficial alerta que dead-lettering padrão pode falhar no republish; quorum queues oferecem opção at-least-once em condições documentadas.",command:"spring init --java-version=21 --build=maven --dependencies=amqp,jdbc,actuator reliable-consumer"
    });
    P({
      id:"R03",area:"rabbit",difficulty:"Avançado",sessions:12,title:"OrderFlow: outbox até produção",
      summary:"Capstone: transação no banco, publicação confiável, consumidor idempotente, IA opcional e operação em Kubernetes local.",
      problem:"Ao confirmar uma transferência, banco pode commitar e publish falhar — ou publish ocorrer e resposta sumir. Serviços downstream precisam processar duplicatas sem repetir efeito.",
      why:"O capstone integra Java, Spring, SQL, RabbitMQ, observabilidade, containers e um adapter opcional de IA/Cloud. O objetivo é explicar garantias de ponta a ponta, não prometer exactly-once.",
      learns:["transactional outbox e relay","publisher confirms/returns versus consumer acknowledgements","inbox/idempotent consumer","event versioning e choreography","backpressure, observability e recovery","deploy local em Kubernetes e runbook integrado"],
      architecture:["Transfer API + DB/Outbox","Relay","RabbitMQ","Ledger Consumer + Inbox","Notifier/AI","Observability"],
      prerequisites:["S02, S03, R01 e R02","Docker/Kubernetes local","SQL transacional"],
      stack:["Java 21","Spring Boot","JdbcTemplate","PostgreSQL","RabbitMQ","Testcontainers","Docker","kind","Spring AI opcional"],
      steps:["Defina o boundary: transferência e outbox são gravadas na mesma transação.","Crie schema versionado TransferCompleted v1 sem classe interna vazada.","Implemente relay concorrente com claim/lock, batch e retry.","Use publisher confirms; marque outbox enviada somente após confirmação adequada.","Implemente consumer com inbox unique(event_id) e efeito na mesma transação.","Adicione notifier; IA classifica descrição apenas como enrichment opcional e falível.","Instrumente outbox lag, publish failure, redelivery, inbox duplicate e DLQ age.","Teste crash em cada janela entre commit, publish, ack e resposta.","Empacote componentes e Rabbit/Postgres local; depois leve apps ao kind.","Execute game day e recupere backlog/DLQ com runbook.","Registre garantias reais e lacunas em ADR, sem usar palavra exactly-once sem escopo."],
      acceptance:["Commit de negócio sempre deixa evento recuperável","Publish duplicado não duplica efeito downstream","Falha de IA não bloqueia transferência","Backlog recupera após broker voltar","Game day conclui com dados reconciliados e métricas normais"],
      tests:["crash depois do commit antes do relay","confirm atrasado e relay reiniciado","consumer crash depois do efeito antes do ack","evento v1 desconhecido","10 mil eventos com consumidor lento"],
      failures:["broker fora por cinco minutos","DB do consumer indisponível","evento venenoso no meio do lote","pod relay morto durante claim","modelo Ollama fora do ar"],
      questions:["Qual transação cobre cada fronteira?","Onde duplicata ainda pode nascer?","Por que outbox não cria exactly-once global?","Como medir tempo do commit até efeito final?"],
      ladder:["outbox + relay + consumer","confirms, inbox, DLQ e métricas","kind, game day, schema governance, runbook e SLO"],
      evidence:["diagrama de todas as janelas de falha","ADR das garantias e trade-offs","dashboard com lag/redelivery/DLQ","relatório do game day e consulta de reconciliação","demo de cinco minutos reproduzível"],
      cost:"R$ 0 com PostgreSQL, RabbitMQ, Ollama e kind locais. Adapter Cloud permanece opcional.",command:"mkdir orderflow-capstone && cd orderflow-capstone && git init && printf \"# OrderFlow Capstone\\n\" > README.md"
    });
    /* A rota prioriza fundamentos e fronteiras antes de provedores e IA:
       Java → Spring → Cloud agnóstica → AWS → mensageria → IA. */
    var areaOrder={java:0,spring:1,cloud:2,aws:3,rabbit:4,ai:5};
    projects.sort(function(a,b){return areaOrder[a.area]-areaOrder[b.area];});

    var stateKey="site.projetos.lab.v1";
    var stored={done:[],notes:{}};
    try{stored=Object.assign(stored,JSON.parse(localStorage.getItem(stateKey)||"{}"));}catch(ignore){}
    var grid=document.getElementById("projectGrid");
    var route=document.getElementById("route");
    var dialog=document.getElementById("projectDialog");
    var currentProject=null;
    var difficultyRank={"Fundação":1,"Intermediário":2,"Avançado":3};
    function save(){try{localStorage.setItem(stateKey,JSON.stringify(stored));}catch(ignore){}updateProgress();}
    function esc(value){return String(value).replace(/[&<>"']/g,function(c){return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c];});}
    function list(items,classes){return '<ul class="list '+(classes||"")+'">'+items.map(function(x){return"<li>"+esc(x)+"</li>";}).join("")+"</ul>";}
    function info(title,content,wide){return '<section class="info-shell '+(wide?"wide":"")+'"><div class="info"><h3>'+esc(title)+'</h3>'+content+"</div></section>";}
    function architectureSvg(nodes){
      var w=760,h=260,step=w/(nodes.length+1),parts=['<svg viewBox="0 0 '+w+' '+h+'" role="img" aria-label="Arquitetura do projeto"><defs><marker id="dialogArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="var(--dialog-accent)"></path></marker></defs>'];
      nodes.forEach(function(n,i){
        var x=step*(i+1),y=i%2===0?90:165;
        if(i<nodes.length-1){var nx=step*(i+2),ny=(i+1)%2===0?90:165;parts.push('<path class="wire" marker-end="url(#dialogArrow)" d="M'+(x+52)+' '+y+' C'+(x+82)+' '+y+' '+(nx-82)+' '+ny+' '+(nx-52)+' '+ny+'"></path>');}
        parts.push('<rect class="node" x="'+(x-52)+'" y="'+(y-31)+'" width="104" height="62" rx="16"></rect><text x="'+x+'" y="'+(y-3)+'" text-anchor="middle">'+esc(n.length>17?n.slice(0,16)+"…":n)+'</text><text x="'+x+'" y="'+(y+15)+'" text-anchor="middle" opacity=".45">'+String(i+1).padStart(2,"0")+"</text>");
      });
      return parts.join("")+"</svg>";
    }
    /* Onde está a teoria: a ponte entre a bancada e os documentos do acervo. */
    function teoriaHtml(id){
      var refs=TEORIA[id]||[];
      if(!refs.length)return "<p>Ainda sem documento de teoria correspondente.</p>";
      return '<div class="teoria">'+refs.map(function(r){
        var d=D[r[0]];
        return '<a class="tlink" href="'+d[1]+'"><b>'+esc(d[0])+'</b><i aria-hidden="true">↗</i><span>'+esc(r[1])+'</span></a>';
      }).join("")+'</div>';
    }
    function teoriaChip(id){
      var refs=TEORIA[id]||[];
      return refs.length?'<span class="chip tc">teoria: '+esc(D[refs[0][0]][2])+'</span>':"";
    }
    function renderRoute(){
      route.innerHTML=projects.map(function(p,i){return '<button type="button" data-open="'+p.id+'" class="'+(stored.done.indexOf(p.id)>-1?"done ":"")+'" aria-label="Abrir '+esc(p.id+" "+p.title)+'">'+String(i+1).padStart(2,"0")+"</button>";}).join("");
    }
    function card(p){
      var a=areas[p.area],done=stored.done.indexOf(p.id)>-1;
      var flow=p.architecture.map(function(n,i){return (i?'<i aria-hidden="true">›</i>':"")+"<span>"+esc(n)+"</span>";}).join("");
      return '<article class="project-wrap bezel '+(done?"done ":"")+'" data-id="'+p.id+'" data-area="'+p.area+'" data-difficulty="'+p.difficulty+'" style="--accent:'+a.accent+';--glow:'+a.glow+'"><button class="project core" type="button" data-open="'+p.id+'" aria-label="Abrir ficha do projeto '+esc(p.title)+'"><div class="project-top"><span class="project-number">'+p.id+" / "+String(projects.indexOf(p)+1).padStart(2,"0")+'</span><span class="complete-dot" aria-label="'+(done?"Concluído":"Pendente")+'">✓</span></div><span class="area-tag">'+esc(a.label)+'</span><h3>'+esc(p.title)+'</h3><p class="project-desc">'+esc(p.summary)+'</p><div class="mini-flow">'+flow+'</div><div class="project-foot"><div class="meta"><span class="chip">'+esc(p.difficulty)+'</span><span class="chip">'+p.sessions+' sessões</span>'+teoriaChip(p.id)+'</div><span class="open-icon" aria-hidden="true">↗</span></div></button></article>';
    }
    function filtered(){
      var q=document.getElementById("search").value.trim().toLocaleLowerCase("pt-BR");
      var area=document.getElementById("area").value;
      var diff=document.getElementById("difficulty").value;
      var sort=document.getElementById("sort").value;
      var result=projects.filter(function(p){
        var hay=[p.id,p.title,p.summary,areas[p.area].label,p.stack.join(" "),p.learns.join(" ")].join(" ").toLocaleLowerCase("pt-BR");
        return(!q||hay.indexOf(q)>-1)&&(area==="all"||p.area===area)&&(diff==="all"||p.difficulty===diff);
      });
      if(sort==="sessions")result.sort(function(a,b){return a.sessions-b.sessions;});
      if(sort==="difficulty")result.sort(function(a,b){return difficultyRank[a.difficulty]-difficultyRank[b.difficulty]||projects.indexOf(a)-projects.indexOf(b);});
      if(sort==="title")result.sort(function(a,b){return a.title.localeCompare(b.title,"pt-BR");});
      return result;
    }
    function render(){
      var result=filtered();
      grid.innerHTML=result.length?result.map(card).join(""):'<div class="empty">Nenhum projeto corresponde aos filtros. Limpe a busca ou escolha outra oficina.</div>';
      observeReveals();
    }
    /* Aquecimentos: mesma ordem de oficinas dos projetos. */
    function renderPracs(){
      var sorted=pracs.slice().sort(function(a,b){return areaOrder[a.area]-areaOrder[b.area]||a.id.localeCompare(b.id);});
      document.getElementById("pracGrid").innerHTML=sorted.map(function(x){
        var a=areas[x.area];
        return '<details class="prac reveal" style="--pc:'+a.accent+'">'
          +'<summary><span class="prac-top"><span>'+x.id+' · '+esc(a.label)+'</span><span class="prac-min">'+x.min+' min</span></span><h3>'+esc(x.t)+'</h3></summary>'
          +'<div class="prac-body">'
          +'<div><h4>Faça</h4><p>'+esc(x.f)+'</p></div>'
          +'<div><h4>O que você vai ver quebrar</h4><p>'+esc(x.q)+'</p></div>'
          +'<div><h4>Pronto quando</h4><p>'+esc(x.k)+'</p></div>'
          +'<div class="prac-prep"><em>degrau para</em>'+x.prep.map(function(id){return '<button type="button" data-open="'+id+'">'+id+'</button>';}).join("")+'</div>'
          +'</div></details>';
      }).join("");
    }
    var lastActiveElement=null;
    function openProject(id,fromHash){
      var p=projects.find(function(x){return x.id===id;});if(!p)return;
      lastActiveElement=document.activeElement;
      currentProject=p;
      var a=areas[p.area];
      dialog.style.setProperty("--dialog-accent",a.accent);
      document.getElementById("dialogKicker").textContent=p.id+" · "+a.label+" · "+p.difficulty+" · "+p.sessions+" sessões";
      document.getElementById("dialogTitle").textContent=p.title;
      var body="";
      body+='<div class="dialog-summary">'+info("Problema real",'<p>'+esc(p.problem)+'</p><p><b>Por que construir:</b> '+esc(p.why)+"</p>")+info("Arquitetura desenhada",'<div class="architecture">'+architectureSvg(p.architecture)+"</div>")+"</div>";
      body+=info("Onde está a teoria",teoriaHtml(p.id),true);
      body+='<div class="detail-grid">';
      body+=info("O que você aprende",list(p.learns));
      body+=info("Pré-requisitos + stack",'<p><b>Antes:</b></p>'+list(p.prerequisites)+'<p style="margin-top:17px"><b>Ferramentas:</b></p>'+list(p.stack));
      body+=info("Etapas executáveis",list(p.steps,"steps"),true);
      body+=info("Critérios de aceite",list(p.acceptance));
      body+=info("Testes obrigatórios",list(p.tests));
      body+=info("Falhas para injetar",list(p.failures));
      body+=info("Perguntas que você precisa responder",list(p.questions));
      body+=info("Ladder de evolução",'<div class="ladder"><div class="rung"><b>MVP</b><span>'+esc(p.ladder[0])+'</span></div><div class="rung"><b>Robusto</b><span>'+esc(p.ladder[1])+'</span></div><div class="rung"><b>Produção</b><span>'+esc(p.ladder[2])+"</span></div></div>",true);
      body+=info("Evidências no repositório",list(p.evidence));
      body+=info("Custo e segurança",'<div class="cost-alert">'+esc(p.cost)+'</div><p style="margin-top:15px"><b>Estimativa:</b> '+p.sessions+" sessões focadas de 90–150 minutos.</p>");
      body+=info("Comando inicial",'<div class="command"><code>'+esc(p.command)+'</code><button class="copy" type="button" data-copy="'+esc(p.command)+'">Copiar</button></div>',true);
      body+=info("Sua bancada",'<div class="workspace"><label class="done-control"><input id="modalDone" type="checkbox" '+(stored.done.indexOf(p.id)>-1?"checked":"")+'><span>Marcar '+p.id+' como concluído</span></label><div class="notes"><label for="projectNotes">Notas, descobertas e próximo passo</label><textarea id="projectNotes" placeholder="Ex.: deadlock reproduzido; falta comparar isolamento…">'+esc(stored.notes[p.id]||"")+"</textarea></div></div>",true);
      body+="</div>";
      document.getElementById("dialogBody").innerHTML=body;
      if(!dialog.open)dialog.showModal();
      dialog.querySelector(".dialog-core").scrollTop=0;
      var closeBtn=document.getElementById("closeDialog");
      if(closeBtn)closeBtn.focus();
      if(!fromHash&&location.hash!=="#project-"+p.id)history.pushState(null,"","#project-"+p.id);
      document.getElementById("modalDone").addEventListener("change",function(e){
        var ix=stored.done.indexOf(p.id);
        if(e.target.checked&&ix<0)stored.done.push(p.id);
        if(!e.target.checked&&ix>-1)stored.done.splice(ix,1);
        save();render();renderRoute();
      });
      document.getElementById("projectNotes").addEventListener("input",function(e){stored.notes[p.id]=e.target.value;save();});
    }
    function closeProject(){
      if(dialog.open)dialog.close();
      currentProject=null;
      if(location.hash.indexOf("#project-")===0)history.replaceState(null,"",location.pathname+location.search);
      if(lastActiveElement&&typeof lastActiveElement.focus==="function"){lastActiveElement.focus();}
    }
    function updateProgress(){
      var count=stored.done.length;
      document.getElementById("progressLabel").textContent=count+" de "+projects.length+" missões";
      document.getElementById("progressFill").style.transform="scaleX("+(count/projects.length)+")";
      document.getElementById("heroDone").textContent=count+"/"+projects.length;
      var next=projects.find(function(p){return stored.done.indexOf(p.id)<0;});
      document.getElementById("heroNext").textContent=next?next.id:"DONE";
    }
    function continueNext(){
      var next=projects.find(function(p){return stored.done.indexOf(p.id)<0;})||projects[projects.length-1];
      openProject(next.id,false);
    }
    function showToast(text){
      var t=document.getElementById("toast");t.textContent=text;t.classList.add("show");
      clearTimeout(showToast.timer);showToast.timer=setTimeout(function(){t.classList.remove("show");},1600);
    }
    function copyText(value){
      function fallback(){
        var field=document.createElement("textarea");
        field.value=value;field.setAttribute("readonly","");field.style.position="fixed";field.style.opacity="0";
        document.body.appendChild(field);field.select();
        try{document.execCommand("copy");showToast("Comando copiado");}catch(ignore){showToast("Selecione o comando e copie");}
        field.remove();
      }
      if(navigator.clipboard&&window.isSecureContext){
        navigator.clipboard.writeText(value).then(function(){showToast("Comando copiado");}).catch(fallback);
      }else{fallback();}
    }
    function observeReveals(){
      var els=document.querySelectorAll(".reveal:not(.in)");
      if(matchMedia("(prefers-reduced-motion: reduce)").matches){els.forEach(function(el){el.classList.add("in");});return;}
      var io=new IntersectionObserver(function(entries,observer){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");observer.unobserve(e.target);}});},{threshold:.08,rootMargin:"0px 0px -30px"});
      els.forEach(function(el){io.observe(el);});
    }
    ["java","spring","cloud","aws","rabbit","ai"].forEach(function(key){var o=document.createElement("option");o.value=key;o.textContent=areas[key].label;document.getElementById("area").appendChild(o);});
    ["search","area","difficulty","sort"].forEach(function(id){document.getElementById(id).addEventListener(id==="search"?"input":"change",render);});
    document.addEventListener("click",function(e){
      var opener=e.target.closest("[data-open]");if(opener){openProject(opener.getAttribute("data-open"),false);return;}
      var copier=e.target.closest("[data-copy]");if(copier){copyText(copier.getAttribute("data-copy"));}
    });
    document.getElementById("closeDialog").addEventListener("click",closeProject);
    dialog.addEventListener("click",function(e){if(e.target===dialog)closeProject();});
    dialog.addEventListener("close",function(){if(location.hash.indexOf("#project-")===0)history.replaceState(null,"",location.pathname+location.search);});
    window.addEventListener("keydown",function(e){if(e.key==="Escape"&&dialog.open){closeProject();}});
    document.getElementById("continueBtn").addEventListener("click",continueNext);
    window.addEventListener("hashchange",function(){var m=location.hash.match(/^#project-([A-Z]\d{2})$/);if(m)openProject(m[1],true);else if(dialog.open)dialog.close();});
    renderPracs();renderRoute();render();updateProgress();observeReveals();
    var initial=location.hash.match(/^#project-([A-Z]\d{2})$/);if(initial)openProject(initial[1],true);
  })();

