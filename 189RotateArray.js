/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    rotate1(nums,k)
};
function rotate1(nums,k){
	var arr=nums.splice(nums.length-k,k);
	arr=arr.concat(nums);
	for(var i=0,len=arr.length;i<len;i++){
        nums[i]=arr[i];
    }
}
function rotate2(nums,k){
	var arr=[];
    for(var i=0,len=nums.length;i<len;i++){
        arr[(i+k)%len]=nums[i];
    }
    for(var i=0,len=nums.length;i<len;i++){
        nums[i]=arr[i];
    }
}
function rotate3(nums,k){
    k%=nums.length;
	reverse(nums,0,nums.length-1);
	reverse(nums,0,k-1);
	reverse(nums,k,nums.length-1);
}

function reverse(arr,i,j){
	while(i<j){
		var temp=arr[i];
		arr[i]=arr[j];
		arr[j]=temp;
		i++;
		j--;
	}
}
