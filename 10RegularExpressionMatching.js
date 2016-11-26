/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
	var pattern="^"+p+"$";
	var re=new RegExp(pattern);
	return re.test(s);
};
