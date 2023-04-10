$(function () {
    const element = document.querySelector("#wrap");

    element.addEventListener('wheel', (event) => {
        event.preventDefault();

        element.scrollBy({
            left: event.deltaY < 0 ? -50 : 50,

        });
    });
});

