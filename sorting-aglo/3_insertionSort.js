// sorting into array comparing with the first to the second value...

function insertionSort(array) {

  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j-1]) {
        const temp = array[j];
        array[j] = array[j-1];
        array[j-1] = temp;
      } else {
        break;
      }
    }
  }

  return array;

}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
