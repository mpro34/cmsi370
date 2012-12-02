$(document).ready(function(){

	var count = $("div").length;
    //The name attribute in each input field will keep track of the checks below.
	$("div").append($("<input/>", {'type' : "text", 'name' : "000"}));
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
	$("div").keyup(function(){
		//If isGood or isGreat is greater than 1, then that property applies to the current pw.
		if ($(this).children().attr("name") != check) {
			isBad = 0;
            isGood = 0;
            isGreat = 0;
            current = 0;
		}
	    var password = $(this).children().attr("value");
	    //HERE
	    alert(!isNaN(password.charAt(current)));
	    //Check if capital letters are present in the password
	    	if ((/[A-Z]/.test(password.charAt(current)))) {
	    		isGreat++;
	    	}
	    	//Check if numbers are present in the password
	    	else if (!isNaN(password.charAt(current))) { 
	    		isGood++;
	    	}
	        else {
                isBad++;
	    	}
	 

	   // alert("here:" + (password.charAt(current)));
	    current++;        //Update the current pw character value
	  //Remove current class so that a new class may be assigned.
	   $(this).children().removeClass("code-green").removeClass("code-yellow").removeClass("code-red");
      //Check if the password is code-green (great password)
	  //lowercase letters, numbers, and uppercase letters
	    if (isGreat > 0 && isGood > 0 && isBad > 0) {
		    $(this).children().addClass("code-green");
	    }

	  //Check if the password is code-yellow (good password)
	  //lowercase letters or uppercase letters and numbers
        else if (isGreat == 0  && isGood > 0 && isBad > 0) {
		    $(this).children().addClass("code-yellow");
	    }
	    else if (isGreat > 0  && isGood > 0 && isBad == 0) {
	    	$(this).children().addClass("code-yellow");
	    }

	  //Check if the password is code-red (bad password)
	  //Only lowercase letters
		else {
		    $(this).children().addClass("code-red");
	    }

	  //Update check values
	    check = ("").concat(isBad.toString()).concat(isGood.toString()).concat(isGreat.toString()); 
	    $(this).children().attr("name", check);
	  	


	});
})