/**
 * {@link https://leetcode-cn.com/problems/reverse-linked-list/}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
  if (!head) return null;
  let root = new ListNode(head.val);
  head = head.next;
  while (head) {
    const node = new ListNode(head.val);
    node.next = root;
    root = node;
    head = head.next;
  }
  return root;
};


console.log(reverseList({ "val": 1, "next": { "val": 2, "next": { "val": 3, "next": { "val": 4, "next": { "val": 5, "next": null } } } } }));