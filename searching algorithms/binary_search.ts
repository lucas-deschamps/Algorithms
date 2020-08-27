// binary search implementation; it returns the element's (elem's) index given a number array

const binarySearch = (arr: number[], elem: number): number => {
  let start: number = 0;
  let end: number = arr.length - 1;
  let middle: number = Math.floor((start + end) / 2);
  
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  };
  return (arr[middle] === elem) ? middle : -1;
}

console.log(binarySearch([1, 3, 4, 6, 7, 8, 11, 13, 15, 18], 15));
