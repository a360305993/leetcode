/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
//use stack	
	var stack=[];
	for(var i=0,len=s.length;i<len;i++){
		if(s[i]==="(" || s[i]==="[" || s[i]==="{"){
			stack.push(s[i]);
		}else if(s[i]===")" || s[i]==="]" || s[i]==="}"){
			if(s[i]===")" && stack.pop()!=="("){
				return false;
			}else if(s[i]==="]" && stack.pop()!=="["){
				return false;
			}else if(s[i]==="}" && stack.pop()!=="{"){
				return false;
			}
		}
	}
  	if(stack.length>0){
  		return false;
  	}else{
  		return true;
  	}
};
console.log(isValid("()"))