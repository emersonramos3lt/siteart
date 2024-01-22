window.sr = ScrollReveal ({reset: true});

sr.reveal('.appear, img, p, h2, h1', {duration:
1200});

anime({
  targets: '.anime',
  translateX: 70,
  direction: 'alternate',
  easing: 'spring(1, 80, 10, 0)',
  complete: function(anim) {
    anime({
      targets: '.anime',
      translateX: 0,
      easing: 'spring(1, 80, 10, 0)'
    });
  }
});