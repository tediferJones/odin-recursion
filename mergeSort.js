function mergeSort(arr) {
  let result = []; // shouldn't over write itself cuz scope
  
  if (arr.length < 2) {
    return arr;
  } else {
    // sort left
    let left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
    // sort right
    let right = mergeSort(arr.slice(Math.floor(arr.length / 2)));
    // console.log(left, right)

    let leftCounter = 0;
    let rightCounter = 0;
    // Merge left and right
    while (result.length < arr.length) {
      let leftElement = left[leftCounter] || Infinity;
      let rightElement = right[rightCounter] || Infinity;
      if (leftElement < rightElement) {
        result.push(leftElement);
        leftCounter++;
      } else if (rightElement < leftElement) {
        result.push(rightElement);
        rightCounter++;
      }
    }
    return result;
  }
}
console.log(mergeSort([6,5,4,3,2,1]));