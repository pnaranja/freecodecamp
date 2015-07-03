function destroyer(arr){ 
    var new_arr = arr;
    var args = arguments;
    
    for (var i=1; i<=arguments.length-1; i++)
        new_arr = new_arr.filter(function(elem){
            return elem != args[i];
        });
    
    return new_arr;
     }

destroyer([1,2,3,4],4);
destroyer(['a','n','l'],'l');
