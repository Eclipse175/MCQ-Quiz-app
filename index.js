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
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["China", "Japan", "Thailand", "South Korea"],
    correctAnswer: 1
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1
  },
  {
    question: "What is the chemical symbol for water?",
    answers: ["Wa", "H2O", "O2", "CO2"],
    correctAnswer: 1
  },
  {
    question: "Which planet in our solar system is known for its prominent rings?",
    answers: ["Jupiter", "Uranus", "Saturn", "Neptune"],
    correctAnswer: 2
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
let correct = current.correctAnswer;

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
    nextButton.disabled = false;
  });
});

nextButton.addEventListener('click', loadNextQuestion);
nextButton.disabled = true;

function loadNextQuestion() {
  index++;
  if (index >= questions.length) {
    index = 0;
  }
  current = questions[index]; //this sets the current questions index to the current question being asked
  correct = current.correctAnswer; // this checks for the correctAnswer

  questionRandomize();
  answerButtons.forEach((button) => {
    button.classList.remove('correct', 'wrong');
    button.disabled = false;
  });
  body.classList.remove('correct', 'wrong');
  selectedChoice = null;
  nextButton.disabled = true;
  }
