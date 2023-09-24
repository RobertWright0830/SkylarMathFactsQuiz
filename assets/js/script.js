//add readme

//DOM element references
var startButton = document.getElementById("start_button");
var startScreenEl = document.getElementById("start_screen");
var startQuizEl = document.getElementById("start_quiz");
var answerButtons = document.querySelectorAll(".answer_btn");
var result = document.querySelector(".answer_results");
var resultEl = document.getElementById("startAnswerResults");
var countdownEl = document.getElementById("countdown");
var finalScoreScreenEl = document.getElementById("finalScore");
var submitButton = document.getElementById("submit-score");
var highscoresEl = document.getElementById("highscores");
var showScoreEl = document.getElementById("score");
var goBackButtonEl = document.getElementById("go_to_start_button");
var clearHighScoresButtonEl = document.getElementById("clear_highscores_button");
var gameoverEl = document.getElementById("gameover-msg");
var highScoresListEl = document.getElementById("highScoresList");

// Initialize variables
var currentQuestion = 0;
var score = 0;
var timeLeft = 60;
var highScores = [];
var countdownInterval;

// Array of quiz questions and answers
var questionsArray = [
  {
    question: "1 + 1 = ",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "0", correct: false },
      { text: "11", correct: false },
    ],
  },
  {
    question: "1 + 2 = ",
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "1 + 3 = ",
    answers: [
      { text: "5", correct: false },
      { text: "4", correct: true },
      { text: "2", correct: false },
      { text: "13", correct: false },
    ],
  },
  {
    question: "1 + 4 = ",
    answers: [
      { text: "3", correct: false },
      { text: "5", correct: true },
      { text: "4", correct: false },
      { text: "14", correct: false },
    ],
  },
  {
    question: "1 + 5 = ",
    answers: [
      { text: "7", correct: false },
      { text: "6", correct: true },
      { text: "5", correct: false },
      { text: "15", correct: false },
    ],
  },
  {
    question: "1 + 6 = ",
    answers: [
      { text: "5", correct: false },
      { text: "7", correct: true },
      { text: "6", correct: false },
      { text: "16", correct: false },
    ],
  },
  {
    question: "1 + 7 = ",
    answers: [
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "6", correct: false },
      { text: "17", correct: false },
    ],
  },
  {
    question: "1 + 8 = ",
    answers: [
      { text: "8", correct: false },
      { text: "9", correct: true },
      { text: "10", correct: false },
      { text: "18", correct: false },
    ],
  },
  {
    question: "1 + 9 = ",
    answers: [
      { text: "11", correct: false },
      { text: "10", correct: true },
      { text: "9", correct: false },
      { text: "19", correct: false },
    ],
  },
  {
    question: "1 + 0 = ",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "2 + 0 = ",
    answers: [
      { text: "0", correct: false },
      { text: "2", correct: true },
      { text: "4", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: "2 + 1 = ",
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "1", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "2 + 2 = ",
    answers: [
      { text: "0", correct: false },
      { text: "4", correct: true },
      { text: "3", correct: false },
      { text: "22", correct: false },
    ],
  },
  {
    question: "2 + 3 = ",
    answers: [
      { text: "1", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "23", correct: false },
    ],
  },
  {
    question: "2 + 4 = ",
    answers: [
      { text: "8", correct: false },
      { text: "6", correct: true },
      { text: "4", correct: false },
      { text: "24", correct: false },
    ],
  },
  {
    question: "2 + 5 = ",
    answers: [
      { text: "3", correct: false },
      { text: "7", correct: true },
      { text: "10", correct: false },
      { text: "25", correct: false },
    ],
  },
  {
    question: "2 + 6 = ",
    answers: [
      { text: "4", correct: false },
      { text: "8", correct: true },
      { text: "7", correct: false },
      { text: "26", correct: false },
    ],
  },
  {
    question: "2 + 7 = ",
    answers: [
      { text: "5", correct: false },
      { text: "9", correct: true },
      { text: "8", correct: false },
      { text: "27", correct: false },
    ],
  },
  {
    question: "2 + 8 = ",
    answers: [
      { text: "6", correct: false },
      { text: "10", correct: true },
      { text: "16", correct: false },
      { text: "11", correct: false },
    ],
  },
  {
    question: "2 + 9 = ",
    answers: [
      { text: "7", correct: false },
      { text: "11", correct: true },
      { text: "29", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "3 + 0 = ",
    answers: [
      { text: "0", correct: false },
      { text: "3", correct: true },
      { text: "2", correct: false },
      { text: "30", correct: false },
    ],
  },
  {
    question: "3 + 1 = ",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "2", correct: false },
      { text: "13", correct: false },
    ],
  },
  {
    question: "3 + 2 = ",
    answers: [
      { text: "1", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "8", correct: false },
    ],
  },
  {
    question: "3 + 3 = ",
    answers: [
      { text: "0", correct: false },
      { text: "6", correct: true },
      { text: "5", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "3 + 4 = ",
    answers: [
      { text: "1", correct: false },
      { text: "7", correct: true },
      { text: "12", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "3 + 5 = ",
    answers: [
      { text: "2", correct: false },
      { text: "8", correct: true },
      { text: "15", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "3 + 6 = ",
    answers: [
      { text: "3", correct: false },
      { text: "9", correct: true },
      { text: "6", correct: false },
      { text: "18", correct: false },
    ],
  },
  {
    question: "3 + 7 = ",
    answers: [
      { text: "4", correct: false },
      { text: "10", correct: true },
      { text: "21", correct: false },
      { text: "9", correct: false },
    ],
  },
  {
    question: "3 + 8 = ",
    answers: [
      { text: "5", correct: false },
      { text: "11", correct: true },
      { text: "24", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "3 + 9 = ",
    answers: [
      { text: "6", correct: false },
      { text: "12", correct: true },
      { text: "27", correct: false },
      { text: "9", correct: false },
    ],
  },
  {
    question: "4 + 0 = ",
    answers: [
      { text: "0", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    question: "4 + 1 = ",
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "14", correct: false },
    ],
  },
  {
    question: "4 + 2 = ",
    answers: [
      { text: "2", correct: false },
      { text: "6", correct: true },
      { text: "8", correct: false },
      { text: "24", correct: false },
    ],
  },
  {
    question: "4 + 3 = ",
    answers: [
      { text: "1", correct: false },
      { text: "7", correct: true },
      { text: "12", correct: false },
      { text: "8", correct: false },
    ],
  },
  {
    question: "4 + 4 = ",
    answers: [
      { text: "0", correct: false },
      { text: "8", correct: true },
      { text: "12", correct: false },
      { text: "16", correct: false },
    ],
  },
  {
    question: "4 + 5 = ",
    answers: [
      { text: "1", correct: false },
      { text: "9", correct: true },
      { text: "20", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "4 + 6 = ",
    answers: [
      { text: "2", correct: false },
      { text: "10", correct: true },
      { text: "24", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "4 + 7 = ",
    answers: [
      { text: "3", correct: false },
      { text: "11", correct: true },
      { text: "28", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "4 + 8 = ",
    answers: [
      { text: "4", correct: false },
      { text: "12", correct: true },
      { text: "16", correct: false },
      { text: "32", correct: false },
    ],
  },
  {
    question: "4 + 9 = ",
    answers: [
      { text: "5", correct: false },
      { text: "13", correct: true },
      { text: "18", correct: false },
      { text: "36", correct: false },
    ],
  },
  {
    question: "5 + 0 = ",
    answers: [
      { text: "0", correct: false },
      { text: "5", correct: true },
      { text: "10", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    question: "5 + 1 = ",
    answers: [
      { text: "4", correct: false },
      { text: "6", correct: true },
      { text: "15", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "5 + 2 = ",
    answers: [
      { text: "3", correct: false },
      { text: "7", correct: true },
      { text: "10", correct: false },
      { text: "8", correct: false },
    ],
  },
  {
    question: "5 + 3 = ",
    answers: [
      { text: "2", correct: false },
      { text: "8", correct: true },
      { text: "10", correct: false },
      { text: "15", correct: false },
    ],
  },
  {
    question: "5 + 4 = ",
    answers: [
      { text: "1", correct: false },
      { text: "9", correct: true },
      { text: "12", correct: false },
      { text: "20", correct: false },
    ],
  },
  {
    question: "5 + 5 = ",
    answers: [
      { text: "0", correct: false },
      { text: "10", correct: true },
      { text: "25", correct: false },
      { text: "15", correct: false },
    ],
  },
  {
    question: "5 + 6 = ",
    answers: [
      { text: "1", correct: false },
      { text: "11", correct: true },
      { text: "30", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "5 + 7 = ",
    answers: [
      { text: "2", correct: false },
      { text: "12", correct: true },
      { text: "35", correct: false },
      { text: "11", correct: false },
    ],
  },
  {
    question: "5 + 8 = ",
    answers: [
      { text: "3", correct: false },
      { text: "13", correct: true },
      { text: "14", correct: false },
      { text: "15", correct: false },
    ],
  },
  {
    question: "5 + 9 = ",
    answers: [
      { text: "4", correct: false },
      { text: "14", correct: true },
      { text: "13", correct: false },
      { text: "15", correct: false },
    ],
  },
  {
    question: "6 + 0 = ",
    answers: [
      { text: "0", correct: false },
      { text: "6", correct: true },
      { text: "4", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "6 + 1 = ",
    answers: [
      { text: "5", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
      { text: "9", correct: false },
    ],
  },
  {
    question: "6 + 2 = ",
    answers: [
      { text: "4", correct: false },
      { text: "8", correct: true },
      { text: "7", correct: false },
      { text: "9", correct: false },
    ],
  },
  {
    question: "6 + 3 = ",
    answers: [
      { text: "3", correct: false },
      { text: "9", correct: true },
      { text: "8", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "6 + 4 = ",
    answers: [
      { text: "2", correct: false },
      { text: "10", correct: true },
      { text: "11", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "6 + 5 = ",
    answers: [
      { text: "1", correct: false },
      { text: "11", correct: true },
      { text: "10", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "6 + 6 = ",
    answers: [
      { text: "0", correct: false },
      { text: "12", correct: true },
      { text: "11", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "6 + 7 = ",
    answers: [
      { text: "1", correct: false },
      { text: "13", correct: true },
      { text: "12", correct: false },
      { text: "14", correct: false },
    ],
  },
  {
    question: "6 + 8 = ",
    answers: [
      { text: "2", correct: false },
      { text: "14", correct: true },
      { text: "48", correct: false },
      { text: "15", correct: false },
    ],
  },
  {
    question: "6 + 9 = ",
    answers: [
      { text: "3", correct: false },
      { text: "15", correct: true },
      { text: "54", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "7 + 0 = ",
    answers: [
      { text: "0", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
      { text: "9", correct: false },
    ],
  },
  {
    question: "7 + 1 = ",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "7", correct: false },
      { text: "11", correct: false },
    ],
  },
  {
    question: "7 + 2 = ",
    answers: [
      { text: "5", correct: false },
      { text: "9", correct: true },
      { text: "10", correct: false },
      { text: "8", correct: false },
    ],
  },
  {
    question: "7 + 3 = ",
    answers: [
      { text: "4", correct: false },
      { text: "10", correct: true },
      { text: "11", correct: false },
      { text: "21", correct: false },
    ],
  },
  {
    question: "7 + 4 = ",
    answers: [
      { text: "3", correct: false },
      { text: "11", correct: true },
      { text: "28", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "7 + 5 = ",
    answers: [
      { text: "2", correct: false },
      { text: "12", correct: true },
      { text: "35", correct: false },
      { text: "11", correct: false },
    ],
  },
  {
    question: "7 + 6 = ",
    answers: [
      { text: "1", correct: false },
      { text: "13", correct: true },
      { text: "11", correct: false },
      { text: "42", correct: false },
    ],
  },
  {
    question: "7 + 7 = ",
    answers: [
      { text: "0", correct: false },
      { text: "14", correct: true },
      { text: "13", correct: false },
      { text: "49", correct: false },
    ],
  },
  {
    question: "7 + 8 = ",
    answers: [
      { text: "1", correct: false },
      { text: "15", correct: true },
      { text: "56", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "7 + 9 = ",
    answers: [
      { text: "2", correct: false },
      { text: "16", correct: true },
      { text: "17", correct: false },
      { text: "63", correct: false },
    ],
  },
  {
    question: "8 + 0 = ",
    answers: [
      { text: "0", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "8 + 1 = ",
    answers: [
      { text: "7", correct: false },
      { text: "9", correct: true },
      { text: "8", correct: false },
      { text: "18", correct: false },
    ],
  },
  {
    question: "8 + 2 = ",
    answers: [
      { text: "6", correct: false },
      { text: "10", correct: true },
      { text: "11", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "8 + 3 = ",
    answers: [
      { text: "5", correct: false },
      { text: "11", correct: true },
      { text: "24", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "8 + 4 = ",
    answers: [
      { text: "4", correct: false },
      { text: "12", correct: true },
      { text: "32", correct: false },
      { text: "11", correct: false },
    ],
  },
  {
    question: "8 + 5 = ",
    answers: [
      { text: "3", correct: false },
      { text: "13", correct: true },
      { text: "40", correct: false },
      { text: "23", correct: false },
    ],
  },
  {
    question: "8 + 6 = ",
    answers: [
      { text: "2", correct: false },
      { text: "14", correct: true },
      { text: "10", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "8 + 7 = ",
    answers: [
      { text: "1", correct: false },
      { text: "15", correct: true },
      { text: "16", correct: false },
      { text: "14", correct: false },
    ],
  },
  {
    question: "8 + 8 = ",
    answers: [
      { text: "0", correct: false },
      { text: "16", correct: true },
      { text: "17", correct: false },
      { text: "18", correct: false },
    ],
  },
  {
    question: "8 + 9 = ",
    answers: [
      { text: "1", correct: false },
      { text: "17", correct: true },
      { text: "72", correct: false },
      { text: "18", correct: false },
    ],
  },
  {
    question: "9 + 0 = ",
    answers: [
      { text: "0", correct: false },
      { text: "9", correct: true },
      { text: "19", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "9 + 1 = ",
    answers: [
      { text: "8", correct: false },
      { text: "10", correct: true },
      { text: "9", correct: false },
      { text: "11", correct: false },
    ],
  },
  {
    question: "9 + 2 = ",
    answers: [
      { text: "7", correct: false },
      { text: "11", correct: true },
      { text: "10", correct: false },
      { text: "18", correct: false },
    ],
  },
  {
    question: "9 + 3 = ",
    answers: [
      { text: "6", correct: false },
      { text: "12", correct: true },
      { text: "27", correct: false },
      { text: "11", correct: false },
    ],
  },
  {
    question: "9 + 4 = ",
    answers: [
      { text: "5", correct: false },
      { text: "13", correct: true },
      { text: "36", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "9 + 5 = ",
    answers: [
      { text: "4", correct: false },
      { text: "14", correct: true },
      { text: "45", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "9 + 6 = ",
    answers: [
      { text: "3", correct: false },
      { text: "15", correct: true },
      { text: "54", correct: false },
      { text: "16", correct: false },
    ],
  },
  {
    question: "9 + 7 = ",
    answers: [
      { text: "2", correct: false },
      { text: "16", correct: true },
      { text: "17", correct: false },
      { text: "63", correct: false },
    ],
  },
  {
    question: "9 + 8 = ",
    answers: [
      { text: "1", correct: false },
      { text: "17", correct: true },
      { text: "72", correct: false },
      { text: "18", correct: false },
    ],
  },
  {
    question: "9 + 9 = ",
    answers: [
      { text: "0", correct: false },
      { text: "18", correct: true },
      { text: "19", correct: false },
      { text: "81", correct: false },
    ],
  },
];

//Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(questionsArray);
questionsArray.forEach((question) => shuffleArray(question.answers));

//Function to display the home screen
function displayHomescreen() {
  location.reload();
  startScreenEl.style.display = "block";
  highscoresEl.style.display = "none";
  countdownEl.textContent = "60";
}

//Function to start the quiz
function startQuiz() {
  startScreenEl.style.display = "none";
  startQuizEl.style.display = "block";
  currentQuestion = 0;
  score = 0;

  showQuestion();
  countdown();
}

//Function to display a question
function showQuestion() {
  resultEl.style.display = "none";

  if (currentQuestion < questionsArray.length) {
    var question = questionsArray[currentQuestion];
    document.getElementById("question_id").textContent = question.question;
    answerButtons.forEach((button, index) => {
      button.textContent = question.answers[index].text;
      button.dataset.correct = question.answers[index].correct;
    });
  } else {
    endgame("arrayend");
  }
}

//Function to review user's answer
function reviewAnswer(event) {
  var selectedButton = event.target;
  var CorrectAnswer = selectedButton.dataset.correct === "true";
  if (CorrectAnswer) {
    score++;
  }

  showResult(CorrectAnswer);
}

//Function to display the result of an answer
function showResult(CorrectAnswer) {
  if (CorrectAnswer) {
    result.textContent = "Correct!";
  } else {
    result.textContent = "Wrong!";
    timeLeft -= 10;
  }
  resultEl.style.display = "block";
  setTimeout(() => {
    result.textContent = "";
    currentQuestion++;
    showQuestion();
  }, 1000);
}

//Function to end the game
function endgame(reason) {
  if (reason === "timeup") {
    gameoverEl.textContent = "Time is up!";
  } else if (reason === "arrayend") {
    clearInterval(countdownInterval);
    gameoverEl.textContent = "All done!";
  }

  finalScoreScreenEl.style.display = "block";
  startQuizEl.style.display = "none";
  showScoreEl.textContent = score;
}

//Function to save the highscore
function saveHighscoreFunction() {
  var initials = document.getElementById("initialsInput").value;
  var highscoreEntry = { score, initials };
  var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
  highScores.push(highscoreEntry);
  highScores.sort((a, b) => b.score - a.score);
  
  localStorage.setItem("highscores", JSON.stringify(highScores));

  displayHighscoreListFunction();
}

//Function to clear the highscores
function clearHighScoreFunction() {
  localStorage.removeItem("highscores");
  displayHighscoreListFunction();
}

//Function to display the highscores screen
function displayHighscoreListFunction() {
  startScreenEl.style.display = "none";
  startQuizEl.style.display = "none";
  highscoresEl.style.display = "block";
  finalScoreScreenEl.style.display = "none";
  var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
  highScoresListEl.innerHTML = "";
  highScores.forEach((highscoreEntry, index) => {
    var li = document.createElement("li");
    li.textContent = ` ${highscoreEntry.initials} - ${highscoreEntry.score}`;
    highScoresListEl.appendChild(li);
  });
}

//Function to start the countdown timer
function countdown() {
  timeLeft = 60;

  countdownInterval = setInterval(function () {
    if (timeLeft > 0) {
      countdownEl.textContent = timeLeft;
      timeLeft--;
    } else {
      countdownEl.textContent = "0";
      endgame("timeup");
      clearInterval(countdownInterval);
    }
  }, 1000);
  return countdownInterval;
}

// Event listeners for buttons and answer selections
startButton.addEventListener("click", startQuiz);
answerButtons.forEach((button) => {
  button.addEventListener("click", reviewAnswer);
});
submitButton.addEventListener("click", saveHighscoreFunction);
clearHighScoresButtonEl.addEventListener("click", clearHighScoreFunction);
goBackButtonEl.addEventListener("click", displayHomescreen);
