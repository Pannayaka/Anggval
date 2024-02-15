$(document).ready(function () {
    var cardTimeout;

    $('.body').click(function () {
        // Clear the previous timeout if any
        clearTimeout(cardTimeout);

        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    });

    // Set a timeout to trigger the animation if not clicked in 3 seconds
    cardTimeout = setTimeout(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }, 7000);
});