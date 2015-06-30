function palindrome(str) {
  // Good luck!
  return str.replace(/[^A-Za-z]/g, '').toLowerCase() === 
    str.replace(/[^A-Za-z]/g, '').toLowerCase().split('').reverse().toString().replace(/,/g,'');
}

palindrome("eye");
