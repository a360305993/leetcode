/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	var lo=0,hi=nums.length-1,mid=0;
  	while(lo<=hi){
		mid=parseInt((lo+hi)/2);
  		if(nums[mid]===target){
  			return mid;
  		}else if(nums[mid]<target){
  			lo=mid+1;
  		}else{
  			hi=mid-1;
  		}
  	} 
  	return lo;
};
