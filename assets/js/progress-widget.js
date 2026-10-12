/* ==================== PAINEL DE PROGRESSO GLOBAL (CONSOLIDADO) ====================
 * - Calcula em tempo real no localStorage o progresso acumulado de todo o acervo.
 * - Consolida:
 *   1. Tópicos das 8 Trilhas e 7 Cadernos (487 tópicos totais).
 *   2. Missões e Projetos do Laboratório (18 projetos).
 *   3. Desafios Práticos de Fixação / Quizzes acertados (459 questões).
 *   4. Streak diário e XP acumulado do Microlearning.
 * - 100% Local-first, sem dependências externas, tema Dracula estrito.
 */

(function() {
  "use strict";

  var TOTAL_TOPICOS = 487;
  var TOTAL_PROJETOS = 18;
  var TOTAL_QUIZZES = 459;

  var TOPIC_STORAGE_KEYS = [
    "trilha-java-CL-v1",
    "spring-completo-CL-trilha-v1",
    "arquitetura-completo-CL-trilha-v1",
    "docker-k8s-completo-CL-trilha-v1",
    "nuvem-completo-CL-trilha-v1",
    "mensageria-rabbitmq-completo-CL-trilha-v1",
    "system-design-completo-CL-trilha-v1",
    "ai_eng_v4_trail",
    "ai_eng_v3_trail",
    "conceitos-backend-completo-CL-trilha-v1",
    "biblioteca-completo-CL-trilha-v1",
    "linux-terminal-completo-CL-trilha-v1",
    "git-completo-CL-trilha-v1",
    "ingles-tecnico-completo-CL-trilha-v1",
    "oratoria-completo-CL-trilha-v1",
    "site.governanca-seguranca.progress.v1"
  ];

  function getTopicsDone() {
    var seen = {};
    var count = 0;
    for (var i = 0; i < TOPIC_STORAGE_KEYS.length; i++) {
      var raw = localStorage.getItem(TOPIC_STORAGE_KEYS[i]);
      if (!raw) continue;
      try {
        var obj = JSON.parse(raw);
        if (obj && typeof obj === "object") {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key]) {
              var uniqueId = TOPIC_STORAGE_KEYS[i] + "::" + key;
              if (!seen[uniqueId]) {
                seen[uniqueId] = true;
                count++;
              }
            }
          }
        }
      } catch (ignore) {}
    }
    return Math.min(count, TOTAL_TOPICOS);
  }

  function getProjectsDone() {
    var raw = localStorage.getItem("site.projetos.lab.v1");
    if (!raw) return 0;
    try {
      var data = JSON.parse(raw);
      if (data && Array.isArray(data.done)) {
        return Math.min(data.done.length, TOTAL_PROJETOS);
      }
    } catch (ignore) {}
    return 0;
  }

  function getQuizzesDone() {
    var count = 0;
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && (k.indexOf("pratica.quiz.") === 0 || k.indexOf("pratica.ex.") === 0)) {
          if (localStorage.getItem(k) === "correct") {
            count++;
          }
        }
      }
    } catch (ignore) {}
    return Math.min(count, TOTAL_QUIZZES);
  }

  function getStreakAndXp() {
    var streak = parseInt(localStorage.getItem("ml.streak") || "0", 10);
    var xp = parseInt(localStorage.getItem("quiz_xp") || "0", 10);
    return { streak: Math.max(0, streak), xp: Math.max(0, xp) };
  }

  function renderProgressPanel() {
    var mount = document.getElementById("progressMount");
    if (!mount) return;

    var topicos = getTopicsDone();
    var projetos = getProjectsDone();
    var quizzes = getQuizzesDone();
    var streakData = getStreakAndXp();

    // Peso proporcional para barra geral
    var pTopicos = (topicos / TOTAL_TOPICOS) * 50;
    var pProjetos = (projetos / TOTAL_PROJETOS) * 30;
    var pQuizzes = (quizzes / TOTAL_QUIZZES) * 20;
    var totalPct = Math.min(100, Math.round(pTopicos + pProjetos + pQuizzes));

    var topicosPct = Math.round((topicos / TOTAL_TOPICOS) * 100);
    var projetosPct = Math.round((projetos / TOTAL_PROJETOS) * 100);
    var quizzesPct = Math.round((quizzes / TOTAL_QUIZZES) * 100);

    var html = '' +
      '<div class="gp-shell">' +
        '<div class="gp-core">' +
          '<div class="gp-head">' +
            '<div>' +
              '<span class="gp-kicker">Jornada de Estudos · Sincronizado Local-First</span>' +
              '<h2 class="gp-title">Seu Progresso Geral no Acervo</h2>' +
            '</div>' +
            '<div class="gp-badge" title="Média ponderada da sua evolução total">' +
              totalPct + '% concluído' +
            '</div>' +
          '</div>' +

          '<div class="gp-bar-wrap" aria-hidden="true">' +
            '<div class="gp-bar-fill" style="width:' + Math.max(totalPct, 1.5) + '%"></div>' +
          '</div>' +

          '<div class="gp-grid">' +
            '<a class="gp-card" href="acervo.html" title="Ver catálogo e tópicos de todas as trilhas">' +
              '<div class="gp-card-top">' +
                '<span>TÓPICOS</span>' +
                '<span style="color:var(--cyan)">' + topicosPct + '%</span>' +
              '</div>' +
              '<div class="gp-card-val">' + topicos + ' <small style="font-size:.78rem;font-weight:400;color:var(--muted)">/ ' + TOTAL_TOPICOS + '</small></div>' +
              '<div class="gp-card-sub">Marcos e teoria dominados ↗</div>' +
            '</a>' +

            '<a class="gp-card" href="lab/projetos.html" title="Abrir bancada do laboratório">' +
              '<div class="gp-card-top">' +
                '<span>LABORATÓRIO</span>' +
                '<span style="color:var(--lime)">' + projetosPct + '%</span>' +
              '</div>' +
              '<div class="gp-card-val" style="color:var(--lime)">' + projetos + ' <small style="font-size:.78rem;font-weight:400;color:var(--muted)">/ ' + TOTAL_PROJETOS + '</small></div>' +
              '<div class="gp-card-sub">Missões e código no Lab ↗</div>' +
            '</a>' +

            '<a class="gp-card" href="acervo.html" title="Quizzes de fixação presentes nos tópicos">' +
              '<div class="gp-card-top">' +
                '<span>FIXAÇÃO</span>' +
                '<span style="color:var(--purple)">' + quizzesPct + '%</span>' +
              '</div>' +
              '<div class="gp-card-val" style="color:var(--purple)">' + quizzes + ' <small style="font-size:.78rem;font-weight:400;color:var(--muted)">/ ' + TOTAL_QUIZZES + '</small></div>' +
              '<div class="gp-card-sub">Desafios práticos acertados ↗</div>' +
            '</a>' +

            '<a class="gp-card" href="#microlearningMount" title="Desafio diário e streak">' +
              '<div class="gp-card-top">' +
                '<span>STREAK &amp; XP</span>' +
                '<span style="color:var(--gold)">' + streakData.streak + 'd 🔥</span>' +
              '</div>' +
              '<div class="gp-card-val" style="color:var(--gold)">' + streakData.xp + ' <small style="font-size:.78rem;font-weight:400;color:var(--muted)">XP</small></div>' +
              '<div class="gp-card-sub">Desafios diários ativos ↗</div>' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    mount.innerHTML = html;
  }

  // Inicializa quando DOM estiver pronto
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderProgressPanel);
  } else {
    renderProgressPanel();
  }

  // Reavalia quando o usuário interage ou retorna à aba
  window.addEventListener("focus", renderProgressPanel);
  window.addEventListener("storage", renderProgressPanel);
})();
