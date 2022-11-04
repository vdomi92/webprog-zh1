const inputCircleNumber = document.querySelector('#circle-number');
const buttonStart = document.querySelector('#start');
const divContainer = document.querySelector('#container');
const divOutput = document.querySelector('#output');

// Application state

let canGuess = false;
let solution = [];
let series = [];

// ========= Utility functions =========

function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function toggleHighlight(node) {
  node.classList.toggle('highlight');
  node.addEventListener(
    'animationend',
    function (e) {
      node.classList.remove('highlight');
    },
    { once: true }
  );
}

// =====================================

buttonStart.addEventListener('click', () => onStartBtnClick());
const onStartBtnClick = () => {
  solution = [];
  canGuess = false;
  let num = inputCircleNumber.value;
  divContainer.innerHTML = '';
  for (let i = 0; i < num; i++) {
    divContainer.innerHTML += `<a class='circle'></a>`;
  }
  const circleRefs = document.querySelectorAll('a');
  circleRefArray = [...circleRefs];
  fillSeriesWithRandomNumbers(num);
  divOutput.innerHTML = 'Flashing circles...';
  toggleHighLightArray(0, circleRefArray);

  //solution for task c.:
  //toggleHighlight(circleRefArray[0]);
  resultCheckEvent();
};

const fillSeriesWithRandomNumbers = (limitMax) => {
  for (let i = 0; i < limitMax; i++) {
    series[i] = Math.floor(Math.random() * limitMax) + 1;
  }
  console.log(series);
};

const toggleHighLightArray = (currentIndex, circleRefArray) => {
  if (currentIndex == series.length) {
    divOutput.innerHTML = 'Now your turn...';
    canGuess = true;
    return;
  }
  toggleHighlight(circleRefArray[series[currentIndex] - 1]);
  setTimeout(() => {
    toggleHighLightArray(currentIndex + 1, circleRefArray);
  }, 1000);
};

const resultCheckEvent = () =>
  divContainer.addEventListener('click', function (e) {
    if (!e.target.matches('a') || !canGuess) {
      return;
    }
    let index = Array.prototype.indexOf.call(this.children, e.target);
    let newLen = solution.push(index + 1);
    console.log('Solution: ' + solution);
    console.log('kangessz:' + canGuess);
    if (newLen == series.length) {
      let isGoodAnswer = true;
      for (let i = 0; i < series.length; i++) {
        if (series[i] != solution[i]) {
          isGoodAnswer = false;
        }
      }
      console.log('Result: ' + isGoodAnswer);
      divOutput.innerHTML = isGoodAnswer ? 'Nice job!' : 'Failed!';
    }
  });
