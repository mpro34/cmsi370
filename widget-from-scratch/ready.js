$(document).ready(function(){
	var count = $("div").length;
	$("div").append($("<input/>", {'type' : "text"}));
	for (var i=0; i<count; i++) {		//Goes through each div and looks up its id.
       var id = $("input:eq("+i+")").closest("div").attr("id");
       $("input:eq("+i+")").attr("id", id);   //Takes that id and sets the id of the input tag.
	}
	//Each time the user changes the password field, the following will determine its security level.
	
	$("div").keyup(function(){
	    var password = $(this).children().attr("value");
	    alert("password: "+password);
		if (password == "a") {
		    alert("success");
	    }
	});

   /* $("div").keyup(function(){
    alert($(this).children().attr("value"));
    });*/
    
	

})