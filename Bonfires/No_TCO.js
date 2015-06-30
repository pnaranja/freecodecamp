function factorialize(num) {
  function attr(num, product){
    if (num === 0 || num === 1)
      return product;
    else
      attr(num-1, num*num-1);
  }
  return attr(num,1);
}

factorialize(5);


function factorialize(num) {
 if (num === 0 || num === 1)
      return 1;
  else
    return num * factorialize(num-1);
}

factorialize(5);
