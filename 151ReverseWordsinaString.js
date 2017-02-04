/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str=str.trim();
    if(!str) return "";
    str=str.replace(/\s+/g," ");
    return str.split(" ").reverse().join(" ");
};