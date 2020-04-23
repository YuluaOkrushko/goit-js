const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ul = document.querySelector("#ingredients");
let liElements = [];
for (let i = 0; i < ingredients.length; i++) {
  const liElement = document.createElement("li");
  liElement.textContent = ingredients[i];
  liElements.push(liElement);
}
ul.append(...liElements);
