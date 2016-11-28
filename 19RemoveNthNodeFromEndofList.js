/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var ans=[];
  	while(head){
  		ans.push(new ListNode(head.val));
  		head=head.next;
  	}
  	var len=ans.length;
  	if(len===1){return [];}
  	ans.splice(-n,1);  
  	
  	for(var i=0;i<len-1;i++){
  	    ans[i].next=ans[i+1];
  	}
  	
  	return ans[0];
};