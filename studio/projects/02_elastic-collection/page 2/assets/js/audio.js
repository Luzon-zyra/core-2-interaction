// $(document).ready(function(){
//     $("#flip").click(function(){
//       $("#panel").slideToggle("slow");
//     });
//   });

document.addEventListener("DOMContentLoaded", function() {
  var homeButton = document.querySelector(".box");
  var audio = document.querySelector(".sound");
  var audioSources = [
    "assets/audio/Sniffing - Sound Effect.mp3",
    "assets/audio/sniffing sound.wav",

    // Add more audio sources as needed
  ];
  var isPlaying = false;

  homeButton.addEventListener("click", function() {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
    } else {
      var randomIndex = Math.floor(Math.random() * audioSources.length);
      var selectedAudio = audioSources[randomIndex];
      audio.src = selectedAudio;
      audio.play();
      isPlaying = true;
    }
  });
});

