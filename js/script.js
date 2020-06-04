$(document).ready(function () {

    console.log("ready!");


    $("#lightgallery").lightGallery({
        download: false,
        thumbnail: false,
}); 





    // Elementi vari di jQuery

    // var heightHeader =  $("header").height();
    // var scrollTop = $(window).scrollTop();
    
    // $(window).scroll(function (event) {
    //     var scroll = $(window).scrollTop();
    //     console.log(scroll);
    // });

    // if (scrollTop > heightHeader) {
    //     console.log("Siamo sotto l'header");
    // }

    // var linkChangeColor = $("#changeColor");
    // var titoloAndrea = $(".titolo_andrea");

    // $(linkChangeColor).click(function () {
    //     $(titoloAndrea).toggleClass('text-red');https://lesmaudits.it/wp-json/wp/v2/pages/38
    // });




    // PRENDE IL JSON (controllare anche la funziona ajax di jQuery)


    // $.getJSON("https://www.unilink.it//wp-json/wp/v2/posts/", function (data) {
    //    // console.log(data);
    //     jQuery("#show-data").html(data);


    //     jQuery.each(data, function(i, val) {
    //        // console.log(val);
    //         var titolo = val.title.rendered;
    //         var contenuto = val.content.rendered
    //        // console.log(titolo);
    //         jQuery("#show-data").append("<h2>" + titolo + "</h2>" + "<p>" + contenuto + "</p>");

    //     })
    //});


});


