/* Halcyon Coffee Roasters: ALL photos live here.
   To use your own photos, change `src` to a local path (e.g. '../images/hero.jpg')
   and update `alt`. Local paths are used as-is; Unsplash URLs get a width added. */
(function () {
  function u(id) { return 'https://images.unsplash.com/' + id + '?auto=format&fit=crop&q=80'; }

  window.IMAGES = {
    hero:     { src: u('photo-1442512595331-e89e73853f31'), alt: 'Barista pouring hot water from a gooseneck kettle into a Chemex' },
    heroCalm: { src: u('photo-1559496417-e7f25cb247f3'), alt: 'A cortado in a ribbed glass on a sunlit white surface with leaf shadows' },
    about:    { src: u('photo-1497935586351-b67a49e012bf'), alt: 'Portafilters with whole beans, ground coffee and a latte on a wooden board' },
    roast:    { src: u('photo-1447933601403-0c6688de566e'), alt: 'Freshly roasted coffee beans filling the frame' },
    menu:     { src: u('photo-1495474472287-4d71bcdd2085'), alt: 'Friends clinking cups of latte art and iced coffee over a cafe table' },
    pastry:   { src: u('photo-1555507036-ab1f4038808a'), alt: 'Golden butter croissants being dusted with sugar' },
    iced:     { src: u('photo-1461023058943-07fcbe16d735'), alt: 'Iced coffee with swirling milk in a tall glass' },
    origins: [
      { src: u('photo-1587734195503-904fca47e0e9'), alt: 'Roasted coffee beans in a white ceramic cup' },
      { src: u('photo-1517668808822-9ebb02f2a0e6'), alt: 'Close-up of glossy medium-roast coffee beans' },
      { src: u('photo-1580933073521-dc49ac0d4e6a'), alt: 'An even layer of roasted coffee beans seen from above' }
    ],
    gallery: [
      { src: u('photo-1453614512568-c4024d13c247'), alt: 'Espresso bar with grinders under warm pendant lights and a white brick wall' },
      { src: u('photo-1554118811-1e0d58224f24'), alt: 'Bright cafe interior with rattan chairs and a large fiddle-leaf fig' },
      { src: u('photo-1572442388796-11668a67e53d'), alt: 'Cappuccino with rosetta latte art on a white saucer' },
      { src: u('photo-1498804103079-a6351b050096'), alt: 'Coffee drinks arranged in a circle on a round wooden table' },
      { src: u('photo-1600093463592-8e36ae95ef56'), alt: 'Greenhouse-style cafe with hanging plants and wooden beams' },
      { src: u('photo-1501339847302-ac426a4a7cbb'), alt: 'Illuminated cafe sign above shelves and pendant lamps' }
    ],
    visit:    { src: u('photo-1559925393-8be0ec4767c8'), alt: 'Cafe terrace on a cobbled street with a chalkboard menu' }
  };

  /* Test hook: ?breakimages makes every image fail to decode. */
  if (/[?&]breakimages\b/.test((window.location && window.location.search) || '')) {
    var broken = 'data:image/png;base64,AAAA';
    Object.keys(window.IMAGES).forEach(function (k) {
      var v = window.IMAGES[k];
      (Array.isArray(v) ? v : [v]).forEach(function (e) { e.src = broken; });
    });
  }

  window.imgSrc = function (entry, width) {
    return entry.src.indexOf('images.unsplash.com') !== -1 ? entry.src + '&w=' + width : entry.src;
  };

  /* Marks images that fail to load with .img-failed so each page can show a styled block. */
  window.guardImages = function (root) {
    root.querySelectorAll('img').forEach(function (img) {
      function fail() { img.classList.add('img-failed'); }
      if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) fail();
      else img.addEventListener('error', fail, { once: true });
    });
  };
})();
