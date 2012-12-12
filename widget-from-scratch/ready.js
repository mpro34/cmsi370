$(document).ready(function(){

    // JD: OK, so you use div as the supplied HTML and you build other elements
    //     based on those.  Note, though, that as written, you are converting
    //     *every* div into a password strength indicator field---not useful
    //     for webpages with lots of additional content!
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

    // JD: So, we talked about this choice of event, and I mentioned the
    //     various loopholes and issues involved with keyup.  This should
    //     really be the input event; unfortunate that you weren't able to
    //     get around to revising this in that direction.
    //
    //     Further, recall that the event handler should be assigned to the
    //     *input* element, not the div.  Assigning to the div causes potential
    //     spurious event handling (as discussed when we met).
	$("div").keyup(function(event){
		//If isGood or isGreat is greater than 1, then that property applies to the current pw.
		if ($(this).children().attr("name") != check) {
			isBad = 0;
            isGood = 0;
            isGreat = 0;
            current = 0;
		}
	    var password = $(this).children().attr("value");
	    //HERE, no alert and program goes crazy
        // JD: Changed this to a console.log, and also deleted it completely---
        //     both OK from whatI can tell.
	    console.log(password);
      
        var code;
        // JD: Bad choice here to do away with the curly braces.  Even
        //     though the conditional arms are short, the curly braces
        //     are still useful in making the different possibilities
        //     pop out.  In fact, it can be argued that the curly braces
        //     are even more important when the branches are short, because
        //     otherwise they blend in really easily and do not stand out
        //     as conditionals.
        if (!event) var event = window.event;
      //Accomidate for all browsers' key recognition
        if (event.keyCode) code = event.keyCode;
        else if (event.which) code = event.which;
        else if (event.charCode) code = event.charCode;
      //Checks to see if the backspace key was pressed
      //If backspace is pressed, need to reformat the check value, else normal operation.

      // JD: As discussed before, this entire block will not be necessary
      //     when you change from keyup to input.
      //
      //     Another side effect of removing this, as discussed previously,
      //     is that your "strength" logic will be cleaner when you consider
      //     the password as an entire string, and not look at things one
      //     keycode at a time.
      if (code == 8) {
    	    isBad = 0
    	    isGood = 0;
    	    isGreat = 0;
    	    current--;
    	    for (var i=0; i<password.length; i++) {
    	        if ((/[A-Z]/.test(password.charAt(i)))) {
	    		    isGreat++;
	    	    }
	    	    else if (!isNaN(password.charAt(i))) { 
	    		    isGood++;
	    	    }
	            else {
                    isBad++;
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
	    	}
	    	//Check if numbers are present in the password
	    	else if (!isNaN(password.charAt(current))) { 
	    		isGood++;
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

      // JD: General note---triple-equals is preferred in JavaScript
      //     (you can look it up to see why).  Further, += 1 or -= 1
      //     are preferred over ++ and --.
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
	  //Removes the default code-red class if there is no password string.
	  	if (password.length == 0) {
	        $(this).children().removeClass("code-red");
	    }


	});
})