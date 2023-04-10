$(function () {
    const element = document.querySelector("#wrap");

    element.addEventListener('wheel', (event) => {
        event.preventDefault();

        element.scrollBy({
            left: event.deltaY < 0 ? -50 : 50,

        });
    });

    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
      });
});

