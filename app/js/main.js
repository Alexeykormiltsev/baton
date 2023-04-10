"use string"

$(function () {
    const element = document.querySelector("#wrap");

    element.addEventListener('wheel', (event) => {
        event.preventDefault();

        element.scrollBy({
            left: event.deltaY < 0 ? -50 : 50,

        });
    });

    $(".menu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            left = $(id).offset().left;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollLeft: left }, 1500);
    });

});


