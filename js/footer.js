$(window).load(function () {
    $('footer > nav > label').hover(function() {
        $('.contact_frame').css('display', 'flex');
    }, function() {
        $('.contact_frame').css('display', 'none');
    });
});
