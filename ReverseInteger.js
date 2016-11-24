/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var MAXVALUE=2147483647;
	var MINVALUE=-MAXVALUE-1;
	var y=0,n;
	while(x!==0){
		n=x%10;
		y=y*10+n;
		x=parseInt(x/10);
	}
	if(y>MAXVALUE || y<MINVALUE){
		return 0;
	}
	return y;
	/*var flag=true;
  	if(x<0){
  		flag=false;
  	}
    x=Math.abs(x).toString();
  	x=x.split("").reverse().join("");
  	x=x-0;
  	if(!flag){
  		x=-x;
  	}
  	if(x>MAXVALUE || x<MINVALUE){
  		return 0;
  	}
  	return x;*/
};
