function diff(arr1, arr2) {
  var arr_notcontains = function(arr,val){
    return arr.filter(function(elem){return elem===val;}).length===0;
  };
  // Same, same; but different.
  var arr_1 = arr1.filter(function(elem){return arr_notcontains(arr2,elem);});
  var arr_2 = arr2.filter(function(elem){return arr_notcontains(arr1,elem);});
  
  return arr_1.concat(arr_2);
}
