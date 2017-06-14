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