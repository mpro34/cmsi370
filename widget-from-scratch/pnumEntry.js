var numarray = "";
var count = 0;
var display = function () {
	count++;
  //  console.log(count);
	/*Add hyphen between numbers automatically*/
    if (count==3) {
        numarray=numarray.concat("-");
    }
	if (count==7) {
		numarray=numarray.concat("-");
	}
	/*Erase current phone number and start new one
	if (count==11) {
		count=0;
		numstring=numarray.toString();
		numarray=numstring.replace(/,/g,"");
		/*numarray.splice(0,11);
	}
            */
    document.getElementById("result").innerHTML = numarray;
};

/*document.getElementById("newNum").onclick = function () {
    numarray=numstring.split(" ");
    numarray.splice(0,11);
    display()
};*/

document.getElementById("b1").onclick = function () {
    numarray=numarray.concat("1");
    display();
};

document.getElementById("b2").onclick = function () {
    numarray=numarray.concat("2");
    display();
};

document.getElementById("b3").onclick = function () {
    numarray=numarray.concat("3");
    display();
};

document.getElementById("b4").onclick = function () {
    numarray=numarray.concat("4");
    display();
};

document.getElementById("b5").onclick = function () {
    numarray=numarray.concat("5");
    display();
};

document.getElementById("b6").onclick = function () {
    numarray=numarray.concat("6");
    display();
};

document.getElementById("b7").onclick = function () {
    numarray=numarray.concat("7");
    display();
};

document.getElementById("b8").onclick = function () {
    numarray=numarray.concat("8");
    display();
};

document.getElementById("b9").onclick = function () {
    numarray=numarray.concat("9");
    display();
};

document.getElementById("b0").onclick = function () {
    numarray=numarray.concat("0");
    display();
};

document.getElementById("star").onclick = function () {
    numarray=numarray.concat("*");
    display();
};

document.getElementById("pound").onclick = function () {
    numarray=numarray.concat("#");
    display();
};

