/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var k=0;
  	for(var i=0,len=nums.length;i<len;i++){
  	    if(nums[i]!==val){
  	        nums[k++]=nums[i]
  	    }
  	}
  	return k;
	/*for(var i=nums.length;i>=0;i--)
   		if(nums[i]===val){
   			nums.splice(i,1)
   		}
   	}
   	return nums.length;	*/
};