/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    for(var i=0,len=nums.length;i<len;i++){
        if(i===0){
            this[i]=nums[i];
        }else{
            this[i]=nums[i]+this[i-1];
        }
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i===0){
        return this[j];
    }else{
        return this[j]-this[i-1];
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */