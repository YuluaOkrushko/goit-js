let message;
let answer = prompt("В какую страну необходима доставка?");
let delivery;
answer = answer[0].toUpperCase() + answer.slice(1).toLowerCase();

switch (answer) {
  case "Китай":
    delivery = 100;
    message = `Доставка в ${answer} будет стоить ${delivery} кредитов`;
    break;
  case "Чили":
    delivery = 250;
    message = `Доставка в ${answer} будет стоить ${delivery} кредитов`;
    break;
  case "Австралия":
    delivery = 170;
    message = `Доставка в ${answer} будет стоить ${delivery} кредитов`;
    break;
  case "Индия":
    delivery = 80;
    message = `Доставка в ${answer} будет стоить ${delivery} кредитов`;
    break;
  case "Ямайка":
    delivery = 120;
    message = `Доставка в ${answer} будет стоить ${delivery} кредитов`;
    break;
  default:
    message = `В вашей стране доставка не доступна`;
}
alert(message);
