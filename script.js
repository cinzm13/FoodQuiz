const questions = [
  {
    question: "What ingredients are typically found in a Hawaiian pizza?",
    answers: [
      { text: "Pineapple", correct: true },
      { text: "Chips", correct: false },
      { text: "Banana", correct: false },
      { text: "Lettuce", correct: false },
    ],
  },
  {
    question: "Which of the following is a fruit?",
    answers: [
      { text: "Carrot", correct: false },
      { text: "Apple", correct: true },
      { text: "Broccoli", correct: false },
      { text: "Potato", correct: false },
    ],
  },
  
  {
    question: "What is the primary ingredient in guacamole",
    answers: [
      { text: "Tomatoes", correct: false },
      { text: "Avocado", correct: true },
      { text: "Onions", correct: false },
      { text: "Peppers", correct: false },
    ],
  },

  {
    question: "What is the main ingredient in the traditional Japanese dish sushi?",
    answers: [
      { text: "Seaweed", correct: false },
      { text: "Lobster", correct: true },
      { text: "Noodles", correct: false },
      { text: "Rice", correct: true },
    ],
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionTextElement = document.getElementById("question-text");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionTextElement.innerText = question.question;
  answerButtonsElement.innerHTML = "";

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(answer) {
  if(answer.correct){
    score++;
  }
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
  } else {
    alert(`Quiz completed! Your score: ${score}/${questions.length}`);
  }
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
  } else {
    alert("Quiz completed!");
  }
}

// Start the quiz when the page loads
startQuiz();
