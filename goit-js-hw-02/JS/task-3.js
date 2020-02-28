const findLongestWord = function(string) {
  let wordsArray = string.split(" ");
  let longestWord = "";
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("May the force be with you"));
