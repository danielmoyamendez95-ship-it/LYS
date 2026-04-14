const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const result = document.getElementById("result");
const music = document.getElementById("bg-music");
const catGif = document.getElementById("cat-gif");

// 🎵 música al primer click (evita bloqueo del navegador)
document.addEventListener("click", () => {
    if (music && music.paused) {
        music.play();
    }
}, { once: true });

// 💖 BOTÓN SÍ
yesBtn.addEventListener("click", () => {
    result.innerHTML = "💍 ¡Sabía que dirías que sí porque eres MIA mi bb peshoshaaa! 💖✨";

    // cambia el GIF cuando dice que sí
    catGif.src = "https://media.tenor.com/2roX3uxz_68AAAAC/cat-love.gif";

    document.body.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
});

// 😡 BOTÓN NO (huye)
noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "%";
    noBtn.style.left = Math.random() * 80 + "%";
});
