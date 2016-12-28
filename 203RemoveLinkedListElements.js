/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while(head && head.val===val){
    	head=head.next;
    }
    if(!head){return head;}
    var p1=head,p2=head.next;
    while(p2){
    	if(p2.val===val){
    		p1.next=p2.next;
    		p2=p1.next;
    	}else{
			p1=p1.next;
    		p2=p2.next;
    	}
    }
    return head;
};