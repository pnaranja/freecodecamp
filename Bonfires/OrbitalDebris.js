function orbitalPeriod(arr) {
  //T =     2pi*sqrt(a^3/GM)
  //a = earthRadius+avgAlt
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  arr.map(function(obj){
    var a = earthRadius+obj.avgAlt;
    delete obj.avgAlt;
    obj.orbitalPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(a,3)/GM));
        
  });

  return arr;
}

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);
