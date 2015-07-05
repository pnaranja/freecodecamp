function pairwise(arr, arg) {
  var sum_of_indices;
  var indices_taken =  [];
  
  var already_taken = function(index){
    return indices_taken.some(function(element,index,array)
                              {return element === index;});
  };
  
  var find_pair = function(a,b){
    if(a+b===arg){
      
    }
  };
  
  return arg;
}

pairwise([1,4,2,3,0,5], 7);
