const questions = [
  { q: "What is Manitoba’s most popular sport fish?", options: ["Walleye", "Trout", "Catfish"], answer: "Walleye" },
  { q: "Which lake is famous for ice fishing in Manitoba?", options: ["Lake Winnipeg", "Lake Louise", "Lake Ontario"], answer: "Lake Winnipeg" },
  { q: "What bait is commonly used for Walleye?", options: ["Minnows", "Worms", "Crickets"], answer: "Minnows" },
  { q: "Which season is best for Northern Pike fishing?", options: ["Winter", "Spring", "Summer"], answer: "Spring" },
  { q: "What is the provincial fish of Manitoba?", options: ["Walleye", "Salmon", "Bass"], answer: "Walleye" }
];

let currentIndex = 0;
let baitsLeft = 5;
let fishCaught = 0;
let streak = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const startBtn = document.getElementById("start-btn");
const baitsLeftEl = document.getElementById("baits-left");
const fishCaughtEl = document.getElementById("fish-caught");
