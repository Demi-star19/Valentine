const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const question = document.getElementById("question");
const yesSound = document.getElementById("yesSound");
const heartsContainer = document.querySelector(".hearts");
const teddyLeft = document.getElementById("teddy-left");
const teddyRight = document.getElementById("teddy-right");

let noCount = 0;

const noTexts = [
  "Are you sure? 😳",
  "Really sure?? 🥺",
  "Please reconsider 💔",
  "I’ll be sad 😭",
  "My heart is breaking 💘",
  "Okay wow… cold 🥲"
];

// Move + shrink NO button
function moveNo() {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${1 - noCount * 0.1})`;

  let yesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = yesSize + 5 + "px";

  if (noCount < noTexts.length) {
    question.textContent = noTexts[noCount];
  }

  noCount++;
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

// YES clicked
yesBtn.addEventListener("click", () => {
  yesSound.currentTime = 0;
  yesSound.volume = 0.5;
  yesSound.play();

  message.textContent = "YAYYYY 💕💍 I knew it!!!";
  question.textContent = "💖 Valentine secured 💖";

teddyLeft.style.display = "block";
teddyRight.style.display = "block"; // SHOW TEDDY
  startHearts();
});


// Hearts animation
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 300);
}
