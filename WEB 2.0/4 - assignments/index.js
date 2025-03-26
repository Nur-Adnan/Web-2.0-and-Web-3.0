/*
Write a function `isAnagram` which takes 2 parameters and return true/false if those are anagrams or not.
What is anagram ?
- A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const arr1 = str1.toLowerCase().split("");
  const sortedArray1 = arr1.sort();
  const sortedString1 = sortedArray1.join();

  const arr2 = str2.toLowerCase().split("");
  const sortedArray2 = arr2.sort();
  const sortedString2 = sortedArray2.join();

  if (sortedString1 === sortedString2) {
    return true;
  } else {
    return false;
  }
}

const ans = isAnagram("srap", "rsap");
console.log(ans);

/*
Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
Example: 
- Input: [3, 7, 2, 9, 1]
- Output: 9
*/

function findLargestElement(numbers) {
  let largestElement = numbers[0]; // 3
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestElement) {
      largestElement = numbers[i];
    }
  }
  return largestElement;
}

const largestElement = findLargestElement([3, 7, 2, 9, 1]);
console.log(largestElement);
