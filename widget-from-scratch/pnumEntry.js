var numarray = new Array();
var count = 0;
var display = function () {
	count++;
    console.log(count);
	/*Add hyphen between numbers automatically*/
    if (count==3) {
        numarray[count] = "-";
    }
	if (count==7) {
		numarray[count] = "-";
	}
	/*Erase current phone number and start new one*/
	if (count==11) {
		count=0;
		numstring=numarray.toString();
		numarray=numstring.replace(/,/g,"");
		/*numarray.splice(0,11);*/
	}

    document.getElementById("result").innerHTML = numarray;
};

document.getElementById("newNum").onclick = function () {
    numarray=numstring.split(" ");
    numarray.splice(0,11);
    display()
};

document.getElementById("b1").onclick = function () {
    numarray.push("1");
    display();
};

document.getElementById("b2").onclick = function () {
    numarray.push("2");
    display();
};

document.getElementById("b3").onclick = function () {
    numarray.push("3");
    display();
};

document.getElementById("b4").onclick = function () {
    numarray.push("4");
    display();
};

document.getElementById("b5").onclick = function () {
    numarray.push("5");
    display();
};

document.getElementById("b6").onclick = function () {
    numarray.push("6");
    display();
};

document.getElementById("b7").onclick = function () {
    numarray.push("7");
    display();
};

document.getElementById("b8").onclick = function () {
    numarray.push("8");
    display();
};

document.getElementById("b9").onclick = function () {
    numarray.push("9");
    display();
};

document.getElementById("b0").onclick = function () {
    numarray.push("0");
    display();
};

document.getElementById("star").onclick = function () {
    numarray.push("*");
    display();
};

document.getElementById("pound").onclick = function () {
    numarray.push("#");
    display();
};

