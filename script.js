const images = document.querySelector(".container"); // fix
const startBtn = document.getElementById("start");   // lowercase to match HTML
const stopBtn = document.getElementById("stop");
const statusText = document.getElementById("status");

let imgs = document.querySelectorAll(".container img");
let index = 0;
let interval = null;
const captions = {
  1: "you are leader 💪",
  2: "you are introvert 😢",
  3: "hyou are extrovert 😁",
  4: "you are emotional 🥹",
  5: "you are inteligent 🧠",
  6: "you are romantic 💞",
  7: "you are spiritual 🛕",
};


function showImage() {
  images.style.transform = `translateX(${-index * 300}px)`; 
}

// Start scrolling
startBtn.addEventListener("click", () => {
  if (interval) return; 
  interval = setInterval(() => {
    index = (index + 1) % imgs.length; 
    showImage();
  }, 200); 
});

// Stop scrolling
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;

  let randomIndex = Math.floor(Math.random() * imgs.length);
  index = randomIndex; 
  showImage();

  if (statusText) {
     statusText.textContent = captions[index + 1];

  }
});
