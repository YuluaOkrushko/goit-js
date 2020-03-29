class Storage {
  constructor(store) {
    this.items = store;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    const arrayPosition = this.items.indexOf(item);
    if (arrayPosition !== -1) {
      this.items.splice(arrayPosition, 1);
    }
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);

const items = storage.getItems();
console.table(items);

storage.addItem("Дроид");
console.table(storage.items);

storage.removeItem("Пролонгер");
console.table(storage.items);
