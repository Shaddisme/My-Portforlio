
$(document).ready(function(){


    $(window).on('load',function(){
      $('.preloader').addClass('complete')
    });
    
    $(window).on('scroll',function(){
      var scroll = $(window).scrollTop();
      console.log(scroll);
      if(scroll >=50){
        $(".sticky").addClass("stickyadd");
      }else{
        $(".sticky").removeClass("stickyadd");
      }
    });
    
    // progress bars
    
    var waypoint = new Waypoint({
        element: $('#experience')[0], // Use jQuery to select the element with ID 'experience'
        handler: function() {
            var p = $('.progress-bar');
            p.eq(0).css("width", "100%").css("transition", "1s all");
            p.eq(1).css("width", "95%").css("transition", "1.5s all");
            p.eq(2).css("width", "85%").css("transition", "1.7s all");
            p.eq(3).css("width", "99%").css("transition", "2s all");
            p.eq(4).css("width", "85%").css("transition", "2.3s all");
            p.eq(5).css("width", "95%").css("transition", "2.5s all");
        },
        offset: '90%'
    });

    // Adding fadeInUp animation to children of divs with class .way-fade-up
    $('.way-fade-up > *').each(function() {
        var self = $(this);
        self.waypoint(function() {
            self.addClass('animated fadeInUp');
        }, {
            offset: '90%'
        });
    });

    // Adding fadeInLeft animation to children of divs with class .way-fade-left
    $('.way-fade-left > *').each(function() {
        var self = $(this);
        self.waypoint(function() {
            self.addClass('animated fadeInLeft');
        }, {
            offset: '90%'
        });
    });

    // Adding fadeInRight animation to children of divs with class .way-fade-right
    $('.way-fade-right > *').each(function() {
        var self = $(this);
        self.waypoint(function() {
            self.addClass('animated fadeInRight');
        }, {
            offset: '90%'
        });
    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        // margin:10,   // since one item ou can remove it
        nav:false,
        // dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        items:1,
        // animateOut : "fadeOut",
        animateIn : "fadeInRight"
    
    });
    
    
    var filterizd = $('.filter-container').filterizr({
       animationDuration: .5,
    
    });
    
    // $('.img-loaded').imagesLoaded()
    //   .done( function( instance ) {
    //     var filterizd = $('.filter-container').filterizr({
    //        animationDuration: .5,
    //
    //     });
    //   });
    
    
      var typed = new Typed(".element", {
      strings: ["John Doe", "a Developer","a Designer","a Businessman"],
      smartBackspace: true,
       typeSpeed: 100,
       backSpeed: 100,
       loop: true,
      loopCount: Infinity,
      startDelay: 1000
    });
    
    
    $('a').smoothScroll({
    
      speed:2000,
    });
    
    });
    