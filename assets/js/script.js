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
        interval = setInterval(activateNextItem, 2000);
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


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });