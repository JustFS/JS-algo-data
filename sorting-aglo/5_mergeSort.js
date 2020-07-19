// leftArr and rigthArr are sorted
const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rigthIndex = 0;

  while (leftIndex < leftArr.length && rigthIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rigthIndex];

    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rigthIndex++;
    }
  }

  return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rigthIndex)];
};

// recursive
const mergeSort = array => {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middleIndex);
  const rightArr = array.slice(middleIndex);

  return merge(
    mergeSort(leftArr),
    mergeSort(rightArr)
  );
};

let arr = ([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.log(mergeSort(arr));