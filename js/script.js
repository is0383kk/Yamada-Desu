const audioPlayer = document.getElementById('audioPlayer');

function playAudio(source) {
  audioPlayer.src = source;
  audioPlayer.play();
}