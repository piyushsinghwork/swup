var swup = new Swup({
    containers: ['#ss'],
    plugins: [
      new SwupDebugPlugin(),
      new SwupScrollPlugin({
        animateScroll: true
      }),
      new SwupSlideTheme(),
      new SwupBodyClassPlugin(),
      
    ],
  });
  
  var themes = {
    FadeTheme: SwupFadeTheme,
    SlideTheme: SwupSlideTheme,
    OverlayTheme: SwupOverlayTheme,
  };
  var currentTheme = 'SlideTheme';
  
  document.addEventListener('change', function (event) {
    if (event.target.name === 'theme') {
      swup.unuse(currentTheme);
      swup.use(new themes[event.target.value]);
      currentTheme = event.target.value;
      swup.cache.empty();
    }
  });
  
  function checkTheme() {
    if (document.querySelector('input[name="theme"]')) {
      document.querySelector('input[name="theme"][value="' + currentTheme + '"]').checked = true;
    }
  };
  
  checkTheme();
  swup.on('pageView', checkTheme);

//  AOS.init();