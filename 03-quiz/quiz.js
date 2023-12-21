const questions = [
  {
    question: "who is csk captain?",
    answers: [
      { text: "dhoni", correct: true },
      { text: "virat", correct: false },
      { text: "rohit", correct: false },
      { text: "dhawan", correct: false },
    ],
  },

  {
    question: "who is india captain?",
    answers: [
      { text: "yuvi", correct: false },
      { text: "virat", correct: false },
      { text: "rohit", correct: true },
      { text: "kl rahul", correct: false },
    ],
  },

  {
    question: "who is little master?",
    answers: [
      { text: "Sachin", correct: true },
      { text: "bhuvi", correct: false },
      { text: "rohit", correct: false },
      { text: "dhawan", correct: false },
    ],
  },

  {
    question: "who is gabbar?",
    answers: [
      { text: "Gambhir", correct: false },
      { text: "rinku", correct: false },
      { text: "rohit", correct: false },
      { text: "dhawan", correct: true },
    ],
  },

  {
    question: "who is no.3 of teamindia?",
    answers: [
      { text: "gill", correct: false },
      { text: "virat", correct: true },
      { text: "rohit", correct: false },
      { text: "jaddu", correct: false },
    ],
  },
];

let question = document.querySelector(".question");
let options = document.querySelector(".options");
let nextButton = document.querySelector(".next-button");
let questionIndex = 0;
let score = 0;

function startQuiz() {
  let questionIndex = 0;
  let score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function removePreviousOptions() {
  nextButton.classList.add("none");
  while (options.firstChild) {
    options.removeChild(options.firstChild);
  }
}
function questionStatus() {
  document.querySelectorAll(".btn").forEach((b) => {
    if (b.dataset.correct === "true") {
      b.classList.add("right");
    }
    b.disabled = true;
  });
}

function nextQuestion() {
  questionIndex = questionIndex + 1;
  if (questionIndex < questions.length) {
    showQuestion();
  } else if (questionIndex == questions.length) {
    removePreviousOptions();
    question.innerHTML = "your scored " + score + " out of 5";
    nextButton.classList.remove("none");
    nextButton.innerHTML = "Start Again";
  } else if (questionIndex > questions.length) {
    questionIndex = 0;
    showQuestion();
    score = 0;
    nextButton.innerHTML = "Next";
  }
}

nextButton.addEventListener("click", nextQuestion);

function showQuestion() {
  removePreviousOptions();
  question.innerHTML = questions[questionIndex].question;
  questions[questionIndex].answers.forEach((ans) => {
    let button = document.createElement("button");
    button.classList.add("btn");
    button.innerHTML = ans.text;
    button.dataset.correct = ans.correct;
    options.appendChild(button);
    button.addEventListener("click", (a) => {
      nextButton.classList.remove("none");
      if (button.dataset.correct === "true") {
        a.target.classList.add("right");
        score = score + 1;
        questionStatus();
      } else {
        a.target.classList.add("wrong");
        questionStatus();
      }
    });
  });
}

startQuiz();
