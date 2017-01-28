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
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    var q1=[],q2=[],ans=[],arr=[],flag=false;
    q1.push(root);
    while(q1.length>0){
        var node=q1.shift();
        arr.push(node.val);
        if(node.left){
            q2.push(node.left);
        }
        if(node.right){
            q2.push(node.right);
        }
        if(q1.length===0){
            if(flag){
                arr=arr.reverse();
            }
            flag=!flag;
            ans.push(arr);
            arr=[];
            q1=q2.concat();
            q2=[];
        }
    }
    return ans;
};