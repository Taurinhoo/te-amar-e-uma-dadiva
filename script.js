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
