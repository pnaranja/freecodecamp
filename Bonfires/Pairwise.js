function pairwise(arr, arg) {
  var indices_obj = {}; //{ [array of found values] : sum }
  var sum = 0;
  var indices_taken =  [];
  
  var already_taken = function(idx){
    return indices_taken.some(function(element,index,array)
                              {return element === idx;});
  };

  for (var i=0;i<arr.length-2;i++)
    for(var j=1;j<arr.length-1;j++){
      if( (!already_taken(i) && !already_taken(j)) && (i!=j) && (arr[i]+arr[j]===arg) ){
        indices_taken.push(i);
        indices_taken.push(j);
        sum += i + j;
      }
    }
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
