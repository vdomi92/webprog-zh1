const form = document.querySelector('form');
const divContainer = document.querySelector('.container');

const inputList = document.querySelectorAll('input');
const labelList = document.querySelectorAll('label');
//task1

const task1 = () => {
  let M = 0;
  [...inputList].forEach((element) => {
    M += parseInt(element.dataset.consumption);
  });
  return M;
};
console.log(task1());

//task2
const task2 = () => {
  [...inputList].forEach((element) => {
    let ci =
      (element.value / element.max) * parseInt(element.dataset.consumption);
    console.log(ci);
  });
};
task2();

//task3
const task3 = () => {
  [...inputList].forEach((element) => {
    let ci =
      (element.value / element.max) * parseInt(element.dataset.consumption);
    let width = (ci / task1()) * 100;
    const labelRef = document.querySelector(`label[for="${element.id}"`);
    labelRef.style.width = `${width}%`;
  });
};
task3();

//task4
form.addEventListener('change', () => handleSliderChange());
handleSliderChange = () => {
  task1();
  task2();
  task3();
};
