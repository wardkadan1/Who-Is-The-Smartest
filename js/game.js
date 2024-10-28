// Variables to hold game state
let lives = 3;
let score = 0;
let currentQuestionIndex = 0;
let hintUsed = false;
const maxQuestions = 10;
let questionTimer;
let questionInterval; // Declare questionInterval globally
let skipUsed = false; // Track if the skip button has been used

// Store fetched and shuffled questions here
let questions = [];

// Fetch questions from MockAPI and shuffle them
async function fetchQuestions() {
  const response = await fetch("https://6717ca09b910c6a6e029ff64.mockapi.io/project");
  const data = await response.json();
  questions = data.sort(() => Math.random() - 0.5);
}

// Initialize game
async function startGame() {
  resetGame();
  await fetchQuestions(); 
  loadQuestion(questions[currentQuestionIndex]);
  startTimers(); // Start timer for the first question

  // Add click event listener to the skip button
  document.getElementById("skip").onclick = skipQuestion;
}

// Load current question and display on UI
function loadQuestion(item) {
  document.getElementById("questionText").innerText = item.question;
  document.getElementById("categoryText").innerText =item.category;

  const shuffledAnswers = [...item.answers].sort(() => Math.random() - 0.5);
  shuffledAnswers.forEach((answer, index) => {
    const answerBtn = document.getElementById(`ans${index + 1}`);
    answerBtn.innerText = answer;
    answerBtn.onclick = () => handleAnswer(item, answer);
  });

  // Enable the skip button
  const skipBtn = document.getElementById("skip");
  skipBtn.disabled = false; // Enable the skip button each time a question is loaded
}

// Handle answer selection
function handleAnswer(question, selectedAnswer) {
  const isCorrect = selectedAnswer === question.rightAnswer;
  clearInterval(questionInterval); // Stop the timer when an answer is chosen
  if (isCorrect) {
    score++;
    displayMessage("Correct answer:", question.explanation);
  } else {
    lives--;
    displayMessage("Incorrect answer:", question.explanation);
    updateLivesDisplay();
    if (lives === 0) {
      endGame("Game Over! You lost all lives.");
      return;
    }
  }

  setTimeout(() => {
    document.getElementById("messageText").innerText = "";
    nextQuestion();
  }, 3000); // Move to next question after 3 seconds
}

// Skip the current question
// Skip the current question
function skipQuestion() {
  if (!skipUsed) {
    score++; // Increment score for skipping
    skipUsed = true; // Mark skip as used

    // Change button color and disable it
    const skipBtn = document.getElementById("skip");
    skipBtn.style.backgroundColor = "grey"; // Change button color to grey
    skipBtn.style.cursor = "not-allowed"; // Change cursor to not-allowed

    clearInterval(questionInterval); // Stop the timer when skipping
    displayMessage("Question skipped!", "You have gained 1 point.");

    setTimeout(() => {
      nextQuestion(); // Move to the next question after a brief message
    }, 3000); // 2 seconds to display the skip message
  }
}


// Move to the next question and reset timer
function nextQuestion() {
  clearInterval(questionInterval); // Stop the current timer
  currentQuestionIndex++;
  
  if (currentQuestionIndex < maxQuestions && currentQuestionIndex < questions.length) {
    updateQuestionNumber();
    loadQuestion(questions[currentQuestionIndex]);
    startTimers(); // Start a fresh 60-second timer for the new question
  } else {
    endGame(`Congratulations! You finished the game with a score of ${score}/${maxQuestions}.`);
  }
}

// Update displayed question number
function updateQuestionNumber() {
  const quesNumText = document.getElementById("QuesNumText");
  quesNumText.innerText = `${currentQuestionIndex + 1}/${maxQuestions}`;
}

// Display messages for correct/incorrect answers
function displayMessage(title, message) {
  const messageBox = document.getElementById("messageText");
  messageBox.innerText = `${title} ${message}`;
}

// Update lives display
function updateLivesDisplay() {
  const livesDisplay = document.querySelector(".numOfLives");
  if (livesDisplay) {
    livesDisplay.innerText = lives;
  }
}

// End the game and display result
function endGame(message) {
  alert(message);
  resetGame();
}

// Reset game variables
function resetGame() {
  clearInterval(questionInterval); // Stop any ongoing timer
  lives = 3;
  score = 0;
  currentQuestionIndex = 0;
  hintUsed = false;
  skipUsed = false; // Reset skip button usage
}

// Start a fresh timer for each question
function startTimers() {
  questionTimer = 60; // Reset timer to 60 seconds
  const timerDisplay = document.getElementById("timer");

  questionInterval = setInterval(() => {
    if (questionTimer > 0) {
      questionTimer--;
      timerDisplay.innerText = questionTimer;
    } else {
      clearInterval(questionInterval); // Stop timer if time is up
      lives--;
      displayMessage("Time's up for this question!", "orange");
      updateLivesDisplay();

      if (lives === 0) {
        endGame("Game Over! You lost all lives.");
      } else {
        nextQuestion(); // Move to the next question if there are lives left
      }
    }
  }, 1000);
}

window.onload = startGame;
