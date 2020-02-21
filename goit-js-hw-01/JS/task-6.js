let input;
let total = 0;

while (true) {
  input = prompt("Введите, пожалуйста, число");
  if (input === null) {
    break;
  }
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  input = Number(input);
  total += input;
}

alert(`Общая сумма чисел равна ${total}`);
