// Variables

let currentQuestionIndex = 0;
let baitsLeft = 5;
let streak = 0;
let fishCaught = 0;
let gameActive = false;

// Questions

const questions = [
  {
    q: "What is Manitoba’s most popular sport fish?",
    options: ["Walleye", "Trout", "Catfish"],
    answer: "Walleye"
  },
  {
    q: "Which lake is famous for ice fishing in Manitoba?",
    options: ["Lake Winnipeg", "Lake Louise", "Lake Ontario"],
    answer: "Lake Winnipeg"
  },
  {
    q: "Best bait for Walleye?",
    options: ["Minnows", "Crickets", "Corn"],
    answer: "Minnows"
  },
  {
    q: "Prime season for Northern Pike?",
    options: ["Winter", "Spring", "Fall"],
    answer: "Spring"
  },
  {
    q: "Provincial fish of Manitoba?",
    options: ["Walleye", "Salmon", "Bass"],
    answer: "Walleye"
  }
];

// Elements

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const exitBtn = document.getElementById("exit-btn");
const baitsLeftEl = document.getElementById("baits-left");
const fishCaughtEl = document.getElementById("fish-caught");

// Event Listeners

startBtn.addEventListener("click", startGame);
if (exitBtn) exitBtn.addEventListener("click", resetGame);

// Function - Start

function startGame() {
  gameActive = true;
  startBtn.style.display = "none";
  if (exitBtn) exitBtn.hidden = true;

  currentQuestionIndex = 0;
  baitsLeft = 5;
  streak = 0;
  fishCaught = 0;

  updateStatus();
  renderQuestion();
}

// Render Question

function renderQuestion() {
  // End conditions
  if (baitsLeft <= 0 || currentQuestionIndex >= questions.length) {
    return endGame(streak >= 2);
  }

  // Show current question
  const q = questions[currentQuestionIndex];
  questionEl.textContent = q.q;

  // Clear old answers
  answersEl.innerHTML = "";

  // Build new answer buttons
  q.options.forEach(option => addAnswerButton(option));
}

// Answer - Function and conditions

function addAnswerButton(label) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.textContent = label;

  // When clicked, evaluate the answer
  btn.addEventListener("click", () => handleAnswer(label));
  
  li.appendChild(btn);
  answersEl.appendChild(li);

}

function handleAnswer(selected) {
  if (!gameActive) return;

  const correct = questions[currentQuestionIndex].answer;

  // Each answer uses up one bait
  baitsLeft--;

  if (selected === correct) {
    streak++;
    fishCaught = streak; // Streak
    alert("Correct! You caught a fish.");

    // Early win if two correct in a row
    if (streak >= 2) {
      return endGame(true);
    }

  } else {
    streak = 0;
    fishCaught = 0;
    alert("Wrong bait. You missed the fish.");
  }

  currentQuestionIndex++;
  updateStatus();

   // End game if out of baits or no more questions
  if (baitsLeft <= 0 || currentQuestionIndex >= questions.length) {
    return endGame(streak >= 2);
  }

  renderQuestion(); 
}

// End function

function endGame(win) {
  gameActive = false;
  answersEl.innerHTML = "";

  if (exitBtn) exitBtn.hidden = false;

  if (win) {
    questionEl.textContent = "You caught a rare fish and WIN the game!";
  } else {
    questionEl.textContent = "You used all your baits without 2 in a row. Game over!";
  }
}

// Reset and Update

function resetGame() {
  gameActive = false;
  startBtn.style.display = "inline-block";
  if (exitBtn) exitBtn.hidden = true;

  questionEl.textContent = "Press \"Start Game\" to begin fishing!";
  answersEl.innerHTML = "";

  baitsLeftEl.textContent = "5";
  fishCaughtEl.textContent = "0";
}

function updateStatus() {
  baitsLeftEl.textContent = baitsLeft;
  fishCaughtEl.textContent = fishCaught;
}

