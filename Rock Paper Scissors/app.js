//cache the DOM

	//game choices
	let user_choices_Div = document.querySelector('.app-container .user-choices-div');
	let rock_div = user_choices_Div.querySelector('#rock-div');
	let paper_div = user_choices_Div.querySelector('#paper-div');
	let scissors_div = user_choices_Div.querySelector('#scissors-div');
	let user_choices = Array.from(user_choices_Div.querySelectorAll('.user-choice'));

	//result message
	let result_Message_Div = document.getElementById('result-message');
	
	//scores
	let user_score_span = document.querySelector('.app-container #scoreboard #user-score');
	let comp_score_span = document.querySelector('.app-container #scoreboard #comp-score');

// game functions

user_choices_Div.addEventListener('click', function(e){   //using event bubbling

		//computer choice for rock, paper, or scissors
		let compChoiceArray = ["r","p","s"];
		let x = Math.floor(Math.random() * 3)
		let compChoice = compChoiceArray[x];

		//user choice for rock, paper or scissors
		let userChoice = "";
		if (e.target.classList.contains("rock")) {
			userChoice = "r"
		} else if (e.target.classList.contains("paper")) {
			userChoice = "p"
		} else if (e.target.classList.contains("scissors")) {
			userChoice = "s"
		};
		console.log(userChoice);

		//game function
		if (e.target.classList.contains("user-choice")){

			function rockPaperScissors(userPick, compPick){
				let gamechoice = userPick + compPick
				switch(gamechoice) {
					case "rr":
					case "pp":
					case "ss": 
								return draw(gamechoice)
								break;

					case "rs": 
					case "pr":
					case "sp":
								return win(gamechoice);
								break;

					case "rp":
					case "ps":
					case "sr":
								return loss(gamechoice)
								break;
				};

			};
			rockPaperScissors(userChoice, compChoice);
		};

		//user win
		function win(gameOutcome){
			user_score_span.innerText++;
			result_Message_Div.innerHTML = `${convertToText(userChoice)}<sub class = "subtag" style="color: rgb(0, 227, 23)">(User)</sub> beats ${convertToText(compChoice)}<sub class = "subtag" style="color: rgb(255, 32, 32)">(CPU)</sub>. You win! 🔥 `;
			e.target.classList.add("win");
			setTimeout(function() { e.target.classList.remove("win"); }, 800);
		};

		//Draw
		function draw(gameOutcome){
			user_score_span.innerText++;
			comp_score_span.innerText++;
			result_Message_Div.innerHTML = `${convertToText(userChoice)}<sub class = "subtag" style="color: rgb(0, 227, 23)">(User)</sub> draws ${convertToText(compChoice)}<sub class = "subtag" style="color: rgb(255, 32, 32)">(CPU)</sub>. It's a tie! 🤨 `;	
			e.target.classList.add("draw");
			setTimeout(function() { e.target.classList.remove("draw"); }, 800);
		};

		//loss
		function loss(gameOutcome){
			comp_score_span.innerText++;
			result_Message_Div.innerHTML = `${convertToText(userChoice)}<sub class = "subtag" style="color: rgb(0, 227, 23)">(User)</sub> loses to ${convertToText(compChoice)}<sub class = "subtag" style="color: rgb(255, 32, 32)">(CPU)</sub>. You Lose! ☠️`;
			e.target.classList.add("lose");
			setTimeout(function() { e.target.classList.remove("lose"); }, 800);	
		};
});

// convert userchoice to text
function convertToText(letter){
	if (letter === "r"){
		return "Rock";
	} else if (letter === "p"){
		return "Paper";
	} else {
		return "Scissors";
	};
};










