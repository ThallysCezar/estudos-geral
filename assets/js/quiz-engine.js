/* ==================== QUIZ, FLASHCARD & GAMIFICATION ENGINE ==================== */
(function() {
  function getLevels(xp) {
    if (xp >= 2000) return { title: '🏆 Arquiteto Master', next: 2500, min: 2000 };
    if (xp >= 1200) return { title: '⚡ Engenheiro Sênior', next: 2000, min: 1200 };
    if (xp >= 600)  return { title: '🚀 Desenvolvedor Pleno', next: 1200, min: 600 };
    if (xp >= 200)  return { title: '🌱 Praticante Dedicado', next: 600, min: 200 };
    return { title: '🎯 Iniciante na Trilha', next: 200, min: 0 };
  }

  function calculateTotalXP() {
    var count = 0;
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key && key.indexOf('pratica.ex.') === 0) {
        if (localStorage.getItem(key) === 'correct') {
          count++;
        }
      }
    }
    return count * 50;
  }

  function updateXpDisplay() {
    var meter = document.querySelector('.meter');
    if (!meter) return;

    var totalXp = calculateTotalXP();
    var lvl = getLevels(totalXp);
    var range = lvl.next - lvl.min;
    var progress = Math.min(100, Math.max(0, Math.round(((totalXp - lvl.min) / range) * 100)));

    var box = meter.querySelector('.xp-meter-box');
    if (!box) {
      box = document.createElement('div');
      box.className = 'xp-meter-box';
      meter.appendChild(box);
    }

    box.innerHTML = 
      '<div class="xpm-row">' +
        '<span class="xpm-lvl">' + lvl.title + '</span>' +
        '<span class="xpm-pts">⭐ ' + totalXp + ' XP</span>' +
      '</div>' +
      '<div class="xpm-bar">' +
        '<div class="xpm-fill" style="width:' + progress + '%"></div>' +
      '</div>';
  }

  function initQuizEngine() {
    // 1. Quizzes padrão (.quiz-card)
    var quizzes = document.querySelectorAll('.quiz-card');
    quizzes.forEach(function(card) {
      var quizId = card.getAttribute('data-quiz-id');
      var opts = card.querySelectorAll('.qc-opt');
      var feedback = card.querySelector('.qc-feedback');
      var statusEl = card.querySelector('.qc-status');

      if (quizId) {
        var saved = localStorage.getItem('pratica.quiz.' + quizId);
        if (saved && statusEl) {
          statusEl.textContent = saved === 'correct' ? '✓ Resolvido' : '⚠️ Tentado';
          statusEl.style.color = saved === 'correct' ? 'var(--teal)' : 'var(--orange)';
        }
      }

      opts.forEach(function(btn) {
        btn.addEventListener('click', function() {
          var isCorrect = btn.getAttribute('data-correct') === 'true';
          var explanation = btn.getAttribute('data-feedback') || '';

          opts.forEach(function(b) {
            b.disabled = true;
            if (b.getAttribute('data-correct') === 'true') {
              b.classList.add('correct');
            }
          });

          if (isCorrect) {
            btn.classList.add('correct');
            if (feedback) {
              feedback.className = 'qc-feedback show ok';
              feedback.innerHTML = '<strong>Correto! ✓</strong> ' + explanation;
            }
            if (quizId) localStorage.setItem('pratica.quiz.' + quizId, 'correct');
            if (statusEl) {
              statusEl.textContent = '✓ Resolvido';
              statusEl.style.color = 'var(--teal)';
            }
          } else {
            btn.classList.add('wrong');
            if (feedback) {
              feedback.className = 'qc-feedback show err';
              feedback.innerHTML = '<strong>Incorreto ✗</strong> ' + explanation;
            }
            if (quizId) localStorage.setItem('pratica.quiz.' + quizId, 'wrong');
            if (statusEl) {
              statusEl.textContent = 'Revisar ⚠️';
              statusEl.style.color = 'var(--rose)';
            }
          }
        });
      });
    });

    // 2. Topico Exercício Integrado (.topico-exercicio) com Gamificação e Restauração de Estado
    var topicoExercicios = document.querySelectorAll('.topico-exercicio');
    topicoExercicios.forEach(function(ex) {
      var exId = ex.getAttribute('data-exercise-id');
      var opts = ex.querySelectorAll('.te-opt');
      var feedback = ex.querySelector('.te-feedback');
      var statusEl = ex.querySelector('.te-status');
      var xpBadge = ex.querySelector('.te-xp-badge');

      if (exId) {
        var saved = localStorage.getItem('pratica.ex.' + exId);
        if (saved && saved === 'correct') {
          if (statusEl) {
            statusEl.textContent = '✓ Dominado (+50 XP)';
            statusEl.style.color = 'var(--teal)';
          }
          if (xpBadge) {
            xpBadge.style.background = 'var(--teal)';
            xpBadge.style.color = '#1e1f29';
          }
          opts.forEach(function(b) {
            b.disabled = true;
            if (b.getAttribute('data-correct') === 'true') {
              b.classList.add('correct');
              var rationale = b.getAttribute('data-rationale') || '';
              if (feedback) {
                feedback.className = 'te-feedback ok';
                feedback.innerHTML = '<strong>Correto! 🎯</strong> ' + rationale;
                feedback.hidden = false;
              }
            }
          });
        } else if (saved === 'wrong') {
          if (statusEl) {
            statusEl.textContent = '⚠️ Tentar Novamente';
            statusEl.style.color = 'var(--orange)';
          }
        }
      }

      opts.forEach(function(btn) {
        btn.addEventListener('click', function() {
          var isCorrect = btn.getAttribute('data-correct') === 'true';
          var rationale = btn.getAttribute('data-rationale') || '';

          opts.forEach(function(b) {
            b.disabled = true;
            if (b.getAttribute('data-correct') === 'true') {
              b.classList.add('correct');
            }
          });

          if (isCorrect) {
            btn.classList.add('correct');
            if (feedback) {
              feedback.className = 'te-feedback ok';
              feedback.innerHTML = '<strong>Correto! 🎯</strong> ' + rationale;
              feedback.hidden = false;
            }
            if (exId) localStorage.setItem('pratica.ex.' + exId, 'correct');
            if (statusEl) {
              statusEl.textContent = '✓ Dominado (+50 XP)';
              statusEl.style.color = 'var(--teal)';
            }
            if (xpBadge) {
              xpBadge.style.background = 'var(--teal)';
              xpBadge.style.color = '#1e1f29';
              xpBadge.style.transform = 'scale(1.15)';
              setTimeout(function() { xpBadge.style.transform = ''; }, 300);
            }
            updateXpDisplay();
          } else {
            btn.classList.add('wrong');
            if (feedback) {
              feedback.className = 'te-feedback err';
              feedback.innerHTML = '<strong>Incorreto ⚠️</strong> ' + rationale;
              feedback.hidden = false;
            }
            if (exId) localStorage.setItem('pratica.ex.' + exId, 'wrong');
            if (statusEl) {
              statusEl.textContent = 'Revisar Conceito ⚠️';
              statusEl.style.color = 'var(--rose)';
            }
          }
        });
      });
    });

    // 3. Flashcards com Delegação Global (.tf-card e .fc-card)
    document.addEventListener('click', function(e) {
      var tfCard = e.target.closest('.tf-card');
      if (tfCard) {
        tfCard.classList.toggle('flipped');
        return;
      }
      var fcCard = e.target.closest('.fc-card');
      if (fcCard) {
        fcCard.classList.toggle('flipped');
      }
    });

    // 4. Inicializa medidor de XP
    updateXpDisplay();

    // 5. Integração com botão Reset se existir
    var resetBtn = document.getElementById('reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', function() {
        setTimeout(updateXpDisplay, 200);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuizEngine);
  } else {
    initQuizEngine();
  }
})();
