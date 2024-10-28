// Variables to hold game state
let lives = 3;
let score = 0;
let currentQuestionIndex = 0;
let hintUsed = false;
const maxQuestions = 10;

// Store fetched and shuffled questions here
let questions = []; 
// Fetch questions from MockAPI and shuffle them
async function fetchQuestions() {
  const response = await fetch("https://mockapi.io/endpoint/questions");
  const data = await response.json();
  // Shuffle the questions array
  questions = data.sort(() => Math.random() - 0.5);
}

// Initialize game
async function startGame() {
  await fetchQuestions(); 
  loadQuestion(questions[currentQuestionIndex]);
  startTimers();
}

// Load current question and display on UI
function loadQuestion(item) {
  document.getElementById("questionText").innerText = item.question;
  const answersContainer = document.getElementById("answersContainer");
  answersContainer.innerHTML = ""; // Clear previous answers
  // Shuffle and display answer options
  let i=1;
  const shuffledAnswers = [...item.answers].sort(() => Math.random() - 0.5);
  shuffledAnswers.forEach(answer => {
    const answerBtn = document.getElementById(`ans${i}`)
    answerBtn.innerText = answer;
    answerBtn.onclick = () => handleAnswer(item, answer);
    answersContainer.appendChild(answerBtn);
    i++;
  });
}
// Handle answer selection
function handleAnswer(question, selectedAnswer) {
  const isCorrect = selectedAnswer === question.rightAnswer;
  if (isCorrect) {
    score++;
    displayMessage("The right answer: ",question.explanation);
    nextQuestion();
  } else {
    lives--;
    displayMessage('Incorrect answer: ',question.explanation);
    if (lives === 0) {
      endGame("Game Over! You lost all lives.");
    } else {
      nextQuestion();
    }
  }
}

// Move to the next question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < maxQuestions && currentQuestionIndex < questions.length) {
    loadQuestion(questions[currentQuestionIndex]);
  } else {
    endGame(`Congratulations! You finished the game with a score of ${score}/${maxQuestions}.`);
  }
}

// Display messages for correct/incorrect answers
function displayMessage(title,message) {
  const messageBox = document.getElementById("message");
  messageBox.innerText = message;
  const messageTitle=document.getElementById('messageTitle');
  messageTitle.innerHTML=title;
}

// Handle hint usage
function useHint() {
  if (!hintUsed) {
    hintUsed = true;
    displayMessage("Hint: " + questions[currentQuestionIndex].hint, "blue");
  } else {
    displayMessage("You've already used your hint!", "gray");
  }
}
// End the game and display result
function endGame(message) {
  alert(message);
  resetGame();
}
// Reset game variables and reload the game
function resetGame() {
  lives = 3;
  score = 0;
  currentQuestionIndex = 0;
  hintUsed = false;
  startGame();
}
// Timers for game and questions
function startTimers() {
  let gameTimer = 600; // 10 minutes
  let questionTimer = 60; // 1 minute per question
  setInterval(() => {
    if (gameTimer > 0) gameTimer--;
    else endGame("Time's up! You ran out of time.");
  }, 1000);
  setInterval(() => {
    if (questionTimer > 0) questionTimer--;
    else {
      lives--;
      displayMessage("Time's up for this question!", "orange");
      nextQuestion();
    }
  }, 1000);
}

// Start game when the page loads
window.onload = startGame;



