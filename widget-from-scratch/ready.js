$(document).ready(function() {

    var count = $("div.ps_field").length;
    //The name attribute in each input field will keep track of the checks below.
    $("div.ps_field").append($("<input/>", {'type' : "text", 'name' : "000"}));
    for (var i=0; i<count; i++) {		//Goes through each div and looks up its id.
        var id = $("input:eq("+i+")").closest("div").attr("id");
        $("input:eq("+i+")").attr("id", id);   //Takes that id and sets the id of the input tag.
    }

    //Each time the user changes the password field, the following will determine its security level.
    var current = 0;
    var isBad = 0;
    var isGood = 0;
    var isGreat = 0;
    var check = "";
    $("input").bind("input", function(event){
    //If isGood or isGreat is greater than 1, then that property applies to the current pw.
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

        else if (isGreat && isGood) {
            $(this).addClass("code-yellow");
        }

        //Check if the password is code-red (bad password)
        //Only lowercase letters
        else {
            $(this).addClass("code-red");
        }

        //Update check values
        check = ("").concat(isBad.toString()).concat(isGood.toString()).concat(isGreat.toString()); 
        $(this).attr("name", check);
        //Removes the default code-red class if there is no password string.
        if (password.length == 0) {
            $(this).removeClass("code-red");
        }
    });
});