/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry=0;
    for(var i=digits.length-1;i>=0;i--){
        var num=digits[i];
        if(i===digits.length-1){
            digits[i]=(num+1)%10;
            carry=parseInt((num+1)/10);
        }else{
            digits[i]=(num+carry)%10;
            carry=parseInt((num+carry)/10);
        }
    }
    if(carry!=0){
        digits.unshift(carry)
    }
    return digits;
};