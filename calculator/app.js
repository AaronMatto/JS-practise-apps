//cache the DOM

	//numbers
	const numbers = document.querySelectorAll('.calculator-container, .number');

	//operations
	const sign = document.getElementById('sign');
	const divide = document.getElementById('divide');
	const times = document.getElementById('times');
	const minus = document.getElementById('minus');
	const plus = document.getElementById('plus');
	const decimal = document.getElementById('decimal');
	const equals = document.getElementById('equals');

	//Calculator features
	const inputOne = document.getElementById('inputOne');
	const inputTwo = document.getElementById('inputTwo');
	const userOperation = document.getElementById('operation');
	const clear = document.getElementById('clear');
	const result = document.getElementById('result');


//numbers on screen 
	let gg = Array.from(numbers);

	gg.forEach(function (btn) {

	btn.addEventListener('click',function(e) {

		if (e.target == btn && userOperation.innerText == "" && result.innerText == ""){
			inputOne.innerText += btn.innerText
			} else if (e.target == btn && userOperation.innerText != "") {
				inputTwo.innerText += btn.innerText
			} else if (e.target == btn && userOperation.innerText == "" && result.innerText != "") {
				result.innerText += btn.innerText
			}
	});
});


//clear button
	clear.addEventListener('click',function(e) {

		if (e.target == clear) {
			inputOne.innerText = ""; 
			inputTwo.innerText = "";
			userOperation.innerText = "";
			result.innerText = "";

		}

	});


//putting operation symbols on screen

	//plus

	plus.addEventListener('click',function (e) {

	if (e.target == plus) {
		userOperation.innerText = '+'
	}
	});

	//divide
	divide.addEventListener('click',function (e) {

	if (e.target == divide) {
		userOperation.innerText = '÷'
	}
	});

	//multiply
	times.addEventListener('click',function (e) {

	if (e.target == times) {
		userOperation.innerText = '*'
	}
	});

	//minus
	minus.addEventListener('click',function (e) {

	if (e.target == minus) {
		userOperation.innerText = '-'

	}
	});

	//decimal numbers
	decimal.addEventListener('click',function (e) {

	if (e.target == decimal && inputOne.innerText != "" && inputTwo.innerText == "") {
		inputOne.innerText += '.'
		} else if (e.target == decimal && inputTwo.innerText != "") {
		inputTwo.innerText += '.'	
		} else if (e.target == decimal && result.innerText != "" && inputTwo.innerText == "") {
			result.innerText += '.'
		};
	});


//calculations & sign change for input

	function multiply (numOne, numTwo) {
		let answer = Number(numOne.innerText) * Number(numTwo.innerText)
		if (result.innerText == "") {
		result.innerText = answer;
		inputOne.innerText = "";
		inputTwo.innerText = "";
		userOperation.innerText = "";
		} else if (inputOne.innerText == "") {
		result.innerText = "";
		inputOne.innerText = answer;
		inputTwo.innerText = "";
		userOperation.innerText = "";
		}
	};	


	function division (numOne, numTwo) {
		let answer = Number(numOne.innerText) / Number(numTwo.innerText)
		if (result.innerText == "") {
		result.innerText = answer;
		inputOne.innerText = "";
		inputTwo.innerText = "";
		userOperation.innerText = "";
		} else if (inputOne.innerText == "") {
		result.innerText = "";
		inputOne.innerText = answer;
		inputTwo.innerText = "";
		userOperation.innerText = "";
		}
	};	
	
	function subtraction (numOne, numTwo) {
		let answer = Number(numOne.innerText) - Number(numTwo.innerText)
		if (result.innerText == "") {
		result.innerText = answer;
		inputOne.innerText = "";
		inputTwo.innerText = "";
		userOperation.innerText = "";
		} else if (inputOne.innerText == "") {
		result.innerText = "";
		inputOne.innerText = answer;
		inputTwo.innerText = "";
		userOperation.innerText = "";
		}
	};	

	function addition (numOne, numTwo) {
		let answer = Number(numOne.innerText) + Number(numTwo.innerText)
		if (result.innerText == "") {
		result.innerText = answer;
		inputOne.innerText = "";
		inputTwo.innerText = "";
		userOperation.innerText = "";
		} else if (inputOne.innerText == "") {
		result.innerText = "";
		inputOne.innerText = answer;
		inputTwo.innerText = "";
		userOperation.innerText = "";
		}
	};


equals.addEventListener('click', function(e) {


	if (e.target == equals && result.innerText == ""){

		function operationName(userOperationParaneter){
								switch(userOperationParaneter.innerText){
									case "+": 
										return addition(inputOne, inputTwo);
										break;

									case "-":
										return subtraction(inputOne, inputTwo);
										break;

									case "÷":
										return division(inputOne, inputTwo);
										break;

									case "*":
										return multiply(inputOne, inputTwo);
										break;

									default:
										return "No calculation";
										break;
								};
						
		};
		operationName(userOperation) //PASSING IN THE USEROPERATION VARIABLE

	} else if (e.target == equals && inputOne.innerText == "") {

		function operationName(userOperationParaneter){
								switch(userOperationParaneter.innerText){
									case "+": 
										return addition(result, inputTwo);
										break;

									case "-": subtraction(result, inputTwo);
										
										break;

									case "÷": division(result, inputTwo);
										
										break;

									case "*": multiply(result, inputTwo);
										
										break;

									default:
										return "No calculation";
										break;
								};
		};
		operationName(userOperation)
	};

});


//sign change button +/-

sign.addEventListener('click', function(e) {

	if (e.target == sign && userOperation.innerText == "" && inputOne.innerText == "" && result.innerText == "") {
		inputOne.innerText = "-"
	} else if (e.target == sign && userOperation.innerText != "" && inputTwo.innerText == "") {
		 inputTwo.innerText = "-"
	} else if (e.target == sign && userOperation.innerText == "" && inputOne.innerText != "") {
		inputOne.innerText = Number(inputOne.innerText) * -1
	} else if (e.target == sign && userOperation.innerText != "" && inputTwo.innerText != "") {
		inputTwo.innerText = Number(inputTwo.innerText) * -1
	} else if (e.target == sign && result.innerText != "") {
		result.innerText = Number(result.innerText) * -1
	};
});

	