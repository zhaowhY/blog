/**
 * {@link https://leetcode-cn.com/problems/merge-two-sorted-lists/}
 */

/**
 * Definition for singly-linked list.
*/
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const root = new ListNode();
  let temp = root;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    temp = temp.next;
  }

  temp.next = l1 || l2;
  return root.next;
};

console.log(mergeTwoLists(
  { "val": 1, "next": { "val": 2, "next": { "val": 4, "next": null } } },
  { "val": 1, "next": { "val": 3, "next": { "val": 4, "next": null } } }
));