/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var lo=0,hi=numbers.length;
    while(lo<hi){
        if(numbers[lo]+numbers[hi]===target){
            return [lo+1,hi+1];
        }else if(numbers[lo]+numbers[hi]<target){
            lo++;
        }else{
            hi--;
        }
    }
};