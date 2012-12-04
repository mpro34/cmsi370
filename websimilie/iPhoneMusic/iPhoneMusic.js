//Implements a slider with jsquery	
/* JD: No need for separate blocks here; you can just do:

$(function () {
    $("#slider1").slider();
    $("#slider2").slider();
});

    Actually, this can be even more compact by taking advantage
    of jQuery's selector capabilities:

$(function () {
    $("#slider1, #slider2").slider();
});

    Compact but readable code is always great to see! :)
*/
$(function() {
    $( "#slider1" ).slider();   
});

$(function() {
    $( "#slider2" ).slider();
});