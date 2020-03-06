const countProps = function(obj) {
  let total = 0;
  for (const key in obj) {
    total++;
  }
  return total;
};
console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
