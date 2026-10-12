/* Extraido de cadernos/governanca-seguranca.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 2 ---------- */

function W(h,inner){return '<figure class="dg"><svg viewBox="0 0 340 '+h+'" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg></figure>';}
var DG={
 "cadeia":W(150,"<text x=\"170\" y=\"16\" class=\"bt\">da intenção à evidência</text><rect x=\"8\" y=\"34\" width=\"72\" height=\"30\" rx=\"8\" class=\"b2\"/><text x=\"44\" y=\"53\" class=\"bs\">política</text><path d=\"M82,49 L104,49\" class=\"l\"/><path d=\"M104,49 L97,45 L97,53 Z\" class=\"h\"/><rect x=\"106\" y=\"34\" width=\"72\" height=\"30\" rx=\"8\" class=\"b2\"/><text x=\"142\" y=\"53\" class=\"bs\">padrão</text><path d=\"M180,49 L202,49\" class=\"l\"/><path d=\"M202,49 L195,45 L195,53 Z\" class=\"h\"/><rect x=\"204\" y=\"34\" width=\"86\" height=\"30\" rx=\"8\" class=\"b2\"/><text x=\"247\" y=\"53\" class=\"bs\">procedimento</text><rect x=\"106\" y=\"86\" width=\"128\" height=\"30\" rx=\"8\" class=\"b1\"/><text x=\"170\" y=\"105\" class=\"bs\">evidência</text><path d=\"M247,66 L186,86\" class=\"l\"/><path d=\"M186,86 L194,84 L191,92 Z\" class=\"h\"/><text x=\"170\" y=\"138\" class=\"bs\">sem evidência, a cadeia não fecha</text>"),
 "risco":W(152,"<text x=\"170\" y=\"16\" class=\"bt\">risco é cenário, não adjetivo</text><rect x=\"10\" y=\"32\" width=\"90\" height=\"34\" rx=\"8\" class=\"b5\"/><text x=\"55\" y=\"46\" class=\"bs\">ameaça +</text><text x=\"55\" y=\"60\" class=\"bs\">fraqueza</text><path d=\"M102,49 L126,49\" class=\"l\"/><path d=\"M126,49 L119,45 L119,53 Z\" class=\"h\"/><rect x=\"128\" y=\"32\" width=\"92\" height=\"34\" rx=\"8\" class=\"b2\"/><text x=\"174\" y=\"46\" class=\"bs\">impacto +</text><text x=\"174\" y=\"60\" class=\"bs\">probabilidade</text><path d=\"M222,49 L246,49\" class=\"l\"/><path d=\"M246,49 L239,45 L239,53 Z\" class=\"h\"/><rect x=\"248\" y=\"32\" width=\"84\" height=\"34\" rx=\"8\" class=\"b1\"/><text x=\"290\" y=\"53\" class=\"bs\">decisão</text><text x=\"170\" y=\"92\" class=\"bs\">evitar · reduzir · compartilhar · aceitar</text><text x=\"170\" y=\"120\" class=\"bs\">residual sem dono = aceito por omissão</text>"),
 "camadas":W(164,"<text x=\"170\" y=\"16\" class=\"bt\">camadas que falham por motivos diferentes</text><rect x=\"20\" y=\"30\" width=\"300\" height=\"20\" rx=\"6\" class=\"b2\"/><text x=\"170\" y=\"44\" class=\"bs\">identidade (MFA, escopo)</text><rect x=\"20\" y=\"56\" width=\"300\" height=\"20\" rx=\"6\" class=\"b2\"/><text x=\"170\" y=\"70\" class=\"bs\">aplicação (autorização no domínio)</text><rect x=\"20\" y=\"82\" width=\"300\" height=\"20\" rx=\"6\" class=\"b2\"/><text x=\"170\" y=\"96\" class=\"bs\">dados (segredo, cifra, minimização)</text><rect x=\"20\" y=\"108\" width=\"300\" height=\"20\" rx=\"6\" class=\"b1\"/><text x=\"170\" y=\"122\" class=\"bs\">detecção e recuperação</text><text x=\"170\" y=\"150\" class=\"bs\">se duas caem pelo mesmo motivo, é uma só</text>"),
 "iam":W(148,"<text x=\"170\" y=\"16\" class=\"bt\">duas perguntas, dois momentos</text><rect x=\"14\" y=\"34\" width=\"134\" height=\"38\" rx=\"8\" class=\"b2\"/><text x=\"81\" y=\"50\" class=\"bs\">AUTENTICAÇÃO</text><text x=\"81\" y=\"65\" class=\"bs\">quem é você?</text><rect x=\"192\" y=\"34\" width=\"134\" height=\"38\" rx=\"8\" class=\"b1\"/><text x=\"259\" y=\"50\" class=\"bs\">AUTORIZAÇÃO</text><text x=\"259\" y=\"65\" class=\"bs\">pode nisto, agora?</text><path d=\"M150,53 L190,53\" class=\"l\"/><path d=\"M190,53 L183,49 L183,57 Z\" class=\"h\"/><text x=\"170\" y=\"96\" class=\"bs\">a borda prova identidade</text><text x=\"170\" y=\"114\" class=\"bs\">o domínio decide sobre o recurso</text><text x=\"170\" y=\"134\" class=\"bs\">papel filtra quem tenta; atributo decide</text>"),
 "ciclo":W(154,"<text x=\"170\" y=\"16\" class=\"bt\">ciclo de vida do dado</text><rect x=\"8\" y=\"34\" width=\"68\" height=\"28\" rx=\"8\" class=\"b5\"/><text x=\"42\" y=\"52\" class=\"bs\">coleta</text><path d=\"M78,48 L98,48\" class=\"l\"/><path d=\"M98,48 L91,44 L91,52 Z\" class=\"h\"/><rect x=\"100\" y=\"34\" width=\"68\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"134\" y=\"52\" class=\"bs\">uso</text><path d=\"M170,48 L190,48\" class=\"l\"/><path d=\"M190,48 L183,44 L183,52 Z\" class=\"h\"/><rect x=\"192\" y=\"34\" width=\"68\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"226\" y=\"52\" class=\"bs\">retenção</text><path d=\"M262,48 L282,48\" class=\"l\"/><path d=\"M282,48 L275,44 L275,52 Z\" class=\"h\"/><rect x=\"284\" y=\"34\" width=\"48\" height=\"28\" rx=\"8\" class=\"b1\"/><text x=\"308\" y=\"52\" class=\"bs\">descarte</text><text x=\"170\" y=\"94\" class=\"bs\">backup e log seguem outra retenção</text><text x=\"170\" y=\"122\" class=\"bs\">o campo não coletado é o que não vaza</text>"),
 "sdlc":W(150,"<text x=\"170\" y=\"16\" class=\"bt\">o custo cresce com a distância</text><rect x=\"8\" y=\"34\" width=\"76\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"46\" y=\"52\" class=\"bs\">requisito</text><path d=\"M86,48 L104,48\" class=\"l\"/><path d=\"M104,48 L97,44 L97,52 Z\" class=\"h\"/><rect x=\"106\" y=\"34\" width=\"76\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"144\" y=\"52\" class=\"bs\">ameaças</text><path d=\"M184,48 L202,48\" class=\"l\"/><path d=\"M202,48 L195,44 L195,52 Z\" class=\"h\"/><rect x=\"204\" y=\"34\" width=\"60\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"234\" y=\"52\" class=\"bs\">código</text><path d=\"M266,48 L284,48\" class=\"l\"/><path d=\"M284,48 L277,44 L277,52 Z\" class=\"h\"/><rect x=\"286\" y=\"34\" width=\"46\" height=\"28\" rx=\"8\" class=\"b1\"/><text x=\"309\" y=\"52\" class=\"bs\">prod</text><text x=\"46\" y=\"86\" class=\"bs\">barato</text><text x=\"309\" y=\"86\" class=\"bs\">caro</text><text x=\"170\" y=\"118\" class=\"bs\">portão no fim só consegue reprovar</text>"),
 "incidente":W(152,"<text x=\"170\" y=\"16\" class=\"bt\">decidir antes, executar depois</text><rect x=\"6\" y=\"34\" width=\"62\" height=\"26\" rx=\"8\" class=\"b2\"/><text x=\"37\" y=\"51\" class=\"bs\">preparar</text><rect x=\"74\" y=\"34\" width=\"62\" height=\"26\" rx=\"8\" class=\"b2\"/><text x=\"105\" y=\"51\" class=\"bs\">detectar</text><rect x=\"142\" y=\"34\" width=\"56\" height=\"26\" rx=\"8\" class=\"b1\"/><text x=\"170\" y=\"51\" class=\"bs\">conter</text><rect x=\"204\" y=\"34\" width=\"66\" height=\"26\" rx=\"8\" class=\"b2\"/><text x=\"237\" y=\"51\" class=\"bs\">recuperar</text><rect x=\"276\" y=\"34\" width=\"58\" height=\"26\" rx=\"8\" class=\"b2\"/><text x=\"305\" y=\"51\" class=\"bs\">aprender</text><text x=\"170\" y=\"88\" class=\"bs\">preservar evidência briga com restaurar</text><text x=\"170\" y=\"116\" class=\"bs\">a ordem se define em tempo de paz</text>"),
 "ciclo-aprender":W(148,"<text x=\"170\" y=\"16\" class=\"bt\">o ciclo que fixa</text><rect x=\"10\" y=\"34\" width=\"62\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"41\" y=\"52\" class=\"bs\">ler</text><path d=\"M74,48 L92,48\" class=\"l\"/><path d=\"M92,48 L85,44 L85,52 Z\" class=\"h\"/><rect x=\"94\" y=\"34\" width=\"62\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"125\" y=\"52\" class=\"bs\">vídeo</text><path d=\"M158,48 L176,48\" class=\"l\"/><path d=\"M176,48 L169,44 L169,52 Z\" class=\"h\"/><rect x=\"178\" y=\"34\" width=\"68\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"212\" y=\"52\" class=\"bs\">fonte</text><path d=\"M248,48 L266,48\" class=\"l\"/><path d=\"M266,48 L259,44 L259,52 Z\" class=\"h\"/><rect x=\"268\" y=\"34\" width=\"62\" height=\"28\" rx=\"8\" class=\"b1\"/><text x=\"299\" y=\"52\" class=\"bs\">decidir</text><path d=\"M299,64 L176,98\" class=\"l dash\"/><text x=\"170\" y=\"114\" class=\"bs\">escrever a decisão é a volta que fixa</text>")
};

var T=[
{g:"01",n:"O que é governança, e por que ela existe",s:"Direção, gestão e segurança são três coisas diferentes. Confundi-las é a origem ",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"Governança, gestão e segurança são três coisas diferentes",x:"Governança determina direção, limites e prestação de contas. Gestão pl…",dg:"cadeia",oq:"Governança determina direção, limites e prestação de contas. Gestão planeja e executa dentro desses limites. Segurança é o resultado contínuo: reduzir a chance e o impacto de uso indevido, indisponibilidade, alteração ou exposição de informação. Confundir os três é o que faz reunião de segurança virar discussão sem dono.",ps:"Transformar \"alguém deveria cuidar disso\" em \"esta pessoa decide, neste fórum, com este critério, e a evidência fica aqui\". Sem isso, todo risco vira responsabilidade difusa, e responsabilidade difusa é o mesmo que nenhuma.",cf:"O arranjo tem quatro níveis, e cada um produz um artefato diferente. A política expressa intenção e regra (\"acesso administrativo é temporário\"). O padrão define o requisito obrigatório (\"máximo de 8 horas, com aprovação registrada\"). O procedimento descreve a execução (\"peça por este formulário; o  <b>Erro comum:</b> Tratar conformidade como segurança. Auditoria aprovada diz que, na data da amostragem, os requisitos verificados estavam atendidos. Não diz que o ambiente está seguro hoje.",caso:"Um serviço de pedidos cai por três horas numa sexta-feira. Na reunião seguinte, alguém pergunta \"de quem é a culpa?\". A pergunta certa é outra, em três camadas: a direção já tinha dito qual indisponibilidade era aceitável para esse serviço? A gestão traduziu isso em orçamento, redundância e plantão? A engenharia implementou e mediu? Sem a primeira resposta, as outras duas são chute — e ninguém é responsável porque nunca ficou escrito quem era."},
 {t:"Risco é um cenário com dono, não um adjetivo",x:"Risco combina um cenário de ameaça, uma fraqueza explorável, um impact…",dg:"risco",oq:"Risco combina um cenário de ameaça, uma fraqueza explorável, um impacto e uma probabilidade. A avaliação orienta decisão; ela não prevê o futuro com precisão matemática. Dizer \"risco alto\" sem descrever o que pode acontecer é não ter dito nada.",ps:"Permitir comparar riscos entre si para decidir onde gastar o próximo real e a próxima hora de engenharia. Sem cenário, não há comparação possível — e sem comparação, a priorização é política, não técnica.",cf:"Para avaliar, descreva um cenário concreto e identifique: ativo, ameaça, vulnerabilidade, controles existentes, impacto, probabilidade e o grau de incerteza da sua estimativa. Esse último item é o mais esquecido — assumir precisão que você não tem é como dar um número de latência sem ter medido. As  <b>Erro comum:</b> Usar \"risco alto\" sem cenário. Não é avaliação, é adjetivo. Exija a frase completa: o que acontece, com qual ativo, por qual caminho, com qual impacto.",caso:"Uma planilha de riscos classifica dezessete itens como \"alto\". Nenhum deles tem cenário escrito. Na hora de priorizar orçamento, ninguém consegue defender um contra o outro, e a decisão acaba sendo por quem falou mais alto na reunião. Reescritos como cenário, dois viram prioridade óbvia: \"credencial de serviço vazada no build permite exportar a base de clientes\" e \"backup nunca foi testado para restauração\". Os outros quinze viram itens de rotina."}
]},
{g:"02",n:"Risco",s:"Controle sem cenário é ritual. Primeiro o que pode acontecer, para quem dói e qu",c:"var(--cyan)",cs:"var(--cyan-soft)",items:[
 {t:"Defesa em profundidade: nenhuma barreira única",x:"Não dependa de uma só barreira. Camadas independentes — endpoint, rede…",dg:"camadas",oq:"Não dependa de uma só barreira. Camadas independentes — endpoint, rede, identidade, aplicação, dados, monitoramento e recuperação — fazem com que ultrapassar uma não entregue o resto. É o oposto de \"temos firewall, estamos protegidos\".",ps:"Limitar o que um invasor consegue fazer <i>depois</i> de passar pela primeira barreira. Toda camada individual vai falhar algum dia; o desenho em profundidade garante que a falha de uma não seja a falha do sistema.",cf:"Privilégio mínimo limita permissão e duração . As duas dimensões importam: uma conta com acesso amplo por cinco minutos é um risco diferente de uma com acesso estreito por dois anos. Acesso temporário com aprovação registrada resolve a maior parte dos casos de \"preciso de admin para depurar\". Numa a <b>Erro comum:</b> Chamar de camada o que depende da mesma raiz. Três controles ligados ao mesmo diretório caem juntos. Camada só conta se falhar por motivo diferente.",caso:"Um atacante consegue a senha de um desenvolvedor por phishing. Com uma barreira só, acabou: ele entra na VPN e alcança tudo que está \"dentro da rede\". Com camadas, o estrago para no primeiro degrau — o MFA bloqueia o login; se passar, a conta só tem permissão de leitura no seu próprio serviço; se escalar, o acesso ao banco exige credencial de outro cofre; e a exportação em volume incomum dispara alerta. Nenhuma camada é perfeita. O conjunto é que segura."}
]},
{g:"03",n:"Identidade e acesso",s:"A maior parte dos incidentes passa por uma credencial que podia menos do que pod",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"IAM: autenticação responde quem, autorização responde o quê",x:"Autenticação responde \"quem é você?\". Autorização responde \"o que você…",dg:"iam",oq:"Autenticação responde \"quem é você?\". Autorização responde \"o que você pode fazer neste recurso, agora?\". São decisões separadas, em momentos separados, e confundi-las é a origem da maior parte das falhas de acesso em aplicação.",ps:"Garantir que uma credencial comprometida alcance o mínimo possível, e que o acesso de cada pessoa acompanhe a função que ela realmente exerce hoje — não a soma de tudo que ela já exerceu.",cf:"A identidade é comprovada por fatores; a autenticação estabelece uma sessão ou emite um token; a autorização avalia papel, escopo, recurso, ação e contexto. O IAM governa o ciclo de vida inteiro: entrada, mudança de função, revisão periódica e remoção — e é na mudança de função que o acesso se acumu <b>Erro comum:</b> Esconder o botão e chamar de autorização. O front-end melhora a experiência; ele não protege nada. Se a API aceita, a proteção não existe.",caso:"Um endpoint administrativo esconde o botão no front-end para quem não é ADMIN. Um usuário comum abre o painel de rede do navegador, copia a chamada e a repete com o próprio token válido. A API responde 200. O token estava correto — ele era quem dizia ser. Ninguém nunca perguntou se ele podia."}
]},
{g:"04",n:"Dados",s:"O dado que você não guarda é o único que não vaza.",c:"var(--orange)",cs:"var(--orange-soft)",items:[
 {t:"Dados: o que você não guarda é o que não vaza",x:"Descubra quais dados existem, para que servem e quem os acessa. Colete…",dg:"ciclo",oq:"Descubra quais dados existem, para que servem e quem os acessa. Colete o necessário, proteja durante todo o ciclo de vida e elimine quando não houver justificativa para manter. Minimização é o único controle que reduz risco e custo ao mesmo tempo.",ps:"Reduzir superfície e custo ao mesmo tempo: menos dados e menos cópias significam menos lugares para proteger, menos exposição em caso de incidente e menos esforço para atender um pedido de exclusão ou de portabilidade.",cf:"Inventarie dados e fluxos, não apenas tabelas: coleta, uso, compartilhamento, armazenamento, backup, exportação, retenção e descarte. Classifique a sensibilidade, restrinja acesso, proteja transporte e armazenamento, e trate cópias e ambientes de teste como parte do escopo — eles quase sempre ficam  <b>Erro comum:</b> Mascarar na tela e achar que resolveu. A máscara é de apresentação. O dado continua no log, no backup, na exportação e nas fixtures.",caso:"O pedido precisa do endereço para a entrega. Alguém copia o endereço para o log de depuração \"só para investigar um bug\". Seis meses depois esse campo está no log, no sistema de análise, no backup de 90 dias e nas fixtures de teste que todo desenvolvedor tem na máquina. Mascarar o endereço na tela não remove nenhuma dessas cópias — e, quando chega um pedido de exclusão do titular, ninguém sabe dizer onde o dado está."}
]},
{g:"05",n:"Construir e operar com segurança",s:"Do requisito ao postmortem, sem transformar segurança em portão no fim da esteir",c:"var(--pink)",cs:"var(--pink-soft)",items:[
 {t:"Secure SDLC: segurança cedo, não como portão no fim",x:"Identificar abuso e requisitos cedo, reduzir vulnerabilidade no código…",dg:"sdlc",oq:"Identificar abuso e requisitos cedo, reduzir vulnerabilidade no código e nas dependências, e manter controles no pipeline e em produção. Segurança no fim da esteira só consegue reprovar — e reprovar tarde é caro demais para ser feito com frequência.",ps:"Fazer com que a correção aconteça quando ela ainda é barata — no requisito e no desenho — em vez de virar dívida negociada contra prazo na véspera do lançamento.",cf:"O fluxo prático: requisitos de segurança e privacidade → modelagem de ameaças → desenho de controles → implementação → revisão e testes → publicação com proveniência → monitoramento → correção e aprendizado. Cada etapa produz algo verificável, e a modelagem de ameaças é a que mais economiza retrabal <b>Erro comum:</b> Tratar o Top 10 como checklist de aprovação. É conscientização, não norma. Nenhuma aplicação fica segura por \"cobrir as dez\".",caso:"Uma funcionalidade de exportação de relatórios entra em revisão de segurança na véspera do lançamento. O revisor aponta que qualquer usuário autenticado consegue exportar dados de outra organização. A correção exige mudar o modelo de consulta, que já está em três telas. O time escolhe lançar com um filtro no front-end e \"corrigir na próxima sprint\". O filtro vai para produção; a próxima sprint tem outras prioridades."},
 {t:"Incidente: conter, preservar, recuperar e aprender",x:"Incidente é um evento que exige coordenação para conter impacto, prese…",dg:"incidente",oq:"Incidente é um evento que exige coordenação para conter impacto, preservar evidência, recuperar o serviço e cumprir as comunicações cabíveis. O improviso custa caro justamente no momento em que ninguém tem cabeça para improvisar.",ps:"Transformar um momento de pânico em sequência conhecida, de modo que as decisões difíceis já tenham sido tomadas antes e o time possa executar em vez de deliberar.",cf:"O ciclo: preparar papéis e runbooks; detectar e classificar; conter; erradicar a causa; recuperar com segurança; comunicar as partes interessadas; e fazer revisão sem culpa, com ações que têm dono e prazo e são acompanhadas até o fim. Observabilidade segura é o que torna o resto possível: métricas,  <b>Erro comum:</b> Recriar a instância antes de capturar evidência. Resolve o serviço e encerra a investigação junto. Decida a ordem por classe de incidente, antes.",caso:"Um token de serviço aparece num repositório público. O relógio começa a correr, e a ordem importa: revogar e rotacionar a credencial; identificar o que ela alcançava e o que foi usado desde a exposição; limitar o acesso afetado; preservar os logs antes que a retenção os apague; corrigir a origem — o segredo que entrou no build; e avaliar, com quem é competente, as obrigações de comunicação. Fazer isso sem um runbook, às onze da noite, é como aprender a dirigir na estrada."}
]},
{g:"06",n:"Como aprender de verdade",s:"Governança é a área em que é mais fácil decorar sigla e não saber decidir nada.",c:"var(--amber)",cs:"var(--amber-soft)",items:[
 {t:"O ciclo, as fontes e como praticar",x:"Governança é a área em que é mais fácil decorar sigla e não saber deci…",dg:"ciclo-aprender",oq:"Governança é a área em que é mais fácil decorar sigla e não saber decidir nada. O ciclo que fixa é o mesmo dos outros cadernos — ler, ver, conferir na fonte, praticar, escrever — com uma diferença: aqui a prática é defender uma decisão, não rodar um comando.",ps:"Transformar vocabulário em capacidade de decidir. O teste não é explicar o que é risco residual; é apontar, num sistema real, qual é o risco residual e quem o aceitou.",cf:"O ciclo. Ler este caderno → ver um vídeo que dê o mapa → conferir na fonte oficial (NIST, ANPD, OWASP) → fazer o laboratório → escrever a nota do que mudou de ideia → repetir. A volta é a parte que fixa, e é a que quase todo mundo pula. Canais e cursos em português. Não listo nomes aqui sem ter veri <b>Erro comum:</b> pular a etapa de decidir quem aceita o risco.",caso:"Você lê sobre Zero Trust, assiste a um vídeo e consegue explicar o conceito. Na primeira reunião real, alguém pergunta: \"e o que muda no nosso serviço de pedidos na segunda-feira?\". Reconhecer o conceito não respondeu nada. O que responde é ter escrito, para um sistema concreto, quais acessos deixam de ser implícitos e o que isso custa."}
]}
];

/* ---------- render ---------- */
var nav=document.getElementById("nav");
var navMap={};
function navHead(txt){var a=document.createElement("a");a.className="sec";a.style.color="var(--soft)";a.style.marginTop="18px";a.style.fontSize=".68rem";a.textContent=txt;nav.appendChild(a);}
var flat=[];T.forEach(function(g){g.items.forEach(function(it){it._g=g;flat.push(it);});});
flat.forEach(function(it,i){it._i=i;it._id=it.t.toLowerCase().replace(/[^a-z0-9]+/g,'-');});
var KEYT="governanca-seguranca-CL-trilha-v1";
var doneT={};try{doneT=JSON.parse(localStorage.getItem(KEYT)||"{}");}catch(e){}
var track=document.getElementById("track"),lg=document.getElementById("lg");
navHead("A trilha · 9 marcos");
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
  if(it.caso)h+='<div class="blk"><h4>No caso concreto</h4><p>'+it.caso+'</p></div>';
  if(it.map)h+='<div class="blk"><h4>Onde a teoria mora</h4><table class="vmap"><tbody>'+it.map.map(function(r){return '<tr><td class="vp">'+r[0]+'</td><td>'+r[1]+'</td></tr>';}).join('')+'</tbody></table></div>';
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
  e=e.replace(/(#[^\n]*)/g,'<span class="c">$1</span>');
  e=e.replace(/"([^"\n]*)"/g,'<span class="s">"$1"</span>');
  e=e.replace(/\b(git|checkout|switch|restore|reset|revert|rebase|merge|cherry|pick|stash|worktree|bisect|reflog|fsck|commit|push|pull|fetch|branch|tag|log|show|diff|blame|add|status|clone|remote|init)\b/g,'<span class="k">$1</span>');
  e=e.replace(/(--[a-z-]+)/g,'<span class="t">$1</span>');
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
var parts=[].slice.call(document.querySelectorAll("section.part"));
var entries=[];
navHead("O conteúdo · 9 partes");
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
var KEYM="governanca-seguranca-CL-conteudo-v1";
var doneM={};try{doneM=JSON.parse(localStorage.getItem(KEYM)||"{}");}catch(e){}
var botoes=[].slice.call(document.querySelectorAll(".done"));
botoes.forEach(function(b){
  b.addEventListener("click",function(){
    var k=b.dataset.k;
    if(doneM[k])delete doneM[k];else doneM[k]=1;
    localStorage.setItem(KEYM,JSON.stringify(doneM));paint();
  });
});
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
var q=document.getElementById("q");
q.addEventListener("input",function(){
  var v=q.value.trim().toLowerCase(),vis=0;
  document.querySelectorAll(".node").forEach(function(b){
    var it=flat[+b.dataset.i];
    var txt=(it.t+" "+it.x+" "+it.oq+" "+it.ps+" "+it.cf+" "+(it.caso||"")).toLowerCase();
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
function hl(el){
  var e=el.textContent.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  var store=[];
  function keep(cls,txt){store.push('<span class="'+cls+'">'+txt+'</span>');return "§"+(store.length-1)+"§";}
  e=e.replace(/(#[^\n]*)/g,function(m){return keep("c",m);});
  e=e.replace(/("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')/g,function(m){return keep("s",m);});
  e=e.replace(/(--?[a-zA-Z][a-zA-Z0-9-]*)/g,function(m){return keep("t",m);});
  e=e.replace(/\b(git|add|commit|push|pull|fetch|clone|init|remote|branch|checkout|switch|restore|reset|revert|merge|rebase|tag|log|show|diff|status|stash|worktree|bisect|reflog|fsck|blame|apply|format|patch|gc|config|submodule|cherry)\b/g,'<span class="k">$1</span>');
  e=e.replace(/\b([0-9a-f]{7,40})\b/g,'<span class="n">$1</span>');
  e=e.replace(/§(\d+)§/g,function(_,i){return store[+i];});
  el.innerHTML=e;
}
document.querySelectorAll("section.part pre code").forEach(hl);
paint();onScroll();
(function(){
 var RK="governanca-seguranca-CL-rev-v1";
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


/* ---------- bloco 2 de 2 ---------- */

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
