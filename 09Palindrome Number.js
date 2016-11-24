/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	/*x=x.toString(),len=x.length,n=parseInt(len/2);
	for(var i=0;i<n;i++){
		if(x[i]!==x[len-i-1]){
			return false;
		}
	}
	return true;*/
	if(x<0){return false;}
    return x===parseInt(x.toString().split("").reverse().join(""));
};
console.log(isPalindrome(-12321))