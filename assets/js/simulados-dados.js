/* Banco de questões dos simulados. Questões ORIGINAIS, escritas a partir dos guias de estudo oficiais.
   Não são questões reais das provas: essas são confidenciais pelo acordo do candidato.
   Formato: {id, t: tópico, d: índice do domínio, q: enunciado, o: [alternativas], c: índice da correta, e: explicação}.
   A AZ-900 vem de simulados-az900-a/b/c.js (20 questões por tópico), que precisam ser carregados antes deste arquivo.
   As alternativas são embaralhadas na hora de mostrar. */
window.SIMULADOS = window.SIMULADOS || {};
window.SIMULADOS["az-900"] = {
  nome: "AZ-900 · Microsoft Azure Fundamentals",
  corte: 70,
  oficial: { rotulo: "Simulado oficial da Microsoft", url: "https://learn.microsoft.com/pt-br/credentials/certifications/azure-fundamentals/practice/assessment?assessment-type=practice&assessmentId=23&practice-assessment-type=certification" },
  dominios: ["Conceitos de nuvem", "Arquitetura e serviços do Azure", "Gestão e governança"],
  topicos: {t01:"Computação em nuvem e responsabilidade compartilhada",t02:"Modelos de nuvem",t03:"Gasto de capital e operacional",t04:"Benefícios da nuvem",t05:"IaaS, PaaS e SaaS",t06:"Regiões e zonas",t07:"Hierarquia de recursos",t08:"Máquinas virtuais",t09:"Contêineres, Functions e App Service",t10:"Rede virtual e conectividade",t11:"Armazenamento",t12:"Mover e migrar dados",t13:"Identidade e Entra ID",t14:"RBAC, Zero Trust e defesa em profundidade",t15:"Custos",t16:"Governança e conformidade",t17:"Ferramentas de gerenciamento",t18:"Monitoramento"},
  qs: (function(){var T=window.SIM_AZ900||{},out=[];Object.keys(T).sort().forEach(function(t){var n=+t.slice(1),d=n<=5?0:n<=14?1:2;T[t].forEach(function(x,j){out.push({id:"az-"+t+"-"+String(j+1).padStart(2,"0"),t:t,d:d,q:x[0],o:x[1],c:x[2],e:x[3]});});});return out;})()
};
window.SIMULADOS["ai-200"] = {
  nome: "AI-200 · Azure AI Cloud Developer Associate",
  corte: 70,
  oficial: { rotulo: "Simulado oficial da Microsoft", url: "https://aka.ms/AI200-PA" },
  dominios: ["Soluções em contêineres", "Dados para soluções de IA", "Conectar e consumir serviços", "Segurança, monitoramento e diagnóstico"],
  topicos: {"a2-01":"Imagens e Azure Container Registry","a2-02":"Azure Container Apps: publicar, revisões e tráfego","a2-03":"Container Apps: escala, segredos e diagnóstico","a2-04":"Azure Kubernetes Service (AKS)","a2-05":"Embeddings e busca vetorial","a2-06":"Azure Cosmos DB for NoSQL com busca vetorial","a2-07":"Azure Database for PostgreSQL com pgvector","a2-08":"Azure Managed Redis: cache e cache semântico","a2-09":"Escolher o armazenamento para um RAG","a2-10":"SDKs do Azure em Python: autenticação, erros e novas tentativas","a2-11":"Mensageria e eventos: Service Bus, Event Grid e Event Hubs","a2-12":"Consumir modelos implantados","a2-13":"Azure API Management como gateway","a2-14":"Identidade gerenciada e controle de acesso","a2-15":"Key Vault e App Configuration","a2-16":"Logs, métricas e rastros com Application Insights","a2-17":"Diagnóstico de falhas comuns"},
  qs: (function(){var T=window.SIM_AI200||{},out=[];Object.keys(T).sort().forEach(function(t){var n=+t.slice(3),d=n<=4?0:n<=9?1:n<=13?2:3;T[t].forEach(function(x,j){out.push({id:"ai200-"+t+"-"+String(j+1).padStart(2,"0"),t:t,d:d,q:x[0],o:x[1],c:x[2],e:x[3]});});});return out;})()
};
window.SIMULADOS["ai-103"] = {
  nome: "AI-103 · Azure AI Apps and Agents Developer Associate",
  corte: 70,
  oficial: { rotulo: "Simulado oficial da Microsoft", url: "https://aka.ms/AI103-PA" },
  dominios: ["Planejar e gerenciar uma solução de IA","IA generativa e agentes","Visão computacional","Análise de texto","Extração de informação"],
  topicos: {"a3-01":"Microsoft Foundry: recurso, projeto e deployment","a3-02":"Escolher o modelo e o tipo de deployment","a3-03":"Segurança e acesso","a3-04":"Custo, cota e monitoramento","a3-05":"IA responsável e filtros de conteúdo","a3-06":"Prompts, parâmetros e saída estruturada","a3-07":"RAG com Azure AI Search","a3-08":"Agentes no Foundry Agent Service","a3-09":"Vários agentes e orquestração","a3-10":"Avaliação de aplicações e agentes","a3-11":"Ajuste fino: quando compensa","a3-12":"Análise de imagem e leitura de texto","a3-13":"Modelos personalizados de visão","a3-14":"Azure AI Language","a3-15":"Fala e tradução","a3-16":"Extração de documentos: Document Intelligence e Content Understanding","a3-17":"Mineração de conhecimento"},
  qs: (function(){var T=window.SIM_AI103||{},out=[];Object.keys(T).sort().forEach(function(t){var n=+t.slice(3),d=n<=5?0:n<=11?1:n<=13?2:n<=15?3:4;T[t].forEach(function(x,j){out.push({id:"ai103-"+t+"-"+String(j+1).padStart(2,"0"),t:t,d:d,q:x[0],o:x[1],c:x[2],e:x[3]});});});return out;})()
};
window.SIMULADOS["clf-c02"] = {
  nome: "CLF-C02 · AWS Certified Cloud Practitioner",
  corte: 70,
  oficial: { rotulo: "Preparação oficial no AWS Skill Builder", url: "https://skillbuilder.aws/category/exam-prep/cloud-practitioner-foundational-CLF-C02" },
  dominios: ["Conceitos de nuvem","Segurança e conformidade","Tecnologia e serviços de nuvem","Cobrança, preços e suporte"],
  topicos: {"cp-01":"Benefícios da nuvem AWS","cp-02":"Well-Architected Framework","cp-03":"Adoção e migração para a nuvem","cp-04":"Modelo de responsabilidade compartilhada da AWS","cp-05":"IAM e a conta raiz","cp-06":"Serviços de segurança","cp-07":"Conformidade, auditoria e governança","cp-08":"Infraestrutura global","cp-09":"Computação: EC2, Lambda e contêineres","cp-10":"Armazenamento: S3, EBS e EFS","cp-11":"Bancos de dados","cp-12":"Rede e entrega de conteúdo","cp-13":"Serviços de IA, análise e integração","cp-14":"Modelos de compra e preços","cp-15":"Ferramentas de custo e planos de suporte"},
  qs: (function(){var T=window.SIM_CLF||{},out=[];Object.keys(T).sort().forEach(function(t){var n=+t.slice(3),d=n<=3?0:n<=7?1:n<=13?2:3;T[t].forEach(function(x,j){out.push({id:"clf-"+t+"-"+String(j+1).padStart(2,"0"),t:t,d:d,q:x[0],o:x[1],c:x[2],e:x[3]});});});return out;})()
};
