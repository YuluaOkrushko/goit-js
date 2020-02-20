let credits = 23580;
let pricePerDroid = 3000;
let message;
let answer = prompt("Какое количество дроидов желаете приобрести?");

if (answer == null) {
  message = "Отменено пользователем!";
} else {
  let totalPrice = pricePerDroid * answer;
  if (totalPrice <= credits) {
    message = `Вы купили ${answer} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`;
  } else {
    message = "Недостаточно средств на счету!";
  }
}

console.log(message);
