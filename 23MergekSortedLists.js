/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var ans=[];
  	for(var i=0,len=lists.length;i<len;i++){
  		while(lists[i]){
  			ans.push(new ListNode(lists[i].val));
  			lists[i]=lists[i].next;	
  		}
  	}  
  	ans.sort(function(a,b){
  		return a.val-b.val;
  	});
  	if(ans.length===0) return [];
  	for(var i=0,len=ans.length;i<len;i++){
  		ans[i].next=ans[i+1];
  	}
  	return ans[0];
};