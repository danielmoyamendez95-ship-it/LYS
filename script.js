const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const result = document.getElementById("result");
const music = document.getElementById("bg-music");

// 🎵 música al primer click
document.addEventListener("click", () => {
    if (music.paused) {
        music.play();
    }
}, { once: true });

// 💖 SI
yesBtn.addEventListener("click", () => {
    result.innerHTML = "💍 ¡Sabía que dirías que sí! 💖✨";
    document.body.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
});

// 😡 NO se escapa
noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "%";
    noBtn.style.left = Math.random() * 80 + "%";
});
