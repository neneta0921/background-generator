const _ = require('lodash');

const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer:', _.without(array, 3));

const body = document.getElementById('gradient');
const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const randomBtn = document.getElementById('random');

function showCurrentColor() {
  document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background + ';';
}

function createRandomColor() {
  let randomColor = '#';
  for (let i = 0; i < 6; i++) {
    randomColor += ((16 * Math.random()) | 0).toString(16);
  }
  return randomColor;
}

function setRandomColor() {
  color1.value = createRandomColor();
  color2.value = createRandomColor();
  showCurrentColor();
}

// EventListener
color1.addEventListener('input', showCurrentColor);
color2.addEventListener('input', showCurrentColor);
randomBtn.addEventListener('click', setRandomColor);

// On Load
showCurrentColor();
