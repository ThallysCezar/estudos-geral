/* Extraido de trilhas/nuvem.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 4 ---------- */

function W(h,inner){return '<figure class="dg"><svg viewBox="0 0 340 '+h+'" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg></figure>';}
var DG={
 shared:W(104,'<rect x="8" y="20" width="150" height="80" rx="9" class="sf"/><text x="83" y="16" class="bs">você cuida</text><text x="83" y="40" class="bs">seu código & dados</text><text x="83" y="56" class="bs">configuração & acesso (IAM)</text><text x="83" y="72" class="bs">quem entra e o quê</text><text x="83" y="92" class="bs">no PaaS/serverless: menos</text><rect x="182" y="20" width="150" height="80" rx="9" class="bx"/><text x="257" y="16" class="bs">a nuvem cuida</text><text x="257" y="40" class="bs">datacenter físico</text><text x="257" y="56" class="bs">hardware & rede base</text><text x="257" y="72" class="bs">hypervisor / gerenciado</text><text x="257" y="92" class="bs">mais gerenciado: mais some</text>'),
 region:W(102,'<rect x="10" y="18" width="150" height="80" rx="10" class="bx"/><text x="85" y="14" class="bs">Região (São Paulo)</text><rect x="20" y="30" width="60" height="26" rx="6" class="sf"/><text x="50" y="46" class="bs">Zona A</text><rect x="90" y="30" width="60" height="26" rx="6" class="sf"/><text x="120" y="46" class="bs">Zona B</text><rect x="20" y="62" width="60" height="26" rx="6" class="sf"/><text x="50" y="78" class="bs">Zona C</text><text x="120" y="78" class="bs">datacenters</text><text x="120" y="88" class="bs">isolados</text><rect x="182" y="18" width="150" height="80" rx="10" class="bx"/><text x="257" y="14" class="bs">Região (Virgínia)</text><text x="257" y="52" class="bs">outra área geográfica</text><text x="257" y="70" class="bs">escolha por latência,</text><text x="257" y="82" class="bs">custo e leis de dados</text>'),
 storage:W(90,'<rect x="8" y="26" width="100" height="40" rx="8" class="sf"/><text x="58" y="42" class="bt">Objeto</text><text x="58" y="56" class="bs">arquivos via API</text><text x="58" y="80" class="bs">barato, infinito</text><rect x="120" y="26" width="100" height="40" rx="8" class="sf"/><text x="170" y="42" class="bt">Bloco</text><text x="170" y="56" class="bs">disco da VM</text><text x="170" y="80" class="bs">banco, baixa latência</text><rect x="232" y="26" width="100" height="40" rx="8" class="sf"/><text x="282" y="42" class="bt">Arquivo</text><text x="282" y="56" class="bs">compartilhado (NFS)</text><text x="282" y="80" class="bs">vários montam junto</text>')
};

var T=[
{g:"01",n:"Fundamentos",s:"o modelo mental que vale em qualquer nuvem",c:"var(--teal)",cs:"var(--teal-soft)",items:[
 {t:"O que é nuvem",x:"computação sob demanda",oq:"Usar recursos de TI (compute, storage, rede) pela internet, pagando pelo uso, sem comprar hardware.",ps:"Trocar custo fixo de datacenter por custo variável e provisionamento em minutos.",cf:"O provedor opera o físico; você consome via API/console. Elasticidade (cresce e encolhe) e autoatendimento são a essência.",map:[["AWS","Amazon Web Services"],["Azure","Microsoft Azure"],["GCP","Google Cloud"],["Oracle","Oracle Cloud (OCI)"],["VMware","VMware Cloud (privada/híbrida)"]]},
 {t:"IaaS · PaaS · SaaS",x:"níveis de abstração",oq:"IaaS entrega infraestrutura (VMs); PaaS entrega plataforma (você só sobe o app); SaaS entrega software pronto.",ps:"Escolher quanto você quer operar: mais controle (IaaS) ou menos trabalho (PaaS/SaaS).",cf:"Quanto mais alto o nível, menos você gerencia e menos controla. A responsabilidade compartilhada muda por nível.",map:[["AWS","EC2 (IaaS) · Beanstalk (PaaS)"],["Azure","VM (IaaS) · App Service (PaaS)"],["GCP","Compute Engine · App Engine"],["Oracle","OCI Compute · APEX"],["VMware","vSphere (IaaS) · Tanzu (PaaS)"]]},
 {t:"Responsabilidade compartilhada",x:"quem cuida do quê",oq:"A nuvem cuida da infra física; você cuida do seu código, dados e acesso. O limite sobe conforme o serviço é mais gerenciado.",ps:"Evitar o erro nº 1: achar que a nuvem cuida da SUA segurança e configuração.",cf:"IaaS: você patcheia o SO. Serverless: só o código é seu. Config errada de bucket/IAM é responsabilidade sua, não da nuvem.",dg:"shared",map:[["AWS","Shared Responsibility Model"],["Azure","Shared Responsibility"],["GCP","Shared Responsibility"],["Oracle","Shared Responsibility"],["VMware","você opera mais (privada)"]]},
 {t:"Regiões & zonas",x:"geografia e disponibilidade",oq:"Região é uma área geográfica; zonas de disponibilidade (AZ) são datacenters isolados dentro dela.",ps:"Sobreviver à queda de um datacenter e ficar perto do usuário (latência) e das leis de dados.",cf:"Espalhe réplicas em 2–3 zonas para alta disponibilidade; escolha a região por latência, custo e regulação.",dg:"region",map:[["AWS","Region + Availability Zones"],["Azure","Region + Availability Zones"],["GCP","Region + Zones"],["Oracle","Region + Availability Domains"],["VMware","datacenter / cluster + host"]]},
 {t:"Modelo de custo",x:"você paga o uso",oq:"Compute por tempo ligado, storage por volume, rede por dados que saem (egress). Sem uso, sem conta (em serverless).",ps:"Evitar susto na fatura e decidir arquitetura com custo em mente.",cf:"Egress (dados saindo para a internet ou entre regiões) é o vilão escondido. Reservas/compromissos dão desconto sobre on-demand.",map:[["AWS","On-Demand · Savings Plans"],["Azure","Pay-as-you-go · Reservations"],["GCP","On-demand · Committed Use"],["Oracle","Pay-as-you-go · Universal Credits"],["VMware","licença + hardware (CapEx)"]]},
 {t:"Conta & organização",x:"como isolar ambientes",oq:"Uma hierarquia agrupa contas/assinaturas/projetos para separar times, ambientes e cobrança.",ps:"Isolar produção de dev, aplicar políticas e limites, e organizar a fatura.",cf:"Políticas descem na hierarquia; cotas e billing são por unidade. Separe ambientes por conta/projeto, não só por tag.",map:[["AWS","Organizations → Accounts"],["Azure","Management Groups → Subscriptions"],["GCP","Organization → Folders → Projects"],["Oracle","Tenancy → Compartments"],["VMware","vCenter → Datacenter → Cluster"]]}
]},
{g:"02",n:"Compute",s:"onde o código roda",c:"var(--blue)",cs:"var(--blue-soft)",items:[
 {t:"Máquina virtual",x:"o bloco básico",oq:"Um servidor virtual com SO completo que você controla e opera.",ps:"Controle total quando você precisa instalar/ajustar tudo — ao custo de operar (patch, escala).",cf:"Você escolhe CPU/memória (tipo de instância), imagem do SO e disco. É IaaS puro: máxima liberdade, máximo trabalho.",map:[["AWS","EC2"],["Azure","Virtual Machines"],["GCP","Compute Engine"],["Oracle","OCI Compute"],["VMware","vSphere VM (ESXi)"]]},
 {t:"Autoscaling",x:"crescer e encolher",oq:"Adicionar/remover instâncias automaticamente conforme a carga, entre um mínimo e um máximo.",ps:"Aguentar pico sem pagar pelo vale; substituir instância que morreu.",cf:"Defina a métrica (CPU, requisições, fila) e os limites. Precisa de app stateless para escalar horizontal sem dor.",map:[["AWS","Auto Scaling Group"],["Azure","VM Scale Sets"],["GCP","Managed Instance Group"],["Oracle","Instance Pool + Autoscaling"],["VMware","DRS + HA (Aria Automation)"]]},
 {t:"Kubernetes gerenciado",x:"orquestração pronta",oq:"Cluster Kubernetes operado pela nuvem: o control plane é gerenciado, você só cuida das cargas.",ps:"Rodar containers em escala sem operar o control plane do K8s.",cf:"Mesmo Kubernetes que você já conhece; a nuvem cuida do api-server/etcd e integra rede, storage e IAM.",map:[["AWS","EKS"],["Azure","AKS"],["GCP","GKE"],["Oracle","OKE"],["VMware","Tanzu Kubernetes Grid"]]},
 {t:"Serverless (funções)",x:"só o código",oq:"Você sobe uma função; a nuvem executa sob evento e escala a zero. Sem servidor para gerenciar.",ps:"Cargas esporádicas ou orientadas a evento, pagando só quando roda.",cf:"Escala a zero (barato ocioso) mas tem limites: tempo de execução, cold start, estado externo. Ótimo para glue/event-driven.",map:[["AWS","Lambda"],["Azure","Functions"],["GCP","Cloud Functions / Cloud Run"],["Oracle","OCI Functions"],["VMware","Knative no Tanzu"]]},
 {t:"Containers gerenciados",x:"container sem K8s",oq:"Rodar containers sem administrar um cluster: você entrega a imagem, a nuvem executa.",ps:"Simplicidade do container com menos operação que Kubernetes.",cf:"Bom para serviços simples/stateless. Escala por requisição ou métrica; menos flexível que K8s, muito menos trabalho.",map:[["AWS","ECS / Fargate / App Runner"],["Azure","Container Apps / ACI"],["GCP","Cloud Run"],["Oracle","Container Instances"],["VMware","Tanzu Application Service"]]},
 {t:"PaaS de aplicação",x:"suba o app e pronto",oq:"Plataforma que roda seu app (jar, código) sem você tocar em VM ou container.",ps:"Time pequeno que quer publicar rápido sem operar infraestrutura.",cf:"Você faz deploy do código; a plataforma cuida de SO, escala e balanceamento. Menos controle, máxima velocidade.",map:[["AWS","Elastic Beanstalk / App Runner"],["Azure","App Service"],["GCP","App Engine"],["Oracle","OCI + APEX"],["VMware","Tanzu Application Service"]]}
]},
{g:"03",n:"Rede",s:"quem alcança o quê",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"Rede virtual (VPC)",x:"seu perímetro privado",oq:"Uma rede isolada e privada sua dentro da nuvem, onde os recursos vivem.",ps:"Controlar o tráfego e isolar sua infra do resto do mundo — a base de segurança na nuvem.",cf:"Você define faixas de IP; nada entra/sai sem uma rota e uma regra permitirem. É o alicerce de toda arquitetura.",map:[["AWS","VPC"],["Azure","Virtual Network (VNet)"],["GCP","VPC"],["Oracle","Virtual Cloud Network (VCN)"],["VMware","NSX (segmentos)"]]},
 {t:"Subnets",x:"segmentar a rede",oq:"Faixas dentro da VPC; públicas (com saída para internet) ou privadas (sem IP público).",ps:"Colocar banco em subnet privada e balanceador em pública — camadas de exposição.",cf:"A rota da subnet define se ela alcança a internet. Recurso sensível fica em subnet privada, sem rota pública.",map:[["AWS","Subnet (public/private)"],["Azure","Subnet"],["GCP","Subnet"],["Oracle","Subnet"],["VMware","NSX Segment"]]},
 {t:"Firewall",x:"regras de tráfego",oq:"Regras que permitem/bloqueiam tráfego por porta, protocolo e origem/destino.",ps:"Abrir só o necessário: negar por padrão, liberar o mínimo.",cf:"Nível de instância (stateful) e/ou de subnet (stateless). A regra segue o princípio de menor exposição.",map:[["AWS","Security Groups / NACL"],["Azure","Network Security Group"],["GCP","Firewall Rules"],["Oracle","Security Lists / NSG"],["VMware","NSX Distributed Firewall"]]},
 {t:"Balanceador de carga",x:"distribuir tráfego",oq:"Recebe o tráfego e distribui entre várias instâncias saudáveis. L4 (TCP) ou L7 (HTTP).",ps:"Alta disponibilidade e escala: uma instância cai, o LB desvia; entra mais réplica, o LB usa.",cf:"L7 roteia por host/caminho e termina TLS; L4 é mais bruto e rápido. Faz health check para tirar réplica ruim.",map:[["AWS","ELB (ALB / NLB)"],["Azure","Load Balancer / App Gateway"],["GCP","Cloud Load Balancing"],["Oracle","OCI Load Balancer"],["VMware","NSX Advanced LB (Avi)"]]},
 {t:"DNS gerenciado",x:"nome → endereço",oq:"Serviço que resolve nomes de domínio para os endereços dos seus recursos.",ps:"Publicar seu domínio e fazer roteamento (por região, saúde, peso).",cf:"Zonas e registros (A, CNAME); dá para roteamento inteligente (failover, latência). Integra com o LB e o CDN.",map:[["AWS","Route 53"],["Azure","Azure DNS"],["GCP","Cloud DNS"],["Oracle","OCI DNS"],["VMware","DNS da infra / parceiros"]]},
 {t:"CDN",x:"conteúdo perto do usuário",oq:"Rede de pontos de presença que cacheia conteúdo perto de quem acessa.",ps:"Reduzir latência e egress servindo estático/mídia da borda.",cf:"O primeiro acesso busca da origem; os próximos vêm do cache da borda. Também absorve pico e ataques.",map:[["AWS","CloudFront"],["Azure","Front Door / CDN"],["GCP","Cloud CDN"],["Oracle","OCI CDN (parceiros)"],["VMware","—"]]},
 {t:"Conectividade híbrida",x:"ligar ao seu datacenter",oq:"VPN (pela internet) ou link dedicado privado ligando sua rede on-prem à nuvem, e VPCs entre si (peering).",ps:"Nuvem híbrida: recursos on-prem e na nuvem conversando com segurança.",cf:"VPN é rápido de montar e criptografado; link dedicado dá banda e latência estáveis. Peering liga redes sem sair para a internet.",map:[["AWS","VPN / Direct Connect / Peering"],["Azure","VPN Gateway / ExpressRoute"],["GCP","Cloud VPN / Interconnect"],["Oracle","VPN / FastConnect"],["VMware","HCX / NSX Federation"]]}
]},
{g:"04",n:"Storage",s:"onde os dados moram",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"Armazenamento de objeto",x:"arquivos via API",oq:"Guarda arquivos (objetos) acessados por API/URL, sem sistema de arquivos. Barato e praticamente infinito.",ps:"Uploads, backups, mídia, data lake, artefatos — o storage mais usado da nuvem.",cf:"Não é disco: cada objeto tem chave e metadados. Tiers (quente/frio/arquivo) trocam custo por tempo de acesso.",dg:"storage",map:[["AWS","S3"],["Azure","Blob Storage"],["GCP","Cloud Storage"],["Oracle","OCI Object Storage"],["VMware","vSAN + parceiros"]]},
 {t:"Disco de bloco",x:"o HD da VM",oq:"Volume de disco anexado a uma VM, com baixa latência e sistema de arquivos.",ps:"Onde o SO e o banco de dados de uma VM realmente escrevem.",cf:"Vive além da VM (persistente) e tem snapshot. Escolha o tipo (SSD/HDD, IOPS) pela carga.",map:[["AWS","EBS"],["Azure","Managed Disks"],["GCP","Persistent Disk"],["Oracle","Block Volume"],["VMware","vSAN / VMDK"]]},
 {t:"Arquivo compartilhado",x:"vários montam junto",oq:"Sistema de arquivos em rede (NFS/SMB) que várias máquinas montam ao mesmo tempo.",ps:"Compartilhar arquivos entre instâncias sem reescrever a app para objeto.",cf:"Semântica de arquivo tradicional, gerenciada pela nuvem. Mais caro que objeto; use quando precisa de POSIX.",map:[["AWS","EFS / FSx"],["Azure","Azure Files"],["GCP","Filestore"],["Oracle","File Storage"],["VMware","vSAN File Services"]]},
 {t:"Backup & snapshot",x:"voltar no tempo",oq:"Cópias pontuais de discos/dados para restaurar após erro, corrupção ou desastre.",ps:"Recuperação: perder dado é questão de quando, não de se.",cf:"Snapshot é rápido e incremental (do bloco); backup é uma política gerenciada com retenção. Teste a restauração.",map:[["AWS","AWS Backup / EBS Snapshots"],["Azure","Azure Backup"],["GCP","Backup and DR"],["Oracle","Block Volume Backups"],["VMware","vSphere snapshots / SRM"]]},
 {t:"Tiers de acesso",x:"custo × frequência",oq:"Classes de armazenamento por frequência de acesso: quente (frequente), frio (raro), arquivo (muito raro/barato).",ps:"Cortar custo movendo dado antigo para tiers baratos automaticamente.",cf:"Tier frio/arquivo custa pouco para guardar, mais para recuperar (e com atraso). Políticas de ciclo de vida movem sozinhas.",map:[["AWS","S3 Standard / IA / Glacier"],["Azure","Hot / Cool / Archive"],["GCP","Standard / Nearline / Archive"],["Oracle","Standard / Infrequent / Archive"],["VMware","—"]]}
]},
{g:"05",n:"Banco de dados",s:"dados gerenciados",c:"var(--orange)",cs:"var(--orange-soft)",items:[
 {t:"Relacional gerenciado",x:"seu SQL, sem operar",oq:"Banco relacional (Postgres, MySQL, SQL Server) operado pela nuvem: patch, backup e alta disponibilidade inclusos.",ps:"Ter um banco confiável sem virar DBA — quase sempre a escolha certa.",cf:"Você usa SQL normal; a nuvem cuida de réplica, failover e backup. Escala vertical fácil; horizontal exige réplicas de leitura.",map:[["AWS","RDS / Aurora"],["Azure","SQL Database / DB for PostgreSQL"],["GCP","Cloud SQL / AlloyDB"],["Oracle","Autonomous Database / MySQL HeatWave"],["VMware","Tanzu Data / parceiros"]]},
 {t:"NoSQL",x:"escala e flexibilidade",oq:"Bancos não-relacionais: documento, chave-valor, coluna — para escala massiva e esquema flexível.",ps:"Alto volume, baixa latência e modelo de dados que não cabe bem em tabelas.",cf:"Troca joins e consistência forte por escala horizontal e performance previsível. Modele pela consulta, não pela entidade.",map:[["AWS","DynamoDB"],["Azure","Cosmos DB"],["GCP","Firestore / Bigtable"],["Oracle","NoSQL Database"],["VMware","—"]]},
 {t:"Cache gerenciado",x:"memória rápida",oq:"Cache em memória (Redis/Memcached) gerenciado, na frente do banco.",ps:"Reduzir latência e carga do banco para dados lidos com frequência.",cf:"Guarde resultado caro/quente; defina expiração e invalidação. Cache errado serve dado velho — cuidado com consistência.",map:[["AWS","ElastiCache"],["Azure","Cache for Redis"],["GCP","Memorystore"],["Oracle","OCI Cache"],["VMware","—"]]},
 {t:"Data warehouse",x:"análise em escala",oq:"Banco otimizado para consultas analíticas sobre grandes volumes (colunar, paralelo).",ps:"Relatórios e BI que rodariam mal num banco transacional.",cf:"Separa carga analítica da transacional. Cobrança por dado escaneado ou por cluster; modele para escanear pouco.",map:[["AWS","Redshift"],["Azure","Synapse / Fabric"],["GCP","BigQuery"],["Oracle","Autonomous Data Warehouse"],["VMware","—"]]}
]},
{g:"06",n:"Identidade & segurança",s:"quem pode o quê",c:"var(--red)",cs:"var(--red-soft)",items:[
 {t:"IAM",x:"o pilar da segurança",oq:"Políticas que definem quais identidades (pessoas, serviços) podem fazer quais ações em quais recursos.",ps:"Menor privilégio — o controle de acesso que atravessa toda a nuvem.",cf:"Prefira papéis (roles) assumidos a credenciais fixas: a app assume um papel temporário. Negue por padrão, libere o mínimo.",map:[["AWS","IAM (Users/Roles/Policies)"],["Azure","Entra ID + RBAC"],["GCP","Cloud IAM"],["Oracle","OCI IAM (Policies)"],["VMware","vCenter SSO / Aria"]]},
 {t:"Cofre de segredos",x:"tirar senha do código",oq:"Serviço que guarda senhas, tokens e chaves com acesso controlado e auditado.",ps:"Segredo nunca no código nem no repositório; a app busca em runtime.",cf:"Acesso por IAM; rotação automática; auditoria de quem leu. Integra com a app via SDK ou injeção.",map:[["AWS","Secrets Manager"],["Azure","Key Vault"],["GCP","Secret Manager"],["Oracle","OCI Vault"],["VMware","parceiros (ex.: Vault)"]]},
 {t:"Criptografia & chaves (KMS)",x:"proteger o dado",oq:"Serviço que gera e gerencia chaves para criptografar dados em repouso e em trânsito.",ps:"Cumprir requisitos de segurança/regulação sem gerenciar chave na mão.",cf:"Criptografia em repouso costuma ser padrão; você controla a chave (gerenciada ou própria). TLS cobre o trânsito.",map:[["AWS","KMS"],["Azure","Key Vault (Keys)"],["GCP","Cloud KMS"],["Oracle","OCI Vault (Keys)"],["VMware","vSphere Encryption"]]},
 {t:"Acesso privado a serviços",x:"sem passar pela internet",oq:"Alcançar serviços gerenciados por um endpoint privado dentro da sua VPC, sem tráfego pela internet.",ps:"Reduzir exposição e egress: o tráfego fica na rede da nuvem.",cf:"Um endpoint privado dá um IP interno para o serviço. Combina com IAM para acesso mínimo e auditável.",map:[["AWS","PrivateLink / VPC Endpoints"],["Azure","Private Link"],["GCP","Private Service Connect"],["Oracle","Service Gateway / Private Endpoint"],["VMware","NSX"]]}
]},
{g:"07",n:"Mensageria & integração",s:"sistemas conversando",c:"var(--pink)",cs:"var(--pink-soft)",items:[
 {t:"Fila gerenciada",x:"desacoplar",oq:"Fila de mensagens operada pela nuvem: o produtor publica, o consumidor processa quando pode.",ps:"Aguentar pico e desacoplar serviços sem operar um broker.",cf:"Entrega ao menos uma vez (idempotência importa), com DLQ para o que falha. É o RabbitMQ/SQS como serviço.",map:[["AWS","SQS"],["Azure","Service Bus Queues"],["GCP","Pub/Sub / Cloud Tasks"],["Oracle","OCI Queue"],["VMware","RabbitMQ (Tanzu)"]]},
 {t:"Pub/Sub & eventos",x:"um para muitos",oq:"Publicar um evento que vários interessados recebem (fan-out), ou roteamento por regra de evento.",ps:"Arquitetura orientada a eventos: reagir a 'pedido criado' em vários serviços.",cf:"Tópico com múltiplos assinantes; roteador de eventos filtra por regra. Desacopla quem emite de quem reage.",map:[["AWS","SNS / EventBridge"],["Azure","Event Grid / Service Bus"],["GCP","Pub/Sub"],["Oracle","OCI Events / Notifications"],["VMware","—"]]},
 {t:"Streaming",x:"fluxo contínuo",oq:"Ingestão de fluxos de dados em alta taxa, retidos e reprocessáveis (estilo Kafka).",ps:"Telemetria, logs, clickstream, event sourcing — dados que fluem sem parar.",cf:"Diferente de fila: mensagens ficam retidas e vários consumidores leem no próprio ritmo (offset). Particiona para escalar.",map:[["AWS","Kinesis / MSK"],["Azure","Event Hubs"],["GCP","Pub/Sub / Dataflow"],["Oracle","OCI Streaming"],["VMware","Kafka (Tanzu)"]]},
 {t:"API Gateway",x:"porta das APIs",oq:"Ponto de entrada gerenciado que expõe, protege e roteia APIs (auth, rate limit, versão).",ps:"Centralizar autenticação, limite de taxa e roteamento na frente dos serviços.",cf:"Faz throttling, valida token, roteia para backend (função, container, VM) e registra métricas. Tira essa lógica do app.",map:[["AWS","API Gateway"],["Azure","API Management"],["GCP","API Gateway / Apigee"],["Oracle","OCI API Gateway"],["VMware","—"]]}
]},
{g:"08",n:"Observabilidade",s:"enxergar o que roda",c:"var(--teal)",cs:"var(--teal-soft)",items:[
 {t:"Métricas & monitoramento",x:"os números",oq:"Coleta de métricas (CPU, latência, erros) com dashboards e alertas.",ps:"Saber que algo vai mal antes do usuário reclamar.",cf:"Métricas são séries temporais; você define alertas sobre limites. Base dos quatro sinais de ouro (latência, tráfego, erro, saturação).",map:[["AWS","CloudWatch"],["Azure","Azure Monitor"],["GCP","Cloud Monitoring"],["Oracle","OCI Monitoring"],["VMware","Aria Operations"]]},
 {t:"Logs centralizados",x:"a verdade textual",oq:"Agregação dos logs de todos os serviços num lugar pesquisável.",ps:"Investigar incidente sem entrar em cada máquina/container.",cf:"Logs estruturados (JSON) + busca + retenção. Correlacione por traceId. Em container, a saída padrão vira log agregado.",map:[["AWS","CloudWatch Logs"],["Azure","Monitor Logs (Log Analytics)"],["GCP","Cloud Logging"],["Oracle","OCI Logging"],["VMware","Aria Operations for Logs"]]},
 {t:"Tracing distribuído",x:"seguir a requisição",oq:"Rastrear uma requisição por todos os serviços que ela atravessa, medindo cada trecho.",ps:"Achar o gargalo/erro num fluxo distribuído (microsserviços).",cf:"Cada serviço propaga um trace/span id; a ferramenta reconstrói a árvore da chamada. OpenTelemetry é o padrão aberto.",map:[["AWS","X-Ray"],["Azure","Application Insights"],["GCP","Cloud Trace"],["Oracle","APM"],["VMware","Tanzu Observability"]]}
]},
{g:"09",n:"Automação & entrega (IaC)",s:"infra versionada",c:"var(--amber)",cs:"var(--amber-soft)",items:[
 {t:"Infra como código",x:"o conceito-chave",oq:"Descrever a infraestrutura em arquivos versionados, aplicados de forma reproduzível.",ps:"Fim do 'clicou no console e ninguém sabe o que mudou'; infra revisável no Git, igual em todo ambiente.",cf:"Declarativo: você diz o estado desejado, a ferramenta reconcilia — mesma ideia do Kubernetes. Terraform/OpenTofu é multi-nuvem.",ex:"# Terraform (mesma linguagem em qualquer nuvem)\nresource \"aws_s3_bucket\" \"dados\" {\n  bucket = \"meus-dados\"\n}",map:[["AWS","CloudFormation"],["Azure","ARM / Bicep"],["GCP","Deployment Manager / Config Controller"],["Oracle","Resource Manager"],["VMware","Aria Automation"]]},
 {t:"IaC multi-nuvem",x:"uma linguagem para todas",oq:"Terraform (e o fork OpenTofu) descreve recursos de qualquer provedor com a mesma sintaxe.",ps:"Aprender uma ferramenta e usar em AWS, Azure, GCP, Oracle e VMware.",cf:"Cada provedor tem um 'provider'; o conceito de recurso declarativo é o mesmo. É o que operacionaliza o 'sem vendor'.",map:[["AWS","Terraform provider aws"],["Azure","provider azurerm"],["GCP","provider google"],["Oracle","provider oci"],["VMware","provider vsphere / nsxt"]]},
 {t:"CI/CD gerenciado",x:"esteira de entrega",oq:"Serviço que constrói, testa e implanta seu código automaticamente a cada mudança.",ps:"Entregar com segurança e frequência, sem deploy manual.",cf:"Pipeline: build → teste → deploy, com aprovações e rollback. Segredos vêm do cofre; a esteira usa IAM para agir.",map:[["AWS","CodePipeline / CodeBuild"],["Azure","Azure Pipelines"],["GCP","Cloud Build"],["Oracle","OCI DevOps"],["VMware","parceiros (Jenkins/GitLab)"]]},
 {t:"Registry de container",x:"onde a imagem mora",oq:"Repositório gerenciado de imagens de container de onde o cluster puxa.",ps:"Guardar e versionar as imagens da sua app com controle de acesso e scan.",cf:"Push/pull autenticado por IAM; scan de vulnerabilidade; integra com o Kubernetes gerenciado.",map:[["AWS","ECR"],["Azure","ACR"],["GCP","Artifact Registry"],["Oracle","OCIR"],["VMware","Harbor (Tanzu)"]]}
]},
{g:"10",n:"Nuvem privada & híbrida",s:"onde a VMware brilha",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"Virtualização (hypervisor)",x:"a raiz de tudo",oq:"Software que divide um servidor físico em várias VMs isoladas. A base sobre a qual toda nuvem foi construída.",ps:"Entender que 'a nuvem' começou como virtualização em escala — o conceito que a VMware domina no datacenter.",cf:"O hypervisor (ESXi, KVM, Hyper-V) aloca CPU/memória/disco para cada VM. A nuvem pública é isso automatizado e vendido por hora.",map:[["AWS","Nitro (KVM)"],["Azure","Hyper-V"],["GCP","KVM"],["Oracle","KVM"],["VMware","vSphere / ESXi"]]},
 {t:"Nuvem privada",x:"a nuvem no seu datacenter",oq:"Infra de nuvem (autoatendimento, elasticidade) rodando no seu próprio datacenter ou dedicada a você.",ps:"Requisitos de regulação, latência ou controle que impedem a nuvem pública.",cf:"Mesmos conceitos (VM, rede, storage, automação) sob seu controle. VMware Cloud Foundation é a referência; as públicas oferecem versões dedicadas.",map:[["AWS","Outposts"],["Azure","Azure Stack"],["GCP","Google Distributed Cloud"],["Oracle","Cloud@Customer / Dedicated Region"],["VMware","Cloud Foundation (VCF)"]]},
 {t:"Híbrido & multi-cloud",x:"os dois mundos",oq:"Usar on-prem + nuvem pública juntos (híbrido) ou várias nuvens (multi-cloud), de forma integrada.",ps:"Migrar aos poucos, evitar lock-in e colocar cada carga onde faz sentido.",cf:"Ferramentas de gestão estendem o control plane para fora da nuvem. VMware roda como serviço dentro das públicas, unindo os mundos.",map:[["AWS","Outposts / EKS Anywhere"],["Azure","Azure Arc"],["GCP","Anthos"],["Oracle","Cloud@Customer"],["VMware","VMware Cloud on AWS/Azure"]]},
 {t:"Migração",x:"tirar do on-prem",oq:"Levar cargas existentes para a nuvem: lift-and-shift (como está) ou re-arquitetar (nativo).",ps:"Sair do datacenter próprio com risco controlado.",cf:"Lift-and-shift é rápido mas não aproveita a nuvem; re-arquitetar dá mais valor e custa mais. VMware HCX move VMs sem reconstruir.",map:[["AWS","Application Migration Service"],["Azure","Azure Migrate"],["GCP","Migrate to Virtual Machines"],["Oracle","OCI Migration"],["VMware","HCX"]]}
]},
{g:"11",n:"Escolher & aprender",s:"conceito primeiro, provedor depois",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"Como comparar provedores",x:"mapear, não decorar",oq:"Diante de um serviço novo, pergunte: que CONCEITO é este? Aí ache o equivalente que você já entende.",ps:"Aprender qualquer nuvem em dias, não meses — porque o mapa mental já existe.",cf:"Todo provedor tem VM, objeto, VPC, IAM, LB, fila, serverless. Mudam o nome e os detalhes de cobrança/limites, não a ideia.",map:[["AWS","o catálogo mais amplo"],["Azure","forte em empresa/Microsoft"],["GCP","forte em dados/K8s"],["Oracle","forte em banco Oracle"],["VMware","forte em privada/híbrida"]]},
 {t:"Well-Architected",x:"boas práticas",oq:"Frameworks de arquitetura bem-feita: confiabilidade, segurança, performance, custo, operação, sustentabilidade.",ps:"Um checklist para revisar qualquer arquitetura, em qualquer nuvem.",cf:"Os pilares se repetem entre provedores. Use como lente de revisão, não como regra rígida — sempre há trade-off.",map:[["AWS","Well-Architected Framework"],["Azure","Well-Architected Framework"],["GCP","Architecture Framework"],["Oracle","Best Practices Framework"],["VMware","Validated Designs"]]},
 {t:"Certificações conceituais",x:"por onde começar",oq:"As certificações de base (fundamentos) ensinam justamente os conceitos cross-vendor.",ps:"Estruturar o estudo e validar a base sem virar refém de um provedor.",cf:"Comece pela de fundamentos de um provedor (barata, conceitual); o conteúdo transfere quase todo para os outros.",map:[["AWS","Cloud Practitioner"],["Azure","AZ-900 Fundamentals"],["GCP","Cloud Digital Leader"],["Oracle","OCI Foundations"],["VMware","VCTA / VCP"]]},
 {t:"Praticar de graça",x:"free tier + IaC",oq:"Todo provedor tem camada gratuita; suba recursos com Terraform e derrube depois para não pagar.",ps:"Aprender fazendo sem susto na fatura — e treinar IaC ao mesmo tempo.",cf:"terraform apply cria, terraform destroy remove tudo. Configure alerta de billing. Docs: LINUXtips e Fabricio Veronez (PT-BR) + docs oficiais.",ex:"terraform apply    # cria os recursos\n# ...pratica...\nterraform destroy  # remove tudo (sem fatura)",map:[["AWS","Free Tier"],["Azure","Free Account"],["GCP","Free Tier + créditos"],["Oracle","Always Free"],["VMware","VMware Hands-on Labs"]]}
]},
{g:"12",n:"Como aprender de verdade",s:"o ciclo que fixa, fontes que valem e laboratórios reais",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"O ciclo de aprendizado",x:"não pare no vídeo",oq:"Ler o tópico → ver vídeo de alto nível → confirmar na doc oficial → laboratório com IaC → nota atômica → modo teste.",ps:"Nuvem se aprende no terminal: sem praticar com IaC e CLI, a sensação de entendimento é falsa.",cf:"Para cada serviço: leia, veja o mapa, confirme na doc oficial, crie via Terraform ou CLI no Free Tier, provoque o erro de propósito e anote. Erro comum: achar que passar na prova de certificação substitui saber operar no terminal.",ex:"# ciclo:\n# 1. ler o tópico\n# 2. vídeo curto (mapa)\n# 3. doc oficial (AWS/Azure/GCP)\n# 4. lab com Terraform/CLI\n# 5. nota no vault\n# 6. modo teste"},
 {t:"Canais e cursos em português",x:"onde ver",oq:"Recursos e criadores de conteúdo de maior credibilidade técnica em português para nuvem e DevOps.",ps:"Construir o mapa mental no seu idioma antes de mergulhar na documentação em inglês.",cf:"LINUXtips (Jeferson Fernando) para infraestrutura e containers; Fabricio Veronez para DevOps e K8s; Full Cycle (Wesley Willians) para arquitetura de microsserviços em nuvem; documentação oficial (AWS Docs, Microsoft Learn). Erro comum: seguir tutoriais antigos com regras obsoletas de rede e segurança.",ex:"# referências PT-BR:\n# LINUXtips: Linux, Docker, K8s e nuvem\n# Fabricio Veronez: DevOps e cloud na prática\n# Full Cycle: arquitetura e distribuídos\n# docs: docs.aws.amazon.com, learn.microsoft.com"},
 {t:"Como pesquisar e o que praticar",x:"diagnóstico e laboratórios",oq:"Formular buscas com o termo exato e aplicar os 6 laboratórios na camada gratuita (Free Tier).",ps:"Saber diagnosticar falhas de rede, IAM e custos em minutos sem desespero.",cf:"Árvore de diagnóstico: rota da subnet → Security Group → Network ACL → DNS. Para IAM: consulte a ação negada no CloudTrail. Erro comum: alterar configurações aleatórias no console durante incidentes em vez de seguir o caminho do pacote.",ex:"# buscas cirúrgicas:\nsite:docs.aws.amazon.com \"vpc peering\" limits\n\"FATAL: remaining connection slots\"\n# laboratórios:\n# 1. VM Linux via CLI  2. S3 estático + CloudFront\n# 3. VPC 3-tier com RDS  4. ALB + Auto Scaling\n# 5. IAM Roles (zero chaves)  6. Terraform completo"}
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
var KEYT="nuvem-completo-CL-trilha-v1";
var doneT={};try{doneT=JSON.parse(localStorage.getItem(KEYT)||"{}");}catch(e){}
var track=document.getElementById("track"),lg=document.getElementById("lg");
navHead("A trilha · 11 grupos");
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
  if(it.map)h+='<div class="blk"><h4>Nos cinco provedores</h4><table class="vmap"><tbody>'+it.map.map(function(r){return '<tr><td class="vp">'+r[0]+'</td><td>'+r[1]+'</td></tr>';}).join('')+'</tbody></table></div>';
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
navHead("O conteúdo · 12 partes");
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
var KEYM="nuvem-completo-CL-conteudo-v1";
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
document.addEventListener("scroll",onScroll,{passive:true});
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
 var RK="nuvem-completo-CL-rev-v1";
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

// VPC Simulator Controller
(function(){
  var lab=document.getElementById("vpcLab");
  if(!lab)return;
  var nodes=[
    document.getElementById("vn1"),
    document.getElementById("vn2"),
    document.getElementById("vn3"),
    document.getElementById("vn4"),
    document.getElementById("vn5")
  ];
  var hud=document.getElementById("vpcHud");
  var btn1=document.getElementById("btnVpcNormal");
  var btn2=document.getElementById("btnVpcDirectDb");
  var btn3=document.getElementById("btnVpcSgDrop");
  var btn4=document.getElementById("btnVpcNat");
  var btnReset=document.getElementById("btnVpcReset");
  var timer=null;

  function clearState(){
    if(timer)clearTimeout(timer);
    nodes.forEach(function(n){
      if(!n)return;
      n.className="vl-node";
    });
  }

  function setHud(lines){
    if(!hud)return;
    hud.innerHTML=lines.map(function(l){
      return '<div class="vh-l '+(l.cls||"vh-info")+'">'+l.txt+'</div>';
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
      {node:0, logs:[{cls:"vh-info",txt:"[Cliente Web] Requisição HTTPS enviada para https://app.empresa.com. Consulta DNS Route 53 aponta para o ALB na Subnet Pública."}], delay:700},
      {node:1, status:"ok", logs:[{cls:"vh-ok",txt:"[Subnet Pública - ALB] Internet Gateway encaminha pacote. Application Load Balancer realiza TLS Termination e inspeciona headers."}], delay:800},
      {node:2, status:"ok", logs:[{cls:"vh-ok",txt:"[Subnet Privada - Spring API] ALB encaminha HTTP para o Pod/Instância (10.0.11.45:8080). Security Group autoriza porta 8080 com origem no SG do ALB."}], delay:850},
      {node:3, status:"ok", logs:[{cls:"vh-ok",txt:"✅ [Subnet Isolada - PostgreSQL RDS] Spring Boot conecta via JDBC na porta 5432 (10.0.21.80). SG do RDS autoriza tráfego exclusivamente do SG da App. Transação executada com sucesso!"}], delay:500}
    ]);
  });

  if(btn2) btn2.addEventListener("click",function(){
    runScenario([
      {node:0, logs:[{cls:"vh-info",txt:"[Atacante Externo] Varredura automatizada na internet tenta conexão direta na porta 5432 do IP privado do PostgreSQL (10.0.21.80)."}], delay:700},
      {node:1, status:"err", logs:[{cls:"vh-err",txt:"[Internet Gateway / VPC Edge] O bloco 10.0.21.0/24 é privado (RFC 1918). A Tabela de Rotas da Subnet de Dados não possui entrada 0.0.0.0/0 para o IGW."}], delay:850},
      {node:3, status:"err", logs:[{cls:"vh-err",txt:"🚫 [DROP SILENCIOSO] Subnet Isolada sem rota externa e sem IP público. Pacotes descartados na borda da VPC. Banco de dados completamente invisível na internet pública!"}], delay:500}
    ]);
  });

  if(btn3) btn3.addEventListener("click",function(){
    runScenario([
      {node:0, logs:[{cls:"vh-info",txt:"[Cliente Web] Requisição normal recebida no ALB."}], delay:600},
      {node:1, status:"ok", logs:[{cls:"vh-ok",txt:"[Subnet Pública - ALB] ALB repassa requisição para a Spring Boot API."}], delay:700},
      {node:2, status:"warn", logs:[{cls:"vh-warn",txt:"[Subnet Privada - App] Spring Boot tenta estabelecer conexão TCP na porta 5432 com o RDS (10.0.21.80)."}], delay:800},
      {node:3, status:"err", logs:[{cls:"vh-err",txt:"⚠️ [Security Group DROP] O Security Group do RDS NÃO possui regra de Ingress liberando a porta 5432 para o SG da aplicação. Pacote descartado silenciosamente (DROP L4)."}], delay:850},
      {node:2, status:"err", logs:[{cls:"vh-err",txt:"💥 [HikariCP ConnectionTimeout] Falha na aplicação: Connection to 10.0.21.80:5432 timed out (3000ms). Falhas de Security Group causam timeout por descarte silencioso, não Connection Refused!"}], delay:500}
    ]);
  });

  if(btn4) btn4.addEventListener("click",function(){
    runScenario([
      {node:2, logs:[{cls:"vh-info",txt:"[Subnet Privada - App] Worker Spring Boot precisa chamar API externa da Stripe (https://api.stripe.com/v1) para confirmar pagamento."}], delay:700},
      {node:4, status:"ok", logs:[{cls:"vh-ok",txt:"[Subnet Pública - NAT Gateway] Tabela de rotas da subnet privada direciona 0.0.0.0/0 para o NAT Gateway (10.0.1.100). NAT realiza Source NAT (SNAT), alocando seu IP público elástico."}], delay:850},
      {node:0, status:"ok", logs:[{cls:"vh-ok",txt:"🌐 [Internet Pública] Pacote cruza o IGW, alcança a Stripe e recebe resposta 200 OK. NAT Gateway consulta sua connection tracking table e desfaz o NAT para 10.0.11.45."}], delay:800},
      {node:2, status:"ok", logs:[{cls:"vh-ok",txt:"✅ [Retorno Seguro] Spring Boot recebe resposta da Stripe. Nenhum serviço externo conseguiu iniciar conexão para a rede privada!"}], delay:500}
    ]);
  });

  if(btnReset) btnReset.addEventListener("click",function(){
    clearState();
    setHud([{cls:"vh-info",txt:"[VPC Ativa · 10.0.0.0/16] Simulador resetado. Selecione um cenário para iniciar novo rastreamento de pacotes."}]);
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

/* ---------- Laboratório Interativo: VPC Topology & Security Groups ---------- */
(function(){
  var lab = document.getElementById("vpcLab");
  if(!lab) return;

  var btnNormal = document.getElementById("btnVpcNormal");
  var btnDirectDb = document.getElementById("btnVpcDirectDb");
  var btnSgDrop = document.getElementById("btnVpcSgDrop");
  var btnNat = document.getElementById("btnVpcNat");
  var btnReset = document.getElementById("btnVpcReset");
  var hud = document.getElementById("vpcHud");
  var nodes = [
    document.getElementById("vn1"),
    document.getElementById("vn2"),
    document.getElementById("vn3"),
    document.getElementById("vn4"),
    document.getElementById("vn5")
  ];
  var timer = null;

  function clearState(){
    if(timer) clearTimeout(timer);
    nodes.forEach(function(n){
      if(!n) return;
      n.className = "vl-node";
    });
  }

  function setHud(lines){
    if(!hud) return;
    hud.innerHTML = lines.map(function(l){
      return '<div class="vh-l ' + (l.cls || "vh-info") + '">' + l.txt + '</div>';
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

  if(btnNormal) btnNormal.addEventListener("click", function(){
    runScenario([
      { node: 0, logs: [{ cls: 'vh-info', txt: '[Cliente Web] Requisição HTTPS enviada para https://app.empresa.com. Consulta DNS Route 53 aponta para o ALB na Subnet Pública.' }], delay: 500 },
      { node: 1, status: 'ok', logs: [{ cls: 'vh-ok', txt: '[Subnet Pública - ALB] Internet Gateway encaminha pacote. Application Load Balancer realiza TLS Termination e inspeciona headers.' }], delay: 550 },
      { node: 2, status: 'ok', logs: [{ cls: 'vh-ok', txt: '[Subnet Privada - Spring API] ALB encaminha HTTP para o Pod/Instância (10.0.11.45:8080). Security Group autoriza porta 8080 com origem no SG do ALB.' }], delay: 600 },
      { node: 3, status: 'ok', logs: [{ cls: 'vh-ok', txt: '✅ [Subnet Isolada - PostgreSQL RDS] Spring Boot conecta via JDBC na porta 5432 (10.0.21.80). SG do RDS autoriza tráfego exclusivamente do SG da App. Transação executada com sucesso!' }], delay: 500 }
    ]);
  });

  if(btnDirectDb) btnDirectDb.addEventListener("click", function(){
    runScenario([
      { node: 0, logs: [{ cls: 'vh-info', txt: '[Atacante Externo] Varredura automatizada na internet tenta conexão direta na porta 5432 do IP privado do PostgreSQL (10.0.21.80).' }], delay: 500 },
      { node: 1, status: 'err', logs: [{ cls: 'vh-err', txt: '[Internet Gateway / VPC Edge] O bloco 10.0.21.0/24 é privado (RFC 1918). A Tabela de Rotas da Subnet de Dados não possui entrada 0.0.0.0/0 para o IGW.' }], delay: 600 },
      { node: 3, status: 'err', logs: [{ cls: 'vh-err', txt: '🚫 [DROP SILENCIOSO] Subnet Isolada sem rota externa e sem IP público. Pacotes descartados na borda da VPC. Banco de dados completamente invisível na internet pública!' }], delay: 500 }
    ]);
  });

  if(btnSgDrop) btnSgDrop.addEventListener("click", function(){
    runScenario([
      { node: 0, logs: [{ cls: 'vh-info', txt: '[Cliente Web] Requisição normal recebida no ALB.' }], delay: 500 },
      { node: 1, status: 'ok', logs: [{ cls: 'vh-ok', txt: '[Subnet Pública - ALB] ALB repassa requisição para a Spring Boot API.' }], delay: 500 },
      { node: 2, status: 'warn', logs: [{ cls: 'vh-warn', txt: '[Subnet Privada - App] Spring Boot tenta estabelecer conexão TCP na porta 5432 com o RDS (10.0.21.80).' }], delay: 550 },
      { node: 3, status: 'err', logs: [{ cls: 'vh-err', txt: '⚠️ [Security Group DROP] O Security Group do RDS NÃO possui regra de Ingress liberando a porta 5432 para o SG da aplicação. Pacote descartado silenciosamente (DROP L4).' }], delay: 600 },
      { node: 2, status: 'err', logs: [{ cls: 'vh-err', txt: '💥 [HikariCP ConnectionTimeout] Falha na aplicação: Connection to 10.0.21.80:5432 timed out (3000ms). Falhas de Security Group causam timeout por descarte silencioso, não Connection Refused!' }], delay: 500 }
    ]);
  });

  if(btnNat) btnNat.addEventListener("click", function(){
    runScenario([
      { node: 2, logs: [{ cls: 'vh-info', txt: '[Subnet Privada - App] Worker Spring Boot precisa chamar API externa da Stripe (https://api.stripe.com/v1) para confirmar pagamento.' }], delay: 500 },
      { node: 4, status: 'ok', logs: [{ cls: 'vh-ok', txt: '[Subnet Pública - NAT Gateway] Tabela de rotas da subnet privada direciona 0.0.0.0/0 para o NAT Gateway (10.0.1.100). NAT realiza Source NAT (SNAT), alocando seu IP público elástico.' }], delay: 600 },
      { node: 0, status: 'ok', logs: [{ cls: 'vh-ok', txt: '🌐 [Internet Pública] Pacote cruza o IGW, alcança a Stripe e recebe resposta 200 OK. NAT Gateway consulta sua connection tracking table e desfaz o NAT para 10.0.11.45.' }], delay: 550 },
      { node: 2, status: 'ok', logs: [{ cls: 'vh-ok', txt: '✅ [Retorno Seguro] Spring Boot recebe resposta da Stripe. Nenhum serviço externo conseguiu iniciar conexão para a rede privada!' }], delay: 500 }
    ]);
  });

  if(btnReset) btnReset.addEventListener("click", function(){
    clearState();
    setHud([{ cls: 'vh-info', txt: '[VPC Ativa · 10.0.0.0/16] Escolha um cenário acima para disparar o rastreamento de pacotes e regras de roteamento...' }]);
  });
})();

