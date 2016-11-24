/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var MAXVALUE=2147483647;
	var MINVALUE=-MAXVALUE-1;
    var r=parseInt(str);
    if(r>MAXVALUE){return MAXVALUE;}
    if(r<MINVALUE){return MINVALUE;}
    return r;
};










