# Estudos · Backend & AI Engineering em Profundidade

Quinze documentos de estudo e bancada prática organizados em trilhas especializadas, cadernos de fundamentos e laboratório. Cada documento reúne uma **trilha visual** interativa com modo teste e fila de revisão, e o **conteúdo em profundidade**, com a origem de cada mecanismo, o que veio substituir, diagramas vetoriais animados, armadilhas reais de produção, pontos de atenção e **exercícios interativos com feedback imediato**.

**→ [thallyscezar.github.io/estudos](https://thallyscezar.github.io/estudos)**

---

## 🗺️ Mapa de Conteúdo Modular

### 🚀 Trilhas Principais (`trilhas/`)
| # | Documento | Trilha | Conteúdo | Foco Central |
|---|---|---|---|---|
| 01 | [Java Completo](trilhas/java.html) | 134 nós | 49 tópicos | Java 21, JMM, concorrência, Virtual Threads e HikariCP |
| 02 | [Spring Boot 3](trilhas/spring.html) | 85 nós | 52 tópicos | IoC, ciclo de vida do bean, AOP, CGLIB, transações e MVC |
| 03 | [Arquitetura de Software](trilhas/arquitetura.html) | 101 nós | 51 tópicos | SOLID, Conway, DDD, Circuit Breaker, Saga e ADRs |
| 04 | [Docker & Kubernetes](trilhas/docker-kubernetes.html) | 74 nós | 36 tópicos | Namespaces, cgroups, PID 1, probes, rollout e HPA |
| 05 | [Nuvem Multicloud](trilhas/nuvem.html) | 51 nós | 48 tópicos | Nuvem agnóstica (AWS/Azure/GCP), VPC/CIDR, IAM e FinOps |
| 06 | [Mensageria & RabbitMQ](trilhas/mensageria.html) | 76 nós | 35 tópicos | AMQP, ack manual, DLQ, Outbox Pattern e Kafka |
| 07 | [System Design](trilhas/system-design.html) | 67 nós | 45 tópicos | 17 Sistemas reais (YouTube, Spotify, Uber, etc.), sharding e LLM serving |
| 08 | [Inteligência Artificial & AI Eng](trilhas/ia.html) | 28 nós | 33 tópicos | Transformers, RoPE, Speculative Decoding, RAG Híbrido, Multi-Agente e Evals |

### 📚 Cadernos de Apoio & Fundamentos (`cadernos/`)
| # | Documento | Foco |
|---|---|---|
| 09 | [Conceitos de Backend](cadernos/conceitos-backend.html) | O caderno de dúvidas: locks, JWT, race conditions, índices e War Room |
| 10 | [Biblioteca Clássica](cadernos/biblioteca.html) | 5 livros clássicos (Khononov, Richards, Ford, Xu, Bhargava) e divergências |
| 11 | [Linux & Terminal](cadernos/linux.html) | O térreo: processos, sinais, pipes, descritores e systemd |
| 12 | [Git em Profundidade](cadernos/git.html) | Grafo DAG de snapshots imutáveis, reflog, rebase e recuperação |
| 13 | [Inglês Técnico](cadernos/ingles.html) | Input compreensível, shadowing e code review sem atrito |
| 14 | [Oratória & Comunicação](cadernos/oratoria.html) | Defesa técnica de decisões, postmortems blameless e modelo SBI |

### 🛠️ Laboratório & Prática (`lab/`)
| # | Documento | Foco |
|---|---|---|
| 15 | [Laboratório de Projetos](lab/projetos.html) | 18 missões e aquecimentos: OrderFlow, Saga, Outbox, Toxiproxy e K8s |

### 🧰 Ferramentas de Produtividade & IA (`ferramentas/`)
| Ferramenta | Descrição |
|---|---|
| [Prompt Studio](ferramentas/prompt-studio.html) | Engenharia de prompt em 5 princípios e compactação de contexto para LLMs |
| [Formatador de Texto](ferramentas/refinador.html) | Refinador multi-provedor (Gemini, Groq, OpenRouter) para tasks, PRs e e-mails |
| [Guia de APIs](ferramentas/tutorial-api.html) | Passo a passo para obter chaves gratuitas sem necessidade de cartão de crédito |

---

## ⚡ Recursos & Inovações da Plataforma

- **⚡ Pílula de MicroLearning Diário (3 Minutos)**: Desafio prático no dashboard (`index.html`) sincronizado com o cronograma semanal de estudos e contador de streak (dias seguidos).
- **📱 Responsividade Mobile-First com Drawer Navigation**: Menu off-canvas deslizante (`☰ Tópicos`), tabelas adaptativas e rolagem horizontal suave em snippets de código para celulares e tablets.
- **🎯 Fixação Ativa & Exercícios**:
  - *Pontos Críticos & Recapitulando*: Síntese com pegadinhas de entrevista e modelos mentais de produção.
  - *Quizzes Interativos*: Perguntas situacionais com feedback explicativo imediato (verde/vermelho).
  - *Flashcards 3D*: Active Recall com giro de cartas para autoverificação.
- **✨ 100% Autocontido e Offline**: Funciona sem necessidade de servidor local ou backend; progresso e respostas persistidos privadamente no `localStorage`.
- **🎨 Tema Dracula Unificado**: Cores oficiais Dracula em todos os componentes, diagramas e mapas mentais.

---

Escrito e mantido por [Thallys Cézar](https://github.com/ThallysCezar).
