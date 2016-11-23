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
 function ListNode(val){
 	this.val=val;
 	this.next=null;
 }
 function create(arr){
 	var head,temp,node;
 	for(var i=0;i<arr.length;i++){
 		node=new ListNode(arr[i]);
 		if(!head){
 			head=temp=node;
 		}else{
 			temp.next=node;
 			temp=node;
 		}
 		
 	}
 	return head;
 }
var addTwoNumbers = function(l1, l2) {
    var head,temp,value;
	var carry=0;
	while(l1 || l2){
		if(l1 &&l2){
		    value=l1.val+l2.val;
			l1=l1.next;
			l2=l2.next;
		}else if(l1){
			value=l1.val;
			l1=l1.next;
		}else{
			value=l2.val;
			l2=l2.next;
		}
		value+=carry;
		carry=Math.floor(value/10);
		var node=new ListNode(value%10);
		if(!head){
			head=temp=node;
		}else{
			temp.next=node;
			temp=node;
		}
			
	}
	if(carry>0){
		var node=new ListNode(carry)
		temp.next=node;
		temp=node;
	}
	return head;
};

var l1=create([0]);
 var l2=create([0]);
 console.log(l1);
 console.log(l2)
 var l3=addTwoNumbers(l1,l2)
 console.log(l3)