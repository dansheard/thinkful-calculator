
var calculator = (function() {

	var add = document.getElementById("btnAdd"),
	subtract = document.getElementById("btnSubtract");

	add.onclick = function adding(e) {
		
		document.getElementById("errors").style.display = "none";
		e.preventDefault();
		var xVal = parseInt(document.getElementById("xValueField").value, 10),
		yVal = parseInt(document.getElementById("yValueField").value, 10),
			result, answer;

		if (isNaN(xVal) || isNaN(yVal)) {
			document.getElementById("errors").style.display = "block";
		} else {
			answer = xVal + yVal;
			result = xVal + " + " + yVal + " = " + answer;
			document.getElementById("result").innerHTML = result;
			return result
		}
	}

	subtract.onclick = function adding(e) {
		
		document.getElementById("errors").style.display = "none";
		e.preventDefault();
		var xVal = parseInt(document.getElementById("xValueField").value, 10),
		yVal = parseInt(document.getElementById("yValueField").value, 10),
			result, answer;

		if (isNaN(xVal) || isNaN(yVal)) {
			document.getElementById("errors").style.display = "block";
		} else {
			answer = xVal - yVal;
			result = xVal + " - " + yVal + " = " + answer;
			document.getElementById("result").innerHTML = result;
			return result
		}
	}


	return { 

		init : function() {
			
		}

	};

}());

calculator.init();