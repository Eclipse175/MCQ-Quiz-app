const startGame = document.getElementById('start-game')
const questionContainer = document.getElementById('question-container')
const questionText = document.getElementById('question-text')

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
// Function to check the selected answer
let selectedChoice;
const correct = current.correctAnswer;
// console.log(correct)

answerButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    selectedChoice = index;
    // console.log('you selected ' +  selectedChoice);
    if (selectedChoice === correct) {
      console.log('correct')
      button.classList.add('correct')
    } else {
      console.log('wrong')
      button.classList.add('wrong')
    }
    checkAnswer();
  });
});

function checkAnswer() {
  let choices = current.answers
}

// answerButtons.forEach(button => {
//   button.addEventListener('click', checkAnswer)
// })

