const counter = document.querySelector("#value");
let counterValue = counter.textContent;

const increment = function () {
  counterValue++;
  counter.textContent = counterValue;
};

const decrement = function () {
  counterValue--;
  counter.textContent = counterValue;
};

const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);
