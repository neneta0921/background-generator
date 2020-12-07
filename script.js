const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const css = document.getElementById('css');
const direction = document.getElementsByName('direction');
const fontColor = document.getElementsByName('font-color');
const randomBtn = document.getElementById('random');
const copyBtn = document.getElementById('copy');
const selectBtn = document.getElementById('select');

function showCurrentColor(deg = 'right') {
  let backgroundStyle = `linear-gradient(to ${deg}, ${color1.value}, ${color2.value})`;
  document.body.style.background = backgroundStyle;
  css.value = `${backgroundStyle};`;
}

function createRandomColor() {
  let randomColor = '#';
  for (let i = 0; i < 6; i++) {
    randomColor += ((16 * Math.random()) | 0).toString(16);
  }
  return randomColor;
}

function btnTextChange(btn, msg) {
  const previousMsg = btn.textContent;
  btn.textContent = msg;
  setTimeout(() => {
    btn.textContent = previousMsg;
  }, 1000);
}

function setRandomColor() {
  color1.value = createRandomColor();
  color2.value = createRandomColor();
  btnTextChange(randomBtn, 'Changed!');
  showCurrentColor();
}

function selectCurrentValue() {
  /* Select the text field */
  css.select();
  css.setSelectionRange(0, 99999); /*For mobile devices*/
}

function copyText() {
  selectCurrentValue();

  /* Copy the text inside the text field */
  document.execCommand('copy');

  /* Alert the copied text */
  btnTextChange(copyBtn, 'Copied!');
}

function selectText() {
  selectCurrentValue();
  btnTextChange(selectBtn, 'Selected!');
}

// EventListener
color1.addEventListener('input', showCurrentColor);
color2.addEventListener('input', showCurrentColor);
randomBtn.addEventListener('click', setRandomColor);
copyBtn.addEventListener('click', copyText);
selectBtn.addEventListener('click', selectText);

// change direction
direction.forEach((e) => {
  e.addEventListener('click', () => {
    const deg = document.querySelector('input:checked[name=direction]').value;
    showCurrentColor(deg);
  });
});

// change font color
fontColor.forEach((e) => {
  e.addEventListener('click', () => {
    const color = document.querySelector('input:checked[name=font-color]').value;
    document.body.style.color = color;
  });
});

// On Load
setRandomColor();
