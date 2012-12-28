$(document).ready(function() {

    var count = $("div.ps_field").length;
    //The name attribute in each input field will keep track of the checks below.
    $("div.ps_field").append($("<input/>", {'type' : "text", 'name' : "000"}));
    for (var i=0; i<count; i++) {		//Goes through each div and looks up its id.
        var id = $("input:eq("+i+")").closest("div").attr("id");
        $("input:eq("+i+")").attr("id", id);   //Takes that id and sets the id of the input tag.
    }

    //Each time the user changes the password field, the following will determine its security level.
    // JD: As far as I can tell, none of these variables are used outside
    //     of the event handler function.  Thus, they are declared at the
    //     wrong level (too high up).  Bad habit---it does not overtly
    //     harm you here, but may in future, more complex work.
    var current = 0;
    var isBad = 0;
    var isGood = 0;
    var isGreat = 0;
    var check = "";

    // JD: You addressed the "every single div" problem above by using
    //     a ps_field class, which is good, but then you repeat that mistake
    //     below, by binding "every single input" to have password-strength
    //     behavior.  There may be further input elements on the web page that
    //     are not meant to be password strength indicators.
    $("input").bind("input", function(event){
        // JD: This code is inside the event handler function, and therefore
        //     should be indented!  Sloppy.
    //If isGood or isGreat is greater than 1, then that property applies to the current pw.
    // JD: The prefix "is" implies that a variable is boolean (i.e., either it
    //     "is" or "is not").  And yet these variables are integers, which you
    //     increment based on various conditions.  Bad naming choice.
    isBad = 0;
    isGood = 0;
    isGreat = 0;
    current = 0;
    var password = $(this).val();
  
        //A great password is longer than 8 characters
        if (password.length>8) {
            isGreat++;
            isGood++;
        }

        //Check if capital letters are present in the password or length is greater than 8
        if (/[A-Z]/.test(password)) {
            isGreat++;
        }

        //Check if numbers are present in the password
        if (/[0-9]/.test(password)) { 
            isGood++;
        }

        //Check if there are lower case letters present in the password
        if (/[a-z]/.test(password)) {
            // JD: So...isBad is not necessarily bad?  You *really* need better
            //     variable names.
            isBad++;
        }
	   

        //Remove current class so that a new class may be assigned.
        $(this).removeClass("code-green").removeClass("code-yellow").removeClass("code-red");
        //Check if the password is code-green (great password)
        //lowercase letters, numbers, and uppercase letters
        if (isGreat && isGood && isBad) {
            $(this).addClass("code-green");
        }

        //Check if the password is code-yellow (good password)
        //lowercase letters or uppercase letters and numbers
        else if (isGood && isBad) {
            $(this).addClass("code-yellow");
	    }
            // JD: Some code duplication here.  Both blocks above and below
            //     add the code-yellow class.  They can be collapsed into a
            //     single clause.
        else if (isGreat && isGood) {
            $(this).addClass("code-yellow");
        }

        //Check if the password is code-red (bad password)
        //Only lowercase letters
        else {
            $(this).addClass("code-red");
        }

        //Update check values
        // JD: I see why you did this, but in the end I think this is mainly
        //     debug code.  Removable once the widget works as intended.
        check = ("").concat(isBad.toString()).concat(isGood.toString()).concat(isGreat.toString()); 
        $(this).attr("name", check);
        //Removes the default code-red class if there is no password string.
        // JD: Note again, === is preferred in JavaScript.
        if (password.length == 0) {
            $(this).removeClass("code-red");
        }
    });
});
