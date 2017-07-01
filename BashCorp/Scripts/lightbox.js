
$(document).ready(function () {

    $('.light-box').hide();
    $('.modal-background').hide();

    $('.lightbox-trigger').click(function (e) {
        var id = $(this).attr('id')
        if (id) {
            $('#light-box-' + id).show();
            $('.light-box-' + id).slick();     
            $('.close-light-box').show();
            $('.modal-background').show();
        }
    });

    $('.close-light-box').click(function (e) {
        $('.light-box').hide();
        $('.modal-background').hide();
    });
})