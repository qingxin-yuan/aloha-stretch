$(function() {

  //flickity setup
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: 1500,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false
  });

  //smooth scrolling code from css tricks 
  //https://css-tricks.com/snippets/jquery/smooth-scrolling/
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          
          $('html, body').animate({
            scrollTop: target.offset().top - $('nav').outerHeight()//subtracting nav bar height, from the top offset
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
    // Fix "Skip Link" Focus in Webkit
  $("a[href^='#']").not("a[href='#']").click(function() {
    $("#"+$(this).attr("href").slice(1)+"").focus();
 });

    //email validation
  $('.email-form').on('click', '.button',function(event){
      event.preventDefault();

      var emailAddress = $('.email-address').val();

      var filter =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
      
      var validation = filter.test(emailAddress);
      if (validation){
        alert('Thanks for subscribing!');
      }
      else{
          alert('Please enter a valid email address');
      }
  });

  //cart items counting algorithm
  var count = 0;

  $('.add-item').on('click',function(event){
    event.preventDefault();

    count++;
    
    $('.cart-container span').html(count).css('display','block');
  })

});