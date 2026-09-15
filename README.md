# Estudos · backend em profundidade

Catorze documentos de estudo e uma bancada prática que escrevo e uso. Cada documento tem duas metades: uma **trilha visual** no estilo roadmap.sh, com modo teste e fila de revisão, e o **conteúdo em profundidade**, em que cada tópico traz a origem do mecanismo, o que ele veio substituir, diagramas vetoriais animados, as armadilhas reais de produção e uma prova de domínio.

**→ [thallyscezar.github.io/estudos](https://thallyscezar.github.io/estudos)**

| # | Documento | Trilha | Conteúdo | Foco |
|---|---|---|---|---|
| 01 | [Java completo](java.html) | 134 nós | 49 tópicos | Plataforma, JMM, concorrência e JDBC puro |
| 02 | [Spring completo](spring.html) | 85 nós | 52 tópicos | IoC, ciclo do bean, AOP, transações e MVC |
| 03 | [Arquitetura completa](arquitetura.html) | 101 nós | 51 tópicos | SOLID, Conway, estilos, DDD e ADRs |
| 04 | [Docker e Kubernetes completo](docker-kubernetes.html) | 74 nós | 36 tópicos | Namespaces, PID 1, probes e HPA |
| 05 | [Nuvem completo](nuvem.html) | 51 nós | 48 tópicos | Nuvem agnóstica (AWS/Azure/GCP), IAM e FinOps |
| 06 | [Mensageria e RabbitMQ completo](mensageria.html) | 76 nós | 35 tópicos | AMQP, ack manual, DLQ, outbox e saga |
| 07 | [Conceitos de Backend completo](conceitos-backend.html) | 60 nós | 28 tópicos | O caderno de dúvidas: locks, JWT, race conditions e War Room |
| 08 | [Biblioteca completa](biblioteca.html) | 38 nós | 17 tópicos | 5 livros clássicos e onde os autores divergem |
| 09 | [System Design completo](system-design.html) | 42 nós | 23 tópicos | Escala sob restrição, Lei de Little e sharding |
| 10 | [Linux e terminal completo](linux.html) | 35 nós | 16 tópicos | O térreo: processos, sinais, pipes e descritores |
| 11 | [Git completo](git.html) | 30 nós | 15 tópicos | Grafo de snapshots imutáveis, reflog e bisect |
| 12 | [Inglês técnico completo](ingles.html) | 32 nós | 14 tópicos | Input compreensível, shadowing e code review |
| 13 | [Oratória e comunicação](oratoria.html) | 33 nós | 12 tópicos | Defesa de ADR, reuniões e modelo SBI |
| 14 | [Inteligência Artificial completo](ia.html) | 61 nós | 29 tópicos | Previsão de tokens, RAG, MCP, agentes e evals |
| 15 | [Laboratório de projetos](projetos.html) | 18 missões | 18 aquecimentos | A bancada: 6 oficinas com falhas injetadas |

A navegação e a rotina semanal partem de **[index.html](index.html)**, que identifica o dia corrente, o foco de estudo e organiza as alternâncias semanais.

## Como funciona

- **HTML autocontido.** Sem framework, sem build, sem dependência externa além das fontes.
  Cada arquivo abre sozinho, inclusive offline depois do primeiro acesso.
- **Modo teste.** Na trilha, ele esconde a resposta e monta uma fila com o que você errou.
- **Progresso local.** O "marcar dominado" fica no `localStorage` do seu navegador.
  Totalmente privado e offline.
- **Tema Dracula**, uniforme em todo o ecossistema.

## O fio condutor

O mesmo sistema — **OrderFlow** — atravessa os seis primeiros documentos: implementado em Java, migrado para Spring, projetado em Arquitetura, empacotado em Docker e Kubernetes, implantado numa nuvem e desacoplado com mensageria. As restrições se repetem entre eles: a conta do pool de conexões que limita o autoescalonamento aparece em três deles, vista de ângulos diferentes.

## Publicar

Repositório público com GitHub Pages servindo a raiz do branch `main`.
O arquivo `.nojekyll` existe para o Pages servir os arquivos como estão, sem processar com Jekyll.

---

Escrito e mantido por [Thallys Cézar](https://github.com/ThallysCezar).
