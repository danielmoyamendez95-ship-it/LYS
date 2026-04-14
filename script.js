const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const music = document.getElementById("bg-music");
const catGif = document.getElementById("cat-gif");
const mainText = document.getElementById("main-text");
const result = document.getElementById("result");

// 🎵 música (v-day real fix)
function playMusic() {
    if (!music) return;

    music.volume = 0.5;
    music.play().catch(() => {});
}

// se activa con cualquier toque
document.body.addEventListener("pointerdown", playMusic, { once: true });


// 💖 SI
yesBtn.addEventListener("click", () => {

    playMusic(); // extra seguridad

    mainText.innerHTML = "💖 ¡Sabía que dirías que sí!";
    result.innerHTML = "💍 Eres mía bb peshoshaaa 💕";

    catGif.src = "https://media.tenor.com/2roX3uxz_68AAAAC/cat-love.gif";

    document.body.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
});


// 😡 NO (se escapa)
noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "%";
    noBtn.style.left = Math.random() * 80 + "%";
});
