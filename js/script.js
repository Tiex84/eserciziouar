$(document).ready(function () {

    console.log("ready!");

    var heightHeader =  $("header").height();

    var scrollTop = $(window).scrollTop();
    
    
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        console.log(scroll);
    });

    if (scrollTop > heightHeader) {
        console.log("Siamo sotto l'header");
    }

    var linkChangeColor = $("#changeColor");
    var titoloAndrea = $(".titolo_andrea");

    $(linkChangeColor).click(function () {
        $(titoloAndrea).toggleClass('text-red');
    });

});


