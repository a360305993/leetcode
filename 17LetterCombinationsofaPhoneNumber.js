var result=[],
    hash=[
    	"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"
    ];

function dfs(str,level,digits){
	if(level===digits.length){
		result.push(str);
		return;
	}
	var num=digits[level];
	if(num<=1){
		dfs(str,level,digits);
	}else{
		var s=hash[num];
		for(var i=0,len=s.length;i<len;i++){
			dfs(str+s[i],level+1,digits);
		}
	}
}
var letterCombinations = function(digits) {
	if(digits.length===0){return [];}
    dfs("",0,digits);
    return result;
};
