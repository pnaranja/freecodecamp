function mutation(arr) {
  //See if arr[0] contains all the characters in arr[1]
    var ret = true;
    var arr0 = arr[0].toLowerCase();
    arr[1].toLowerCase().split('').forEach(function(ch){
        if (arr0.search(ch) == -1)
            ret = false;
        });
        return ret;
}

