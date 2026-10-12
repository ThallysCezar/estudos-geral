// Reescreve os distratores do banco de revisao da home.
// Problema medido: a alternativa correta era a mais longa em 19 de 19 questoes
// (media de 179 caracteres contra 76 das erradas) e ficava sempre em A ou B.
// Dava para gabaritar escolhendo a maior sem ler a pergunta.
//
// A correcao nao e encurtar a correta: e tornar os distratores plausiveis e
// igualmente densos. Distrator bom e um equivoco que alguem teria de verdade.
import fs from 'node:fs';
import path from 'node:path';

const RAIZ = process.argv[2];
const GRAVAR = process.argv.includes('--gravar');
const ARQ = path.join(RAIZ, 'assets/js/microlearning-data.js');

// id -> novos textos das alternativas ERRADAS, na ordem em que aparecem hoje
const NOVOS = {
  'ml-java-01': [
    'O valor final será exatamente 20.000: ao marcar a variável como volatile, a JVM insere barreiras de memória que tornam a leitura e a escrita uma operação indivisível.',
    'O resultado fica entre 10.000 e 20.000 porque volatile serializa o acesso de escrita, mas permite que leituras concorrentes enxerguem valores de versões anteriores.',
    'O valor final será 0: como volatile força a leitura direto da memória principal, cada thread sobrescreve o trabalho da outra a cada iteração do laço.',
  ],
  'ml-java-02': [
    'A Virtual Thread é descartada e recriada a cada bloqueio em synchronized, o que gera custo de alocação alto mas mantém a Carrier Thread sempre livre para outras tarefas.',
    'O escalonador detecta o bloqueio e migra a Virtual Thread para outra Carrier Thread do pool, de modo que o paralelismo se mantém às custas de troca de contexto extra.',
    'O bloco synchronized é convertido automaticamente em ReentrantLock pelo compilador a partir do Java 21, eliminando qualquer impacto sobre a Carrier Thread.',
  ],
  'ml-spring-01': [
    'A transação abre normalmente: o Spring reescreve o bytecode da classe em tempo de carga, de modo que mesmo chamadas internas via this passam pelo interceptador transacional.',
    'A transação abre, mas com propagação REQUIRES_NEW implícita, criando uma segunda conexão com o banco e podendo esgotar o pool sob carga concorrente.',
    'A chamada falha em tempo de execução com uma exceção de proxy, porque o Spring proíbe invocação interna de métodos anotados com @Transactional.',
  ],
  'ml-spring-02': [
    'Porque a injeção por campo cria dependência circular em tempo de execução, enquanto o construtor resolve o grafo de beans de forma preguiçosa e evita o ciclo.',
    'Porque campos anotados com @Autowired só são preenchidos após o primeiro acesso, o que torna o bean inutilizável dentro de blocos @PostConstruct.',
    'Porque a injeção por construtor permite que o Spring pule a criação de proxies, reduzindo o consumo de memória do contexto em aplicações com muitos beans.',
  ],
  'ml-arq-01': [
    'Nenhum risco relevante: a anotação @Transactional estende a transação do banco ao broker, de modo que uma falha na publicação desfaz o save automaticamente.',
    'O risco é de duplicidade: se o broker demorar a confirmar, o Spring reenvia a mensagem, e o consumidor processa o mesmo pedido mais de uma vez.',
    'O risco é de ordenação: a mensagem pode chegar ao consumidor antes de o commit no banco terminar, fazendo o consumidor ler um pedido que ainda não existe.',
  ],
  'ml-arq-02': [
    'Quando os serviços pertencem a times diferentes e deseja-se o menor acoplamento possível, já que cada um reage a eventos sem conhecer o fluxo completo.',
    'Quando o fluxo precisa de consistência forte entre os passos, porque só o orquestrador consegue manter uma transação distribuída aberta até o final.',
    'Quando o volume de transações é baixo, já que a orquestração centralizada não escala além de algumas centenas de execuções simultâneas por instância.',
  ],
  'ml-dock-01': [
    'A aplicação Java ignora SIGTERM por padrão: a JVM só encerra com SIGKILL, e por isso é preciso registrar um shutdown hook explícito no código da aplicação.',
    'O período de carência do Kubernetes é curto demais para a JVM: aumentar terminationGracePeriodSeconds resolve, porque o encerramento limpo leva mais tempo.',
    'O comando em Shell Form roda em um subshell com PID diferente de 1, e o Kubernetes só envia sinais para o processo de PID 1, que neste caso é o próprio kubelet.',
  ],
  'ml-dock-02': [
    'Apenas removerá o Pod dos endpoints do Service até o banco responder, porque falha de dependência externa é tratada como indisponibilidade temporária.',
    'Marcará o Pod como NotReady e acionará o HPA para criar réplicas adicionais, na tentativa de distribuir a carga que o banco não está conseguindo atender.',
    'Manterá o Pod em execução e apenas registrará o evento, já que o kubelet diferencia falha de dependência externa de falha do próprio processo.',
  ],
  'ml-cloud-01': [
    'O HikariCP enfileira as requisições que excedem o limite do pool, de modo que o banco recebe no máximo as 25 conexões por pod e a latência apenas aumenta.',
    'O Kubernetes reduz automaticamente o número de réplicas ao detectar erros de conexão, estabilizando o sistema num patamar que o banco consegue atender.',
    'O PostgreSQL aceita as 1.000 conexões sem erro, mas o tempo de resposta cresce de forma linear porque cada conexão ocupa apenas memória compartilhada.',
  ],
  'ml-cloud-02': [
    'Colocar os recursos em Subnet Pública com IP público, restringindo o tráfego de entrada por Security Group, já que a saída para a internet exige rota direta.',
    'Usar Subnet Privada com um Internet Gateway associado diretamente à tabela de rotas, que permite saída sem expor os recursos a conexões de entrada.',
    'Manter os recursos em Subnet Privada sem rota externa e baixar as atualizações por um bastion host, copiando os pacotes manualmente para cada nó.',
  ],
  'ml-msg-01': [
    'A mensagem é descartada após a primeira falha, porque o Spring AMQP considera erro de desserialização como irrecuperável e não faz nova tentativa.',
    'A mensagem é reenfileirada ao final da fila, de modo que as demais são processadas primeiro e o problema só reaparece quando a fila esvazia.',
    'O RabbitMQ move a mensagem automaticamente para uma Dead Letter Queue após três tentativas, que é o padrão do broker para exceções no consumidor.',
  ],
  'ml-msg-02': [
    'O RabbitMQ mantém as mensagens em log particionado e permite releitura por offset; o Kafka remove a mensagem assim que o consumidor confirma o recebimento.',
    'Ambos removem a mensagem após o ACK, mas o Kafka replica o dado entre brokers antes de confirmar, o que garante durabilidade maior com a mesma semântica.',
    'O RabbitMQ distribui cada mensagem para todos os consumidores inscritos; o Kafka entrega cada mensagem a um único consumidor por grupo, sem retenção.',
  ],
  'ml-sd-01': [
    'O trade-off ocorre entre Disponibilidade e Consistência, exatamente como na partição: o PACELC apenas estende o CAP para o caso de rede saudável.',
    'Deve-se ponderar entre custo de infraestrutura e consistência, porque manter réplicas sincronizadas exige mais nós e aumenta a fatura do cluster.',
    'O trade-off é entre durabilidade e latência: gravar em disco antes de responder protege contra perda, mas atrasa a confirmação ao cliente.',
  ],
  'ml-sd-02': [
    'A aplicação grava no cache e no banco na mesma operação, de forma síncrona, garantindo que leitura e escrita nunca divirjam entre as duas camadas.',
    'A aplicação grava apenas no cache e um processo assíncrono persiste no banco depois, reduzindo a latência de escrita ao custo de risco de perda.',
    'O cache é populado antecipadamente por um job que varre as tabelas mais acessadas, de modo que a aplicação nunca enfrenta um miss em horário de pico.',
  ],
  'ml-ia-01': [
    'Porque a busca vetorial é computacionalmente cara e o BM25 funciona como um filtro inicial barato, reduzindo o conjunto antes de aplicar os embeddings.',
    'Porque os embeddings perdem precisão em textos longos, e o BM25 compensa recuperando documentos inteiros em vez de fragmentos isolados do índice.',
    'Porque o BM25 garante recuperação ordenada por data de publicação, o que os embeddings não conseguem fazer por desconhecerem metadados temporais.',
  ],
  'ml-ia-02': [
    'Reduzir o consumo de memória da GPU descartando os vetores de atenção dos tokens mais antigos, mantendo apenas a janela recente ativa em memória.',
    'Armazenar os prompts mais frequentes para devolver a mesma resposta sem acionar o modelo, economizando custo de inferência em perguntas repetidas.',
    'Manter os pesos das camadas de atenção em memória rápida entre requisições, evitando recarregar o modelo do disco a cada nova chamada da API.',
  ],
  'ml-lin-01': [
    'O comando rm apenas remove a entrada do diretório, mas o espaço só é liberado após o próximo ciclo de sincronização do journal do sistema de arquivos.',
    'O arquivo foi removido corretamente, mas a ferramenta df usa um cache de metadados que só é atualizado quando a partição é remontada.',
    'O espaço foi liberado no inode, porém o sistema de arquivos reserva por padrão 5% do volume para o usuário root, o que mantém o indicador em 100%.',
  ],
  'ml-git-01': [
    'Porque o --force-with-lease reescreve apenas os commits que você criou, preservando automaticamente qualquer commit que outra pessoa tenha enviado à branch.',
    'Porque o --force descarta o reflog do repositório remoto, tornando impossível recuperar o histórico anterior, enquanto o --force-with-lease o preserva.',
    'Porque o --force-with-lease cria um merge implícito entre a sua versão e a remota, evitando que o histórico de quem já puxou a branch seja invalidado.',
  ],
  'ml-cb-01': [
    'Porque o índice composto só é usado quando todas as colunas aparecem na cláusula WHERE, e consultas que filtram por uma delas caem em varredura completa.',
    'Porque o otimizador descarta índices cuja seletividade estimada é inferior a dez por cento das linhas, preferindo ler a tabela inteira de forma sequencial.',
    'Porque funções aplicadas sobre a coluna indexada impedem o uso do índice, já que o valor calculado não corresponde ao que está armazenado na estrutura.',
  ],
};

const src = fs.readFileSync(ARQ, 'utf8');
const win = {};
new Function('window', src)(win);
const Q = win.MICROLEARNING_QUESTIONS || [];

let texto = src;
let trocadas = 0, semPatch = [];

for (const q of Q) {
  const novos = NOVOS[q.id];
  const erradas = q.opcoes.filter((o) => !o.correct);
  if (!novos || novos.length !== erradas.length) { semPatch.push(q.id); continue; }
  erradas.forEach((o, i) => {
    const antes = JSON.stringify(o.text);
    const depois = JSON.stringify(novos[i]);
    if (!texto.includes(antes)) { semPatch.push(q.id + ' (texto nao encontrado)'); return; }
    texto = texto.replace(antes, depois);
    trocadas++;
  });
}

console.log(`questoes no banco: ${Q.length}`);
console.log(`alternativas erradas reescritas: ${trocadas}`);
if (semPatch.length) console.log(`sem patch: ${semPatch.join(', ')}`);

if (GRAVAR) {
  fs.writeFileSync(ARQ, texto);
  console.log('\ngravado.');
} else {
  console.log('\n(simulacao — use --gravar)');
}
