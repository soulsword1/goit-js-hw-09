const refs = {
  bodyEl: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', colorChangeStart);
refs.stopBtn.addEventListener('click', colorChangeStop);

let timerId = null;

function colorChangeStart() {
  refs.startBtn.setAttribute('disabled', '');
  timerId = setInterval(changeBodyElColor, 1000);
}

function colorChangeStop() {
  refs.startBtn.removeAttribute('disabled', '');
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyElColor() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
}
