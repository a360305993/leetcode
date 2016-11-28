/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	var pos=0;
  	for(var i=0,len=nums.length;i<len-1;i++){
  		if(nums[i]!==nums[i+1]){
  			nums[pos++]=nums[i];
  		}
  	}  
  	return pos;

/*  	for(var i=nums.length-1;i>0;i--){
  		if(nums[i]===nums[i-1]){
  			nums.splice(i,1)
  		}
  	}
  	return nums.length;*/
};

