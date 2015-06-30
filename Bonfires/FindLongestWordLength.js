function findLongestWord(str) {
  var longest = 0;
  str.split(' ').forEach(function(word){
    longest = word.length  > longest ? word.length : longest;
  });
  return longest;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
