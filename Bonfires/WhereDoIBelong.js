function where(arr, num) {
    // Find my place in this sorted array.
    // Correctly sort numbers and then filter numbers that are >= num
    // If num is greater than all the numbers in the array, the idx is the array length
      arr = arr.sort(function(a,b){return a-b;});
      idx = arr.filter(function(n){return n>=num;});
      if (idx.length === 0)
        return arr.length;
      else
        return arr.indexOf(idx[0]);
}
