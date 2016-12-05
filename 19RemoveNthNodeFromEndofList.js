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
    var p1=p2=head;
    for(var i=0;i<n;i++){//p2先行n步
        p2=p2.next;
    }
    if(!p2){//说明删除的是头结点
        head=head.next;
        return head;
    }
    while(p2.next){//p1、p2同时前进，如果p2的下一个结点为空，说明p1的下一个结点即为要删除的结点
        p1=p1.next;
        p2=p2.next;
    }
    p1.next=p1.next.next;
    return head;
    /*var ans=[];
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
  	
  	return ans[0];*/
};