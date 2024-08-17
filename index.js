const startGame = document.getElementById('start-game')
const questionContainer = document.getElementById('question-container')
const questionText = document.getElementById('question-text')
const body = document.querySelector('body');

const questions = [
  {
    question: "What is the capital of France?",
    answers: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: 0
  },
  {
    question: "Which element has the chemical symbol 'Au'?",
    answers: ["Silver", "Gold", "Copper", "Aluminum"],
    correctAnswer: 1
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 2
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Vincent van Gogh", "Pablo Picasso", "Michelangelo", "Leonardo da Vinci"],
    correctAnswer: 3
  }
  // Add more questions here
];

startGame.addEventListener('click', () => {
  questionContainer.style.display = 'block';
  startGame.style.display = 'none';
})

let index = Math.floor(Math.random() * questions.length)
let current = questions[index]
const correctAnswers = questions.map(question => question.answers[question.correctAnswer]);

const questionRandomize = () => {
  questionText.innerText = current.question

  for (let i = 0; i < 4; i++) {
    const answerButtons = document.getElementById(`btn${i}`);
    answerButtons.innerText = current.answers[i]
  }
}
questionRandomize();

const answerButtons = document.querySelectorAll('.answer-btn')
const nextButton = document.getElementById('next')
let selectedChoice;
const correct = current.correctAnswer;

answerButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    selectedChoice = index;
    answerButtons.forEach((button, index) => {
      if (index !== correct) {
          button.disabled = true;
      } else if (index === correct) {
        button.classList.add('correct')
      }
  });
    if (selectedChoice === correct) {
      button.classList.add('correct')
      body.classList.add('correct') 
    
    } else {
      button.classList.add('wrong')
      body.classList.add('wrong')
    }
  });
});

nextButton.addEventListener('click', loadNextQuestion);
function loadNextQuestion() {
 
}
