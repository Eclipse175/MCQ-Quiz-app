const startGame = document.getElementById('start-game')
const questionContainer = document.getElementById('question-container')

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
    // Add more questions here
  ];
  

startGame.addEventListener('click', () => {
    questionContainer.style.display = 'block';
    startGame.style.display = 'none';
})

  

