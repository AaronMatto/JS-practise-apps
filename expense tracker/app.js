//cache the DOM

//user budget
	let budgetDiv = document.getElementsByClassName('budget-div');
	let userBudgetForm = document.forms['user-budget-form'];
	let userBudgetAmount = userBudgetForm.querySelector('input[type="text"]');
	let budgetDisplay = document.getElementById('budget-span');
	let remainingBudget = document.getElementById('budget-remaining');

//Expense tracking table
	let expenseTable_Div = document.getElementsByClassName('table-div');
	let expenseTable_Body = document.getElementById('expense-tbody');
	
//User adding expense table
	let userTable_Div = document.querySelector('.user-table-div');
	let userTable_AddBtn = document.getElementById('user-table-submit');
	let userTable_Form = document.forms['user-table-form'];
	let userTableDate = userTable_Form.querySelector('.user-tbody #user-date');
	let userTableExpense = userTable_Form.querySelector('.user-tbody #user-expense');
	let userTableCost = userTable_Form.querySelector('.user-tbody #user-cost');


//user submitting budget
	userBudgetForm.addEventListener("submit", function(e){
		e.preventDefault();

		if (userBudgetAmount.value != "" && isNaN(userBudgetAmount.value) == false && budgetDisplay.textContent == "Budget Total: £ ") {
			budgetDisplay.textContent += userBudgetAmount.value;
		} else {
		alert("Please input a valid value for your budget or delete the current value to enter a new one");
		}
	});


//user deleting budget
	budgetDiv[0].addEventListener("click", function(e){
		
			if (e.target.id == "budget-delete"){
				budgetDisplay.textContent =  "Budget Total: £ "
				remainingBudget.textContent = " Remaining Balance: £ "
				userBudgetAmount.value = "";
			}
	});


//User Table functionality to add costs
	
	userTable_Form.addEventListener('submit', function(e) {
		e.preventDefault();
	 	if (userTableDate.value != "" && userTableExpense != "" && userTableCost != "" && budgetDisplay.textContent != "Budget Total: £ ") {

	 		let newRow = document.createElement("tr");
	 		newRow.classList.add("tbody-row-data");

	 		//user added date 
	 		const newDate = document.createElement("td");
	 		newDate.textContent = userTableDate.value;

	 		//user added expense name
	 		const newExpense = document.createElement("td");
	 		newExpense.textContent = userTableExpense.value;

	 		//user added expense cost
	 		const newCost = document.createElement("td");
	 		newCost.textContent = userTableCost.value

	 		//new checkbox for new user entries in expense table
	 		const newCheckBoxDataCell = document.createElement("td");
	 		const newCheckBox = document.createElement("input");
	 		newCheckBox.setAttribute("type","checkbox");
	 		newCheckBox.checked = false;
	 		newCheckBox.classList.add("check-box")
	 		newCheckBoxDataCell.appendChild(newCheckBox);

	 		//new delete btn for new user entries in expense table
	 		const newDelete = document.createElement("td");
	 		newDelete.textContent = "Delete";
	 		newDelete.classList.add("table-delete");

	 		//remaining budget in expense 
	 		const totalCost = document.createElement("td");
	 		totalCost.textContent = "";

		 		//appending to expense table
			newRow.appendChild(newDate);
	 		newRow.appendChild(newExpense);
	 		newRow.appendChild(newCost);
	 		newRow.appendChild(newCheckBoxDataCell);
	 		newRow.appendChild(newDelete);
	 		if(expenseTable_Body.innerHTML == ""){
	 			newRow.appendChild(totalCost)
	 		};
	 		expenseTable_Body.appendChild(newRow);
		} else {
			alert("Please Complete Each Field or Submit A Budget Total");
		};
	});


			
//adding functionality to allow total remaining/total costs to dynamically change if user clicks "paid"/"delete" in expense table

//user functionality for "paid" checkboxes
function cboxLoop(arr) {
		let x = 0;
		for (i=0; i < arr.length; i++) {
			if (arr[i].checked == true){
				x += Number(arr[i].parentElement.previousElementSibling.firstChild.textContent);
			}; 
		};
	return x;
};	


function dynamicBudget(BTotal, cost){
			if ((BTotal - cost) < 0) {
			alert("The Remaining Budget cannot cover that cost ☹️")
			} else {
			let remaining = BTotal - cost;
			return remaining }
};


expenseTable_Div[0].addEventListener("change", function(e){

	let checkBoxes = document.getElementsByClassName("check-box");		
	let cBoxDataCell = checkBoxes[0].parentElement;
	let costTotal = cboxLoop(checkBoxes)
	remainingBudget.textContent = "Remaining: £ " + dynamicBudget(userBudgetAmount.value, costTotal);
	cBoxDataCell.parentElement.children[5].textContent = costTotal;
});


//delete functionality

expenseTable_Div[0].addEventListener("click", function(e){
	if (e.target.className == "table-delete"){
		let deleteBtnRow = e.target.parentElement;
		deleteBtnRow.remove();
		
		let expenseTable_Data = document.getElementsByClassName('tbody-row-data');
		let abc = Array.from(expenseTable_Data);
		function expenseLoop(arr) {
			for (i=0; i < arr.length; i++) {
				if (arr[i] == expenseTable_Body.firstElementChild && arr[i].childElementCount < 6){	
					const totalCost = document.createElement("td");	
					arr[i].appendChild(totalCost);
					let checkBoxes = document.getElementsByClassName("check-box");
	 				totalCost.textContent = cboxLoop(checkBoxes);
				};
			};
		};
		expenseLoop(abc);
		let checkBoxes = document.getElementsByClassName("check-box")
		expenseTable_Body.children[0].children[5].textContent = cboxLoop(checkBoxes);
		remainingBudget.textContent = "Remaining: £ " + dynamicBudget(userBudgetAmount.value, cboxLoop(checkBoxes));
	};
});



