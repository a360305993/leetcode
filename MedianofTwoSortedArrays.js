/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums3=nums1.concat(nums2);
    nums3.sort(function(a,b){
    	return a-b;
    })
	v/*ar nums3=[],
		len1=nums1.length,len2=nums2.length,
		len=len1+len2,
		k=j=0;
	for(var i=0;i<len;i++){
		if(k>=len1){//左边用完，取右边
			nums3[i]=nums2[j++];
		}else if(j>=len2){
			nums3[i]=nums1[k++];
		}else if(nums2[j]<nums1[k]){
			nums3[i]=nums2[j++];
		}else{
			nums3[i]=nums1[k++];
		}
	}*/
    var mid=Math.floor(nums3.length/2);
    if(nums3.length%2==0){//偶数
    	return (nums3[mid]+nums3[mid-1])/2;
    }else{
    	return nums3[mid];
    }
};
console.log(findMedianSortedArrays([1,2],[3,4]))