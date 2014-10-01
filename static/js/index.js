var jumboHeight = $('.jumbotron').outerHeight();

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();

    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
    }

    else {
      $('nav').removeClass('shrink');
    }
});

function smoothScroll(navItem, e){
   // prevent default anchor click behavior
     e.preventDefault();

     // animate
     $('html, body').animate({
         scrollTop: $(navItem.hash).offset().top
       }, 500, function(){

         // when done, add hash to url
         // (default click behaviour)
         window.location.hash = navItem.hash;
       });
}

$(document).ready(function(e) {

  $(".nav li a").on('click', function(e) {
    smoothScroll(this, e);
  });

  $(".navbar-brand").on('click', function(e) {
    smoothScroll(this, e);
  });

});
