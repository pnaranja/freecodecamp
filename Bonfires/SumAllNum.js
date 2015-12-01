function sumAll(arr) {
  //sort arr in ascending
  arr=arr.sort(function(a,b){return a-b;});
  
  function summ(a,b,sum){
    if(b-a<2) return sum;
    return summ(a+1,b,sum+a+1);
  }
  return summ(arr[0],arr[1],arr[0]+arr[1]);
}
