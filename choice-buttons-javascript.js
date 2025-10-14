const yesButton = document.querySelector('.Yes-Button');
const noButton = document.querySelector('.No-Button');
const clickSound = new Audio('SAO-Button-Click-Sfx.mp3');
const loadingSound = new Audio('loading-sound.mp3');
const loadingVideo = document.getElementById("loadingVideo");
const page = "./course.html";
const yesOffSrc = 'yes_Off.png';
const yesOnSrc = 'yes_On.png';
const noOffSrc = 'no_Off.png';
const noOnSrc = 'no_On.png';


yesButton.addEventListener('mouseenter', () => {
 const hoverSound = new Audio('SAO-Button-Hover-Sfx.mp3');
 hoverSound.currentTime = 0;
 hoverSound.play();
  yesButton.src = yesOnSrc;
});
yesButton.addEventListener('mouseleave', () => {
  yesButton.src = yesOffSrc;
});
yesButton.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
  clickSound.onended = () => {
    loadingSound.currentTime = 0;      
    loadingVideo.currentTime = 0;
    loadingVideo.style.display = "block";
    loadingSound.play();
    loadingVideo.play();
    loadingSound.onended = () => {
      window.location.href = page;
    };
  };
});



noButton.addEventListener('mouseenter', () => {
  const hoverSound = new Audio('SAO-Button-Hover-Sfx.mp3');
  hoverSound.currentTime = 0;
  hoverSound.play();
  noButton.src = noOnSrc;
});
noButton.addEventListener('mouseleave', () => {
  noButton.src = noOffSrc;
});
noButton.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
  window.close();
   clickSound.onended = () => {
  window.location.href = 'about:blank';
  };
 
});
