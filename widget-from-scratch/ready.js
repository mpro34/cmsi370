$(document).ready(function(){
	var count = $("div").length;
	$("div").append($("<input/>", {'type' : "text"}));
	for (var i=0; i<count; i++) {
       var id = $("input:eq("+i+")").closest("div").attr("id");
       $("input:eq("+i+")").attr("id", id);
       console.log("count" + i + id);
	}
	//var id = $("div").closest("div").attr("id");
	
   /* $("div").keyup(function(){
    alert(id);
    });*/
    
	

})