let noClickCount = 0;
let yesButtonSize = 18; // Default font size for 'Yes' button

function handleNoClick() {
  moveNoButton();
  increaseYesButtonSize();
  noClickCount++;
  if (noClickCount >= 2 && noClickCount <= 4) {
    showSadGif();
  }
}

function moveNoButton() {
  const noButton = document.getElementById("no");
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

function increaseYesButtonSize() {
  const yesButton = document.getElementById("yes");
  if (yesButtonSize < 30) {
    // Limit the maximum size
    yesButtonSize += 2;
    yesButton.style.fontSize = `${yesButtonSize}px`;
    yesButton.style.padding = "20px 40px";
  }
}

function showSadGif() {
  const gifContainer = document.getElementById("gif-container");
  const sadGifs = [
    "https://media.giphy.com/media/1BXa2alBjrCXC/giphy.gif",
    "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif",
    "https://media.giphy.com/media/8YutMatqkTfSE/giphy.gif",
  ];

  const img = document.createElement("img");
  img.src = sadGifs[Math.floor(Math.random() * sadGifs.length)];
  img.style.position = "absolute";
  img.style.width = "100px";
  img.style.height = "100px";

  const maxX = window.innerWidth - 120;
  const maxY = window.innerHeight - 150;
  img.style.left = `${Math.random() * maxX}px`;
  img.style.top = `${Math.random() * maxY}px`;

  gifContainer.appendChild(img);
}
