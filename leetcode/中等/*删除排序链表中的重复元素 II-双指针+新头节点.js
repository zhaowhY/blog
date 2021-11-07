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
  if (!head) return null;
  const newHead = new ListNode(null, head);
  let point1 = newHead;
  let point2 = head;
  while (point2) {
    let flag = false;
    while (point2.next && point2.val === point2.next.val) {
      point2.next = point2.next.next;
      flag = true;
    }
    if (flag) {
      point1.next = point2.next;
    } else {
      point1 = point1.next;
    }

    point2 = point2.next;
  }
  return newHead.next;
};
// [1,2,5]
console.log(deleteDuplicates({ "val": 1, "next": { "val": 2, "next": { "val": 3, "next": { "val": 3, "next": { "val": 4, "next": { "val": 4, "next": { "val": 5, "next": null } } } } } } }
));