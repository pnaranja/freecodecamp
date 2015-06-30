function largestOfFour(arr) {
  //Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. 
  return arr.map(function(ar){
    return ar.sort(function(a,b){return a-b;}).reverse()[0];
    });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
