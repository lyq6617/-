function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0 ; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([3, 2, 1]));
console.log(bubbleSort([3, 2, 4, 1]));
console.log(bubbleSort([3, 2, 4, 1]));
