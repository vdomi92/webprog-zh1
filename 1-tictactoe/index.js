const task1 = document.querySelector('#task1');
const task2 = document.querySelector('#task2');
const task3 = document.querySelector('#task3');
const task4 = document.querySelector('#task4');

const game = ['XXOO', 'O OX', 'OOO '];
//task 1
let sameLength = true;
let length = game[0].length;
for (let i = 1; i < game.length; i++) {
  if (game[i].length != length) {
    sameLength = false;
  }
}
task1.innerHTML = sameLength ? 'true' : 'false';

//task 2
const chars = game[0].split('');
let isOnlyXO = true;
for (let i = 0; i < chars.length; i++) {
  if (chars[i] != 'X' && chars[i] != 'O') {
    isOnlyXO = false;
  }
}
task2.innerHTML = isOnlyXO ? 'true' : 'false';

//task 3
let counter = 0;
game.map((line) =>
  line.split('').forEach((char) => {
    if (char == 'X' || char == 'O') counter++;
  })
);
task3.innerHTML = counter;

//task 4
let lineIndex = 0;
for (lineIndex; lineIndex < game.length; lineIndex++) {
  const line = game[lineIndex].split('');
  let isThree = false;
  let xCounter = 0;
  let oCounter = 0;
  for (let i = 0; i < line.length; i++) {
    if (line[i] == 'X') {
      xCounter++;
      oCounter = 0;
    } else if (line[i] == 'O') {
      oCounter++;
      xCounter = 0;
    }
    if (xCounter == 3 || oCounter == 3) {
      task4.innerHTML = lineIndex;
    }
  }
}
