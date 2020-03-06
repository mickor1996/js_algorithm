/*function ListNode(x){
  this.val = x;
  this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    let s = []
    node = head
    while(node){
      s.push(node.val)
      node = node.next
    }
    return s.reverse()

}