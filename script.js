const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const music = document.getElementById("bg-music");
const catGif = document.getElementById("cat-gif");
const mainText = document.getElementById("main-text");
const result = document.getElementById("result");

// 💖 SOLO al click en Sí (esto evita bloqueo 100%)
yesBtn.addEventListener("click", () => {

    if (music) {
        music.volume = 0.5;
        music.play().catch(err => console.log(err));
    }

    mainText.innerHTML = "💖 ¡Sabía que dirías que sí!";
    result.innerHTML = "💍 Eres mía bb peshoshaaa 💕";

    catGif.src = "https://media.tenor.com/2roX3uxz_68AAAAC/cat-love.gif";

    document.body.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
});

// 😡 NO se escapa
noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "%";
    noBtn.style.left = Math.random() * 80 + "%";
});
