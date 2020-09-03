/*
  Naive string search algorithm.
  First argument is the long string to be provided, whereas the second one is the pattern to be searched for.
  Returns the amount of times the pattern was found in the original string.
*/

const naiveSearch = (long: string, pattern: string): number => {
  let count: number = 0;
  
  for (let i: number = 0; i < long.length; i++) {
    for (let j: number = 0; j < pattern.length; j++) {
      if (pattern[j] !== long[i + j]) break;
      if (j === pattern.length - 1) count++;
    };
  };
  
  return count;
};

console.log(naiveSearch("the raccoon sneaked into the raccard", "racc"));
