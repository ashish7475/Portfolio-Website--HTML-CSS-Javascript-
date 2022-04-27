$(document).ready(function () { // Use ready() to make a function available after the document is loaded:

  $('#menu').click(function () { //The click() method simulates a mouse-click on an element.
    $(this).toggleClass('fa-times'); // toggle menu button to X 
    $('header').toggleClass('toggle'); // toggle header class from left
  });

  $(window).on('scroll load', function () {
    /*setting functions after removing menu and header */

    $('#menu').removeClass('fa-times'); /*for menu section it ll change to X icon */

    $('header').removeClass('toggle');  /* for header it is just toggle */

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click', function (e) {

    e.preventDefault();// Only prevent default if animation is actually gonna happen

    $('html, body').animate({ // animate based on some func
      //I am using jQuery .animate() method for a smooth scroll, with a duration of 1000 milliseconds or (1 second). You can change the delay to 2000 or more, depending upon your requirement.
      // Within the animate() method, I have added the scrollTop method. This method takes a parameter as position, to where it will scroll, vertically. The position is the anchor link’s location, which is extracted using the .offset() method.
      //When you click the <a> tag, the scrollTop method is called with the anchor links (<a>) location and it animatedly or smoothly scroll to that location, taking a sweet time of 1000 milliseconds (instead of reaching the location instantly). Its that simple.

      scrollTop: $($(this).attr('href')).offset().top,

    },
      1000,
      'linear'
    );

  });

});