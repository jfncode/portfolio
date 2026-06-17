/* jfncode chatbot — terminal offline. Depende de window.JFN_FAQ (faq.js). */
(function () {
  var WA = 'https://wa.me/5548998006470?text=' +
    encodeURIComponent('Olá! Vim pelo chatbot do site e quero tirar uma dúvida / fazer um orçamento.');
  var FAQ = window.JFN_FAQ;
  if (!FAQ) return;

  // normaliza: minúsculas, sem acento, sem pontuação
  function norm(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function byId(id) { return FAQ.itens.find(function (x) { return x.id === id; }); }

  // casa a frase digitada com o item de maior pontuação por tags
  function match(text) {
    var q = norm(text), best = null, score = 0;
    FAQ.itens.forEach(function (it) {
      var s = 0;
      it.tags.forEach(function (t) { if (q.indexOf(norm(t)) !== -1) s++; });
      if (s > score) { score = s; best = it; }
    });
    return score > 0 ? best : null;
  }

  // ---- UI ----
  var win, log, input, opened = false;
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  function line(prompt, cmd) {
    var d = el('div', 'jfc-line');
    d.innerHTML = '<span class="jfc-pr">visitante@jfncode</span><span class="jfc-gr">:~$</span> <span class="jfc-cmd"></span>';
    d.querySelector('.jfc-cmd').textContent = cmd;
    log.appendChild(d); scroll();
  }
  function bot(html) { log.appendChild(el('div', 'jfc-bot', '<span class="jfc-j">{J}</span> ' + html)); scroll(); }
  function scroll() { log.scrollTop = log.scrollHeight; }

  function chips(items, withWa) {
    var box = el('div', 'jfc-chips');
    items.forEach(function (it) {
      var c = el('button', 'jfc-chip'); c.type = 'button'; c.textContent = it.pergunta;
      c.addEventListener('click', function () { ask(it.pergunta, it); });
      box.appendChild(c);
    });
    if (withWa) box.appendChild(waBtn());
    log.appendChild(box); scroll();
  }
  function waBtn() {
    var a = el('a', 'jfc-wa', '💬 falar no WhatsApp'); a.href = WA; a.target = '_blank'; a.rel = 'noopener';
    return a;
  }
  function menuChip() {
    var c = el('button', 'jfc-chip', 'voltar ao menu'); c.type = 'button';
    c.addEventListener('click', function () { greet(false); });
    return c;
  }

  function answer(item) {
    setTimeout(function () {
      bot(item.resposta);
      if (item.wa) { var box = el('div', 'jfc-chips'); box.appendChild(waBtn()); log.appendChild(box); scroll(); }
    }, 260);
  }
  function fallback() {
    setTimeout(function () {
      bot(FAQ.fallback);
      var box = el('div', 'jfc-chips'); box.appendChild(waBtn()); box.appendChild(menuChip());
      log.appendChild(box); scroll();
    }, 260);
  }

  function ask(typed, item) {
    line('visitante', typed);
    var it = item || match(typed);
    if (it) answer(it); else fallback();
  }

  function greet(first) {
    if (first) line('visitante', 'ajuda');
    bot(FAQ.saudacao);
    chips(FAQ.destaques.map(byId).filter(Boolean), false);
  }

  function build() {
    win = el('div', 'jfc-win');
    win.innerHTML =
      '<div class="jfc-bar">' +
        '<span class="jfc-dot" style="background:#ff5f56"></span>' +
        '<span class="jfc-dot" style="background:#ffbd2e"></span>' +
        '<span class="jfc-dot" style="background:#27c93f"></span>' +
        '<span class="jfc-title">jfncode chatbot — ~</span>' +
        '<button class="jfc-x" type="button" aria-label="Fechar">✕</button>' +
      '</div>' +
      '<div class="jfc-log"></div>' +
      '<form class="jfc-inp"><span class="jfc-pr">visitante@jfncode</span><span class="jfc-gr">:~$</span>' +
        '<input type="text" autocomplete="off" placeholder="digite sua dúvida..." aria-label="Digite sua pergunta"></form>';
    document.body.appendChild(win);
    log = win.querySelector('.jfc-log');
    input = win.querySelector('input');
    win.querySelector('.jfc-x').addEventListener('click', toggle);
    win.querySelector('.jfc-inp').addEventListener('submit', function (e) {
      e.preventDefault(); var v = input.value.trim(); if (!v) return; input.value = ''; ask(v);
    });
  }

  function toggle() {
    if (!win) build();
    opened = !opened;
    win.classList.toggle('open', opened);
    fab.classList.toggle('hidden', opened);
    if (opened && !log.dataset.started) { log.dataset.started = '1'; greet(true); setTimeout(function () { input.focus(); }, 200); }
  }

  // FAB
  var fab = el('button', 'jfc-fab');
  fab.type = 'button';
  fab.innerHTML =
    '<span class="jfc-seal"><span class="jfc-gr">{</span><span class="jfc-j">J</span><span class="jfc-gr">}</span></span>' +
    '<span class="jfc-ftxt"><b>jfncode chatbot</b><span>tire suas dúvidas &gt;_</span></span>';
  fab.addEventListener('click', toggle);
  document.body.appendChild(fab);
})();
