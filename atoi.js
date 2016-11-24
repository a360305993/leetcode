/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var MAXVALUE=2147483647;
	var MINVALUE=-MAXVALUE-1;
    var r=parseInt(str);
    r=r?r:0;//NAN to 0
    if(r>MAXVALUE){return MAXVALUE;}
    if(r<MINVALUE){return MINVALUE;}
    return r;
};

console.log(myAtoi(''))









