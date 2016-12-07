/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var ans=[];
   	if(!root){return [];}
   	bfs(root,ans);
   	return ans;
};
function bfs(root,ans){
	var queue1=[],queue2=[],arr=[];
	queue1.push(root); //头结点入队
	while(queue1.length>0){
		var node=queue1.shift();
		arr.push(node.val);
		if(node.left){
			queue2.push(node.left);
		}
		if(node.right){
			queue2.push(node.right);
		}
		if(queue1.length===0){
			ans.push(arr);//把同一层级的结点放入
			arr=[];
			queue1=queue2.concat();
			queue2=[];
		}
	}
}