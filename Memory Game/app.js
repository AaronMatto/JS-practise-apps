//CACHE THE DOM
	let cardContainer = document.querySelector('.card-container');
	let score = document.getElementById("Score");
	let round = document.getElementById("Round");
	let doomCard = document.getElementsByClassName("DOOM");
	let atcqCard = document.getElementsByClassName("atcq");
	let aliCard = document.getElementsByClassName("ALI");
	let kanyeCard = document.getElementsByClassName("MBDTF");
	let overlays = document.getElementsByClassName("overlay");
	let cards = Array.from(document.getElementsByClassName("grid-item"));
	let title = document.getElementById("title");
	let clickscounted = document.getElementById("clickscounted");
	

//randomise pictures on each card for each game. One round = flipping two cards.

function randomiseArrayOrder(arr) {
	for (var i=0; i<arr.length; i++) {
		let randomNum = Math.floor(Math.random()* arr.length)
		let tempCard = "";
		let currentCard = arr[i].querySelector(".pictures");
		let randomCard = arr[randomNum].querySelector(".pictures");
		//swap
		tempCard = currentCard;
		arr[i].appendChild(randomCard);
		arr[randomNum].appendChild(tempCard);
	};
	return arr
};
randomiseArrayOrder(cards);


//click a card to reveal a picture
let choiceArray = [];
let userChoice1 = 0;

	cardContainer.addEventListener('click', function(e) {
		
		//setting the card the user has chosen
		if (e.target.nextElementSibling.classList.contains("DOOM")) {
			 userChoice1 = "Doom"
		} else if (e.target.nextElementSibling.classList.contains("MBDTF")) {
			 userChoice1 = "Kanye"
		} else if (e.target.nextElementSibling.classList.contains("ALI")) {
			 userChoice1 = "Ali"
		} else if (e.target.nextElementSibling.classList.contains("atcq")) {
			 userChoice1 = "Atcq"
		};

		//pushing the card the user has chosen into an array
		if (e.target.classList.contains("overlay")){
			choiceArray.push(userChoice1);
		}; 

		//making sure the array of cards chosen by user is always 2 cards
		if (choiceArray.length > 2){
		choiceArray.shift();
		}

		//removing the overlay temporarily when user clicks a card
		let showCard
		if (e.target.className == "overlay") {

			e.target.classList.remove("overlay");
			
			 showCard = setTimeout(function (){
				
				e.target.classList.add("overlay");

			}, 200);	

			clickscounted.textContent++			
			
		};

		//checking if the two cards chosen by the user in the array match. If they do, the overlay will not re-appear over them.
		function checkMatch(arr) {
			if (arr[0] == arr[1]) {
				clearTimeout(showCard)
			}; 
		};
		
		if (choiceArray.length == 2){
			checkMatch(choiceArray)
		};


	
		console.log(choiceArray);
	
		

		


	});




function add(a, b) {
  console.log(a + b);
}

let result = add(1,2);
console.log(result);

