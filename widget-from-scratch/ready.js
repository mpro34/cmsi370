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
	$("div").keyup(function(event){
		//If isGood or isGreat is greater than 1, then that property applies to the current pw.
		if ($(this).children().attr("name") != check) {
			isBad = 0;
            isGood = 0;
            isGreat = 0;
            current = 0;
		}
	    var password = $(this).children().attr("value");
	    //HERE
	    alert(password);
      
        var code;
        if (!event) var event = window.event;
      //Accomidate for all browsers' key recognition
        if (event.keyCode) code = event.keyCode;
        else if (event.which) code = event.which;
        else if (event.charCode) code = event.charCode;
      //Checks to see if the backspace key was pressed
      //If backspace is pressed, need to reformat the check value, else normal operation.
      if (code == 8) {
    	    isBad = 0
    	    isGood = 0;
    	    isGreat = 0;
    	    current--;
    	    //alert("code: "+password.charAt(2));
    	    for (var i=0; i<password.length; i++) {
    	        if ((/[A-Z]/.test(password.charAt(i)))) {
	    		    isGreat++;
	    		   // alert("great");
	    	    }
	    	    else if (!isNaN(password.charAt(i))) { 
	    		    isGood++;
	    		   // alert("good");
	    	    }
	            else {
                    isBad++;
                   // alert("bad");
	    	    }
    	    }
        }    

        else {
          //A great password is longer than 8 characters
        	if (password.length>8) {
        		isGreat++;
        		isGood++;
        	}
          //Check if capital letters are present in the password or length is greater than 8
	    	if ((/[A-Z]/.test(password.charAt(current)))) {
	    		isGreat++;
	    		alert("cap: "+password.charAt(current)+", "+current);
	    	}
	    	//Check if numbers are present in the password
	    	else if (!isNaN(password.charAt(current))) { 
	    		isGood++;
	    		alert("numb: " + (password.charAt(current))+", "+current);
	    	}
	        else {
                isBad++;
	    	}
	    	 current++;        //Update the current pw character value
	    }
	   
	    
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