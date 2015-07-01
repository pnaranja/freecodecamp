//Did more than expected.  Only need to add '...' to the truncated string.
//I added '.' for each character that was truncated

function addperiod(x,periods){
if(x === 0) return periods;
return addperiod(x-1,periods+'.');
}

function truncate(str, num) {
  // Clear out that junk in your trunk
  if(str.length<=num)
    return str;
  
  return str.slice(0,num)+addperiod(num,'.');
}
