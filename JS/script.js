$(document).ready(function() {
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    });

    var typed = new Typed('#element', {
        strings: ["a Developer", "a Designer", "a Businessman"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

    // Progress Bars
    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
            $('.progress-bar').eq(0).css("width", "100%").css("transition", "1s All");
            $('.progress-bar').eq(1).css("width", "95%").css("transition", "1.5s All");
            $('.progress-bar').eq(2).css("width", "85%").css("transition", "1.7s All");
            $('.progress-bar').eq(3).css("width", "80%").css("transition", "2s All");
        },
        offset: '90%'
    });

    // Owl carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1
    });

    // Contact Form Submission
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        var formData = {
            'name': $('#name').val(),
            'email': $('#email').val(),
            'message': $('#message').val()
        };
        $.ajax({
            type: 'POST',
            url: 'https://api.web3forms.com/submit', // Replace with your API endpoint
            headers: {
                'Authorization': 'e71729db-1eb6-490f-b102-95e4cd342f59' // Replace with your API key
            },
            data: JSON.stringify(formData),
            success: function(response) {
                console.log(response);
                alert('Message sent successfully!');
                // You can redirect the user to a thank you page or show a success message here
            },
            error: function(error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            }
        });
    });
});
