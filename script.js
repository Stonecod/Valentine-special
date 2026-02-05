const startBtn = document.getElementById("startBtn");
const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalMessage = document.getElementById("finalMessage");
const music = document.getElementById("bg-music");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  question.classList.remove("hidden");
  music.play();
  startHearts();
});

noBtn.addEventListener("click", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = ""; // remove EVERYTHING
  document.body.style.background =
    "linear-gradient(135deg, #ff758c, #ff7eb3)";
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.color = "#fff";

  const finalDiv = document.createElement("div");
  finalDiv.style.textAlign = "center";
  finalDiv.style.maxWidth = "360px";
  finalDiv.innerHTML = `
    <h2 style="font-size:2.2rem;margin-bottom:15px;">YAYYY 💕🎉</h2>
    <p id="typeText" style="font-size:1.2rem;line-height:1.6;"></p>
  `;

  document.body.appendChild(finalDiv);

  typeMessage(
    "I knew it 😌💖\n\nMahin, you make my days brighter, my smiles wider, and my heart calmer.\n\nHappy Valentine’s Day ❤️"
  );
});

function typeMessage(text) {
  const element = document.getElementById("typeText");
  let index = 0;

  function type() {
    if (index < text.length) {
      element.innerHTML +=
        text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
      index++;
      setTimeout(type, 45);
    }
  }

  type();
}
