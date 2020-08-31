// helper function expression

const pivot = (arr: number[], start: number = 0, end: number = arr.length - 1): number => {
  const swap = (arr: number[], idx1: number, idx2: number): void => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  // assumption that the pivot is always the first element
  const pivot: number = arr[start];
  let swapIdx: number = start;

  for (let i: number = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    };
  };
  
  swap(arr, start, swapIdx);
  
  return swapIdx;
};

// quick sort function expression

const quickSort = (arr: number[], left: number = 0, right: number = arr.length -1): number[] => {
  if (left < right) {
    let pivotIndex: number = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  };
  
  return arr;
};
           
console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 24, 7, 10]));
