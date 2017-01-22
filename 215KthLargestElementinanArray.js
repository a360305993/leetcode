/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if(k<1 || k>nums.length){return;}
    var lo=0,hi=nums.length-1;
    var target=nums.length-k;
    var j=partition(nums,lo,hi);
    while(j!==target){
    	if(j<target){
    		lo=j+1;
    	}else{
			hi=j-1;
    	}
    	j=partition(nums,lo,hi);
    }
    return nums[j];
};
function partition(arr,lo,hi){
	var i=lo,j=hi+1,cmp=arr[lo];
	while(true){
		while(arr[++i]<=cmp){if(i===hi) break;}
		while(arr[--j]>=cmp){if(j===lo) break;}
		if(i>=j){break;}
		else change(arr,i,j);
	}
	change(arr,lo,j);
	return j;
}
function change(arr,i,j){
	var temp=arr[i];
	arr[i]=arr[j];
	arr[j]=temp;
}
console.log(findKthLargest([1,2,3,4,4],2))