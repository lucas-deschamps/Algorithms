// helper function expression

const merge = (arr1: number[], arr2: number[]): number[] => {
  const results: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    };
  };

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  };

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  };

  return results;
};

// merge sort function expression

const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  const mid: number = Math.floor(arr.length / 2);
  const left: number[] = mergeSort(arr.slice(0, mid));
  const right: number[] = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([99, 10, 24, 76, 76, 73, 72, 1]));
