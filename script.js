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