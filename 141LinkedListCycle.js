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
    while(pslow && pfast){
    	pslow=pslow.next;
    	if(!pfast.next){
    		return false;
    	}
    	pfast=pfast.next.next;
    	if(pfast===pslow){
    		return true;
    	}
    }
    return false;
};