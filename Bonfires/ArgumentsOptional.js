function add() {
  for (var key in arguments){
    if (typeof arguments[key] != 'number')
      return undefined;
  }
  if (arguments.length === 2)
    return arguments[0]+arguments[1];
  else {
    var arg = arguments[0];
    return function(x){
    for (var key in arguments){
      if (typeof arguments[key] != 'number')
        return undefined;
    }
      return arg + x;};
  }
}

add(2,3);
