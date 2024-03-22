  // Randomly generate image sources and positions
  const images = [
    'page 2/assets/img/acqua di scandola.png',
    'page 2/assets/img/apple brandy.png',
    'page 2/assets/img/blue gin.png',
    'page 2/assets/img/capri.png',
    'page 2/assets/img/doson.png',
    'page 2/assets/img/eau du memo.png',
    'page 2/assets/img/eau rose.png',
    'page 2/assets/img/eau suave.png',
    'page 2/assets/img/fille en aiguilles.png',
    'page 2/assets/img/for your love.png',
    'page 2/assets/img/histoire d orangers.png',
    'page 2/assets/img/jasmin 17.png',
    'page 2/assets/img/mile high.png',
    'page 2/assets/img/muskara pelargonium.png',
    'page 2/assets/img/oud jaune intense.png',
    'page 2/assets/img/oud wood.png',
    // Add more image URLs as needed
  ];
  
  window.addEventListener('DOMContentLoaded', () => {
    const container = document.body;
    
    images.forEach(imageSrc => {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.classList.add('random-image');
      img.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
      img.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
      container.appendChild(img);
    });
  });

  document.getElementById("hover-word").addEventListener("mouseover", playHoverSound);

  function playHoverSound() {
    var audio = document.getElementById("hover-sound");
    audio.play();
  }