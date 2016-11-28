/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var p,head,node;
    if(!l1 && l2){
        return l2;
    }
    if(!l2 && l1){
        return l1;
    }
    if(!l1 && !l2){
        return [];
    }
	while(l1 || l2){
		if(!l1){//l1 is empty
			node=new ListNode(l2.val);
			l2=l2.next;
		}else if(!l2){//l2 is empty
			node=new ListNode(l1.val);
			l1=l1.next;
		}else if(l1.val<l2.val){//use l1
			node=new ListNode(l1.val);
			l1=l1.next;
		}else{//use l2
			node=new ListNode(l2.val);
			l2=l2.next;
		}
		if(!head){
			head=p=node;
		}else{
		   p.next=node;
		   p=node; 
		}
	}
	return head;
};