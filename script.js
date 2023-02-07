const modal = document.getElementById("modall");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");
const closee = document.getElementById("closee");

const gameLavel = document.querySelector("#game-lavel");
const btnNew = document.querySelector(".btn--new");
const typingText = document.querySelector("#typing-text");
const score = document.querySelector("#score");
const time = document.querySelector("#time");
const resultText = document.querySelector("#result-text");
const scoreModal = document.querySelector("#scoreModal");
typingText.focus();

const addHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const removeHidden = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
closeBtn.addEventListener("click", () => {
  addHidden();
});
closee.addEventListener("click", () => {
  addHidden();
});

overlay.addEventListener("click", () => {
  addHidden();
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});

let word;
let timer = 10;
let userScore = 0;
let timeScore = 0;
function randomWord() {
  const randomNumber = Math.floor(Math.random() * words.length);
  word = words[randomNumber];
  resultText.textContent = word;
}
randomWord();

typingText.classList.remove("input-centr");
// set interval
setInterval(() => {
  timer--;
  if (timer >= 0) {
    time.textContent = `00:${timer < 10 ? "0" + timer : timer}`;
    if (timer == 0) {
      removeHidden();
      typingText.disabled = true;
      typingText.value = "Time over !";
      typingText.classList.add("input-centr");
      btnNew.classList.remove("btn-none");
      gameLavel.style.display = "none";
    } else if (timer <= 2) {
      time.style.color = "red";
    } else if (timer <= 5) {
      time.style.color = "yellow";
    }
  }
  typingText.addEventListener("input", () => {
    if (typingText.value == word) {
      randomWord();
      timeScore++;
      userScore++;
      score.textContent = userScore;
      scoreModal.textContent = timeScore;
      typingText.value = "";
      if (gameLavel.value == "Easy") {
        timer += 5;
        // gameLavel.value = false;
      } else if (gameLavel.value == "Medium") {
        timer += 3;
      } else if (gameLavel.value == "Hard") {
        timer += 2;
      }
    }
  });
}, 1000);
btnNew.addEventListener("click", () => {
  console.log("barakkalla");
  word;
  timer = 10;
  userScore = 0;
  timeScore = 0;
  randomWord();
  btnNew.classList.add("btn-none");
  gameLavel.style.display = "block";
  typingText.disabled = false;
  typingText.classList.remove("input-centr");
  time.style.color = "white";
  typingText.value = "";
  typingText.focus();
  document.querySelector("#score").textContent = 0;
  document.querySelector("#scoreModal").textContent = 0;
});
