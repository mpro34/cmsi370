$(document).ready(function(){

	var count = $("div").length;

	$("div").append($("<input/>", {'type' : "text"}));
	for (var i=0; i<count; i++) {		//Goes through each div and looks up its id.
       var id = $("input:eq("+i+")").closest("div").attr("id");
       $("input:eq("+i+")").attr("id", id);   //Takes that id and sets the id of the input tag.
	}
	//Each time the user changes the password field, the following will determine its security level.
	var current = 0;
	var isBad = 0;
    var isGood = 0;
    var isGreat = 0;
	$("div").keyup(function(){
		//If isGood or isGreat is greater than 1, then that property applies to the current pw.
     
        
	    var password = $(this).children().attr("value");
	    //Check if capital letters and numbers are present in the password
	    	if ((/[A-Z]/.test(password.charAt(current)))) {
	    		isGreat++;
	    	//	alert("great");
	    	}
	    	//Check if numbers are present in the password
	    	else if (!isNaN(password.charAt(current))) { 
	    	//	alert("good");
	    		isGood++;
	    	}
	    	else {
                isBad++;
            //    alert("bad");
	    	}
	   // alert("here:" + (password.charAt(current)));
	    current++;        //Update the current pw character value
	   
	    //alert("password: "+password);
	   // for (var i=0; i<password.length; i++) {

	    	//alert(password.charAt(i+current));
	    	//current++;
	   // }

	/*    var intRegex = /^\d+$/;
        var floatRegex = /^((\d+(\.\d *)?)|((\d*\.)?\d+))$/;

       // var str = $('#myTextBox').val();
        if(intRegex.test(password) || floatRegex.test(password)) {
            alert('I am a number');
        }*/
      //Check if the password is code-green (great password)
	  //lowercase letters, numbers, and uppercase letters
	  $(this).children().removeClass("code-green").removeClass("code-yellow").removeClass("code-red");
	    if (isGreat > 0 && isGood > 0 && isBad > 0) {
		    $(this).children().addClass("code-green");
	    }

	  //Check if the password is code-yellow (good password)
	  //lowercase letters and numbers
        else if (isGreat == 0  && isGood > 0 && isBad > 0) {
		    $(this).children().addClass("code-yellow");
	    }

	  //Check if the password is code-red (bad password)
	  //Only lowercase letters
		else {
		    $(this).children().addClass("code-red");
	    }
	  	//alert("1: "+isGreat+" 2: "+isGood+" 3: "+isBad);


	});
})