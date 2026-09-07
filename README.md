# Estudos · backend em profundidade

Sete documentos de estudo que escrevo e uso. Cada um tem duas metades: uma **trilha visual**
no estilo roadmap.sh, com modo teste e fila de revisão, e o **conteúdo em profundidade**, em que
cada tópico traz a origem do mecanismo, o que ele veio substituir, diagramas, as armadilhas e uma
prova de domínio.

**→ [thallyscezar.github.io/estudos](https://thallyscezar.github.io/estudos)**

| # | Documento | Trilha | Conteúdo |
|---|---|---|---|
| 01 | [Java completo](java.html) | 134 nós | 49 tópicos |
| 02 | [Spring completo](spring.html) | 85 nós | 52 tópicos |
| 03 | [Arquitetura completa](arquitetura.html) | 101 nós | 51 tópicos |
| 04 | [Docker e Kubernetes completo](docker-kubernetes.html) | 74 nós | 36 tópicos |
| 05 | [Nuvem completo](nuvem.html) | 51 nós | 48 tópicos |
| 06 | [Mensageria e RabbitMQ completo](mensageria.html) | 76 nós | 35 tópicos |
| — | [Conceitos de Backend completo](conceitos-backend.html) — o caderno de dúvidas | 57 nós | 25 tópicos |

Mais o [cronograma semanal](cronograma.html), que aponta cada dia útil para um documento.

## Como funciona

- **HTML autocontido.** Sem framework, sem build, sem dependência externa além das fontes.
  Cada arquivo abre sozinho, inclusive offline depois do primeiro acesso.
- **Modo teste.** Na trilha, ele esconde a resposta e monta uma fila com o que você errou.
- **Progresso local.** O "marcar dominado" fica no `localStorage` do seu navegador.
  Nada é enviado a lugar nenhum — e, por isso, o progresso não sincroniza entre dispositivos.
- **Tema Dracula**, sem alternador.

## O fio condutor

O mesmo sistema — **OrderFlow** — atravessa os seis primeiros: implementado em Java, migrado para
Spring, projetado em Arquitetura, empacotado em Docker e Kubernetes, implantado numa nuvem e
desacoplado com mensageria. As restrições se repetem entre os documentos: a conta do pool de
conexões que limita o autoescalonamento aparece em três deles, vista de ângulos diferentes.

## Publicar

Repositório público com GitHub Pages servindo a raiz do branch `main`.
O arquivo `.nojekyll` existe para o Pages servir os arquivos como estão, sem processar com Jekyll.

---

Escrito e mantido por [Thallys Cézar](https://github.com/ThallysCezar).
