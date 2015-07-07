function sym() {
  var find_diff = function(arr1,arr2){
    var ar1 =  arr1.filter(function(elem1){
      var ret = true;
      arr2.forEach(function(elem2){
        if (elem1 === elem2)
          ret = false;
      });
      return ret;
    });
    
    var ar2 = arr2.filter(function(elem2){
      var ret = true;
      arr1.forEach(function(elem1){
        if (elem1 === elem2)
          ret = false;
      });
      return ret;
    });
                           
    return ar1.concat(ar2);
  };
  
  var elems = [];
  new Set(Array.prototype.slice.call(arguments).reduce(find_diff)).forEach(function(elem){
    elems.push(elem);
  });
  
  return elems;
  
}

function sym2(){
  var find_diff = function(arr1,arr2){
    var arr = arr1.concat(arr2);
    return arr.filter(function(elem){
      return arr.indexOf(elem) === arr.lastIndexOf(elem);
    });
  };

  var elems = [];
  new Set(Array.prototype.slice.call(arguments).reduce(find_diff)).forEach(function(elem){
    elems.push(elem);
  });
  
  return elems;
  
}

sym([1, 2, 3], [5, 2, 1, 4]);
