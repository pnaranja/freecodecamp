//Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument.
//
//cid is a 2d array listing available currency.
//
//Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
//
//Otherwise, return change in coin and bills, sorted in highest to lowest order.

function drawer(price, cash, cid) {
  var total_cid = function(){
    var reduced_arr =  cid.reduce(function(prev,curr){
      return new Array('',prev[1]+curr[1]);
    });
    return reduced_arr[1];
  };

  var change = cash - price;

  if (change > total_cid())
    return 'Insufficient Funds';

  if (change === total_cid())
    return 'Closed';

  var denom_value = {'PENNY':.01, 'NICKEL':.05, 'DIME':.10, 'QUARTER':.25, 'ONE':1, 'FIVE':5, 'TEN':10, 'TWENTY':20, 'ONE HUNDRED':100};

  //Find out largest denomination for change
  var greatest_denom = function(){
    if (change<.05) return 'PENNY';
    if (change<.10) return 'NICKEL';
    if (change<.25) return 'DIME';
    if (change<1) return 'QUARTER';
    if (change<5) return 'ONE';
    if (change<10) return 'FIVE';
    if (change<20) return 'TEN';
    if (change<100) return 'TWENTY';
    return 'ONE HUNDRED';
  }();

  //Retrieve the denom array from cid
  var retrieve_denom_array = function(denom){
    var end = 0;
    cid.forEach(function(arr){
      if (denom === arr[0]) end = cid.indexOf(arr);
    });
    return cid.slice(0,end+1).reverse();
  };
 
  //While denomination amt > 0 OR change > 0:
  // - Subtract denomination from change
  // - Subtract denomination from amt of denomination
  // - Create array of ['denom', amt subtracted]
  // **Using trampoline method so stack does not get overloaded**

  var trampoline = function(fn){
    while (fn instanceof Function){
      fn = fn();
    }
    return fn;
  };

  var denom_change = function(denom_arr){
        var denom = denom_arr[0];

        var acc = function(denom_arr, ret_arr){
            if (change === 0 || denom_arr[1] === 0){ 
                console.log(ret_arr);
                return ret_arr;
                
            }
            change = change - denom_value[denom];
            return acc([denom, denom_arr[1]-denom_value[denom]],
                    [ret_arr[0], ret_arr[1]+denom_value[denom]]);
        };
        return trampoline(acc(denom_arr, [denom,0]));
  };


//Main Code
  //If change is still >0: 
  // - Push denom array to return array
  // - Move to the next denomination

  var total_change = [];
  var current_denom = retrieve_denom_array(greatest_denom);
  for (var i = 0; i<current_denom.length && change !== 0; i++){
      total_change.push(denom_change(current_denom[i]));
  }
  
  return total_change;
  //return denom_change(['QUARTER', 4.25]);

}


drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
