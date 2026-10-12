// Conteudo do caderno de Governanca e Seguranca, ja no vocabulario do chassi
// "Direto" do Spec.md. O texto vem do documento original (que estava correto em
// substancia) mais as pecas que faltavam: caso, analogia, gotcha, ver, alem e
// fechamento.

export const META = {
  slug: 'governanca-seguranca',
  titulo: 'Governança de TI e segurança da informação',
  eyebrow: 'Governança e Segurança · outubro 2026',
  h1: 'Quem <em>decide</em>, quem <em>responde</em>, e o que sobra de risco.',
  lede: 'Governança não é burocracia: é tornar explícito quem decide, qual risco a organização aceita e como isso é verificado. Segurança é o resultado contínuo que vem disso. Em cima, a <b>trilha visual</b>. Embaixo, o <b>conteúdo</b> em partes, com o mesmo compromisso dos outros cadernos: <b>nenhum conceito sem o caso que o obriga a existir</b> — a credencial que vazou, o acesso de administrador que virou permanente, o endereço do cliente que foi parar no log.',
  chaves: {
    KEYT: 'governanca-seguranca-CL-trilha-v1',
    KEYM: 'governanca-seguranca-CL-conteudo-v1',
    RK: 'governanca-seguranca-CL-rev-v1',
  },
  legenda: [
    ['Sempre com caso', 'Cada tópico abre com a situação concreta que exige aquele controle.'],
    ['Risco antes de controle', 'Primeiro o que pode acontecer e quanto dói; só então a salvaguarda.'],
    ['Educacional, não jurídico', 'LGPD e normas aparecem para orientar conversa, não como parecer.'],
    ['Onde a teoria mora', 'Link para o documento que aprofunda, em vez de reexplicar.'],
  ],
  partes: [
    { id: 'p1', num: '01', h2: 'O que é governança, e por que ela existe', sub: 'Direção, gestão e segurança são três coisas diferentes. Confundi-las é a origem de quase toda discussão improdutiva.' },
    { id: 'p2', num: '02', h2: 'Risco: nomear antes de controlar', sub: 'Controle sem cenário é ritual. Primeiro o que pode acontecer, para quem dói e quanto.' },
    { id: 'p3', num: '03', h2: 'Identidade e acesso', sub: 'A maior parte dos incidentes passa por uma credencial que podia menos do que podia.' },
    { id: 'p4', num: '04', h2: 'Dados: menos é mais seguro', sub: 'O dado que você não guarda é o único que não vaza.' },
    { id: 'p5', num: '05', h2: 'Construir e operar com segurança', sub: 'Do requisito ao postmortem, sem transformar segurança em portão no fim da esteira.' },
    { id: 'p6', num: '06', h2: 'Como aprender de verdade: vídeos, pesquisa e prática', sub: 'Governança é a área em que é mais fácil decorar sigla e não saber decidir nada.' },
  ],
};
