$(document).ready(function(){

	var count = $("div").length;

	$("div").append($("<input/>", {'type' : "text"}));
	for (var i=0; i<count; i++) {		//Goes through each div and looks up its id.
       var id = $("input:eq("+i+")").closest("div").attr("id");
       $("input:eq("+i+")").attr("id", id);   //Takes that id and sets the id of the input tag.
	}
	//Each time the user changes the password field, the following will determine its security level.
	
	$("div").keyup(function(){
        var isBad = false;
        var isGood = false;
        var isGreat = false;
	    var password = $(this).children().attr("value");

	    //alert("password: "+password);
	    for (var i=0; i<password.length; i++) {
	        //Check if capital letters and numbers are present in the password
	    	if ((/[A-Z]/.test(password.charAt(i)))) {
	    		isGreat = true;
	    	}
	    	//Check if numbers are present in the password
	    	if (!isNaN(password.charAt(i))) { 
	    		isGood = true;
	    	}


	    }
	    if (!isGood && !isGreat) {
	    	isBad = true;
	    }

	/*    var intRegex = /^\d+$/;
        var floatRegex = /^((\d+(\.\d *)?)|((\d*\.)?\d+))$/;

       // var str = $('#myTextBox').val();
        if(intRegex.test(password) || floatRegex.test(password)) {
            alert('I am a number');
        }*/


	  //Check if the password is code-red (bad password)
	  //Only lowercase letters

		if (isBad) {
		    $(this).children().addClass("code-red");
	    }
	    else {

	    }
	  //Check if the password is code-yellow (good password)
	  //lowercase letters and numbers
        if (isGood) {
		    $(this).children().addClass("code-yellow");
	    }

	  //Check if the password is code-green (great password)
	  //lowercase letters, numbers, and uppercase letters
	    if (isGreat) {
		    $(this).children().addClass("code-green");
	    }
	});
})