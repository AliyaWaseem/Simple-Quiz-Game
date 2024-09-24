var quizQuestions = [
  {
    question: "What is the correct syntax to declare a variable in JavaScript?",
    choices: ["var myVar;", "variable myVar;", "v myVar;", "myVar;"],
    correctAnswer: 0
  },
  {
    question: "Which method is used to convert a string to lowercase in JavaScript?",
    choices: [".toLower()", ".lower()", ".toLowerCase()", ".caseLower()"],
    correctAnswer: 2
  },
  {
    question: "How do you write a comment in JavaScript?",
    choices: ["<!-- Comment -->", "// Comment", "' Comment", "( Comment )"],
    correctAnswer: 1
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    choices: ["Number", "String", "Boolean", "Character"],
    correctAnswer: 3
  },
  {
    question: "How do you create a function in JavaScript?",
    choices: ["function myFunc[]", "function myFunc()", "create myFunc()", "def myFunc()"],
    correctAnswer: 1
  }
];

var score = 0;
var currentQuestion = 0;

function loadQuestion() {
  var questionObj = quizQuestions[currentQuestion];
  document.getElementById("question").innerText = questionObj.question;
  document.getElementById("choice0").innerText = questionObj.choices[0];
  document.getElementById("choice1").innerText = questionObj.choices[1];
  document.getElementById("choice2").innerText = questionObj.choices[2];
  document.getElementById("choice3").innerText = questionObj.choices[3];
  document.getElementById("feedback").innerText = "";  // Clear feedback
  document.getElementById("nextBtn").style.display = "none";  // Hide the "Next Question" button
}

function selectAnswer(choice) {
  const feedback = document.getElementById("feedback");

  if (choice === quizQuestions[currentQuestion].correctAnswer) {
    score++;
    feedback.innerText = "Correct!";
    feedback.style.color = "green";
  } else {
    feedback.innerText = "Incorrect!";
    feedback.style.color = "red";
  }

  // Show the "Next Question" button to allow user to proceed
  document.getElementById("nextBtn").style.display = "inline-block";

  // Disable answer buttons after selecting an answer
  disableButtons();
}

function loadNextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    loadQuestion(); // Load the next question
    enableButtons();  // Enable the buttons for the next question
  } else {
    // Hide the quiz content and only show the final score and "Play Again" button
    showFinalResult();
  }
}

// Function to display final result after last question
function showFinalResult() {
  document.getElementById("question").style.display = "none";
  document.getElementById("choice0").style.display = "none";
  document.getElementById("choice1").style.display = "none";
  document.getElementById("choice2").style.display = "none";
  document.getElementById("choice3").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";

  document.getElementById("feedback").innerHTML = `<h2>Quiz Complete!</h2><p>Your final score is ${score}/${quizQuestions.length}.</p>`;
  document.getElementById("playAgainBtn").style.display = "inline-block";
}

// Function to restart the quiz
function restartQuiz() {
  score = 0;
  currentQuestion = 0;

  // Restore the question and choices
  document.getElementById("question").style.display = "block";
  document.getElementById("choice0").style.display = "inline-block";
  document.getElementById("choice1").style.display = "inline-block";
  document.getElementById("choice2").style.display = "inline-block";
  document.getElementById("choice3").style.display = "inline-block";
  document.getElementById("playAgainBtn").style.display = "none";  // Hide "Play Again" button

  loadQuestion();  // Load the first question again
  enableButtons(); // Enable buttons for the first question
}

// Disable the answer buttons after selecting an answer
function disableButtons() {
  for (let i = 0; i < 4; i++) {
    document.getElementById(`choice${i}`).disabled = true;
  }
}

// Enable buttons for the next question
function enableButtons() {
  for (let i = 0; i < 4; i++) {
    document.getElementById(`choice${i}`).disabled = false;
  }
}

// Initial load of the first question
loadQuestion();