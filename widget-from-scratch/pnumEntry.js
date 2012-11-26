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

//When the page is loaded, it registers which key the user presses
document.onkeydown = function (event) {
    keyIdentify(event);
};

function keyIdentify(event) {
    var code;
    if (!event) var event = window.event;
    //Accomidate for all browsers' key recognition
    if (event.keyCode) code = event.keyCode;
    else if (event.which) code = event.which;
    else if (event.charCode) code = event.charCode;
    //Checks to see which key was pressed and runs the appropriate function.
    switch(code) {
        case 48:
            B0();
            break;
        case 49:
            B1();
            break;
        case 50:
            B2();
            break;
        case 51:
            B3();
            break;
        case 52:
            B4();
            break;
        case 53:
            B5();
            break;
        case 54:
            B6();
            break;
        case 55:
            B7();
            break;
        case 56:
            B8()
            break;
        case 57:
            B9()
            break;
        case 106:
            Star();
            break;
        case 8:
            newNum();
            break;
    }

 //   var character = String.fromCharCode(code);
 //   alert('Character was ' + character);
}

document.getElementById("b0").onclick = function () {
    B0();
};
document.getElementById("b1").onclick = function () {
    B1();
};
document.getElementById("b2").onclick = function () {
    B2();
};
document.getElementById("b3").onclick = function () {
    B3();
};
document.getElementById("b4").onclick = function () {
    B4();
};
document.getElementById("b5").onclick = function () {
    B5();
};
document.getElementById("b6").onclick = function () {
    B6();
};
document.getElementById("b7").onclick = function () {
    B7();
};
document.getElementById("b8").onclick = function () {
    B8();
};
document.getElementById("b9").onclick = function () {
    B9();
};
document.getElementById("star").onclick = function () {
    Star();
};
document.getElementById("pound").onclick = function () {
    Pound();
};

document.getElementById("newNum").onclick = function () {
	newNum();
};

function B0() {
	numstring=numstring.concat("0");
    display();
}
function B1() {
	numstring=numstring.concat("1");
    display();
}
function B2() {
	numstring=numstring.concat("2");
    display();
}
function B3() {
	numstring=numstring.concat("3");
    display();
}
function B4() {
	numstring=numstring.concat("4");
    display();
}
function B5() {
	numstring=numstring.concat("5");
    display();
}
function B6() {
	numstring=numstring.concat("6");
    display();
}
function B7() {
	numstring=numstring.concat("7");
    display();
}
function B8() {
	numstring=numstring.concat("8");
    display();
}
function B9() {
	numstring=numstring.concat("9");
    display();
}
function Star() {
	numstring=numstring.concat("*");
    display();
}

function Pound() {
	numstring=numstring.concat("#");
    display();
}

function newNum() {
    count=-1;
    numstring=numstring.substring(1,1);
    display()
}