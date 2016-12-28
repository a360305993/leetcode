/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    var pslow=head;
    var pfast=hasCycle(head);
    if(!pfast){
    	return null;
    }
    while(pfast!==pslow){
    	pfast=pfast.next;
    	pslow=pslow.next;
    }
    return pfast;
};
var hasCycle = function(head) {
    var pslow=head,pfast=head;
    while(pfast && pslow){
    	pslow=pslow.next;
    	if(!pfast.next){
    		return false;
    	}
    	pfast=pfast.next.next;
    	if(pfast===pslow){
    		return pfast;
    	}
    }
    return false;
};