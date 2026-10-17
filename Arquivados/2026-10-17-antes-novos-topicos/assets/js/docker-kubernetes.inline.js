/* Extraido de trilhas/docker-kubernetes.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 4 ---------- */

function W(h,inner){return '<figure class="dg"><svg viewBox="0 0 340 '+h+'" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg></figure>';}
var DG={
 cvm:W(114,'<rect x="6" y="16" width="150" height="92" rx="9" class="bx"/><text x="81" y="30" class="bs">Máquinas virtuais</text><rect x="16" y="38" width="60" height="42" rx="5" class="sf"/><text x="46" y="54" class="bs">App A</text><text x="46" y="66" class="bs">SO convidado</text><rect x="86" y="38" width="60" height="42" rx="5" class="sf"/><text x="116" y="54" class="bs">App B</text><text x="116" y="66" class="bs">SO convidado</text><text x="81" y="94" class="bs">hypervisor + SO + hardware</text><rect x="184" y="16" width="150" height="92" rx="9" class="sf"/><text x="259" y="30" class="bs">Containers</text><rect x="192" y="38" width="44" height="30" rx="5" class="bx"/><text x="214" y="56" class="bs">App A</text><rect x="240" y="38" width="44" height="30" rx="5" class="bx"/><text x="262" y="56" class="bs">App B</text><rect x="288" y="38" width="40" height="30" rx="5" class="bx"/><text x="308" y="56" class="bs">App C</text><text x="259" y="82" class="bs">compartilham o kernel do SO</text><text x="259" y="96" class="bs">sem SO convidado = leve e rápido</text>'),
 layers:W(110,'<rect x="88" y="14" width="164" height="18" rx="4" class="bx"/><text x="170" y="27" class="bs">CMD / código da sua app</text><rect x="88" y="34" width="164" height="18" rx="4" class="bx"/><text x="170" y="47" class="bs">COPY dependências</text><rect x="88" y="54" width="164" height="18" rx="4" class="sf"/><text x="170" y="67" class="bs">RUN instala pacotes</text><rect x="88" y="74" width="164" height="18" rx="4" class="sf"/><text x="170" y="87" class="bs">FROM imagem base</text><text x="170" y="106" class="bs">cada instrução vira uma camada cacheável (base embaixo)</text>'),
 k8sarch:W(120,'<rect x="6" y="16" width="150" height="92" rx="9" class="sf"/><text x="81" y="30" class="bs">Control plane</text><rect x="14" y="36" width="66" height="20" rx="4" class="bx"/><text x="47" y="49" class="bs">api-server</text><rect x="86" y="36" width="62" height="20" rx="4" class="bx"/><text x="117" y="49" class="bs">etcd</text><rect x="14" y="60" width="66" height="20" rx="4" class="bx"/><text x="47" y="73" class="bs">scheduler</text><rect x="86" y="60" width="62" height="20" rx="4" class="bx"/><text x="117" y="73" class="bs">controllers</text><text x="81" y="98" class="bs">decide o estado desejado</text><path d="M156,62 L184,62" class="ln"/><path d="M184,62 L178,59 L178,65 Z" class="hd"/><rect x="186" y="16" width="148" height="92" rx="9" class="sf"/><text x="260" y="30" class="bs">Worker nodes</text><rect x="194" y="36" width="64" height="24" rx="5" class="bx"/><text x="226" y="51" class="bs">kubelet</text><rect x="262" y="36" width="64" height="24" rx="5" class="bx"/><text x="294" y="51" class="bs">kube-proxy</text><rect x="210" y="66" width="104" height="30" rx="6" class="bx"/><text x="262" y="80" class="bs">Pods (containers)</text><text x="262" y="92" class="bs">onde sua app roda</text>'),
 svc:W(106,'<rect x="8" y="40" width="66" height="28" rx="7" class="sf"/><text x="41" y="58" class="bs">cliente</text><path d="M74,54 L94,54" class="ln"/><path d="M94,54 L88,51 L88,57 Z" class="hd"/><rect x="96" y="36" width="80" height="36" rx="8" class="sf"/><text x="136" y="52" class="bt">Service</text><text x="136" y="65" class="bs">IP fixo + DNS</text><path d="M176,44 L210,26" class="ln"/><path d="M176,54 L210,54" class="ln"/><path d="M176,64 L210,82" class="ln"/><rect x="212" y="16" width="70" height="22" rx="5" class="bx"/><text x="247" y="31" class="bs">Pod</text><rect x="212" y="43" width="70" height="22" rx="5" class="bx"/><text x="247" y="58" class="bs">Pod</text><rect x="212" y="70" width="70" height="22" rx="5" class="bx"/><text x="247" y="85" class="bs">Pod</text><text x="170" y="101" class="bs">o Service acha os Pods por label e balanceia (Pods vão e voltam)</text>'),
 rollout:W(98,'<text x="55" y="18" class="bs">v1 rodando</text><rect x="12" y="24" width="26" height="20" rx="4" class="sf"/><rect x="42" y="24" width="26" height="20" rx="4" class="sf"/><rect x="72" y="24" width="26" height="20" rx="4" class="sf"/><path d="M104,36 L128,36" class="ln"/><path d="M128,36 L122,33 L122,39 Z" class="hd"/><text x="182" y="18" class="bs">troca 1 a 1</text><rect x="140" y="24" width="26" height="20" rx="4" class="sf"/><rect x="170" y="24" width="26" height="20" rx="4" class="bx" style="stroke:var(--green)"/><rect x="200" y="24" width="26" height="20" rx="4" class="sf"/><path d="M232,36 L256,36" class="ln"/><path d="M256,36 L250,33 L250,39 Z" class="hd"/><text x="298" y="18" class="bs">v2</text><rect x="268" y="24" width="26" height="20" rx="4" class="bx" style="stroke:var(--green)"/><rect x="298" y="24" width="26" height="20" rx="4" class="bx" style="stroke:var(--green)"/><text x="170" y="64" class="bs">substitui um Pod por vez: nunca fica fora do ar</text><text x="170" y="80" class="bs">deu ruim? o rollback volta para a v1</text>')
};

var T=[
{g:"01",n:"Por que containers",s:"o problema que Docker resolve",c:"var(--teal)",cs:"var(--teal-soft)",items:[
 {t:"Container vs VM",x:"a diferença",oq:"Container empacota a app e suas dependências e compartilha o kernel do SO; VM carrega um sistema operacional inteiro por cima de um hypervisor.",ps:"Rodar muitos serviços leves e iguais em qualquer máquina, subindo em segundos em vez de minutos.",cf:"Sem SO convidado, o container é megabytes e sobe instantâneo. O isolamento vem do próprio kernel (namespaces e cgroups), não de hardware virtualizado.",ex:"# VM: liga um SO completo (GBs, minutos)\n# Container: processo isolado (MBs, segundos)\ndocker run hello-world",dg:"cvm"},
 {t:"Imagem vs container",x:"molde e instância",oq:"Imagem é o pacote imutável (molde, só leitura); container é uma instância em execução dessa imagem.",ps:"Distribuir a app uma vez (imagem) e subir quantas cópias quiser (containers).",cf:"Uma imagem gera N containers. O container adiciona uma camada gravável por cima da imagem; ao remover o container, essa camada some (por isso volumes existem).",ex:"docker pull nginx        # baixa a imagem\ndocker run nginx          # cria um container\ndocker run nginx          # outro container, mesma imagem"},
 {t:"Namespaces & cgroups",x:"o isolamento por baixo",oq:"Recursos do kernel Linux: namespaces isolam o que o processo vê (PIDs, rede, arquivos); cgroups limitam o que ele usa (CPU, memória).",ps:"Entender que container não é mágica nem VM — é um processo do host com fronteiras impostas pelo kernel.",cf:"O Docker só orquestra esses recursos. Por isso container Linux precisa de kernel Linux (no Windows/Mac roda numa VM leve por baixo).",ex:"# um container é um processo do host, isolado:\nps aux | grep nginx     # aparece no host também"},
 {t:"Container runtime",x:"quem roda de fato",oq:"O runtime (containerd, e o runc por baixo) é o que realmente cria e executa o container a partir da imagem.",ps:"Saber que Docker é a experiência de usuário; containerd faz o trabalho — e é o mesmo runtime que o Kubernetes usa.",cf:"Docker Engine = CLI + daemon + containerd. O Kubernetes fala com o runtime via CRI (Container Runtime Interface), muitas vezes containerd direto, sem o Docker completo.",ex:"# docker é a camada amigável;\n# containerd/runc executam o container\ndocker info | grep -i runtime"}
]},
{g:"02",n:"Docker: o básico",s:"rodar, ver e gerenciar containers",c:"var(--blue)",cs:"var(--blue-soft)",items:[
 {t:"docker run",x:"o comando central",oq:"Cria e inicia um container a partir de uma imagem (baixando-a se preciso).",ps:"Subir qualquer serviço com um comando, sem instalar nada no host.",cf:"Flags essenciais: -d roda ao fundo, --name dá um nome, -e passa variável, -p publica porta, -v monta volume. Sem imagem local, ele faz pull.",ex:"docker run -d --name web -p 8080:80 nginx\n# -d: ao fundo | --name: nome | -p host:container"},
 {t:"Portas (-p)",x:"acessar de fora",oq:"Publica uma porta do container numa porta do host (-p host:container).",ps:"Acessar o serviço do container pelo navegador ou por outro app no host.",cf:"Sem -p, a porta só existe dentro da rede do Docker. -p 8080:80 manda o tráfego do host:8080 para o container:80.",ex:"docker run -p 8080:8080 minha-api\n# abre http://localhost:8080"},
 {t:"ps, logs, exec",x:"inspecionar",oq:"ps lista containers, logs mostra a saída, exec entra num container em execução.",ps:"Investigar o que está rodando e depurar sem parar o container — o dia a dia do troubleshooting.",cf:"docker ps (-a inclui parados); docker logs -f segue a saída; docker exec -it abre um shell dentro do container.",ex:"docker ps -a\ndocker logs -f web\ndocker exec -it web sh   # shell dentro do container"},
 {t:"stop, rm & prune",x:"limpar",oq:"stop para, rm remove container, prune limpa o que não está em uso.",ps:"Container e imagem acumulam e comem disco; limpar é parte da higiene.",cf:"Pare antes de remover (ou rm -f). docker image prune e docker system prune liberam espaço. Container é descartável — recrie em vez de consertar.",ex:"docker stop web && docker rm web\ndocker system prune -a   # cuidado: remove tudo sem uso"},
 {t:"CLI & daemon",x:"como o Docker é feito",oq:"O docker (CLI) manda comandos para o Docker daemon (dockerd), que gerencia imagens, containers e redes.",ps:"Entender erros de 'cannot connect to the Docker daemon' e o modelo cliente-servidor.",cf:"O daemon roda como serviço; a CLI só conversa com ele por socket/API. Por isso containers seguem vivos mesmo se você fechar o terminal.",ex:"# se der 'cannot connect to the Docker daemon':\n# o serviço dockerd não está rodando\nsystemctl status docker"}
]},
{g:"03",n:"Imagens & Dockerfile",s:"empacotar sua própria aplicação",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"Imagem em camadas",x:"como é construída",oq:"Uma imagem é uma pilha de camadas só-leitura; cada instrução do Dockerfile cria uma camada.",ps:"Entender cache, tamanho e por que a ordem das instruções importa tanto para a velocidade do build.",cf:"Camadas são reaproveitadas entre imagens e builds. Mudou uma camada, todas acima dela são refeitas — por isso o que muda menos vai primeiro.",ex:"# cada linha do Dockerfile = uma camada\n# camadas iguais são cacheadas e compartilhadas",dg:"layers"},
 {t:"Dockerfile",x:"a receita",oq:"Arquivo de texto com as instruções para montar a imagem: base, dependências, código e comando.",ps:"Transformar sua app num artefato reproduzível que roda igual em qualquer lugar.",cf:"FROM define a base; WORKDIR o diretório; COPY traz arquivos; RUN executa no build; CMD/ENTRYPOINT definem o que roda ao subir.",ex:"FROM eclipse-temurin:21-jre\nWORKDIR /app\nCOPY target/app.jar app.jar\nEXPOSE 8080\nCMD [\"java\", \"-jar\", \"app.jar\"]"},
 {t:"build & tag",x:"gerar a imagem",oq:"docker build lê o Dockerfile e produz uma imagem; -t dá nome e versão (tag).",ps:"Versionar imagens e enviar para um registry depois.",cf:"O contexto (o . no fim) é enviado ao daemon — por isso .dockerignore importa. Tag no formato nome:versao; evite depender de latest.",ex:"docker build -t minha-api:1.0 .\ndocker images | grep minha-api"},
 {t:"Cache de camadas",x:"build rápido",oq:"O Docker reaproveita camadas que não mudaram; a primeira instrução alterada invalida o cache dali para cima.",ps:"Builds de segundos em vez de minutos — copie dependências antes do código.",cf:"Em Java/Maven: copie o pom e baixe dependências numa camada, depois copie o código. Assim, mudar código não refaz o download das libs.",ex:"COPY pom.xml .\nRUN mvn dependency:go-offline   # cacheia libs\nCOPY src ./src                   # muda toda hora\nRUN mvn package"},
 {t:".dockerignore",x:"contexto enxuto",oq:"Lista o que NÃO enviar para o build (target, .git, node_modules, .env).",ps:"Build mais rápido, imagem menor e sem vazar segredo para dentro da imagem.",cf:"Funciona como .gitignore. Sem ele, o contexto inteiro sobe para o daemon a cada build.",ex:"# .dockerignore\n.git\ntarget\n.env\n*.md"},
 {t:"Multi-stage build",x:"imagem final magra",oq:"Usa um estágio para compilar (com JDK/Maven) e copia só o resultado para um estágio final enxuto.",ps:"Imagem de produção sem ferramentas de build — menor, mais rápida e mais segura.",cf:"Vários FROM no mesmo Dockerfile; o último é a imagem final. COPY --from=build traz só o artefato do estágio anterior.",ex:"FROM maven:3-eclipse-temurin-21 AS build\nWORKDIR /app\nCOPY . .\nRUN mvn -q package\n\nFROM eclipse-temurin:21-jre\nCOPY --from=build /app/target/app.jar app.jar\nCMD [\"java\",\"-jar\",\"app.jar\"]"},
 {t:"ENTRYPOINT vs CMD",x:"o que executa",oq:"ENTRYPOINT fixa o executável; CMD dá argumentos padrão (que podem ser trocados na hora do run).",ps:"Deixar a imagem se comportar como uma ferramenta com argumentos configuráveis.",cf:"Se só CMD, o run pode substituir tudo. Com ENTRYPOINT, o run só troca os argumentos. Prefira a forma de lista (exec form) para sinais funcionarem.",ex:"ENTRYPOINT [\"java\",\"-jar\",\"app.jar\"]\nCMD [\"--spring.profiles.active=prod\"]"},
 {t:"Imagem enxuta & segura",x:"produção",oq:"Bases pequenas (slim, alpine, distroless) e usuário não-root reduzem tamanho e superfície de ataque.",ps:"Deploys mais rápidos, menos CVEs e menos permissões dentro do container.",cf:"Fixe versões (não latest), rode como usuário não-root (USER), e escaneie a imagem. Menos coisa dentro = menos para dar errado.",ex:"FROM eclipse-temurin:21-jre-alpine\nRUN adduser -D app\nUSER app\n# docker scout / trivy para escanear CVEs"}
]},
{g:"04",n:"Dados & rede",s:"persistir dados e ligar containers",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"Volumes vs bind mount",x:"guardar dados",oq:"Volume é gerenciado pelo Docker; bind mount aponta para uma pasta do host. Ambos sobrevivem ao container.",ps:"A camada gravável do container some quando ele é removido — dados que precisam durar vão para volume.",cf:"Volume (nomeado) é o padrão para dados de produção (banco). Bind mount é ótimo em dev, para editar código no host e ver dentro do container.",ex:"docker run -v dados:/var/lib/postgresql/data postgres  # volume\ndocker run -v $(pwd):/app node    # bind mount (dev)"},
 {t:"Persistência de dados",x:"não perder nada",oq:"Container é efêmero: sem volume, tudo que ele grava é perdido ao ser recriado.",ps:"Banco de dados, uploads e logs precisam viver fora do ciclo de vida do container.",cf:"Monte o diretório de dados do serviço num volume. Recriar o container (novo deploy) mantém os dados, pois eles estão no volume.",ex:"docker volume create pg\ndocker run -d -v pg:/var/lib/postgresql/data postgres\n# recriar o container não apaga o banco"},
 {t:"Redes do Docker",x:"containers se falando",oq:"O Docker cria redes virtuais; containers na mesma rede se encontram pelo nome.",ps:"Fazer a API achar o banco sem IP fixo, só pelo nome do serviço.",cf:"A rede bridge padrão isola do host. Numa rede definida por você, o DNS interno resolve o nome do container para o IP dele.",ex:"docker network create app-net\ndocker run -d --name db --network app-net postgres\ndocker run --network app-net minha-api  # conecta em 'db'"},
 {t:"Variáveis de ambiente",x:"configurar",oq:"-e passa variáveis para o container; a app lê como configuração.",ps:"Mudar comportamento (perfil, URL do banco, credencial) sem reconstruir a imagem.",cf:"12-factor: config vem do ambiente. Em Spring, variáveis viram propriedades (SPRING_DATASOURCE_URL). Não coloque segredo no Dockerfile.",ex:"docker run -e SPRING_PROFILES_ACTIVE=prod \\\n           -e SPRING_DATASOURCE_URL=jdbc:postgresql://db/app \\\n           minha-api"},
 {t:"Segredos no Docker",x:"o que NÃO fazer",oq:"Senha e token não vão em ENV do Dockerfile nem no código — ficam gravados na imagem e no histórico.",ps:"Imagem vaza para o registry; segredo dentro dela é incidente de segurança.",cf:"Passe em runtime (-e a partir do ambiente do host, ou --env-file), use secrets do orquestrador, e nunca commite .env. No Compose/K8s há mecanismo próprio de secret.",ex:"docker run --env-file .env minha-api   # .env fora do Git\n# nunca: ENV DB_PASSWORD=123 no Dockerfile"}
]},
{g:"05",n:"Docker Compose",s:"vários containers como um só arquivo",c:"var(--orange)",cs:"var(--orange-soft)",items:[
 {t:"O que o Compose resolve",x:"orquestração local",oq:"Descreve vários containers (app, banco, cache) e suas ligações num único arquivo YAML, subindo tudo com um comando.",ps:"Ambiente de dev completo reproduzível: docker compose up e a stack inteira sobe.",cf:"Substitui uma pilha de docker run com --network e -v. É orquestração para uma máquina só (dev/testes), não para cluster.",ex:"docker compose up -d   # sobe app + banco + rede + volumes\ndocker compose down    # derruba tudo"},
 {t:"docker-compose.yml",x:"o arquivo",oq:"Define services (containers), networks e volumes de forma declarativa.",ps:"Versionar o ambiente junto do código: quem clonar o repo sobe igual.",cf:"Cada service tem image (ou build), ports, environment, volumes, depends_on. Os services se falam pelo nome, numa rede criada automaticamente.",ex:"services:\n  api:\n    build: .\n    ports: [\"8080:8080\"]\n    environment:\n      SPRING_DATASOURCE_URL: jdbc:postgresql://db/app\n    depends_on: [db]\n  db:\n    image: postgres:16\n    volumes: [\"pg:/var/lib/postgresql/data\"]\nvolumes:\n  pg:"},
 {t:"depends_on & ordem",x:"subir na ordem",oq:"depends_on define ordem de inicialização; não garante que o serviço esteja pronto, só que começou.",ps:"Subir o banco antes da API — mas a API ainda precisa tolerar o banco não estar pronto.",cf:"Use healthcheck + depends_on: condition: service_healthy para esperar de verdade. Ou faça a app tentar reconectar (retry).",ex:"depends_on:\n  db:\n    condition: service_healthy"},
 {t:"Compose no dev",x:"o uso mais comum",oq:"Rodar sua API + banco + ferramentas localmente, com bind mount para editar código ao vivo.",ps:"Onboarding de minutos e paridade com produção sem instalar banco na máquina.",cf:"Perfis (profiles) ligam serviços opcionais; override files ajustam por ambiente. Logs de tudo junto com docker compose logs -f.",ex:"docker compose logs -f api\ndocker compose up --build   # rebuild ao mudar Dockerfile"}
]},
{g:"06",n:"Registry & imagem em produção",s:"publicar e endurecer a imagem",c:"var(--pink)",cs:"var(--pink-soft)",items:[
 {t:"Registry",x:"onde a imagem mora",oq:"Repositório de imagens (Docker Hub, Azure ACR, GitHub) de onde os ambientes baixam.",ps:"Distribuir a mesma imagem para dev, CI e produção — inclusive para o cluster Kubernetes puxar.",cf:"docker login autentica; push envia; pull baixa. Em empresa, geralmente um registry privado (ACR no seu caso). O K8s puxa do registry no deploy.",ex:"docker login myorg.azurecr.io\ndocker tag minha-api:1.0 myorg.azurecr.io/minha-api:1.0\ndocker push myorg.azurecr.io/minha-api:1.0"},
 {t:"Tags & versionamento",x:"evite latest",oq:"A tag identifica a versão da imagem; latest é ambígua e muda sem aviso.",ps:"Deploys reproduzíveis e rollback confiável — você sabe exatamente o que está rodando.",cf:"Use versão semântica ou o hash do commit como tag. latest em produção esconde qual build está no ar e quebra rollback.",ex:"docker build -t minha-api:1.4.2 .\n# ou a SHA do commit:\ndocker build -t minha-api:$(git rev-parse --short HEAD) ."},
 {t:"Healthcheck",x:"a imagem se reporta",oq:"Instrução que diz ao Docker como checar se a app dentro do container está saudável.",ps:"Compose e orquestradores usam isso para saber se o container está pronto ou travado.",cf:"HEALTHCHECK roda um comando periódico; status vira healthy/unhealthy. No K8s isso vira probes (readiness/liveness).",ex:"HEALTHCHECK --interval=30s CMD \\\n  curl -f http://localhost:8080/actuator/health || exit 1"},
 {t:"Imagem do seu Spring Boot",x:"juntando tudo",oq:"Empacotar sua API Java em imagem: multi-stage, JRE enxuta, porta e healthcheck, tag versionada, push no registry.",ps:"É o artefato que o Kubernetes vai rodar — o elo entre o Docker e a próxima metade da trilha.",cf:"Compile com Maven no estágio de build, copie só o jar para a JRE, exponha 8080, use actuator/health como healthcheck. Considere buildpacks (spring-boot:build-image) como alternativa sem Dockerfile.",ex:"# alternativa sem Dockerfile:\nmvn spring-boot:build-image -Dimage.name=minha-api:1.0\ndocker push myorg.azurecr.io/minha-api:1.0"}
]},
{g:"07",n:"Por que Kubernetes",s:"o salto do Compose para o cluster",c:"var(--red)",cs:"var(--red-soft)",items:[
 {t:"O que o Compose não resolve",x:"o limite",oq:"Compose roda numa máquina só; não distribui em vários servidores, não se recupera de queda de nó, nem escala automático.",ps:"Entender por que produção séria precisa de orquestrador — e não é só 'compose maior'.",cf:"Faltam: escalonar entre máquinas, reiniciar o que morreu, rollout sem downtime, balanceamento e descoberta de serviço em escala. É isso que o Kubernetes entrega.",ex:"# Compose: 1 host, você cuida na mão\n# Kubernetes: N hosts, o cluster cuida sozinho"},
 {t:"Orquestração",x:"o que o K8s faz",oq:"Kubernetes agenda containers em vários nós, mantém o número de réplicas, cura o que falha e faz rollout controlado.",ps:"Rodar serviços resilientes e escaláveis sem operar cada container na mão.",cf:"Você declara o estado desejado (3 réplicas dessa imagem); o K8s trabalha continuamente para que a realidade bata com isso.",ex:"# você diz 'quero 3 réplicas'\n# um Pod morre -> o K8s sobe outro sozinho"},
 {t:"Estado desejado (declarativo)",x:"o modelo mental",oq:"Você descreve o QUE quer (em YAML); o K8s descobre COMO chegar lá e mantém.",ps:"Menos comandos imperativos, mais reprodutibilidade e versionamento do ambiente no Git (GitOps).",cf:"Controladores comparam o estado atual com o desejado num loop e agem para reconciliar. Aplicar o mesmo YAML duas vezes é seguro (idempotente).",ex:"kubectl apply -f deployment.yaml   # declara o desejado\n# o cluster reconcilia sozinho, sempre"},
 {t:"kubectl & manifests",x:"como você fala",oq:"kubectl é a CLI que conversa com o api-server; manifests são os YAML que descrevem os objetos.",ps:"É por aqui que você cria, inspeciona e depura tudo no cluster.",cf:"apply cria/atualiza a partir do YAML; get lista; describe detalha; logs e exec depuram. O YAML no Git é a fonte da verdade.",ex:"kubectl apply -f app.yaml\nkubectl get pods\nkubectl describe pod meu-pod"},
 {t:"Cluster local (kind/minikube)",x:"praticar de graça",oq:"minikube e kind sobem um cluster Kubernetes completo na sua máquina.",ps:"Aprender e testar manifests sem custo de nuvem antes de ir para o AKS/EKS.",cf:"kind roda o cluster dentro de containers Docker (rápido para CI). minikube sobe uma VM/uma stack local. Ambos dão um kubectl apontado para o cluster local.",ex:"kind create cluster\nkubectl get nodes\nkubectl config current-context"}
]},
{g:"08",n:"Arquitetura do cluster",s:"quem é quem dentro do Kubernetes",c:"var(--teal)",cs:"var(--teal-soft)",items:[
 {t:"Control plane & nodes",x:"o mapa",oq:"O control plane decide (o cérebro); os worker nodes executam os Pods (os músculos).",ps:"Saber onde olhar quando algo falha: decisão x execução.",cf:"O control plane agenda e reconcilia; cada node roda kubelet e o runtime que sobem os containers. Em produção o control plane é replicado.",ex:"kubectl get nodes\nkubectl get componentstatuses",dg:"k8sarch"},
 {t:"api-server",x:"a porta de entrada",oq:"Componente central que recebe toda requisição (kubectl, controladores, nodes) e é a única coisa que fala com o etcd.",ps:"Tudo passa por ele — autenticação, autorização e validação acontecem aqui.",cf:"É uma API REST. kubectl, kubelet e controladores só conversam com o cluster através do api-server.",ex:"# todo comando kubectl vira uma chamada ao api-server\nkubectl get pods -v=6   # mostra as chamadas HTTP"},
 {t:"etcd",x:"a memória",oq:"Banco chave-valor que guarda todo o estado do cluster (o que deve existir).",ps:"É a fonte da verdade; perder o etcd é perder o cluster (por isso backup).",cf:"Só o api-server escreve nele. É consistente e distribuído (Raft). O estado desejado que você aplica fica aqui.",ex:"# backup do etcd = backup do cluster\n# nunca se fala com o etcd direto na prática"},
 {t:"scheduler",x:"onde cada Pod roda",oq:"Decide em qual node colocar cada Pod novo, conforme recursos e regras.",ps:"Distribuir carga e respeitar requisitos (CPU/memória, afinidade, taints).",cf:"Olha requests de recursos, restrições (nodeSelector, affinity, taints/tolerations) e escolhe o melhor node. Só decide; o kubelet executa.",ex:"# Pod 'Pending' geralmente = scheduler não achou node\nkubectl describe pod x   # ver o motivo em Events"},
 {t:"controller-manager",x:"quem reconcilia",oq:"Roda os controladores que comparam estado atual x desejado e agem (Deployment, ReplicaSet, Node, etc.).",ps:"É o que faz o self-healing: Pod morreu, o controlador sobe outro.",cf:"Cada controlador é um loop: observa, compara, corrige. O Deployment controller garante o número de réplicas via ReplicaSet.",ex:"# você deleta um Pod de um Deployment...\nkubectl delete pod meu-pod\n# ...e o controller cria um novo na hora"},
 {t:"kubelet & kube-proxy",x:"o agente do node",oq:"kubelet roda em cada node e garante que os containers dos Pods estejam de pé; kube-proxy cuida das regras de rede dos Services.",ps:"É o elo entre a decisão do control plane e os containers de fato rodando.",cf:"O kubelet recebe os PodSpecs e fala com o runtime (containerd). kube-proxy programa iptables/IPVS para rotear o tráfego dos Services aos Pods.",ex:"kubectl get nodes -o wide\n# kubelet reporta a saúde de cada node ao api-server"}
]},
{g:"09",n:"Objetos de carga",s:"Pod, Deployment e amigos",c:"var(--blue)",cs:"var(--blue-soft)",items:[
 {t:"Pod",x:"a menor unidade",oq:"Menor objeto executável do K8s: um ou mais containers que compartilham rede e volumes.",ps:"É o que de fato roda a sua app — mas você quase nunca cria Pod direto.",cf:"Pod é efêmero e descartável: ganha IP próprio, mas some e volta com IP novo. Por isso se usa Deployment (para gerenciá-los) e Service (para achá-los).",ex:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: api\nspec:\n  containers:\n  - name: api\n    image: minha-api:1.0\n    ports:\n    - containerPort: 8080"},
 {t:"Labels & selectors",x:"a cola do K8s",oq:"Labels são pares chave/valor nos objetos; selectors selecionam objetos por esses labels.",ps:"É como Service acha Pods, Deployment gerencia réplicas e você filtra recursos.",cf:"Não há ligação por ID: tudo é por label. Um Service 'app=api' roteia para todo Pod com esse label. Convenção solta e poderosa.",ex:"metadata:\n  labels:\n    app: api\n---\n# no Service:\nselector:\n  app: api"},
 {t:"ReplicaSet",x:"mantém N cópias",oq:"Garante que exista sempre um número definido de Pods iguais.",ps:"Disponibilidade e escala horizontal: se um Pod cai, outro sobe.",cf:"Você raramente cria direto — o Deployment cria e gerencia o ReplicaSet por você. Ele usa selector de labels para saber quais Pods conta.",ex:"# você define replicas: 3\n# o ReplicaSet mantém 3 Pods vivos sempre"},
 {t:"Deployment",x:"o que você usa de verdade",oq:"Gerencia ReplicaSets para você: réplicas, rollout de nova versão e rollback.",ps:"O objeto do dia a dia para rodar apps stateless (como sua API).",cf:"Ao mudar a imagem, ele cria um novo ReplicaSet e migra os Pods aos poucos (rolling update). Guarda histórico para rollback.",ex:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: api\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: api\n  template:\n    metadata:\n      labels:\n        app: api\n    spec:\n      containers:\n      - name: api\n        image: minha-api:1.0"},
 {t:"Namespace",x:"dividir o cluster",oq:"Agrupamento lógico que separa recursos (por time, ambiente ou app) dentro do mesmo cluster.",ps:"Isolar dev/staging, aplicar cotas e evitar colisão de nomes.",cf:"Nomes são únicos por namespace, não no cluster todo. RBAC e ResourceQuota costumam ser aplicados por namespace. default é onde tudo cai se você não escolher.",ex:"kubectl create namespace staging\nkubectl apply -f app.yaml -n staging\nkubectl get pods -n staging"},
 {t:"kubectl apply/get/describe",x:"o loop de trabalho",oq:"apply aplica o YAML, get lista, describe detalha com eventos.",ps:"O ciclo que você repete o tempo todo: aplicar, ver, entender.",cf:"apply é declarativo (cria ou atualiza). get -o yaml/wide mostra detalhes; describe traz os Events, que explicam a maioria dos problemas.",ex:"kubectl apply -f deployment.yaml\nkubectl get deploy,pods -l app=api\nkubectl describe deploy api"}
]},
{g:"10",n:"Rede & exposição",s:"como o tráfego chega nos Pods",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"Service (ClusterIP)",x:"endereço estável",oq:"Dá um IP e DNS fixos a um conjunto de Pods (selecionados por label), balanceando entre eles.",ps:"Pods vão e voltam com IPs novos; o Service é o ponto estável para falar com eles.",cf:"ClusterIP é interno ao cluster (padrão). O DNS interno resolve o nome do service; kube-proxy balanceia para os Pods vivos.",ex:"apiVersion: v1\nkind: Service\nmetadata:\n  name: api\nspec:\n  selector:\n    app: api\n  ports:\n  - port: 80\n    targetPort: 8080",dg:"svc"},
 {t:"NodePort & LoadBalancer",x:"expor para fora",oq:"NodePort abre uma porta em todos os nodes; LoadBalancer provisiona um balanceador da nuvem com IP externo.",ps:"Acessar o serviço de fora do cluster.",cf:"NodePort é simples mas cru (porta alta em cada node). LoadBalancer (no AKS/EKS) cria um LB gerenciado. Para muitos serviços HTTP, prefira Ingress.",ex:"spec:\n  type: LoadBalancer   # nuvem provisiona IP externo\n  selector:\n    app: api\n  ports:\n  - port: 80\n    targetPort: 8080"},
 {t:"DNS interno",x:"achar pelo nome",oq:"O cluster tem DNS (CoreDNS): cada Service vira um nome resolvível pelos Pods.",ps:"A API chama o banco por http://db em vez de decorar IP.",cf:"Formato: servico.namespace.svc.cluster.local (dentro do mesmo namespace, só o nome basta). Resolve para o ClusterIP do Service.",ex:"# de dentro de um Pod:\ncurl http://api            # mesmo namespace\ncurl http://api.staging    # outro namespace"},
 {t:"Ingress",x:"porta HTTP única",oq:"Regras de roteamento HTTP/HTTPS que expõem vários serviços por host/caminho, atrás de um único ponto de entrada.",ps:"Um LB só para muitos serviços, com TLS e roteamento por URL — em vez de um LoadBalancer por serviço.",cf:"O objeto Ingress só define regras; quem executa é o Ingress Controller (nginx, Traefik). Faz path/host routing e termina TLS.",ex:"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: web\nspec:\n  rules:\n  - host: api.exemplo.com\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: api\n            port:\n              number: 80"},
 {t:"Ingress Controller",x:"quem faz o Ingress valer",oq:"O componente (ex.: ingress-nginx) que lê os objetos Ingress e realmente roteia o tráfego.",ps:"Sem controller instalado, o objeto Ingress não faz nada.",cf:"Roda como Pods no cluster, normalmente atrás de um Service LoadBalancer. Você instala um (ingress-nginx é o mais comum) e ele passa a atender todos os Ingress.",ex:"# instala o controller uma vez no cluster\nhelm install ingress-nginx ingress-nginx/ingress-nginx\nkubectl get pods -n ingress-nginx"}
]},
{g:"11",n:"Config, probes & recursos",s:"configurar e manter Pods saudáveis",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"ConfigMap",x:"configuração",oq:"Guarda configuração não-sensível (propriedades, URLs, flags) separada da imagem.",ps:"Mudar config sem reconstruir a imagem e reaproveitar a mesma imagem em vários ambientes.",cf:"Injeta como variáveis de ambiente ou arquivo montado no Pod. Trocar o ConfigMap não reinicia o Pod sozinho — normalmente exige novo rollout.",ex:"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: api-config\ndata:\n  SPRING_PROFILES_ACTIVE: prod"},
 {t:"Secret",x:"dados sensíveis",oq:"Como o ConfigMap, mas para senha, token e chave (codificado em base64, não criptografado por padrão).",ps:"Tirar credencial do YAML da app e do repositório.",cf:"Base64 não é segurança: habilite criptografia no etcd e restrinja por RBAC. Melhor ainda: integre com um cofre (Azure Key Vault) via CSI.",ex:"kubectl create secret generic db \\\n  --from-literal=password='s3nh@'\n# no Pod:\nenv:\n- name: DB_PASSWORD\n  valueFrom:\n    secretKeyRef:\n      name: db\n      key: password"},
 {t:"Probes: liveness/readiness",x:"saúde do Pod",oq:"readiness diz se o Pod pode receber tráfego; liveness diz se ele precisa ser reiniciado; startup cobre apps de boot lento.",ps:"Não mandar requisição para Pod que ainda sobe e reiniciar o que travou — sem downtime visível.",cf:"readiness falhou = sai do balanceamento do Service. liveness falhou = kubelet reinicia o container. Em Spring, aponte para o actuator/health.",ex:"readinessProbe:\n  httpGet:\n    path: /actuator/health/readiness\n    port: 8080\nlivenessProbe:\n  httpGet:\n    path: /actuator/health/liveness\n    port: 8080"},
 {t:"Requests & limits",x:"CPU e memória",oq:"requests é o que o Pod reserva (usado pelo scheduler); limits é o teto que ele não pode passar.",ps:"Garantir recurso mínimo e impedir que um Pod devore o node.",cf:"Estourar o limit de memória gera OOMKilled; passar do de CPU gera throttling. requests bem definidos são a base do agendamento e do autoscaling.",ex:"resources:\n  requests:\n    cpu: \"250m\"\n    memory: \"512Mi\"\n  limits:\n    cpu: \"1\"\n    memory: \"1Gi\""},
 {t:"OOMKilled & QoS",x:"quando aperta",oq:"Se um Pod passa do limite de memória, o kernel o mata (OOMKilled); a classe de QoS decide quem morre primeiro sob pressão.",ps:"Diagnosticar Pods que reiniciam sem erro de app — muitas vezes é memória.",cf:"Guaranteed (requests=limits) é o mais protegido; BestEffort (sem requests) é o primeiro a cair. Ajuste o heap da JVM aos limits do container.",ex:"kubectl describe pod api | grep -i oom\n# Java: -XX:MaxRAMPercentage=75 respeita o limit"}
]},
{g:"12",n:"Storage & estado",s:"dados que precisam durar",c:"var(--orange)",cs:"var(--orange-soft)",items:[
 {t:"Volumes no Pod",x:"disco do Pod",oq:"Um volume é montado no Pod e compartilhado pelos containers dele; o tipo define onde os dados vivem.",ps:"Compartilhar arquivos entre containers de um Pod ou dar disco temporário.",cf:"emptyDir vive enquanto o Pod existe; para durar além do Pod, precisa de PersistentVolume. O volume é declarado no Pod e montado em cada container.",ex:"volumes:\n- name: tmp\n  emptyDir: {}\n# montado em containers via volumeMounts"},
 {t:"PersistentVolume (PV)",x:"disco de verdade",oq:"Representa um pedaço de armazenamento real do cluster (disco da nuvem, NFS), independente de qualquer Pod.",ps:"Dados que sobrevivem a Pods, deploys e reagendamentos.",cf:"O PV é o recurso de infraestrutura; o Pod não o consome direto — pede via PVC. Ciclo de vida separado do Pod.",ex:"# geralmente provisionado dinamicamente\nkubectl get pv"},
 {t:"PVC & StorageClass",x:"pedir disco",oq:"O PVC é o pedido de armazenamento do app; a StorageClass define como provisionar o disco automaticamente.",ps:"O Pod pede 'quero 10Gi' e o cluster provisiona o disco sozinho, sem você criar PV na mão.",cf:"PVC casa com um PV (ou provisiona um via StorageClass). O Pod monta o PVC como volume. A StorageClass mapeia para o disco da nuvem (managed-csi no Azure).",ex:"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: dados\nspec:\n  accessModes: [ReadWriteOnce]\n  resources:\n    requests:\n      storage: 10Gi"},
 {t:"StatefulSet",x:"Pods com identidade",oq:"Como o Deployment, mas para apps com estado: dá nome estável e disco próprio a cada réplica, em ordem.",ps:"Rodar banco, fila ou qualquer coisa em que cada instância é única (api-0, api-1...).",cf:"Cada Pod tem nome fixo e seu próprio PVC, criado/removido em ordem. Usa um headless Service para endereçar cada Pod pelo nome.",ex:"apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: pg\nspec:\n  serviceName: pg\n  replicas: 3\n  # cada Pod: pg-0, pg-1, pg-2 com PVC próprio"},
 {t:"Stateless vs stateful",x:"a decisão",oq:"App stateless (sua API) não guarda estado local; app stateful (banco) guarda e precisa de identidade e disco.",ps:"Escolher Deployment (stateless, fácil de escalar) ou StatefulSet (stateful, cuidadoso).",cf:"Regra prática: mantenha a app stateless e empurre o estado para serviços gerenciados (banco na nuvem). Rodar banco no K8s dá trabalho — só quando faz sentido.",ex:"# API: Deployment (escala à vontade)\n# Banco: serviço gerenciado, ou StatefulSet com cuidado"}
]},
{g:"13",n:"Escala, rollout & produção",s:"atualizar sem downtime e operar",c:"var(--pink)",cs:"var(--pink-soft)",items:[
 {t:"Rolling update",x:"deploy sem queda",oq:"Ao mudar a imagem do Deployment, o K8s troca os Pods aos poucos, mantendo o serviço no ar.",ps:"Publicar nova versão sem downtime — o padrão de deploy no cluster.",cf:"Sobe Pods novos e derruba os velhos respeitando maxSurge/maxUnavailable. Readiness probe garante que só entra no balanceamento quem está pronto.",ex:"kubectl set image deploy/api api=minha-api:1.1\nkubectl rollout status deploy/api",dg:"rollout"},
 {t:"Rollback",x:"desfazer rápido",oq:"Volta o Deployment para uma revisão anterior que funcionava.",ps:"Deploy quebrou? Reverter em segundos, sem reconstruir nada.",cf:"O Deployment guarda histórico de ReplicaSets. undo volta para a revisão anterior (ou uma específica).",ex:"kubectl rollout history deploy/api\nkubectl rollout undo deploy/api"},
 {t:"HPA (autoscaling)",x:"escalar sozinho",oq:"O Horizontal Pod Autoscaler ajusta o número de réplicas conforme métricas (CPU, memória, custom).",ps:"Aguentar pico sem provisionar demais no vale — economia e resiliência.",cf:"Precisa de requests definidos e do metrics-server. O HPA observa o uso e sobe/desce réplicas entre um mínimo e um máximo.",ex:"kubectl autoscale deploy api \\\n  --cpu-percent=70 --min=2 --max=10\nkubectl get hpa"},
 {t:"Observabilidade",x:"enxergar o cluster",oq:"logs, describe e events mostram o que os Pods fazem; métricas (Prometheus) e dashboards (Grafana) dão a visão contínua.",ps:"Sem observabilidade, você opera às cegas — e incidente vira caça ao tesouro.",cf:"kubectl logs (--previous para o container morto), describe para Events, e top para uso. Em produção, agregue logs e métricas fora do cluster.",ex:"kubectl logs -f deploy/api\nkubectl logs meu-pod --previous   # do container que morreu\nkubectl top pods"},
 {t:"Troubleshooting: Pod não sobe",x:"onde olhar",oq:"Um método para os estados comuns: Pending, ImagePullBackOff, CrashLoopBackOff, OOMKilled.",ps:"É o seu método de investigação aplicado ao K8s — resolver rápido sem chutar.",cf:"describe (Events) primeiro. Pending = scheduler/recurso. ImagePullBackOff = imagem/registry/credencial. CrashLoop = a app morre ao subir (veja logs). OOMKilled = memória.",ex:"kubectl describe pod x        # comece pelos Events\nkubectl logs x --previous     # por que crashou\nkubectl get events --sort-by=.lastTimestamp"},
 {t:"RBAC & ServiceAccount",x:"quem pode o quê",oq:"RBAC define permissões (Roles) e as liga a usuários/ServiceAccounts (RoleBindings); ServiceAccount é a identidade dos Pods.",ps:"Menor privilégio: cada app e pessoa só faz o que precisa no cluster.",cf:"Role/ClusterRole descrevem verbos sobre recursos; Binding concede a um sujeito. O Pod usa uma ServiceAccount para falar com o api-server.",ex:"# dar só leitura de pods num namespace\nkubectl create role leitor \\\n  --verb=get,list --resource=pods\nkubectl create rolebinding r \\\n  --role=leitor --serviceaccount=app:default"},
 {t:"Helm",x:"empacotar o deploy",oq:"Gerenciador de pacotes do K8s: agrupa vários manifests num chart parametrizável (values).",ps:"Instalar apps complexos (e os seus) com um comando e configurar por ambiente sem duplicar YAML.",cf:"Um chart tem templates + values; helm install/upgrade renderiza e aplica. Bom para reuso e para instalar componentes (ingress, prometheus).",ex:"helm install api ./meu-chart -f values-prod.yaml\nhelm upgrade api ./meu-chart --set replicas=5\nhelm rollback api 1"},
 {t:"Deployar o Spring no K8s",x:"o projeto final",oq:"Juntar tudo: imagem do Spring no registry, Deployment + Service + Ingress, ConfigMap/Secret, probes no actuator, requests/limits e um HPA.",ps:"É o objetivo da trilha — sua API Java rodando resiliente e escalável no cluster.",cf:"Sequência: build da imagem (grupo 06) → push no ACR → Deployment puxando a imagem → Service → Ingress → config via ConfigMap/Secret → probes no actuator → HPA. Comece no kind/minikube, depois AKS.",ex:"kubectl apply -f k8s/   # deployment, service, ingress, config\nkubectl rollout status deploy/api\nkubectl get ingress",star:true}
]},
{g:"14",n:"Como aprender de verdade",s:"vídeo dá o mapa, doc dá a precisão, lab fixa",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"Ciclo de aprendizado",x:"não pare no vídeo",oq:"Ler o nó → ver um vídeo curto → confirmar na doc oficial → subir no cluster local → escrever uma nota atômica → se testar.",ps:"Docker e K8s se aprendem com as mãos: só assistir não fixa. O lab no kind/minikube é o que gruda.",cf:"Para cada nó: veja, confirme em docs.docker.com / kubernetes.io, aplique um manifesto no seu cluster local, e escreva com suas palavras. Depois use o modo teste desta trilha para revisar o que errou.",ex:"# loop:\n# 1. leia o no  2. video (mapa)\n# 3. doc oficial (precisao)\n# 4. kubectl apply no kind/minikube\n# 5. nota atomica  6. modo teste"},
 {t:"Canais & cursos PT-BR",x:"onde ver",oq:"Recursos reais em português para Docker e Kubernetes.",ps:"Ganhar o mapa mental no seu idioma antes de encarar a doc oficial em inglês.",cf:"LINUXtips (Jeferson Fernando) com 'Descomplicando Docker' e 'Descomplicando Kubernetes' é a referência PT-BR; Fabricio Veronez traz DevOps e Kubernetes no YouTube; Full Cycle (Wesley Willians) cobre containers em arquitetura. Depois: docs.docker.com e kubernetes.io.",ex:"# Docker/K8s do zero: LINUXtips (Descomplicando)\n# DevOps/K8s no YouTube: Fabricio Veronez\n# arquitetura + containers: Full Cycle\n# referencia: docker.com/docs e kubernetes.io/docs"},
 {t:"Como pesquisar",x:"achar a resposta",oq:"Query com o objeto exato + a doc certa: kubernetes.io para conceitos, kubectl explain para campos de YAML.",ps:"Metade do K8s é saber o nome do objeto e o campo do manifesto — pesquisar bem economiza horas.",cf:"Use kubectl explain para descobrir a estrutura de qualquer recurso sem decorar YAML. Para erro, cole a razão do Event (ImagePullBackOff, CrashLoopBackOff) + a doc. Leia os Events antes de pesquisar.",ex:"kubectl explain deployment.spec.template.spec.containers\nkubectl describe pod x   # Events explicam a causa\n# query: \"CrashLoopBackOff\" kubernetes causas"},
 {t:"Praticar na sua stack",x:"mini-projetos",oq:"Projetos que crescem em dificuldade e terminam com sua API no cluster.",ps:"Projeto real fixa mais que dez tutoriais. Cada etapa vira uma nota no vault.",cf:"(1) Dockerize sua API com multi-stage; (2) suba API + Postgres no Compose; (3) kind local com Deployment + Service; (4) adicione Ingress, ConfigMap/Secret e probes; (5) HPA e rollout/rollback; (6) leve para o AKS.",ex:"# roadmap de pratica:\n# 1. Dockerfile multi-stage da API\n# 2. docker compose (api + banco)\n# 3. kind + Deployment + Service\n# 4. Ingress + Config + probes\n# 5. HPA + rollout/rollback\n# 6. AKS (Azure)"}
]}
];

/* ---------- render ---------- */
/* ================== NAVEGAÇÃO (trilha + conteúdo) ================== */
var nav=document.getElementById("nav");
var navMap={};
function navHead(txt){var a=document.createElement("a");a.className="sec";a.style.color="var(--soft)";a.style.marginTop="18px";a.style.fontSize=".68rem";a.textContent=txt;nav.appendChild(a);}
/* ================== TRILHA ================== */
var flat=[];T.forEach(function(g){g.items.forEach(function(it){it._g=g;flat.push(it);});});
flat.forEach(function(it,i){it._i=i;it._id=it.t.toLowerCase().replace(/[^a-z0-9]+/g,'-');});
var KEYT="docker-k8s-completo-CL-trilha-v1";
var doneT={};try{doneT=JSON.parse(localStorage.getItem(KEYT)||"{}");}catch(e){}
var track=document.getElementById("track"),lg=document.getElementById("lg");
navHead("A trilha · 13 grupos");
T.forEach(function(g,gi){
  var sec=document.createElement("section");
  sec.className="grp "+(gi%2===0?"l":"r");sec.id="g"+g.g;
  sec.style.setProperty("--gc",g.c);sec.style.setProperty("--gs",g.cs);
  var ms=document.createElement("div");ms.className="milestone";
  ms.innerHTML='<span class="n">'+g.g+'</span><h2>'+g.n+'</h2><small>'+g.s+'</small>';
  var box=document.createElement("div");box.className="cluster";
  g.items.forEach(function(it){
    var b=document.createElement("button");b.className="node";b.type="button";b.dataset.i=it._i;
    b.innerHTML='<b>'+it.t+'</b><span>'+it.x+'</span>';
    b.addEventListener("click",function(){open(it._i);});
    box.appendChild(b);
  });
  sec.appendChild(box);sec.appendChild(ms);track.appendChild(sec);
  var s=document.createElement("span");s.innerHTML='<b style="background:'+g.c+'"></b>'+g.n;lg.appendChild(s);
  var a=document.createElement("a");a.className="sec";a.href="#g"+g.g;a.innerHTML="<b>"+g.g+"</b>"+g.n;nav.appendChild(a);
  navMap["g"+g.g]=a;
});
var fim=document.createElement("div");fim.className="trail-end";
fim.innerHTML='<span>fim da trilha ↓ agora o conteúdo</span>';
track.appendChild(fim);
/* ---------- painel ---------- */
var panel=document.getElementById("panel"),scrim=document.getElementById("scrim"),cur=-1;
function open(i){
  cur=i;var it=flat[i];
  panel.style.setProperty("--pc",it._g.c);
  document.getElementById("pTag").textContent=it._g.g+" · "+it._g.n;
  document.getElementById("pTitle").textContent=it.t;
  document.getElementById("pSub").textContent=it.x;
  var h='';
  h+='<div class="blk"><h4>O que é</h4><p>'+it.oq+'</p></div>';
  h+='<div class="blk"><h4>Para que serve</h4><p>'+it.ps+'</p></div>';
  h+='<div class="blk"><h4>Como funciona</h4><p>'+it.cf+'</p></div>';
  if(it.dg&&DG[it.dg])h+='<div class="blk"><h4>Visual</h4>'+DG[it.dg]+'</div>';
  if(it.ex)h+='<div class="blk"><h4>Exemplo</h4><pre><code>'+hlCode(it.ex)+'</code></pre></div>';
  document.getElementById("pBody").innerHTML=h;
  document.getElementById("pBody").scrollTop=0;
  syncMark();
  panel.classList.add("on");scrim.classList.add("on");
  document.getElementById("pX").focus();
}
function hlCode(code){
  var e=code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  e=e.replace(/(\/\/[^\n]*|#[^\n]*)/g,'<span class="c">$1</span>');
  e=e.replace(/"([^"\n]*)"/g,'<span class="s">"$1"</span>');
  e=e.replace(/\b(class|interface|record|enum|new|return|static|final|void|try|catch|finally|throw|throws|if|else|for|while|switch|case|public|private|protected|var|sealed|permits|implements|extends|synchronized|volatile|import|module|requires|exports)\b/g,'<span class="k">$1</span>');
  e=e.replace(/\b(int|long|double|boolean|String|List|Map|Set|Optional|BigDecimal|LocalDate|Duration|Path|ByteBuffer|Thread|Future)\b/g,'<span class="t">$1</span>');
  e=e.replace(/(@\w+)/g,'<span class="d">$1</span>');
  return e;
}
function closeP(){panel.classList.remove("on");scrim.classList.remove("on");}
document.getElementById("pX").addEventListener("click",closeP);
scrim.addEventListener("click",closeP);
document.addEventListener("keydown",function(e){
  if(e.key==="Escape")closeP();
  if(!panel.classList.contains("on"))return;
  if(e.key==="ArrowRight")go(1);if(e.key==="ArrowLeft")go(-1);
});
function go(d){var n=cur+d;if(n>=0&&n<flat.length)open(n);}
document.getElementById("pNext").addEventListener("click",function(){go(1);});
document.getElementById("pPrev").addEventListener("click",function(){go(-1);});
var mark=document.getElementById("pMark");
function syncMark(){
  var on=!!doneT[flat[cur]._id];
  mark.classList.toggle("is",on);
  mark.textContent=on?"✓ estudado":"marcar estudado";
}
mark.addEventListener("click",function(){
  var id=flat[cur]._id;
  if(doneT[id])delete doneT[id];else doneT[id]=1;
  localStorage.setItem(KEYT,JSON.stringify(doneT));
  syncMark();paint();
});
/* ================== CONTEÚDO (tópicos profundos) ================== */
var parts=[].slice.call(document.querySelectorAll("section.part"));
var entries=[];
navHead("O conteúdo · 10 partes");
parts.forEach(function(sec){
  var num=sec.querySelector(".ph .num").textContent.trim();
  var h2=sec.querySelector(".ph h2").textContent;
  var a=document.createElement("a");a.className="sec";a.href="#"+sec.id;a.innerHTML="<b>"+num+"</b>"+h2;
  nav.appendChild(a);entries.push({a:a,el:sec,sec:true});
  sec.querySelectorAll("article.topic").forEach(function(t){
    var title=t.querySelector("h3").textContent.replace(/\s+/g," ").trim();
    var la=document.createElement("a");la.className="top";la.href="#"+t.id;la.dataset.k=t.id;la.textContent=title;
    nav.appendChild(la);entries.push({a:la,el:t,sec:false});
  });
});
var KEYM="docker-k8s-completo-CL-conteudo-v1";
var doneM={};try{doneM=JSON.parse(localStorage.getItem(KEYM)||"{}");}catch(e){}
var botoes=[].slice.call(document.querySelectorAll(".done"));
botoes.forEach(function(b){
  b.addEventListener("click",function(){
    var k=b.dataset.k;
    if(doneM[k])delete doneM[k];else doneM[k]=1;
    localStorage.setItem(KEYM,JSON.stringify(doneM));paint();
  });
});
/* ================== PROGRESSO COMBINADO ================== */
function paint(){
  var n=0;
  document.querySelectorAll(".node").forEach(function(b){
    var it=flat[+b.dataset.i];var on=!!doneT[it._id];
    b.classList.toggle("done",on);if(on)n++;
  });
  var m=0;
  botoes.forEach(function(b){
    var k=b.dataset.k,on=!!doneM[k];
    b.classList.toggle("is",on);
    b.textContent=on?"✓ dominado":"marcar dominado";
    var la=nav.querySelector('a[data-k="'+k+'"]');
    if(la)la.classList.toggle("ok",on);
    if(on)m++;
  });
  var tot=flat.length+botoes.length,fez=n+m;
  var pct=tot?Math.round(fez/tot*100):0;
  document.getElementById("rdone").textContent=fez+" de "+tot;
  document.getElementById("rsub").textContent=n+" nós · "+m+" tópicos";
  document.getElementById("rpct").textContent=pct+"%";
  document.getElementById("ring").style.setProperty("--deg",(pct*3.6)+"deg");
}
document.getElementById("reset").addEventListener("click",function(){
  if(!confirm("Zerar TODO o progresso (trilha e conteúdo)?"))return;
  doneT={};doneM={};
  localStorage.setItem(KEYT,"{}");localStorage.setItem(KEYM,"{}");
  paint();if(cur>=0)syncMark();
});
/* ================== SCROLLSPY ================== */
function onScroll(){
  var y=window.scrollY+140,c=null,i;
  for(i=0;i<entries.length;i++){ if(!entries[i].sec&&entries[i].el.offsetTop<=y) c=entries[i]; }
  entries.forEach(function(e){ if(!e.sec) e.a.classList.toggle("active",e===c); });
  var h=document.body.scrollHeight-window.innerHeight;
  document.getElementById("tp").style.width=(h>0?window.scrollY/h*100:0)+"%";
  document.getElementById("up").classList.toggle("on",window.scrollY>700);
}
var scrollTicking=false;
function onScrollThrottled(){
  if(!scrollTicking){
    window.requestAnimationFrame(function(){
      onScroll();
      scrollTicking=false;
    });
    scrollTicking=true;
  }
}
document.addEventListener("scroll",onScrollThrottled,{passive:true});
document.getElementById("up").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});
document.getElementById("top").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});
/* ================== BUSCA (nós + tópicos) ================== */
var q=document.getElementById("q");
q.addEventListener("input",function(){
  var v=q.value.trim().toLowerCase(),vis=0;
  document.querySelectorAll(".node").forEach(function(b){
    var it=flat[+b.dataset.i];
    var txt=(it.t+" "+it.x+" "+it.oq+" "+it.ps+" "+it.cf).toLowerCase();
    var hit=v&&txt.indexOf(v)>-1;
    b.classList.toggle("hit",!!hit);
    b.classList.toggle("dim",!!v&&!hit);
    if(hit)vis++;
  });
  document.querySelectorAll(".grp").forEach(function(g){
    if(!v){g.classList.remove("hide");return;}
    g.classList.toggle("hide",!g.querySelector(".node.hit"));
  });
  document.querySelectorAll("article.topic").forEach(function(t){
    var hit=!v||t.textContent.toLowerCase().indexOf(v)>-1;
    t.classList.toggle("hide",!hit);
    var la=nav.querySelector('a[data-k="'+t.id+'"]');
    if(la)la.classList.toggle("hide",!hit);
    if(hit&&v)vis++;
  });
  parts.forEach(function(sec){
    var algum=sec.querySelector("article.topic:not(.hide)");
    sec.style.display=algum?"":"none";
    var sa=nav.querySelector('a.sec[href="#'+sec.id+'"]');
    if(sa)sa.classList.toggle("hide",!algum);
  });
  document.getElementById("nores").classList.toggle("on",!!v&&vis===0);
});
/* ================== REALCE DOS BLOCOS DE CÓDIGO ================== */
function hl(el){
  var e=el.textContent.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  var store=[];
  function keep(cls,txt){store.push('<span class="'+cls+'">'+txt+'</span>');return "§"+(store.length-1)+"§";}
  e=e.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|--[^\n]*|#[^\n]*)/g,function(m){return keep("c",m);});
  e=e.replace(/("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')/g,function(m){return keep("s",m);});
  e=e.replace(/(@[A-Za-z_]\w*)/g,function(m){return keep("a",m);});
  e=e.replace(/\b(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|record|return|sealed|permits|short|static|super|switch|synchronized|this|throw|throws|transient|try|var|void|volatile|while|when|yield|true|false|null|SELECT|FROM|WHERE|AND|OR|INSERT|INTO|VALUES|UPDATE|SET|JOIN|ON|ORDER|BY|LIMIT|BEGIN|COMMIT|ROLLBACK|CREATE|INDEX|EXPLAIN|ANALYZE|FOR)\b/g,'<span class="k">$1</span>');
  e=e.replace(/\b([A-Z][A-Za-z0-9_]*)\b/g,'<span class="t">$1</span>');
  e=e.replace(/\b(\d[\d_]*)\b/g,'<span class="n">$1</span>');
  e=e.replace(/§(\d+)§/g,function(_,i){return store[+i];});
  el.innerHTML=e;
}
document.querySelectorAll("section.part pre code").forEach(hl);
paint();onScroll();
/* ================== MODO TESTE (retrieval practice) ================== */
(function(){
 var RK="docker-k8s-completo-CL-rev-v1";
 var rev={};try{rev=JSON.parse(localStorage.getItem(RK)||"{}");}catch(e){}
 var test=false,revealed=false;
 var P=document.getElementById("panel"),B=document.getElementById("pBody");
 var mB=document.getElementById("mode"),rB=document.getElementById("review");
 var ok=document.getElementById("gOk"),no=document.getElementById("gNo");
 var _open=open;
 open=function(i){_open(i);after(flat[i]);};
 function after(it){
  revealed=false;P.classList.toggle("test",test);P.classList.remove("revealed");
  if(test){
   var g=document.createElement("div");g.className="gate";
   g.innerHTML='<div class="gate-in"><span class="ghint">tente explicar antes de ver</span><h5></h5><em></em><button class="reveal-btn" type="button">revelar resposta &#9656;</button></div>';
   g.querySelector("h5").textContent=it.t;g.querySelector("em").textContent=it.x||"";
   g.querySelector(".reveal-btn").addEventListener("click",reveal);
   B.insertBefore(g,B.firstChild);
  }
  grade();
 }
 function reveal(){revealed=true;P.classList.add("revealed");grade();B.scrollTop=0;}
 function grade(){var s=test&&revealed;ok.hidden=!s;no.hidden=!s;}
 function cid(){return(cur>=0)?flat[cur]._id:null;}
 function save(){localStorage.setItem(RK,JSON.stringify(rev));pr();}
 ok.addEventListener("click",function(){var id=cid();if(id){delete rev[id];save();}go(1);});
 no.addEventListener("click",function(){var id=cid();if(id){rev[id]=1;save();}go(1);});
 mB.addEventListener("click",function(){
  test=!test;mB.textContent=test?"🎯 teste":"📖 estudo";mB.classList.toggle("on",test);
  if(P.classList.contains("on")&&cur>=0)open(cur);
 });
 rB.addEventListener("click",function(){
  var k=Object.keys(rev);if(!k.length)return;
  if(!test){test=true;mB.textContent="🎯 teste";mB.classList.add("on");}
  for(var i=0;i<flat.length;i++){if(rev[flat[i]._id]){open(i);break;}}
 });
 function pr(){
  var n=Object.keys(rev).length;rB.hidden=n===0;rB.textContent="🎯 revisar ("+n+")";
  document.querySelectorAll(".node").forEach(function(b){b.classList.toggle("torev",!!rev[flat[+b.dataset.i]._id]);});
 }
 pr();
})();




/* ---------- bloco 2 de 4 ---------- */

(function(){
  if(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  if(!("IntersectionObserver" in window))return;
  document.documentElement.classList.add("dganim");
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add("in");dispara(e.target);io.unobserve(e.target)}
  })},{threshold:.18,rootMargin:"0px 0px -6% 0px"});
  function pt(p,l){var o=p.getPointAtLength(l);return [o.x,o.y]}
  function segs(f){
    var arr=[].slice.call(f.querySelectorAll("svg path.l,svg path.lt,svg path.lb,svg path.lr,svg path.ln"));
    return arr.map(function(p){
      try{
        var t=p.getTotalLength(); if(!t||t<12)return null;
        var b=p.getBBox(); var a=pt(p,0),z=pt(p,t);
        return {p:p,t:t,x:b.x,y:(a[1]+z[1])/2,a:a,z:z};
      }catch(_){return null}
    }).filter(Boolean);
  }
  function faixas(ss){
    var out=[];
    ss.slice().sort(function(a,b){return a.y-b.y}).forEach(function(s){
      for(var i=0;i<out.length;i++){ if(Math.abs(out[i].y-s.y)<34){out[i].itens.push(s);return} }
      out.push({y:s.y,itens:[s]});
    });
    return out.filter(function(g){return g.itens.length>=2})
              .sort(function(a,b){return b.itens.length-a.itens.length}).slice(0,3);
  }
  function traco(itens){
    itens.sort(function(a,b){return a.x-b.x});
    var d="",n=0;
    itens.forEach(function(s){
      var N=Math.max(2,Math.min(14,Math.round(s.t/14)));
      for(var i=0;i<=N;i++){ var q=pt(s.p,s.t*i/N); d+=(n++?"L":"M")+q[0].toFixed(1)+","+q[1].toFixed(1)+" "}
    });
    return n>1?d:null;
  }
  function fio(f){
    if(f.querySelector(".pulse"))return;
    var svg=f.querySelector("svg"); if(!svg)return;
    var ss=segs(f); if(ss.length<2)return;
    var ciclo=ss.some(function(s){return s.a[0]-s.z[0]>80});
    var gs=faixas(ss); if(!gs.length)return;
    var NS="http://www.w3.org/2000/svg";
    gs.forEach(function(g,gi){
      var d=traco(g.itens); if(!d)return;
      var cor=getComputedStyle(g.itens[0].p).stroke;
      if(!cor||cor==="none")cor="currentColor";
      var wrap=document.createElementNS(NS,"g");
      wrap.setAttribute("class","pulse gen");
      wrap.style.setProperty("--pd",(1.15+gi*0.18).toFixed(2)+"s");
      var c=document.createElementNS(NS,"circle");
      c.setAttribute("r","4.2"); c.setAttribute("fill",cor);
      var mo=document.createElementNS(NS,"animateMotion");
      mo.setAttribute("path",d);
      mo.setAttribute("calcMode","linear");
      mo.setAttribute("begin","indefinite");
      var dur = ciclo ? "5.2s" : (2.8 + gi * 0.35).toFixed(2) + "s";
      mo.setAttribute("dur", dur);
      mo.setAttribute("repeatCount", "indefinite");
      var fade = document.createElementNS(NS, "animate");
      fade.setAttribute("attributeName", "opacity");
      fade.setAttribute("begin", "indefinite");
      fade.setAttribute("dur", dur);
      fade.setAttribute("repeatCount", "indefinite");
      fade.setAttribute("values", "0;1;1;0");
      fade.setAttribute("keyTimes", "0;0.12;0.88;1");
      c.appendChild(fade); wrap.__fade = fade;
      c.appendChild(mo); wrap.appendChild(c); svg.appendChild(wrap);
      wrap.__mo=mo;
    });
    f.__fios=[].slice.call(svg.querySelectorAll(".pulse.gen"));
  }
  function dispara(f){
    (f.__fios||[]).forEach(function(w){
      try{ w.__mo&&w.__mo.beginElement(); w.__fade&&w.__fade.beginElement(); w.classList.add("go") }catch(_){}
    });
  }
  function px(n){try{return n.getBBox().x}catch(_){return 0}}
  function prep(f){
    if(f.getAttribute("data-dg"))return;
    f.setAttribute("data-dg","1");
    var ns=[].slice.call(f.querySelectorAll("svg *")).filter(function(n){return n.getBBox});
    ns.forEach(function(n){
      if(n.getTotalLength&&n.tagName!=="text"){try{n.setAttribute("pathLength",100)}catch(_){}}
    });
    ns.map(function(n){return [n,px(n)]})
      .sort(function(a,b){return a[1]-b[1]})
      .forEach(function(p,i){p[0].style.setProperty("--d",(i*0.035).toFixed(3)+"s")});
    try{fio(f)}catch(_){}
    io.observe(f);
  }
  function scan(r){[].slice.call((r||document).querySelectorAll("figure.dg")).forEach(prep)}
  scan(document);
  /* o painel da trilha injeta diagramas depois do carregamento */
  new MutationObserver(function(ms){
    for(var i=0;i<ms.length;i++){
      var a=ms[i].addedNodes;
      for(var j=0;j<a.length;j++){
        var n=a[j];
        if(n.nodeType===1){ if(n.matches&&n.matches("figure.dg")) prep(n); else scan(n); }
      }
    }
  }).observe(document.body,{childList:true,subtree:true});
})();


/* ---------- bloco 3 de 4 ---------- */

// K8s Probe Simulator Controller
(function(){
  var lab=document.getElementById("probeLab");
  if(!lab)return;
  var nodes=[
    document.getElementById("kn1"),
    document.getElementById("kn2"),
    document.getElementById("kn3"),
    document.getElementById("kn4"),
    document.getElementById("kn5")
  ];
  var hud=document.getElementById("probeHud");
  var btn1=document.getElementById("btnProbeOk");
  var btn2=document.getElementById("btnProbeErr");
  var btn3=document.getElementById("btnProbeStartup");
  var btnReset=document.getElementById("btnProbeReset");
  var timer=null;

  function clearState(){
    if(timer)clearTimeout(timer);
    nodes.forEach(function(n){
      if(!n)return;
      n.className="pl-node";
    });
  }

  function setHud(lines){
    if(!hud)return;
    hud.innerHTML=lines.map(function(l){
      return '<div class="ph-l '+(l.cls||"ph-info")+'">'+l.txt+'</div>';
    }).join("");
    hud.scrollTop=hud.scrollHeight;
  }

  function runScenario(steps){
    clearState();
    var idx=0;
    function next(){
      if(idx>0 && steps[idx-1]){
        var prev=steps[idx-1];
        if(nodes[prev.node]){
          nodes[prev.node].classList.remove("active");
          nodes[prev.node].classList.add(prev.status||"ok");
        }
      }
      if(idx<steps.length){
        var cur=steps[idx];
        if(nodes[cur.node]){
          nodes[cur.node].classList.add("active");
        }
        setHud(cur.logs);
        idx++;
        timer=setTimeout(next, cur.delay||800);
      }
    }
    next();
  }

  if(btn1) btn1.addEventListener("click",function(){
    runScenario([
      {node:0, logs:[{cls:"ph-warn",txt:"[Cluster Event] PostgreSQL sofre spike de CPU ou failover de 30s."}], delay:700},
      {node:1, status:"warn", logs:[{cls:"ph-info",txt:"[Kubelet Probe] GET /actuator/health/readiness -> status DOWN (503 Service Unavailable)."}], delay:750},
      {node:2, status:"warn", logs:[{cls:"ph-warn",txt:"[Readiness Reprovado] failureThreshold atingido (2/2). Liveness continua PASSANDO (200 OK)."}], delay:800},
      {node:3, status:"ok", logs:[{cls:"ph-ok",txt:"[K8s Endpoint Controller] Remove o IP do Pod dos Endpoints do Service. Tráfego de novas requisições é pausado imediatamente!"}], delay:850},
      {node:4, status:"ok", logs:[{cls:"ph-ok",txt:"🛡️ [ZERO RESTARTS] O container continua vivo e saudável! Quando o banco volta, readiness passa e o Pod retorna ao tráfego em 2s sem reiniciar."}], delay:500}
    ]);
  });

  if(btn2) btn2.addEventListener("click",function(){
    runScenario([
      {node:0, logs:[{cls:"ph-warn",txt:"[Cluster Event] PostgreSQL fica lento ou indisponível temporariamente por 40s."}], delay:700},
      {node:1, status:"err", logs:[{cls:"ph-err",txt:"[ERRO DE ARQUITETURA] Desenvolvedor colocou verificação de banco dentro do LivenessProbe!"}], delay:750},
      {node:2, status:"err", logs:[{cls:"ph-err",txt:"[Liveness Reprovado] GET /health falha porque o banco não respondeu em 1s."}], delay:800},
      {node:3, status:"err", logs:[{cls:"ph-err",txt:"☠️ [Kubelet SIGKILL] Kubelet entende que a aplicação travou: mata o container e recria o Pod!"}], delay:900},
      {node:4, status:"err", logs:[{cls:"ph-err",txt:"💥 [CASCATA / CRASHLOOPBACKOFF] Todos os 20 Pods morrem e tentam reconectar ao banco juntos, sobrecarregando o banco e entrando em CrashLoopBackOff infinito!"}], delay:500}
    ]);
  });

  if(btn3) btn3.addEventListener("click",function(){
    runScenario([
      {node:0, logs:[{cls:"ph-info",txt:"[Novo Deployment] Pod da aplicação Spring Boot é agendado no node."}], delay:700},
      {node:1, status:"warn", logs:[{cls:"ph-warn",txt:"[JVM Inicializando] Spring Boot leva 40 segundos carregando beans, Flyway e conexões."}], delay:750},
      {node:2, status:"err", logs:[{cls:"ph-err",txt:"⚠️ [Sem StartupProbe] LivenessProbe configurada com initialDelaySeconds=10s já começa a disparar!"}], delay:850},
      {node:3, status:"err", logs:[{cls:"ph-err",txt:"[Morte Prematura] Kubelet recebe Connection Refused no segundo 15 e mata o Pod antes dele terminar de subir."}], delay:850},
      {node:4, status:"ok", logs:[{cls:"ph-ok",txt:"✅ [Fix com StartupProbe] Configure startupProbe com failureThreshold=30 e periodSeconds=5 (concede até 150s para subir sem morrer)."}], delay:500}
    ]);
  });

  if(btnReset) btnReset.addEventListener("click",function(){
    clearState();
    setHud([{cls:"ph-info",txt:"[Kubelet Observando] Escolha um cenário para testar a resiliência das probes..."}]);
  });
})();


/* ---------- bloco 4 de 4 ---------- */

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

/* ---------- Laboratório Interativo: K8s Probes ---------- */
(function(){
  var lab = document.getElementById("probeLab");
  if(!lab) return;

  var btnOk = document.getElementById("btnProbeOk");
  var btnErr = document.getElementById("btnProbeErr");
  var btnStartup = document.getElementById("btnProbeStartup");
  var btnReset = document.getElementById("btnProbeReset");
  var hud = document.getElementById("probeHud");
  var nodes = [
    document.getElementById("kn1"),
    document.getElementById("kn2"),
    document.getElementById("kn3"),
    document.getElementById("kn4"),
    document.getElementById("kn5")
  ];
  var timer = null;

  function clearState(){
    if(timer) clearTimeout(timer);
    nodes.forEach(function(n){
      if(!n) return;
      n.className = "pl-node";
    });
  }

  function setHud(lines){
    if(!hud) return;
    hud.innerHTML = lines.map(function(l){
      return '<div class="ph-l ' + (l.cls || "ph-info") + '">' + l.txt + '</div>';
    }).join("");
    hud.scrollTop = hud.scrollHeight;
  }

  function runScenario(steps, callback){
    clearState();
    var idx = 0;
    function next(){
      if(idx > 0 && steps[idx - 1]){
        var prev = steps[idx - 1];
        if(nodes[prev.node]){
          nodes[prev.node].classList.remove("active");
          nodes[prev.node].classList.add(prev.status || "ok");
        }
      }
      if(idx < steps.length){
        var cur = steps[idx];
        if(nodes[cur.node]){
          nodes[cur.node].classList.add("active");
        }
        setHud(cur.logs);
        idx++;
        timer = setTimeout(next, cur.delay || 600);
      } else {
        if(callback) callback();
      }
    }
    next();
  }

  if(btnOk) btnOk.addEventListener("click", function(){
    runScenario([
      { node: 0, logs: [{ cls: 'ph-warn', txt: '[Cluster Event] PostgreSQL sofre spike de CPU ou failover de 30s.' }], delay: 500 },
      { node: 1, status: 'warn', logs: [{ cls: 'ph-info', txt: '[Kubelet Probe] GET /actuator/health/readiness -> status DOWN (503 Service Unavailable).' }], delay: 550 },
      { node: 2, status: 'warn', logs: [{ cls: 'ph-warn', txt: '[Readiness Reprovado] failureThreshold atingido (2/2). Liveness continua PASSANDO (200 OK).' }], delay: 600 },
      { node: 3, status: 'ok', logs: [{ cls: 'ph-ok', txt: '[K8s Endpoint Controller] Remove o IP do Pod dos Endpoints do Service. Tráfego de novas requisições é pausado imediatamente!' }], delay: 600 },
      { node: 4, status: 'ok', logs: [{ cls: 'ph-ok', txt: '🛡️ [ZERO RESTARTS] O container continua vivo e saudável! Quando o banco volta, readiness passa e o Pod retorna ao tráfego em 2s sem reiniciar.' }], delay: 500 }
    ]);
  });

  if(btnErr) btnErr.addEventListener("click", function(){
    runScenario([
      { node: 0, logs: [{ cls: 'ph-warn', txt: '[Cluster Event] PostgreSQL fica lento ou indisponível temporariamente por 40s.' }], delay: 500 },
      { node: 1, status: 'err', logs: [{ cls: 'ph-err', txt: '[ERRO DE ARQUITETURA] Desenvolvedor colocou verificação de banco dentro do LivenessProbe!' }], delay: 550 },
      { node: 2, status: 'err', logs: [{ cls: 'ph-err', txt: '[Liveness Reprovado] GET /health falha porque o banco não respondeu em 1s.' }], delay: 600 },
      { node: 3, status: 'err', logs: [{ cls: 'ph-err', txt: '☠️ [Kubelet SIGKILL] Kubelet entende que a aplicação travou: mata o container e recria o Pod!' }], delay: 600 },
      { node: 4, status: 'err', logs: [{ cls: 'ph-err', txt: '💥 [CASCATA / CRASHLOOPBACKOFF] Todos os 20 Pods morrem e tentam reconectar ao banco juntos, sobrecarregando o banco e entrando em CrashLoopBackOff infinito!' }], delay: 500 }
    ]);
  });

  if(btnStartup) btnStartup.addEventListener("click", function(){
    runScenario([
      { node: 0, logs: [{ cls: 'ph-info', txt: '[Novo Deployment] Pod da aplicação Spring Boot é agendado no node.' }], delay: 500 },
      { node: 1, status: 'warn', logs: [{ cls: 'ph-warn', txt: '[JVM Inicializando] Spring Boot leva 40 segundos carregando beans, Flyway e conexões.' }], delay: 550 },
      { node: 2, status: 'err', logs: [{ cls: 'ph-err', txt: '⚠️ [Sem StartupProbe] LivenessProbe configurada com initialDelaySeconds=10s já começa a disparar!' }], delay: 600 },
      { node: 3, status: 'err', logs: [{ cls: 'ph-err', txt: '[Morte Prematura] Kubelet recebe Connection Refused no segundo 15 e mata o Pod antes dele terminar de subir.' }], delay: 600 },
      { node: 4, status: 'ok', logs: [{ cls: 'ph-ok', txt: '✅ [Fix com StartupProbe] Configure startupProbe com failureThreshold=30 e periodSeconds=5 (concede até 150s para subir sem morrer).' }], delay: 500 }
    ]);
  });

  if(btnReset) btnReset.addEventListener("click", function(){
    clearState();
    setHud([{ cls: 'ph-info', txt: '[Kubelet Observando] Escolha um cenário para testar a resiliência das probes...' }]);
  });
})();

