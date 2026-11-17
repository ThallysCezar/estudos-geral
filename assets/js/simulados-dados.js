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
