const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(`В списке ${items.length} категории`);

items.forEach((item) => {
  const h2 = item.querySelector("h2");
  const li = item.querySelectorAll("li");
  console.log(`Категория: ${h2.textContent}`);
  console.log(`Количество элементов: ${li.length}`);
});
