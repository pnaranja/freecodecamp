function titleCase(str) {
//Return the provided string with the first letter of each word capitalized. 
  var newstr = [];
  str.split(' ').forEach(function(word){
    newstr.push(word.toLowerCase().replace(/^[a-z]/, function(letter){return letter.toUpperCase()}));
    })
  return newstr.toString().replace(/,/g,' ');
}

titleCase("I'm a little tea pot");
