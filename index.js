
var readQuestion = require("readline-sync")


var score = 0;

var userName = readQuestion.question("What is your Name ? : ")
var checkAnswer = function(questionArray) 
{
  for (var i = 0; i < questionArray.length; i++) {

    var askUser = readQuestion.question(questionArray[i].question);
    var userAnswer = questionArray[i].answer;
    if (askUser.toUpperCase() == userAnswer.toUpperCase()) {
      score = score + 1;
    }
    else
      continue;


  }

  // Giving output to the system

  console.log("---------------------------")
  console.log(userName + " you have scored : " + score + " points !")
  console.log("---------------------------")

}



//List of question and Answers -----------------------------
var questions = [{
  question: "Whats my birth date (date month) ? ",
  answer: "15 july"
}, {
  question: "How many states have I travelled ? ",
  answer: "5"
}, {
  question: "Whats my favourite color ? ",
  answer: "Blue"
}, {
  question: "Do I like cricket ? ",
  answer: "no"
}, {
  question: "Which K-DRAMA I watched for first time ?",
  answer: "my love from another star"
}
  , {
  question: "What wing I support Left, Right or Centre ? ",
  answer: "Centre"
}]
// -----------------------------------------------------------
checkAnswer(questions)

