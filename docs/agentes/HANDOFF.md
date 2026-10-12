# HANDOFF.md — passagem de bastão

Para o próximo agente. Escrito para ser lido frio, sem acesso à conversa anterior. Última atualização: 2026-10-12.

**Mantenha este arquivo vivo.** Ao terminar uma tarefa, atualize "Onde paramos" e "O que vem a seguir". Ele existe porque uma sessão pode acabar de repente.

---

## 0. Leia nesta ordem

1. `Agent.md` — como conduzir o trabalho. As regras dele valem sobre tudo o que está aqui.
2. `Context.md` — estado, decisões, números medidos e armadilhas. É a fonte da verdade.
3. `Spec.md` — o que produzir e a "Definição de pronto".
4. Este arquivo — o que está em andamento e o que vem a seguir.
5. `docs/historico/RELATORIO-MIGRACAO-ANGULAR.md` — registro histórico da migração; não representa a arquitetura atual sozinho.

Não duplique conteúdo entre eles. Este arquivo aponta, não repete.

---

## 1. ATENÇÃO: nada está commitado

O último commit é `9281ccc`. **Há trabalho local não commitado** em vários arquivos e novos recursos, incluindo os documentos de orientação, scripts, páginas, assets e backups. Preserve a árvore de trabalho; não use `checkout`, `stash`, `reset` ou limpeza em lote.

Consequências práticas:
- Um `git checkout .`, `git stash` ou `git reset --hard` apaga dias de trabalho.
- Os backups em `Arquivados/2026-10-09-antes-defer/` também são não rastreados. **Eles são a única forma de desfazer a extração de JS.** Não apague.
- O dono não pediu commit, e o `Agent.md` proíbe commitar sem pedido. Pergunte antes.

---

## 2. Onde paramos

- Estado vigente segundo `Context.md`: site estático em produção; Angular foi abandonado em 2026-10-09. O texto antigo deste handoff dizia ao mesmo tempo que Angular fora removido e que ainda faltava decidir o destino. Essa contradição foi resolvida: não retome a migração sem pedido explícito.
- Nova página `cadernos/governanca-seguranca.html` cobre fundamentos de governança, risco, controles, segurança de aplicações, IAM, privacidade/LGPD, incidentes, continuidade e fornecedores; ligada à home, ao acervo e ao README. A barra lateral agora usa o chassi System Design (progresso, controles, busca e navegação agrupada).
- Em 2026-10-12, corrigida a diferença visual apontada: a trilha de Governança deixou de ser grade de cartões e passou a usar marcos conectados no formato vertical de `trilhas/system-design.html`; o grid, largura do conteúdo e espaçamento de hero/seções/tópicos também foram alinhados. Links: 15 alvos locais distintos conferidos, sem quebras. A inspeção visual pelo navegador embutido foi bloqueada pela política de URL `file://`; não declarar validação visual concluída.
- `Spec.md` define esse chassi como padrão obrigatório para documentos, com adaptação proporcional em cadernos menores.
- O mapa mental de Governança de TI está no início da página como `figure.topic-img`, com legenda, texto alternativo, lazy loading e lightbox compartilhado. `Spec.md` agora define este padrão para imagens didáticas.
- A página usa referências primárias (NIST, ANPD e OWASP) e não pretende ser aconselhamento jurídico.
- `Context.md` foi reduzido e atualizado; os achados antigos de auditoria estão marcados como não revalidados.
- Contagens fixas foram removidas do título do acervo, da descrição do laboratório na home e do texto inicial do README. Outros números no conteúdo ainda podem existir e merecem revisão dirigida.
- Organização da documentação concluída: todos os arquivos Markdown internos foram organizados em `docs/agentes/` (`Agent.md`, `Spec.md`, `Context.md`, `HANDOFF.md`), `docs/planos/` (`PLANO-MELHORIAS.md`, `TAREFAS-GEMINI.md`) e `docs/historico/` (`RELATORIO-MIGRACAO-ANGULAR.md`); `SECURITY.md` movido para `.github/SECURITY.md`; `package-lock.json` órfão removido da raiz. A raiz do repositório agora contém estritamente os 6 arquivos essenciais (`index.html`, `acervo.html`, `README.md`, `LICENSE`, `.gitignore`, `.nojekyll`).
- Assets de mídia unificados: 19 arquivos soltos na raiz de `assets/img/` foram organizados em suas subpastas temáticas (15 duplicatas eliminadas, poupando ~6.5 MB; SVGs de IA em `ia/`; mapa de Governança em `governanca/`), sem quebras de link.
- Piloto do catálogo concluído: Governança e Segurança agora aparece no índice pesquisável do Acervo e nas paletas Ctrl+K da Home e do Acervo. O teste 11 compara o inventário oficial com essas entradas e com o README.
- Verificações executadas: contratos 11/11, links locais sem quebra e auditoria de tags sem erro. Quizzes: 459 questões, posições corretas A=150/B=161/C=148; todas as opções mudaram versus `HEAD`, então o balanço de posição não comprova correção semântica. O plano M03 documenta essa reformulação; revisar conteúdo antes de regravar o baseline.
- `diff-snapshot` aponta 305 gabaritos alterados e 473 tópicos com texto alterado contra o baseline de 2026-10-10. O teste de renderização não concluiu localmente: Edge headless encerrou com `-1073741819` (access violation) nos 14 documentos; repetir em ambiente de navegador confiável.
- `audit-chassi --resumo` vê 487 tópicos em 16 documentos; a página de Governança não satisfaz as peças que o auditor verifica. Decidir se é exceção ao chassi antes de mudanças em lote.
- Nenhuma publicação ou commit foi feita. Não houve otimização adicional de performance: use medições novas antes de alterar carregamento, imagens ou scripts.

---

## 3. Próximas melhorias sugeridas

1. Rever semanticamente os quizzes reformulados e, quando autorizado junto a um commit, atualizar o baseline para o estado intencional.
2. Rever se Governança deve adotar o chassi didático por tópico; a presente correção foi somente da trilha e do espaçamento visual.
3. Decidir se o contrato de inventário é suficiente ou se vale centralizar metadados; não criar um build obrigatório para leitura.
4. Repetir a renderização headless em ambiente confiável e medir desempenho antes de novas otimizações.

---

## 4. As ferramentas, e como usá-las

Tudo em `scripts/`, Node puro, sem dependência. Rode da raiz do `site-estudos`:

```
node scripts/check-links.mjs        # arquivos e âncoras, inclusive dentro dos .js
node scripts/audit-chassi.mjs       # peças do chassi por tópico, emoji, tags
node scripts/diff-snapshot.mjs      # o que mudou vs o golden master
node scripts/snapshot.mjs --gravar  # regravar o golden master, de propósito
node scripts/sync-angular.mjs --verificar
node scripts/extrai-js-inline.mjs   # a otimização de performance
node --test scripts/tests/regression-contracts.test.mjs
```

**Rode `diff-snapshot` antes de começar** (tem que estar limpo) e depois de editar. Ele separa **perda** (falha) de **mudança** (aviso). Se a perda for intencional, regrave o baseline no mesmo commit.

Regra aprendida na marra: **toda ferramenta tem que seguir os `<script src>` locais.** O JS não mora mais no HTML. Três verificadores quebraram por ler só o HTML e acusaram perda de ids, chaves e links que apenas tinham mudado de arquivo. Se criar verificador novo, use `textoComScripts()` de `lib-html.mjs`.

---

## 5. Armadilhas que custaram tempo aqui

As do projeto estão em `Context.md`. Estas são de método, e valem para qualquer agente:

- **Medir antes de concluir.** O dono pediu migração para framework por causa de lentidão. A medição mostrou que 88% do tempo era JS inline — Angular teria piorado. A correção certa custou dias, não semanas.
- **Não confiar em código que "parece certo".** O outro agente disse ter corrigido tudo; testar no navegador confirmou quase tudo, mas revelou que a performance seguia igual e que um documento estava quebrado em produção havia tempo.
- **Testar a rede de testes.** A primeira versão do golden master deixava passar troca de gabarito. Só descobri sabotando um espelho descartável de propósito.
- **Heredoc do Git Bash come barra invertida.** `cat > arquivo <<'EOF'` com JavaScript dentro corrompeu `\\s` em `new RegExp` duas vezes, gerando verificador que passava calado. Escreva arquivo de código com a ferramenta de escrita, não pelo shell, e valide com `node --check`.
- **Chrome não reduz janela maximizada.** Para testar 375 px, carregue a página num iframe de 375 px e meça lá dentro.
- **Otimização não é universal.** `trilhas/ia.html` ficou 2x mais lento com a mesma transformação que acelerou os outros, porque já era rápido. Meça documento a documento.

---

## 6. Como registrar o que você fizer

Se você roda no terminal (CLI), registre ao fim de cada tarefa que alterou arquivos, em `../Logs/claude/log-AAAA-MM-DD.md` — **fora deste repositório**, que é público. Formato em `../Log.md`. No app desktop, Cowork ou extensão de IDE, não registre.

O log desta sessão está em `../Logs/claude/log-2026-10-09.md` e tem o detalhe de cada alteração, com a verificação feita e o que ficou pendente. É o lugar certo para entender o porquê de qualquer mudança específica.
