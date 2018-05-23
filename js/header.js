$('document').ready(function () {
    $('.documents_frame').hover(function() {
        $('.documents_frame').css('background-color', '#FFCB4F');
        $('.toggle_frame_documents').css('display', 'block');
    }, function() {
        $('.toggle_frame_documents').hover(null, function() {
            $('.documents_frame').css('background-color', 'rgb(180, 135, 0)');
            $('.toggle_frame_documents').css('display', 'none');
        });
    });

    $('.services_frame').hover(function() {
        $('.services_frame').css('background-color', '#FFCB4F');
        $('.toggle_frame_services').css('display', 'block');
    }, function() {
        $('.toggle_frame_services').hover(null, function() {
            $('.services_frame').css('background-color', 'rgb(180, 135, 0)');
            $('.toggle_frame_services').css('display', 'none');
        });
    });
});
