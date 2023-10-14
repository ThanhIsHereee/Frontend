document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        type     : 'loop',
        height   : '35rem',
        focus    : 'center',
        perPage: 3,
        // autoWidth: true,
    });
    splide.mount();
} );


