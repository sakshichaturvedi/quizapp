
function signin(){
  document.getElementById('login_modal').style.display="block";
}
function login(){
  document.getElementById('signin').style.display="none";
  document.getElementById('signout').style.display="block";
}
function logocontent(){
  document.getElementById("test").style.display="block";
}
function GK_Content(){
  var x = document.getElementById("gkquiz");
  if (x.style.display === "none") {
    x.style.display = "block";

    document.getElementById("aniquiz").style.display="none";
    document.getElementById("spoquiz").style.display="none";
    document.getElementById("itquiz").style.display="none";
    document.getElementById("geoquiz").style.display="none";

const question = document.getElementById("questionGK");
const choices = Array.from(document.getElementsByClassName("choice-textGK"));
const progressText = document.getElementById("progressTextGK");
const scoreText = document.getElementById("scoreGK");
//const progressBarFull = document.getElementById("progressBarFullGK");


//var resultCont = document.getElementById('result');
const game = document.getElementById("gameGK");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

const username = document.getElementById("username");
//const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

//const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;


//console.log(mostRecentScore);

//localStorage.setItem("Score", JSON.stringify(finalScore));
//window.location.assign("/");

let questions = [];

    //GKFunctions
fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
.then(res => {
return res.json();
})
.then(loadedQuestions => {
console.log(loadedQuestions.results);
questions = loadedQuestions.results.map(loadedQuestion => {
  const formattedQuestion = {
    question: loadedQuestion.question
  };

  const answerChoices = [...loadedQuestion.incorrect_answers];
  formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
  answerChoices.splice(
    formattedQuestion.answer - 1,
    0,
    loadedQuestion.correct_answer
  );

  answerChoices.forEach((choice, index) => {
    formattedQuestion["choice" + (index + 1)] = choice;
  });

  return formattedQuestion;
});

startGame();
})
.catch(err => {
console.error(err);
});


//CONSTANTS
var CORRECT_BONUS = 0;
const MAX_QUESTIONS = 5;


startGame = () => {
questionCounter = 0;
score = 0;
availableQuesions = [...questions];
getNewQuestion();
game.classList.remove("hidden");

};


getNewQuestion = () => {

if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
localStorage.setItem("mostRecentScore", score);
//go to the end page



return;


}

questionCounter++;
progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
//Update the progress bar
//progressBarFullGK.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

const questionIndex = Math.floor(Math.random() * availableQuesions.length);
currentQuestion = availableQuesions[questionIndex];
question.innerHTML = currentQuestion.question;

choices.forEach(choice => {
const number = choice.dataset["number"];
choice.innerHTML = currentQuestion["choice" + number];
});

availableQuesions.splice(questionIndex, 1);
acceptingAnswers = true;
};

choices.forEach(choice => {
choice.addEventListener("click", e => {
if (!acceptingAnswers) return;

acceptingAnswers = false;
const selectedChoice = e.target;
const selectedAnswer = selectedChoice.dataset["number"];

const classToApply =
  selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

if (classToApply === "correct") {
  incrementScore(CORRECT_BONUS);
}

selectedChoice.parentElement.classList.add(classToApply);

setTimeout(() => {
  selectedChoice.parentElement.classList.remove(classToApply);
  getNewQuestion();
}, 1000);
if(questionCounter == 5){
  document.getElementById("end").style.display = "block" ;
  document.getElementById("gkquiz").style.display = "none";
  finalScore.innerHTML= scoreText.innerHTML;

}
});


});

incrementScore = num => {
score++;
scoreText.innerText = score;
};

  } else {
    x.style.display = "none";
  }
  

}


//Computer SCience

function It_Content(){
var x = document.getElementById("itquiz");
if (x.style.display === "none") {
  x.style.display = "block";

  document.getElementById("gkquiz").style.display="none";
  document.getElementById("spoquiz").style.display="none";
  document.getElementById("aniquiz").style.display="none";
  document.getElementById("geoquiz").style.display="none";

const question = document.getElementById("questionIT");
const choices = Array.from(document.getElementsByClassName("choice-textIT"));
const progressText = document.getElementById("progressTextIT");
const scoreText = document.getElementById("scoreIT");
//const progressBarFull = document.getElementById("progressBarFullIT");
const game = document.getElementById("gameIT");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
const username = document.getElementById("username");
//const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");


 //localStorage.setItem("Score", JSON.stringify(finalScore));

let questions = [];

  //ITFunctions
fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
.then(res => {
return res.json();
})
.then(loadedQuestions => {
console.log(loadedQuestions.results);
questions = loadedQuestions.results.map(loadedQuestion => {
const formattedQuestion = {
  question: loadedQuestion.question
};

const answerChoices = [...loadedQuestion.incorrect_answers];
formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
answerChoices.splice(
  formattedQuestion.answer - 1,
  0,
  loadedQuestion.correct_answer
);

answerChoices.forEach((choice, index) => {
  formattedQuestion["choice" + (index + 1)] = choice;
});

return formattedQuestion;
});

startGame();
})
.catch(err => {
console.error(err);
});


//CONSTANTS
var CORRECT_BONUS = 0;
const MAX_QUESTIONS = 5;

startGame = () => {
questionCounter = 0;
score = 0;
availableQuesions = [...questions];
getNewQuestion();
game.classList.remove("hidden");

};

getNewQuestion = () => {
if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
localStorage.setItem("mostRecentScore", score);
//go to the end page

return ;
}
questionCounter++;
progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
//Update the progress bar
//progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

const questionIndex = Math.floor(Math.random() * availableQuesions.length);
currentQuestion = availableQuesions[questionIndex];
question.innerHTML = currentQuestion.question;

choices.forEach(choice => {
const number = choice.dataset["number"];
choice.innerHTML = currentQuestion["choice" + number];
});

availableQuesions.splice(questionIndex, 1);
acceptingAnswers = true;
};

choices.forEach(choice => {
choice.addEventListener("click", e => {
if (!acceptingAnswers) return;

acceptingAnswers = false;
const selectedChoice = e.target;
const selectedAnswer = selectedChoice.dataset["number"];

const classToApply =
selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

if (classToApply === "correct") {
incrementScore(CORRECT_BONUS);
}

selectedChoice.parentElement.classList.add(classToApply);

setTimeout(() => {
selectedChoice.parentElement.classList.remove(classToApply);
getNewQuestion();
}, 1000);
if(questionCounter == 5){
  document.getElementById("end").style.display = "block" ;
  document.getElementById("itquiz").style.display = "none";
  finalScore.innerHTML= scoreText.innerHTML;

}

});


});

incrementScore = num => {
score++;
scoreText.innerText = score;
};

} else {
  x.style.display = "none";
}


}



//Geography
function Geo_Content(){
var x = document.getElementById("geoquiz");
if (x.style.display === "none") {
  x.style.display = "block";

  document.getElementById("gkquiz").style.display="none";
  document.getElementById("spoquiz").style.display="none";
  document.getElementById("itquiz").style.display="none";
  document.getElementById("aniquiz").style.display="none";

const question = document.getElementById("questionGEO");
const choices = Array.from(document.getElementsByClassName("choice-textGEO"));
const progressText = document.getElementById("progressTextGEO");
const scoreText = document.getElementById("scoreGEO");
//const progressBarFull = document.getElementById("progressBarFullGEO");

const game = document.getElementById("gameGEO");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

const username = document.getElementById("username");
//const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

//const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;


//localStorage.setItem("Score", JSON.stringify(finalScore));

let questions = [];

  //GeoFunctions
fetch("https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple")
.then(res => {
return res.json();
})
.then(loadedQuestions => {
console.log(loadedQuestions.results);
questions = loadedQuestions.results.map(loadedQuestion => {
const formattedQuestion = {
  question: loadedQuestion.question
};

const answerChoices = [...loadedQuestion.incorrect_answers];
formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
answerChoices.splice(
  formattedQuestion.answer - 1,
  0,
  loadedQuestion.correct_answer
);

answerChoices.forEach((choice, index) => {
  formattedQuestion["choice" + (index + 1)] = choice;
});

return formattedQuestion;
});

startGame();
})
.catch(err => {
console.error(err);
});


//CONSTANTS
var CORRECT_BONUS = 0;
const MAX_QUESTIONS = 5;

startGame = () => {
questionCounter = 0;
score = 0;
availableQuesions = [...questions];
getNewQuestion();
game.classList.remove("hidden");

};

getNewQuestion = () => {
if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
localStorage.setItem("mostRecentScore", score);
//go to the end page

return;
}
questionCounter++;
progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
//Update the progress bar
//progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

const questionIndex = Math.floor(Math.random() * availableQuesions.length);
currentQuestion = availableQuesions[questionIndex];
question.innerHTML = currentQuestion.question;

choices.forEach(choice => {
const number = choice.dataset["number"];
choice.innerHTML = currentQuestion["choice" + number];
});

availableQuesions.splice(questionIndex, 1);
acceptingAnswers = true;
};

choices.forEach(choice => {
choice.addEventListener("click", e => {
if (!acceptingAnswers) return;

acceptingAnswers = false;
const selectedChoice = e.target;
const selectedAnswer = selectedChoice.dataset["number"];

const classToApply =
selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

if (classToApply === "correct") {
incrementScore(CORRECT_BONUS);
}

selectedChoice.parentElement.classList.add(classToApply);

setTimeout(() => {
selectedChoice.parentElement.classList.remove(classToApply);
getNewQuestion();
}, 1000);
if(questionCounter == 5){
  document.getElementById("end").style.display = "block" ;
  document.getElementById("geoquiz").style.display = "none";
  finalScore.innerHTML= scoreText.innerHTML;

}

});


});

incrementScore = num => {
score++;
scoreText.innerText = score;
};
console.log(score);
} else {
  x.style.display = "none";
}


}




//Sports
function Spo_Content(){
var x = document.getElementById("spoquiz");
if (x.style.display === "none") {
  x.style.display = "block";

  document.getElementById("gkquiz").style.display="none";
  document.getElementById("geoquiz").style.display="none";
  document.getElementById("itquiz").style.display="none";
  document.getElementById("aniquiz").style.display="none";

const question = document.getElementById("questionSPO");
const choices = Array.from(document.getElementsByClassName("choice-textSPO"));
const progressText = document.getElementById("progressTextSPO");
const scoreText = document.getElementById("scoreSPO");
//const progressBarFull = document.getElementById("progressBarFullSPO");

const game = document.getElementById("gameSPO");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

const username = document.getElementById("username");
//const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

//const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;



let questions = [];

  //SportsFunctions
fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple")
.then(res => {
return res.json();
})
.then(loadedQuestions => {
console.log(loadedQuestions.results);
questions = loadedQuestions.results.map(loadedQuestion => {
const formattedQuestion = {
  question: loadedQuestion.question
};

const answerChoices = [...loadedQuestion.incorrect_answers];
formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
answerChoices.splice(
  formattedQuestion.answer - 1,
  0,
  loadedQuestion.correct_answer
);

answerChoices.forEach((choice, index) => {
  formattedQuestion["choice" + (index + 1)] = choice;
});

return formattedQuestion;
});

startGame();
})
.catch(err => {
console.error(err);
});


//CONSTANTS
var CORRECT_BONUS = 0;
const MAX_QUESTIONS = 5;

startGame = () => {
questionCounter = 0;
score = 0;
availableQuesions = [...questions];
getNewQuestion();
game.classList.remove("hidden");

};

getNewQuestion = () => {
if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
localStorage.setItem("mostRecentScore", score);
//go to the end page

return;
}
questionCounter++;
progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
//Update the progress bar
//progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

const questionIndex = Math.floor(Math.random() * availableQuesions.length);
currentQuestion = availableQuesions[questionIndex];
question.innerHTML = currentQuestion.question;

choices.forEach(choice => {
const number = choice.dataset["number"];
choice.innerHTML = currentQuestion["choice" + number];
});

availableQuesions.splice(questionIndex, 1);
acceptingAnswers = true;
};

choices.forEach(choice => {
choice.addEventListener("click", e => {
if (!acceptingAnswers) return;

acceptingAnswers = false;
const selectedChoice = e.target;
const selectedAnswer = selectedChoice.dataset["number"];

const classToApply =
selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

if (classToApply === "correct") {
incrementScore(CORRECT_BONUS);
}

selectedChoice.parentElement.classList.add(classToApply);

setTimeout(() => {
selectedChoice.parentElement.classList.remove(classToApply);
getNewQuestion();
}, 1000);
if(questionCounter == 5){
  document.getElementById("end").style.display = "block" ;
  document.getElementById("spoquiz").style.display = "none";
  finalScore.innerHTML= scoreText.innerHTML;

}

});


});

incrementScore = num => {
score++;
scoreText.innerText = score;
};
} else {
  x.style.display = "none";
}


}



//Animals
function Ani_Content(){
var x = document.getElementById("aniquiz");
if (x.style.display === "none") {
  x.style.display = "block";
  document.getElementById("gkquiz").style.display="none";
  document.getElementById("geoquiz").style.display="none";
  document.getElementById("itquiz").style.display="none";
  document.getElementById("spoquiz").style.display="none";

const question = document.getElementById("questionAN");
const choices = Array.from(document.getElementsByClassName("choice-textAN"));
const progressText = document.getElementById("progressTextAN");
const scoreText = document.getElementById("scoreAN");
//const progressBarFull = document.getElementById("progressBarFullAN");
const game = document.getElementById("gameAN");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

const username = document.getElementById("username");
//const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

//const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;



let questions = [];

  //AniFunctions
fetch("https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple")
.then(res => {
return res.json();
})
.then(loadedQuestions => {
console.log(loadedQuestions.results);
questions = loadedQuestions.results.map(loadedQuestion => {
const formattedQuestion = {
  question: loadedQuestion.question
};

const answerChoices = [...loadedQuestion.incorrect_answers];
formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
answerChoices.splice(
  formattedQuestion.answer - 1,
  0,
  loadedQuestion.correct_answer
);

answerChoices.forEach((choice, index) => {
  formattedQuestion["choice" + (index + 1)] = choice;
});

return formattedQuestion;
});

startGame();
})
.catch(err => {
console.error(err);
});


//CONSTANTS
var CORRECT_BONUS = 0;
const MAX_QUESTIONS = 5;

startGame = () => {
questionCounter = 0;
score = 0;
availableQuesions = [...questions];
getNewQuestion();
game.classList.remove("hidden");

};

getNewQuestion = () => {
if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
localStorage.setItem("mostRecentScore", score);
//go to the end page


return;
}
questionCounter++;
progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
//Update the progress bar
//progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

const questionIndex = Math.floor(Math.random() * availableQuesions.length);
currentQuestion = availableQuesions[questionIndex];
question.innerHTML = currentQuestion.question;

choices.forEach(choice => {
const number = choice.dataset["number"];
choice.innerHTML = currentQuestion["choice" + number];
});

availableQuesions.splice(questionIndex, 1);
acceptingAnswers = true;
};

choices.forEach(choice => {
choice.addEventListener("click", e => {
if (!acceptingAnswers) return;

acceptingAnswers = false;
const selectedChoice = e.target;
const selectedAnswer = selectedChoice.dataset["number"];

const classToApply =
selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

if (classToApply === "correct") {
incrementScore(CORRECT_BONUS);
}

selectedChoice.parentElement.classList.add(classToApply);

setTimeout(() => {
selectedChoice.parentElement.classList.remove(classToApply);
getNewQuestion();
}, 1000);
if(questionCounter == 5){
  document.getElementById("end").style.display = "block" ;
  document.getElementById("aniquiz").style.display = "none";
  finalScore.innerHTML= scoreText.innerHTML;

}

});


});

incrementScore = num => {
score++;
scoreText.innerText = score;
};

} else {
  x.style.display = "none";
}


}



