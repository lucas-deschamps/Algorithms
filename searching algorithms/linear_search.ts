// linear search algorithm; just my little implementation of indexOf using TypeScript
const myIndex = <T>(arr: T[], value: T): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return i;
    };
  };
  return -1;
};

console.log(myIndex<number>([1, 2, 3, 4, 5], 5));
console.log(myIndex<string>(['a', 'b', 'c', 'd', 'e'], 'd'));
