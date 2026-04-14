const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const result = document.getElementById("result");
const music = document.getElementById("bg-music");
const catGif = document.getElementById("cat-gif");
const mainText = document.getElementById("main-text");

// 🎵 activar música con primer click (necesario en GitHub Pages)
document.addEventListener("click", () => {
    if (music && music.paused) {
        music.volume = 0.5;
        music.play().catch(err => console.log("Error audio:", err));
    }
}, { once: true });

// 💖 BOTÓN SÍ
yesBtn.addEventListener("click", () => {
    mainText.innerHTML = "💖 ¡Sabía que dirías que sí!";
    result.innerHTML = "💍 Eres mía bb peshoshaaa 💕";

    // cambiar GIF
    catGif.src = "https://media.tenor.com/2roX3uxz_68AAAAC/cat-love.gif";

    // fondo más romántico
    document.body.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
});

// 😡 BOTÓN NO (se escapa)
noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "%";
    noBtn.style.left = Math.random() * 80 + "%";
});
