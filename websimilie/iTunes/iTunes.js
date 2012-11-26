//Implements slider bar functionality with jQuery
$(function() {
    $( "#slider" ).slider();
});

$(document).ready(function(){
    $('a#b1').click(function(){
        $(this).toggleClass("down");
    });
});

$(document).ready(function(){
    $('a#b2').click(function(){
        $(this).toggleClass("down");
    });
});

$(document).ready(function(){
    $('a#b3').click(function(){
        $(this).toggleClass("down");
    });
});

$(document).ready(function(){
    $('a#b4').click(function(){
        $(this).toggleClass("down");
    });
});