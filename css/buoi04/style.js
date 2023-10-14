document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        type     : 'loop',
        height   : '35rem',
        focus    : 'center',
        autoWidth: true,
    });
    splide.mount();
  } );