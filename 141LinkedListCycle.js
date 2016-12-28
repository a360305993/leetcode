/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var pslow=head,pfast=head;
    while(pfast){
    	pfast=pfast.next;
    	if(pfast===pslow){
    		return true;
    	}
    	if(!pfast){
    		return false;
    	}
    	pfast=pfast.next;
    	pslow=pslow.next;
    }
    return false;
};