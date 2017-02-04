/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
	var p1=head,tail=null;
	var len=0,i=0;
    while(p1){
    	len++;
    	if(p1.next===null){
    		tail=p1;
    	}
    	p1=p1.next;
    }
    k%=len;
    if(k===0 || head===null) return head;

    k=len-k-1;
    p1=head;
    while(i<k){
    	p1=p1.next;
    	i++;
    }
    var newHead=p1.next;
    p1.next=null;
    tail.next=head;
    return newHead;
};