var kayleeBlinkInterval = 0;
var cloudBlinkInterval = 0;

function kayleeBlink() {
    $("#kaylee").attr("src", "/Content/assets/Kaylee blink.svg");
    setTimeout(function () {
        $("#kaylee").attr("src", "/Content/assets/Kaylee.svg");
        clearInterval(kayleeBlinkInterval);
        kayleeBlinkInterval = setInterval("kayleeBlink()", getRandomInterval());
    }, 500);
}

function cloudBlink() {
    $("#cloud").attr("src", "/Content/assets/Cloud blink.svg");
    setTimeout(function () {
        $("#cloud").attr("src", "/Content/assets/Cloud.svg");
        clearInterval(cloudBlinkInterval);
        cloudBlinkInterval = setInterval("cloudBlink()", getRandomInterval());
    }, 500);
}

function getRandomInterval() {
    return Math.floor((Math.random() * (25 - 7 + 1)) + 5) * 1000;
}

function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function () {
    $("#content").hide(0).fadeIn(2000);

    if (kayleeBlinkInterval) {
        clearInterval(kayleeBlinkInterval);
    }
    if (cloudBlinkInterval) {
        clearInterval(cloudBlinkInterval);
    }
    kayleeBlinkInterval = setInterval("kayleeBlink()", 3000);
    cloudBlinkInterval = setInterval("cloudBlink()", 6000);
});

$(document).ready(function () {

    $('.skill').click(function (e) {

        e.preventDefault();
        var data = $(this);
        var icon = data.attr('data-icon');
        var desc = data.attr('data-description');
        var url = data.attr('data-url');

        var dialog = $('<div />').addClass('skillPopup container');
        var ic = $('<img />').attr('src', '/Content/assets/' + icon).attr('alt', desc).addClass('img-responsive');
        var sl = null;
        if (url) {
            sl = $('<a />').attr('href', url);
            sl.append(ic);
        }

        var des = $('<p/>').text(desc);
        var lhs = $('<div />').addClass('col-xs-5').append(sl || ic);
        var rhs = $('<div />').addClass('col-xs-7').append(des);
        var closeLink = $('<a/>').text('close').attr('href', '#');
        closeLink.click(function (el) {
            el.preventDefault();
            dialog.slideUp(250, function () {
                dialog.remove();
            });
            
        });

        var close = $('<p/>').addClass('text-center').append(closeLink);
        var r = $('<div />').addClass('row').append(lhs).append(rhs).append(close);
        dialog.css({ 'top': $(window).scrollTop() + 200, 'left': (window.innerWidth / 2) - 200})
        dialog.hide();
        dialog.append(r);
        $('body').append(dialog);
        dialog.slideDown(150);
    });

})