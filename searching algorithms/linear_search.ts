type SearchTypes = string | boolean | number;

const myIndex = <T extends SearchTypes>(arr: T[], value: T): number => {
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  };
  return -1;
};


console.log(myIndex<number>([5, 4, 3, 2, 1], 1));
console.log(myIndex<string>(['a', 'b', 'c', 'd', 'e'], 'd'));
console.log(myIndex([false, false, true, false, true], true));
console.log(myIndex<number | string>([5, "4", "3", 2, 1], "4"));
