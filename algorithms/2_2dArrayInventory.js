function updateInventory(arr1, arr2) {
  const obj1 = arr1.reduce((acc, [amount, name]) => ({
    ...acc,
    [name]: amount
  }), {});

  const obj2 = arr2.reduce((acc, [amount, name]) => ({
    ...acc,
    [name]: amount
  }), {});

  for (const name in obj2) {
    if (name in obj1){
      obj1[name] += obj2[name];
    } else {
      obj1[name] = obj2[name];
    }
  }

  const output = [];
  for (const name in obj1){
    output.push([obj1[name], name])
  }

  return output.sort((arr1, arr2) => arr1[1].localeCompare(arr2[1]));
}


// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
