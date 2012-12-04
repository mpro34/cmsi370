//Implements slider bar functionality with jQuery

// JD: All of these functions can actually be consolidated into a single
//     $(function () { .... } ); block.
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