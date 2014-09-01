var calculator = (function (){

	var $form, 
			errors = [],
			validateElems = [],
			operator,
			xNumber = $("#xValueField"),
			yNumber = $("#yValueField");		

	var validateNumber = function() {
		$('.error').css("display", "none");
		$('input').removeClass("error-field");
		errors = [];

		validateElems = [xNumber, yNumber];

		$.each(validateElems, function(key, value) {

			if(isNaN(validateElems[key].val()) || validateElems[key].val() === "" ) {
				$(validateElems[key].addClass("error-field"));

				$(validateElems[key]).siblings(".error").css("display", "block");
				errors.push(validateElems[key]);
			} 
    });
	}

	var addValues = function(e) {
		e.preventDefault();
		validateNumber();
		operator = "+"
		var total = 0;

		if (errors.length === 0) {
			answer = parseInt(validateElems[0].val()) + parseInt(validateElems[1].val());
			result = validateElems[0].val() + " " + operator + " " + validateElems[1].val() + " " + " = " + answer;
			showResult(result);
		}
	}

		var subtractValues = function(e) {
		e.preventDefault();
		validateNumber();

		if (errors.length === 0) {
			answer = parseInt(validateElems[0].val()) - parseInt(validateElems[1].val());
			result = validateElems[0].val() + " " + operator + " " + validateElems[1].val() + " " + " = " + answer;
			showResult(result);
		}
	}

	var showResult = function(result) {
		if (errors.length === 0) {
			$('#result').html(result);
		} 
	}

	var setUpListeners = function() {
		$("#btnAdd").click(addValues);
		$("#btnSubtract").click(subtractValues);
	};
	
	return {
		init: function(form) {
			$form = form;
			setUpListeners();
		}
	}

})();

calculator.init($("#calulatorForm"));




