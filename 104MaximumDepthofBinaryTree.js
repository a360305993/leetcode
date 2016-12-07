/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	return bfs(root);
};
function dfs(node){
    var ld=1,rd=1;
    if(!node){return 0;}
    ld=dfs(node.left)+1;
    rd=dfs(node.right)+1;
    return ld>=rd? ld: rd;
    
}
function bfs(node){
    var q1=[],q2=[],depth=0;
    if(!node){return 0;}
    q1.push(node);
    while(q1.length>0){
        var node=q1.shift();
        if(node.left){
            q2.push(node.left);
        }
        if(node.right){
            q2.push(node.right)
        }
        if(q1.length===0){
            q1=q2.concat();
            q2=[];
            depth++;
        }
    }
    return depth;
}