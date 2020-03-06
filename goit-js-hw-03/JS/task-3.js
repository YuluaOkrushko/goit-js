const findBestEmployer = function(employers) {
  let bestEmployer = 0;
  let bestEmployerName;
  const keys = Object.keys(employers);
  for (const key of keys) {
    if (employers[key] > bestEmployer) {
      bestEmployer = employers[key];
      bestEmployerName = key;
    }
  }
  return bestEmployerName;
};

console.log(
  findBestEmployer({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
);

console.log(
  findBestEmployer({
    poly: 12,
    mango: 17,
    ajax: 4
  })
);

console.log(
  findBestEmployer({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
);
