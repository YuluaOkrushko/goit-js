const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ul = document.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i++) {
  const liElements = document.createElement("li");
  liElements.textContent = ingredients[i];
  ul.appendChild(liElements);
  console.log(liElements);
}
