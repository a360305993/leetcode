/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	nums.sort(function(a,b){
		return a-b;
	});
	var len=nums.length,hash={},hashResult={},result=[];
	for(var i=0;i<len;i++){
		if(!hash[nums[i]]){
			hash[nums[i]]=1;
		}else{
			hash[nums[i]]++;
		}
	}
	for(var i=0;i<len-1;i++){
		if(i>0 && nums[i-1]===nums[i]){//过滤重复元素
			continue;
		}
		var a=nums[i];
		for(j=i+1;j<len;j++){
			if(j>i+1 && nums[j-1]===nums[j]){//过滤重复元素
				continue;
			}
			var b=nums[j];
			var c=0-a-b;
			if(c<b){break;}
			hash[a]--;//防止c和a或者b一样
			hash[b]--;
			if(hash[c] && !hashResult[a+" "+b+" "+c]){
				result.push([a,b,c]);
				hashResult[a+" "+b+" "+c]=true;
			}
			hash[a]++;
			hash[b]++;
		}
	}
	return result;
};
var S = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(S))