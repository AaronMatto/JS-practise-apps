//cache the DOM 
let titleBox = document.getElementById('titlebox');
let searchbar = document.getElementById('searchbar');

let taskList_Div = document.getElementById('task-list');

let delete_Span = document.getElementsByClassName('delete-button');

let addTaskBtn = document.getElementById('add-task-btn');
let addTaskBox = document.getElementById('add-task-box');

let hideBox1 = document.getElementById('hide-checkbox');

let li_Tasks = document.querySelectorAll('.task-name'); //span tags
	
let taskList_UL = document.querySelector('.app-container #task-list ul');
let userForm = document.forms['userForm'];
let bottomPanel = document.querySelector('.bottom-panel');



//Delete button using Event bubbling
	taskList_UL.addEventListener('click', function(e){
		if (e.target.className == "delete-button"){
			const li = e.target.parentElement
			taskList_UL.removeChild(li)
		}
});


//Add a Task
	userForm.addEventListener('submit', function(e) {
		e.preventDefault();

			const userInput = userForm.querySelector('input[type="text"]').value;
			if (userInput != ""){
			let newLi = document.createElement("li");
			const deleteBtnNew = document.createElement("span");
			const newTask = document.createElement("span");
			deleteBtnNew.classList.add('delete-button');
			deleteBtnNew.textContent = "Delete";
			newTask.classList.add('task-name')
			newTask.textContent = userInput;
			newLi.appendChild(newTask);
			newLi.appendChild(deleteBtnNew);
			taskList_UL.appendChild(newLi);
			} else if (userInput == "") {
				alert("Please enter text to add a task")
			};	
	});
	/* how does this work? how does JS know when a user presses enter on the input text field to submit the text i.e. trigger a submit event? Similarly,
		how does it know to trigger the submit event when a used clicks the add <button> in the form, given this is not stated in the code?
		Answer: the submit event fires on the <form> element itself, and not on any <button> or <input type="submit"> inside it. However, 
		the SubmitEvent which is sent to indicate the form's submit action has been triggered includes a submitter property, which is the button that 
		was invoked to trigger the submit request.
		The submit event fires when the user clicks a submit button (<button> or <input type="submit">) or presses Enter while editing a field 
		(e.g. <input type="text">) in a <form>. 
		So, the submit event is fired automatically by JS when the add <button> is clicked or enter is pressed as it is inside the <form> tag & the 
		code inside the addEventListenerFunction is executed. 
		*/


//Search For a Task

	searchbar.addEventListener('keyup', function(e) {

		const searchInput = e.target.value.toLowerCase();
		const tasks = taskList_UL.getElementsByTagName("li");

		Array.from(tasks).forEach(function (task_li) {
			const taskTitle = task_li.firstElementChild.textContent.toLowerCase();
				if (taskTitle.includes(searchInput)) {
					task_li.style.display = "block";
					} else {
						task_li.style.display = "none";
					};

				if (searchInput == "") {
					task_li.style.display = "list-item";
					};				
		});
	});

	//REVISITING 23/05/21, USE BINARY SEARCH NOT LINEAR!


//hide list button using event bubbling

	let hideBox = bottomPanel.querySelector('input[type="checkbox"]');
	hideBox.addEventListener('change', function(e){       //The onchange event occurs when the value attribute of an element has been changed. For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.
		if (hideBox.checked) {	
		taskList_Div.style.display = "none";			 //Since the .checked causes the change event which hidebox is listening for, the code is executed upon the change. The event objected is not requuired in the if statement since the event itself is given by the .checked property.
		} else {
		taskList_Div.style.display = "initial";
		}
	});

	/* it is worth noting that bottomPanel only goes as far as #userForm aka the <form> tag inside the bottom panel div. hideBox uses the query selector
	on the bottomPanel to search for an input tag with a type attribute with a value of "checkbox". It does this successfully despite the input tag 
	being inside another div tag with id "hide-box-div". This means we don't need to specifically to to the level of the input tag by specifying
	the selectors of all of its parent elements, otherwise hideBox = bottomPanel.querySelector("#hide-box-div input[type="checkbox"]').
	So, we are able to ignore selectors that are one parent above our desired tag, what about two levels?
	This works too. We currently have bottomPanel = document.querySelector('.bottom-panel') and the code still works despite #userForm being missing
	to specify we want to move to that level of the DOM tree. So, because there is only 1 input tag with type="checkbox" in the bottom div, which
	is being referenced by bottomPanel, JS is able to find the desired input tag without specifying the direct path to it via selectors.
	The same concept applies with the userInput variable for adding a task as the div tag with id add-task-box is not referenced in its pathway. We
	can effectively skip out levels of the DOM tree.

	That being said, should you always specify the specific pathway to each html element you wish to reference? Is it less efficient to specify
	selectors in the pathway that are not necessary? How many levels of the DOM tree should be skipped?
	Or is it best practise to always specify all selectors even if not needed?
	*/



function sumOfNegative(numbers) {
sum = 0;
	for (i = 0; i<numbers.length; i++) {
		if (numbers[i] < 0) {
			sum += numbers[i];
		} else {
			sum += 0;
		}
	};
	return sum;
};

console.log(sumOfNegative([-1, 4, -2, 9, 18]));



