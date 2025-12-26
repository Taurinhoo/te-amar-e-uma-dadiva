const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const assistirBtn = document.getElementById('assistirBtn');
const video = document.getElementById('video');
const videoBox = document.getElementById('videoContainer');

let tocando = false;

// Música on/off
musicBtn.onclick = ()=>{
  if(!tocando){
    music.play();
    tocando = true;
    musicBtn.textContent = '🔇 Música';
  }else{
    music.pause();
    tocando = false;
    musicBtn.textContent = '🎵 Música';
  }
};

// Assistir
assistirBtn.onclick = ()=>{
  videoBox.style.display = 'block';
  video.play();
  if(video.requestFullscreen){
    video.requestFullscreen();
  }
};

// ================================
// CONTROLE DO VÍDEO (FINAL)
// ================================

const assistirBtn = document.getElementById("assistirBtn");
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");

// Abrir vídeo ao clicar
assistirBtn.addEventListener("click", () => {
  videoContainer.style.display = "flex";
  video.currentTime = 0;
  video.play();

  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
});

// Função para fechar o vídeo
function fecharVideo() {
  video.pause();
  video.currentTime = 0;
  videoContainer.style.display = "none";
}

// Quando o vídeo acabar
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
    fecharVideo();
  }
});


