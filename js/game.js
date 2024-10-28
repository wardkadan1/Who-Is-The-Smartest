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


// let questions = 
[{
    question: "Which city is considered holy by both Jewish and Muslim people?",
    answers: ["Mecca", "Jerusalem", "Cairo", "Tel Aviv"],
    rightAnswer: "Jerusalem",
    hint: "This city contains the Western Wall and Al-Aqsa Mosque.",
    explanation:
      "Jerusalem is a sacred city for Judaism, housing the Western Wall, a remnant of the Second Temple. For Muslims, it is home to the Al-Aqsa Mosque, which is one of the holiest sites in Islam.",
    category: "History and Religion",
  },
  {
    question:
      "Which prophet is considered the father of both Judaism and Islam?",
    answers: ["Isaac", "Noah", "Abraham", "Moses"],
    rightAnswer: "Abraham",
    hint: "He is the father of both Ishmael and Isaac.",
    explanation:
      "Abraham is a key figure in both religious traditions, recognized as a patriarch. He is regarded as the father of Isaac (the father of the Jewish people) and Ishmael (the father of the Arab people).",
    category: "History and Religion",
  },
  {
    question: "Which religious text is written in Hebrew?",
    answers: ["Torah", "Quran", "The New Testament", "Hadith"],
    rightAnswer: "Torah",
    hint: "This is the foundational text of Judaism.",
    explanation:
      "The Torah is the central reference of the religious Judaic tradition, consisting of the first five books of the Hebrew Bible. It contains laws, teachings, and the history of the Jewish people.",
    category: "History and Religion",
  },
  {
    question:
      "Which religious structure is significant in both Jewish and Islamic worship, located in Jerusalem?",
    answers: [
      "Dome of the Rock",
      "Western Wall",
      "Temple of Solomon",
      "Masada",
    ],
    rightAnswer: "Dome of the Rock",
    hint: "This Islamic shrine has a golden dome.",
    explanation:
      "The Dome of the Rock is an iconic Islamic shrine in Jerusalem that holds great significance in both faiths. It is believed to be the site where the Prophet Muhammad ascended to heaven and is also linked to Jewish traditions.",
    category: "History and Religion",
  },
  {
    question:
      "Which major event in 1948 shaped the modern relationship between Jewish and Arab people?",
    answers: [
      "World War II",
      "Creation of Israel",
      "Camp David Accords",
      "Six-Day War",
    ],
    rightAnswer: "Creation of Israel",
    hint: "This led to the Arab-Israeli conflict.",
    explanation:
      "The creation of Israel in 1948 marked a significant turning point in the history of the Middle East, leading to ongoing tensions and conflicts between Jewish and Arab populations.",
    category: "History and Religion",
  }];

 // Fetch questions from MockAPI and shuffle them 
//  async function fetchQuestions() { 
    // const response = await fetch("https://mockapi.io/endpoint/questions"); 
    // const data = await response.json(); 
 // Shuffle the questions array (not category sort as in api)
 // newQuestionArray = data.sort(() => Math.random() - 0.5);}



