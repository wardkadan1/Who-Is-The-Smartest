// Variables to hold game state
let lives = 3;
let score = 0;
let currentQuestionIndex = 0;
let hintUsed = false;
let username = null;
const maxQuestions = 10;
let questionTimer;
let questionInterval;
let skipUsed = false;
let questions = [];

// Fetch questions from MockAPI and shuffle them
async function fetchQuestions() {
  const response = await fetch(
    "https://6717ca09b910c6a6e029ff64.mockapi.io/project"
  );
  const data = await response.json();
  // Shuffle the questions array
  questions = data.sort(() => Math.random() - 0.5);
}

// Initialize game
async function startGame() {
  resetGame();
  await fetchQuestions();
  startTimers();
  loadQuestion(questions[currentQuestionIndex]);
  document.getElementById("skip").onclick = skipQuestion;
}

// Load current question and display on UI
function loadQuestion(item) {
  document.getElementById("questionText").innerText = item.question;
  document.getElementById("categoryText").innerText = item.category;
  const shuffledAnswers = [...item.answers];
  shuffledAnswers.forEach((answer, index) => {
    const answerBtn = document.getElementById(`ans${index + 1}`);
    answerBtn.innerText = answer;
    answerBtn.onclick = () => handleAnswer(item, answer);
  });
  const skipBtn = document.getElementById("skip");
  skipBtn.disabled = false;
}

function disableAnswerButtons() {
  const answerButtons = document.querySelectorAll(".answer-button");
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].onclick = null;
  }
}

function enableAnswerButtons(question) {
  const answerButtons = document.querySelectorAll(".answer-button");
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].onclick = () =>
      handleAnswer(question, answerButtons[i].textContent);
  }
}

function handleAnswer(question, selectedAnswer) {
  const isCorrect = selectedAnswer === question.rightAnswer;
  const messageBox = document.getElementById("messageText");
  let rightAnswerIndex = 0;
  let selectedAnswerIndex = 0;

  for (let i = 0; i < question.answers.length; i++) {
    if (question.answers[i] === question.rightAnswer) rightAnswerIndex = i + 1;
    if (
      question.answers[i] === selectedAnswer &&
      question.answers[i] !== question.rightAnswer
    ) {
      selectedAnswerIndex = i + 1;
    }
  }

  disableAnswerButtons();
  if (isCorrect) {
    score++;
    const selectedRightAnswer = document.getElementById(
      `ans${rightAnswerIndex}`
    );
    selectedRightAnswer.classList.add("correctAnswer");
    console.log(selectedRightAnswer);
    setTimeout(() => {
      enableAnswerButtons(question);
      nextQuestion();
      selectedRightAnswer.classList.remove("correctAnswer");
    }, 1000);
  } else {
    lives--;
    const selectedWrongAnswer = document.getElementById(
      `ans${selectedAnswerIndex}`
    );
    selectedWrongAnswer.classList.add("wrongAnswer");
    const selectedRightAnswer = document.getElementById(
      `ans${rightAnswerIndex}`
    );
    selectedRightAnswer.classList.add("correctAnswer");
    displayMessage("Correct Answer: ", question.explanation);

    // Update the displayed number of lives
    const livesDisplay = document.querySelector(".numOfLives");
    if (livesDisplay) {
      livesDisplay.innerText = lives;
    }

    // Check if lives are exhausted
    if (lives === 0) {
      endGame();
    } else {
      setTimeout(() => {
        enableAnswerButtons(question);
        nextQuestion();
        selectedRightAnswer.classList.remove("correctAnswer");
        selectedWrongAnswer.classList.remove("wrongAnswer");
        messageBox.style.display = "none";
      }, 3000);
    }
  }
}
// Skip the current question
function skipQuestion() {
  if (!skipUsed) {
    score++;
    skipUsed = true;
    const skipBtn = document.getElementById("skip");
    skipBtn.style.backgroundColor = "grey";
    skipBtn.style.pointerEvents = "none";
    clearInterval(questionInterval);
    nextQuestion();
  }
}

// Move to the next question and reset timer
function nextQuestion() {
  clearInterval(questionInterval);
  startTimers(); // Reset and start the timer immediately
  currentQuestionIndex++;
  if (
    currentQuestionIndex < maxQuestions &&
    currentQuestionIndex < questions.length
  ) {
    updateQuestionNumber();
    loadQuestion(questions[currentQuestionIndex]);
  } else {
    endGame();
  }
}

// Update displayed question number
function updateQuestionNumber() {
  const quesNumText = document.getElementById("QuesNumText");
  quesNumText.innerText = `${currentQuestionIndex + 1}/${maxQuestions}`;
}

// Display messages for correct/incorrect answers
function displayMessage(title, message) {
  const messageBox = document.getElementById("messageText"); // Get the <p> element
  messageBox.innerHTML = `<span id='messageTitle'>${title}</span> ${message}`; // Set the message text
}

// Update lives display
function updateLivesDisplay() {
  const livesDisplay = document.querySelector(".numOfLives");
  if (livesDisplay) {
    livesDisplay.innerText = lives;
  }
}

// Reset game variables
function resetGame() {
  clearInterval(questionInterval);
  lives = 3;
  score = 0;
  currentQuestionIndex = 0;
  hintUsed = false;
  skipUsed = false;
}

// Start a fresh timer for each question
function startTimers() {
  questionTimer = 60;
  const timerDisplay = document.getElementById("timer");
  timerDisplay.innerText = questionTimer;
  questionInterval = setInterval(() => {
    if (questionTimer > 0) {
      questionTimer--;
      timerDisplay.innerText = questionTimer;
    } else {
      clearInterval(questionInterval);
      lives--;
      displayMessage("Time's up for this question!", "orange");
      updateLivesDisplay();
      if (lives === 0) {
        endGame("Game Over! You lost all lives.");
      } else {
        nextQuestion();
      }
    }
  }, 1000);
}

const gameOver = document.querySelector(".gameOver");
const usernameTitle = document.querySelector("#usernameTitle");
const gameOverText = document.querySelector("#gameOverText");
const gameOverTextTwo = document.querySelector("#gameOverTextTwo");
const input = document.getElementById("name");

function endGame() {
  gameOver.style.display = "flex";
  const username = localStorage.getItem("username");
  gameOverTextTwo.textContent = `${score}/10`;

  switch (score) {
    case 1:
      usernameTitle.innerHTML = `Tough start, <strong>${username}</strong>`;
      gameOverText.textContent = "Better luck next time. Keep learning!";
      break;
    case 2:
      usernameTitle.innerHTML = `Nice try, <strong>${username}</strong>`;
      gameOverText.textContent = "There's still more to discover. Keep going!";
      break;
    case 3:
      usernameTitle.innerHTML = `Good effort, <strong>${username}</strong>`;
      gameOverText.textContent =
        "Keep challenging yourself, and you'll get better";
      break;
    case 4:
      usernameTitle.innerHTML = `Not bad, <strong>${username}</strong>`;
      gameOverText.textContent = "Keep improving and try again!";
      break;
    case 5:
      usernameTitle.innerHTML = `You're halfway there, <strong>${username}</strong>`;
      gameOverText.textContent =
        "but not enough to win. Better luck next time!";
      break;
    case 6:
      usernameTitle.innerHTML = `So close, <strong>${username}</strong>`;
      gameOverText.textContent = "Just one more right answer would've done it.";
      break;
    case 7:
      usernameTitle.innerHTML = `Great job, <strong>${username}</strong>`;
      gameOverText.textContent = "You win with 7 correct answers. Well done!";
      break;
    case 8:
      usernameTitle.innerHTML = `Amazing, <strong>${username}</strong>`;
      gameOverText.textContent = "You win with 8 correct answers. Nice!";
      break;
    case 9:
      usernameTitle.innerHTML = `Excellent, <strong>${username}</strong>`;
      gameOverText.textContent =
        "You win with 9 correct answers. Almost perfect!";
      break;
    case 10:
      usernameTitle.innerHTML = `Congratulations, <strong>${username}</strong>`;
      gameOverText.textContent = "You Are The Smartest!";
      gameOverTextTwo.textContent = "You've mastered every question perfectly!";
      break;

    default:
      usernameTitle.innerHTML = `No Luck!, <strong>${username}</strong>`;
      gameOverText.textContent = "Better luck next time!";
  }
}

window.onload = startGame;
