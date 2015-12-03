/**
 * Characters:
 * Small   Mid   Large   Significant_Digit_Position(SDP)
 * I       V     X       1
 * X       L     C       10
 * C       D     M       100
 * M       M     M       1000
 *     
 * Ranges:
 * Lower = [1,2,3] -> [Small, Small+Small, Small+Small+Small]
 * Middle = [4,5,6,7,8] -> [Small+Mid, Mid, Mid+Small, Mid+Small+Small, Mid+Small+Small+Small]
 * High = [9] -> [Mid+Large]
 * 
 * Examples:
 * 23 -> (2 - 10's SDP; Lower), (3 - 1's SDP; Lower) -> XX, III -> XXIII
 * 357 -> (3 - 100's SDP; Lower), (5 - 10's SDP; Middle) -> (7 - 1's SDP; Middle) -> CCCLVII
 * 
 */
function convert(num){
    return num;
}
