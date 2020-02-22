let message;
let answer = prompt("В какую страну необходима доставка?");
let delivery;
answer = answer.toLowerCase();

switch (answer) {
  case "китай":
    delivery = 100;
    message = `Доставка в Китай будет стоить ${delivery} кредитов`;
    break;
  case "чили":
    delivery = 250;
    message = `Доставка в Чили будет стоить ${delivery} кредитов`;
    break;
  case "австралия":
    delivery = 170;
    message = `Доставка в Австралия будет стоить ${delivery} кредитов`;
    break;
  case "индия":
    delivery = 80;
    message = `Доставка в Индия будет стоить ${delivery} кредитов`;
    break;
  case "ямайка":
    delivery = 120;
    message = `Доставка в Ямайка будет стоить ${delivery} кредитов`;
    break;
  default:
    message = `В вашей стране доставка не доступна`;
}
alert(message);
