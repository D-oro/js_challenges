// given an array of integers, write a function that counts the frequency of each integer and returns the number of each. 

const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const counts = {};

for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts);
// { '2': 5, '4': 1, '5': 3, '9': 1 }

console.log(counts[5], counts[2], counts[9], counts[4]);
// 3 5 1 1
