/* Floating style switcher. Behaviour only: each page styles
   .switcher, .switcher__toggle, .switcher__panel, .switcher__link in its own style. */
(function () {
  window.STYLE_PAGES = [
    { slug: 'minimalism', name: 'Minimalism', blurb: 'Quiet, spacious, only what matters.' },
    { slug: 'neobrutalism', name: 'Neobrutalism', blurb: 'Loud colour, thick borders, hard shadows.' },
    { slug: 'constructivism', name: 'Constructivism', blurb: 'Red, black, diagonals, poster energy.' },
    { slug: 'swiss', name: 'Swiss Style', blurb: 'Strict grid, clean type, total clarity.' },
    { slug: 'editorial', name: 'Editorial', blurb: 'A magazine spread for coffee lovers.' },
    { slug: 'retro', name: 'Retro', blurb: 'Warm seventies cafe nostalgia.' },
    { slug: 'hand-drawn', name: 'Hand-drawn', blurb: 'Sketchbook doodles and taped photos.' },
    { slug: 'flat', name: 'Flat', blurb: 'Bright solid colour and simple shapes.' },
    { slug: 'bento', name: 'Bento', blurb: 'Everything in neat, modular tiles.' }
  ];

  window.mountSwitcher = function (currentSlug) {
    var current = window.STYLE_PAGES.filter(function (p) { return p.slug === currentSlug; })[0];
    var nav = document.createElement('nav');
    nav.className = 'switcher';
    nav.setAttribute('aria-label', 'Design styles');

    var links = window.STYLE_PAGES.map(function (p) {
      return '<a class="switcher__link" href="' + p.slug + '.html"' +
        (p.slug === currentSlug ? ' aria-current="page"' : '') + '>' + p.name + '</a>';
    }).join('');

    nav.innerHTML =
      '<button type="button" class="switcher__toggle" aria-expanded="false" aria-controls="switcher-panel">' +
        'Style: ' + (current ? current.name : 'Choose') +
      '</button>' +
      '<div class="switcher__panel" id="switcher-panel" hidden>' + links +
        '<a class="switcher__link switcher__link--all" href="../index.html">All styles</a>' +
      '</div>';
    document.body.appendChild(nav);

    var toggle = nav.querySelector('.switcher__toggle');
    var panel = nav.querySelector('.switcher__panel');

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
      nav.classList.toggle('is-open', open);
      if (open) panel.querySelector('a').focus();
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) { setOpen(false); toggle.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !panel.hidden) setOpen(false);
    });
  };
})();
