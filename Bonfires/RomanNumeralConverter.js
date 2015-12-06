/**
 * Characters:
 * "Small"   "Mid"   "Large"   Significant_Digit_Position(SDP)
 * I       V     X       1
 * X       L     C       10
 * C       D     M       100
 * M       M     M       1000
 *     
 * Ranges:
 * Lower = [1,2,3] -> ["Small", "Small"+"Small", "Small"+"Small"+"Small"]
 * "Mid"dle = [4,5,6,7,8] -> ["Small"+"Mid", "Mid", "Mid"+"Small", "Mid"+"Small"+"Small", "Mid"+"Small"+"Small"+"Small"]
 * High = [9] -> ["Mid"+"Large"]
 * 
 * Examples:
 * 23 -> (2 - 10's SDP; Lower), (3 - 1's SDP; Lower) -> XX, III -> XXIII
 * 357 -> (3 - 100's SDP; Lower), (5 - 10's SDP; "Mid"dle) -> (7 - 1's SDP; "Mid"dle) -> CCCLVII
 * 
 */
function convert(num){
    var Characters = {
        ones : {"Small":"I", "Mid":"V", "Large":"X"},
        tens : {"Small":"X", "Mid":"L", "Large":"C"},
        hundreds : {"Small":"C", "Mid":"D", "Large":"M"},
        thousands : {"Small":"M", "Mid":"M", "Large":"M"}};

    var Ranges = {
        1:["Small"], 2:["Small","Small"], 3:["Small","Small","Small"],
        4:["Small","Mid"], 5:["Mid"], 6:["Mid","Small"], 7:["Mid","Small","Small"], 8:["Mid","Small","Small","Small"],
        9:["Mid","Large"]};

    //num -> array of numbers
    var num_array = num.toString().split("").map(x=>Number(x));
    var range_array = num_array.map(num=>Ranges[num]);
    range_array.forEach(x=>console.log(x));

    return num;
}

convert(29);
