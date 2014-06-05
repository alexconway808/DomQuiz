(function(){

var newscore = 0;
var count = 0;
var question = document.getElementById("question");
var answer = document.getElementById("answer"); // input box text for answer

var questionaire = [
	"What is the first spot on the North Shore?",
	"What is the second spot on the North Shore?",
	"What is the third spot on the North Shore?",
	"What is the fourth spot on the North Shore?",
	"What is the fifth spot on the North Shore?"
];

var correctAnswer = [
	"Haleiwa",
	"Laniakea",
	"Waiamea",
	"Pipeline",
	"Sunset"
	];

var i = 0; 

question.innerHTML = questionaire[i];

submit.onclick = function() {

	if(answer.value == correctAnswer[i]){
		answer.value = null;  //clear the text box after answer
		newscore++;
		i++;
		question.innerHTML = questionaire[i];
	}

	if(i > correctAnswer.length - 1 ){  //count the number of correct answers
		console.log("Shoots, you got " + newscore + " out of " + correctAnswer.length);  
		//print the number of correct to the console
		question.innerHTML = "Shoots, you got " + newscore + " out of " + correctAnswer.length;  
		//display in DOM how many the player got correct
	}
}
})();
