function telephoneCheck(str){

  var re1 = /^1*\ *\d\d\d-\d\d\d-\d\d\d\d$/;
  var re2 = /^1*\ *\(\d\d\d\)\d\d\d-\d\d\d\d$/;
  var re3 = /^1*\ *\(\d\d\d\)\ \d\d\d-\d\d\d\d$/;
  var re4 = /^1*\ *\d\d\d\d\d\d\d\d\d\d$/;
  var re5 = /^1*\ *\d\d\d\ \d\d\d\ \d\d\d\d$/;
  

  return re1.test(str) || re2.test(str) || re3.test(str) || re4.test(str) || re5.test(str);
}
