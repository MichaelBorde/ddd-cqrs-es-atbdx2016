(function () {
  'use strict';

  Reveal.initialize({
    controls: false,
    progress: true,
    history: true,
    center: true,
    mouseWheel: true,

    theme: Reveal.getQueryHash().theme || 'night',
    transition: Reveal.getQueryHash().transition || 'none',

    dependencies: [
      {
        src: 'lib/js/classList.js',
        condition: function () {
          return !document.body.classList;
        }
      },
      {
        src: 'reveal.js/plugin/highlight/highlight.js',
        async: true,
        callback: function () {
          hljs.initHighlightingOnLoad();
        }
      }
    ]
  });
})();
