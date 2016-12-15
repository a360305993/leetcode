/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var preNum,firstTime;
var isValidBST = function(root) {
    preNum=0;
    firstTime=true;
    var min=Number.MIN_VALUE,max=Number.MAX_VALUE;
    return isBST(root,min,max);
    //return inOrder(root);
};
function inOrder(root){//use inorder
	if(root){
		if(!inOrder(root.left)){return false;}
		if(!firstTime && root.val<=preNum){
			return false;
		}
		firstTime=false;
		preNum=root.val;
		if(!inOrder(root.right)){return false;}
	}
	return true;
}
function isBST(root,min,max){
	if(root){
		if(root<=min || root>=max){
			return false;
		}
		return isBST(root.left,min,root.val) && isBST(root.right,root.val,max);
	}
	return true;
}