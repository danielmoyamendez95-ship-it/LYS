const music = document.getElementById("bg-music");

// 🔥 desbloqueo real de audio (robusto)
function unlockAudio() {
    if (!music) return;

    music.volume = 0.5;

    // forzar carga
    music.load();

    // intentar reproducir
    const p = music.play();

    if (p !== undefined) {
        p.then(() => {
            console.log("🎵 audio funcionando");
        }).catch(() => {
            console.log("🔒 bloqueado hasta interacción real");
        });
    }

    // evitar múltiples intentos
    document.removeEventListener("pointerdown", unlockAudio);
}

// 🔥 MÁS confiable que "click"
document.addEventListener("pointerdown", unlockAudio);
