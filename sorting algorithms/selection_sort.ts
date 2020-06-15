// selection sort algorithm

function selectionSort(arr: number[]): number[] {
  for (let i: number = 0; i < arr.length; i++) {
    let lowest: number = i;

    for (let j: number = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      };
    };

    if (i !== lowest) {
      let temp: number = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    };
  };

  return arr;
}

// favoring modern, TS (& JS) specific syntax

const selectionSortAlt = (arr: number[]): number[] => {
  const swap = (arr: number[], idx1: number, idx2: number): void => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i: number = 0; i < arr.length; i++) {
    let lowest: number = i;

    for (let j: number = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      };
    };

    if (i !== lowest) {
      swap(arr, i, lowest);
    };
  };

  return arr;
};

console.log(selectionSort([5, 1, 8, 2, 99, 45, 20, 30, 4]));
console.log(selectionSortAlt([5, 1, 8, 2, 99, 45, 20, 30, 4]));
