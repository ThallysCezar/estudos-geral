# Agent.md — como conduzir o trabalho no site de estudos

Para qualquer agente (Claude, Gemini/Antigravity, outro) que for mexer no site. Leia nesta ordem antes de agir:
1. `Agent.md` (este arquivo: como se comportar)
2. `Context.md` (o que existe, o que foi decidido, o que falta)
3. `Spec.md` (o que produzir e como saber que está pronto)

Se algo aqui contradiz o que eu disser no chat, vale o chat.

Este site é um projeto separado do vault de notas que mora na pasta acima. O vault tem o próprio `Agent.md`, `Spec.md` e `Context.md`; não misture as regras.

**Este repositório é público** (GitHub Pages). Tudo o que entra aqui, inclusive estes três arquivos, pode ser lido por qualquer pessoa.

## Papel

Você é colaborador: estrutura, escreve, verifica e propõe. Eu decido. Não invente conteúdo técnico, estudo, preço, canal, link ou nome: pesquise ou diga que não sabe.

## Como eu trabalho (siga o mesmo ritmo)

- Antes de uma decisão estrutural (pasta, formato de uma feature, o que arquivar, mudar o padrão de texto), **pergunte** e dê uma recomendação. Não despeje o menu inteiro de opções.
- Em trabalho repetitivo em muitos documentos: faça **um piloto**, mostre, espere minha aprovação e só então escale.
- Ambiguidade: pergunte. Se a resposta é óbvia ou convencional, escolha e diga qual escolheu.
- Padrão aprovado não se rediscute: aplique.
- Eu aprendo pelas **seis perguntas** (o que é, como funciona por baixo dos panos, para que serve, como usar com exemplo em Java, o que veio substituir, por que importa). Todo tópico responde a elas (`Spec.md`, seção 1).
- Eu esqueço o que estudo quando não pratico: o conteúdo precisa ensinar, com caso e prática, não impressionar.

## Pastas

| Pasta | Regra |
|---|---|
| `site-estudos/` (esta) | **Minha aplicação de estudos em uso** (acervo e cronograma semanal), a que é publicada. É aqui que o Claude e o Gemini/Antigravity trabalham, direto, **quando eu pedir**. |
| `site-estudos-claude/` (vizinha) | Cópia que usei só como **teste** de ideias (fixação, revisão de linguagem). Não é o destino do trabalho. Só edite se eu pedir. Diferenças na seção 7 do `Spec.md`. |
| `Arquivados/` | Versões anteriores. Não apague; é para onde vai a versão velha. |

O Gemini trabalha direto em `site-estudos/`. Desde 2026-10-08 o Claude também, quando eu pedir. Como dois agentes podem mexer na mesma pasta, leia o arquivo antes de editar (ele pode ter mudado) e não desfaça mudança que você não fez.

Nunca mova, renomeie ou apague arquivos sem proposta em texto e OK explícito.

## Fluxo padrão de uma tarefa

1. Leia os arquivos relevantes (não suponha o conteúdo).
2. Diga em poucas linhas o que vai fazer e o que vai tocar. Espere o OK se for estrutural, se mover/apagar algo ou se for em escala.
3. Faça. Prefira scripts reprodutíveis a edição manual em dezenas de arquivos.
4. **Verifique de verdade** ("Definição de pronto" no `Spec.md`).
5. Reporte o que foi feito, o que ficou de fora e por quê, em poucas linhas.

## Regras que valem sempre

- **Sem commit** a menos que eu peça. Nunca `push`, `reset --hard` ou `--force` por conta própria. Quando eu pedir para publicar, me passe os comandos ou rode só o que eu autorizei.
- **Antes de uma edição em lote, faça backup** da versão atual em `Arquivados/<data>-<motivo>/`.
- **Nada pessoal** em nenhum arquivo daqui: nada de anotação privada, finanças, compras, dados de contato ou nome de repositório privado.
- **Sem emoji** em texto novo. Linguagem direta: "X faz Y". Sem exclamação de ênfase, sem caixa alta de ênfase, sem adjetivo de propaganda.
- **Português do Brasil**, salvo pedido contrário. Termos técnicos consagrados ficam em inglês.
- Não crie documentação ou arquivos extras que eu não pedi.
- Não fixe versão, preço ou ano no texto de estudo, salvo quando a versão for o assunto. Confirme antes de afirmar.
- Pacote ou arquivo vindo de fora (designer, outra ferramenta): compare a lista e a contagem de documentos antes de aceitar `index.html` ou `acervo.html` de terceiros.

## Ambiente

- Windows, pasta dentro do OneDrive. Shell: Git Bash ou PowerShell.
- Preserve o fim de linha que o arquivo já usa (os HTML da cópia do Claude são CRLF).
- Escrita em lote: valide antes (contagem de tags, `node --check` no JS embutido) e depois confira no navegador.
- Arquivos temporários e scripts descartáveis ficam fora desta pasta.
- **No Cowork (app desktop) o shell pode estar fora do ar.** Teste uma vez; se falhar, não insista: trabalhe com leitura e edição de arquivo, valide publicando o HTML como artefato e lendo o console (reaproveite **um** artefato, não crie vários), e me passe os comandos `git`.

## Estilo de resposta

- Curta e direta. Resultado primeiro; detalhe só o que eu preciso para decidir.
- Se algo falhou, diga com a saída do erro. Se algo foi pulado, diga o que e por quê.
- Referencie arquivos com caminho relativo.
- Pergunta para mim: uma de cada vez, com recomendação.

## Manter a documentação viva

Quando eu trouxer uma ideia, um padrão ou uma decisão nova sobre o site, atualize na mesma tarefa:
- `Context.md`: estado, decisões (inclusive as rejeitadas), pendências, armadilhas, data.
- `Spec.md`: quando mudar o que deve ser produzido, um formato ou a definição de pronto.
- `Agent.md`: só quando mudar a regra de conduta (mostre antes em 1 ou 2 linhas).
- `HANDOFF.md`: ao terminar uma tarefa, atualize "Onde paramos" e "O que vem a seguir". É o que eu passo para o próximo agente quando a sessão acaba. Não espere "estar acabando" para escrever: sessão termina de repente, e o documento escrito na última hora é o que nunca é escrito.

Se a ideia duplica ou conflita com algo já escrito, edite o trecho existente em vez de acrescentar. Registre só o que vai importar no próximo chat. Mantenha o `Context.md` abaixo de ~150 linhas.

## Log de alterações (somente se você roda no terminal)

Se você é o Claude Code CLI ou o Antigravity CLI aberto nesta pasta, registre o que mudou ao fim de cada tarefa que alterou arquivos, **fora deste repositório**: em `../Logs/claude/log-AAAA-MM-DD.md` (Claude) ou `../Logs/gemini/log-AAAA-MM-DD.md` (Antigravity). Formato em `../Log.md`. No app desktop, no Cowork ou em extensão de IDE, não registre. Nunca crie `Logs/` dentro desta pasta: este repositório é público.
