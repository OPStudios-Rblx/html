const homeButton = document.getElementById("exit-button");
const buttons = document.querySelectorAll(".button");
const clickSound = new Audio('SAO-Button-Click-Sfx.mp3');

function setupButton(button) {
  const offSrc = button.getAttribute('src');          // e.g. "Course_Off.png"
  const onSrc = offSrc.replace('_Off', '_On');        // e.g. "Course_On.png"

  // If it's the home button, go to index.html
  const page = button.id === "exit-button"
    ? "index.html"
    : onSrc.replace('_On.png', '.html');              // e.g. "Course.html"

  // Hover
  button.addEventListener('mouseenter', () => {
    const hoverSound = new Audio('SAO-Button-Hover-Sfx.mp3');
    hoverSound.currentTime = 0;
    hoverSound.play();
    button.src = onSrc;
  });

  // Leave
  button.addEventListener('mouseleave', () => {
    button.src = offSrc;
  });

  // Click
  button.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();

    clickSound.onended = () => {
      window.location.href = page;
    };
  });
}

// Set up the home button and all others
setupButton(homeButton);
buttons.forEach(button => setupButton(button));
