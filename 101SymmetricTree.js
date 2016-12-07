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
var isSymmetric = function(root) {
    if(!root){return true;}
    //return inorder(root.left,root.right);
    return bfs(root.left,root.right)
};
function bfs(p1,p2){
	var queue1=[],queue2=[];
	queue1.push(p1);
	queue2.push(p2);
	while(queue1.length>0 && queue2.length>0){
		var node1=queue1.shift();
		var node2=queue2.shift();
		if(!node1 && !node2){
			continue;
		}
		if(!node1 || !node2){
			return false;
		}
		if(node1.val!==node2.val){
			return false;
		}
		queue1.push(node1.left);
		queue1.push(node1.right);
		queue2.push(node2.right);
		queue2.push(node2.left);
	}
	return true;
}
function inorder(p1,p2){
	if(!p1 && !p2){return true;}
	if(!p1 || !p2){return false;}
	return p1.val===p2.val &&
		   inorder(p1.left,p2.right)&&
		   inorder(p1.right,p2.left);
	/*if(p1 && !p2 || !p1 &&p2){//一个为null，另一个不为null
		return false;
	}
	if(p1 && p2){
		if(p1.val!==p2.val){
			return false;
		}
		if(inorder(p1.left,p2.right)===false){
			return false;
		}
		if(inorder(p1.right,p2.left)===false){
			return false
		}
	}
	return true;*/
}