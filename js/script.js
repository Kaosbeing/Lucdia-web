$(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollCTA').fadeOut(500);
        }
        else {
            $('.scrollCTA').fadeIn(500);
        }
    });