// bubble sort algorithm

function bubbleSort(arr: number[]): number[] {
  let noSwaps: boolean;

  for (let i: number = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j: number = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp: number = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      };
    };

    if (noSwaps) break;
  };

  return arr;
}

// favoring modern, TS (& JS) specific syntax

const bubbleSortAlt = (arr: number[]): number[] => {
  let noSwaps: boolean;

  const swap = (arr: number[], idx1: number, idx2: number): void => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i: number = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j: number = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      };
    };

    if (noSwaps) break;
  };

  return arr;
};

console.log(bubbleSort([37, 45, 29, -4, 100, 8, 12, 88, -3]));
console.log(bubbleSortAlt([37, 45, 29, -4, 100, 8, 12, 88, -3]));
