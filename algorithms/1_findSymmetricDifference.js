// symetric difference of 2 arrays
const symOfTwo = (arr1, arr2) => {
  const output = [];
  for (const element of arr1){
    if (!output.includes(element) && !arr2.includes(element)){
      output.push(element);
    }
  }
  for (const element of arr2){
    if (!output.includes(element) && !arr1.includes(element)){
      output.push(element);
    }
  }

  return output;
};

function sym() {
  const arrOfArrs = [...arguments];
  let output = arrOfArrs[0];
  for (let i=1; i < arrOfArrs.length; i++){
    output = symOfTwo(output, arrOfArrs[i]);
  }

  return output.sort((a, b) => a - b);
}

sym([1, 2, 3], [5, 2, 1, 4]);
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
