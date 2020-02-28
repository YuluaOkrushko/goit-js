let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введите, пожалуйста, число!");
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  if (input === null) {
    for (const item of numbers) {
      total += Number(item);
    }
    console.log(`Общая сумма чисел равна ${total}`);
    break;
  }
  numbers.push(input);
}
