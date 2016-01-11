function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line
  
  //Returs True if character is a letter
  function isAlpha(elem){return /[a-zA-Z]/.test(elem);}
  
  //Bind character codes between 65-90 (A-Z) as a circular list
  //Resets character codes past 90 to starting with 65
  function boundUpperCaseCharCode(charCode){return charCode>90 ? charCode-26 : charCode;}
  
  //Moves Letter "13 places" with A-Z as a circular list
  function moveLetter(elem){
    return isAlpha(elem) ? 
      String.fromCharCode(boundUpperCaseCharCode(elem.charCodeAt()+13)) :
      elem;
  }
  
  decodedArr = codeArr.map(moveLetter);

  // Only change code above this line
  return decodedArr.join(""); // Array to String
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
