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
    var ret = '';
    cid.forEach(function(arr){
      if (denom === arr[0]) ret = arr;
    });
    return ret;
  };
 
  //While denomination amt > 0 OR change > 0:
  // - Subtract denomination from change
  // - Subtract denomination from amt of denomination
  // - Create array of ['denom', amt subtracted]
  var denom_change = function(denom, denom_arr){

    var acc = function(denom_arr, ret_arr){
      if (change === 0 || denom_arr[1] === 0) return ret_arr;
      change=-denom_value[denom];
      return acc([denom_arr[0], denom_arr[1]-denom_value[denom]], 
                 [ret_arr[0], ret_arr[1]+denom_value[denom]]);
    };
    return acc(denom_arr, [denom,0]);
  };

  //If change is still >0: 
  // - Push denom array to return array
  // - Move to the next denomination
}

// Example cash-in-drawer array:
// [['PENNY', 1.01],
// ['NICKEL', 2.05],
// ['DIME', 3.10],
// ['QUARTER', 4.25],
// ['ONE', 90.00],
// ['FIVE', 55.00],
// ['TEN', 20.00],
// ['TWENTY', 60.00],
// ['ONE HUNDRED', 100.00]]

drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
