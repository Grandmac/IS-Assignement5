let balloon = document.getElementById('balloon');
let currentSize = 30;

document.addEventListener("keydown", checkKey);

function checkKey(event) {
  if (event.keyCode === 107) {
    increaseSize();
  } else if (event.keyCode === 109) {
    decreaseSize();
  }
}

function removeListener() {
  document.removeEventListener("keydown", checkKey);
}

function increaseSize() {
  currentSize += 15;
  setBalloonSize(currentSize);

  if (currentSize >= 60) {
    replaceBalloon("💥");
    removeListener();
  }
}

function decreaseSize() {
  currentSize -= 15;
  setBalloonSize(currentSize);

  if (currentSize <= 0) {
    replaceBalloon("Done");
    setBalloonSize(30);
    removeListener();
  }
}

function replaceBalloon(text) {
  balloon.innerText = text;
}

function setBalloonSize(size) {
  balloon.style.fontSize = size + 'px';
}