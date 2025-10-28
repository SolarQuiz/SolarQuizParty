let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let timer = null;
let timeLeft = 30;
let funFactLocked = false;
let currentRoomCode = null;
let isHost = false;

const menu = document.getElementById('menu');
const playBtn = document.getElementById('join-btn');
const aboutBtn = document.getElementById('about-btn');
const questBtn = document.getElementById('create-btn');
const aboutSection = document.getElementById('about');
const backFromAbout = document.getElementById('back-from-about');
const quizContainer = document.getElementById('quiz-container');
const timerEl = document.getElementById('timer');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.querySelector('.skip');
const funFactEl = document.getElementById('fun-fact');
const resultsContainer = document.getElementById('results-container');
const finalScoreEl = document.getElementById('final-score');
const totalQuestionsResults = document.getElementById('total-questions-results');
const resultMessage = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const quest15 = document.getElementById("1-5");
const quest67 = document.getElementById("6-7");
const quest89 = document.getElementById("8-9");

const backFromMenuJoin = document.getElementById("back-to-menu-from-join");
const joinRoomSection = document.getElementById("join-room-section");
const roomCodeSection = document.getElementById("room-code-section");
const roomCodeSectionWS = document.getElementById("room-code-section-WS");
const errMsg = document.getElementById('join-error-msg');

const creatorNameInput = document.getElementById('creator-player-name');
const maxPlayersInput = document.getElementById('creator-max-players');
const numQuestionsInput = document.getElementById('creator-num-questions');

const countdownElement = document.getElementById('starting-countdown');
const timerSpan = document.getElementById('countdown-timer');

const debugMenu = document.getElementById('debug-menu');

let Correct = new Audio('assets/audio/Correct.mp3');
let Incorrect = new Audio('assets/audio/Incorrect.mp3');
let Tap = new Audio('assets/audio/Tap.mp3');

let selectedNumQuestions = 10;
let selectedQuestions = Array.isArray(window.questionsArray) ? window.questionsArray.slice(0, selectedNumQuestions) : [];

function getQuestionsByCount(count) {
  try {
    const key = 'questions' + String(count);
    const arr = eval(key);
    if (Array.isArray(arr) && arr.length) return arr;
  } catch (e) {}
  if (Array.isArray(window.questionsArray)) return window.questionsArray.slice(0, count);
  return [];
}