
var button=document.getElementById("button");

//event handler to add a new list in the weekly goal
button.onclick = function() {
	let nameOfGoal = document.getElementById("goal").value;

	let h2=document.createElement("h2");
	
  h2.textContent=nameOfGoal;
	let ul=document.getElementById('goals');
	let li=document.createElement('li');
	ul.appendChild(li);
	li.appendChild(h2);

// button for complete and delete goal
 h2.innerHTML = `<span class='goalName'> ${nameOfGoal}</span> <button class='complete'>Complete goal</button><button class='delete'>Delete goal</button>`;

}
let ul=document.getElementById('goals');
console.log(ul);

//function to delete a goal
ul.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();

	}
});

//function to checkout a goal
ul.addEventListener('click', function (e) {
  e.preventDefault();
	if (e.target.classList.contains('complete')) {
    e.target.parentElement.style.textDecoration = "line-through";

		let headings=document.getElementsByClassName('completedGoals');
		headings.textContent="Completed Goals";
    let li = document.createElement("li");
		let ul=document.getElementById('completedGoals');
		//button to delete a completed goal
    li.innerHTML = `<span class='completedGoals'>${e.target.previousElementSibling.textContent}</span> <button class='deleteCompleted'> DeleteCompletedGoal </button>`;
    ul.appendChild(li);
  }
});
