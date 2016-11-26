/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  	var len=nums.length,a,b,c,minDiff=2147483647,diff,result;
  	nums.sort(function(a,b){
  		return a-b;
  	});
  	for(var i=0;i<len-2;i++){
  		if(i>0 && nums[i]===nums[i-1]){continue;}
  		a=nums[i];lo=i+1;hi=len-1;
  		while(lo<hi){
  			b=nums[lo];c=nums[hi];
  			sum=a+b+c;
  			if(sum===target){
  				return target;
  			}else{
				diff=Math.abs(sum-target);
	  			if(diff<minDiff){
					minDiff=diff;
					result=sum;
				}
				if(sum<target){
	  				lo++;
	  			}else{
	  				hi--;
	  			}
  			} 
  		}
  	}  
  	return result;
};
var S = [0,2,1,-3],target = 1;
console.log(threeSumClosest(S,target))

