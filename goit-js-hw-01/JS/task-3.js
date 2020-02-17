const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let password = prompt("Введите, пожалуйста, пароль!");
if (password == null) {
  message = "Отменено пользователем!";
} else if (ADMIN_PASSWORD == password) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
