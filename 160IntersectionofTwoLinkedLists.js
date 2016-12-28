/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    return useStack(headA,headB);
    //return useAhead(headA,headB)
};
function useStack(headA, headB){
	var stack1=[],stack2=[];
	var ans=null;
	while(headA){
		stack1.push(headA);
		headA=headA.next;
	}
	while(headB){
		stack2.push(headB);
		headB=headB.next;
	}
	while(stack1.length>0 && stack2.length>0){
		var node=stack1.pop();
		if(node.val===stack2.pop().val){
			ans=node;
		}
	}
	return ans;
}
function  useAhead(headA, headB){
	var n1=0,n2=0;
	var pshort=headA,plong=headB;
	while(pshort){
		pshort=pshort.next;
		n1++;
	}
	while(plong){
		plong=plong.next;
		n2++;
	}
	if(n1<=n2){
		pshort=headA;
		plong=headB;
	}else{
		pshort=headB;
		plong=headA;
	}
	var step=Math.abs(n1-n2);
	for(var i=0;i<step;i++){
		plong=plong.next;
	}
	while(pshort){
		if(pshort.val===plong.val){
			return pshort;
		}
		pshort=pshort.next;
		plong=plong.next;
	}
	return null;
}