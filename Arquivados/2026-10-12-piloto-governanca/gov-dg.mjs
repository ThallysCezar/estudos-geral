// Diagramas do caderno. Mesmo vocabulario dos outros: viewBox 340 de largura,
// classes bt (titulo), bs (texto), b1/b2/b5 (caixas), l (linha), h (ponta).
export const DG = {
  cadeia: { h: 150, inner:
    '<text x="170" y="16" class="bt">da intenção à evidência</text>' +
    '<rect x="8" y="34" width="72" height="30" rx="8" class="b2"/><text x="44" y="53" class="bs">política</text>' +
    '<path d="M82,49 L104,49" class="l"/><path d="M104,49 L97,45 L97,53 Z" class="h"/>' +
    '<rect x="106" y="34" width="72" height="30" rx="8" class="b2"/><text x="142" y="53" class="bs">padrão</text>' +
    '<path d="M180,49 L202,49" class="l"/><path d="M202,49 L195,45 L195,53 Z" class="h"/>' +
    '<rect x="204" y="34" width="86" height="30" rx="8" class="b2"/><text x="247" y="53" class="bs">procedimento</text>' +
    '<rect x="106" y="86" width="128" height="30" rx="8" class="b1"/><text x="170" y="105" class="bs">evidência</text>' +
    '<path d="M247,66 L186,86" class="l"/><path d="M186,86 L194,84 L191,92 Z" class="h"/>' +
    '<text x="170" y="138" class="bs">sem evidência, a cadeia não fecha</text>' },

  risco: { h: 152, inner:
    '<text x="170" y="16" class="bt">risco é cenário, não adjetivo</text>' +
    '<rect x="10" y="32" width="90" height="34" rx="8" class="b5"/><text x="55" y="46" class="bs">ameaça +</text><text x="55" y="60" class="bs">fraqueza</text>' +
    '<path d="M102,49 L126,49" class="l"/><path d="M126,49 L119,45 L119,53 Z" class="h"/>' +
    '<rect x="128" y="32" width="92" height="34" rx="8" class="b2"/><text x="174" y="46" class="bs">impacto +</text><text x="174" y="60" class="bs">probabilidade</text>' +
    '<path d="M222,49 L246,49" class="l"/><path d="M246,49 L239,45 L239,53 Z" class="h"/>' +
    '<rect x="248" y="32" width="84" height="34" rx="8" class="b1"/><text x="290" y="53" class="bs">decisão</text>' +
    '<text x="170" y="92" class="bs">evitar · reduzir · compartilhar · aceitar</text>' +
    '<text x="170" y="120" class="bs">residual sem dono = aceito por omissão</text>' },

  camadas: { h: 164, inner:
    '<text x="170" y="16" class="bt">camadas que falham por motivos diferentes</text>' +
    '<rect x="20" y="30" width="300" height="20" rx="6" class="b2"/><text x="170" y="44" class="bs">identidade (MFA, escopo)</text>' +
    '<rect x="20" y="56" width="300" height="20" rx="6" class="b2"/><text x="170" y="70" class="bs">aplicação (autorização no domínio)</text>' +
    '<rect x="20" y="82" width="300" height="20" rx="6" class="b2"/><text x="170" y="96" class="bs">dados (segredo, cifra, minimização)</text>' +
    '<rect x="20" y="108" width="300" height="20" rx="6" class="b1"/><text x="170" y="122" class="bs">detecção e recuperação</text>' +
    '<text x="170" y="150" class="bs">se duas caem pelo mesmo motivo, é uma só</text>' },

  iam: { h: 148, inner:
    '<text x="170" y="16" class="bt">duas perguntas, dois momentos</text>' +
    '<rect x="14" y="34" width="134" height="38" rx="8" class="b2"/><text x="81" y="50" class="bs">AUTENTICAÇÃO</text><text x="81" y="65" class="bs">quem é você?</text>' +
    '<rect x="192" y="34" width="134" height="38" rx="8" class="b1"/><text x="259" y="50" class="bs">AUTORIZAÇÃO</text><text x="259" y="65" class="bs">pode nisto, agora?</text>' +
    '<path d="M150,53 L190,53" class="l"/><path d="M190,53 L183,49 L183,57 Z" class="h"/>' +
    '<text x="170" y="96" class="bs">a borda prova identidade</text>' +
    '<text x="170" y="114" class="bs">o domínio decide sobre o recurso</text>' +
    '<text x="170" y="134" class="bs">papel filtra quem tenta; atributo decide</text>' },

  ciclo: { h: 154, inner:
    '<text x="170" y="16" class="bt">ciclo de vida do dado</text>' +
    '<rect x="8" y="34" width="68" height="28" rx="8" class="b5"/><text x="42" y="52" class="bs">coleta</text>' +
    '<path d="M78,48 L98,48" class="l"/><path d="M98,48 L91,44 L91,52 Z" class="h"/>' +
    '<rect x="100" y="34" width="68" height="28" rx="8" class="b2"/><text x="134" y="52" class="bs">uso</text>' +
    '<path d="M170,48 L190,48" class="l"/><path d="M190,48 L183,44 L183,52 Z" class="h"/>' +
    '<rect x="192" y="34" width="68" height="28" rx="8" class="b2"/><text x="226" y="52" class="bs">retenção</text>' +
    '<path d="M262,48 L282,48" class="l"/><path d="M282,48 L275,44 L275,52 Z" class="h"/>' +
    '<rect x="284" y="34" width="48" height="28" rx="8" class="b1"/><text x="308" y="52" class="bs">descarte</text>' +
    '<text x="170" y="94" class="bs">backup e log seguem outra retenção</text>' +
    '<text x="170" y="122" class="bs">o campo não coletado é o que não vaza</text>' },

  sdlc: { h: 150, inner:
    '<text x="170" y="16" class="bt">o custo cresce com a distância</text>' +
    '<rect x="8" y="34" width="76" height="28" rx="8" class="b2"/><text x="46" y="52" class="bs">requisito</text>' +
    '<path d="M86,48 L104,48" class="l"/><path d="M104,48 L97,44 L97,52 Z" class="h"/>' +
    '<rect x="106" y="34" width="76" height="28" rx="8" class="b2"/><text x="144" y="52" class="bs">ameaças</text>' +
    '<path d="M184,48 L202,48" class="l"/><path d="M202,48 L195,44 L195,52 Z" class="h"/>' +
    '<rect x="204" y="34" width="60" height="28" rx="8" class="b2"/><text x="234" y="52" class="bs">código</text>' +
    '<path d="M266,48 L284,48" class="l"/><path d="M284,48 L277,44 L277,52 Z" class="h"/>' +
    '<rect x="286" y="34" width="46" height="28" rx="8" class="b1"/><text x="309" y="52" class="bs">prod</text>' +
    '<text x="46" y="86" class="bs">barato</text><text x="309" y="86" class="bs">caro</text>' +
    '<text x="170" y="118" class="bs">portão no fim só consegue reprovar</text>' },

  incidente: { h: 152, inner:
    '<text x="170" y="16" class="bt">decidir antes, executar depois</text>' +
    '<rect x="6" y="34" width="62" height="26" rx="8" class="b2"/><text x="37" y="51" class="bs">preparar</text>' +
    '<rect x="74" y="34" width="62" height="26" rx="8" class="b2"/><text x="105" y="51" class="bs">detectar</text>' +
    '<rect x="142" y="34" width="56" height="26" rx="8" class="b1"/><text x="170" y="51" class="bs">conter</text>' +
    '<rect x="204" y="34" width="66" height="26" rx="8" class="b2"/><text x="237" y="51" class="bs">recuperar</text>' +
    '<rect x="276" y="34" width="58" height="26" rx="8" class="b2"/><text x="305" y="51" class="bs">aprender</text>' +
    '<text x="170" y="88" class="bs">preservar evidência briga com restaurar</text>' +
    '<text x="170" y="116" class="bs">a ordem se define em tempo de paz</text>' },

  'ciclo-aprender': { h: 148, inner:
    '<text x="170" y="16" class="bt">o ciclo que fixa</text>' +
    '<rect x="10" y="34" width="62" height="28" rx="8" class="b2"/><text x="41" y="52" class="bs">ler</text>' +
    '<path d="M74,48 L92,48" class="l"/><path d="M92,48 L85,44 L85,52 Z" class="h"/>' +
    '<rect x="94" y="34" width="62" height="28" rx="8" class="b2"/><text x="125" y="52" class="bs">vídeo</text>' +
    '<path d="M158,48 L176,48" class="l"/><path d="M176,48 L169,44 L169,52 Z" class="h"/>' +
    '<rect x="178" y="34" width="68" height="28" rx="8" class="b2"/><text x="212" y="52" class="bs">fonte</text>' +
    '<path d="M248,48 L266,48" class="l"/><path d="M266,48 L259,44 L259,52 Z" class="h"/>' +
    '<rect x="268" y="34" width="62" height="28" rx="8" class="b1"/><text x="299" y="52" class="bs">decidir</text>' +
    '<path d="M299,64 L176,98" class="l dash"/>' +
    '<text x="170" y="114" class="bs">escrever a decisão é a volta que fixa</text>' },
};

export const figura = (k, legenda) => {
  const d = DG[k];
  if (!d) return '';
  return `        <figure class="dg"><svg viewBox="0 0 340 ${d.h}" xmlns="http://www.w3.org/2000/svg">\n          ${d.inner}\n        </svg>${legenda ? `<figcaption>${legenda}</figcaption>` : ''}</figure>`;
};
