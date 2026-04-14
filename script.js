const music = document.getElementById("bg-music");

function playMusic() {
    if (!music) return;

    music.volume = 0.5;

    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("bloqueado hasta interacción");
        });
    }
}

// 🔥 esto es lo más confiable en móviles + PC
document.body.addEventListener("pointerdown", playMusic, { once: true });
