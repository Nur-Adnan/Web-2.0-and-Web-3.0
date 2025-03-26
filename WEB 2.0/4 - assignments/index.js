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
