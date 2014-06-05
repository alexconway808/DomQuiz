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
	"What is the fifth spot on the North Shore?",
];

var correctAnswer = [
	"Haleiwa",
	"Laniakea",
	"Waiamea",
	"Pipeline",
	"Sunset",
	];

var i = 0; 

question.innerHTML = questionaire[i];

submit.onclick = function() {

	if(answer.value == correctAnswer[i]){
		console.log("That is correct");

	//clear the text box after answer
	answer.value = null;
		i++;
		question.innerHTML = questionaire[i];
	}
}
})();

