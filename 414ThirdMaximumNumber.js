/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var n1=n2=n3=-Number.MAX_VALUE;
    
    for(var i=0,len=nums.length;i<len;i++){
    	if(nums[i]>n1){
    		n3=n2;
    		n2=n1;
    		n1=nums[i];
    	}else if(nums[i]>n2 && nums[i]<n1){
    		n3=n2;
    		n2=nums[i];
    	}else if(nums[i]>n3 && nums[i]<n2){
    		n3=nums[i];
    	}
    }
    return n3===-Number.MAX_VALUE ? n1 :n3;
};