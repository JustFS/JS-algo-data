// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11].

function pairwise(arr, arg) {

  return arr.reduce(function(acc, num, index, array) {
    for(let i = index+1; i < array.length; i++) {
      if (array[index] + array[i] === arg) {
        acc += index + i;
        // kill the number to not re-use it
        array[index] = array[i] = NaN;
        break;
      }
    }
    return acc;
  }, 0);
}

console.log(pairwise([0, 1, 2, 3, 4, 5], 7));






// console.time
console.time('test');
let test = [];
for (let i = 1; i <= 1000000000000; i++){
  test.push[i];
}
console.timeEnd('test');
