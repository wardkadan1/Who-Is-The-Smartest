// Variables to hold game state
let lives = 3;
let score = 0;
let currentQuestionIndex = 0;
let hintUsed = false;
let username = null;
const maxQuestions = 10;

// Store fetched and shuffled questions here
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
  resetGame(); // Reset game state before starting
  await fetchQuestions();
  loadQuestion(questions[currentQuestionIndex]);
  startTimers();
}

// Load current question and display on UI
function loadQuestion(item) {
  document.getElementById("questionText").innerText = item.question;

  // Shuffle and display answer options
  const questionAnswers = [...item.answers];

  questionAnswers.forEach((answer, index) => {
    const answerBtn = document.getElementById(`ans${index + 1}`);
    answerBtn.innerText = answer;
    answerBtn.onclick = () => handleAnswer(item, answer);
  });
}

// Handle answer selection
function handleAnswer(question, selectedAnswer) {
  const isCorrect = selectedAnswer === question.rightAnswer;
  const messageBox = document.getElementById("messageText");

  let rightAnswerIndex = 0;
  let selectedAnswerIndex = 0;

  for (let i = 0; i < question.answers.length; i++) {
    if (question.answers[i] === question.rightAnswer) {
      rightAnswerIndex = i + 1;
    }

    if (
      question.answers[i] === selectedAnswer &&
      question.answers[i] !== question.rightAnswer
    ) {
      selectedAnswerIndex = i + 1;
    }
  }

  if (isCorrect) {
    score++;
    const selectedRightAnswer = document.getElementById(
      `ans${rightAnswerIndex}`
    );
    selectedRightAnswer.style.backgroundColor = "#C0E4C0";
    setTimeout(() => {
      nextQuestion();
      selectedRightAnswer.style.backgroundColor = "#FFFFFF";
    }, 1000);
  } else {
    lives--;
    const selectedWrongAnswer = document.getElementById(
      `ans${selectedAnswerIndex}`
    );
    selectedWrongAnswer.style.backgroundColor = "#FF9B9B";
    const selectedRightAnswer = document.getElementById(
      `ans${rightAnswerIndex}`
    );
    selectedRightAnswer.style.backgroundColor = "#C0E4C0";
    displayMessage("Correct Answer: ", question.explanation);

    // Update the displayed number of lives
    const livesDisplay = document.querySelector(".numOfLives");
    if (livesDisplay) {
      livesDisplay.innerText = lives;
    }

    // Check if lives are exhausted
    if (lives === 0) {
      // endGame(); // cards pop up related to the user score
      checkNumber();
    } else {
      setTimeout(() => {
        nextQuestion();
        selectedRightAnswer.style.backgroundColor = "#FFFFFF";
        selectedWrongAnswer.style.backgroundColor = "#FFFFFF";
        messageBox.style.display = "none";
      }, 3000);
    }
  }
}

// Move to the next question
function nextQuestion() {
  // Reset question timer to 60 seconds
  questionTimer = 60;
  const timerDisplay = document.getElementById("timer");
  if (timerDisplay) {
    timerDisplay.innerText = questionTimer; // Update the displayed timer immediately
  }

  currentQuestionIndex++;

  // Check if there are more questions
  if (
    currentQuestionIndex < maxQuestions &&
    currentQuestionIndex < questions.length
  ) {
    // Update the question number display
    const quesNumText = document.getElementById("QuesNumText");
    if (quesNumText) {
      quesNumText.innerText = `${currentQuestionIndex + 1}/${maxQuestions}`;
    }

    // Load the next question
    loadQuestion(questions[currentQuestionIndex]);
  } else {
    // End the game if there are no more questions
    // endGame(
    //   `Congratulations! You finished the game with a score of ${score}/${maxQuestions}.`
    // ); // cards pop up related to the user
  }
}

// Display messages for correct/incorrect answers
function displayMessage(title, message) {
  const messageBox = document.getElementById("messageText"); // Get the <p> element
  messageBox.innerHTML = `<span id='messageTitle'>${title}</span> ${message}`; // Set the message text
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
// function endGame(message) {
//   alert(message);
//   // resetGame();
// }

// Reset game variables
function resetGame() {
  lives = 3;
  score = 0;
  currentQuestionIndex = 0;
  hintUsed = false;
}

// Timers for game and questions
function startTimers() {
  let questionTimer = 60; // 1 minute per question

  // Question timer countdown
  const questionInterval = setInterval(() => {
    const timerDisplay = document.getElementById("timer");

    if (questionTimer > 0) {
      questionTimer--;
      if (timerDisplay) {
        timerDisplay.innerText = questionTimer;
      }
    } else {
      lives--;
      displayMessage("Time's up for this question!", "orange");

      if (lives === 0) {
        clearInterval(questionInterval); // Stop the question timer if lives are over
        // endGame("Game Over! You lost all lives.");
      } else {
        questionTimer = 60; // Reset timer for the next question
        nextQuestion();
      }
    }
  }, 1000);
}

const gameOver = document.querySelector(".gameOver");
const usernameTitle = document.querySelector("#usernameTitle");
const usernameSpan = document.querySelector("#usernameTitle span");
const gameOverText = document.querySelector("#gameOverText");
const gameOverTextTwo = document.querySelector("#gameOverTextTwo");
const input = document.getElementById("name");

function checkNumber() {
  gameOver.style.display = "flex";
  const username = localStorage.getItem("username");
  usernameSpan.textContent = username || "Guest";
  gameOverTextTwo.textContent = `${score}/10`;

  switch (score) {
    case 1:
      usernameTitle.textContent = "Tough start,";
      gameOverText.textContent = "Better luck next time. Keep learning!";
      break;
    case 2:
      usernameTitle.textContent = "Nice try,";
      gameOverText.textContent = "There’s still more to discover. Keep going!";
      break;
    case 3:
      usernameTitle.textContent = "Good effort,";
      gameOverText.textContent =
        "Keep challenging yourself, and you’ll get better";
      break;
    case 4:
      usernameTitle.textContent = "Not bad,";
      gameOverText.textContent = "Keep improving and try again!";
      break;
    case 5:
      usernameTitle.textContent = "You're halfway there,";
      gameOverText.textContent =
        "but not enough to win. Better luck next time!";
      break;
    case 6:
      usernameTitle.textContent = "So close,";
      gameOverText.textContent = "Just one more right answer would’ve done it.";
      break;
    case 7:
      usernameTitle.textContent = "Great job,";
      gameOverText.textContent = "You win with 7 correct answers. Well done!";
      break;
    case 8:
      usernameTitle.textContent = "Amazing,";
      gameOverText.textContent = "You win with 8 correct answers. Nice!";
      break;
    case 9:
      usernameTitle.textContent = "Excellent,";
      gameOverText.textContent =
        "You win with 9 correct answers. Almost perfect!";
      break;
    case 10:
      usernameTitle.textContent = "Congratulations,";
      gameOverText.textContent = "You Are The Smartest!";
      gameOverTextTwo.textContent = "You’ve mastered every question perfectly!";
      break;

    default:
      usernameTitle.textContent = "No Luck!";
      gameOverText.textContent = "Better luck next time!";
  }
}

window.onload = startGame;
