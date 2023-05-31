function twoSum(array, target) {
  const numMap = {};

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];

    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }

    numMap[array[i]] = i;
  }

  return [];
}

// exemple appel :

console.log(twoSum([2, 7, 11, 15], 9));

