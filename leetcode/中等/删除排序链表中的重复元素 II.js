/**
 * {@link https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/}
 */

/**
 Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const newHead = new ListNode();
  newHead.next = head;
  let node = newHead;

  while (node.next && node.next.next) {
    if (node.next.val !== node.next.next.val) {
      node = node.next;
    } else {
      let a = node.next;
      while (a && a.next && a.val === a.next.val) {
        a = a.next;
      }
      node.next = a.next;
    }
  }

  return newHead.next;
};

// [1,2,5]
console.log(deleteDuplicates({ "val": 1, "next": { "val": 2, "next": { "val": 3, "next": { "val": 3, "next": { "val": 4, "next": { "val": 4, "next": { "val": 5, "next": null } } } } } } }
));