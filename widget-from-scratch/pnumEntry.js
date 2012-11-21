var numstring = "";
var count = 0;
var display = function () {
	count++;
  //  console.log(count);
	/*Add hyphen between numbers automatically*/
    if (count==3) {
        numstring=numstring.concat("-");
    }
	if (count==6) {
		numstring=numstring.concat("-");
	}
	/*Erase current phone number and start new one*/
    //Limit the amount of user entered numbers here, max is 10 numbers with 2 dashes.
	if (count>=11) {
        numstring=numstring;
		/*numstring.splice(0,11);*/
	}
            
    document.getElementById("result").innerHTML = numstring;
};
//Fix this function
document.getElementById("newNum").onclick = function () {
    count=-1;
    numstring=numstring.substring(1,1);
    display()
};

document.getElementById("b1").onclick = function () {
    numstring=numstring.concat("1");
    display();
};

document.getElementById("b2").onclick = function () {
    numstring=numstring.concat("2");
    display();
};

document.getElementById("b3").onclick = function () {
    numstring=numstring.concat("3");
    display();
};

document.getElementById("b4").onclick = function () {
    numstring=numstring.concat("4");
    display();
};

document.getElementById("b5").onclick = function () {
    numstring=numstring.concat("5");
    display();
};

document.getElementById("b6").onclick = function () {
    numstring=numstring.concat("6");
    display();
};

document.getElementById("b7").onclick = function () {
    numstring=numstring.concat("7");
    display();
};

document.getElementById("b8").onclick = function () {
    numstring=numstring.concat("8");
    display();
};

document.getElementById("b9").onclick = function () {
    numstring=numstring.concat("9");
    display();
};

document.getElementById("b0").onclick = function () {
    numstring=numstring.concat("0");
    display();
};

document.getElementById("star").onclick = function () {
    numstring=numstring.concat("*");
    display();
};

document.getElementById("pound").onclick = function () {
    numstring=numstring.concat("#");
    display();
};

