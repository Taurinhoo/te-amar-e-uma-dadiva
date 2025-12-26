// ================================
// MÚSICA DE FUNDO
// ================================

const musica = document.getElementById("bgMusic");

// tentar tocar automaticamente
window.addEventListener("load", () => {
  musica.volume = 0.4;
  musica.play().catch(() => {
    // autoplay pode ser bloqueado, então toca após interação
    document.body.addEventListener("click", () => {
      musica.play();
    }, { once: true });
  });
});

// ================================
// CONTROLE DO VÍDEO
// ================================

const assistirBtn = document.getElementById("assistirBtn");
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");

// Abrir vídeo
assistirBtn.addEventListener("click", () => {
  musica.pause(); // para música
  videoContainer.style.display = "flex";
  video.currentTime = 0;
  video.play();

  // Tela cheia
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
});

// Função fechar vídeo
function fecharVideo() {
  video.pause();
  video.currentTime = 0;
  videoContainer.style.display = "none";

  // volta música
  musica.play().catch(() => {});
}

// Quando o vídeo terminar
video.addEventListener("ended", fecharVideo);

// Quando sair do fullscreen
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    fecharVideo();
  }
});

// Quando trocar de aba
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    musica.pause();
  } else {
    musica.play().catch(() => {});
  }
});
