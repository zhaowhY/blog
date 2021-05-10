/**
 * {@link https://leetcode-cn.com/problems/add-two-numbers/}
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
var addTwoNumbers = function (l1, l2) {
  l1 = l1 || new ListNode(0);
  l2 = l2 || new ListNode(0);
  const result = new ListNode(0);
  let root = result;
  let temp = 0;
  while (true) {
    root.val = (l1.val + l2.val + temp) % 10;

    if (l1.val + l2.val + temp > 9) temp = 1;
    else temp = 0;

    if (!(l1.next || l2.next || temp > 0)) break;
    root.next = new ListNode(0);
    root = root.next;
    l1 = l1.next || new ListNode(0);
    l2 = l2.next || new ListNode(0);
  }
  return result;
};

console.log(addTwoNumbers({ "val": 2, "next": { "val": 4, "next": { "val": 3, "next": null } } }, { "val": 5, "next": { "val": 6, "next": { "val": 4, "next": null } } }));