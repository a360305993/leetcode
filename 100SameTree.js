/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
     return bfs(p,q);
};
function bfs(q1,q2){
	var queue1=[],queue2=[];
	queue1.push(q1);
	queue2.push(q2);
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
		queue2.push(node2.left);
		queue2.push(node2.right);
	}
	return true;
}
function inorder(p,q){
	if(!p && !q){
		return true;
	}
	if(!p || !q){
		return false;
	}
	return p.val===q.val &&
		   inorder(p.left,q.left)&&
		   inorder(p.right,q.right);
}
