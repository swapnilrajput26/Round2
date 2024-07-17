$(document).ready(function() {
    let currentIndex = 0;
    const items = $('.diamond-links__item');
    const itemCount = items.length;
    let interval;

    function activateNextItem() {
        items.removeClass('active');
        $(items[currentIndex]).addClass('active');
        currentIndex = (currentIndex + 1) % itemCount;
    }

    function startInterval() {
        interval = setInterval(activateNextItem, 1500);
    }

    function stopInterval() {
        clearInterval(interval);
    }

    items.hover(function() {
        stopInterval();
        items.removeClass('active');
        $(this).addClass('active');
        currentIndex = items.index(this);
    }, function() {
        startInterval();
    });

    activateNextItem();
    startInterval();
});