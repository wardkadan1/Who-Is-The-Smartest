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
  const response = await fetch("https://6717ca09b910c6a6e029ff64.mockapi.io/project");
  const data = await response.json();
  // Shuffle the questions array
  questions = data.sort(() => Math.random() - 0.5);
  console.log(questions);
}

// Initialize game
async function startGame() {
  resetGame(); // Reset game state before starting
  await fetchQuestions(); 
  console.log(questions[currentQuestionIndex]);
  loadQuestion(questions[currentQuestionIndex]);
  startTimers();
}

// Load current question and display on UI
function loadQuestion(item) {
  document.getElementById("questionText").innerText = item.question;
  
  // Shuffle and display answer options
  const shuffledAnswers = [...item.answers].sort(() => Math.random() - 0.5);
  
  shuffledAnswers.forEach((answer, index) => {
    const answerBtn = document.getElementById(`ans${index + 1}`);
    answerBtn.innerText = answer;
    answerBtn.onclick = () => handleAnswer(item, answer);
  });
}

// Handle answer selection
function handleAnswer(question, selectedAnswer) {
  console.log("handleanswer");
  const isCorrect = selectedAnswer === question.rightAnswer;
  
  if (isCorrect) {
    score++;
    displayMessage("The right answer: ", question.explanation);
    nextQuestion();
  } else {
    lives--;
    displayMessage('Incorrect answer: ', question.explanation);
    
    // Update the displayed number of lives
    const livesDisplay = document.querySelector(".numOfLives");
    if (livesDisplay) {
      livesDisplay.innerText = lives;
    }
    
    // Check if lives are exhausted
    if (lives === 0) {
      endGame("Game Over! You lost all lives.");
    } else {
      nextQuestion();
    }
  }
}

// Move to the next question
function nextQuestion() {
  console.log("nextquestion");

  // Reset question timer to 60 seconds
  questionTimer = 60;
  const timerDisplay = document.getElementById("timer");
  if (timerDisplay) {
    timerDisplay.innerText = questionTimer; // Update the displayed timer immediately
  }

  currentQuestionIndex++;

  // Check if there are more questions
  if (currentQuestionIndex < maxQuestions && currentQuestionIndex < questions.length) {
    // Update the question number display
    const quesNumText = document.getElementById("QuesNumText");
    if (quesNumText) {
      quesNumText.innerText = `${currentQuestionIndex + 1}/${maxQuestions}`;
    }

    // Load the next question
    loadQuestion(questions[currentQuestionIndex]);
  } else {
    // End the game if there are no more questions
    endGame(`Congratulations! You finished the game with a score of ${score}/${maxQuestions}.`);
  }
}

// Display messages for correct/incorrect answers
function displayMessage(title, message) {
  const messageTitle = document.getElementById('messageTitle'); // Get the <span> element for the title
  // messageTitle.innerHTML = title; // Set the title text

  const messageBox = document.getElementById("messageText"); // Get the <p> element
  messageBox.innerText = `${title} ${message}`; // Set the message text
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
        endGame("Game Over! You lost all lives.");
      } else {
        questionTimer = 60; // Reset timer for the next question
        nextQuestion();
      }
    }
  }, 1000);
}

window.onload = startGame;



