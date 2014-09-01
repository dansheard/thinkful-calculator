
var calculator = (function() {

	var add = document.getElementById("btnAdd"),
	subtract = document.getElementById("btnSubtract"),
	elemArray = [],
	result,
	answer,
	operator;

	add.onclick = function adding(e) {		
		var xVal = parseInt(document.getElementById("xValueField").value, 10),
		yVal = parseInt(document.getElementById("yValueField").value, 10),
		operator = '+';

		e.preventDefault();
		validateInput(elemArray);

		answer = xVal + yVal;
		result = xVal + ' ' + operator + ' ' + yVal + ' ' + " = " + ' ' + answer;
		document.getElementById("result").innerHTML = result;
	}

	subtract.onclick = function subtracting(e) {
		var xVal = parseInt(document.getElementById("xValueField").value, 10),
		yVal = parseInt(document.getElementById("yValueField").value, 10),
		operator = '-';

		e.preventDefault();
		validateInput(elemArray);

		answer = xVal - yVal;
		result = xVal + ' ' + operator + ' ' + yVal + ' ' + " = " + ' ' + answer;
		document.getElementById("result").innerHTML = result;
	}


	var validateInput = function validateInput(validateArray) {
		for (var i = 0; i < validateArray.length; i++) {

			validateArray[i].style.border = "1px solid black";
			document.getElementById("errors").style.display = "none";

			if (isNaN(validateArray[i].value) || validateArray[i].value === "") {
				document.getElementById("errors").style.display = "block";
				validateArray[i].style.border = "1px solid red";
			}

		}
	}


	var setUpForm = function setUpForm(form) {
		var elem = form.elements;

		for ( var i = 0;i < elem.length; i++ ) {
			if (elem[i].getAttribute('data-validation')) {
				elemArray.push(elem[i]);
			}
		}
		return elemArray;
	};

	return { 

		init : function(form) {
			setUpForm(form);
		}

	};

}());

calculator.init(document.getElementById("calulatorForm"));