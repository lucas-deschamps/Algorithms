function insertionSort(arr: number[]): number[] {
  for (let i: number = 1; i < arr.length; i++) {
    let currentVal: number = arr[i];
    let j: number = i;

    for (j; j > 0 && arr[j - 1] > currentVal; j--) {
      arr[j] = arr[j - 1];
    };

    arr[j] = currentVal;
  };
  return arr;
}

// another implementation, and favoring modern TS (& JS) syntax

const insertionSortAlt = (arr: number[]): number[] => {
  const swap = (arr: number[], idx1: number, idx2: number): void => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i: number = 1; i < arr.length; i++) {
    let j: number = i;

    while (j > 0 && arr[j-1] > arr[j]) {
      swap(arr, j, j - 1);
      j--;
    };
  };

  return arr;
};

console.log(insertionSort([100, 90, 99, 80, 70, 60, 50, 60, 4, 3, 2, 99, 101, 1]));
console.log(insertionSortAlt([100, 90, 99, 80, 70, 60, 50, 60, 4, 3, 2, 99, 101, 1]));
