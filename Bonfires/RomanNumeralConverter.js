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
    var Characters = {
        {1SDP : {{Small:"I"}, {Mid:"V"}, {Large:"X"}}
        {100SDP : {{Small:"X"}, {Mid:"L"}, {Large:"C"}}
        {100SDP : {{Small:"C"}, {Mid:"D"}, {Large:"M"}}
        {1000SDP : {{Small:"M"}, {Mid:"M"}, {Large:"M"}}};

    var Ranges = {
        {1:[Small]}, {2:[Small,Small]}, {3:[Small,Small,Small]}
        {4:[Small,Mid]}, {5:[Mid]}, {6:[Mid,Small]}, {7:[Mid,Small,Small]}, {8:[Mid,Small,Small,Small]}
        {9:[Mid,Large]}};

    //num -> array of numbers
    let num_array = num.toString().split("").map(x=>Number(x))

    return num;
}
