function bubbleSort(array) {

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      } 
    }
  }
  return array;
}

bubbleSort([1,4,5,8,47,2]);



// easy way
// function bubbleSort(array) {

//   return array.sort((a, b) => {return a - b});

// }