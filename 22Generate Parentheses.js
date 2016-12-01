/**
 * @param {number} n
 * @return {string[]}
 */
/*var result=[];
var generateParenthesis = function(n) {
	if(n===0){return [];}
    dfs("(",1,n*2);
	return result;
};
function dfs(str,level,n){
	if(level===n){
		valid(str) && result.push(str);
	}else{
		dfs(str+"(",level+1,n);
		dfs(str+")",level+1,n);
	}
}
function valid(str){
	var stack=[];
	for(var i=0,len=str.length;i<len;i++){
		if(str[i]==="("){
			stack.push(str[i]);
		}else if(str[i]===")"){
			if(stack.pop()!=="("){
				return false;
			}
		}
	}
	return stack.length===0;
}*/
var generateParenthesis = function(n) {
	var result=[];
	if(n===0){return [];}
    dfs("(",1,0,n,result);
	return result;
};
function dfs(str,left,right,n,result){
	if(left===n && right===n){
		result.push(str);
		return;
	}
	if(left<n){
		dfs(str+"(",left+1,right,n,result)
	}
	if(right<n && left>right){
		dfs(str+")",left,right+1,n,result)
	}
}
